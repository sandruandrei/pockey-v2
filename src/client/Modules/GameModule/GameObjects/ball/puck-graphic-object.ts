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
import {Settings} from "../../../../qFramework/Settings";

export class PuckGraphicObject extends GraphicObject {
    public ballShadow: PIXI.Graphics;
    public sphere: PIXI.Sprite;

    constructor(public radius: number) {
        super();
        this.createBallShadow();
        this.addTexture();
    }



    protected addTexture(): void {

        this.sphere = new PIXI.Sprite(PIXI.Texture.fromImage(Settings.desktopAssetsPath + "Images/BallTextures/ball-puck.png"));
        this.sphere.pluginName = "picture";
        // this.sphere.scale.set(0.5);
        this.sphere.anchor.set(0.5);

        this.addChild(this.sphere);

    }

    public reset(): void {
        // if (this.sphere) {
        //     this.sphere.visible = 1;
        //     this.sphere.setEnabled(true);
        // }

        this.scale.x = 1;
        this.scale.y = 1;
    }

    private createBallShadow() {
        this.ballShadow = new PIXI.Graphics();
        this.ballShadow.name = this.name + "_ballShadow";
        this.ballShadow.beginFill(0x000000, 0.68);
        this.ballShadow.drawCircle(2, 2, this.radius);
        // this.ballShadow.scale.x = 0.9;
        // this.ballShadow.scale.y = 0.9;
        this.addChild(this.ballShadow);
    }

    // public updateColor(color: BABYLON.Color4): void {
    //     if (this.sphere) {
    //         // @ts-ignore
    //         this.sphere.material.diffuseColor = color;
    //     }
    // }

    public enableSphere() {
        if (this.sphere) {
            this.visible = true;
        }
    }
}
