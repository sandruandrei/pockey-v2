/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/17/2019
 */
import {GraphicObject} from "../../../../qFramework/AbstractModules/GameModule/graphic-object";
import {InventoryVO, PockeySettings} from "../../../../pockey-settings";
import {PockeyPlayerManager} from "../../../../pockey-player-manager";
import * as _ from "lodash";
import {PockeySignalTypes} from "../../../SignalsModule/pockey-signal-types";
import {SignalsManager} from "../../../../qFramework/Signals/signals-manager";

export class StickGraphicObject extends GraphicObject {
    protected graphicsHolder: PIXI.Sprite;
    protected textureWidth: number = 0;
    protected textureHeight: number = 0;

    public initialPosition: PIXI.Point;
    public initialPivotPoint: PIXI.Point;

    constructor() {
        super();

        this.graphicsHolder = new PIXI.Sprite();
        this.addChild(this.graphicsHolder);
        this.graphicsHolder.scale.x = 0.5;
        this.graphicsHolder.scale.y = 0.5;
        this.graphicsHolder.anchor.y = 0.5;

        // this.onUpdatePlayerStickSkin(PockeySettings.PLAYER_CUE_ID);

        this.initialPivotPoint = new PIXI.Point();
        // console.log("la setare initial pivot");
        this.pivot = this.initialPivotPoint;

        SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_STICK_SKIN, this.onUpdatePlayerStickSkin.bind(this));

        this.onUpdatePlayerStickSkin(PockeyPlayerManager.Instance().player.data.stick);
    }

    private onUpdatePlayerStickSkin(skinID: string): void {
        let idCounter: number = 0;
        _.forEach(PockeySettings.LARGE_CUES_ARRAY, (item: InventoryVO, counter: number) => {
            if (item.id == skinID) {
                idCounter = counter;
                return true;
            }
        });

        this.graphicsHolder.texture = PIXI.Texture.fromImage(PockeySettings.LARGE_CUES_ARRAY[idCounter].model);
        this.textureWidth = this.graphicsHolder.width;
        this.textureHeight = this.graphicsHolder.height;

        this.initialPivotPoint = new PIXI.Point();
        this.initialPivotPoint.x = this.textureWidth + 8;
        this.pivot = this.initialPivotPoint;
        // console.log("la setare initial pivot");
        // console.log("la change skin texture width: " + this.textureWidth);
        // console.log("la change skin texture height: " + this.textureHeight);
    }


}
