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
import {GameObject} from "../../../../qFramework/AbstractModules/GameModule/game-object";
import {Linear, TimelineMax, TweenMax} from "gsap";
import {Vector2} from "../../../../qFramework/Utils/Vector2";
import {StickGraphicObject} from "./stick-graphic-object";
import {PockeyStates} from "../../StateMachine/pockey-state-machine";
import {SignalsManager} from "../../../../qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../../../SignalsModule/pockey-signal-types";
import {SignalsType} from "../../../../qFramework/Signals/signal-types";
import {PockeySoundURLS} from "../../../SoundModule/pockey-sound-names";
import {MouseHandler} from "../../../../qFramework/Utils/mouse-handler";
import {Settings} from "../../../../qFramework/Settings";
import {PockeyPlayerManager} from "../../../../pockey-player-manager";

//.TimelineMax;

export class StickGameObject extends GameObject {
    private shootTimeline: TimelineMax;

    public isActive: boolean = false;
    public power: number = 0;
    public rotationEnabled: boolean = false;
    protected stickPowerFactor: number = 12;
    protected clickPointRegistered: boolean = false;
    protected opposite: number;
    protected adjacent: number;
    protected clickPoint: Vector2;
    protected firstPointOfTangent: Vector2;
    protected secondPointOfTangent: Vector2;
    protected onShootTween: TweenMax;

    public build(): StickGameObject {
        this.createElements();
        this.addGraphicObject();
        this.postConstructor();

        this.defineShootTimeline();
        this.gameObjectData.alpha = 1;
        PockeyPlayerManager.Instance().player.pockeyGameWorld.addGameObject(this);

        return this;
    }

    setPosition(x: number, y: number) {
        this.graphicObject.setPosition(x, y);

        this.gameObjectData.xPos = x;
//         console.log("game object pos x: " + this.gameObjectData.xPos);
        this.gameObjectData.yPos = y;
    }

    protected addGraphicObject(): void {
        super.addGraphicObject();

        this.graphicObject = new StickGraphicObject();
        this.graphicObject.name = 'stick';
    }

    protected increasePower(stickPower: number): void {
        // if (this.pivot.x - this.initialPivotPoint.x < 100) {
        // TweenMax.to(this.pivot, 0.1, {x: this.initialPivotPoint.x + stickPower});
        this.graphicObject.pivot.x = (this.graphicObject as StickGraphicObject).initialPivotPoint.x + stickPower;
        this.gameObjectData.pivot = this.graphicObject.pivot.x;
        this.power = stickPower * this.stickPowerFactor;
        // }
    }

    protected release(): void {
        // console.log("la release");
        this.isActive = false;
        this.clickPointRegistered = false;
        this.shootTimeline.play(0);

    }

    private defineShootTimeline(): void {
        this.shootTimeline = new TimelineMax();
        this.shootTimeline.pause();
        this.shootTimeline.add(TweenMax.to(this.graphicObject.pivot, 0.05, {
            x: (this.graphicObject as StickGraphicObject).initialPivotPoint.x - 8,
            onUpdate: () => {
                this.gameObjectData.pivot = this.graphicObject.pivot.x;
            },
            onComplete: this.shoot.bind(this)
        }));
        this.shootTimeline.add(TweenMax.to(this.graphicObject.pivot, 0.1, {
            x: (this.graphicObject as StickGraphicObject).initialPivotPoint.x,
            onUpdate: () => {
                this.gameObjectData.pivot = this.graphicObject.pivot.x
            }
        }));
    }

