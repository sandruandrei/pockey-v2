import {SignalsManager} from "../../../../../qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../../../../SignalsModule/pockey-signal-types";
import {InventoryVO, PockeySettings} from "../../../../../pockey-settings";
import {Settings} from "../../../../../qFramework/Settings";
import {
    DatabaseConnector,
    DatabaseObject
} from "../../../../../qFramework/AbstractModules/Connection/database-connector";
import {writeCookie} from "../../../../../qFramework/Utils/cookie";
import * as _ from "lodash";
import {PockeyPlayerManager} from "../../../../GameModule/pockey-player-manager";

/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 10/29/2018
 */


        export class PlayerColorCustomizer {

    private previousColorButton: HTMLDivElement;
    private nextColorButton: HTMLDivElement;
    private colorCircle: HTMLDivElement;
    private currentColorCounter: number = 0;
    private colorsArray: InventoryVO[];

    constructor() {

        console.log("color customizer");
        /*if (Settings.playerSignedIn) {
            this.colorsArray = PockeySettings.LARGE_COLORS_ARRAY;
        }
        else {
            this.colorsArray = PockeySettings.SMALL_COLORS_ARRAY;
        }*/

        this.colorCircle = document.getElementById("PlayerColorCircle") as HTMLDivElement;
        this.colorsArray = PockeySettings.SMALL_COLORS_ARRAY;

        // this.currentColorCounter = 0;

        /*if (PockeySettings.PLAYER_COLOR_ID) {
            this.currentColorCounter = PockeySettings.PLAYER_COLOR_ID;
            PockeySettings.PLAYER_COLOR = this.colorsArray[PockeySettings.PLAYER_COLOR_ID];
        }*/

        // PockeySettings.PLAYER_COLOR_ID = this.currentColorCounter;
        // writeCookie("PockeyUserColorId", PIXI.utils.hex2string(PockeySettings.PLAYER_COLOR_ID), 30);


        this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);

        this.previousColorButton = document.getElementById("PreviousColorButton") as HTMLDivElement;
        this.nextColorButton = document.getElementById("NextColorButton") as HTMLDivElement;

        this.previousColorButton.onclick = () => {
            console.log("on prev color");

            this.currentColorCounter--;
            if (this.currentColorCounter < 0) {
                this.currentColorCounter = this.colorsArray.length - 1;
            }

            PockeyPlayerManager.Instance().player.data.color = this.colorsArray[this.currentColorCounter].id;
            this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);
            this.updateCookieOrDatabase();
        };

        this.nextColorButton.onclick = () => {

            console.log("on next color");
            this.currentColorCounter++;
            if (this.currentColorCounter > this.colorsArray.length - 1) {
                this.currentColorCounter = 0;
            }
            PockeyPlayerManager.Instance().player.data.color = this.colorsArray[this.currentColorCounter].id;
            this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);
            this.updateCookieOrDatabase();
        };

        SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_PLAYER_COLOR, this.updateCurrentColor.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this));
        /*
        SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_PLAYER_COLOR, this.updateCurrentColor.bind(this));*/
        SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));

    }

    private onInventoryItemUpdated(): void {
        if (this.colorsArray[this.currentColorCounter].id != PockeyPlayerManager.Instance().player.data.color) {
            this.updateCurrentColor();
        }
    }

    private updateCurrentColor(): void {

        _.forEach(this.colorsArray, (item: InventoryVO, counter: number) => {
            if (item.id == PockeyPlayerManager.Instance().player.data.color) {
                this.currentColorCounter = counter;
                return true;
            }
        });

        this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);
        // this.updateCookieOrDatabase();
    }

    private updateCookieOrDatabase(): void {
        if (Settings.playerSignedIn) {
            let colorDbObject: DatabaseObject = {
                userID: PockeyPlayerManager.Instance().player.data.user_id,
                column: "color",
                value: PockeyPlayerManager.Instance().player.data.color
            };

            DatabaseConnector.updatePlayerDatabase(colorDbObject);
        } else {
            writeCookie("PockeyUserColorId", PockeyPlayerManager.Instance().player.data.color, 30);
        }
    }

    private onPlayerSignedIn(): void {
        this.colorsArray = PockeySettings.LARGE_COLORS_ARRAY;

        console.log("colors customizer player signed in");
        this.updateCurrentColor();
        // this.currentAvatarCounter = 0;
        // PockeySettings.PLAYER_AVATAR_ID = this.currentAvatarCounter;
        // this.avatarHolder.style.background = "center / contain no-repeat url(" + this.avatarsArray[this.currentAvatarCounter] + ")";
    }

    private onPlayerSignedOut(): void {
        this.colorsArray = PockeySettings.SMALL_COLORS_ARRAY;
        if (this.currentColorCounter > this.colorsArray.length - 1) {
            this.currentColorCounter = 0;
            PockeyPlayerManager.Instance().player.data.color = this.colorsArray[this.currentColorCounter].id;
        }

        this.colorCircle.style.backgroundColor = this.parseColor(this.colorsArray[this.currentColorCounter].color);

        this.updateCookieOrDatabase();
    }

    private parseColor(color:any): string {

        if (typeof color === 'number') {
            //make sure our hexadecimal number is padded out
            color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
        }

        return color;

    };
}