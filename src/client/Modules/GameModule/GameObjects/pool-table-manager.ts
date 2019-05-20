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
import {PoolTableGraphics} from "./pool-table-graphics";
import {GoalieMoverGameObject} from "./goalie/goalie-mover-game-object";
// import {PockeyPlayerManager} from "../pockey-player-manager";
import {SignalsManager} from "../../../qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../../SignalsModule/pockey-signal-types";
import {MaterialType, P2WorldManager} from "../p2-world-manager";
// import {BallType} from "../../../../common/pockey-game-settings";
import * as _ from "lodash";
import {PockeySettings} from "../../../pockey-settings";
import {TweenMax} from "gsap";
import * as p2 from "p2";
import {PockeyPlayerManager} from "../../../pockey-player-manager";
import {BallGameObject} from "./ball/ball-game-object";
import {Vector2} from "../../../qFramework/Utils/Vector2";
import {AbstractEntryPoint} from "../../../qFramework/AbstractEntryPoint";
import {PockeyStateTexts} from "../StateMachine/pockey-state-texts";
import {Utilities} from "../../../qFramework/Utils/utilies";
import {PockeyStateMachine, PockeyStates} from "../StateMachine/pockey-state-machine";
import {MouseHandler} from "../../../qFramework/Utils/mouse-handler";
import {PockeyGameObject} from "./pockey-game-object";
import {GoalieGraphicObject} from "./goalie/goalie-graphic-object";
import {BallGraphicObject} from "./ball/ball-graphic-object";
import {BallType} from "../../../../common/pockey-value-objects";
// import {PockeySettings} from "../../../pockey-settings";
// import {AbstractEntryPoint} from "../../../qFramework/AbstractEntryPoint";

export class PoolTableManager {
    //raycast graphics
    protected startRayCastPoint: [number, number] = [0, 0];
    protected endRayCastPoint: [number, number] = [0, 0];
    protected raycastResult: p2.RaycastResult = new p2.RaycastResult();
    protected rayClosest: p2.Ray = new p2.Ray({
        mode: p2.Ray.CLOSEST,
        skipBackfaces: true
    } as p2.RayOptions);

    protected shortestContactDistance: number;
    protected newPos: Vector2;
    protected repositionWhiteBallEnabled: boolean = false;
    protected lastGoodRepositionPoint: Vector2;

    protected hitPoint: [number, number] = p2.vec2.create();
    protected arrowsDeviationLength: number = 0;
    protected whiteBallDirectionMesh: any;
    protected whiteBallPostCollisionDirectionMesh: any;
    protected whiteBallDashedMesh: any;
    protected otherBallPostCollisionDirectionMesh: any;

    protected ballPositionCircleMesh: any;
    protected ballPositionCircleOnRaycastMesh: any;
    protected raycastFollowerMesh: any;

    public whiteBallReflectionArrowMesh: any;
    public otherBallReflectionArrowMesh: any;
    protected lineBetweenCirclesPoints: number[][];
    protected otherBallDirectionPoints: number[][];
    protected whiteBallDirectionPoints: number[][];
    protected whiteBallDashedPoints: number[][];
    protected graphColor: BABYLON.Color4;
    protected graphicsHidden: boolean = false;

    //end of raycast graphics

    protected goalieMover: GoalieMoverGameObject;
    protected contactEnabled: boolean = false;
    protected isFirstShoot: boolean = true;


    protected repositionStarted: boolean = false;
    protected whiteBallVelocityNeedsUpdate: boolean = false;

    public whiteBallPositionOnCollision: Vector2 = new Vector2();
    public whiteBallDirectionOnCollision: Vector2 = undefined;
    public whiteBallSpeedOnCollision: number = 0;
    public otherBallDirectionOnCollision: Vector2 = undefined;
    public otherBallSpeedOnCollision: number = 0;
    public otherBallOnCollision: BallGameObject;

    // private whiteBallNewVelocity: Vector2;

    constructor(protected pooltable: PoolTableGraphics) {

        this.registerSignalsHandlers();
        this.updateP2World();
        this.createMeshes();


        this.lineBetweenCirclesPoints = [];
        this.otherBallDirectionPoints = [];
        this.whiteBallDirectionPoints = [];
        this.whiteBallDashedPoints = [];
        this.graphColor = new BABYLON.Color4(1, 1, 1, 1);
        this.hideBallRayGraphics();
    }

    private updateP2World(): void {

        P2WorldManager.Instance().world.emitImpactEvent = true;
        // this.pooltable.whiteBall.p2Body.on("postStep", () => {
        //     console.log("alba a avut impact");
        // });
        // P2WorldManager.Instance().world.on("beginContact", () => {
        //         //
        //         // });

        // _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
        //     P2WorldManager.Instance().world.addBody(ball.p2Body);
        //     // ball.addShadow();
        // });
        this.goalieMover = new GoalieMoverGameObject(this.pooltable.leftGoalie, this.pooltable.rightGoalie, "goalieMover");
        PockeyPlayerManager.Instance().player.pockeyGameWorld.addGameObject(this.goalieMover);

        this.createUpperCollisionPolygon();
        this.createUpperCollisionShadowPolygon();
        this.createBottomCollisionPolygon();
        this.createBottomCollisionShadowPolygon();

        // _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
        //     if (!ball.canBeRemoved) {
        //         ball.addShadowBody();
        //     }
        // });
        this.addShadows();

        P2WorldManager.Instance().world.on("postStep", () => {
            if (this.contactEnabled) {
                let isOwnBall: boolean = false;

                let whiteBallSpeed: number = this.pooltable.whiteBall.speed() * 0.6;
                let whiteBallPosition: Vector2 = new Vector2(this.pooltable.whiteBall.p2Body.position[0], this.pooltable.whiteBall.p2Body.position[1]);

                _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
                    if (ball != this.pooltable.whiteBall && this.contactEnabled) {
                        let ballPosition: Vector2 = new Vector2(ball.p2Body.position[0], ball.p2Body.position[1]);

                        if (ballPosition.distanceTo(whiteBallPosition) <= (ball.radius + this.pooltable.whiteBall.radius )) {

                            if(this.whiteBallDirectionOnCollision != undefined)
                            {
                                this.pooltable.whiteBall.p2Body.velocity = [0, 0];
                                this.pooltable.whiteBall.setPosition(this.whiteBallPositionOnCollision.x, this.whiteBallPositionOnCollision.y);

                                let opposite: number = this.whiteBallDirectionOnCollision.y - this.whiteBallPositionOnCollision.y;
                                let adjacent: number = this.whiteBallDirectionOnCollision.x - this.whiteBallPositionOnCollision.x;
                                let raycastAngle: number = Math.atan2(opposite, adjacent);

                                let whiteBallNewVelocity: Vector2 = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).normalise().multiply(whiteBallSpeed);

                                this.addBodies();

                                this.pooltable.whiteBall.p2Body.velocity = [whiteBallNewVelocity.x, whiteBallNewVelocity.y];
                            }

                            if(this.otherBallDirectionOnCollision != undefined)
                            {
                                let opposite: number = this.otherBallDirectionOnCollision.y - ball.gameObjectData.yPos;
                                let adjacent: number = this.otherBallDirectionOnCollision.x - ball.gameObjectData.xPos;
                                let raycastAngle: number = Math.atan2(opposite, adjacent);

                                let ballNewVelocity: Vector2 = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).normalise().multiply(whiteBallSpeed);

                                this.addBodies();

                                ball.p2Body.velocity = [ballNewVelocity.x, ballNewVelocity.y];
                            }


                            this.contactEnabled = false;
                            return true;
                        }
                    }
                });

