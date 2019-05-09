/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 3/28/2019
 */
import {Decal} from "./OtherPooltableElements/decal";
import {PuckGoal} from "./OtherPooltableElements/puck-goal";
import {Settings} from "../../../qFramework/Settings";
// import {PockeySettings} from "../../pockey-settings";
import {TableFelt} from "./OtherPooltableElements/table-felt";
import {PockeySettings} from "../../../pockey-settings";
// import {BallType, TableSide} from "../../../../common/pockey-game-settings";
import {GoalieGameObject} from "./goalie/goalie-game-object";
import {StickGameObject} from "./stick/stick-game-object";
import {Vector2} from "../../../qFramework/Utils/Vector2";
// import {WhiteBallGameObject} from "./ball/white-ball-game-object";
import {Pocket} from "./OtherPooltableElements/pocket";
import {BallType} from "../../../../common/pockey-game-settings";
import {BallGameObject} from "./ball/ball-game-object";
import * as _ from "lodash";
import {BallBlocker} from "./OtherPooltableElements/ball-blocker";
import {MaterialType} from "../p2-world-manager";

// import {BallGameObject} from "./ball/ball-game-object";

export class PoolTableGraphics extends PIXI.Container {

    protected poolTableFeltBackground: PIXI.Sprite;
    protected poolTableFeltLines: PIXI.Sprite;
    protected poolTableBumper: PIXI.Sprite;
    protected poolTableOverFrame: PIXI.Sprite;
    public pockets: Pocket[] = [];

    protected decalIcon: Decal;

    public leftGoal: PuckGoal;
    public rightGoal: PuckGoal;

    public leftGoalie: GoalieGameObject;
    public rightGoalie: GoalieGameObject;

    public stick: StickGameObject;
    public whiteBall: BallGameObject;
    public balls: BallGameObject[] = [];

    public leftLimit: number;
    public rightLimit: number;
    public upLimit: number;
    public downLimit: number;

    public playGround: PIXI.Rectangle;
    public shadowsHolder: PIXI.Container;

    public leftGoalkeeperCircle: PIXI.Circle;
    public rightGoalkeeperCircle: PIXI.Circle;
    public goalkeepersCircles: PIXI.Circle[] = [];

    // public whiteAbstract: BallGameObject;
    // public blackBall: BallGameObject;

    constructor() {
        super();

        this.createElements();
    }

