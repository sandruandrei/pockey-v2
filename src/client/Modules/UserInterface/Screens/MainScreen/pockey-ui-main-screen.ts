import {PlayGameMenu} from "./DesignElements/play-game-menu";
import {PockeyInventoryMenu} from "./DesignElements/inventory-menu";
import * as _ from "lodash";


export class PockeyUiMainScreen   {

            protected mainMenuElementsHolder: HTMLDivElement;// = new HTMLDivElement();

            protected playGameButton: HTMLDivElement;// = new HTMLDivElement();
            protected inventoryButton: HTMLDivElement;// = new HTMLDivElement();
            protected inviteFriendButton: HTMLDivElement;// = new HTMLDivElement();
            protected leaderboardButton: HTMLDivElement;// = new HTMLDivElement();
            protected mainMenuButtons: HTMLDivElement[] = [];

            protected loginMenu: HTMLDivElement;// = new HTMLDivElement();
            protected leftSideLoginMenu: HTMLDivElement;// = new HTMLDivElement();
            protected leaderboardMenu: HTMLDivElement;// = new HTMLDivElement();
            protected inviteMenu: HTMLDivElement;// = new HTMLDivElement();
            protected tutorialAndShareButtonsMenu: HTMLDivElement;// = new HTMLDivElement();
            protected inventoryScreen: HTMLDivElement;// = new HTMLDivElement();

            protected playGameMenu: PlayGameMenu | undefined;
            protected inventoryMenu: PockeyInventoryMenu | undefined;

            protected pockeyHelmetAndStick:HTMLDivElement;// = new HTMLDivElement();

            constructor() {
                this.defineElements();
            }

            protected defineElements(): void {
                ////////////
                this.loginMenu = document.getElementById("LoginScreen") as HTMLDivElement;
                this.playGameMenu = new PlayGameMenu();
//                 this.hideElement(this.loginMenu);

                this.inventoryMenu = new PockeyInventoryMenu();
                // jQuery(this.loginMenu.id).hide();

                this.leftSideLoginMenu = document.getElementById("LeftSide") as HTMLDivElement;
                this.leaderboardMenu = document.getElementById("LeaderBoardScreen") as HTMLDivElement;
                this.hideElement(this.leaderboardMenu);

                this.inviteMenu = document.getElementById("InviteElementsHolder") as HTMLDivElement;
                this.hideElement(this.inviteMenu);

                this.tutorialAndShareButtonsMenu = document.getElementById("TutorialAndShareButtonsHolder") as HTMLDivElement;
                // this.hideElement(this.tutorialAndShareButtonsMenu);

                this.inventoryScreen = document.getElementById("InventoryScreen") as HTMLDivElement;
                this.hideElement(this.inventoryScreen);

                this.mainMenuElementsHolder = document.getElementById("MainMenuElementsHolder") as HTMLDivElement;

                /////////////////
                this.mainMenuButtons = [];

                this.playGameButton = document.getElementById("PlayGameButton") as HTMLDivElement;
                this.mainMenuButtons.push(this.playGameButton);

                this.inventoryButton = document.getElementById("InventoryButton") as HTMLDivElement;
                this.mainMenuButtons.push(this.inventoryButton);

                this.inviteFriendButton = document.getElementById("InviteFriendsButton") as HTMLDivElement;
                this.mainMenuButtons.push(this.inviteFriendButton);

                this.leaderboardButton = document.getElementById("LeaderboardButton") as HTMLDivElement;
                this.mainMenuButtons.push(this.leaderboardButton);


                _.forEach(this.mainMenuButtons, (element: HTMLDivElement) => {
                        element.setAttribute('clicked', 'false');
                        element.onclick = () => {
                            element.setAttribute("clicked", "true");
                            this.setMainButtonStyleOnClick(element);

                            switch (element.id) {
                                case this.playGameButton.id: {

                                    this.showPlayGameMenu();
                                    break;
                                }

                                case this.inventoryButton.id: {
                                    this.showInventoryMenu();
                                    break;

                                }

                                case this.inviteFriendButton.id: {
                                    this.showInviteMenu();
                                    break;

                                }

                                case this.leaderboardButton.id: {
                                    this.showLeaderboardMenu();
                                    break;

                                }

                            }

                            _.forEach(this.mainMenuButtons, (otherElement: HTMLDivElement) => {
                                if (otherElement != element) {
                                    otherElement.setAttribute("clicked", "false");
                                    this.resetMainButtonStyleOnClick(otherElement);
                                }
                            });
                        }
                    }
                );

                this.pockeyHelmetAndStick = document.getElementById("PockeyHatAndStick") as HTMLDivElement;

                // this.showInventoryMenu();
                // SignalsManager.DispatchSignal(PockeySignalTypes.SHOW_POOLTABLE);

            }

            protected showElement(element: HTMLDivElement): void {
                element.style.display = "flex";
            }

            protected hideElement(element: HTMLDivElement): void {
                element.style.display = "none";

            }

            protected showPlayGameMenu(): void {
                console.log("intra la show play");
                this.showElement(this.loginMenu);
                this.showElement(this.tutorialAndShareButtonsMenu);
                this.hideElement(this.inventoryScreen);
                this.hideElement(this.leaderboardMenu);
                this.hideElement(this.inviteMenu);
                // this.showElement(this.tutorialAndShareButtonsMenu);
            }

            protected showInventoryMenu(): void {
                console.log("intra la show inventory");

                this.hideElement(this.loginMenu);
                this.hideElement(this.leaderboardMenu);
                this.showElement(this.inventoryScreen);
            }

            protected showLeaderboardMenu(): void {
                console.log("intra la show leaderboard");

                this.hideElement(this.loginMenu);
                this.hideElement(this.inventoryScreen);
                this.showElement(this.leaderboardMenu);
            }

            protected showInviteMenu(): void {
                console.log("intra la show invite");

                this.showElement(this.loginMenu);
                this.showElement(this.inviteMenu);
                this.hideElement(this.tutorialAndShareButtonsMenu);
                this.hideElement(this.leaderboardMenu);
                this.hideElement(this.inventoryScreen);
            }

            protected setMainButtonStyleOnClick(element: HTMLDivElement) {
                element.classList.add('simpleBtnOnClick');

                let arrowDiv = element.querySelector('.simpleBtnArrow') as HTMLDivElement;
                arrowDiv.classList.add('simpleBtnArrowOnClick');

                let btnHighlight = element.querySelector('.simpleBtnHighlight') as HTMLDivElement;
                btnHighlight.classList.add('simpleBtnHighlightOnClick');
            }

            protected resetMainButtonStyleOnClick(element: HTMLDivElement) {
                element.classList.remove('simpleBtnOnClick');

                let arrowDiv = element.querySelector('.simpleBtnArrow') as HTMLDivElement;
                arrowDiv.classList.remove('simpleBtnArrowOnClick');

                let btnHighlight = element.querySelector('.simpleBtnHighlight') as HTMLDivElement;
                btnHighlight.classList.remove('simpleBtnHighlightOnClick');
            }

            public setVisibleTrue(): void {
                this.mainMenuElementsHolder.style.display = "block";
                this.pockeyHelmetAndStick.style.display = "flex";
            }

            public setVisibleFalse(): void {
                this.mainMenuElementsHolder.style.display = "none";
                this.pockeyHelmetAndStick.style.display = "none";
            }

        }