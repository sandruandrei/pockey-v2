/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/21/2018
 */
import {Settings} from "../../../../qFramework/Settings";
import {GraphicObject} from "../../../../qFramework/AbstractModules/GameModule/graphic-object";
import {BallType} from "../../../../../common/pockey-value-objects";

export class GoalieGraphicObject extends GraphicObject {

    ///assets holders
    protected goalieBottomLayer: PIXI.Sprite;
    protected goalieTopLayer: PIXI.Sprite;
    protected goalieMiddleLayer: PIXI.Sprite;
    /////////////////

    // public body: p2.Body;

    constructor(public ballType: BallType) {
        super();

        this.ballType = ballType;
        this.name = "Goalie_" + this.ballType;

        this.goalieBottomLayer = new PIXI.Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_bottom.png"));
        this.goalieMiddleLayer = new PIXI.Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_color.png"));
        this.goalieTopLayer = new PIXI.Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/goalie_top.png"));
        this.addChild(this.goalieBottomLayer);
        this.addChild(this.goalieMiddleLayer);
        this.addChild(this.goalieTopLayer);

        this.pivot.set(this.width / 2, this.height / 2);
    }


    public updateColor(color:number):void
    {
        this.goalieMiddleLayer.tint = color;
    }

    // public updatePosition(): void {
    //     // this.x = this.body.position[0];
    //     // this.y = this.body.position[1];
    // }

    /*public setBodyPosition(): void {
        this.p2Body.position[0] = this.x;
        this.p2Body.position[1] = this.y;

        this.p2BodyShadow.position[0] = this.x;
        this.p2BodyShadow.position[1] = this.y;
    }

    */

}