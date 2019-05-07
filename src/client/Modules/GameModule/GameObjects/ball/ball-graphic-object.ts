/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/23/2019
 */
import {GraphicObject} from "../../../../qFramework/AbstractModules/GameModule/graphic-object";
import {AbstractEntryPoint} from "../../../../qFramework/AbstractEntryPoint";
import {Settings} from "../../../../qFramework/Settings";
import {PockeySettings} from "../../../../pockey-settings";

export class BallGraphicObject extends GraphicObject {
    public ballShadow: PIXI.Graphics;
    public sphere: BABYLON.Mesh;
    protected lastPosition: BABYLON.Vector3;

    constructor(public radius: number) {
        super();
        this.lastPosition = new BABYLON.Vector3(0, 0, 0);
        this.addTexture();
        this.createBallShadow();
    }

    protected addTexture(): void {

        this.sphere = BABYLON.Mesh.CreateSphere(this.name, 16, this.radius * 2, AbstractEntryPoint.scene);
        // this.sphere.isVisible = false;
        let myMaterial = new BABYLON.StandardMaterial("myMaterial", AbstractEntryPoint.scene);

        myMaterial.diffuseTexture = new BABYLON.Texture(Settings.desktopAssetsPath + "Images/BallTextures/ballTexture.jpg", AbstractEntryPoint.scene);

        this.sphere.material = myMaterial;
        // this.sphere.setEnabled(false);
        // TweenMax.to(this.sphere.rotation, 0.1, {x: -2 * Math.PI, y: -2 * Math.PI, z: -2 * Math.PI});

    }


    setPosition(x: number, y: number) {
        super.setPosition(x, y);

        this.sphere.position.x = this.x;
        this.sphere.position.y = -this.y - PockeySettings.BABYLON_Y_OFFSET;

        this.handleRotation();
    }

    protected handleRotation(): void {
        // if (this.ballType == BallType.Puck) {
        //     return;
        // }

        // if (this.radius == 0) {
        //     return;
        // }

        // this.moving = true;


        // this.lastPositions.push(this.ballPosition);

        let position: BABYLON.Vector3 = new BABYLON.Vector3(this.sphere.position.x, this.sphere.position.y, 0);

        let currentToLast = position.subtract(this.lastPosition);
//                 console.log("last pos");


        let segment = currentToLast.length();

        if (segment == 0) {
            return;
        }

        let ballDown: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, -1);

        let axis = BABYLON.Vector3.Cross(ballDown, currentToLast);

        if (axis == BABYLON.Vector3.Zero()) {

            return;
        }

        let theta: number = (segment / (this.radius * 3.5)) / this.radius; // in radians
        let thetaDegrees: number = theta * 180 / Math.PI;

        let q = BABYLON.Quaternion.RotationAxis(axis, thetaDegrees);

        let sphereRotToQuaternion = this.sphere.rotation.toQuaternion();

        let sphereRotation = q.multiply(sphereRotToQuaternion).toEulerAngles();
        this.sphere.rotation.x = sphereRotation.x;
        this.sphere.rotation.y = sphereRotation.y;
        this.sphere.rotation.z = sphereRotation.z;

        this.lastPosition = position;
//                 console.log("last pos");

        // console.log("last pos on push: " + this.lastPositions.length);
    }

    public reset():void
    {
        if (this.sphere) {
            this.sphere.visibility = 1;
            this.sphere.setEnabled(true);
        }

        this.ballShadow.scale.x = 0.9;
        this.ballShadow.scale.y = 0.9;
    }

    private createBallShadow() {
        this.ballShadow = new PIXI.Graphics();
        this.ballShadow.name = this.name + "_ballShadow";
        this.ballShadow.beginFill(0x000000, 0.68);
        this.ballShadow.drawCircle(this.radius / 3, this.radius / 3, this.radius);
        this.ballShadow.scale.x = 0.9;
        this.ballShadow.scale.y = 0.9;
        this.addChild(this.ballShadow);
    }

    public updateColor(color: BABYLON.Color4): void {
        if (this.sphere) {
            // @ts-ignore
            this.sphere.material.diffuseColor = color;
        }
    }

    public enableSphere() {
        if (this.sphere) {
            this.sphere.setEnabled(false);
        }
    }
}
