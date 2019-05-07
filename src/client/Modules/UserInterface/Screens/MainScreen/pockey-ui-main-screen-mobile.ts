import {PockeyInventoryMenu} from "./DesignElements/inventory-menu";
import {PlayGameMenu} from "./DesignElements/play-game-menu";
import {PockeyUiMainScreen} from "./pockey-ui-main-screen";
import {Settings} from "../../../../qFramework/Settings";
import * as _ from "lodash";


export class PockeyUiMainScreenMobile extends PockeyUiMainScreen {

            protected rightSide: HTMLDivElement = new HTMLDivElement();
            protected mainButtonsHolder: HTMLDivElement = new HTMLDivElement();
            protected backButton: HTMLDivElement = new HTMLDivElement();
            protected backBg: HTMLDivElement = new HTMLDivElement();
            protected menuTitle: HTMLDivElement = new HTMLDivElement();
            protected menuLogo: HTMLDivElement = new HTMLDivElement();
            // protected mainMenuBackground: HTMLDivElement;

            protected defineElements(): void {

                this.rightSide = document.getElementById("RightSideBackground") as HTMLDivElement;
                this.mainButtonsHolder = document.getElementById("MainButtonsHolder") as HTMLDivElement;
                this.backButton = document.getElementById("BackToMainMenuButton") as HTMLDivElement;
                this.backBg = document.getElementById("MainMenuBg") as HTMLDivElement;
                this.menuTitle = document.getElementById("MenuTitleSpan") as HTMLDivElement;
                this.menuLogo = document.getElementById("MenuLogo") as HTMLDivElement;

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
                            // this.setMainButtonStyleOnClick(element);
                            // alert(element.id + " clicked");
                            switch (element.id) {
                                case this.playGameButton.id: {
                                    this.menuTitle.innerText = "PLAY GAME";
                                    this.menuLogo.style.background = "center / contain no-repeat url(" + Settings.desktopAssetsPath + "/Images/start_game_icon.svg" + ")";
                                    this.showPlayGameMenu();
                                    break;
                                }

                                case this.inventoryButton.id: {
                                    this.menuTitle.innerText = "INVENTORY";
                                    this.menuLogo.style.background = "center / contain no-repeat url(" + Settings.desktopAssetsPath + "/Images/overlay_inventory.svg" + ")";

                                    this.showInventoryMenu();
                                    break;
                                }

                                case this.inviteFriendButton.id: {
                                    this.menuTitle.innerText = "INVITE FRIENDS";
                                    this.menuLogo.style.background = "center / contain no-repeat url(" + Settings.desktopAssetsPath + "/Images/overlay_invitefriend.svg" + ")";
                                    // this.menuLogo.style.background = "blue";
                                    this.showInviteMenu();
                                    break;
                                }

                                case this.leaderboardButton.id: {
                                    this.menuTitle.innerText = "LEADERBOARD";
                                    this.menuLogo.style.background = "center / contain no-repeat url(" + Settings.desktopAssetsPath + "/Images/title_crown.svg" + ")";
                                    // this.menuLogo.style.background = "green";
                                    this.showLeaderboardMenu();
                                    break;
                                }

                            }

                            _.forEach(this.mainMenuButtons, (otherElement: HTMLDivElement) => {
                                if (otherElement != element) {
                                    otherElement.setAttribute("clicked", "false");
                                    // this.resetMainButtonStyleOnClick(otherElement);
                                }
                            });
                        }
                    }
                );

                this.backButton.onclick = () => {
                    this.hideElement(this.rightSide);
                    this.hideElement(this.backBg);
                    this.showElement(this.mainButtonsHolder, "block");
                }
            }


            protected showElement(element: HTMLDivElement, displayType?: string): void {

                element.style.display = (!displayType) ? "flex" : displayType;
            }

            protected showPlayGameMenu(): void {
                console.log("intra la show play");
                this.showElement(this.backBg);
                this.showElement(this.rightSide);
                this.hideElement(this.mainButtonsHolder);

                super.showPlayGameMenu();
                // this.showElement(this.tutorialAndShareButtonsMenu);
            }

            protected showInventoryMenu(): void {
                this.showElement(this.backBg);
                console.log("intra la show inventory");
                this.showElement(this.rightSide);
                this.hideElement(this.mainButtonsHolder);

                super.showInventoryMenu();
            }

            protected showLeaderboardMenu(): void {
                this.showElement(this.backBg);
                console.log("intra la show leaderboard");
                this.showElement(this.rightSide);
                this.hideElement(this.mainButtonsHolder);

                super.showLeaderboardMenu();
            }

            protected showInviteMenu(): void {
                this.showElement(this.backBg);
                console.log("intra la show invite");
                this.showElement(this.rightSide);
                this.hideElement(this.mainButtonsHolder);

                super.showInviteMenu();
            }

            public setVisibleFalse(): void {
                this.mainMenuElementsHolder.style.display = "none";
                this.backBg.style.display = "none";
            }

            public setVisibleTrue(): void {
                this.mainMenuElementsHolder.style.display = "block";
                this.backBg.style.display = "flex";

            }

        }