    private createElements(): void {
        //play ground
        this.playGround = new PIXI.Rectangle(-970 / 2, -484 / 2, 970, 484);
        this.setTableLimits();
        /////end play ground

        //Pockets
        this.addPocketsAndBlockers();
        //end pockets

        //poolTableFeltBackground
        this.poolTableFeltBackground = new PIXI.Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_felt_bottom.png"));
        this.poolTableFeltBackground.name = "poolTableFeltBackground";
        this.poolTableFeltBackground.anchor.x = 0.5;
        this.poolTableFeltBackground.anchor.y = 0.5;
        this.addChild(this.poolTableFeltBackground);
        ////end poolTableFeltBackground

        // poolTableFeltLines
        this.poolTableFeltLines = new PIXI.Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_felt_lines.png"));
        this.poolTableFeltLines.name = "poolTableFeltLines";
        this.poolTableFeltLines.anchor.x = 0.5;
        this.poolTableFeltLines.anchor.y = 0.5;
        this.addChild(this.poolTableFeltLines);
        ////end poolTableFeltLines

        //poolTableOverFrame
        this.poolTableOverFrame = new PIXI.Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_border_01.png"));
        this.poolTableOverFrame.name = "poolTableOverFrame";
        // this.poolTableOverFrame.x = PockeySettings.MIDDLE_TABLE_POS.x - this.poolTableOverFrame.width / 2;
        // this.poolTableOverFrame.y = PockeySettings.MIDDLE_TABLE_POS.y - this.poolTableOverFrame.height / 2;
        this.poolTableOverFrame.anchor.x = 0.5;
        this.poolTableOverFrame.anchor.y = 0.5;
        this.addChild(this.poolTableOverFrame);
        //end poolTableOverFrame

        //poolTableBumper
        this.poolTableBumper = new PIXI.Sprite(PIXI.Texture.fromFrame(Settings.desktopAssetsPath + "Images/table_bumper.png"));
        this.poolTableBumper.name = "poolTableBumper";
        this.poolTableBumper.anchor.x = 0.5;
        this.poolTableBumper.anchor.y = 0.5;
        // this.poolTableBumper.x = -this.poolTableBumper.width / 2;//485;
        // this.poolTableBumper.y = -this.poolTableBumper.height / 2;//300;
        this.addChild(this.poolTableBumper);

        new TableFelt(this.poolTableFeltBackground, this.poolTableBumper);
        ////end poolTableBumper

        this.shadowsHolder = new PIXI.Container();
        this.shadowsHolder.name = "ShadowsHolder";
        // this.shadowsHolder.visible = false;
        this.addChild(this.shadowsHolder);

        // decal icon
        this.decalIcon = new Decal();
        this.decalIcon.name = "decalIcon";
        this.decalIcon.x = PockeySettings.MIDDLE_TABLE_POS.x;
        this.decalIcon.y = PockeySettings.MIDDLE_TABLE_POS.y;
        this.addChild(this.decalIcon);
        //end decal icon

        //rightGoal
        this.rightGoal = new PuckGoal("right");
        this.rightGoal.name = "rightGoal";
        this.rightGoal.x = +487;
        this.rightGoal.y = -116;
        this.addChild(this.rightGoal);
        //end rightGoal

        //leftGoal
        this.leftGoal = new PuckGoal("left");
        this.leftGoal.name = "leftGoal";
        this.leftGoal.x = -484 - this.leftGoal.width;
        this.leftGoal.y = -116;
        this.addChild(this.leftGoal);
        //end leftGoal

        //goalies
        this.leftGoalie = new GoalieGameObject("leftGoalie", BallType.Left);
        this.addChild(this.leftGoalie.graphicObject);
        this.leftGoalkeeperCircle = new PIXI.Circle(-510, 0, 100);
        this.goalkeepersCircles = [];
        this.goalkeepersCircles.push(this.leftGoalkeeperCircle);

        this.rightGoalie = new GoalieGameObject("rightGoalie", BallType.Right);
        this.addChild(this.rightGoalie.graphicObject);

        this.rightGoalkeeperCircle = new PIXI.Circle(510, 0, 100);
        this.goalkeepersCircles.push(this.rightGoalkeeperCircle);

        //end goalies

        //white ball
        // this.whiteBall.ballAnimationHolder = this.ballAnimationHolder;

        // this.whiteBall.createBallShadow();
        let ballPos: Vector2 = new Vector2(PockeySettings.MIDDLE_TABLE_LEFT_POS.x, PockeySettings.MIDDLE_TABLE_POS.y);
        // this.whiteBall = new BallGameObject('whiteBall', TableSide.NONE, BallType.White);
        //
        // this.whiteBall.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
        // this.whiteBall.setPockets(this.pockets);
        // this.balls.push(this.whiteBall);
        // this.shadowsHolder.addChild(this.whiteBall.graphicObject);

        this.whiteBall = new BallGameObject('whiteBall', BallType.White);
        // this.whiteBall.createBallShadow();
        this.whiteBall.setPosition(ballPos.x, ballPos.y);
        // this.whiteBall.ballPosition = new Vector2(PockeySettings.MIDDLE_TABLE_LEFT_POS.x, PockeySettings.MIDDLE_TABLE_POS.y);
        this.whiteBall.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
        this.whiteBall.setPockets(this.pockets);
        this.balls.push(this.whiteBall);
        this.shadowsHolder.addChild(this.whiteBall.graphicObject);

        // this.blackBall = new BallGameObject('blackBall', TableSide.NONE, BallType.White);
        // this.blackBall.createBallShadow();
        // this.blackBall.ballPosition = new Vector2(PockeySettings.MIDDLE_TABLE_LEFT_POS.x + 60, PockeySettings.MIDDLE_TABLE_POS.y);
        // this.blackBall.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
        // this.blackBall.setPockets(this.pockets);
        // // this.balls.push(this.whiteBall);
        // this.shadowsHolder.addChild(this.blackBall.ballShadow);


        //end white ball

        //rightBalls

        let ball: BallGameObject;
        let angle: number;

        _.forEach(_.range(PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER), (id: number) => {
            angle = (id / (PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER / 2)) * Math.PI;
            ballPos = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x + (PockeySettings.BALLS_DISTANCE * Math.cos(angle)), PockeySettings.MIDDLE_TABLE_POS.y + (PockeySettings.BALLS_DISTANCE * Math.sin(angle)));

            ball = new BallGameObject(BallType.Right + id.toString(), BallType.Right);
            // ball.createBallShadow();
            ball.setPosition(ballPos.x, ballPos.y);
            // ball.ballAnimationHolder = this.ballAnimationHolder;
            // ball.createBallShadow();
            ball.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
            ball.setPockets(this.pockets);
            this.balls.push(ball);
            this.shadowsHolder.addChild(ball.graphicObject);
        });
        //end right balls
        //left balls
        _.forEach(_.range(PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER), (id: number) => {
            angle = (id / (PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER / 2)) * Math.PI + Math.PI / PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER;
            ballPos = new Vector2(PockeySettings.MIDDLE_TABLE_POS.x + (PockeySettings.BALLS_DISTANCE * Math.cos(angle)), PockeySettings.MIDDLE_TABLE_POS.y + (PockeySettings.BALLS_DISTANCE * Math.sin(angle)));

            ball = new BallGameObject(BallType.Left + id.toString(), BallType.Left);
            // ball.createBallShadow();
            ball.setPosition(ballPos.x, ballPos.y);
            // ball.ballAnimationHolder = this.ballAnimationHolder;
            // ball.createBallShadow();
            ball.setWallLimits(this.leftLimit, this.rightLimit, this.upLimit, this.downLimit);
            ball.setPockets(this.pockets);
            this.balls.push(ball);
            this.shadowsHolder.addChild(ball.graphicObject);
        });
        //end left balls

