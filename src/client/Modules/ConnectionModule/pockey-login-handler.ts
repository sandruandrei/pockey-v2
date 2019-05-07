/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/14/2018
 */
import {PockeySignalTypes} from "../SignalsModule/pockey-signal-types";
import {SignalsManager} from "../../qFramework/Signals/signals-manager";
import {Settings} from "../../qFramework/Settings";
import {PockeySettings} from "../../pockey-settings";
import {LoginHandler} from "../../qFramework/AbstractModules/Connection/login-handler";
import {readCookie, writeCookie} from "../../qFramework/Utils/cookie";
import * as _ from "lodash";
import {DatabaseConnector} from "../../qFramework/AbstractModules/Connection/database-connector";
import {PockeyPlayerManager} from "../GameModule/pockey-player-manager";
import {PockeyPlayerData} from "../../../common/pockey-player-data";
import {SignalsType} from "../../qFramework/Signals/signal-types";

export class PockeyLoginHandler extends LoginHandler {

    constructor() {
        super();

        SignalsManager.AddSignalCallback(PockeySignalTypes.FACEBOOK_SIGN_IN, this.onFbLogin.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.GOOGLE_SIGN_IN, this.onGoogleLogin.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onLogout.bind(this));
    }

    private onLogout(): void {
        console.log("pockey login handler onFbLogin");
        Settings.playerSignedIn = false;
        this.resetUserData();
        this.onCheckCookieData();
    }

    private resetUserData(): void {

        PockeyPlayerManager.Instance().player.data.user_id = "guest";
        PockeyPlayerManager.Instance().player.data.color = PockeySettings.SMALL_COLORS_ARRAY[0].id;

        PockeyPlayerManager.Instance().player.data.decal = PockeySettings.SMALL_DECALS_ARRAY[0].id;
        SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [PockeyPlayerManager.Instance().player.data.decal]);
        console.log("de aici se trimite salam decal");

