import {PockeySettings} from "../../../../pockey-settings";
import {Vector2} from "../../../../qFramework/Utils/Vector2";
import {MaterialType, P2WorldManager} from "../../p2-world-manager";
import {SignalsType} from "../../../../qFramework/Signals/signal-types";
import {PockeySoundURLS} from "../../../SoundModule/pockey-sound-names";
import {SignalsManager} from "../../../../qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../../../SignalsModule/pockey-signal-types";
import {Linear, TimelineMax, TweenMax} from "gsap";
import {Pocket} from "../OtherPooltableElements/pocket";
import * as p2 from "p2";
import {Settings} from "../../../../qFramework/Settings";
import * as _ from "lodash";
import {PockeyGameObject} from "../pockey-game-object";
import {BallGraphicObject} from "./ball-graphic-object";
import {PockeyPlayerManager} from "../../../../pockey-player-manager";
import {BallType} from "../../../../../common/pockey-value-objects";


export class BallGameObject extends PockeyGameObject {

    protected ballInPocketAnimationTimeline: TimelineMax;
    public mass: number = 1.4;
    public velocity: Vector2;
    public moving: boolean = false;
    protected oldPos: Vector2;
    public power: number;
    public lineLimits: p2.Line[];
    public pockets: Pocket[];

    // public canBeRemoved: boolean = false;
    public removed: boolean = false;
    public removedFromArray: boolean = false;

    public zIndexSwitched: boolean = false;
    public ballAnimationHolder: PIXI.Container;
    public animationInProgress: boolean = false;
    public ballValue: number = 1;
    // public ballShadow: PIXI.Graphics;
    public initialPosition: Vector2;

    protected minStopLimit: number = 0.1;
    protected leftLimit: number;
    protected rightLimit: number;
    protected upLimit: number;
    protected downLimit: number;
    protected ballTexture: PIXI.Sprite;
    protected _ballPosition: Vector2;

    protected delta: number;

    protected _isOnReposition: boolean = false;
    protected _isOnRearrange: boolean = false;
    public radius: number = PockeySettings.BALL_RADIUS;
    // public p2Body: p2.Body;
    // public p2Shadow: p2.Body;
    // protected updatesReceived: number = 0;

    public build(): BallGameObject {
        if (this.ballType == BallType.Puck) {
            this.radius = PockeySettings.PUCK_RADIUS;
        }

        this.createElements();
        this.addGraphicObject();
        this.postConstructor();
        // this.createBallShadow();

        this.moving = false;
        this.velocity = new Vector2();
        this.oldPos = new Vector2();

        this.gameObjectData.alpha = 1;
        this.gameObjectData.scale = 1;
        // this.delta = PockeySettings.DELTA;
        // this.radius = PockeySettings.BALL_RADIUS;

        // this.ballType = ballSide;
        // this.name = this.ballType + id;

        PockeyPlayerManager.Instance().player.pockeyGameWorld.addGameObject(this);

        return this;
    }

    protected getP2Shadow(): p2.Body {
        let p2Body: p2.Body = new p2.Body({
            mass: 0,
        });

        let circleShape: p2.Circle = new p2.Circle({radius: this.radius + PockeySettings.BALL_RADIUS});
        circleShape.material = new p2.Material(MaterialType.SHADOW_MATERIAL);

        p2Body.addShape(circleShape);

        return p2Body;
    }

    set isOnReposition(value: boolean) {
        this._isOnReposition = value;
        if (value == true) {
            // console.log("intra la enabled false!");
            // this.sphere.setEnabled(false);
            // this.ballShadow.scale.x = 0;
            // this.ballShadow.scale.y = 0;
            this.isOnRearrange = false;
            this.graphicObject.hide();
            // this.graphicObject.scale.x = 0;
            // this.graphicObject.scale.y = 0;
        }

    }

    get isOnReposition(): boolean {
        // console.log("se cere: " +  this._isOnReposition);
        return this._isOnReposition;
    }

    set isOnRearrange(value: boolean) {
        this._isOnRearrange = value;
        if (value == true) {
            // console.log("intra la enabled false!");
            this.isOnReposition = false;
            this.reset();
            this.graphicObject.show();
        }
    }

