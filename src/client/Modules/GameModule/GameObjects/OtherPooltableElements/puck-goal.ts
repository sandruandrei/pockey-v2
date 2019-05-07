/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 10/1/2018
 */
import {BallType} from "../../../../../common/pockey-game-settings";
import {TweenMax} from "gsap";


export class PuckGoal extends PIXI.Container {

    public type: BallType;

    private goalRightPath: string = "goalTop_right.png";
    private goalTopRightPath: string = "goalTop_righttTopper.png";

    private goalLeftPath: string = "goalTop_left.png";
    private goalTopLeftPath: string = "goalTop_leftTopper.png";

    private goalBottomGraphics: PIXI.Sprite;
    private goalMiddleGraphics: PIXI.Sprite;
    private goalTopGraphics: PIXI.Sprite;
    private animationStarted: boolean = false;
    private goalAnimationTween: TweenMax;
    // private _caca:number
    // private _tint:number;
    constructor(side: string) {
        super();

        if (side == "left") {
            this.goalBottomGraphics = new PIXI.Sprite(PIXI.Texture.fromFrame(this.goalLeftPath));
            this.goalMiddleGraphics = new PIXI.Sprite(PIXI.Texture.fromFrame(this.goalLeftPath));
            this.goalTopGraphics = new PIXI.Sprite(PIXI.Texture.fromFrame(this.goalTopLeftPath));
        } else {
            this.goalBottomGraphics = new PIXI.Sprite(PIXI.Texture.fromFrame(this.goalRightPath));
            this.goalMiddleGraphics = new PIXI.Sprite(PIXI.Texture.fromFrame(this.goalRightPath));
            this.goalTopGraphics = new PIXI.Sprite(PIXI.Texture.fromFrame(this.goalTopRightPath));
        }

        this.addChild(this.goalBottomGraphics);
        this.goalMiddleGraphics.visible = false;
        this.addChild(this.goalMiddleGraphics);
        this.addChild(this.goalTopGraphics);
    }

    public updateColor(color: number) {
        this.goalBottomGraphics.tint = color;
        // this._tint = value;
    }

    public animate(): void {
        if (!this.animationStarted) {
            this.animationStarted = true;
            this.goalMiddleGraphics.visible = true;
            this.goalMiddleGraphics.alpha = 0;
            this.goalAnimationTween = TweenMax.to(this.goalMiddleGraphics, 0.2, {
                alpha: 0.68,
                yoyo: true,
                repeat: -1
            });
        }
    }

    public stopAnimation(): void {
        if (this.animationStarted) {
            this.animationStarted = false;
            this.goalMiddleGraphics.visible = false;
            if (this.goalAnimationTween && this.goalAnimationTween.isActive())
                this.goalAnimationTween.kill();
        }
    }

}