/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/11/2019
 */
import {SignalsManager} from "../../qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../SignalsModule/pockey-signal-types";
import {Settings} from "../../qFramework/Settings";
import {PockeyStateMachine, PockeyStates} from "./StateMachine/pockey-state-machine";
import {ConnectionSignalsType, SignalsType} from "../../qFramework/Signals/signal-types";
import {PockeySettings} from "../../pockey-settings";
import {PockeyPlayerManager} from "../../pockey-player-manager";
import {PoolTableManager} from "./GameObjects/pool-table-manager";
import {BallType, RoundVO} from "../../../common/pockey-value-objects";
import {TweenMax} from "gsap";
import {PockeyStateTexts} from "./StateMachine/pockey-state-texts";

export class PockeyGameManager {

    protected pooltableManager: PoolTableManager;
    protected currentRound: number = 0;
    protected faultRegistered: boolean = false;

    constructor(pooltableManager: PoolTableManager) {
        this.registerSignals();

        this.pooltableManager = pooltableManager;
    }

    protected registerSignals(): void {
        SignalsManager.AddSignalCallback(SignalsType.ALL_MODULES_ELEMENTS_CREATED, this.onAllModuleElementsCreated.bind(this));

        SignalsManager.AddSignalCallback(PockeySignalTypes.START_GAME, this.onStartGame.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.BALL_IN_POCKET, this.onBallInPocket.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.PUCK_IN_POCKET, this.onPuckInPocket.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.END_TURN, this.onEndTurn.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_PLAYER_STATE, this.onChangePlayerState.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.WHITE_BALL_REPOSITIONED, this.onWhiteBallRepositioned.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.OWN_BALL_TOUCHED_FIRST, this.onOwnBallTouchedFirst.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.SHOOT_BALL, this.onShoot.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.MATCH_FINISHED, this.onEndMatch.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.MAIN_MENU_BUTTON_CLICKED, this.onMainMenuButtonClicked.bind(this));

        // SignalsManager.AddSignalCallback(SignalsType.BEGIN_ROUND, this.startOnRearrange.bind(this));

        SignalsManager.AddSignalCallback(ConnectionSignalsType.GAME_SETUP_RECEIVED, this.onGameSetupReceived.bind(this));
    }

