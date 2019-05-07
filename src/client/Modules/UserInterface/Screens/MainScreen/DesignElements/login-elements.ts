/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 10/30/2018
 */
import {PockeySignalTypes} from "../../../../SignalsModule/pockey-signal-types";
import {SignalsManager} from "../../../../../qFramework/Signals/signals-manager";
import {Settings} from "../../../../../qFramework/Settings";
import {removeCookie, writeCookie} from "../../../../../qFramework/Utils/cookie";
import {
    DatabaseConnector,
    DatabaseObject
} from "../../../../../qFramework/AbstractModules/Connection/database-connector";
import * as _ from "lodash";
// import TweenMax = gsap.TweenMax;
import {TweenMax} from "gsap";
import {PockeyPlayerManager} from "../../../../GameModule/pockey-player-manager";

export class LoginElements {
    private startBtn: HTMLDivElement | undefined;
    private googleSignIn: HTMLDivElement | undefined;
    private facebookSignIn: HTMLDivElement | undefined;
    private signOutBtn: HTMLDivElement | undefined;
    private inputText: HTMLTextAreaElement | undefined;
    private correctText: HTMLDivElement;
    private mainMenuBackButtonHolder: HTMLDivElement;

    constructor() {

        this.correctText = document.getElementById("CorrectText") as HTMLDivElement;
        this.mainMenuBackButtonHolder = document.getElementById("MainMenuBackButtonHolder") as HTMLDivElement;

        this.handleInputText();
        this.handleSignOutButton();
        this.handleStartButton();
        this.handleFacebookButton();
        this.handleGoogleButton();
        this.checkForPlayerSignIn();

        SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
    }

    private onInventoryItemUpdated(): void {
        if (PockeyPlayerManager.Instance().player.data.nickname != "" && (this.inputText as HTMLTextAreaElement).value != PockeyPlayerManager.Instance().player.data.nickname) {
            (this.inputText as HTMLTextAreaElement).value = PockeyPlayerManager.Instance().player.data.nickname;
        }
    }

    private onPlayerSignedIn(): void {
        this.hideSignInButtons();
        if ((this.inputText as HTMLTextAreaElement).value != PockeyPlayerManager.Instance().player.data.nickname && PockeyPlayerManager.Instance().player.data.nickname != "") {
            (this.inputText as HTMLTextAreaElement).value = PockeyPlayerManager.Instance().player.data.nickname;
        }
    }

    /*private onPlayerSignedOut(): void {
        this.hideSignInButtons();
        if(this.inputText.value != PockeySettings.PLAYER_NICKNAME)
        {
            this.inputText.value = PockeySettings.PLAYER_NICKNAME;
        }
    }*/

    private handleInputText(): void {
        this.inputText = document.getElementById("InputText") as HTMLTextAreaElement;
        if (PockeyPlayerManager.Instance().player && PockeyPlayerManager.Instance().player.data.nickname) {
            this.inputText.value = PockeyPlayerManager.Instance().player.data.nickname;
        }
        this.inputText.addEventListener('input', this.typeHandler.bind(this));
        this.inputText.addEventListener('propertychange', this.typeHandler.bind(this));// for IE8
        this.inputText.addEventListener('change', this.typeHandler.bind(this)) // fallback for FireFox
    }

    private typeHandler(): void {
        // console.log(this.inputText.value);
        if ((this.inputText as HTMLTextAreaElement).value != "") {
            this.correctText.style.visibility = "hidden";
        }
    }

    private handleSignOutButton(): void {
        this.signOutBtn = document.getElementById("LogoutButton") as HTMLDivElement;

        this.signOutBtn.onclick = () => {
            console.log("intra la click");
            let pockeyEvent = new Event('PockeyGoogleSignOutEvent');
            (this.signOutBtn as HTMLDivElement).dispatchEvent(pockeyEvent);
            PockeyPlayerManager.Instance().player.data.user_id = "guest";
            removeCookie("PockeyID");
            // removeCookie("PockeyFacebookID");
            removeCookie("PockeyUserColorId");
            removeCookie("PockeyUserAvatarId");

            this.showSignInButtons();

            /*if(this.inputText.value != PockeySettings.PLAYER_NICKNAME)
            {

            }*/
            SignalsManager.DispatchSignal(PockeySignalTypes.PLAYER_SIGNED_OUT);
        };

        /* this.signOutBtn.addEventListener('PockeyGoogleSignedOutEvent', (e: CustomEvent) => {
             this.showSignInButtons();
         });

         this.signOutBtn.addEventListener('PockeyFacebookSignedOutEvent', (e: CustomEvent) => {
             this.showSignInButtons();
         });*/

    }

