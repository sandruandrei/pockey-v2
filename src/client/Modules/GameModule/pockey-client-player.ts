/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/9/2019
 */
import {Player} from "../../../common/player";
import {FrameworkSocketEvents} from "../../qFramework/AbstractModules/Connection/connection-channels-and-messages";
import {PockeyPlayerData} from "../../../common/pockey-player-data";
import {PockeyPlayerManager} from "./pockey-player-manager";
import {SignalsManager} from "../../qFramework/Signals/signals-manager";
import {ConnectionSignalsType} from "../../qFramework/Signals/signal-types";
import {GameWorld} from "./GameObjects/game-world";
import {PockeySocketMessages} from "../ConnectionModule/pockey-connection-channels-and-messages";
import {PockeySignalTypes} from "../SignalsModule/pockey-signal-types";
import {BallType} from "../../../common/pockey-game-settings";
import {PockeyStates} from "../StateMachine/pockey-state-machine";
import {PockeyScreenShot} from "../../../common/pockey-value-objects";
import {InventoryVO, PockeySettings} from "../../pockey-settings";
import {Utilities} from "../../qFramework/Utils/utilies";
import * as _ from "lodash";

// import {PockeyGameElementVO} from "../common/pockey-value-objects";

export class PockeyClientPlayer extends Player {
    public pockeyGameWorld: GameWorld;
    private snapshotsReceived: number = 0;
    private snapshotApplianceStarted: boolean = false;
    private snapshotEmitionStopped: boolean = true;

    constructor() {
        super();

        this.pockeyGameWorld = new GameWorld();
        // socket.on(FrameworkSocketEvents.updatePlayerDataFromServer, this.updatePlayerData.bind(this));
    }

    public switchToPlayingSocket(socket: any): void {
        this.socket = socket;

        this.socket.on(FrameworkSocketEvents.gameSetup, this.onGameSetup.bind(this));
        this.socket.on(FrameworkSocketEvents.startSendingSnapshots, this.startSendingSnapshots.bind(this));
        this.socket.on(FrameworkSocketEvents.snapshotUpdate, this.onReceiveSnapshotUpdate.bind(this));

        this.socket.on(PockeySocketMessages.SCORE_UPDATED, this.onScoreUpdated.bind(this));
        this.socket.on(PockeySocketMessages.CHANGE_STATE, this.onChangePlayerState.bind(this));
    }