    private shoot(): void {
        // this.power = 0;
        // console.log("stick power: " + this.power);

        /*if (PockeyStateMachine.Instance().fsm.currentState != PockeyStates.onRearrangeStick) {
            return;
        }*/

        this.gameObjectData.pivot = this.graphicObject.pivot.x;

        SignalsManager.DispatchSignal(PockeySignalTypes.SHOOT_BALL);
        SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{soundName: PockeySoundURLS.SHOOT_BALL}]);
        this.onShootTween = TweenMax.to(this.graphicObject, 0.2, {
            alpha: 0,
            onUpdate: () => {
                console.log("salam update");
                this.gameObjectData.alpha = this.graphicObject.alpha;
            },
            onComplete: () => {
                console.log("salam se face visible false la shoot");
                this.graphicObject.visible = false;
                this.gameObjectData.alpha = this.graphicObject.alpha;
                // this.gameObjectData.state = PockeyStates.onEndTurn;
            }
        });

        SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS);
        // this.isActive = false;
    }

    public activate(position: PIXI.Point | PIXI.PointLike): void {
        // console.log("stick la activate");
        this.setPosition(position.x, position.y);
        if (this.onShootTween)
            this.onShootTween.kill();

        if (this.animationTween)
            this.animationTween.kill();

        this.isActive = true;
        this.rotationEnabled = true;
        this.graphicObject.visible = true;
        this.graphicObject.alpha = 1;
        this.graphicObject.rotation = this.gameObjectData.rotation;
        this.gameObjectData.alpha = 1;

        console.log("salam s-a activat");

        // this.gameObjectData.state = PockeyStates.onRearrangeStick;

        // console.log("la activate -> stick rotation enabled: " + this.rotationEnabled);
    }

    public reset(): void {
        this.isActive = false;
        this.rotationEnabled = false;
        this.clickPointRegistered = false;
        this.power = 0;
        // if (MouseHandler.Instance().left.down)
        //     this.mouseReleased = false;
    }

    public update(): void {
        // if (!MouseHandler.Instance().left.down)
        //     this.mouseReleased = true;
        if (this.isUpdatingFromServer) {
            this.graphicObject.rotation = this.gameObjectData.rotation;
            this.graphicObject.alpha = this.gameObjectData.alpha;
            this.graphicObject.pivot.x = this.gameObjectData.pivot;

//             console.log("is updating from server");
            return;
        }
        if (this.isActive) {
//             console.log("is not updating from server");

            // console.log("stick intra la is active!!");

            // if (!MouseHandler.Instance().left.down) {
            //     console.log("stick NU intra la left button down!!! rotation: " + this.rotationEnabled);
            // }
            // if (MouseHandler.Instance().left.down && this.mouseReleased) {
            this.graphicObject.alpha = 1;
            this.gameObjectData.alpha = 1;

            if (MouseHandler.Instance().left.down) {

                // console.log("stick intra la left button down!!!");

                this.rotationEnabled = false;
// if(this.mouseReleased)
// {
                if (!this.clickPointRegistered) {
                    // console.log("stick intra la click point registered!!!");

                    let localPoint = this.graphicObject.parent.toLocal(new PIXI.Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                    this.clickPointRegistered = true;

                    this.clickPoint = new Vector2(localPoint.x, localPoint.y);

                    let oppRot: Vector2 = new Vector2(Math.cos(90 * Math.PI / 180 + this.graphicObject.rotation),
                        Math.sin(90 * Math.PI / 180 + this.graphicObject.rotation)).normalise();

                    this.firstPointOfTangent = new Vector2(localPoint.x - oppRot.x * 1500, localPoint.y - oppRot.y * 1500);
                    this.secondPointOfTangent = new Vector2(localPoint.x + oppRot.x * 1500, localPoint.y + oppRot.y * 1500);

                    // let g: Graphics = new Graphics();
                    // g.beginFill(0xff990);
                    // g.lineStyle(2, 0x000000);
                    // g.moveTo(this.firstPointOfTangent.x, this.firstPointOfTangent.y);
                    // g.lineTo(this.secondPointOfTangent.x, this.secondPointOfTangent.y);
                    // g.endFill();
                    // this.parent.addChild(g);


                } else {
                    // console.log("stick NU intra la click point registered!!!");

                    let stickPower: number = 0;

                    let localPoint: PIXI.Point = this.graphicObject.parent.toLocal(new PIXI.Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
                    let mouseDirection: number = (localPoint.x - this.firstPointOfTangent.x) * (this.secondPointOfTangent.y - this.firstPointOfTangent.y) - (localPoint.y - this.firstPointOfTangent.y) * (this.secondPointOfTangent.x - this.firstPointOfTangent.x);

                    if (mouseDirection > 0)
                        mouseDirection = -1;
                    else
                        mouseDirection = 1;

                    if (mouseDirection > 0) {
                        stickPower = this.distToSegment(new Vector2(localPoint.x, localPoint.y), this.firstPointOfTangent, this.secondPointOfTangent);
                    } else {
                        stickPower = 0
                    }

                    stickPower /= 2;
                    if (stickPower > 120)
                        stickPower = 120;

                    // console.log("stick powa: " + stickPower);
                    this.increasePower(stickPower);
                }
            } else if (this.power > 6) {
                // console.log("stick intra la power mai mare!!!");

                this.release();
            } else if (this.power == 0) {
                // console.log("stick intra la power zero!!!");

                this.rotationEnabled = true;

            }

            // } else if (this.power <= 0) {
            //     this.rotationEnabled = true;
            //     // this.x = this.initialPivotPoint.x;
            // }
            if (this.rotationEnabled && (!MouseHandler.Instance().left.down)) {
                // console.log("stick intra la rotation is enabled!!");

                let localPoint = this.graphicObject.parent.toLocal(
                    MouseHandler.Instance().getCurrentMousePosition());
                this.opposite = localPoint.y - this.gameObjectData.yPos;
                this.adjacent = localPoint.x - this.gameObjectData.xPos;
                this.gameObjectData.rotation = Math.atan2(this.opposite, this.adjacent);

                this.clickPointRegistered = false;
                this.graphicObject.pivot.x = (this.graphicObject as StickGraphicObject).initialPivotPoint.x;
                this.graphicObject.rotation = this.gameObjectData.rotation;

                this.gameObjectData.pivot = this.graphicObject.pivot.x;

                // if(this.raycastFollower)
            }

        }


        /*  else {
              console.log("stick NU active!!");
          }*/
    }

    stopServerUpdate(): void {
        super.stopServerUpdate();

        this.setPosition(this.gameObjectData.xPos, this.gameObjectData.yPos);
    }

    private dist2(v: Vector2, w: Vector2) {
        return (v.x - w.x) * (v.x - w.x) + (v.y - w.y) * (v.y - w.y);
    }

    private distToSegmentSquared(point: Vector2, firstLinePoint: Vector2, secondLinePoint: Vector2): number {
        let l2 = this.dist2(firstLinePoint, secondLinePoint);
        if (l2 == 0)
            return this.dist2(point, firstLinePoint);

        let t: number = ((point.x - firstLinePoint.x) * (secondLinePoint.x - firstLinePoint.x) + (point.y - firstLinePoint.y) * (secondLinePoint.y - firstLinePoint.y)) / l2;
        t = Math.max(0, Math.min(1, t));

        return this.dist2(point, new Vector2(
            firstLinePoint.x + t * (secondLinePoint.x - firstLinePoint.x),
            firstLinePoint.y + t * (secondLinePoint.y - firstLinePoint.y)
        ));
    }

    protected distToSegment(p: Vector2, v: Vector2, w: Vector2) {
        return Math.sqrt(this.distToSegmentSquared(p, v, w));
    }

    public playSnapshot(): void {
        // setTimeout(this.playSnapshot.bind(this), Settings.playerUpdateInterval * 1000);

        if (this.snapshotsBundle.length <= 0) {
            return;
        }
//         console.log("inca intra la playsnapshot");
        this.isUpdatingFromServer = true;
        // console.log("goalie mover on play snapshot");
        this.setPosition(this.snapshotsBundle[0].xPos, this.snapshotsBundle[0].yPos);

        if (this.animationTween && this.animationTween.isActive())
            this.animationTween.kill();

        let isOnShoot: boolean = false;
        if (this.snapshotsBundle[0].state)
            this.gameObjectData.state = this.snapshotsBundle[0].state;

        if (this.snapshotsBundle[0].state) {
            if (this.snapshotsBundle[0].state == PockeyStates.onShoot) {
                isOnShoot = true;
            }

            this.graphicObject.visible = true;
        }
        // console.log("stick rotation: " + this.snapshotsBundle[0].rotation);
        // this.snapshotsBundle[0].rotation
        this.animationTween = TweenMax.to(this.gameObjectData, Settings.playerUpdateInterval, {
            rotation: this.snapshotsBundle[0].rotation,
            alpha: this.snapshotsBundle[0].alpha,
            pivot: this.snapshotsBundle[0].pivot,
            onComplete: () => {

                if (isOnShoot && this.graphicObject.visible) {
                    TweenMax.delayedCall(0.15, () => {
                        console.log("salam cacat se face visible false la update");

                        if (!this.isActive)
                            this.graphicObject.visible = false;
                        else
                            this.graphicObject.visible = true;

                    });
                }
            },
            ease: Linear.easeNone
        });

        // super.playSnapshot();
        this.snapshotsBundle.shift();
    }
}
