/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/4/2019
 */


import {PockeyConnectionSignals, PockeySignalTypes} from "../../SignalsModule/pockey-signal-types";
import {SignalsManager} from "../../../qFramework/Signals/signals-manager";
import {AbstractScreen} from "../../../qFramework/AbstractModules/UserInterface/abstract-screen";
import {Player} from "../../../../common/player";
import {BallType, RoundCompleteType, RoundVO} from "../../../../common/pockey-value-objects";
import {PockeyPlayerManager} from "../../../pockey-player-manager";
import {PlayerGraphicsInterface} from "./GameScreen/pockey-ui-game-screen";


export class RoundCompleteScreen extends AbstractScreen {
    // protected div: HTMLDivElement | undefined;
    protected textDiv: HTMLDivElement | undefined;

    // private player: Player;
    // private opponent: Player;
    private currentRound: number = 1;

    private mainMenuButton: HTMLDivElement | undefined;
    private rematchButton: HTMLDivElement | undefined;
    private newOpponentButton: HTMLDivElement | undefined;
    private roundNumberDiv: HTMLDivElement | undefined;

    private rematchDiv: HTMLDivElement | undefined;
    private confirmRematchButton: HTMLDivElement | undefined;
    private rejectRematchButton: HTMLDivElement | undefined;

    private playerGraphicsInterface: PlayerGraphicsInterface;
    private opponentGraphicsInterface: PlayerGraphicsInterface;

    constructor() {
        super();

        this.assignDivs();

        SignalsManager.AddSignalCallback(PockeySignalTypes.ASSIGN_PLAYER, this.onDefinePlayerInterface.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetSides.bind(this));
        SignalsManager.AddSignalCallback(PockeyConnectionSignals.OPPONENT_NEXT_ROUND, this.onRematch.bind(this));

    }


    set div(value: HTMLDivElement | undefined) {
        super.div = value;
    }

    private onRematch(): void {
        (this.rematchDiv as HTMLDivElement).style.display = "flex";
        (this.rematchButton as HTMLDivElement).style.display = "none";
    }

    protected assignDivs(): void {
        this.div = document.getElementById("RoundCompleteScreen") as HTMLDivElement;
        console.log("this.div: " + this.div);
        this.textDiv = document.getElementById("RoundCompleteText") as HTMLDivElement;
        this.roundNumberDiv = document.getElementById("RoundCompleteRoundNumber") as HTMLDivElement;
        this.titleDiv = document.getElementById("RoundCompleteTitle") as HTMLDivElement;
        this.rematchDiv = document.getElementById("RematchAsked") as HTMLDivElement;

        this.mainMenuButton = document.getElementById("ScreenMainMenuButton") as HTMLDivElement;
        this.mainMenuButton.onclick = () => {
            SignalsManager.DispatchSignal(PockeySignalTypes.MAIN_MENU_BUTTON_CLICKED);
            console.log("mainMenuButton clicked");
        };
        this.rematchButton = document.getElementById("ScreenRematchButton") as HTMLDivElement;
        this.rematchButton.onclick = () => {
            (this.rematchButton as HTMLDivElement).style.display = "none";
            SignalsManager.DispatchSignal(PockeySignalTypes.RESTART_GAME_BUTTON_CLICKED);
            console.log("rematchButton clicked");
        };
        this.newOpponentButton = document.getElementById("ScreenNewOpponentButton") as HTMLDivElement;
        this.newOpponentButton.onclick = () => {
            SignalsManager.DispatchSignal(PockeySignalTypes.START_GAME);
            // console.log("newOpponentButton clicked");
        };

        this.confirmRematchButton = document.getElementById("RematchYes") as HTMLDivElement;
        this.confirmRematchButton.onclick = () => {
            SignalsManager.DispatchSignal(PockeySignalTypes.REMATCH_CONFIRM_BUTTON_CLICKED, ['accept']);
            // console.log("newOpponentButton clicked");
        };

        this.rejectRematchButton = document.getElementById("RematchNo") as HTMLDivElement;
        this.rejectRematchButton.onclick = () => {
            SignalsManager.DispatchSignal(PockeySignalTypes.REMATCH_CONFIRM_BUTTON_CLICKED, ['reject']);

            // this.rematchDiv.style.display = "none";
            // SignalsManager.DispatchSignal(PockeySignalTypes.START_GAME);
            // console.log("newOpponentButton clicked");

            (this.rematchDiv as HTMLDivElement).style.display = "none";
        };

        // this.testDiv();

    }

