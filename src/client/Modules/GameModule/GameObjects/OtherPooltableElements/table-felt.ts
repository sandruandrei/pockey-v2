/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/11/2019
 */
import {InventoryVO, PockeySettings} from "../../../../pockey-settings";
import {PockeySignalTypes} from "../../../SignalsModule/pockey-signal-types";
import {SignalsManager} from "../../../../qFramework/Signals/signals-manager";
import * as _ from "lodash";
// import {PockeyPlayerManager} from "../../../pockey-player-manager";

export class TableFelt {
    private felt: PIXI.Sprite;
    // @ts-ignore
    private border: PIXI.Sprite;
    private currentFeltColorIDCounter: number = 0;
    // @ts-ignore
    private feltColorsArray: InventoryVO[];

    constructor(felt: PIXI.Sprite, border: PIXI.Sprite) {
        this.felt = felt;
        this.border = border;

        SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_POOLTABLE_FELT, this.setTint.bind(this));

//         this.setTint(PockeyPlayerManager.Instance().player.data.felt);
    }

    private setTint(tintID: string): void {
        // console.log("salam in pizda");
        _.forEach(PockeySettings.LARGE_MISC_ARRAY, (item: InventoryVO, counter: number) => {
            if (item.id == tintID) {
                this.currentFeltColorIDCounter = counter;
                return true;
            }
        });

        this.felt.tint = PockeySettings.LARGE_MISC_ARRAY[this.currentFeltColorIDCounter].color;
        // this.border.tint = PockeySettings.LARGE_MISC_ARRAY[this.currentFeltColorIDCounter].color;
    }
}