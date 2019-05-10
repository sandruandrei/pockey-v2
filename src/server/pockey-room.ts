/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/8/2019
 */
import {Player} from "../common/player";
import {FrameworkSocketEvents} from "../client/qFramework/AbstractModules/Connection/connection-channels-and-messages";
import {PockeySocketMessages} from "../client/Modules/ConnectionModule/pockey-connection-channels-and-messages";
import {PockeyStates} from "../client/Modules/GameModule/StateMachine/pockey-state-machine";
import {Timer} from "../client/qFramework/Utils/timer";
import {BallType, RoundCompleteType, RoundVO} from "../common/pockey-value-objects";

export class PockeyRoom {
    public id: string = "";
    private players: Player[] = [];
    public io: any;
    private gameData: RoundVO = {roundNumber: 1, type: RoundCompleteType.opponentFound};
    private scoreUpdated: boolean = false;
    private whiteBallInTheHall: boolean = false;
    private ownBallFault: boolean = false;
    private opponentBallScored: boolean = false;
    private currentPlayer: Player;
    private roundTimer: Timer;
    private roundDuration: number = 20;

    private roundFinished: boolean = false;
    private matchFinished: boolean = false;

    constructor(id: string, io: any) {
        this.id = id;
        this.io = io;
        // this.players.push(this.player1);
        // this.players.push(this.player2);
        console.log("room created");
        this.roundTimer = new Timer(this.onRoundTimerUpdate.bind(this), this.onRoundTimerComplete.bind(this));
    }

    private onRoundTimerUpdate(): void {
        this.io.to(this.id).emit(PockeySocketMessages.ROUND_TIMER_UPDATE, this.roundTimer.getCurrentTime());
    }

    private onRoundTimerComplete(): void {
        this.io.to(this.id).emit(PockeySocketMessages.HIDE_TIMER);
        this.currentPlayer.socket.emit(PockeySocketMessages.ALLOCATED_TIME_ELAPSED);
        // this.roundTimeElapsed = true;

        // this.players[0].socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
        // this.players[1].socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
        // this.checkNextTurn();

        // this.currentPlayer.socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);

        // this.io.to(this.id).emit(PockeySocketMessages.HIDE_TIMER, this.roundTimer.getCurrentTime());
    }

    public assignPlayer(player: Player): void {
        player.data.roundWins = 0;

        player.socket.on(FrameworkSocketEvents.snapshotUpdate, (data: any) => {
            // console.log("playa: " + player);
            this.sendGameSnapshot(player.data.socketID, data);
        });

        player.socket.on(PockeySocketMessages.BALL_IN_THE_HALL, (ballType: BallType) => {
            this.updateScore(player.data.socketID, ballType);
        });

        player.socket.on(PockeySocketMessages.OWN_BALL_TOUCHED_FIRST, () => {
            this.onOwnBallTouchedFirst();
        });

        player.socket.on(PockeySocketMessages.CHECK_NEXT_TURN, () => {
            this.checkNextTurn();
        });

        player.socket.on(PockeySocketMessages.BALL_WAS_SHOT, () => {
            // this.roundTimeElapsed = false;
            this.roundTimer.stop();
            this.io.to(this.id).emit(PockeySocketMessages.HIDE_TIMER);
        });

        this.players.push(player);
        console.log("room: " + this.id + " -> player assigned: " + player.data.socketID + " -> total players: " + this.players.length);
        // console.log("room: " + this.id + " -> );

        if (this.players.length == 2) {
            this.sendFirstRoundSetup();
        }
    }

    private onOwnBallTouchedFirst(): void {
        this.ownBallFault = true;
    }

    private updateScore(socketID: string, ballType: BallType): void {
        let player: Player;
        let opponent: Player;
        // _.forEach(this.players, (playa: Player) => {
        if (socketID == this.players[0].data.socketID) {
            player = this.players[0];
            opponent = this.players[1];
        } else {
            player = this.players[1];
            opponent = this.players[0];
        }
        // });

        if (ballType == player.data.type) {
            if (this.currentPlayer == player) {
                this.ownBallFault = true;
            } else {
                this.opponentBallScored = true;
            }
            player.data.currentScore--;
            this.scoreUpdated = true;
        } else if (ballType == opponent.data.type) {
            if (this.currentPlayer == opponent) {
                this.ownBallFault = true;
            } else {
                this.opponentBallScored = true;
            }
            opponent.data.currentScore--;
            this.scoreUpdated = true;
        } else if (ballType == BallType.White) {
            this.whiteBallInTheHall = true;
        }

        if (player.data.currentScore <= 0) {
            this.roundFinished = true;
            player.data.roundWins++;
            if (player.data.roundWins == 2) {
                this.matchFinished = true;
            }
        } else if (opponent.data.currentScore <= 0) {
            this.roundFinished = true;
            opponent.data.roundWins++;
            if (opponent.data.roundWins == 2) {
                this.matchFinished = true;
            }
        }
    }

