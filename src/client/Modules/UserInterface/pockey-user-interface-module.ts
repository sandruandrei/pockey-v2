/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 8/8/2018
 */
import {AbstractUserInterfaceModule} from "../../qFramework/AbstractModules/UserInterface/abstract-user-interface-module";
import {PockeyUiMainScreen} from "./Screens/MainScreen/pockey-ui-main-screen";
import {PockeyUiSearchingScreen} from "./Screens/pockey-ui-searching-screen";
import {PockeyUiGameScreen} from "./Screens/GameScreen/pockey-ui-game-screen";
import {RoundCompleteScreen, RoundCompleteType, RoundCompleteVO} from "./Screens/pockey-ui-round-complete-screen";
import {AbstractScreen} from "../../qFramework/AbstractModules/UserInterface/abstract-screen";
import {Settings} from "../../qFramework/Settings";
import {PockeyUiMainScreenMobile} from "./Screens/MainScreen/pockey-ui-main-screen-mobile";
import {SignalsManager} from "../../qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../SignalsModule/pockey-signal-types";
import {SignalsType} from "../../qFramework/Signals/signal-types";
import {PockeyUiOpponentFoundScreen} from "./Screens/pockey-ui-opponent-found-screen";
import {PockeySoundURLS} from "../SoundModule/pockey-sound-names";



        export class PockeyUserInterfaceModule extends AbstractUserInterfaceModule {

            private mainScreen: PockeyUiMainScreen | undefined;
            private searchingScreen: PockeyUiSearchingScreen | undefined;
            private gameScreen: PockeyUiGameScreen | undefined;
            private roundCompleteScreen: RoundCompleteScreen | undefined;
            private opponentFoundScreen: PockeyUiOpponentFoundScreen | undefined;

            private activeRoundScreen: AbstractScreen | undefined;

            /*private playerLifeUnitsArray: Sprite[];
            private oppLifeUnitsArray: Sprite[];

            private playerLifeBar: Sprite;
            private oppLifeBar: Sprite;*/

            constructor() {
                super();
            }

            public createElements(): void {

                if (Settings.isMobile) {
                    this.mainScreen = new PockeyUiMainScreenMobile();

                }
                else {
                    this.mainScreen = new PockeyUiMainScreen();
                }

                this.searchingScreen = new PockeyUiSearchingScreen();
                this.gameScreen = new PockeyUiGameScreen();
                this.roundCompleteScreen = new RoundCompleteScreen();
                this.opponentFoundScreen = new PockeyUiOpponentFoundScreen();
                this.activeRoundScreen = this.opponentFoundScreen;

                // this.matchCompleteScreen = new MatchCompleteScreen();
                // this.winningScreen = new PockeyUiWinningScreen();

                // this.addChild(this.mainScreen);

                // this.addChild(this.gameScreen);
                /*this.playerLifeUnitsArray = [];
                this.oppLifeUnitsArray = [];

                this.playerLifeBar = this.createLifeBar(this.playerLifeUnitsArray);
                this.playerLifeBar.nickname = "playerLifeBar";
                this.playerLifeBar.x = 525;
                this.playerLifeBar.y = 90;
                this.addChild(this.playerLifeBar);


                this.oppLifeBar = this.createLifeBar(this.oppLifeUnitsArray);
                this.oppLifeBar.nickname = "oppLifeBar";
                this.oppLifeBar.x = this.playerLifeBar.x + 655;
                this.oppLifeBar.y = this.playerLifeBar.y;
                this.addChild(this.oppLifeBar);*/


                super.createElements();
            }

            protected registerSignalsHandlers(): void {
                super.registerSignalsHandlers();

                SignalsManager.AddSignalCallback(SignalsType.ALL_MODULES_ELEMENTS_CREATED, this.onShowMainMenu.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_MAIN_MENU, this.onShowMainMenu.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_MAIN_MENU, this.onHideMainMenu.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_GAME_UI, this.onShowGameMenu.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_GAME_UI, this.onHideGameMenu.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_SEARCHING_SCREEN, this.onShowSearchingScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_SEARCHING_SCREEN, this.onHideSearchingScreen.bind(this));
                //
                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_ROUND_COMPLETE_SCREEN, this.onShowRoundScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_ROUND_COMPLETE_SCREEN, this.onHideRoundCompleteScreen.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.SHOW_OPPONENT_FOUND_SCREEN, this.onShowOpponentFoundScreen.bind(this));
                SignalsManager.AddSignalCallback(PockeySignalTypes.HIDE_OPPONENT_FOUND_SCREEN, this.onHideOpponentFoundScreen.bind(this));

                SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_CURRENT_ROUND_SCREEN_TEXT, this.onUpdateCurrentScreenText.bind(this));

            }

            private onHideOpponentFoundScreen():void
            {
                // @ts-ignore
                this.opponentFoundScreen.hide();
            }

            private onHideRoundCompleteScreen():void
            {
                // @ts-ignore
                this.roundCompleteScreen.hide();
            }

            private onUpdateCurrentScreenText(params: any): void {
                // @ts-ignore
                this.activeRoundScreen.updateText(params[0]);
            }

            // private onUpdateOpponentName(name: string): void {
            //     this.opponentFoundScreen.updateOpponentName();
            // }
            //
            // private onChangeOpponentAvatar(avatarPath: string): void {
            //     this.opponentFoundScreen.updateAvatar(avatarPath);
            // }

            private onShowRoundScreen(params:RoundCompleteVO[]): void {
                 console.log("se arata on show winning!");
                this.onHideOpponentFoundScreen();
                this.onHideSearchingScreen();

                this.activeRoundScreen = this.roundCompleteScreen;
                // @ts-ignore
                this.roundCompleteScreen.show(params[0]);
            }

            //
            // private onShowMatchCompleteScreen(): void {
            //     console.log("se arata on show winning!");
            //     this.activeRoundScreen = this.roundCompleteScreen;
            //     this.activeRoundScreen.show();
            // }

            /*private hideActiveRoundScreen(): void {
                console.log("se ascunde winning screen!");

                this.activeRoundScreen.hide();
            }*/

            private onShowOpponentFoundScreen(params:RoundCompleteType[]): void {
                this.activeRoundScreen = this.opponentFoundScreen;

                this.opponentFoundScreen.show(params[0]);
            }

