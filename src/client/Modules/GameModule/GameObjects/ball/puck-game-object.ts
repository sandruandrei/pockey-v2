import {BallGameObject} from "./ball-game-object";
import {MaterialType, P2WorldManager} from "../../p2-world-manager";
import * as p2 from "p2";
import {PuckGraphicObject} from "./puck-graphic-object";
import {Vector2} from "../../../../qFramework/Utils/Vector2";
import {BallType} from "../../../../../common/pockey-value-objects";
import {Linear, TweenMax, TimelineMax} from "gsap"
import {SignalsManager} from "../../../../qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../../../SignalsModule/pockey-signal-types";
import {PuckGoal} from "../OtherPooltableElements/puck-goal";

export class PuckGameObject extends BallGameObject {

    public puckGoals: PuckGoal[];
    public goalYPosition: number;
    public goalHeight: number;

    public update(): void {
        if (this.isUpdatingFromServer) {
            this.setPosition(this.gameObjectData.xPos, this.gameObjectData.yPos);
            // if ((this.graphicObject as BallGraphicObject).sphere)
            //     (this.graphicObject as BallGraphicObject).sphere.visibility = this.gameObjectData.alpha;
            this.graphicObject.scale.x = this.graphicObject.scale.y = this.gameObjectData.scale;

            return;
        }

        this.moving = this.p2Body.sleepState != p2.Body.SLEEPING;

        if (this.gameObjectData.canBeRemoved) {
            this.moving = false;
            return;
        }

        if(!this.moving)
            return;
// console.log("puck angle: " + this.p2Body.angle);
        //person.age >=16 ? 'Yes' : 'No';
        if (this.moving && !this.gameObjectData.canBeRemoved) {

            let isCloserToGoal: boolean = false;
            let p2BodyPos: Vector2 = new Vector2(this.p2Body.position[0], this.p2Body.position[1]);
            let goalScored: boolean = false;
            let goalType: BallType;

            if (p2BodyPos.y > this.goalYPosition && p2BodyPos.y < this.goalYPosition + this.goalHeight) {
                // this.x = p2BodyPos.x;
                // this.y = p2BodyPos.y;

                isCloserToGoal = true;
                let distanceToFinalX: number;
                let finalPoint: Vector2 = new Vector2();
                let p2BodyVelocityNormalized: Vector2;


                if (p2BodyPos.x < this.leftLimit) {
                    distanceToFinalX = (this.leftLimit - this.radius) - p2BodyPos.x;
                    p2BodyVelocityNormalized = p2BodyPos.substract(this.oldPos).normalise().multiply(distanceToFinalX);
                    finalPoint.x = this.leftLimit - this.radius - 3;
                    goalScored = true;
                    goalType = this.puckGoals[0].type;

                }
                else if (p2BodyPos.x > this.rightLimit) {
                    distanceToFinalX = p2BodyPos.x - (this.rightLimit + this.radius);
                    p2BodyVelocityNormalized = p2BodyPos.substract(this.oldPos).normalise().multiply(distanceToFinalX);
                    finalPoint.x = this.rightLimit + this.radius + 3;
                    goalScored = true;
                    goalType = this.puckGoals[1].type;
                }

                if (goalScored) {

                    // return;
                    this.gameObjectData.canBeRemoved = true;

                    P2WorldManager.Instance().world.removeBody(this.p2Body);

                    SignalsManager.DispatchSignal(PockeySignalTypes.PUCK_IN_POCKET, [goalType]);

                    this.setPosition(p2BodyPos.x, p2BodyPos.y);

                    finalPoint.y = this.gameObjectData.yPos - p2BodyVelocityNormalized.y;

                    if (finalPoint.y < this.goalYPosition + this.radius) {
                        finalPoint.y = this.goalYPosition + this.radius;
                    }
                    if (finalPoint.y > this.goalYPosition + this.goalHeight - this.radius) {
                        finalPoint.y = this.goalYPosition + this.goalHeight - this.radius
                    }

                    let duration: number = 1 / (this.speed() / 60);
                    duration *= 2;
                    if (duration > 1.8)
                        duration = 1.8;

                    this.animationInProgress = true;
                    let tl: TimelineMax = new TimelineMax();
                    tl.add(TweenMax.to(p2BodyPos, duration, {
                        x: finalPoint.x,
                        y: finalPoint.y,
                        onUpdate: () => {
                            //console.log("anim update p2 body pos: " + p2BodyPos.x, p2BodyPos.y);
                            console.log("mingea e in gaura");
                            this.moving = true;
                            this.setPosition(p2BodyPos.x, p2BodyPos.y);
                        },
                        onComplete: this.declareAnimationFinished.bind(this)
                    }), 0);
                    tl.add(TweenMax.to(this.graphicObject.scale, duration, {
                        x: 0.9,
                        y: 0.9,
                        onUpdate: () => {
                            this.gameObjectData.scale = this.graphicObject.scale.x;
                        },
                        ease: Linear.easeNone
                    }), 0);
                    // tl.add(TweenMax.to(this.ballShadow, duration, {
                    //     x: finalPoint.x,
                    //     y: finalPoint.y,
                    //     ease: Linear.easeNone
                    // }), 0);
                    // tl.add(TweenMax.to(this.scale, duration, {
                    //     x: 0.92,
                    //     y: 0.92
                    // }), 0);
                }
            }

            if (this.gameObjectData.canBeRemoved)
                return;

              this.setPosition(p2BodyPos.x, p2BodyPos.y);
            if (!isCloserToGoal) {

                //todo if distance to pockets is closer than plm
                /*if (p2BodyPos.x + this.radius - this.radius / 2 > this.rightLimit) {
                    this.x = this.rightLimit - this.radius + this.radius / 2;
                }
                else if (p2BodyPos.x - this.radius + this.radius / 2< this.leftLimit) {
                    this.x = this.leftLimit + this.radius- this.radius / 2;
                }
                if (p2BodyPos.y + this.radius - this.radius / 2> this.downLimit) {
                    this.y = this.downLimit - this.radius+ this.radius / 2;
                }
                else if (p2BodyPos.y - this.radius + this.radius / 2< this.upLimit) {
                    this.y = this.upLimit + this.radius- this.radius / 2;
                }*/
            }

            this.setPosition(p2BodyPos.x, p2BodyPos.y);

            this.oldPos.x = this.gameObjectData.xPos;
            this.oldPos.y = this.gameObjectData.yPos;

            // this.rotation += this.p2Body.angle - this.p2Body.previousAngle;

            // if(this.speed() < 1)
            // {
            //     this.rotation = this.p2Body.angle / Math.PI;
            // }

        }
    }

    protected addGraphicObject(): void {

        this.graphicObject = new PuckGraphicObject(this.radius);
    }

    protected getCircleMaterial(): p2.Material {
        return P2WorldManager.Instance().getMaterialByID(MaterialType.PUCK_MATERIAL);
    }

    protected getP2Body(): p2.Body {
        // this.radius = PockeySettings.PUCK_RADIUS;

        let p2Body: p2.Body = new p2.Body({
            mass: this.mass,
            fixedRotation: false
        });

        p2Body.angularDamping = 0;
        p2Body.angularForce = 0;
        p2Body.angularVelocity = 0;

        p2Body.damping = 0.4;
        p2Body.boundingRadius = this.radius;
        p2Body.allowSleep = true;
        p2Body.sleepSpeedLimit = 1; // Body will feel sleepy if speed<1 (speed is the norm of velocity)
        p2Body.sleepTimeLimit = 0.16;
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
}