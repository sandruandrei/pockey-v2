/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/8/2019
 */
import {PockeyPlayerData} from "./pockey-player-data";
import {
    FrameworkSocketEvents,
    FrameworkSocketNamespaces
} from "../client/qFramework/AbstractModules/Connection/connection-channels-and-messages";

/*
import {FrameworkSocketEvents} from "../client/qFramework/AbstractModules/Connection/connection-channels-and-messages";
import * as _ from "lodash";
import {PockeySettings} from "../client/pockey-settings";
import {SignalsManager} from "../client/qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../client/Modules/SignalsModule/pockey-signal-types";
import {Settings} from "../client/qFramework/Settings";
*/
export class Player {
    public data: PockeyPlayerData = {};
    public socket: any;
    public isLookingForPartner: boolean = false;
    // public isClient: boolean = false;
    public isFirstToStart: boolean = false;

    constructor() {
    }

    public setSocket(socket: any): void {

        let newSocketID: string = socket.id.toString().replace(FrameworkSocketNamespaces.SEARCH, '').replace("#", "");
        newSocketID = newSocketID.replace(FrameworkSocketNamespaces.PLAY, '').replace("#", "");

        this.data.socketID = newSocketID;
        this.socket = socket;

        if (this.data.socketID)
            console.log("player socket initialized: " + this.data.socketID);
    }

    public updatePlayerData(usernameData: PockeyPlayerData): void {

        if (usernameData.avatar) {
            this.data.avatar = usernameData.avatar;
        }

        if (usernameData.color) {
            this.data.color = usernameData.color;
        }

        if (usernameData.decal) {
            this.data.decal = usernameData.decal;
        }

        if (usernameData.felt) {
            this.data.felt = usernameData.felt;
        }

        if (usernameData.player_level) {
            this.data.player_level = usernameData.player_level;
        }

        if (usernameData.stick) {
            this.data.stick = usernameData.stick;
        }

        if (usernameData.total_points) {
            this.data.total_points = usernameData.total_points;
        }

        if (usernameData.total_points) {
            this.data.total_points = usernameData.total_points;
        }

        if (usernameData.nickname) {
            this.data.nickname = usernameData.nickname;
        }

        if (usernameData.user_id) {
            this.data.user_id = usernameData.user_id;
        }

        if (usernameData.first_login_date) {
            this.data.first_login_date = usernameData.first_login_date;
        }

        if (usernameData.type) {
            this.data.type = usernameData.type;
        }
    }

    protected onReceiveSnapshotUpdate(data: any): void {
        console.log("Snapshot received/////////");
        console.log(data);
        console.log("Snapshot received//////////");
    }

    protected sendGameSnapshot(data: any): void {
//         console.log("send snapshot to other player");
        this.socket.emit(FrameworkSocketEvents.snapshotUpdate, data);
    }

    public selfDestroy(): void {
        console.log("player removed");
    }
}