//             private onHideOpponentFoundScreen(): void {
// //                 console.log("intra la onHideOpponentFoundScreen");
//                 this.activeRoundScreen.hide();
//                 // this.
//             }

            private onShowSearchingScreen(): void {
                // @ts-ignore
                this.searchingScreen.setVisibleTrue();
            }

            private onHideSearchingScreen(): void {
                // @ts-ignore
                this.searchingScreen.setVisibleFalse();
                // this.mainScreen.setVisibleFalse();
            }

            private onShowMainMenu(): void {
                this.mainScreen.setVisibleTrue();

                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{soundName: PockeySoundURLS.MAIN_MENU_AMBIANCE}]);
                SignalsManager.DispatchSignal(SignalsType.STOP_SOUND, [{soundName: PockeySoundURLS.IN_GAME_AMBIANCE}]);

                // this.addChild(this.mainScreen);
            }

            private onHideMainMenu(): void {
                // @ts-ignore
                this.mainScreen.setVisibleFalse();
                // this.removeChild(this.mainScreen);
            }

            private onShowGameMenu(): void {
                // @ts-ignore
                this.gameScreen.show();
                // this.addChild(this.gameScreen);
                SignalsManager.DispatchSignal(SignalsType.STOP_SOUND, [{soundName: PockeySoundURLS.MAIN_MENU_AMBIANCE}]);
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                    soundName: PockeySoundURLS.IN_GAME_AMBIANCE,
                    loop: true
                }]);
            }

            private onHideGameMenu(): void {
                // @ts-ignore
                this.gameScreen.hide();
                SignalsManager.DispatchSignal(SignalsType.STOP_SOUND, [{soundName: PockeySoundURLS.IN_GAME_AMBIANCE}]);
                SignalsManager.DispatchSignal(SignalsType.PLAY_SOUND, [{
                    soundName: PockeySoundURLS.MAIN_MENU_AMBIANCE,
                    loop: false
                }]);
                // this.removeChild(this.gameScreen);
            }

            protected onResize(): void {
                super.onResize();

                // if (this.mainScreen)
                //     this.mainScreen.onResize();
                // if (this.searchingScreen)
                //     this.searchingScreen.onResize();
                //
                // if (this.winningScreen)
                //     this.winningScreen.onResize();

            }

            protected handleDesktopLandscape(): void {
                super.handleDesktopLandscape();

                if (this.gameScreen)
                    this.gameScreen.handleDesktopLandscape();
            }

            protected handleMobilePortrait(): void {
                super.handleMobilePortrait();

                if (this.gameScreen)
                    this.gameScreen.onResizeMobilePortrait();
            }

            protected handleMobileLandscape(): void {
                super.handleMobileLandscape();

                if (this.gameScreen)
                    this.gameScreen.onResizeMobileLandscape();
            }

            /*






                        // private onResizeBackground(params: any[]): void {
                        //     let scaleFactor: number = params[0];
                        //
                        //     // let position: Point = params[1] as Point;
                        //     // let rotation: number = params[2];
                        //     //
                        //     // this.Layer.x = position.x;
                        //     // this.Layer.y = position.y;
                        //     //
                        //     // this.Layer.rotation = rotation;
                        //     // this.Layer.scale.x = scaleFactor;
                        //     // this.Layer.scale.y = scaleFactor;
                        // }

                        protected createElements(): void {

                            this.mainScreen = new PockeyUiMainScreen();
                            this.searchingScreen = new PockeyUiSearchingScreen();
                            // this.addChild(this.mainScreen);

                            // this.gameScreen = new PockeyUiGameScreen();
                            // this.addChild(this.gameScreen);
                            /!*this.playerLifeUnitsArray = [];
                            this.oppLifeUnitsArray = [];

                            this.playerLifeBar = this.createLifeBar(this.playerLifeUnitsArray);
                            this.playerLifeBar.nickname = "playerLifeBar";
                            this.playerLifeBar.x = 525;
                            this.playerLifeBar.y = 90;
                            this.addChild(this.playerLifeBar);


                            this.oppLifeBar = this.createLifeBar(this.oppLifeUnitsArray);
                            this.oppLifeBar.nickname = "oppLifeBar";
                            this.oppLifeBar.x = this.playerLifeBar.x + 655;
                            this.oppLifeBar.y = this.playerLifeBar.y;
                            this.addChild(this.oppLifeBar);*!/


                            super.createElements();
                        }


                        */
        }



// "ball-black.png"
// "ball-highlight.png"
// "ball-puck-01.png"
// "ball-puck-02.png"
// "ball-puckInvalid.png"
// "ball-scratch.png"
// "ball-shadow.png"
// "barrier-corner.png"
// "barrier-icon.png"
// "barrier-ballType.png"
// "rightGoal-shine.png"
// "goal_arrowIndicator.png"
// "goalie.png"
// "penalty-droppuck.png"
// "power-bg.png"
// "power-color.png"
// "powerUp_pocketBlock.png"
// "powerUp_speedBuff.png"
// "puck-icon.png"
// "puck-indicator.png"
// "puck_drop.png"
// "roundcomplete.png"
// "table_english-01.png"
// "table_english-reticle.png"
// "table_power-01a.png"
// "table_power-light1.png"
// "table_power-light2.png"
// "table_power-light3.png"
// "table_power-light4.png"
// "ui_icon-arrow.png"
// "ui_icon-tipsReg.png"
// "ui_versus-empty.png"
// "ui_versus-main.png"
// "ui_versus-won.png"
// "vs.png" --------------- used