        PockeyPlayerManager.Instance().player.data.stick = PockeySettings.SMALL_CUES_ARRAY[0].id;
        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [PockeyPlayerManager.Instance().player.data.stick]);

        PockeyPlayerManager.Instance().player.data.felt = PockeySettings.SMALL_MISC_ARRAY[0].id;
        SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [PockeyPlayerManager.Instance().player.data.felt]);

        PockeyPlayerManager.Instance().player.data.player_level = 1;

        DatabaseConnector.updateServerPlayer(PockeyPlayerManager.Instance().player.data);
        // if (!PockeyPlayerManager.Instance().player.data.player_level != PockeySettings.SMALL_MISC_ARRAY[0].id) {
        //     PockeyPlayerManager.Instance().player.data.felt = PockeySettings.SMALL_MISC_ARRAY[0].id;
        //     SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [PockeyPlayerManager.Instance().player.data.felt]);
        //     dataChanged = true;
        // }

        // if (dataChanged) {
        //     SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
        // }
    }

    private onFbLogin(): void {
        console.log("pockey login handler onFbLogin");
        this.onCheckCookieData();
    }

    private onGoogleLogin(): void {
        console.log("pockey login handler onGoogleLogin");
        this.onCheckCookieData();
    }

    protected playerUpdatedFromServer(data: PockeyPlayerData): void {
        console.log("%c PLAYER UPDATED FROM SERVER", "color: blue; background:yellow");
        if (!Settings.playerSignedIn) {
            if (data.user_id && _.includes(data.user_id, "@") && _.includes(data.user_id, ".")) {
                // PockeySettings.PLAYER_ID = usernameData["user_id"];
                console.log("%c USER_ID updated from db", "background: #ff9900; color: black; font-weight:bold; ");
                if (data.first_login_date) {
                    Settings.playerSignedIn = true;
                    SignalsManager.DispatchSignal(PockeySignalTypes.PLAYER_SIGNED_IN);
                    console.log("%c PLAYER SIGNED IN", "background: #ff8811; color: black; font-weight:bold; ");
                }
            }
        }

        PockeyPlayerManager.Instance().player.updatePlayerData(data);
        SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
        SignalsManager.DispatchSignal(SignalsType.COOKIE_DATA_CHECKED);

        console.log(data);
        console.log("/////////");

    }

    protected onCheckCookieData(): void {
        console.log("on POCKEY LOGIN HANDLER: onCheckCookieData");
        // PockeySettings.PLAYER_CUE_ID = PockeySettings.SMALL_CUES_ARRAY[0].id;
        if (!DatabaseConnector.mainCallbackFunctionSet)
            DatabaseConnector.setMainCallBackFunction(this.playerUpdatedFromServer.bind(this));

        let pockeyID: string = readCookie('PockeyID');
        console.log("intra la get cookie");

        if (pockeyID != "") {

            if (_.includes(pockeyID, "@") && _.includes(pockeyID, ".")) {
                DatabaseConnector.getSignedInUserData(pockeyID);
                console.log("database query for user");

            } else if (pockeyID == "guest") {
                // let playerData: any = {};

                if (readCookie('PockeyUserColorId') != "") {
                    PockeyPlayerManager.Instance().player.data.color = readCookie('PockeyUserColorId');
                    // playerData["color"] = PockeyPlayerManager.Instance().player.data.color;
                }

                if (readCookie('PockeyNickname') != "") {
                    PockeyPlayerManager.Instance().player.data.nickname = readCookie('PockeyNickname');
                    // playerData["nickname"] = PockeyPlayerManager.Instance().player.data.nickname;
                }

                console.log("guest on read cookie");

                DatabaseConnector.updateServerPlayer(PockeyPlayerManager.Instance().player.data);
                // this.playerInfoReceived(playerData as JSON);
            }

        } else {

            PockeyPlayerManager.Instance().player.data.user_id = "guest";
            PockeyPlayerManager.Instance().player.data.color = PockeySettings.SMALL_COLORS_ARRAY[0].id;
            PockeyPlayerManager.Instance().player.data.nickname = "";

            // let playerData = {};
            writeCookie("PockeyID", PockeyPlayerManager.Instance().player.data.user_id, 30);
            writeCookie("PockeyUserColorId", PockeyPlayerManager.Instance().player.data.color, 30);
            writeCookie("PockeyNickname", PockeyPlayerManager.Instance().player.data.nickname, 30);

            DatabaseConnector.updateServerPlayer(PockeyPlayerManager.Instance().player.data);

            // playerData["color"] = readCookie('PockeyUserColorId');
            // playerData["nickname"] = readCookie('PockeyNickname');

            // this.playerInfoReceived(playerData as JSON);

        }

        // SignalsManager.DispatchSignal(SignalsType.COOKIE_DATA_CHECKED);

        // super.onCheckCookieData();
    }

    //
    // protected playerInfoReceived(usernameData: any | JSON): void {
    //     console.log("%c usernameData: ", "background: #ff9900; color: black; font-weight:bold; ");
    //     console.log(usernameData);
    //
    //     // let inventoryItemUpdated: boolean = false;
    //
    //     // PockeyPlayerManager.Instance().player.updatePlayerDataFromClient(usernameData);
    //
    //     // if (!_.isUndefined(usernameData["avatar"]) && !_.isNull(usernameData["avatar"])) {
    //     //     PockeySettings.PLAYER_AVATAR_ID = usernameData["avatar"];
    //     //     console.log("%c PLAYER_AVATAR_ID updated from db", "background: #ff9900; color: black; font-weight:bold;");
    //     //     inventoryItemUpdated = true;
    //     // }
    //
    //     // if (!_.isUndefined(usernameData["color"]) && !_.isNull(usernameData["color"])) {
    //     //     PockeySettings.PLAYER_COLOR_ID = usernameData["color"];
    //     //     console.log("%c PLAYER_COLOR_ID updated from db", "background: #ff9900; color: black; font-weight:bold;");
    //     //     inventoryItemUpdated = true;
    //     //
    //     // }
    //
    //     // if (!_.isUndefined(usernameData["decal"]) && !_.isNull(usernameData["decal"])) {
    //     //     PockeySettings.PLAYER_DECAL_ID = usernameData["decal"];
    //     //     SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [PockeySettings.PLAYER_DECAL_ID]);
    //     //     console.log("de aici se trimite salam decal");
    //     //     console.log("%c PLAYER_DECAL_ID updated from db", "background: #ff9900; color: black; font-weight:bold;");
    //     //     inventoryItemUpdated = true;
    //     //
    //     // }
    //
    //     // if (!_.isUndefined(usernameData["felt"]) && !_.isNull(usernameData["felt"])) {
    //     //     PockeySettings.POOLTABLE_FELT_ID = usernameData["felt"];
    //     //     SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [PockeySettings.POOLTABLE_FELT_ID]);
    //     //     console.log("%c PLAYER_FELT_ID updated from db", "background: #ff9900; color: black; font-weight:bold;");
    //     //     inventoryItemUpdated = true;
    //     // }
    //
    //     // if (!_.isUndefined(usernameData["player_level"]) && !_.isNull(usernameData["player_level"])) {
    //     //     PockeySettings.PLAYER_LEVEL = usernameData["player_level"];
    //     //     console.log("%c PLAYER_LEVEL updated from db", "background: #ff9900; color: black; font-weight:bold;");
    //     // }
    //
    //     // if (!_.isUndefined(usernameData["stick"]) && !_.isNull(usernameData["stick"])) {
    //     //     PockeySettings.PLAYER_CUE_ID = usernameData["stick"];
    //     //     SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [PockeySettings.PLAYER_CUE_ID]);
    //     //     console.log("%c PLAYER_CUE_ID" +
    //     //         "                    inventoryItemUpdated = true;\n updated from db", "background: #ff9900; color: black; font-weight:bold; ");
    //     //     inventoryItemUpdated = true;
    //     // }
    //
    //     // if (!_.isUndefined(usernameData["total_points"]) && !_.isNull(usernameData["total_points"])) {
    //     //     PockeySettings.PLAYER_TOTAL_POINTS = usernameData["total_points"];
    //     //     console.log("%c PLAYER_TOTAL_POINTS updated from db", "background: #ff9900; color: black; font-weight:bold; ");
    //     // }
    //
    //     // if (!_.isUndefined(usernameData["nickname"]) && !_.isNull(usernameData["nickname"])) {
    //     //     PockeySettings.PLAYER_NICKNAME = usernameData["nickname"];
    //     //     console.log("%c PLAYER_NICKNAME updated from db", "background: #ff9900; color: black; font-weight:bold; ");
    //     //     inventoryItemUpdated = true;
    //     // }
    //
    //     if ("user_id" in usernameData) {
    //         // PockeySettings.PLAYER_ID = usernameData["user_id"];
    //         console.log("%c USER_ID updated from db", "background: #ff9900; color: black; font-weight:bold; ");
    //
    //         if (!_.isUndefined(usernameData["first_login_date"]) && !_.isNull(usernameData["first_login_date"])) {
    //             if (!Settings.playerSignedIn) {
    //                 Settings.playerSignedIn = true;
    //                 SignalsManager.DispatchSignal(PockeySignalTypes.PLAYER_SIGNED_IN);
    //                 console.log("%c PLAYER SIGNED IN", "background: #ff8811; color: black; font-weight:bold; ");
    //             }
    //         }
    //     }
    //
    //     // if (inventoryItemUpdated) {
    //     SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
    //     // }
    //
    //     super.onCheckCookieData();
    //     // console.log("%c usernameData^^", "background: #ff9900; color: black; font-weight:bold; ");
    //
    //     // SignalsManager.DispatchSignal(SignalsType.COOKIE_DATA_CHECKED);
    //     // super.onCheckCookieData();
    // }
}