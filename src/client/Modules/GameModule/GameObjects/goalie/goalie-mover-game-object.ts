/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/15/2019
 */
import {GoalieGameObject} from "./goalie-game-object";
import {GameObject} from "../../../../qFramework/AbstractModules/GameModule/game-object";
import {TweenMax, Linear} from "gsap";
import {PockeyGameElementVO} from "../../../../../common/pockey-value-objects";
import {Settings} from "../../../../qFramework/Settings";
// import Linear = gsap.Linear;
// import {Settings} from "../../../../qFramework/Settings";

export class GoalieMoverGameObject extends GameObject {
    protected leftGoalie: GoalieGameObject;
    protected rightGoalie: GoalieGameObject;
    protected movingSpeed: number = 2;
    protected movingDirection: number = 1;
    protected yLimit: number = 50;
    protected yPos: number = 0;
    protected isMoving: boolean = false;

    protected currentTime: number = 0;

    constructor(leftGoalie: GoalieGameObject, rightGoalie: GoalieGameObject, name: string) {
        super(name);
        this.leftGoalie = leftGoalie;
        this.rightGoalie = rightGoalie;
    }

    public startMoving(): void {
        this.isMoving = true;
    }

    public stopMoving(): void {
        this.isMoving = false;
    }

    public update(delta: number): void {
        if (this.isUpdatingFromServer) {

            this.gameObjectData.yPos = this.yPos;

            this.leftGoalie.setPosition(this.leftGoalie.gameObjectData.xPos, this.yPos);
            this.rightGoalie.setPosition(this.rightGoalie.gameObjectData.xPos, this.yPos);

            return;
        }

        if (this.isMoving) {
            this.yPos += this.movingDirection * this.movingSpeed * delta;

            if (this.yPos >= this.yLimit) {
                this.movingDirection *= -1;
                this.yPos = this.yLimit;
            } else if (this.yPos <= -this.yLimit) {
                this.movingDirection *= -1;
                this.yPos = -this.yLimit
            }
            this.gameObjectData.yPos = this.yPos;
            this.gameObjectData.direction = this.movingDirection;
//             console.log("this ypos: " + this.yPos);

            this.leftGoalie.setPosition(this.leftGoalie.gameObjectData.xPos, this.yPos);
            this.rightGoalie.setPosition(this.rightGoalie.gameObjectData.xPos, this.yPos);
        }


    }

    stopServerUpdate(): void {
        super.stopServerUpdate();
    }

    updateData(data: PockeyGameElementVO): void {
        super.updateData(data);
        // this.yPos = this.gameObjectData.yPos;

        // this.leftGoalie.setPosition(this.leftGoalie.gameObjectData.xPos, this.yPos);
        // this.rightGoalie.setPosition(this.rightGoalie.gameObjectData.xPos, this.yPos);
        // let pos:{} = {yPos:this.yPos};
        // let s: PockeyGameElementVO = {yPos: this.yPos};
        // TweenMax.to(this, 0.12, {
        //     // ease: Linear.easeNone,
        //     yPos: this.gameObjectData.yPos, onUpdate: () => {
        //         // this.yPos = s.yPos;
        //         this.leftGoalie.setPosition(this.leftGoalie.gameObjectData.xPos, this.yPos);
        //         this.rightGoalie.setPosition(this.rightGoalie.gameObjectData.xPos, this.yPos);
        //     }
        // });
    }

    public playSnapshot(): void {
        // setTimeout(this.playSnapshot.bind(this), Settings.playerUpdateInterval*1000);
        if (this.snapshotsBundle.length <= 0) {
            return;
        }
        this.isUpdatingFromServer = true;

        if(this.snapshotsBundle[0].direction)
        {
            this.movingDirection = this.snapshotsBundle[0].direction;
        }
        // console.log("goalie mover on play snapshot");
        if (this.animationTween && this.animationTween.isActive())
            this.animationTween.kill();

        this.animationTween = TweenMax.to(this, Settings.playerUpdateInterval, {
            yPos: this.snapshotsBundle[0].yPos,
            ease: Linear.easeNone
        });
        // super.playSnapshot();
        this.snapshotsBundle.shift();
    }
}
