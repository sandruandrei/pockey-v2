/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 10/29/2018
 */
import {TutorialMenu} from "./tutorial-menu";
import {PlayerAvatarCustomizer} from "./player-avatar-customizer";
import {PlayerColorCustomizer} from "./player-color-customizer";
import {LoginElements} from "./login-elements";


export class PlayGameMenu {

    /*private playerColorCustomizer: PlayerColorCustomizer;
    private playerAvatarCustomizer: PlayerAvatarCustomizer;
    private loginElements: LoginElements;
    private tutorialMenu: TutorialMenu;*/

    constructor() {
        /*this.loginElements = new LoginElements();
        this.playerColorCustomizer = new PlayerColorCustomizer();
        this.playerAvatarCustomizer = new PlayerAvatarCustomizer();
        this.tutorialMenu = new TutorialMenu();*/


        new LoginElements();
        new PlayerColorCustomizer();
        new PlayerAvatarCustomizer();
        new TutorialMenu();
    }
}