    get isOnRearrange(): boolean {
        // console.log("se cere: " +  this._isOnReposition);
        return this._isOnRearrange;
    }

    protected getP2Body(): p2.Body {
        let p2Body: p2.Body = new p2.Body({
            mass: this.mass,
            fixedRotation: false
        });

        p2Body.angularDamping = 0;
        p2Body.angularForce = 0;
        p2Body.angularVelocity = 0;

        p2Body.damping = 0.6;
        p2Body.boundingRadius = this.radius;
        p2Body.allowSleep = true;
        p2Body.sleepSpeedLimit = 1.4; // Body will feel sleepy if speed<1 (speed is the norm of velocity)
        p2Body.sleepTimeLimit = 0.4;
        p2Body.sleep();// =  1;
        p2Body.velocity[0] = 0;// =  1;
        p2Body.velocity[1] = 0;// =  1;

        let circleShape = new p2.Circle({radius: this.radius});
        circleShape.material = this.getCircleMaterial();
        p2Body.addShape(circleShape);

        P2WorldManager.Instance().world.addBody(p2Body);
        if (p2Body.world.frictionGravity != 0)
            p2Body.world.frictionGravity = 0;

        return p2Body;
    }

    public hide(): void {
        P2WorldManager.Instance().world.removeBody(this.p2Body);
        P2WorldManager.Instance().world.removeBody(this.p2Shadow);
        this.graphicObject.scale.x = 0;
        this.graphicObject.scale.y = 0;
        // if (this.ballType != BallType.Puck) {
        //     this.sphere.setEnabled(false);
        // }
    }

    protected worldPreSolveHandler(): void {

        // if (this.speed() < 50)
        // this.p2Body.velocity = [this.p2Body.velocity[0] * PockeySettings.DELTA, this.p2Body.velocity[1] * PockeySettings.DELTA]
    }

    protected getCircleMaterial(): p2.Material {
        return P2WorldManager.Instance().getMaterialByID(MaterialType.BALL_MATERIAL);
    }

    public setLineLimits(lineLimits: p2.Line[]): void {
        this.lineLimits = lineLimits;
    }

    public setPockets(pockets: Pocket[]): void {
        this.pockets = pockets;
    }

    public setWallLimits(left: number, right: number, up: number, down: number): void {
        this.leftLimit = left;
        this.rightLimit = right;
        this.upLimit = up;
        this.downLimit = down;
    }

    // public tintBall(color: number): void {
    //     let colorToHex: string = ('00000' + (color | 0).toString(16)).substr(-6);
    //     let rgbColor: BABYLON.Color4 = this.HexToRGB(colorToHex);
    //
    //     if (this.sphere) {
    //         this.sphere.material.diffuseColor = rgbColor;
    //     }
    // }

    // private HexToRGB(hex: string): BABYLON.Color4 {
    //
    //     let r: number = parseInt(hex.substring(0, 2), 16) / 255;
    //     let g: number = parseInt(hex.substring(2, 4), 16) / 255;
    //     let b: number = parseInt(hex.substring(4, 6), 16) / 255;
    //
    //     return new BABYLON.Color4(r, g, b, 1);
    // }

    // private playAnimation():void
    // {
    //
    // }

    // private lerp(a:number, b:number, n:number):number {
    //     return (1 - n) * a + n * b;
    // }


    setPosition(x: number, y: number) {
        super.setPosition(x, y);
        if (!this.initialPosition) {
            this.initialPosition = new Vector2(x, y);
        }
        // this.ballShadow.x = x;
        // this.ballShadow.y = y;
        //
        // this.handleRotation();
    }

