/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 8/1/2018
 */
import {MaterialType, P2WorldManager} from "../../p2-world-manager";
import * as p2 from "p2";

export class BallBlocker {

    /*public firstPoint: Vector2;
    public secondPoint: Vector2;
    private angle: number;
    public cosAlpha;
    public sinAlpha;
    public lineType: LineType;*/
    public p2Body: p2.Body;

    constructor(rectangle: PIXI.Rectangle, rotationAngle: number, materialType: MaterialType) {
        // this.firstPoint = firstPoint;
        // this.secondPoint = secondPoint;
        // this.angle = this.getAngle();
        // this.cosAlpha = Math.cos(this.angle);
        // this.sinAlpha = Math.sin(this.angle);
        // this.lineType = type;

        this.p2Body = new p2.Body({
            mass: 0,
            // position: [496, 560],
            // fixedRotation: true,
            position: [rectangle.x, rectangle.y],
            angle: rotationAngle
        });

        // this.p2Body.collisionResponse = true;
        // this.p2Body.damping = 20;
        // this.p2Body.angularDamping = 20;
        // this.p2Body.angularVelocity = 20;

        // let c:Graphics =
        // this.p2Body.angle

        // this.p2Body.damping = 0.3;

        // var lineShape = new p2.Line({length: 500});
        var rectShape = new p2.Box({
            width: rectangle.width,
            height: rectangle.height
        });
        rectShape.material = new p2.Material(materialType);
        // circleShape.material.

        // let m = new p2.ContactMaterial(new AbstractBall(null).circleShape.material, lineShape.material, {
        // friction: 0,
        // relaxation: 10,
        // frictionRelaxation: 0.5
        // restitution: 0,
        // frictionRelaxation: 0,
        // relaxation: 0,
        // friction: 0,
        // frictionStiffness: 0,
        // stiffness: 10000,
        // surfaceVelocity: 100,
        // restitution: 0.9,
        //
        // });
        // P2WorldManager.Instance().world.addContactMaterial(m);

        this.p2Body.addShape(rectShape);

        P2WorldManager.Instance().world.addBody(this.p2Body);
    }

    // private getAngle(): number {
    //     let x1: number = this.firstPoint.x;//, y1, x2, y2
    //     let y1: number = this.firstPoint.y;
    //
    //     let x2: number = this.secondPoint.x;//, y1, x2, y2
    //     let y2: number = this.secondPoint.y;
    //
    //     let dy = y2 - y1;
    //     let dx = x2 - x1;
    //     let theta: number = Math.atan2(dy, dx); // range (-PI, PI]
    //     // theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //     //if (theta < 0) theta = 360 + theta; // range [0, 360)
    //     return theta;
    // }
}