                if (isOwnBall) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.OWN_BALL_TOUCHED_FIRST);

                    // SignalsManager.DispatchSignal(PockeySignalTypes.FIRST_BALL_FAULT);
                    // SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.whiteBallFault]);
                }
            }
        });
        /*P2WorldManager.Instance().world.on("postStep", () => {
            if (this.whiteBallVelocityNeedsUpdate) {
                // let whiteBallPosition: Vector2 = new Vector2(this.pooltable.whiteBall.p2Body.position[0], this.pooltable.whiteBall.p2Body.position[1]);

                // _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
                //     if (ball != this.pooltable.whiteBall) {
                //
                //         let ballPosition: Vector2 = new Vector2(ball.gameObjectData.xPos, ball.gameObjectData.yPos);
                //         if (ballPosition.distanceTo(whiteBallPosition) <= (ball.radius + this.pooltable.whiteBall.radius)) {
                //
                //             _.forEach(this.pooltable.balls, (otherBall: BallGameObject) => {
                //                 if (!otherBall.gameObjectData.canBeRemoved && otherBall != this.pooltable.whiteBall) {
                //                     P2WorldManager.Instance().world.addBody(otherBall.p2Body);
                //                     otherBall.p2Body.wakeUp();
                //                 }
                //             });
                // this.pooltable.whiteBall.setPosition(this.whiteBallPositionOnCollision.x, this.whiteBallPositionOnCollision.y);

                this.pooltable.whiteBall.p2Body.velocity = [0, 0];
                this.otherBallOnCollision.p2Body.velocity = [0, 0];
                if (this.whiteBallDirectionOnCollision && this.otherBallDirectionOnCollision) {
                    let whiteBallSpeed: number = this.pooltable.whiteBall.speed() * 0.6;
                    this.pooltable.whiteBall.setPosition(this.whiteBallPositionOnCollision.x, this.whiteBallPositionOnCollision.y);

                    let opposite: number = this.whiteBallDirectionOnCollision.y - this.whiteBallPositionOnCollision.y;
                    let adjacent: number = this.whiteBallDirectionOnCollision.x - this.whiteBallPositionOnCollision.x;
                    let raycastAngle: number = Math.atan2(opposite, adjacent);

                    let whiteBallNewVelocity: Vector2 = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).normalise().multiply(whiteBallSpeed);
                    this.pooltable.whiteBall.p2Body.velocity = [whiteBallNewVelocity.x, whiteBallNewVelocity.y];

                    opposite = this.otherBallDirectionOnCollision.y - this.otherBallOnCollision.gameObjectData.yPos;
                    adjacent = this.otherBallDirectionOnCollision.x - this.otherBallOnCollision.gameObjectData.xPos;
                    raycastAngle = Math.atan2(opposite, adjacent);

                    let ballNewVelocity: Vector2 = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).normalise().multiply(whiteBallSpeed);
                    this.otherBallOnCollision.p2Body.velocity = [ballNewVelocity.x, ballNewVelocity.y];
                }

                this.whiteBallVelocityNeedsUpdate = false;
            }


            // }
            // });
            // }
        });

        // P2WorldManager.Instance().world.on("impact", () => {
        //     console.log("impact");
        //
        // });

        P2WorldManager.Instance().world.on("impact", (evt: any) => {
            console.log("impact");
            if (this.contactEnabled) {
                let isOwnBall: boolean = false;


                if (!_.isNull(evt.shapeA.radius) && !_.isUndefined(evt.shapeA.radius) &&
                    !_.isNull(evt.shapeB.radius) && !_.isUndefined(evt.shapeB.radius)) {
                    // console.log("penalty!!!!!");
                    let firstBall: BallGameObject = this.getBallByShadow(evt.bodyA);
                    if(firstBall == undefined)
                    {
                        firstBall = this.getBallByBody(evt.bodyA);
                    }
                    let secondBall: BallGameObject = this.getBallByShadow(evt.bodyB);
                    if(secondBall == undefined)
                    {
                        secondBall = this.getBallByBody(evt.bodyB);
                    }
                    if(firstBall == secondBall)
                    {
                        return;
                    }

                    if (firstBall == this.pooltable.whiteBall) {
                        this.contactEnabled = false;
                        this.whiteBallVelocityNeedsUpdate = true;
                        if (secondBall.ballType == PockeyPlayerManager.Instance().player.data.type) {
                            isOwnBall = true;
                        }
                        this.otherBallOnCollision = secondBall;
                        // this.pooltable.whiteBall.p2Body.velocity = [0, 0];
                        // this.otherBallOnCollision.p2Body.velocity = [0, 0];
                        /////
                        // if (this.whiteBallDirectionOnCollision && this.otherBallDirectionOnCollision) {
                        //     let whiteBallSpeed: number = this.pooltable.whiteBall.speed() * 0.6;
                        //     this.pooltable.whiteBall.setPosition(this.whiteBallPositionOnCollision.x, this.whiteBallPositionOnCollision.y);
                        //
                        //     let opposite: number = this.whiteBallDirectionOnCollision.y - this.whiteBallPositionOnCollision.y;
                        //     let adjacent: number = this.whiteBallDirectionOnCollision.x - this.whiteBallPositionOnCollision.x;
                        //     let raycastAngle: number = Math.atan2(opposite, adjacent);
                        //
                        //     let whiteBallNewVelocity: Vector2 = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).normalise().multiply(whiteBallSpeed);
                        //     this.pooltable.whiteBall.p2Body.velocity = [whiteBallNewVelocity.x, whiteBallNewVelocity.y];
                        //
                        //     opposite = this.otherBallDirectionOnCollision.y - this.otherBallOnCollision.gameObjectData.yPos;
                        //     adjacent = this.otherBallDirectionOnCollision.x - this.otherBallOnCollision.gameObjectData.xPos;
                        //     raycastAngle = Math.atan2(opposite, adjacent);
                        //
                        //     let ballNewVelocity: Vector2 = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).normalise().multiply(whiteBallSpeed);
                        //     this.otherBallOnCollision.p2Body.velocity = [ballNewVelocity.x, ballNewVelocity.y];
                        // }
                        /////

                        // return true;
                    } else if (secondBall == this.pooltable.whiteBall) {
                        this.contactEnabled = false;
                        this.whiteBallVelocityNeedsUpdate = true;
                        if (firstBall.ballType == PockeyPlayerManager.Instance().player.data.type) {
                            isOwnBall = true;
                        }
                        this.otherBallOnCollision = firstBall;
                        // this.pooltable.whiteBall.p2Body.velocity = [0, 0];
                        // this.otherBallOnCollision.p2Body.velocity = [0, 0];
                        /////
                        // if (this.whiteBallDirectionOnCollision && this.otherBallDirectionOnCollision) {
                        //     let whiteBallSpeed: number = this.pooltable.whiteBall.speed() * 0.6;
                        //     this.pooltable.whiteBall.setPosition(this.whiteBallPositionOnCollision.x, this.whiteBallPositionOnCollision.y);
                        //
                        //     let opposite: number = this.whiteBallDirectionOnCollision.y - this.whiteBallPositionOnCollision.y;
                        //     let adjacent: number = this.whiteBallDirectionOnCollision.x - this.whiteBallPositionOnCollision.x;
                        //     let raycastAngle: number = Math.atan2(opposite, adjacent);
                        //
                        //     let whiteBallNewVelocity: Vector2 = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).normalise().multiply(whiteBallSpeed);
                        //     this.pooltable.whiteBall.p2Body.velocity = [whiteBallNewVelocity.x, whiteBallNewVelocity.y];
                        //
                        //     opposite = this.otherBallDirectionOnCollision.y - this.otherBallOnCollision.gameObjectData.yPos;
                        //     adjacent = this.otherBallDirectionOnCollision.x - this.otherBallOnCollision.gameObjectData.xPos;
                        //     raycastAngle = Math.atan2(opposite, adjacent);
                        //
                        //     let ballNewVelocity: Vector2 = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).normalise().multiply(whiteBallSpeed);
                        //     this.otherBallOnCollision.p2Body.velocity = [ballNewVelocity.x, ballNewVelocity.y];
                        // }
                        /////

                        // return true;
                    }


                }

                if (isOwnBall) {
                    SignalsManager.DispatchSignal(PockeySignalTypes.OWN_BALL_TOUCHED_FIRST);

                    // SignalsManager.DispatchSignal(PockeySignalTypes.FIRST_BALL_FAULT);
                    // SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.whiteBallFault]);
                }
            }


        }, this);*/


    }

    //@ts-ignore
    private getBallByBody(body: p2.Body): BallGameObject {
        let ballByBody: BallGameObject = undefined;

        _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
            if (ball.p2Body === body) {
                ballByBody = ball;
                return true;
            }
        });

        return ballByBody;
    }

    //@ts-ignore
    private getBallByShadow(body: p2.Body): BallGameObject {
        let ballByBody: BallGameObject = undefined;

        _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
            if (ball.p2Shadow === body) {
                ballByBody = ball;
                return true;
            }
        });

        return ballByBody;
    }

    // @ts-ignore
    private checkIfOwnBall(body: p2.Body): boolean {

        let isOwnBall: boolean = false;
        _.forEach(this.pooltable.balls, (ball: PockeyGameObject) => {
            if (ball.ballType == PockeyPlayerManager.Instance().player.data.type && ball.p2Body.id == body.id) {
                isOwnBall = true;
            }
        });
        return isOwnBall;
    }

    private registerSignalsHandlers(): void {

        // SignalsManager.AddSignalCallback(PockeySignalTypes.ASSIGN_PLAYER, this.onDefinePlayerInterface.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_POOLTABLE, this.onShowPoolTable.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_POOLTABLE, this.onHidePoolTable.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_POOLTABLE, this.onResetPoolTable.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_STICK_POWER, this.onResetStickPower.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS, this.hideBallRayGraphics.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.REACTIVATE_STICK, this.reactivateStick.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.SHOOT_BALL, this.onShoot.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.APPLY_POOLTABLE_STATE, this.applyTimeState.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_OPPONENT_COLOR, this.onChangeOpponentColor.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_PLAYER_COLOR, this.onChangePlayerColor.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetSides.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_TEXT_ON_WATCH, this.onUpdateUITextOnWatch.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.CREATE_POOLTABLE_STATE, this.onCreatePoolTableTimeState.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_WHITE_BALL_STATUS, this.changeWhiteBallStatus.bind(this));

        /* SignalsManager.AddSignalCallback(PockeySignalTypes.ANIMATE_PUCK_GOAL, this.onAnimatePuckGoal.bind(this));
         SignalsManager.AddSignalCallback(PockeySignalTypes.ANIMATE_PUCK_GOAL_STOP, this.onStopAnimatePuckGoal.bind(this));*/

        // SignalsManager.AddSignalCallback(PockeySignalTypes.BALL_IN_POCKET, this.ballInPocketHandler.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.REPOSITION_WHITE_BALL, this.onRepositionWhiteBall.bind(this));
        // SignalsManager.AddSignalCallback(SignalsType.FIRST_ROUND, this.onStarted.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.REPOSITION_STICK, this.repositionStick.bind(this));
    }

    protected onSetSides(): void {

        // let currentPlayerSide: BallType;

        // if (PockeyPlayerManager.Instance().currentPlayerSocketID == PockeyPlayerManager.Instance().player.data.socketID) {
        //     currentPlayerSide = PockeyPlayerManager.Instance().player.data.type;
        // } else {
        //     currentPlayerSide = PockeyPlayerManager.Instance().opponent.type;
        // }

        // if (this.poolTable.leftGoal.type == BallType.Opponent) {
        //     this.poolTable.leftGoal.tint = color;
        // } else {
        //     this.poolTable.rightGoal.tint = color;
        // }
        //
        // if (this.poolTable.leftGoalie.type == BallType.Opponent) {
        //     this.poolTable.leftGoalie.goalieMiddleLayer.tint = color;
        // } else {
        //     this.poolTable.rightGoalie.goalieMiddleLayer.tint = color;
        // }

        let leftSideColor: number;
        let rightSideColor: number;

        if (PockeyPlayerManager.Instance().player.data.type == BallType.Left) {
            leftSideColor = parseInt(PockeyPlayerManager.Instance().player.data.color, 16);
            rightSideColor = parseInt(PockeyPlayerManager.Instance().opponent.color, 16);
        } else {
            leftSideColor = parseInt(PockeyPlayerManager.Instance().opponent.color, 16);
            rightSideColor = parseInt(PockeyPlayerManager.Instance().player.data.color, 16);
        }

        (this.pooltable.leftGoalie.graphicObject as GoalieGraphicObject).updateColor(leftSideColor);
        this.pooltable.leftGoal.updateColor(leftSideColor);
        (this.pooltable.rightGoalie.graphicObject as GoalieGraphicObject).updateColor(rightSideColor);
        this.pooltable.rightGoal.updateColor(rightSideColor);

        this.goalieMover.startMoving();

        _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
            ball.setPosition(ball.initialPosition.x, ball.initialPosition.y);
            ball.reset();
            ball.graphicObject.alpha = 1;
            if (ball.ballType == BallType.Left) {
                //PockeyPlayerManager.Instance().player.data.color
                (ball.graphicObject as BallGraphicObject).updateColor(Utilities.BabylonHexToRGB(leftSideColor));
            } else if (ball.ballType == BallType.Right) {
                (ball.graphicObject as BallGraphicObject).updateColor(Utilities.BabylonHexToRGB(rightSideColor));

            }
        });
        // _.forEach(this.pooltable.balls, (ball:BallGameObject)=>{
        //    {
        //        if(ball.gameObjectData.ballType == PockeyPlayerManager.Instance().player.data.ballType)
        //        {
        //             ball.gameObjectData.socketID = PockeyPlayerManager.Instance().player.data.socketID;
        //        }
        // });
        // let leftSideType: BallType = (this.player.ballType == "left") ? this.player.type : this.opponent.type;
        //
        // let rightSideType: BallType = (leftSideType == BallType.Player) ? this.opponent.type : this.player.type;
        // this.poolTable.leftGoal.type = leftSideType;
        // this.poolTable.leftGoalie.type = leftSideType;
        //
        // this.poolTable.rightGoal.type = rightSideType;
        // this.poolTable.rightGoalie.type = rightSideType;
        //
        // _.forEach(this.poolTable.leftBallsArray, (ball: AbstractBall) => {
        //     // if (ball.ballType == "left") {
        //     // console.log("salam se seteaza onSetSides in pool manager");
        //     console.log("%c salam se seteaza onSetSides in pool manager", "color: #ff9900");
        //
        //     ball.ballType = leftSideType;
        //
        //     // }
        //     // else if (ball.ballType == "right") {
        //     //     ball.ballType = params[1];
        //     // }
        // });
        //
        // _.forEach(this.poolTable.rightBallsArray, (ball: AbstractBall) => {
        //     // if (ball.ballType == "left") {
        //     ball.ballType = rightSideType;
        //     // }
        //     // else if (ball.ballType == "right") {
        //     //     ball.ballType = params[1];
        //     // }
        // });
        //
        // this.onChangePlayerColor(this.player.color);
        // this.onChangeOpponentColor(this.opponent.color);
    }

    private hideBallRayGraphics(): void {
        this.ballPositionCircleMesh.setEnabled(false);
        this.ballPositionCircleOnRaycastMesh.setEnabled(false);
        this.raycastFollowerMesh.setEnabled(false);
        this.whiteBallReflectionArrowMesh.setEnabled(false);
        this.otherBallReflectionArrowMesh.setEnabled(false);

        if (this.whiteBallDirectionMesh)
            this.whiteBallDirectionMesh.setEnabled(false);//();
        if (this.otherBallPostCollisionDirectionMesh)
            this.otherBallPostCollisionDirectionMesh.setEnabled(false);
        if (this.whiteBallPostCollisionDirectionMesh)
            this.whiteBallPostCollisionDirectionMesh.setEnabled(false);
        if (this.whiteBallDashedMesh)
            this.whiteBallDashedMesh.setEnabled(false);//();

        this.graphicsHidden = true;
    }

    protected onShoot(): void {
        // console.log("%c Pool T Manager: intra la onShoot ", "background: red; color: white; font-weight:bold; ");

        PockeyStateMachine.Instance().changeState(PockeyStates.onShoot);

        this.onStopAnimatePuckGoal();

        this.contactEnabled = true;
        // this.ballWasShot = true;
        // this.ticker.add(this.update, this);
        // let power = this.poolTable.poolStick.power;
        if(this.whiteBallDirectionOnCollision == undefined || this.otherBallDirectionOnCollision == undefined)
        {
            this.addBodies();
        }
        else
        {
            this.removeBodies();
            P2WorldManager.Instance().world.addBody(this.pooltable.whiteBall.p2Body);
        }

        let velo: Vector2 = new Vector2(this.pooltable.stick.power * Math.cos(this.pooltable.stick.gameObjectData.rotation), this.pooltable.stick.power * Math.sin(this.pooltable.stick.gameObjectData.rotation));

        // P2WorldManager.Instance().world.removeBody(this.pooltable.whiteBall.p2Shadow);



        this.pooltable.whiteBall.p2Body.wakeUp();
        this.pooltable.whiteBall.reset();
        this.pooltable.whiteBall.onShoot(velo);
        // P2WorldManager.Instance().world.removeBody(this.pooltable.whiteAbstract.p2Shadow);
        // P2WorldManager.Instance().world.removeBody(this.pooltable.blackBall.p2Shadow);
        // this.pooltable.whiteAbstract.p2Body.wakeUp();
        // this.pooltable.blackBall.p2Body.wakeUp();
        //
        // this.pooltable.whiteAbstract.p2Body.velocity = [60, 0];
        // console.log("velo length" + this.velocity.length());
        // this.moving = true;

        // this.pooltable.whiteBall.isOnRearrange = false;
        this.pooltable.stick.power = 0;

        this.isFirstShoot = false;

        this.hideBallRayGraphics();

        /*this.poolTable.poolStick.hide();
        this.hideBallRayGraphics();*/
        // this.shootingEnded = true;
        // if (this.shootingEnded) {
        // console.log("aici la 3");

        // this.shootingEnded = false;
        // this.ballWasShot = true;
        // return;
        // this.repositionStick();
        // }


        // console.log("mumu !!!!: " + this.expectedCollisionPoint.x, this.expectedCollisionPoint.y);

        /* let s: PIXI.Graphics = new PIXI.Graphics();
         s.beginFill(0xff9900);
         s.drawCircle(this.whiteBallPositionOnCollision.x, this.whiteBallPositionOnCollision.y, 4);
         s.drawCircle(this.whiteBallDirectionOnCollision.x, this.whiteBallDirectionOnCollision.y, 4);
         s.endFill();
         this.pooltable.addChild(s);*/
    }

    private createMeshes(): void {
        this.ballPositionCircleMesh = this.create2Dpoly({radius: PockeySettings.BALL_RADIUS - 2}, AbstractEntryPoint.scene);
        this.ballPositionCircleMesh.enableEdgesRendering();
        this.ballPositionCircleMesh.edgesWidth = 10;
        this.ballPositionCircleMesh.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
        this.ballPositionCircleMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
        this.ballPositionCircleMesh.position.x = 40;
        this.ballPositionCircleMesh.position.y = 40;

        this.ballPositionCircleOnRaycastMesh = this.create2Dpoly({radius: PockeySettings.BALL_RADIUS + 6}, AbstractEntryPoint.scene);
        this.ballPositionCircleOnRaycastMesh.enableEdgesRendering();
        this.ballPositionCircleOnRaycastMesh.edgesWidth = 10;
        this.ballPositionCircleOnRaycastMesh.position.z = -PockeySettings.BALL_RADIUS * 2;

        this.raycastFollowerMesh = this.create2Dpoly({radius: PockeySettings.BALL_RADIUS}, AbstractEntryPoint.scene);
        this.raycastFollowerMesh.enableEdgesRendering();
        this.raycastFollowerMesh.edgesWidth = 10;
        this.raycastFollowerMesh.position.z = -PockeySettings.BALL_RADIUS * 2;

        let arrowsPoints: BABYLON.Vector3[] = [
            new BABYLON.Vector3(0, -10, 0),
            new BABYLON.Vector3(0, 0, 0),
            new BABYLON.Vector3(-1.7, 0, 0),
            new BABYLON.Vector3(10.5, 0, 0)];

        this.whiteBallReflectionArrowMesh = BABYLON.Mesh.CreateLines("whiteBallReflectionArrowMesh", arrowsPoints, AbstractEntryPoint.scene);
        this.whiteBallReflectionArrowMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
        this.whiteBallReflectionArrowMesh.enableEdgesRendering();
        this.whiteBallReflectionArrowMesh.edgesWidth = 9;
        this.whiteBallReflectionArrowMesh.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
        this.whiteBallReflectionArrowMesh.position.z = -PockeySettings.BALL_RADIUS * 2;

        this.otherBallReflectionArrowMesh = BABYLON.Mesh.CreateLines("otherBallReflectionArrowMesh", arrowsPoints, AbstractEntryPoint.scene);
        this.otherBallReflectionArrowMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
        this.otherBallReflectionArrowMesh.enableEdgesRendering();
        this.otherBallReflectionArrowMesh.edgesWidth = 9;
        this.otherBallReflectionArrowMesh.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
        this.otherBallReflectionArrowMesh.position.z = -PockeySettings.BALL_RADIUS * 2;

        this.whiteBallDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallDirectionMesh", {
            points: [BABYLON.Vector3.Zero(), BABYLON.Vector3.Zero()],
            updatable: true
        }, AbstractEntryPoint.scene);
        this.whiteBallDirectionMesh.z = -PockeySettings.BALL_RADIUS * 2;


        this.otherBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("otherBallPostCollisionDirectionMesh", {
            points: [BABYLON.Vector3.Zero(), BABYLON.Vector3.Zero()],
            updatable: true
        }, AbstractEntryPoint.scene);
        this.otherBallPostCollisionDirectionMesh.z = -PockeySettings.BALL_RADIUS * 2;

        this.whiteBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallPostCollisionDirectionMesh", {
            points: [BABYLON.Vector3.Zero(), BABYLON.Vector3.Zero()],
            updatable: true
        }, AbstractEntryPoint.scene);
        this.whiteBallPostCollisionDirectionMesh.z = -PockeySettings.BALL_RADIUS * 2;

        let myPoints = [
            new BABYLON.Vector3(0, 100, 10),
            new BABYLON.Vector3(100, 0, 10)
        ];

        this.whiteBallDashedMesh = BABYLON.MeshBuilder.CreateDashedLines("whiteBallDashedMesh", {
            points: myPoints,
            dashSize: 3,
            gapSize: 3,
            dashNb: 4,
            updatable: true
        }, AbstractEntryPoint.scene);

        this.whiteBallDashedMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
    }

    private create2Dpoly(options: any, scene: BABYLON.Scene) {
        let pos;
        let points = [];
        let disc = BABYLON.VertexData.CreateDisc(options);
        pos = disc.positions;
        //skip the center point
        for (let i = 1; i < disc.positions.length / 3; i++) {
            points.push(new BABYLON.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]));
        }

        return BABYLON.MeshBuilder.CreateLines("circle", {points: points}, scene);
    }

    public addShadows(): void {
        _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
            if (!ball.gameObjectData.canBeRemoved) {
                ball.addShadowBody();
            }
        });
    }

    public removeShadows(): void {
        _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
            if (!ball.gameObjectData.canBeRemoved) {
                ball.removeShadowBody();
            }
        });
    }

    public removeBodies(): void {
        _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
            if (!ball.gameObjectData.canBeRemoved) {
                ball.removeBody();
            }
        });
    }

    public addBodies(): void {
        _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
            if (!ball.gameObjectData.canBeRemoved) {
                ball.addBody();
            }
        });
    }

    public update(delta: number): void {
        // this.pooltable.whiteBall.update();


        // this.pooltable.whiteAbstract.update();
        // this.pooltable.blackBall.update();
        if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRearrangeStick) {
            this.onRearrangeStick();
        } else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onRepositionWhiteBall) {
            this.onRepositionWhiteBall();
        } else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onWatch) {

            if (this.pooltable.whiteBall.gameObjectData.isOnReposition == true) {
//                 console.log("intra la watch -> reposition");

                this.hideBallRayGraphics();
                if (this.ballPositionCircleMesh) {
                    this.ballPositionCircleMesh.setEnabled(true);
                }
                this.ballPositionCircleMesh.position.x = this.pooltable.whiteBall.gameObjectData.xPos;
                this.ballPositionCircleMesh.position.y = -this.pooltable.whiteBall.gameObjectData.yPos - PockeySettings.BABYLON_Y_OFFSET;
            } else if (this.pooltable.stick.gameObjectData.state == PockeyStates.onShoot && !this.graphicsHidden) {
                this.hideBallRayGraphics();
            } else {
//                 console.log("intra la watch -> rearrange");

                this.onRearrangeStick();
            }

        } else if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onShoot) {
            /* if (this.whiteBallVelocityNeedsUpdate) {
                 // let opposite: number = this.pooltable.whiteBall.p2Body.position[0] - this.pooltable.stick.whiteBallDirection.x;
                 // let adjacent: number = this.pooltable.whiteBall.p2Body.position[1] - this.pooltable.stick.whiteBallDirection.y;
                 // let raycastAngle: number = Math.atan2(opposite, adjacent);
                 //
                 // let whiteBallNewVelocity:Vector2 = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).multiply(100);
                 // let opposite: number = this.pooltable.whiteBall.p2Body.position[0] - this.pooltable.stick.whiteBallDirection.x;
                 // let adjacent: number = this.pooltable.whiteBall.p2Body.position[1] - this.pooltable.stick.whiteBallDirection.y;
                 // let raycastAngle: number = Math.atan2(opposite, adjacent);

                 // this.whiteBallNewVelocity = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).multiply(this.pooltable.whiteBall.speed());
                 // this.pooltable.whiteBall.p2Body.sleep();
                 // evt.bodyB.sleep();

                 // this.pooltable.whiteBall.p2Body.velocity = [this.whiteBallNewVelocity.x, this.whiteBallNewVelocity.y];

                 this.whiteBallVelocityNeedsUpdate = false;
             }*/
            if (!this.ballsAreMoving()) {
                SignalsManager.DispatchSignal(PockeySignalTypes.END_TURN);
            }
        } else {
            this.pooltable.stick.isActive = false;
        }

        this.goalieMover.update(delta);

        _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
            ball.update();
        });

        this.pooltable.stick.update();


    }

    protected ballsAreMoving(): boolean {
        // if(this.poolTable.balls.length <= 0)
        // {
        //     return false;
        // }
        let areMoving: boolean = false;
        _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
            if (ball.moving || ball.animationInProgress) {

                areMoving = true;
                return;
            }
        });

        return areMoving;
    }

    protected onStopAnimatePuckGoal(): void {

        this.pooltable.leftGoal.stopAnimation();
        this.pooltable.rightGoal.stopAnimation();
    }

    protected onRearrangeStick(): void {
        this.graphicsHidden = false;

        // if (!this.goaliesHolder.moving)
        //     this.goaliesHolder.moving = true;

        if (!this.pooltable.whiteBall.isOnRearrange) {
            this.pooltable.whiteBall.isOnRearrange = true;
        }

        /*if (!this.pooltable.stick.isActive) {
            _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
                ball.addShadowBody();
            });
            // this.poolTable.raycastFollower.visible = true;
            // this.poolTable.ballPositionCircleOnRaycast.visible = true;

            this.pooltable.stick.activate(new PIXI.Point(this.pooltable.whiteBall.gameObjectData.xPos, this.pooltable.whiteBall.gameObjectData.yPos));
            // console.log("PockeyStateMachine.Instance().fsm.currentState: " + PockeyStateMachine.Instance().fsm.currentState);
        }*/
        this.pooltable.whiteBall.setPosition(this.pooltable.whiteBall.gameObjectData.xPos, this.pooltable.whiteBall.gameObjectData.yPos);

        // if (this.pooltable.stick.rotationEnabled) {

        if (this.whiteBallDirectionMesh) {
            this.whiteBallDirectionMesh.setEnabled(false);//();
        }
        if (this.whiteBallPostCollisionDirectionMesh) {
            this.whiteBallPostCollisionDirectionMesh.setEnabled(false);//();
        }
        if (this.otherBallPostCollisionDirectionMesh) {
            this.otherBallPostCollisionDirectionMesh.setEnabled(false);
        }
        if (this.whiteBallDashedMesh) {
            this.whiteBallDashedMesh.setEnabled(false);//();
        }
        if (this.ballPositionCircleMesh) {
            this.ballPositionCircleMesh.setEnabled(false);
        }
        if (this.raycastFollowerMesh) {

            this.raycastFollowerMesh.setEnabled(true);
        }
        if (this.ballPositionCircleOnRaycastMesh) {
            this.ballPositionCircleOnRaycastMesh.setEnabled(true);
        }

        this.whiteBallReflectionArrowMesh.setEnabled(false);
        this.otherBallReflectionArrowMesh.setEnabled(false);

        let localPoint: PIXI.Point = new PIXI.Point(this.pooltable.whiteBall.gameObjectData.xPos + Math.cos(this.pooltable.stick.gameObjectData.rotation),
            this.pooltable.whiteBall.gameObjectData.yPos + Math.sin(this.pooltable.stick.gameObjectData.rotation));

        // if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onWatch) {
        //     localPoint //this.pooltable.toLocal(new PIXI.Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
        // } else {
        //     localPoint = this.pooltable.toLocal(new PIXI.Point(MouseHandler.Instance().position.x, MouseHandler.Instance().position.y));
        // }

        let opposite: number = localPoint.y - this.pooltable.whiteBall.gameObjectData.yPos;
        let adjacent: number = localPoint.x - this.pooltable.whiteBall.gameObjectData.xPos;
        let rot: number = Math.atan2(opposite, adjacent);

        let dir: Vector2 = new Vector2(Math.cos(rot), Math.sin(rot)).multiply(1100);

        this.newPos = new Vector2(this.pooltable.whiteBall.gameObjectData.xPos + dir.x, this.pooltable.whiteBall.gameObjectData.yPos + dir.y);
        let whiteBallPosition: Vector2 = new Vector2(this.pooltable.whiteBall.gameObjectData.xPos, this.pooltable.whiteBall.gameObjectData.xPos);
        this.shortestContactDistance = this.newPos.distanceTo(whiteBallPosition);
        //===================
        this.startRayCastPoint[0] = this.pooltable.whiteBall.gameObjectData.xPos;
        this.startRayCastPoint[1] = this.pooltable.whiteBall.gameObjectData.yPos;
        this.endRayCastPoint[0] = this.newPos.x;
        this.endRayCastPoint[1] = this.newPos.y;

        p2.vec2.copy(this.rayClosest.from, this.startRayCastPoint);
        p2.vec2.copy(this.rayClosest.to, this.endRayCastPoint);
        // this.rayClosest.
        this.rayClosest.update();
        this.raycastResult.reset();
        P2WorldManager.Instance().world.raycast(this.raycastResult, this.rayClosest);
        this.drawRayResult(this.raycastResult, this.rayClosest);
        // }
    }

    protected drawRayResult(result: any, ray: any) {
        // console.log("aici la 5");

        result.getHitPoint(this.hitPoint, ray);
        // Draw hit point
        if (result.hasHit()) {
            let hexDefaultColor: BABYLON.Color4 = new BABYLON.Color4(1, 1, 1, 1);
            this.graphColor = hexDefaultColor;

            this.otherBallDirectionPoints = [];
            this.whiteBallDirectionPoints = [];
            this.whiteBallDashedPoints = [];
            // this.graph.tint = defaultColor;
            // this.poolTable.raycastFollower.visible = true;
            // if (this.poolTable.raycastFollower.getChildByName("graphics")) {
            //     (this.poolTable.raycastFollower.getChildByName("graphics") as Graphics).tint = defaultColor;
            // }
            // if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
            //     (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics") as Graphics).tint = defaultColor;
            // }

            let hitPoint: Vector2 = new Vector2(this.hitPoint[0], this.hitPoint[1]);
            let rayFrom: Vector2 = new Vector2(ray.from[0], ray.from[1]);

            //creating the line from white ball to the next target

            let opposite: number = ray.from[1] - this.hitPoint[1];
            let adjacent: number = ray.from[0] - this.hitPoint[0];
            let raycastAngle: number = Math.atan2(opposite, adjacent);

            let rayCastLineStart: Vector2 = new Vector2();
            let rayCastLineEnd: Vector2 = new Vector2(Math.cos(raycastAngle), Math.sin(raycastAngle)).multiply(PockeySettings.BALL_RADIUS);

            rayCastLineEnd.x += hitPoint.x;//this.hitPoint[0];
            rayCastLineEnd.y += hitPoint.y;//this.hitPoint[1];

            rayCastLineStart.x = ray.from[0] - (PockeySettings.BALL_RADIUS + 4) * Math.cos(raycastAngle);
            rayCastLineStart.y = ray.from[1] - (PockeySettings.BALL_RADIUS + 4) * Math.sin(raycastAngle);
            // this.graph.lineStyle(4, defaultColor);

            this.lineBetweenCirclesPoints = [[rayCastLineEnd.x, -rayCastLineEnd.y - PockeySettings.BABYLON_Y_OFFSET], [rayCastLineStart.x, -rayCastLineStart.y - PockeySettings.BABYLON_Y_OFFSET]];

            let whiteBallPosition: Vector2 = new Vector2(this.pooltable.whiteBall.gameObjectData.xPos, this.pooltable.whiteBall.gameObjectData.yPos);
            let lineLength: number = whiteBallPosition.distanceTo(hitPoint);
            // console.log("line length: " + lineLength);
            if (lineLength > PockeySettings.BALL_RADIUS * 2) {
                this.whiteBallDirectionMesh = BABYLON.MeshBuilder.CreateLines("lines", {
                    points: [new BABYLON.Vector3(this.lineBetweenCirclesPoints[0][0], this.lineBetweenCirclesPoints[0][1], 0),
                        new BABYLON.Vector3(this.lineBetweenCirclesPoints[1][0], this.lineBetweenCirclesPoints[1][1], 0)],
                    instance: this.whiteBallDirectionMesh
                });
                this.whiteBallDirectionMesh.enableEdgesRendering();
                this.whiteBallDirectionMesh.edgesWidth = 10;
                this.whiteBallDirectionMesh.setEnabled(true);
            }


            // this.whiteBallDirectionMesh.color = 3.0;

            /*  this.graph.moveTo(rayCastLineEnd.x, rayCastLineEnd.y);
              this.graph.lineTo(rayCastLineStart.x, rayCastLineStart.y);*/
            // this.graph.tint = defaultColor;
            // this.whiteBallDirectionMesh.color = Color3.White();
            if (this.whiteBallDirectionMesh)
                this.whiteBallDirectionMesh.edgesColor = hexDefaultColor;

            this.raycastFollowerMesh.edgesColor = hexDefaultColor;
            this.ballPositionCircleOnRaycastMesh.edgesColor = hexDefaultColor;

            // this.whiteBallDirectionMesh.edgesColor = hexDefaultColor;
            // this.whiteBallDirectionMesh.color = hexDefaultColor;
            //
            // this.whiteBallDirectionMesh.diffuseColor = hexDefaultColor;

            // this.lineBetweenCirclesVisible = true;
            // this.lineBetweenCirclesPoints = [rayCastLineStart.x, rayCastLineStart.y, rayCastLineEnd.x, rayCastLineEnd.y];

            // this.poolTable.raycastFollower.x = hitPoint.x;
            // this.poolTable.raycastFollower.y = hitPoint.y;
            // this.raycastFollowerPosition = new Vector2(hitPoint.x, hitPoint.y)

            this.raycastFollowerMesh.position.x = hitPoint.x;
            this.raycastFollowerMesh.position.y = -hitPoint.y - PockeySettings.BABYLON_Y_OFFSET;

            this.whiteBallPositionOnCollision = new Vector2(hitPoint.x, hitPoint.y);

            // this.expectedCollisionPoint = new Vector2(hitPoint.x, hitPoint.y);

            // this.poolTable.ballPositionCircleOnRaycast.x = rayFrom.x;
            // this.poolTable.ballPositionCircleOnRaycast.y = rayFrom.y;

            this.ballPositionCircleOnRaycastMesh.position.x = rayFrom.x;
            this.ballPositionCircleOnRaycastMesh.position.y = -rayFrom.y - PockeySettings.BABYLON_Y_OFFSET;

            /*this.poolTable.whiteBallReflectionArrow.visible = false;
            this.poolTable.otherBallReflectionArrow.visible = false;*/
            // this.poolTable.ballPositionCircleOnRaycast.visible = true;
            this.whiteBallDirectionOnCollision = undefined;
            this.otherBallDirectionOnCollision = undefined;
            //if the follower hits a ball, then show collision directions graphics
            if (!_.isNull(result.shape.radius) && !_.isUndefined(result.shape.radius)) {
                let isOwnBall: boolean = this.checkIfOwnShadow(result.body);

                if (isOwnBall) {
                    hexDefaultColor = Utilities.BabylonHexToRGB(0xca384d);
                    this.graphColor = hexDefaultColor;

                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.ownBallAiming]);
                } else {
                    if (this.isFirstShoot) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                    } else {
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.yourTurnToShoot]);
                    }
                }

                // this.graphColor = defaultColor;

                // this.whiteBallDirectionMesh.color = Color3.Red();
                if (this.whiteBallDirectionMesh)
                    this.whiteBallDirectionMesh.edgesColor = hexDefaultColor;

                this.raycastFollowerMesh.edgesColor = hexDefaultColor;
                this.ballPositionCircleOnRaycastMesh.edgesColor = hexDefaultColor;

                // this.whiteBallDirectionMesh.diffuseColor = hexDefaultColor;

                let isPuck: boolean = this.checkIfPuck(result.body);
                if (isPuck) {
                    this.onAnimatePuckGoal();
                    // console.log("e puck!!!!");
                    SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.puckAiming]);
                } else {
                    this.onStopAnimatePuckGoal();
                    // console.log("nu e puck!!!!");

                }
                /*else {
                    if (this.isFirstShoot) {
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.beginGame]);
                    }
                }*/

                // this.graph.tint = defaultColor;
                // if (this.poolTable.raycastFollower.getChildByName("graphics")) {
                //     (this.poolTable.raycastFollower.getChildByName("graphics") as Graphics).tint = defaultColor;
                // }
                // if (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics")) {
                //     (this.poolTable.ballPositionCircleOnRaycast.getChildByName("graphics") as Graphics).tint = defaultColor;
                // }

                let startPoint: Vector2;
                let endPoint: Vector2;
                // let dottedLineArrowPoint: Vector2;
                let tangentVector: Vector2 = new Vector2();

                tangentVector.y = -(result.body.position[0] - this.hitPoint[0]);
                tangentVector.x = result.body.position[1] - this.hitPoint[1];

                tangentVector = tangentVector.normalise();


                // let deviationVector:Vector2 = (Math.cos(5 * Math.PI / 180), Math.sin(5 * Math.s)

                let relativeVelocity: Vector2 = new Vector2(this.hitPoint[0] - result.body.position[0], this.hitPoint[1] - result.body.position[1]);

                let length: number = tangentVector.dot(relativeVelocity);

                let cotangentVector: Vector2 = relativeVelocity.substract(tangentVector.multiply(length)).normalise();
                let directionLength: number = 38;

                let distanceToTheOtherBall: number =
                    new Vector2(this.hitPoint[0] - Math.cos(raycastAngle) * PockeySettings.BALL_RADIUS, this.hitPoint[1] - Math.sin(raycastAngle) * PockeySettings.BALL_RADIUS)
                        .distanceTo(new Vector2(result.body.position[0], result.body.position[1]));

                if (distanceToTheOtherBall > PockeySettings.BALL_RADIUS + result.shape.radius / 2) {
                    distanceToTheOtherBall = PockeySettings.BALL_RADIUS + result.shape.radius / 2;
                }
                let arrowScaleFactor: number = (1 - ((result.shape.radius / 2) / distanceToTheOtherBall)) / 0.5;
                arrowScaleFactor = Math.round(arrowScaleFactor * 1000) / 1000;

                /*this.graph.beginFill(0xffff00);
                this.graph.drawCircle(this.poolTable.whiteBall.x, this.poolTable.whiteBall.y, 4);
                this.graph.drawCircle(result.body.position[0], result.body.position[1], 4);
                this.graph.drawCircle(this.poolTable.raycastFollower.x, this.poolTable.raycastFollower.y, 4);
                this.graph.endFill();*/
                // this.arrowsDeviationLength = PockeySettings.BALL_RADIUS * 2 - this.calculateDeviation(new Vector2(hitPoint.x, hitPoint.y), new Vector2(this.pooltable.whiteBall.gameObjectData.xPos, this.pooltable.whiteBall.gameObjectData.yPos), new Vector2(result.body.position[0], result.body.position[1]));
                // console.log("deviationsalam: " + this.arrowsDeviationLength);

                /*   opposite = hitPoint.x - tangentVector.x;
                   adjacent = hitPoint.y - tangentVector.y;
                   raycastAngle = Math.atan2(opposite, adjacent);// + 5 * Math.PI / 180;

                   let tangentToHitPointDistance:number = tangentVector.distanceTo(hitPoint);

                   let newTangent:Vector2 =  */
                let whiteBallArrowAngleCorrection: number = 1;//(tangentVector.x * tangentVector.y < 0) ? -1 : 1;
                if (arrowScaleFactor > 0.03 && !isOwnBall) {
                    //white ball direction graphics

                    // let whiteBallArrowAngleCorrection: number = (tangentVector.x * tangentVector.y < 0) ? -1 : 1;


                    startPoint = new Vector2(this.hitPoint[0] - (PockeySettings.BALL_RADIUS * tangentVector.x), this.hitPoint[1] - (PockeySettings.BALL_RADIUS * tangentVector.y));
                    let opposedStartPoint: Vector2 = new Vector2(this.hitPoint[0] + (PockeySettings.BALL_RADIUS * tangentVector.x), this.hitPoint[1] + (PockeySettings.BALL_RADIUS * tangentVector.y));
                    // console.log("startPoint.distanceTo(rayFrom): " + startPoint.distanceTo(rayFrom));
                    // console.log("oppStartPoint.distanceTo(rayFrom): " + opposedStartPoint.distanceTo(rayFrom));
                    // console.log("=====================");

                    if (startPoint.distanceTo(rayCastLineEnd) <= opposedStartPoint.distanceTo(rayCastLineEnd)) {
                        startPoint = opposedStartPoint;
                        whiteBallArrowAngleCorrection = -1;
                    }


                    opposite = startPoint.x - hitPoint.x;
                    adjacent = startPoint.y - hitPoint.y;
                    raycastAngle = Math.atan2(opposite, adjacent) + whiteBallArrowAngleCorrection * (Math.PI / 180);

// console.log("unghi ajustare: " + (this.arrowsDeviationLength / 3));
                    // point[1] - (Math.cos(angle) * distance)
                    startPoint = new Vector2(
                        hitPoint.x + Math.sin(raycastAngle) * PockeySettings.BALL_RADIUS,
                        hitPoint.y + Math.cos(raycastAngle) * PockeySettings.BALL_RADIUS);
                    //
                    /* this.graph.moveTo(this.poolTable.raycastFollower.x, this.poolTable.raycastFollower.y);
                     this.graph.lineTo(newStart.x, newStart.y);

                     this.graph.beginFill(0xff0000);
                     this.graph.drawCircle(newStart.x, newStart.y, 4);
                     this.graph.endFill();

                     this.graph.beginFill(0x00ff00);
                     this.graph.drawCircle(startPoint.x, startPoint.y, 4);
                     this.graph.endFill();*/
                    //
                    //

                    /* endPoint = new Vector2(
                         startPoint.x - whiteBallArrowAngleCorrection * tangentVector.x * directionLength / 3 * arrowScaleFactor,
                         startPoint.y - whiteBallArrowAngleCorrection * tangentVector.y * directionLength / 3 * arrowScaleFactor
                     );*/

                    endPoint = new Vector2(
                        startPoint.x + Math.sin(raycastAngle) * (PockeySettings.BALL_RADIUS * arrowScaleFactor),
                        startPoint.y + Math.cos(raycastAngle) * (PockeySettings.BALL_RADIUS * arrowScaleFactor),
                    );


                    this.whiteBallDirectionPoints = [[startPoint.x, -startPoint.y - PockeySettings.BABYLON_Y_OFFSET], [endPoint.x, -endPoint.y - PockeySettings.BABYLON_Y_OFFSET]];

                    // this.whiteBallPostCollisionDirectionMesh = BABYLON.Mesh.CreateLines("whiteBallPostCollisionDirectionMesh", [new Vector3(this.whiteBallDirectionPoints[0][0], this.whiteBallDirectionPoints[0][1], 0), new Vector3(this.whiteBallDirectionPoints[1][0], this.whiteBallDirectionPoints[1][1], 0)], AbstractEntryPoint.scene, true);
                    // if(this.whiteBallPostCollisionDirectionMesh)
                    //     this.whiteBallPostCollisionDirectionMesh.clear();
                    this.whiteBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("whiteBallPostCollisionDirectionMesh", {
                        points: [new BABYLON.Vector3(this.whiteBallDirectionPoints[0][0], this.whiteBallDirectionPoints[0][1], 0), new BABYLON.Vector3(this.whiteBallDirectionPoints[1][0], this.whiteBallDirectionPoints[1][1], 0)],
                        instance: this.whiteBallPostCollisionDirectionMesh
                    });
                    this.whiteBallPostCollisionDirectionMesh.enableEdgesRendering();
                    this.whiteBallPostCollisionDirectionMesh.edgesWidth = 10;
                    this.whiteBallPostCollisionDirectionMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
                    this.whiteBallPostCollisionDirectionMesh.edgesColor = hexDefaultColor;
                    this.whiteBallPostCollisionDirectionMesh.setEnabled(true);

                    // this.graph.lineStyle(4, 0xffffff);
                    // this.graph.moveTo(startPoint.x, startPoint.y);

                    // this.graph.lineTo(endPoint.x, endPoint.y);

                    startPoint.x = endPoint.x;
                    startPoint.y = endPoint.y;

                    endPoint.x += Math.sin(raycastAngle) * (directionLength + 10);
                    endPoint.y += Math.cos(raycastAngle) * (directionLength + 10);

                    this.whiteBallDirectionOnCollision = new Vector2(endPoint.x, endPoint.y);

                    // let dottedLineArrowPoint: Vector2 = PixiDashedLine.drawDashedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 0, 0xffffff, 4, 1);
                    // directionLength = 28;

                    // let dottedLineArrowPoint: Vector2 = PixiDashedLine.drawDottedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 8, 0xffffff, 1);


                    // this.poolTable.whiteBallReflectionArrow.x = dottedLineArrowPoint.x;
                    // this.poolTable.whiteBallReflectionArrow.y = dottedLineArrowPoint.y;

                    this.whiteBallDashedPoints = [[startPoint.x, -startPoint.y - PockeySettings.BABYLON_Y_OFFSET], [endPoint.x, -endPoint.y - PockeySettings.BABYLON_Y_OFFSET]];

                    // this.whiteBallDashedMesh = BABYLON.Mesh.CreateDashedLines("whiteBallDashedMesh", this.whiteBallDashedPoints, 3, 3, 4, AbstractEntryPoint.scene, true);
                    this.whiteBallDashedMesh = BABYLON.MeshBuilder.CreateDashedLines("whiteBallDashedMesh", {

                        points: [new BABYLON.Vector3(this.whiteBallDashedPoints[0][0], this.whiteBallDashedPoints[0][1], 0), new BABYLON.Vector3(this.whiteBallDashedPoints[1][0], this.whiteBallDashedPoints[1][1], 0)],//this.whiteBallDashedPoints,

                        instance: this.whiteBallDashedMesh
                    });

                    this.whiteBallDashedMesh.enableEdgesRendering();
                    this.whiteBallDashedMesh.edgesWidth = 10;
                    this.whiteBallDashedMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
                    this.whiteBallDashedMesh.edgesColor = hexDefaultColor;
                    this.whiteBallDashedMesh.setEnabled(true);
                    // this.poolTable.whiteBallReflectionArrow.rotation = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) + 135 * Math.PI / 180;
                    // this.poolTable.whiteBallReflectionArrow.visible = true;

                    endPoint.x += Math.sin(raycastAngle) * 5;
                    endPoint.y += Math.cos(raycastAngle) * 5;
                    this.whiteBallReflectionArrowMesh.position.x = endPoint.x;
                    this.whiteBallReflectionArrowMesh.position.y = -endPoint.y - PockeySettings.BABYLON_Y_OFFSET;

                    // this.poolTable.whiteBallReflectionArrowMesh.rotation.z = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);// + 180 * Math.PI / 180;
                    this.whiteBallReflectionArrowMesh.rotation.z = -Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) - 135 * Math.PI / 180;// + Math.PI;
                    this.whiteBallReflectionArrowMesh.setEnabled(true);

                }
                //other ball direction graphics

                if ((1 - arrowScaleFactor) > 0.01 && !isOwnBall) {
                    startPoint = new Vector2(this.hitPoint[0] - (PockeySettings.BALL_RADIUS * cotangentVector.x), this.hitPoint[1] - (PockeySettings.BALL_RADIUS * cotangentVector.y));


                    /* opposite = startPoint.x - this.poolTable.raycastFollower.x;
                     adjacent = startPoint.y - this.poolTable.raycastFollower.y;
                     this.arrowsDeviationLength = PockeySettings.BALL_RADIUS * 2 - this.arrowsDeviationLength;

                     raycastAngle = Math.atan2(opposite, adjacent) + whiteBallArrowAngleCorrection * (this.arrowsDeviationLength / 8) * Math.PI / 180;*/

                    // console.log("unghi ajustare: " + (this.arrowsDeviationLength / 3));
                    // point[1] - (Math.cos(angle) * distance)
                    // let newStart: Vector2 = new Vector2(
                    //     this.poolTable.raycastFollower.x + Math.sin(raycastAngle) * PockeySettings.BALL_RADIUS,
                    //     this.poolTable.raycastFollower.y + Math.cos(raycastAngle) * PockeySettings.BALL_RADIUS);
                    // /**/
                    //
                    // opposite = newStart.x - this.poolTable.raycastFollower.x;
                    // adjacent = newStart.y - this.poolTable.raycastFollower.y;
                    //
                    // raycastAngle = Math.atan2(opposite, adjacent);

                    /* this.graph.lineStyle(0, 0xffffff);
                     this.graph.beginFill(0xff0000);
                     this.graph.drawCircle(startPoint.x, startPoint.y, 3);
                     this.graph.endFill();*/

                    /*  this.graph.lineStyle(0, 0x0000ff);
                      this.graph.beginFill(0x0000ff);
                      this.graph.drawCircle(newStart.x, newStart.y, 3);
                      this.graph.endFill();

                      opposite = (newStart.x - result.body.position[0]);
                      adjacent = newStart.y - result.body.position[1];

                      raycastAngle = Math.atan2(opposite, adjacent);*/

                    /* let newEnd: Vector2 = new Vector2(
                         startPoint.x - Math.sin(raycastAngle) * directionLength  * (1 - arrowScaleFactor),
                         startPoint.y - Math.cos(raycastAngle) * directionLength  * (1 - arrowScaleFactor)
                     );

                     // this.graph.lineStyle(2, 0x0000ff);
                     // this.graph.moveTo(newStart.x, newStart.y);
                     // this.graph.lineTo(newEnd.x, newEnd.y);*/

                    endPoint = new Vector2(
                        startPoint.x - cotangentVector.x * (PockeySettings.BALL_RADIUS * 2 + 6 + directionLength * (1 - arrowScaleFactor)),
                        startPoint.y - cotangentVector.y * (PockeySettings.BALL_RADIUS * 2 + 6 + directionLength * (1 - arrowScaleFactor))
                    );

                    this.otherBallDirectionPoints = [[startPoint.x, -startPoint.y - PockeySettings.BABYLON_Y_OFFSET], [endPoint.x, -endPoint.y - PockeySettings.BABYLON_Y_OFFSET, 0]];


                    // this.otherBallPostCollisionDirectionMesh = BABYLON.Mesh.CreateLines("otherBallPostCollisionDirectionMesh", [new Vector3(this.otherBallDirectionPoints[0][0], this.otherBallDirectionPoints[0][1], 0), new Vector3(this.otherBallDirectionPoints[1][0], this.otherBallDirectionPoints[1][1], 0)], AbstractEntryPoint.scene, true);


                    this.otherBallPostCollisionDirectionMesh = BABYLON.MeshBuilder.CreateLines("otherBallPostCollisionDirectionMesh", {
                        points: [new BABYLON.Vector3(this.otherBallDirectionPoints[0][0], this.otherBallDirectionPoints[0][1], 0), new BABYLON.Vector3(this.otherBallDirectionPoints[1][0], this.otherBallDirectionPoints[1][1], 0)],
                        instance: this.otherBallPostCollisionDirectionMesh
                    });

                    this.otherBallPostCollisionDirectionMesh.enableEdgesRendering();
                    this.otherBallPostCollisionDirectionMesh.edgesWidth = 10;
                    this.otherBallPostCollisionDirectionMesh.position.z = -PockeySettings.BALL_RADIUS * 2;
                    this.otherBallPostCollisionDirectionMesh.edgesColor = hexDefaultColor;
                    this.otherBallPostCollisionDirectionMesh.setEnabled(true);

                    // this.graph.lineStyle(4, 0xffffff);
                    // this.graph.moveTo(startPoint.x, startPoint.y);
                    // this.graph.lineTo(endPoint.x, endPoint.y);

                    // startPoint.x = endPoint.x;
                    // startPoint.y = endPoint.y;

                    // endPoint.x -= cotangentVector.x * directionLength * 2 / 3 * (1 - arrowScaleFactor);
                    // endPoint.y -= cotangentVector.y * directionLength * 2 / 3 * (1 - arrowScaleFactor);

                    // endPoint.x -= cotangentVector.x * directionLength * (1 - arrowScaleFactor);
                    // endPoint.y -= cotangentVector.y * directionLength * (1 - arrowScaleFactor);

                    // this.graph.lineStyle(2, 0xffffff);
                    // dottedLineArrowPoint = PixiDashedLine.drawDottedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 10, 0xffffff, 1);


                    // dottedLineArrowPoint = PixiDashedLine.drawDashedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 0, 0xffffff, 4, 1);
                    // dottedLineArrowPoint = PixiDashedLine.drawDottedLine(this.graph, startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1, 10, 0xffffff, 1);

                    this.otherBallDirectionOnCollision = new Vector2(endPoint.x, endPoint.y);
                    this.otherBallReflectionArrowMesh.position.x = endPoint.x;
                    this.otherBallReflectionArrowMesh.position.y = -endPoint.y - PockeySettings.BABYLON_Y_OFFSET;
                    this.otherBallReflectionArrowMesh.rotation.z = -Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) - 135 * Math.PI / 180;

                    this.otherBallReflectionArrowMesh.setEnabled(true);

                    // this.poolTable.otherBallReflectionArrow.x = endPoint.x;
                    // this.poolTable.otherBallReflectionArrow.y = endPoint.y;
                    // this.poolTable.otherBallReflectionArrow.rotation = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) + 135 * Math.PI / 180;
                    // this.poolTable.otherBallReflectionArrow.visible = true;

                }
            } else {
                this.onStopAnimatePuckGoal();
            }
            // this.poolTable.addChild(this.graph);
        }

    };

    // private calculateDeviation(point: Vector2, firstSegmentPoint: Vector2, secondSegmentPoint: Vector2): number {
    //     // return Math.sqrt(this.distToSegmentSquared(point, firstSegmentPoint, secondSegmentPoint));
    //     let x = point.x;
    //     let y = point.y;
    //     let x1 = firstSegmentPoint.x;
    //     let y1 = firstSegmentPoint.y;
    //     let x2 = secondSegmentPoint.x;
    //     let y2 = secondSegmentPoint.y;
    //
    //     let A = x - x1;
    //     let B = y - y1;
    //     let C = x2 - x1;
    //     let D = y2 - y1;
    //
    //     let dot = A * C + B * D;
    //     let len_sq = C * C + D * D;
    //     let param = -1;
    //     if (len_sq != 0) //in case of 0 length line
    //         param = dot / len_sq;
    //
    //     let xx, yy;
    //
    //     if (param < 0) {
    //         xx = x1;
    //         yy = y1;
    //     } else if (param > 1) {
    //         xx = x2;
    //         yy = y2;
    //     } else {
    //         xx = x1 + param * C;
    //         yy = y1 + param * D;
    //     }
    //
    //     let dx = x - xx;
    //     let dy = y - yy;
    //
    //     return Math.sqrt(dx * dx + dy * dy);
    // }

    protected onRepositionWhiteBall(): void {


        this.graphicsHidden = false;

        // if (!this.goaliesHolder.moving) {
        //     if (PockeySettings.CURRENT_ROUND == 3) {
        //         if (this.player.side == 'left') {
        //             this.goaliesHolder.goalies[0].blocked = true;
        //             this.goaliesHolder.goalies[1].blocked = false;
        //         } else {
        //             this.goaliesHolder.goalies[0].blocked = false;
        //             this.goaliesHolder.goalies[1].blocked = true;
        //         }
        //     } else {
        //         this.goaliesHolder.goalies[0].blocked = false;
        //         this.goaliesHolder.goalies[1].blocked = false;
        //     }
        //
        //     this.goaliesHolder.moving = true;
        // }

        if (this.ballPositionCircleMesh) {
            this.ballPositionCircleMesh.setEnabled(true);
        }

        // if (this.opponentTimeUp) {
        //     SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.onOpponentsTimeUp]);
        // } else
        //     SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [PockeyStateTexts.opponentFault]);

        let mousePos: PIXI.Point = MouseHandler.Instance().getCurrentMousePosition();
        let localPoint = this.pooltable.toLocal(new PIXI.Point(mousePos.x, mousePos.y));

        if (_.isNull(this.lastGoodRepositionPoint) || _.isUndefined(this.lastGoodRepositionPoint)) {
            this.lastGoodRepositionPoint = new Vector2();
        }

        /////////////////////////aicisha!!!!!!!!!!!!

        let ballPositionCirclePosition: Vector2 = new Vector2(localPoint.x, localPoint.y);
        let isInteresectingWithOthers: boolean = false;

        if (PockeySettings.CURRENT_ROUND == 3) {
            /* this.pooltable.rightLimit = this.pooltable.playGround.x + this.pooltable.playGround.width;
             this.pooltable.downLimit = this.pooltable.playGround.y + this.pooltable.playGround.height;

             if (this.player.side == 'left') {
                 this.pooltable.rightLimit = PockeySettings.MIDDLE_TABLE_LEFT_POS.x + PockeySettings.BALL_RADIUS;
                 this.pooltable.leftLimit = PockeySettings.MIDDLE_TABLE_LEFT_POS.x - PockeySettings.BALL_RADIUS;
                 ballPositionCirclePosition.x = PockeySettings.MIDDLE_TABLE_LEFT_POS.x;
             } else {
                 this.pooltable.leftLimit = PockeySettings.MIDDLE_TABLE_RIGHT_POS.x - PockeySettings.BALL_RADIUS;
                 this.pooltable.rightLimit = PockeySettings.MIDDLE_TABLE_RIGHT_POS.x + PockeySettings.BALL_RADIUS;
                 // this.poolTable.whiteBall.ballPosition = new Vector2(this.poolTable.leftLimit, this.poolTable.whiteBall.y);
                 ballPositionCirclePosition.x = PockeySettings.MIDDLE_TABLE_RIGHT_POS.x;
             }*/
        } else {
            this.pooltable.leftLimit = this.pooltable.playGround.x;
            this.pooltable.upLimit = this.pooltable.playGround.y;
            this.pooltable.rightLimit = this.pooltable.playGround.x + this.pooltable.playGround.width;
            this.pooltable.downLimit = this.pooltable.playGround.y + this.pooltable.playGround.height;
        }


        if (ballPositionCirclePosition.x + PockeySettings.BALL_RADIUS > this.pooltable.rightLimit)
            ballPositionCirclePosition.x = this.pooltable.rightLimit - PockeySettings.BALL_RADIUS;
        if (ballPositionCirclePosition.x - PockeySettings.BALL_RADIUS < this.pooltable.leftLimit)
            ballPositionCirclePosition.x = this.pooltable.leftLimit + PockeySettings.BALL_RADIUS;

        if (ballPositionCirclePosition.y + PockeySettings.BALL_RADIUS > this.pooltable.downLimit)
            ballPositionCirclePosition.y = this.pooltable.downLimit - PockeySettings.BALL_RADIUS;
        if (ballPositionCirclePosition.y - PockeySettings.BALL_RADIUS < this.pooltable.upLimit)
            ballPositionCirclePosition.y = this.pooltable.upLimit + PockeySettings.BALL_RADIUS;


        let ballPosition: Vector2;// = new Vector2(this.poolTable.ballPositionCircle.x,this.poolTable.ballPositionCircle.y)

        _.forEach(this.pooltable.goalkeepersCircles, (ball: PIXI.Circle) => {
            ballPosition = new Vector2(ball.x, ball.y);
            if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + PockeySettings.BALL_RADIUS) {
                let opposite: number = ballPositionCirclePosition.y - ballPosition.y;
                let adjacent: number = ballPositionCirclePosition.x - ballPosition.x;
                let rotAngle: number = Math.atan2(opposite, adjacent);

                ballPositionCirclePosition.x = ballPosition.x + (PockeySettings.BALL_RADIUS + ball.radius) * Math.cos(rotAngle);
                ballPositionCirclePosition.y = ballPosition.y + (PockeySettings.BALL_RADIUS + ball.radius) * Math.sin(rotAngle);
            }

        });

        _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
            if (!ball.gameObjectData.canBeRemoved) {
                ballPosition = new Vector2(ball.gameObjectData.xPos, ball.gameObjectData.yPos);
                if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + PockeySettings.BALL_RADIUS && !ball.gameObjectData.canBeRemoved && ball != this.pooltable.whiteBall) {
                    let opposite: number = ballPositionCirclePosition.y - ballPosition.y;
                    let adjacent: number = ballPositionCirclePosition.x - ballPosition.x;
                    let rotAngle: number = Math.atan2(opposite, adjacent);

                    ballPositionCirclePosition.x = ballPosition.x + (PockeySettings.BALL_RADIUS + ball.radius) * Math.cos(rotAngle);
                    ballPositionCirclePosition.y = ballPosition.y + (PockeySettings.BALL_RADIUS + ball.radius) * Math.sin(rotAngle);
                }
            }
        });

        _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
            if (!ball.gameObjectData.canBeRemoved) {

                ballPosition = new Vector2(ball.gameObjectData.xPos, ball.gameObjectData.yPos);
                if (ball.ballType != BallType.White && ballPosition.distanceTo(ballPositionCirclePosition) < PockeySettings.BALL_RADIUS + ball.radius) {
                    isInteresectingWithOthers = true;
                    return true;
                }
            }
            // if (ball2 != ball) {
            //     let ball2Position: Vector2 = new Vector2(ball2.gameObjectData.xPos, ball2.gameObjectData.yPos);
            //     if (ball2Position.distanceTo(ballPositionCirclePosition) < PockeySettings.BALL_RADIUS + ball2.radius) {
            //         isInteresectingWithOthers = true;
            //         return;
            //     }
            // }
        });

        _.forEach(this.pooltable.goalkeepersCircles, (ball: PIXI.Circle) => {
            ballPosition = new Vector2(ball.x, ball.y);
            if (ballPositionCirclePosition.distanceTo(ballPosition) < ball.radius + PockeySettings.BALL_RADIUS) {
                isInteresectingWithOthers = true;
                return;
            }
        });

        if (ballPositionCirclePosition.x + PockeySettings.BALL_RADIUS > this.pooltable.rightLimit)
            isInteresectingWithOthers = true;
        if (ballPositionCirclePosition.x - PockeySettings.BALL_RADIUS < this.pooltable.leftLimit)
            isInteresectingWithOthers = true;

        if (ballPositionCirclePosition.y + PockeySettings.BALL_RADIUS > this.pooltable.downLimit)
            isInteresectingWithOthers = true;

        if (ballPositionCirclePosition.y - PockeySettings.BALL_RADIUS < this.pooltable.upLimit)
            isInteresectingWithOthers = true;

        if (isInteresectingWithOthers) {
            ballPositionCirclePosition.x = this.lastGoodRepositionPoint.x;
            ballPositionCirclePosition.y = this.lastGoodRepositionPoint.y;
        } else {
            this.lastGoodRepositionPoint.x = ballPositionCirclePosition.x;
            this.lastGoodRepositionPoint.y = ballPositionCirclePosition.y;

        }

        // this.ballPositionCircleMesh.position.x = ballPositionCirclePosition.x;
        // this.ballPositionCircleMesh.position.y = -ballPositionCirclePosition.y - PockeySettings.BABYLON_Y_OFFSET;

        TweenMax.to(this.ballPositionCircleMesh.position, 0.1, {
            x: ballPositionCirclePosition.x,
            y: -ballPositionCirclePosition.y - PockeySettings.BABYLON_Y_OFFSET
        });

        this.pooltable.whiteBall.setPosition(ballPositionCirclePosition.x, ballPositionCirclePosition.y);

        if (MouseHandler.Instance().left.down) {
            this.repositionStarted = true;
        }
        if (this.repositionStarted && !MouseHandler.Instance().left.down) {
            this.repositionStarted = false;

            this.repositionWhiteBallEnabled = false;
            this.pooltable.whiteBall.isOnReposition = false;
            this.pooltable.whiteBall.reset();
            // this.pooltable.whiteBall.gameObjectData.canBeRemoved = false;
            // P2WorldManager.Instance().world.addBody(this.pooltable.whiteBall.p2Body);
            // this.pooltable.whiteBall.gameObjectData.canBeRemoved = false;
            this.pooltable.whiteBall.setPosition(ballPositionCirclePosition.x, ballPositionCirclePosition.y);
            // if(this.poolTable.balls.cont)
            this.pooltable.balls.push(this.pooltable.whiteBall);
            // this.poolTable.shadowsHolder.addChild(this.poolTable.whiteBall);
            // this.poolTable.whiteBall.alpha = 1;//(this.poolTable.whiteBall);
            // this.repositionStick();
            // SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);

            SignalsManager.DispatchSignal(PockeySignalTypes.WHITE_BALL_REPOSITIONED);

            if (!this.pooltable.stick.isActive) {
                // _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
                //     ball.addShadowBody();
                // });
                this.addShadows();
                // this.poolTable.raycastFollower.visible = true;
                // this.poolTable.ballPositionCircleOnRaycast.visible = true;

                this.pooltable.stick.activate(new PIXI.Point(this.pooltable.whiteBall.gameObjectData.xPos, this.pooltable.whiteBall.gameObjectData.yPos));
                // console.log("PockeyStateMachine.Instance().fsm.currentState: " + PockeyStateMachine.Instance().fsm.currentState);
            }
            // this.poolTable.whiteBall.y = ballPositionCirclePosition.y;
            // this.ticker.add(this.poolTable.whiteBall.update);

        }


    }

    // @ts-ignore
    private checkIfPuck(body: p2.Body): boolean {
        let isPuck: boolean = false;
        // _.forEach(this.poolTable.balls, (ball: AbstractBall) => {
        //
        //     if (ball.ballType == BallType.Puck && ball.p2BodyShadow.id == body.id) {
        //         // console.log("ball.p2Body.id, body.id " + ball.p2Body.id, body.id);
        //         // && ball.p2Body.id == body.id
        //         isPuck = true;
        //     }
        //
        // });
        return isPuck;
    }

    protected onAnimatePuckGoal(): void {
        // if (this.poolTable.leftGoal.type == GameManager.Instance().currentPlayer.type) {
        //     this.poolTable.rightGoal.animate();
        // }
        // else {
        //     this.poolTable.leftGoal.animate();
        // }
    }

    private checkIfOwnShadow(body: p2.Body): boolean {
        let isOwnBall: boolean = false;
        let currentPlayerSide: BallType;

        if (PockeyPlayerManager.Instance().currentPlayerSocketID == PockeyPlayerManager.Instance().player.data.socketID) {
            currentPlayerSide = PockeyPlayerManager.Instance().player.data.type;
        } else {
            currentPlayerSide = PockeyPlayerManager.Instance().opponent.type;
        }

        _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
            if (ball.ballType == currentPlayerSide && ball.p2Shadow.id == body.id) {
                isOwnBall = true;
            }
        });
        return isOwnBall;
    }

    public startOnRearrange(): void {
        /* _.forEach(this.pooltable.balls, (ball: BallGameObject) => {
             if (!ball.gameObjectData.canBeRemoved || ball.ballType == BallType.White) {
                 // P2WorldManager.Instance().world.removeBody(ball.p2Shadow);
                 P2WorldManager.Instance().world.removeBody(ball.p2Body);
                 // ball.p2Body.wakeUp();
             }
         });*/
        this.goalieMover.startMoving();
        this.reactivateStick();
    }

    public startOnRepositionWhiteBall(): void {
        // this.goalieMover.startMoving();
        // this.reactivateStick();
        // if (!this.pooltable.whiteBall.isOnReposition) {
        // let mousePos:PIXI.Point = MouseHandler.Instance().position;
        // // mousePos = new PIXI.Point(PockeySettings.MIDDLE_TABLE_LEFT_POS.x, PockeySettings.MIDDLE_TABLE_LEFT_POS.y);
        // this.pooltable.whiteBall.setPosition(mousePos.x, 0);
        // this.ballPositionCircleMesh.position.x = mousePos.x;
        // this.ballPositionCircleMesh.position.y = 0;
        this.pooltable.whiteBall.isOnReposition = true;
        // this.onRepositionWhiteBall();
        // }
    }

    public reactivateStick(): void {
        this.addShadows();

        this.pooltable.stick.activate(new PIXI.Point(this.pooltable.whiteBall.gameObjectData.xPos, this.pooltable.whiteBall.gameObjectData.yPos));
        // this.pooltable.stick.activate(new PIXI.Point(this.pooltable.whiteAbstract.gameObjectData.xPos, this.pooltable.whiteAbstract.gameObjectData.yPos));
    }

    public stopRound(): void {

    }

    private createUpperCollisionPolygon(): void {
        let vertices: number[][] = PockeySettings.MAIN_COLLISION_POLYGON.slice(0);
        let upperCollisionPolygon: p2.Body = new p2.Body({mass: 0, angularForce: 0, angularVelocity: 0});
        P2WorldManager.Instance().world.addBody(upperCollisionPolygon);
        // @ts-ignore
        upperCollisionPolygon.fromPolygon(vertices);
        _.forEach(upperCollisionPolygon.shapes, (shape: p2.Shape) => {
            shape.material = new p2.Material(MaterialType.LINE_MATERIAL);
        });
        // let salam = new Sprite();
        /*_.forEach(PockeySettings.MAIN_COLLISION_POLYGON, (lineCoord: number[], id: number) => {
            // x1 = lineCoord[0];
            // y1 = lineCoord[1];
            // x2 = lineCoord[2];
            // y2 = lineCoord[3];
            if (id > 0) {
                let prevPointCounter = id - 1;
                let v1 = new Vector2(lineCoord[0], lineCoord[1]);
                let v2 = new Vector2(PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][0], PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][1]);
                this.createLine(v1, v2, MaterialType.LINE_MATERIAL);
            }
            // nextPointCounter = id + 1;
            // if (id + 1 > PockeySettings.MAIN_COLLISION_POLYGON.length - 1) {
            //
            // }
        });*/
    }

    private createUpperCollisionShadowPolygon(): void {
        let vertices: number[][] = PockeySettings.MAIN_COLLISION_SHADOW.slice(0);
        let upperCollisionShadowPolygon: p2.Body = new p2.Body({mass: 0});
        P2WorldManager.Instance().world.addBody(upperCollisionShadowPolygon);
        // @ts-ignore
        upperCollisionShadowPolygon.fromPolygon(vertices);
        _.forEach(upperCollisionShadowPolygon.shapes, (shape: p2.Shape) => {
            shape.material = new p2.Material(MaterialType.SHADOW_MATERIAL);
        });
        upperCollisionShadowPolygon.position [0] -= 1.5;
        upperCollisionShadowPolygon.position [1] += 1.5;

        /*_.forEach(PockeySettings.MAIN_COLLISION_SHADOW, (lineCoord: number[], id: number) => {
            // x1 = lineCoord[0];
            // y1 = lineCoord[1];
            // x2 = lineCoord[2];
            // y2 = lineCoord[3];
            if (id > 0) {
                let prevPointCounter = id - 1;
                let v1 = new Vector2(lineCoord[0], lineCoord[1]);
                let v2 = new Vector2(PockeySettings.MAIN_COLLISION_SHADOW[prevPointCounter][0], PockeySettings.MAIN_COLLISION_SHADOW[prevPointCounter][1]);
                this.createLine(v1, v2, MaterialType.LINE_MATERIAL);
            }
            // nextPointCounter = id + 1;
            // if (id + 1 > PockeySettings.MAIN_COLLISION_POLYGON.length - 1) {
            //
            // }
        });*/
    }

    private createBottomCollisionPolygon(): void {
        let vertices: number[][] = PockeySettings.MAIN_COLLISION_POLYGON.slice(0);
        let bottomCollisionPolygon: p2.Body = new p2.Body({mass: 0});
        P2WorldManager.Instance().world.addBody(bottomCollisionPolygon);
        // @ts-ignore
        bottomCollisionPolygon.fromPolygon(vertices);
        _.forEach(bottomCollisionPolygon.shapes, (shape: p2.Shape) => {
            shape.material = new p2.Material(MaterialType.LINE_MATERIAL);
        });
        bottomCollisionPolygon.angle = Math.PI;
        bottomCollisionPolygon.position [1] += 513;
        bottomCollisionPolygon.position [0] -= 11;


        /*_.forEach(PockeySettings.MAIN_COLLISION_POLYGON, (lineCoord: number[], id: number) => {
            // x1 = lineCoord[0];
            // y1 = lineCoord[1];
            // x2 = lineCoord[2];
            // y2 = lineCoord[3];
            if (id > 0) {
                let prevPointCounter = id - 1;
                let v1 = new Vector2(lineCoord[0], lineCoord[1]);
                let v2 = new Vector2(PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][0], PockeySettings.MAIN_COLLISION_POLYGON[prevPointCounter][1]);
                this.createLine(v1, v2, MaterialType.LINE_MATERIAL);
            }
            // nextPointCounter = id + 1;
            // if (id + 1 > PockeySettings.MAIN_COLLISION_POLYGON.length - 1) {
            //
            // }
        });*/

    }


    private createBottomCollisionShadowPolygon(): void {
        let vertices: number[][] = PockeySettings.MAIN_COLLISION_SHADOW.slice(0);
        let bottomCollisionShadowPolygon: p2.Body = new p2.Body({mass: 0});
        P2WorldManager.Instance().world.addBody(bottomCollisionShadowPolygon);
        // @ts-ignore
        bottomCollisionShadowPolygon.fromPolygon(vertices);
        _.forEach(bottomCollisionShadowPolygon.shapes, (shape: p2.Shape) => {
            shape.material = new p2.Material(MaterialType.SHADOW_MATERIAL);
        });
        bottomCollisionShadowPolygon.angle = Math.PI;
        bottomCollisionShadowPolygon.position [1] += 399;
        bottomCollisionShadowPolygon.position [0] -= 2;
    }


}