    public update(): void {

        if (this.isUpdatingFromServer) {
            this.setPosition(this.gameObjectData.xPos, this.gameObjectData.yPos);
            if ((this.graphicObject as BallGraphicObject).sphere)
                (this.graphicObject as BallGraphicObject).sphere.visibility = this.gameObjectData.alpha;
            this.graphicObject.scale.x = this.graphicObject.scale.y = this.gameObjectData.scale;

            return;
        }

        this.moving = this.p2Body.sleepState != p2.Body.SLEEPING;

        if (this.gameObjectData.canBeRemoved) {
            this.moving = false;
        }

        // if(this.animationInProgress == true)
        // {
        //     this.moving = true;
        // }

        if (!this.moving)
            return;

        if (this.moving && !this.gameObjectData.canBeRemoved) {

            let pocketPosition: Vector2 = new Vector2();
            let p2BodyPos: Vector2 = new Vector2(this.p2Body.position[0], this.p2Body.position[1]);
            let lastDirection: number = 0;

            this.oldPos.x = this.p2Body.velocity[0];
            this.oldPos.y = this.p2Body.velocity[1];
            this.oldPos = this.oldPos.normalise();

            _.forEach(this.pockets, (pocket: Pocket) => {
                pocketPosition = new Vector2(pocket.x, pocket.y);

                if (pocketPosition.distanceTo(p2BodyPos) <= (this.radius + pocket.radius + 8)) {

                    if (pocketPosition.distanceTo(p2BodyPos) <= (pocket.radius + 1)) {

                        SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                            soundName: PockeySoundURLS.BALL_IN_POCKET
                        }]);

                        this.gameObjectData.canBeRemoved = true;
                        this.p2Body.velocity = [0, 0];
                        P2WorldManager.Instance().world.removeBody(this.p2Body);
                        P2WorldManager.Instance().world.removeBody(this.p2Shadow);

                        console.log("salam intra la ball in pocket");
                        SignalsManager.DispatchSignal(PockeySignalTypes.BALL_IN_POCKET, [this.gameObjectData.type]);

                        this.setPosition(p2BodyPos.x, p2BodyPos.y);
                        // this.gameObjectData.xPos = p2BodyPos.x;
                        // this.gameObjectData.yPos = p2BodyPos.y;
                        //
                        // this.ballShadow.x = p2BodyPos.x;
                        // this.ballShadow.y = p2BodyPos.y;

                        let closestDistance: number = 3000;
                        let distanceToNextClosestPoint: number = 3000;
                        let pointId: number = 0;
                        let nextPointId: number = 0;
                        let direction: number = 0;
                        let closestPoint: Vector2 = new Vector2();
                        let nextClosestPoint2: Vector2 = new Vector2();

                        closestPoint.x = pocket.x + this.oldPos.x;
                        closestPoint.y = pocket.y + this.oldPos.y;
                        closestPoint.x = closestPoint.x / 2 + p2BodyPos.x / 2;
                        closestPoint.y = closestPoint.y / 2 + p2BodyPos.y / 2;

                        nextClosestPoint2.x = p2BodyPos.x + this.oldPos.x * PockeySettings.BALL_RADIUS * 2;
                        nextClosestPoint2.y = p2BodyPos.y + this.oldPos.y * PockeySettings.BALL_RADIUS * 2;

                        let finalTouchPoint: Vector2 = new Vector2(closestPoint.x, closestPoint.y);
                        _.forEach(pocket.touchPoints, (touchPoint: Vector2, id: number) => {
                            let newDist: number = closestPoint.distanceTo(touchPoint);
                            let dirDist: number = nextClosestPoint2.distanceTo(touchPoint);

                            if (newDist < closestDistance) {
                                closestDistance = newDist;
                                finalTouchPoint = new Vector2(touchPoint.x, touchPoint.y);
                                pointId = id;
                            }

                            if (dirDist < distanceToNextClosestPoint) {
                                distanceToNextClosestPoint = dirDist;
                                nextPointId = id;
                            }

                        });

                        closestPoint.x = finalTouchPoint.x;
                        closestPoint.y = finalTouchPoint.y;

                        let touchPointsArrayLength: number = pocket.touchPoints.length;
                        let clockwiseDistance: number = 0;
                        let counterclockDistance: number = 0;
                        let idCounter: number = pointId;

                        if (nextPointId > pointId) {
                            clockwiseDistance = nextPointId - pointId;
                            let tempDist: number = 0;
                            for (let i = 0; i < touchPointsArrayLength; i++) {
                                tempDist++;
                                idCounter--;
                                if (idCounter < 0)
                                    idCounter = touchPointsArrayLength - 1;

                                if (idCounter == nextPointId)
                                    counterclockDistance = tempDist;
                            }

                            if (counterclockDistance < clockwiseDistance)
                                direction = -1;
                            else if (counterclockDistance > clockwiseDistance)
                                direction = 1;
                            else
                                direction = 0;
                        } else {

                            clockwiseDistance = pointId - nextPointId;
                            let tempDist: number = 0;
                            idCounter = nextPointId;
                            for (let i = 0; i < touchPointsArrayLength; i++) {
                                tempDist++;
                                idCounter--;
                                if (idCounter < 0)
                                    idCounter = touchPointsArrayLength - 1;

                                if (idCounter == pointId)
                                    counterclockDistance = tempDist;
                            }

                            if (clockwiseDistance < counterclockDistance)
                                direction = -1;
                            else if (clockwiseDistance > counterclockDistance)
                                direction = 1;
                            else
                                direction = 0;
                        }
                        lastDirection = direction;

                        let bezierPositions: PIXI.Point[] = [];

                        idCounter = pointId;

                        if (direction == -1) {
                            for (let i = 0; i < touchPointsArrayLength - 1; i++) {
                                bezierPositions[i] = new PIXI.Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);
                                idCounter--;
                                if (idCounter < 0)
                                    idCounter = touchPointsArrayLength - 1;

                            }
                            bezierPositions.shift();

                        } else if (direction == 1) {
                            for (let i = 0; i < touchPointsArrayLength; i++) {

                                bezierPositions[i] = new PIXI.Point(pocket.touchPoints[idCounter].x, pocket.touchPoints[idCounter].y);

                                idCounter++;
                                if (idCounter > touchPointsArrayLength - 1)
                                    idCounter = 0;

                            }
                            bezierPositions.shift();

                        } else if (direction == 0) {

                            direction = Math.round(Math.random()) - 1;
                            lastDirection = direction;
                            if (direction == 0)
                                direction = 1;


                            idCounter = nextPointId;
                            bezierPositions.push(new PIXI.Point(pocket.touchPoints[pointId].x, pocket.touchPoints[pointId].y));
                            bezierPositions.push(new PIXI.Point(pocket.touchPoints[nextPointId].x, pocket.touchPoints[nextPointId].y));

                            for (let i = 0; i < touchPointsArrayLength - counterclockDistance; i++) {

                                if (i == 1) {

                                    let tempPoint: PIXI.Point = new PIXI.Point(
                                        pocket.touchPoints[nextPointId].x / 2 + pocket.touchPoints[idCounter].x / 2,
                                        pocket.touchPoints[nextPointId].y / 2 + pocket.touchPoints[idCounter].y / 2
                                    );

                                    tempPoint = new PIXI.Point(
                                        tempPoint.x / 2 + pocket.touchPoints[nextPointId].x / 2,
                                        tempPoint.y / 2 + pocket.touchPoints[nextPointId].y / 2
                                    );
                                    tempPoint = new PIXI.Point(
                                        tempPoint.x / 2 + pocket.touchPoints[nextPointId].x / 2,
                                        tempPoint.y / 2 + pocket.touchPoints[nextPointId].y / 2
                                    );
                                    tempPoint = new PIXI.Point(
                                        tempPoint.x / 2 + pocket.touchPoints[nextPointId].x / 2,
                                        tempPoint.y / 2 + pocket.touchPoints[nextPointId].y / 2
                                    );
                                    bezierPositions.push(tempPoint);
                                }

                                idCounter -= direction;
                                if (idCounter > touchPointsArrayLength - 1)
                                    idCounter = 0;
                                if (idCounter < 0)
                                    idCounter = touchPointsArrayLength - 1;
                            }

                        }
                        bezierPositions.push(new PIXI.Point(pocket.finalPoint.x, pocket.finalPoint.y));

                        let duration: number = 1 / (this.speed() / 60);
                        if (lastDirection == 0)
                            duration *= 2.4;
                        else
                            duration *= 2;
                        if (duration > 1.8)
                            duration = 1.8;
                        else if (duration < 1)
                            duration = 1;

                        this.animationInProgress = true;

                        this.ballInPocketAnimationTimeline = new TimelineMax({
                            onComplete: this.declareAnimationFinished.bind(this)
                        });
                        this.ballInPocketAnimationTimeline.add(TweenMax.to(p2BodyPos, duration, {
                            bezier: bezierPositions,
                            ease: Linear.easeNone,
                            onUpdate: () => {
                                //console.log("anim update p2 body pos: " + p2BodyPos.x, p2BodyPos.y);
                                console.log("mingea e in gaura");
                                this.moving = true;
                                this.setPosition(p2BodyPos.x, p2BodyPos.y);
                            }
                        }), 0);

                        // this.ballInPocketAnimationTimeline.add(TweenMax.to(this.graphicObject.scale, duration - duration / 3, {
                        //     x: 0.8,
                        //     y: 0.8,
                        //     ease: Linear.easeNone
                        // }), 0);
                        this.ballInPocketAnimationTimeline.add(TweenMax.to(this.graphicObject.scale, 0.1, {
                            x: 0,
                            y: 0,
                            ease: Linear.easeNone,
                            onUpdate: () => {
                                this.gameObjectData.scale = this.graphicObject.scale.x;
                            }
                        }), 0);
                        this.ballInPocketAnimationTimeline.add(TweenMax.to((this.graphicObject as BallGraphicObject).sphere, (duration / 3), {
                            visibility: 0,
                            ease: Linear.easeNone,
                            onUpdate: () => {
                                this.gameObjectData.alpha = (this.graphicObject as BallGraphicObject).sphere.visibility;
                            }
                        }), duration / 8);

                        return;
                    }
                }

            });

            if (this.gameObjectData.canBeRemoved)
                return;

            // this.gameObjectData.xPos = p2BodyPos.x;
            // this.gameObjectData.yPos = p2BodyPos.y;
            //
            // this.ballShadow.x = p2BodyPos.x;
            // this.ballShadow.y = p2BodyPos.y;
            this.setPosition(p2BodyPos.x, p2BodyPos.y);
            this.oldPos.x = this.gameObjectData.xPos;
            this.oldPos.y = this.gameObjectData.yPos;

            // this.lastPosition = new Vector3(this.x, this.y, 0);
            // console.log("last pos");
            // this.lastPosition.y = this.y;

            // this.previousPosition = this.oldPos.clone();
            // this.latestPositionTime = Date.now();//.NOW;
            // this.actualPosition = this.oldPos.clone();


            // this.handleRotation();
        }

    }

    protected declareAnimationFinished(): void {
        this.animationInProgress = false;
        // (this.graphicObject as BallGraphicObject).enableSphere();
    }

    protected addGraphicObject(): void {
        super.addGraphicObject();

        this.graphicObject = new BallGraphicObject(this.radius);
    }

    public addShadowBody(): void {
        this.p2Shadow.position[0] = this.gameObjectData.xPos;
        this.p2Shadow.position[1] = this.gameObjectData.yPos;

        P2WorldManager.Instance().world.addBody(this.p2Shadow);
    }

    public removeShadowBody(): void {

        P2WorldManager.Instance().world.removeBody(this.p2Shadow);
    }

    public addBody(): void {

        P2WorldManager.Instance().world.addBody(this.p2Body);
    }


    public removeBody(): void {

        P2WorldManager.Instance().world.removeBody(this.p2Body);
    }

    // public enableSphere(): void {
    //     this.sphere.setEnabled(true);
    // }

    set ballPosition(positionVector: Vector2) {
        if (!this.initialPosition) {
            this.initialPosition = positionVector.clone();
        }
        this._ballPosition = positionVector;

        // this.gameObjectData.xPos = positionVector.x;
        // this.gameObjectData.yPos = positionVector.y;
        //
        // this.ballShadow.x = this.gameObjectData.xPos;
        // this.ballShadow.y = this.gameObjectData.yPos;
        //
        // this.p2Body.position = [positionVector.x, positionVector.y];
        // this.p2Shadow.position = [positionVector.x, positionVector.y];
        //
        //
        // if (this.sphere) {
        //     this.handleRotation();
        // }

    }

    get ballPosition(): Vector2 {
        return new Vector2(this.gameObjectData.xPos, this.gameObjectData.yPos);
    }

    public speed(): number {
        // magnitude of velocity vector
        return Math.sqrt(this.p2Body.velocity[0] * this.p2Body.velocity[0] + this.p2Body.velocity[1] * this.p2Body.velocity[1]);
    }


    public angle(): number {
        //angle of ball with the x axis
        return Math.atan2(this.velocity.y, this.velocity.x);
    }

    public onShoot(ballVelocity: Vector2): void {
        this.p2Body.velocity[0] = ballVelocity.x;
        this.p2Body.velocity[1] = ballVelocity.y;
        this.moving = true;
    }

    public reset(): void {
        // console.log(this.name + "se reseteaza mingea!");
        if (this.ballInPocketAnimationTimeline && this.ballInPocketAnimationTimeline.isActive()) {
            this.ballInPocketAnimationTimeline.pause();
            this.ballInPocketAnimationTimeline.kill();
        }

        // this.scale.x = 1;
        // this.scale.y = 1;


        // this.zIndexSwitched = false;

        this.gameObjectData.canBeRemoved = false;
        // console.log("salam la reset abstract ball: " + this.name);
        // console.log("%c salam la reset abstract ball: " + this.name, "color: #00ff00");

        this.animationInProgress = false;
        this.p2Body.velocity[0] = 0;
        this.p2Body.velocity[1] = 0;
        P2WorldManager.Instance().world.addBody(this.p2Body);
        P2WorldManager.Instance().world.addBody(this.p2Shadow);
        // this.removedFromArray = false;
        (this.graphicObject as BallGraphicObject).reset();
        this.gameObjectData.alpha = this.graphicObject.alpha;
        this.gameObjectData.scale = this.graphicObject.scale.x;
        // this.removed = false;
    }

    // public createBallShadow() {
    //     this.ballShadow = new PIXI.Graphics();
    //     this.ballShadow.name = this.name + "_ballShadow";
    //     this.ballShadow.beginFill(0x000000, 0.68);
    //     this.ballShadow.drawCircle(this.radius / 3, this.radius / 3, this.radius);
    //     this.ballShadow.scale.x = 0.9;
    //     this.ballShadow.scale.y = 0.9;
    // }

    /*public getBallData(): BallData {
        let ballData: BallData = {};


        ballData.x = this.x;
        ballData.y = this.y;

        ballData.veloX = this.p2Body.velocity[0];
        ballData.veloY = this.p2Body.velocity[1];

        ballData.scaleX = this.scale.x;
        ballData.scaleY = this.scale.y;

        ballData.shadowScaleX = this.ballShadow.scale.x;
        ballData.shadowScaleY = this.ballShadow.scale.y;

        ballData.zIndexSwitched = this.zIndexSwitched;

        ballData.visible = this.visible;
        ballData.alpha = this.alpha;
        ballData.name = this.name;
        ballData.parentName = (this.parent) ? this.parent.name : "none";

        return ballData;
    }*/


    /*public setBallData(ballData: BallData): void {
        // this.updatesReceived++;

        /!*_.forEach(ballData.positions, (position:Vector2) => {
            this.newPositions.push(position);
        });

        this.ballPosition = *!/
        // this.newPositionCounter = 0;
        // this.latestPositionTime = window.performance.now ? (performance.now() + performance.timing.navigationStart) : Date.now();
        // this.opponentPosition = new Vector2(ballData.x, ballData.y);
        // this.opponentVelocity = new Vector2(ballData.veloX, ballData.veloY);


        // if (this.ballType == BallType.White)
        // {
        //     if (this.speed() == 0)
        //     {
        //         this.p2Body.velocity = [ballData.veloX, ballData.veloY];
        //     }
        // }
        // = _currentTime;

        // if(this.newPositions.length == 0)
        // {
        //     return;
        // }

        // console.log("new positions: " + this.newPositions);
        // if (this.latestPositionTime == 0) {
        //     this.latestPositionTime = _currentTime;
        //
        //     this.prevPositions = [];
        //
        //     _.forEach(this.newPositions, (pos: Vector2) => {
        //         this.prevPositions.push(pos);
        //     });
        //
        //     return;
        // }
        //
        // let timeDiff = _currentTime - this.latestPositionTime;

        // if (this.networkTween) {
        //     this.networkTween.kill();
        //     this.networkTween = null;
        // }
        // this.networkTween = TweenMax.to(this, timeDiff / 1000 + 0.05, {bezier:this.newPositions, ease:Linear.easeNone, onUpdate:this.handleRotation.bind(this)});

        // console.log("new positions: ");
        // console.log(this.newPositions);
        // console.log("=============");
        //


        // this.prevPositions = [];
        // _.forEach(this.newPositions, (pos: Vector2) => {
        //     this.prevPositions.push(pos);
        // });
        // console.log("time diff: " + timeDiff);
        // console.log("time diff / 1000: " + (timeDiff / 1000));


        /!* let diff = _currentTime - this.latestPositionTime;




         // this.ballInPocketAnimationTimeline.add(TweenMax.to(this, duration, {
         //     bezier: bezierPositions,
         //     ease: Linear.easeNone,
         //     onUpdate: this.handleRotation.bind(this)
         //
         // }), 0);
         this.latestPositionTime = Date.now();

         this.networkTween = TweenMax.to(this, 1, {bezier: this.newPositions});*!/
        // this.newPositionCounter = 0;
        // this.opponentLastTime = window.performance.now ? (performance.now() + performance.timing.navigationStart) : Date.now();
        // this.opponentPosition = new Vector2(ballData.x, ballData.y);
        // this.opponentVelocity = new Vector2(ballData.veloX, ballData.veloY);
        //
        // this.previousPosition = this.latestPosition = new Vector2(ballData.x, ballData.y);
        // this.latestPositionTime = Date.now();//.NOW;
        // this.actualPosition = this.latestPosition;

        // // if(this.p2Body.velocity.length == 0 && this.opponentVelocity.length() > 0)
        // // {
        //     this.p2Body.velocity[0] = this.opponentVelocity.x;
        //     this.p2Body.velocity[1] = this.opponentVelocity.y;
        // // }
        // else {
        //     this.p2Body.velocity[0] = this.lerp(this.p2Body.velocity[0], this.opponentVelocity.x, 0.5);
        //     this.p2Body.velocity[1] = this.lerp(this.p2Body.velocity[1], this.opponentVelocity.y, 0.5);
        // }
        //
        // if(this.ballPosition != this.opponentPosition)
        // {
        //     this.p2Body.position[0] = this.lerp(this.p2Body.position[0], this.opponentPosition.x, 0.5);
        //     this.p2Body.position[1] = this.lerp(this.p2Body.position[1], this.opponentPosition.y, 0.5);
        // }

//                 console.log("a intrat data? opp last time: " + this.opponentLastTime);

        /!*this.ballPosition = new Vector2(ballData.x, ballData.y);

        this.scale.x = ballData.scaleX;
        this.scale.y = ballData.scaleY;

        this.ballShadow.scale.x = ballData.shadowScaleX;
        this.ballShadow.scale.y = ballData.shadowScaleY;

        this.visible = ballData.visible;
        this.alpha = ballData.alpha;*!/

        // if (ballData.zIndexSwitched) {
        //     this.ballAnimationHolder.addChildAt(this.ballShadow, 0);
        //     this.ballAnimationHolder.addChild(this);
        // }
    }*/

    public playSnapshot(): void {
        if (this.snapshotsBundle.length <= 0) {
            return;
        }
        this.isUpdatingFromServer = true;
        // console.log("goalie mover on play snapshot");

        // this.setPosition(this.snapshotsBundle[0].xPos, this.snapshotsBundle[0].yPos);

        if (this.animationTween && this.animationTween.isActive())
            this.animationTween.kill();

        this.animationTween = TweenMax.to(this.gameObjectData, Settings.playerUpdateInterval, {
            xPos: this.snapshotsBundle[0].xPos,
            yPos: this.snapshotsBundle[0].yPos,
            alpha: this.snapshotsBundle[0].alpha,
            scale: this.snapshotsBundle[0].scale,
            ease: Linear.easeNone
        });

        if (this.snapshotsBundle[0].canBeRemoved) {
            this.gameObjectData.canBeRemoved = true;
            P2WorldManager.Instance().world.removeBody(this.p2Body);
            P2WorldManager.Instance().world.removeBody(this.p2Shadow);
        }

        // if (this.ballType == BallType.White && this.snapshotsBundle[0].isOnReposition == true) {
        //     this.gameObjectData.isOnReposition = true;
        //     this.gameObjectData.alpha = 1;
        //     this.graphicObject.hide();
        // }

        // super.playSnapshot();
        this.snapshotsBundle.shift();
    }
}