    private showSignInButtons(): void {
        (this.googleSignIn as HTMLDivElement).style.display = "block";
        (this.facebookSignIn as HTMLDivElement).style.display = "block";
        (this.signOutBtn as HTMLDivElement).style.display = "none";

        (document.getElementById("MainMenuPlayerRankingsHolder") as HTMLDivElement).style.display = "none";

    }

    private hideSignInButtons(): void {
        (this.googleSignIn as HTMLDivElement).style.display = "none";
        (this.facebookSignIn as HTMLDivElement).style.display = "none";
        (this.signOutBtn as HTMLDivElement).style.display = "block";
        (document.getElementById("MainMenuPlayerRankingsHolder") as HTMLDivElement).style.display = "flex";
    }

    private handleStartButton(): void {
        this.startBtn = document.getElementById("StartGameButtonHolder") as HTMLDivElement;
        this.startBtn.onclick = () => {
            if ((this.inputText as HTMLTextAreaElement).value == "") {
                this.correctText.style.visibility = "visible";

                TweenMax.killTweensOf(this.inputText as HTMLTextAreaElement);
                (this.inputText as HTMLTextAreaElement).style.borderColor = "";
                TweenMax.to((this.inputText as HTMLTextAreaElement), .2, {
                    css: {borderColor: "#e92c5a"},
                    yoyo: true,
                    repeat: 3
                });
            } else {

                PockeyPlayerManager.Instance().player.data.nickname = (this.inputText as HTMLTextAreaElement).value;
                DatabaseConnector.updateServerPlayer(PockeyPlayerManager.Instance().player.data);

                let nicknameDb: DatabaseObject = {
                    userID: PockeyPlayerManager.Instance().player.data.user_id,
                    column: "nickname",
                    value: PockeyPlayerManager.Instance().player.data.nickname
                };
                if (Settings.playerSignedIn) {
                    DatabaseConnector.updatePlayerDatabase(nicknameDb);
                } else {
                    writeCookie('PockeyNickname', (this.inputText as HTMLTextAreaElement).value, 30);
                }

                SignalsManager.DispatchSignal(PockeySignalTypes.START_GAME);
                this.mainMenuBackButtonHolder.style.display = "none";

            }
        };
    }


    private handleGoogleButton(): void {
        this.googleSignIn = document.getElementById("GoogleSignInButtonHolder") as HTMLDivElement;

        this.googleSignIn.addEventListener('PockeyGoogleSignInEvent', (e: Event) => {
            const detail: any = (<CustomEvent>e).detail;
            // e.target matches elem
            console.log("%c login handler: google logged in", "background:pink");
            writeCookie('PockeyID', detail.toString(), 30);

            // this.hideSignInButtons();

            SignalsManager.DispatchSignal(PockeySignalTypes.GOOGLE_SIGN_IN);

            // this.googleSign
        }, false);
    }

    private handleFacebookButton(): void {
        this.facebookSignIn = document.getElementById("FacebookSignInButtonHolder") as HTMLDivElement;

        this.facebookSignIn.addEventListener("PockeyFacebookSignedIn", (e: Event) => {
            const detail: any = (<CustomEvent>e).detail;

            if (!_.isNull(detail["email"]) && !_.isUndefined(detail["email"])) {
                writeCookie('PockeyID', detail["email"].toString(), 30);
            }

            console.log("%c login handler: google logged in", "background:pink");

            /*if (!_.isNull(e.detail["id"]) && !_.isUndefined(e.detail["id"])) {
                writeCookie('PockeyFacebookID', e.detail["id"].toString(), 30);
            }*/
            // console.log("s-a semnat cu fb-ul: " + e.detail);

            // writeCookie('PockeyEmail', e.detail.toString(), 30);


            SignalsManager.DispatchSignal(PockeySignalTypes.FACEBOOK_SIGN_IN);

        });
    }

    private checkForPlayerSignIn(): void {
        if (Settings.playerSignedIn) {
            this.hideSignInButtons();
        }
    }
}