    private onSetSides() {

        this.playerGraphicsInterface.data = PockeyPlayerManager.Instance().player.data;
        this.opponentGraphicsInterface.data = PockeyPlayerManager.Instance().opponent;

        if (PockeyPlayerManager.Instance().player.data.type == BallType.Left) {
            this.playerGraphicsInterface.graphics = this.leftGameGraphics;
            this.opponentGraphicsInterface.graphics = this.rightGameGraphics;
            // leftSideColor = parseInt(PockeyPlayerManager.Instance().player.data.color, 16);
            // rightSideColor = parseInt(PockeyPlayerManager.Instance().opponent.color, 16);
        } else {
            this.playerGraphicsInterface.graphics = this.rightGameGraphics;
            this.opponentGraphicsInterface.graphics = this.leftGameGraphics;
            // this.playerGraphicsInterface.data = PockeyPlayerManager.Instance().player.data;
            // this.opponentGraphicsInterface.data = PockeyPlayerManager.Instance().opponent;
            // leftSideColor = parseInt(PockeyPlayerManager.Instance().opponent.color, 16);
            // rightSideColor = parseInt(PockeyPlayerManager.Instance().player.data.color, 16);
        }

        this.playerGraphicsInterface.graphics.tint(parseInt(this.playerGraphicsInterface.data.color, 16));
        this.opponentGraphicsInterface.graphics.tint(parseInt(this.opponentGraphicsInterface.data.color, 16));

        this.playerGraphicsInterface.graphics.updateUsername(this.playerGraphicsInterface.data.nickname);
        this.opponentGraphicsInterface.graphics.updateUsername(this.opponentGraphicsInterface.data.nickname);

        this.playerGraphicsInterface.graphics.updateAvatar(this.playerGraphicsInterface.data.avatar);
        this.opponentGraphicsInterface.graphics.updateAvatar(this.opponentGraphicsInterface.data.avatar);
        // this.leftGameGraphics.updateScore(PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER);
        // this.rightGameGraphics.updateScore(PockeySettings.BALLS_NUMBER_FOR_EACH_PLAYER);

        // if (this.player.ballType == 'left') {
        //
        // } else {
        //
        // }

    }

    // @ts-ignore
    private onDefinePlayerInterface(params: Player[]): void {
        // if (params[0].type == BallType.PockeyPlayerData) {
        //     this.player = params[0];
        // } else {
        //     this.opponent = params[0];
        // }
    }

    public updateText(text: string): void {
        // console.log("la opp screen timeru: " + text);
        (this.textDiv as HTMLDivElement).innerText = "get ready for round two in " + text;
    }

    public show(params: RoundVO): void {

        if (params && params.roundNumber) {
            this.currentRound = params.roundNumber;
        }

        if (params && params.type == RoundCompleteType.roundComplete) {
            this.handleRoundComplete();
        } else if (params && params.type == RoundCompleteType.matchComplete) {
            this.handleMatchComplete();
        } else if (params && params.type == RoundCompleteType.playerDisconnected) {
            this.handlePlayerDisconnected();
        } else if (params && params.type == RoundCompleteType.rematch) {
            this.handleRematch();
        }
        super.show();
    }

    private handleRoundComplete(): void {
        (this.textDiv as HTMLDivElement).innerText = "";
        (this.titleDiv as HTMLDivElement).innerText = "ROUND COMPLETE";
        (this.roundNumberDiv as HTMLDivElement).style.background = "url(../Assets/Desktop/Images/UI/hud_matchbanner-round" + this.currentRound.toString() + ".svg) bottom center / 100% no-repeat";
        (this.rematchButton as HTMLDivElement).style.display = "none";
        (this.mainMenuButton as HTMLDivElement).style.display = "none";
        (this.newOpponentButton as HTMLDivElement).style.display = "none";
        (this.rematchDiv as HTMLDivElement).style.display = "none";
    }

    private handleMatchComplete(): void {
        if (PockeyPlayerManager.Instance().player.data.roundsWon >= 2) {
            (this.textDiv as HTMLDivElement).innerText = "MATCH complete! you WiN!";
        } else if (PockeyPlayerManager.Instance().opponent.roundsWon >= 2) {
            (this.textDiv as HTMLDivElement).innerText = "MATCH complete! you lost!";
        }
        (this.roundNumberDiv as HTMLDivElement).style.background = "url(../Assets/Desktop/Images/UI/hud_matchbanner-round" + this.currentRound.toString() + ".svg) bottom center / 100% no-repeat";
        (this.titleDiv as HTMLDivElement).innerText = "MATCH COMPLETE";

        (this.mainMenuButton as HTMLDivElement).style.display = "block";
        (this.newOpponentButton as HTMLDivElement).style.display = "block";
        (this.rematchButton as HTMLDivElement).style.display = "block";
    }

    private handleRematch(): void {

    }

    private handlePlayerDisconnected(): void {
        (this.titleDiv as HTMLDivElement).innerText = "MATCH COMPLETE";
        (this.textDiv as HTMLDivElement).innerText = "opponent DISCONNECTED";
        (this.roundNumberDiv as HTMLDivElement).style.background = "url(../Assets/Desktop/Images/UI/hud_matchbanner-round" + this.currentRound.toString() + ".svg) bottom center / 100% no-repeat";
        (this.mainMenuButton as HTMLDivElement).style.display = "block";
        (this.newOpponentButton as HTMLDivElement).style.display = "block";
        (this.rematchButton as HTMLDivElement).style.display = "none";
        (this.rematchDiv as HTMLDivElement).style.display = "none";
    }

    /*protected testDiv():void
    {
        if(this.div == undefined)
        console.log("this.div: " + this.div);

        requestAnimationFrame(this.testDiv.bind(this));
    }*/

    public hide(): void {
        console.log("this.div: " + this.div);
        super.hide();
    }

// public show(): void {
    //     console.log("intra la round two");
    //     this.div.style.display = "flex";
    // }
    //
    // public hide(): void {
    //     this.div.style.display = "none";
    // }

    public updateLeftPlayerData(): void {

    }

    public updateRighttPlayerData(): void {

    }

}