    private checkNextTurn(): void {

        // this.roundTimer.stop();

        if (this.matchFinished) {

        } else if (this.roundFinished) {
            this.gameData.roundNumber++;

            if (this.gameData.roundNumber == 2) {
                this.resetTurnData();
                this.sendSecondRoundSetup();
            }

            // this.io.to(this.id).emit(PockeySocketMessages.ROUND_FINISHED, this.gameData);
            // this.io.to(this.id).emit(PockeySocketMessages.ROUND_FINISHED);
        } else if (this.whiteBallInTheHall) {
            this.currentPlayer.socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
            this.changeCurrentPlayer();
            this.currentPlayer.socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onRepositionWhiteBall);
            this.currentPlayer.socket.emit(FrameworkSocketEvents.startSendingSnapshots);
            this.roundTimer.start(this.roundDuration);
        } else if (this.ownBallFault) {
            this.currentPlayer.socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
            this.changeCurrentPlayer();
            this.currentPlayer.socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onRepositionWhiteBall);
            this.currentPlayer.socket.emit(FrameworkSocketEvents.startSendingSnapshots);
            this.roundTimer.start(this.roundDuration);

        } else if (!this.opponentBallScored) {
            this.currentPlayer.socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
            this.changeCurrentPlayer();
            this.currentPlayer.socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onRearrangeStick);
            this.currentPlayer.socket.emit(FrameworkSocketEvents.startSendingSnapshots);
            this.roundTimer.start(this.roundDuration);
        } else {
            this.resetTurnData();
            this.currentPlayer.socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onRearrangeStick);
            this.currentPlayer.socket.emit(FrameworkSocketEvents.startSendingSnapshots);
            this.roundTimer.start(this.roundDuration);
        }

    }

    private changeCurrentPlayer(): void {
        this.currentPlayer = (this.currentPlayer == this.players[0]) ? this.players[1] : this.players[0];
        this.resetTurnData();
    }

    private resetTurnData(): void {
        this.opponentBallScored = false;
        this.whiteBallInTheHall = false;
        this.ownBallFault = false;
    }

    // _.forEach(this.players, (player: Player) => {
    //     if (ballSocketID == player.data.socketID) {
    //         player.data.currentScore--;
    //     }
    //
    //     // if (player.data.socketID == playerSocketID) {
    //     //
    //     // }
    //
    //     if (player.data.currentScore <= 0) {
    //
    //     }
    // });

    private sendGameSnapshot(socketID: string, data: any): void {
        // console.log("snapshot received on room: " + this.id);
        if (this.players[0].data.socketID == socketID) {
            this.players[0].socket.to(this.id).emit(FrameworkSocketEvents.snapshotUpdate, data);
        } else {
            this.players[1].socket.to(this.id).emit(FrameworkSocketEvents.snapshotUpdate, data);
        }

        if (this.scoreUpdated) {
            this.scoreUpdated = false;
            this.io.to(this.id).emit(PockeySocketMessages.SCORE_UPDATED, [this.players[0].data, this.players[1].data]);
        }
    }

    private sendFirstRoundSetup(): void {
        this.players[0].isFirstToStart = true;
        this.currentPlayer = this.players[0];
        this.players[0].data.type = BallType.Left;
        this.players[0].data.currentScore = 2;
        this.gameData.leftPlayerData = this.players[0].data;

        this.players[1].data.type = BallType.Right;
        this.players[1].data.currentScore = 2;
        this.gameData.rightPlayerData = this.players[1].data;

        this.io.to(this.id).emit(FrameworkSocketEvents.gameSetup, this.gameData);
        setTimeout(this.sendStartRound.bind(this), 3000);
    }

    private sendSecondRoundSetup(): void {
        // this.players[0].isFirstToStart = true;

        // if (this.players[0].isFirstToStart) {
        this.gameData.type = RoundCompleteType.roundComplete;
        this.currentPlayer = this.players[1];

        this.players[1].data.type = BallType.Left;
        this.players[1].data.currentScore = 2;
        this.gameData.leftPlayerData = this.players[1].data;

        this.players[0].data.type = BallType.Right;
        this.players[0].data.currentScore = 2;
        this.gameData.rightPlayerData = this.players[0].data;
        //
        // } else {
        //     this.gameData.leftPlayerData = this.players[0].data;
        //     this.gameData.rightPlayerData = this.players[1].data;
        // }

        // this.currentPlayer = this.players[0];
        // this.players[0].data.type = BallType.Left;
        // this.players[0].data.currentScore = 7;
        // this.gameData.leftPlayerData = this.players[0].data;
        //
        // this.players[1].data.type = BallType.Right;
        // this.players[1].data.currentScore = 7;
        // this.gameData.rightPlayerData = this.players[1].data;

        this.io.to(this.id).emit(FrameworkSocketEvents.gameSetup, this.gameData);


        // this.gameData.type = RoundCompleteType.roundComplete
        //
        // if (this.players[0].isFirstToStart) {
        //     this.gameData.leftPlayerData = this.players[1].data;
        //     this.gameData.rightPlayerData = this.players[0].data;
        // } else {
        //     this.gameData.leftPlayerData = this.players[0].data;
        //     this.gameData.rightPlayerData = this.players[1].data;
        // }

        // setTimeout(this.sendStartRound.bind(this), 3000);

    }

    private sendStartRound(): void {
        if (this.players[0].isFirstToStart) {
            this.players[1].socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
            this.players[0].socket.emit(FrameworkSocketEvents.startSendingSnapshots);
            this.players[0].socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onRearrangeStick);
        } else {
            this.players[0].socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
            this.players[1].socket.emit(FrameworkSocketEvents.startSendingSnapshots);
            this.players[1].socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onRearrangeStick);
        }

        this.roundTimer.start(this.roundDuration);
        // this.roundTimeElapsed = false;
    }
}