    public onChangePlayerState(state: PockeyStates): void {
        SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_PLAYER_STATE, [state]);
    }

    public onBallInPocket(ballType: BallType): void {
        this.socket.emit(PockeySocketMessages.BALL_IN_THE_HALL, ballType);
    }

    public onOwnBallFault(): void {
        this.socket.emit(PockeySocketMessages.OWN_BALL_TOUCHED_FIRST);
    }

    public onEndTurn(): void {
        console.log('salamflorin');
        this.snapshotEmitionStopped = true;
        // this.socket.emit(PockeySocketMessages.CHECK_NEXT_TURN);
    }

    protected onScoreUpdated(data: any): void {
        let leftPlayerData: PockeyPlayerData = data[0];
        let rightPlayerData: PockeyPlayerData = data[1];

        if (this.data.socketID == leftPlayerData.socketID) {
            this.data = leftPlayerData;
            PockeyPlayerManager.Instance().opponent = rightPlayerData;
        } else {
            this.data = rightPlayerData;
            PockeyPlayerManager.Instance().opponent = leftPlayerData;
        }

        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_SCORE, [this.data.currentScore, PockeyPlayerManager.Instance().opponent.currentScore]);
    }

    // protected onBeginRound(): void {
    //     console.log("onBeginRound");
    //     // SignalsManager.DispatchSignal(SignalsType.BEGIN_ROUND);
    //
    //     PockeyPlayerManager.Instance().player.startSendingSnapshots();
    // }

    protected onGameSetup(data: any[]): void {
        let leftPlayerData: PockeyPlayerData = data[0];
        let rightPlayerData: PockeyPlayerData = data[1];

        if (this.data.socketID == leftPlayerData.socketID) {
            this.isFirstToStart = true;
            this.data = leftPlayerData;

            PockeyPlayerManager.Instance().opponent = rightPlayerData;
            PockeyPlayerManager.Instance().currentPlayerSocketID = leftPlayerData.socketID;

            console.log("I'll start first biatch!");
        } else {
            this.isFirstToStart = false;
            this.data = rightPlayerData;

            PockeyPlayerManager.Instance().opponent = leftPlayerData;
            PockeyPlayerManager.Instance().currentPlayerSocketID = PockeyPlayerManager.Instance().opponent.socketID;
            console.log("I'll start second because i is a noooob!");
        }

        if (PockeyPlayerManager.Instance().opponent.color == PockeyPlayerManager.Instance().player.data.color) {
            // // @ts-ignore
            // let oldColor:number = PockeyPlayerManager.Instance().player.data.color;
            let opponentColor:string = PockeyPlayerManager.Instance().opponent.color;
            _.forEach(PockeySettings.LARGE_COLORS_ARRAY, (colorVO: InventoryVO) => {
                if (colorVO.id == opponentColor) {
                    PockeyPlayerManager.Instance().opponent.color = Utilities.ColorToPlainString(colorVO.complementaryColor);
                    // console.log("NEW OPPONENT COLOR");
                    return false;
                }
            });
        }
        SignalsManager.DispatchSignal(ConnectionSignalsType.GAME_SETUP_RECEIVED, [data[2]]);

        // console.log("-------------------");
        // console.log("on game setup data: ");
        // console.log(data[0]);
        // console.log(data[1]);
        // console.log("-------------------");
    }

    protected onReceiveSnapshotUpdate(data: PockeyScreenShot): void {
//         console.log("snapshot received");
//         this.snapshotsBundle.push(data as PockeyGameElementVO[]);
//         if (this.snapshotsBundle.length == 10 && !this.snapshotApplianceStarted) {
//             this.applyScreenshot();
//             this.snapshotApplianceStarted = true;
//         }
        this.snapshotsReceived++;

        // console.log("client player snapshots received: " + this.snapshotsReceived );

        this.pockeyGameWorld.sendSnapshotToGameObjects(data);

        if (this.snapshotsReceived == 1 && !this.snapshotApplianceStarted) {
            this.pockeyGameWorld.startSimulatingSnapshots();
            this.snapshotsReceived = 0;
        }
    }

    // protected applyScreenshot() {
    //     this.pockeyGameWorld.applyScreenShot(this.snapshotsBundle[0]);
    //     this.snapshotsBundle.shift();
    //     // TweenMax.delayedCall(Settings.playerUpdateInterval * 0.9, this.applyScreenshot.bind(this));
    //     setTimeout( this.applyScreenshot.bind(this), 100);
    //
    // }

    public startSendingSnapshots(): void {
        this.pockeyGameWorld.reset();
        this.snapshotEmitionStopped = false;
        this.snapshotTimer();
        // setTimeout( this.snapshotTimer.bind(this), 1000);
        // TweenMax.delayedCall(Settings.playerUpdateInterval, this.snapshotTimer.bind(this))
    }

    protected snapshotTimer(): void {
        if (this.snapshotEmitionStopped) {
            // console.log("la emition stopped");
            this.sendGameSnapshot(this.pockeyGameWorld.getSnapshot());
            setTimeout(() => {
                this.socket.emit(PockeySocketMessages.CHECK_NEXT_TURN);
            }, 100);

        } else {
            // console.log("la emition not stopped");

            this.sendGameSnapshot(this.pockeyGameWorld.getSnapshot());
            setTimeout(this.snapshotTimer.bind(this), 100);
        }
        // TweenMax.delayedCall(Settings.playerUpdateInterval, this.snapshotTimer.bind(this))
    }

}
