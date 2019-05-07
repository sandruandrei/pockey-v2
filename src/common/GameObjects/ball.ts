/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/28/2019
 */
import * as p2 from "p2";
import {MaterialType, P2WorldManager} from "../../client/Modules/GameModule/p2-world-manager";
import {BallType} from "../pockey-game-settings";
import {PockeySettings} from "../../client/pockey-settings";
// let game = null;
// let p2 = null;

export class Ball{
    public radius: number = PockeySettings.BALL_RADIUS;
    public ballType: BallType = BallType.White;
    public name: string = "";
    public physicsObj: p2.Body = new p2.Body({});
    public mass:number = 1;
    // private p2Reference:p2 | undefined;
    // public gameEngine:PockeyGameEngine;
    // protected mass: number = PockeyGameSettings.BALL_MASS;

    constructor() {
    }

    public setType(type: BallType): void {
        this.ballType = type;
        if (this.ballType == BallType.Puck) {
            this.radius = PockeySettings.PUCK_RADIUS;
        }
    }

    protected addP2Body(): void {
        // game = this.gameEngine;
        // this.p2Reference = game.physicsEngine.p2;

        // v = new p2.Body({
        //     mass: this.mass, damping: 0, angularDamping: 0,
        //     position: [this.position.x, this.position.y],
        //     velocity: [this.velocity.x, this.velocity.y]
        // });

        // this.physicsObj = new p2.Body({
        //     mass: this.mass,
        //     position: [this.position.x, this.position.y],
        //     fixedRotation: false,
        //     angularForce: 0,
        //     angularVelocity: 0,
        //     sleepSpeedLimit: 2,
        //     sleepTimeLimit: 0.1,
        //     allowSleep: true,
        //     velocity: [this.velocity.x, this.velocity.y]
        // });
        // // this.p2BodyShadow = new p2.Body({
        //     mass: 0,
        //     position: [this.x, this.y]
        // });
        this.physicsObj.angularDamping = 0;
        this.physicsObj.damping = 0.18;
        this.physicsObj.boundingRadius = this.radius;
        // this.p2Body.allowSleep = true;
        // this.p2Body.sleepSpeedLimit = 2; // Body will feel sleepy if speed<1 (speed is the norm of velocity)
        // this.p2Body.sleepTimeLimit = 0.1;
        this.physicsObj.sleep();// =  1;
        // this.p2Body.velocity[0] = 0;// =  1;
        // this.p2Body.velocity[1] = 0;// =  1;

        let circleShape = new p2.Circle({radius: this.radius});
        // circleShape.material = this.getCircleMaterial();
        this.physicsObj.addShape(circleShape);
/*
        // let circleShape2 = new p2.Circle({radius: this.radius + PockeySettings.BALL_RADIUS});
        // circleShape2.material = new p2.Material(MaterialType.SHADOW_MATERIAL);
        //
        // this.p2BodyShadow.addShape(circleShape2);
*/
        // this.gameEngine.physicsEngine.world.addBody(this.physicsObj);

    }

    protected getCircleMaterial(): p2.Material {
        return P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL);
    }

    /* // avoid gradual synchronization of velocity
     get bending() {
         return {velocity: {percent: 0.0}};
     }
 */
}