    private onMainMenuButtonClicked(): void {
        // SignalsManager.DispatchSignal(ConnectionSignalsType.DISCONNECT_MY_SOCKET);

        PockeyStateMachine.Instance().changeState(PockeyStates.onMainMenu);
        SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_MAIN_MENU);
        SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);
        SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_GAME_UI);
        SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_POOLTABLE);
        SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [Settings.mainBackgroundName, 0]);

        PockeyPlayerManager.Instance().player.exitServerRoom();
        // //@ts-ignore
        // _.forEach(AbstractEntryPoint.scene.meshes, (mesh: any) => {
        //     mesh.setEnabled(false);
        // });

        // this.reset();
    }

    protected onRoundComplete(roundVO: RoundVO): void {
        SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN, [roundVO]);
    }

    protected onShoot(): void {
        PockeyPlayerManager.Instance().player.announceShot();
    }

    protected onOwnBallTouchedFirst(): void {
        PockeyPlayerManager.Instance().player.onOwnBallFault();
    }

    protected onBallInPocket(ballType: BallType[]): void {
        PockeyPlayerManager.Instance().player.onBallInPocket(ballType[0]);

        if (ballType[0] == PockeyPlayerManager.Instance().player.data.type) {
                this.faultRegistered = true;
                this.updateUIText(PockeyStateTexts.onOwnBallInPocket);
        } else if (ballType[0] == BallType.White) {
                this.faultRegistered = true;
                this.updateUIText(PockeyStateTexts.whiteBallFault);
        } else {
            if (!this.faultRegistered) {
                this.updateUIText(PockeyStateTexts.opponentBallInPocket);
            }
        }
    }

    protected updateUIText(text: PockeyStateTexts) {
        if (PockeyStateMachine.Instance().fsm.currentState != PockeyStates.onWatch) {
            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_UI_TEXT, [text]);
        }
    }

    protected onPuckInPocket(ballType: BallType[]): void {
        PockeyPlayerManager.Instance().player.onPuckInPocket(ballType[0]);

        if (ballType[0] == PockeyPlayerManager.Instance().player.data.type) {
            this.faultRegistered = true;
            this.updateUIText(PockeyStateTexts.puckOwnGoal);
        } else{
            if (!this.faultRegistered) {
                this.updateUIText(PockeyStateTexts.onPuckGoal);
            }
        }
    }

    protected onEndTurn(): void {
        PockeyStateMachine.Instance().changeState(PockeyStates.onEndTurn);
        PockeyPlayerManager.Instance().player.onEndTurn();
    }

    protected onEndMatch(data: RoundVO[]): void {
        let roundVO: RoundVO = data[0];
        PockeyStateMachine.Instance().changeState(PockeyStates.onEndMatch);
        SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN, [roundVO]);
    }

    private onWhiteBallRepositioned(): void {
        // this.selectPlayer();
        console.log("%c GameManager -> White Ball Repositioned", "color: #00bcd4");

        // PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
        this.startOnRearrange();
    }

    protected onChangePlayerState(state: PockeyStates[]): void {
        SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN);
        SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);

        if (state[0] == PockeyStates.onRepositionWhiteBall) {
            this.startOnReposition();
        } else if (state[0] == PockeyStates.onRearrangeStick) {
            this.startOnRearrange();
        } else if (state[0] == PockeyStates.onWatch) {
            // PockeyPlayerManager.Instance().player.pockeyGameWorld.stopServerUpdate();
            PockeyPlayerManager.Instance().currentPlayerSocketID = PockeyPlayerManager.Instance().opponent.socketID;
            this.updateUIText("");
            PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
            this.pooltableManager.addShadows();
        }

        this.faultRegistered = false;
    }

    protected startOnReposition(): void {
        // SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
        PockeyPlayerManager.Instance().currentPlayerSocketID = PockeyPlayerManager.Instance().player.data.socketID;
        PockeyPlayerManager.Instance().player.pockeyGameWorld.stopServerUpdate();
        PockeyStateMachine.Instance().changeState(PockeyStates.onRepositionWhiteBall);
        this.pooltableManager.startOnRepositionWhiteBall();
    }

    protected startOnRearrange(): void {
        // SignalsManager.DispatchSignal(PockeySignalTypes.REACTIVATE_STICK);
        PockeyPlayerManager.Instance().currentPlayerSocketID = PockeyPlayerManager.Instance().player.data.socketID;
        PockeyPlayerManager.Instance().player.pockeyGameWorld.stopServerUpdate();
        PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
        this.pooltableManager.startOnRearrange();
    }

    protected onGameSetupReceived(data: RoundVO[]): void {

        this.currentRound = data[0].roundNumber;
        // SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);

        switch (this.currentRound) {
            case (1): {
                this.prepareFirstRound(data[0]);
                break;
            }
            case (2): {
                this.prepareSecondRound(data[0]);
                break;
            }
            // case (3): {
            //     this.prepareThirdRound();
            //     break;
            // }
        }
    }

    protected prepareFirstRound(roundVO: RoundVO): void {
        console.log("on prepare first round");
        PockeyStateMachine.Instance().changeState(PockeyStates.onPrepareRoundOne);

        // this.updateTableElements();
        this.updateUIElements(roundVO);
    }

    protected prepareSecondRound(roundVO: RoundVO): void {
        // console.log("on prepare second round");
        PockeyStateMachine.Instance().changeState(PockeyStates.onPrepareRoundTwo);

        // this.updateTableElements();
        this.updateUIElements(roundVO);
    }

    protected updateUIElements(roundVO: RoundVO): void {
        if (this.currentRound == 1) {
            SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_OPPONENT_FOUND_SCREEN);
            SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_SEARCHING_SCREEN);
            SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_GAME_UI);

            let tableFeltID: string = (PockeyPlayerManager.Instance().player.isFirstToStart) ? PockeyPlayerManager.Instance().player.data.felt : PockeyPlayerManager.Instance().opponent.felt;
            let stickSkinID: string = (!PockeyPlayerManager.Instance().player.isFirstToStart) ? PockeyPlayerManager.Instance().player.data.stick : PockeyPlayerManager.Instance().opponent.stick;
            let pooltableDecalID: string = (!PockeyPlayerManager.Instance().player.isFirstToStart) ? PockeyPlayerManager.Instance().player.data.decal : PockeyPlayerManager.Instance().opponent.decal;

            SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE);
            SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [tableFeltID]);
            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [stickSkinID]);
            SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [pooltableDecalID]);
        } else if (this.currentRound == 2) {
            let tableFeltID: string = (!PockeyPlayerManager.Instance().player.isFirstToStart) ? PockeyPlayerManager.Instance().player.data.felt : PockeyPlayerManager.Instance().opponent.felt;
            let stickSkinID: string = (!PockeyPlayerManager.Instance().player.isFirstToStart) ? PockeyPlayerManager.Instance().player.data.stick : PockeyPlayerManager.Instance().opponent.stick;
            let pooltableDecalID: string = (!PockeyPlayerManager.Instance().player.isFirstToStart) ? PockeyPlayerManager.Instance().player.data.decal : PockeyPlayerManager.Instance().opponent.decal;

            SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN, [roundVO]);
            TweenMax.delayedCall(4, () => {
                SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [tableFeltID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [stickSkinID]);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [pooltableDecalID]);
            });
        }


        // SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);


    }


    protected initializeOthers(): void {

    }

    protected onAllModuleElementsCreated(): void {
        this.initializeOthers();

        // let dbObject: DatabaseObject = {
        //     userID: PockeySettings.PLAYER_ID,
        //     column: "points",
        //     value: WinStatus.WIN,
        //     type: "winStatus"
        // };
        //
        // DatabaseConnector.updateUserData(dbObject, null);

        PockeyStateMachine.Instance().changeState(PockeyStates.onMainMenu);
        SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_MAIN_MENU);
        SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [Settings.mainBackgroundName, 4]);
        /* //@ts-ignore
         _.forEach(AbstractEntryPoint.scene.meshes, (mesh: any) => {
             mesh.setEnabled(false);
         });

         SignalsManager.DispatchSignal(PockeySignalTypes.ASSIGN_PLAYER, [this.opponent]);
         SignalsManager.DispatchSignal(PockeySignalTypes.ASSIGN_PLAYER, [this.player]);*/
    }

    protected onStartGame(): void {
        SignalsManager.DispatchSignal(SignalsType.CHANGE_BACKGROUND, [PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME, 1]);
        SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);
        SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_MAIN_MENU);
        SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_BALL_RAY_GRAPHICS);
        SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_POOLTABLE);

        if (!Settings.singlePlayer) {
            // this.availableForRestart = false;

            PockeyStateMachine.Instance().changeState(PockeyStates.onSearchForPartner);
            SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_SEARCHING_SCREEN);
            SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_GAME_UI);
            SignalsManager.DispatchSignal(ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION);
        } else {
            // this.setCurrentPlayer(this.player);
            // this.beginPlay();
            // // SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE, [this.player.type, this.opponent.type]);
            // this.player.ballType = "left";
            // this.opponent.ballType = "right";
            //
            // this.updateRoundGraphics();
        }
    }
}
