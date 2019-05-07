/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/12/2019
 */
import * as p2 from "p2";
import * as _ from "lodash";
import {MaterialType, P2WorldManager} from "../../p2-world-manager";
import {GoalieGraphicObject} from "./goalie-graphic-object";
import {PockeyGameObject} from "../pockey-game-object";
import {BallType} from "../../../../../common/pockey-game-settings";
// import {PockeyGameElementVO} from "../../../../../common/pockey-value-objects";
// import {TweenMax, Linear} from "gsap";
// import {Settings} from "../../../../qFramework/Settings";

export class GoalieGameObject extends PockeyGameObject {

    private goaliePolygonCoord: number[][];
    private goalieShadowPolygonCoord: number[][];

    constructor(name:string, ballType:BallType) {
        super(name, ballType);

        // console.log("this.ballType: " + this.ballType);
        if (this.ballType == BallType.Left) {
            this.p2Body.angle = Math.PI;
            this.p2Shadow.angle = Math.PI;
            this.graphicObject.rotation = Math.PI;
            this.setPosition(-468, 0);
        } else {
            this.setPosition(468, 0);
        }
    }


    protected createElements(): void {
        super.createElements();

    }

    private definePolygons(): void {
        this.goaliePolygonCoord = [
            [-27, 15],
            [-26, -7],
            [-22, -14],
            [-26, -18],
            [-19, -32],
            [-12, -31],
            [-8, -37],
            [28, -37],
            [28, 37],
            [-7, 37],
            [-20, 37],
            [-28, 31]
        ];

        this.goalieShadowPolygonCoord = [
            [-42, 6],
            [-36, -32],
            [-17, -42],
            [-4, -52],
            [11, -46],
            [31, -24],
            [42, 16],
            [34, 26],
            [22, 48],
            [3, 50],
            [-15, 52],
            [-34, 47],
            [-40, 23]
        ];
    }

    protected addGraphicObject(): void {
        super.addGraphicObject();

        this.graphicObject = new GoalieGraphicObject(this.ballType);

        // if (this.ballType == TableSide.LEFT)


    }

    protected getP2Body(): p2.Body {
        this.definePolygons();

        let p2Body:p2.Body  = new p2.Body({mass: 0});
        // @ts-ignore
        p2Body.fromPolygon(this.goaliePolygonCoord);
        _.forEach(p2Body.shapes, (shape: p2.Shape) => {
            shape.material = new p2.Material(MaterialType.GOALIE_MATERIAL);
        });
        P2WorldManager.Instance().world.addBody(p2Body);

        return p2Body;
    }

    protected getP2Shadow(): p2.Body {
        let p2Body:p2.Body = new p2.Body({mass: 0});
        // @ts-ignore
        p2Body.fromPolygon(this.goalieShadowPolygonCoord);
        _.forEach(p2Body.shapes, (shape: p2.Shape) => {
            shape.material = new p2.Material(MaterialType.SHADOW_MATERIAL);
        });
        P2WorldManager.Instance().world.addBody(p2Body);

        return p2Body;
    }

    setPosition(x: number, y: number) {
        super.setPosition(x, y);
    }

    /*updateData(data: PockeyGameElementVO): void {
        super.updateData(data);

        this.setPosition(data.xPos, data.yPos);
        // let currentY: PockeyGameElementVO = {yPos: this.gameObjectData.yPos};
        // // if(this.movingTween)
        // //     this.movingTween.kill();
        //
        // this.movingTween = TweenMax.to(currentY, Settings.playerUpdateInterval, {
        //     yPos: data.yPos, ease: Linear.easeNone, onUpdate: () => {
        //         // console.log(this.name + " game obj y pos: " + this.gameObjectData.yPos);
        //         // console.log(this.name + " data y pos: " + data.yPos);
        //         this.setPosition(this.gameObjectData.xPos, currentY.yPos);
        //     }
        // });
    }*/

    // protected update

// public setSide(ballType:TableSide):void
    // {
    //     if(ballType == TableSide.LEFT)
    //     {
    //
    //     }
    //     else
    //     {
    //
    //     }
    // }

    // public updateVerticalPosition(yPos: number): void {
    //     this.p2Body.position[1] = yPos;
    //     this.p2Shadow.position[1] = yPos;
    // }
}
