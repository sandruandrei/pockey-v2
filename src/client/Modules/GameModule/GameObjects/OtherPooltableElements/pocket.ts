/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 8/26/2018
 */
import {Vector2} from "../../../../qFramework/Utils/Vector2";
import {PockeySettings} from "../../../../pockey-settings";
import * as _ from "lodash";


export class Pocket extends PIXI.Circle {
    public finalPoint: Vector2;
    public position: Vector2;
    public touchPoints: Vector2[];
    public graphics: PIXI.Graphics[];

    constructor(x: number, y: number, radius: number, finalPoint: Vector2) {
        super(x, y, radius);
        this.position = new Vector2(x, y);
        this.finalPoint = finalPoint;
        this.graphics = [];
        this.touchPoints = [];

        let point: Vector2 = new Vector2();
        // let g: PIXI.Graphics = new PIXI.Graphics();
        let angle: number;

        //1
        angle = 90 * Math.PI / 180;
        point = new Vector2();

        point.x = this.position.x + Math.cos(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        point.y = this.position.y + Math.sin(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        this.touchPoints.push(point);
        /*g = new Graphics();
        g.beginFill(0xff9900);
        g.drawCircle(point.x, point.y, 3);
        g.endFill();
        this.graphics.push(g);*/

        //2
        angle = 45 * Math.PI / 180;
        point = new Vector2();

        point.x = this.position.x + Math.cos(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        point.y = this.position.y + Math.sin(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        this.touchPoints.push(point);

        /* g = new Graphics();
         g.beginFill(0xff9900);
         g.drawCircle(point.x, point.y, 3);
         g.endFill();
         this.graphics.push(g);*/

        //3
        angle = 0;
        point = new Vector2();

        point.x = this.position.x + Math.cos(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        point.y = this.position.y + Math.sin(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        this.touchPoints.push(point);

        /*g = new Graphics();
        g.beginFill(0xff9900);
        g.drawCircle(point.x, point.y, 3);
        g.endFill();
        this.graphics.push(g);*/

        //4
        angle = -45 * Math.PI / 180;
        point = new Vector2();

        point.x = this.position.x + Math.cos(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        point.y = this.position.y + Math.sin(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        this.touchPoints.push(point);
        /* g = new Graphics();
         g.beginFill(0xff9900);
         g.drawCircle(point.x, point.y, 3);
         g.endFill();
         this.graphics.push(g);*/

        //5
        angle = -90 * Math.PI / 180;
        point = new Vector2();

        point.x = this.position.x + Math.cos(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        point.y = this.position.y + Math.sin(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        this.touchPoints.push(point);
        /*g = new Graphics();
        g.beginFill(0xff9900);
        g.drawCircle(point.x, point.y, 3);
        g.endFill();
        this.graphics.push(g);*/

        //6
        angle = -135 * Math.PI / 180;
        point = new Vector2();

        point.x = this.position.x + Math.cos(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        point.y = this.position.y + Math.sin(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        this.touchPoints.push(point);

        /* g = new Graphics();
         g.beginFill(0xff9900);
         g.drawCircle(point.x, point.y, 3);
         g.endFill();
         this.graphics.push(g);*/

        //7

        angle = 180 * Math.PI / 180;
        point = new Vector2();

        point.x = this.position.x + Math.cos(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        point.y = this.position.y + Math.sin(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        this.touchPoints.push(point);

        /*g = new Graphics();
        g.beginFill(0xff9900);
        g.drawCircle(point.x, point.y, 3);
        g.endFill();
        this.graphics.push(g);*/

        //8

        angle = 135 * Math.PI / 180;
        point = new Vector2();

        point.x = this.position.x + Math.cos(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        point.y = this.position.y + Math.sin(angle) * (this.radius - PockeySettings.BALL_RADIUS - 3);
        this.touchPoints.push(point);

        /*g = new Graphics();
        g.beginFill(0xff9900);
        g.drawCircle(point.x, point.y, 3);
        g.endFill();
        this.graphics.push(g);*/

        // _.forEach([0, 1], () => {
        // point = new Vector2();

        // point.x = this.position.x + Math.cos(angle) * (this.radius - PockeySettings.BALL_RADIUS - 2);
        // point.y = this.position.y + Math.sin(angle) * (this.radius - PockeySettings.BALL_RADIUS - 2);
        // this.touchPoints.push(point);
        // g = new Graphics();
        // g.beginFill(0xff9900);
        // g.drawCircle(point.x, point.y, 3);
        // g.endFill();
        // this.graphics.push(g);


        // angle = -90 * Math.PI / 180;
        // point = new Vector2();
        //
        // point.x = this.position.x + Math.cos(angle) * (this.radius - PockeySettings.BALL_RADIUS - 2);
        // point.y = this.position.y + Math.sin(angle) * (this.radius - PockeySettings.BALL_RADIUS - 2);
        // this.touchPoints.push(point);
        // g = new Graphics();
        // g.beginFill(0xff9900);
        // g.drawCircle(point.x, point.y, 3);
        // g.endFill();
        // this.graphics.push(g);


        // angle = 180 * Math.PI / 180;
        // point = new Vector2();
        //
        // point.x = this.position.x + Math.cos(angle) * (this.radius - PockeySettings.BALL_RADIUS - 2);
        // point.y = this.position.y + Math.sin(angle) * (this.radius - PockeySettings.BALL_RADIUS - 2);
        // this.touchPoints.push(point);
        //
        // g = new Graphics();
        // g.beginFill(0xff9900);
        // g.drawCircle(point.x, point.y, 3);
        // g.endFill();
        // this.graphics.push(g);


        // angle = 135 * Math.PI / 180;
        // point = new Vector2();
        // point.x = this.position.x + Math.cos(angle) * (this.radius - PockeySettings.BALL_RADIUS - 2);
        // point.y = this.position.y + Math.sin(angle) * (this.radius - PockeySettings.BALL_RADIUS - 2);
        // this.touchPoints.push(point);
        // g = new Graphics();
        // g.beginFill(0xff9900);
        // g.drawCircle(point.x, point.y, 3);
        // g.endFill();
        // this.graphics.push(g);


        // });
    }

    public addPoints(parent: PIXI.Container): void {
        _.forEach(this.graphics, (g: PIXI.Graphics) => {
            parent.addChild(g);
            // point.x = this.position.x + Math.cos(angle) * (this.radius + PockeySettings.BALL_RADIUS);
            // point.y = this.position.y + Math.sin(angle) * (this.radius + PockeySettings.BALL_RADIUS);
            // let g: Graphics = new Graphics();
            // g.beginFill(0xff9900);
            // g.drawCircle(point.x, point.y, 3);
            // g.endFill();
            // this.graphics.push(g);
        });
    }
}