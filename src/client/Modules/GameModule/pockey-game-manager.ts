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
import {PockeyStateMachine, PockeyStates} from "../StateMachine/pockey-state-machine";
import {ConnectionSignalsType, SignalsType} from "../../qFramework/Signals/signal-types";
import {PockeySettings} from "../../pockey-settings";
import {BallType, GameData} from "../../../common/pockey-game-settings";
import {PockeyPlayerManager} from "./pockey-player-manager";
import {PoolTableManager} from "./GameObjects/pool-table-manager";

export class PockeyGameManager {

    protected pooltableManager: PoolTableManager;

    constructor(pooltableManager: PoolTableManager) {
        this.registerSignals();

        this.pooltableManager = pooltableManager;
    }

    protected registerSignals(): void {
        SignalsManager.AddSignalCallback(SignalsType.ALL_MODULES_ELEMENTS_CREATED, this.onAllModuleElementsCreated.bind(this));

        SignalsManager.AddSignalCallback(PockeySignalTypes.START_GAME, this.onStartGame.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.BALL_IN_POCKET, this.onBallInPocket.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.END_TURN, this.onEndTurn.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_PLAYER_STATE, this.onChangePlayerState.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.WHITE_BALL_REPOSITIONED, this.onWhiteBallRepositioned.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.OWN_BALL_TOUCHED_FIRST, this.onOwnBallTouchedFirst.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.SHOOT_BALL, this.onShoot.bind(this));

        // SignalsManager.AddSignalCallback(SignalsType.BEGIN_ROUND, this.startOnRearrange.bind(this));

        SignalsManager.AddSignalCallback(ConnectionSignalsType.GAME_SETUP_RECEIVED, this.onGameSetupReceived.bind(this));
    }

    protected onShoot(): void {
        PockeyPlayerManager.Instance().player.announceShot();
    }

    protected onOwnBallTouchedFirst(): void {
        PockeyPlayerManager.Instance().player.onOwnBallFault();
    }

    protected onBallInPocket(ballType: BallType[]): void {
        PockeyPlayerManager.Instance().player.onBallInPocket(ballType[0]);
    }

    protected onEndTurn(): void {
        PockeyPlayerManager.Instance().player.onEndTurn();
        PockeyStateMachine.Instance().changeState(PockeyStates.onEndTurn);
    }

    private onWhiteBallRepositioned(): void {
        // this.selectPlayer();
        console.log("%c GameManager -> White Ball Repositioned", "color: #00bcd4");

        // PockeyStateMachine.Instance().changeState(PockeyStates.onRearrangeStick);
        this.startOnRearrange();
    }

    protected onChangePlayerState(state: PockeyStates[]): void {
        SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN);

        if (state[0] == PockeyStates.onRepositionWhiteBall) {
            this.startOnReposition();
        } else if (state[0] == PockeyStates.onRearrangeStick) {
            this.startOnRearrange();
        } else if (state[0] == PockeyStates.onWatch) {
            PockeyPlayerManager.Instance().currentPlayerSocketID = PockeyPlayerManager.Instance().opponent.socketID;
            PockeyStateMachine.Instance().changeState(PockeyStates.onWatch);
            this.pooltableManager.addShadows();
        }
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

    protected onGameSetupReceived(data: GameData[]): void {

        let roundNumber: number = data[0].roundNumber;
        // SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);

        switch (roundNumber) {
            case (1): {
                this.prepareFirstRound();
                break;
            }
            // case (2): {
            //     this.prepareSecondRound();
            //     break;
            // }
            // case (3): {
            //     this.prepareThirdRound();
            //     break;
            // }
        }
    }

    protected prepareFirstRound(): void {
        console.log("on prepare first round");
        PockeyStateMachine.Instance().changeState(PockeyStates.onPrepareRoundOne);

        this.updateTableElements();
        this.updateUIElements();
    }

    protected updateUIElements(): void {
        SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE);
        SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_SEARCHING_SCREEN);
        SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);
        SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_OPPONENT_FOUND_SCREEN);
        SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_GAME_UI);

        let tableFeltID: string = (PockeyPlayerManager.Instance().player.isFirstToStart) ? PockeyPlayerManager.Instance().player.data.felt : PockeyPlayerManager.Instance().opponent.felt;

        SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [tableFeltID]);
    }

    protected updateTableElements(): void {
        /*
        *  SignalsManager.DispatchSignal(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN);

                SignalsManager.DispatchSignal(PockeySignalTypes.SET_SIDES_TYPE);

                console.log("table felt ce plm: " + this.currentTableFeltID);
                SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [this.currentTableFeltID]);
                //////////////////////////////
                SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_GAME_UI);*/
        if (PockeyPlayerManager.Instance().player.isFirstToStart) {
            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [PockeyPlayerManager.Instance().player.data.stick]);
            SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [PockeyPlayerManager.Instance().player.data.decal]);
            SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [PockeyPlayerManager.Instance().player.data.felt]);
        } else {
            SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [PockeyPlayerManager.Instance().opponent.stick]);
            SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [PockeyPlayerManager.Instance().opponent.decal]);
            SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [PockeyPlayerManager.Instance().opponent.felt]);
        }
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