        //stick
        this.stick = new StickGameObject("stick");
        this.stick.setPosition(-145, 110);
        this.addChild(this.stick.graphicObject);

        //end stick

    }


    private setTableLimits() {
        this.leftLimit = this.playGround.x;
        this.rightLimit = this.playGround.x + this.playGround.width;
        this.upLimit = this.playGround.y;
        this.downLimit = this.playGround.y + this.playGround.height;
    }

    private addPocketsAndBlockers() {
        //blocker 1
        this.createBlocker(new PIXI.Rectangle(-494, 0, 20, 380), 0, MaterialType.PUCK_ONLY_MATERIAL);
        //blocker 2
        this.createBlocker(new PIXI.Rectangle(497, 0, 20, 380), 0, MaterialType.PUCK_ONLY_MATERIAL);
        //blocker 3
        this.createBlocker(new PIXI.Rectangle(-492, -250, 20, 58), 0.7853981634, MaterialType.BALL_ONLY_MATERIAL);
        //blocker 4
        this.createBlocker(new PIXI.Rectangle(492, 250, 20, 58), 0.7853981634, MaterialType.BALL_ONLY_MATERIAL);
        //blocker 5
        this.createBlocker(new PIXI.Rectangle(492, -250, 20, 58), -0.7853981634, MaterialType.BALL_ONLY_MATERIAL);
        //blocker 6
        this.createBlocker(new PIXI.Rectangle(-492, 250, 20, 58), -0.7853981634, MaterialType.BALL_ONLY_MATERIAL);
        //blocker 7
        this.createBlocker(new PIXI.Rectangle(0, -270, 100, 20), 0, MaterialType.BALL_ONLY_MATERIAL);
        //blocker 8
        this.createBlocker(new PIXI.Rectangle(0, 270, 100, 20), 0, MaterialType.BALL_ONLY_MATERIAL);

        let pocket1: Pocket = new Pocket(-497, -254, 26, new Vector2(-438, -200));
        this.pockets.push(pocket1);
        pocket1.addPoints(this);

        let pocket2: Pocket = new Pocket(0, -264, 26, new Vector2(0, -200));
        this.pockets.push(pocket2);
        pocket2.addPoints(this);

        let pocket3: Pocket = new Pocket(496, -255, 26, new Vector2(438, -200));
        this.pockets.push(pocket3);
        pocket3.addPoints(this);

        let pocket4: Pocket = new Pocket(497, 254, 26, new Vector2(438, 200));
        this.pockets.push(pocket4);
        pocket4.addPoints(this);

        let pocket5: Pocket = new Pocket(0, 263, 26, new Vector2(0, 200));
        this.pockets.push(pocket5);
        pocket5.addPoints(this);

        let pocket6: Pocket = new Pocket(-497, 253, 26, new Vector2(-438, 200));
        this.pockets.push(pocket6);
        pocket6.addPoints(this);
    }

    private createBlocker(rectangle: PIXI.Rectangle, rotationAngle: number, materialType: MaterialType): BallBlocker {

        return new BallBlocker(rectangle, rotationAngle, materialType);
    }
}
