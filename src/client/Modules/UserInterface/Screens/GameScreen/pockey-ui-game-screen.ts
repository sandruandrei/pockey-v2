import {PockeyUserGameGraphics} from "./DesignElements/pockey-user-game-graphics";
import {SignalsManager} from "../../../../qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../../../SignalsModule/pockey-signal-types";
import {PockeySettings} from "../../../../pockey-settings";
import * as _ from "lodash";
import {Settings} from "../../../../qFramework/Settings";
import {TweenMax} from 'gsap';
import {Player} from "../../../../../common/player";
import {PockeyPlayerManager} from "../../../GameModule/pockey-player-manager";
import {BallType} from "../../../../../common/pockey-game-settings";
import {PockeyPlayerData} from "../../../../../common/pockey-player-data";

export interface PlayerGraphicsInterface {
    data?: PockeyPlayerData,
    graphics?: PockeyUserGameGraphics,
    versusGraphics?: any
}

export class PockeyUiGameScreen {

    private leftGameGraphics: PockeyUserGameGraphics | undefined;
    private rightGameGraphics: PockeyUserGameGraphics | undefined;
    // private playerGameGraphics: PockeyUserGameGraphics;
    // private opponentGameGraphics: PockeyUserGameGraphics;


    // private multilineText: MultiStyleText;
    private tipText: HTMLDivElement;

    // private graphicsContainer: Container;
    // private tipTextWidth: number = 934;

    // private poolTableScaleFactor: number = 1;


    // private textFontSize: number;


    private scoreBoard: HTMLDivElement;
    private initialBoardHeight: number;
    private initialBoardWidth: number;

    private currentText: string = "";

    private playerGraphicsInterface: PlayerGraphicsInterface;
    private opponentGraphicsInterface: PlayerGraphicsInterface;

    // private isThirdRound:boolean = false;

    constructor() {
        // super();
        this.scoreBoard = document.getElementById("ScoreBoard") as HTMLDivElement;
        this.scoreBoard.style.visibility = "hidden";
        this.scoreBoard.style.display = "flex";
        this.initialBoardWidth = this.scoreBoard.offsetWidth;
        this.initialBoardHeight = this.scoreBoard.offsetHeight;
        console.log("la score board: " + this.initialBoardWidth, this.initialBoardHeight);
        console.log("la score board2: " + this.scoreBoard.clientWidth, this.scoreBoard.clientHeight);
        TweenMax.delayedCall(0.1, this.hideScoreBoard.bind(this));
        this.subscribeToSignals();
        this.defineTextStyles();
        this.addElements();

        this.playerGraphicsInterface = {};
        this.opponentGraphicsInterface = {};
        // this.definePlayersInterface();
        // this.playerGraphicsInterface.player =
        // this.playerGameGraphics = new PockeyUserGameGraphics("left");
        // this.opponentGameGraphics = new PockeyUserGameGraphics("right");
    }

    // @ts-ignore
    private onDefinePlayerInterface(params: Player[]): void {
        // console.log(params);
        /*if (params[0].type == BallType.PockeyPlayerData) {
            this.playerGraphicsInterface.player = params[0];
            // this.opponentGraphicsInterface.player = params[1];
            console.log("playerGraphicsInterface: " + this.playerGraphicsInterface);
        } else {
            this.opponentGraphicsInterface.player = params[0];
            // this.playerGraphicsInterface.player = params[1];
            console.log("opponentGraphicsInterface: " + this.opponentGraphicsInterface);
        }*/
    }

    private hideScoreBoard(): void {
        this.scoreBoard.style.display = "none";
        this.scoreBoard.style.visibility = "visible";
        console.log("la score board3: " + this.initialBoardWidth, this.initialBoardHeight);
        console.log("la score board4: " + this.scoreBoard.clientWidth, this.scoreBoard.clientHeight);
    }

    public show(): void {
        // console.log("player: " + this.playerGraphicsInterface.player);
        // console.log("opponent: " + this.opponentGraphicsInterface.player);
        this.scoreBoard.style.display = "flex";
    }

    public hide(): void {
        this.tipText.innerText = "";
        this.scoreBoard.style.display = "none";
    }

    private subscribeToSignals(): void {
        SignalsManager.AddSignalCallback(PockeySignalTypes.ASSIGN_PLAYER, this.onDefinePlayerInterface.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.SET_SIDES_TYPE, this.onSetSides.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_GAME_SCREEN, this.onReset.bind(this));

        SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_SCORE, this.onUpdateScore.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_OPPONENT_SCORE, this.onUpdateOpponentScore.bind(this));

        SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_CURRENT_PLAYER_TIMER, this.onUpdateCurrentPlayerTimer.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_UI_TEXT, this.onUpdateUIText.bind(this));

        SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_MATCH_CIRCLES, this.onUpdateMatchCircles.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, this.onResizeBackground.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.RESET_POOLTABLE, this.onResetPooltable.bind(this));


        // SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_PLAYER_NAME, this.onUpdatePlayerName.bind(this));

        // SignalsManager.AddSignalCallback(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, this.onPoolTableResize.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_PLAYER_COLOR, this.onChangePlayerColor.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_PLAYER_AVATAR, this.onChangePlayerAvatar.bind(this));

        // SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_OPPONENT_NAME, this.onUpdateOpponentName.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_OPPONENT_SCORE, this.onUpdateOpponentScore.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_OPPONENT_COLOR, this.onChangeOpponentColor.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_OPPONENT_AVATAR, this.onChangeOpponentAvatar.bind(this));

        // SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, newPos, this.levelManager.poolTable.rotation]);
        // SignalsManager.AddSignalCallback(PockeySignalTypes.UPDATE_OPPONENT_NAME, this.onUpdateOpponentName.bind(this));
        // SignalsManager.AddSignalCallback(PockeySignalTypes.CHANGE_OPPONENT_COLOR, this.onChangeOpponentColor.bind(this));
    }

    /* private onResetPooltable(params:boolean[]):void
     {
         this.isThirdRound = params[0];

         if()
         {
             // this.playerGraphicsInterface.OtherPooltableElements.hideLives();
             // this.opponentGraphicsInterface.OtherPooltableElements.hideLives();
             this.playerGraphicsInterface.OtherPooltableElements.hideLives();//this.playerGraphicsInterface.player.score, this.isThirdRound);
             this.opponentGraphicsInterface.OtherPooltableElements.hideLives();//this.opponentGraphicsInterface.player.score, this.isThirdRound);
         }
     }*/

    private onUpdateMatchCircles() {

        // this.playerGraphicsInterface.OtherPooltableElements.updateMatchCircles(this.playerGraphicsInterface.player.roundsWon);
        // this.opponentGraphicsInterface.OtherPooltableElements.updateMatchCircles(this.opponentGraphicsInterface.player.roundsWon);

    }

    private onUpdateUIText(params: any[]) {
        let text: string = params[0];

        if (this.currentText == text) {
            return;
        }

        this.currentText = text;

        text = text.replace("{opponent}", PockeySettings.OPPONENT_NICKNAME);
        // let multistyleUsed:boolean = false;

        // let warningClassStyle:
        if (_.includes(text, "#warning#")) {
            while (this.tipText.firstChild) {
                this.tipText.removeChild(this.tipText.firstChild);
            }

            let tagArray: string[] = text.split("#warning#");

            _.forEach(tagArray, (divText: string, counter: number) => {
                if (divText.length > 0) {
                    let paragraph: HTMLParagraphElement = document.createElement("span") as HTMLParagraphElement;
                    paragraph.innerText = divText;
                    if (counter == 1) {
                        paragraph.innerText = " " + divText + " ";
                        paragraph.classList.add('warning');
                    } else {
                        paragraph.classList.add('normalSpan');
                    }

                    this.tipText.append(paragraph);
                }
            });

            return;
        }

        if (_.includes(text, "#opponent#")) {
            while (this.tipText.firstChild) {
                this.tipText.removeChild(this.tipText.firstChild);
            }

            let tagArray: string[] = text.split("#opponent#");

            _.forEach(tagArray, (divText: string, counter: number) => {
                if (divText.length > 0) {
                    let paragraph: HTMLParagraphElement = document.createElement("span") as HTMLParagraphElement;
                    paragraph.innerText = divText;
                    if (counter == 1) {
                        paragraph.innerText = " " + divText + " ";
                        paragraph.classList.add('opponent');
                        paragraph.style.color = '#' + ('00000' + (PockeySettings.OPPONENT_COLOR | 0).toString(16)).substr(-6);
                    } else {
                        paragraph.classList.add('normalSpan');
                    }

                    this.tipText.append(paragraph);
                }
            });

            return;
        }

        // console.log("intra aicisha");

        this.tipText.innerText = text;
        // if(multistyleUsed)
        // {
        //
        // }

        //     text = text.replace("{opponent}", PockeySettings.OPPONENT_NICKNAME);
        //
        // if (_.includes(text, "#opponent#"))
        //     text = text.replace("#opponent#", "<p class='opponent'>");
        //
        // if (_.includes(text, "*opponent*"))
        //     text = text.replace("*opponent*", "</p>");
        //
        // if (_.includes(text, "#warning#"))
        //     text = text.replace("#warning#", "<p class='warning'>")
        //
        // if (_.includes(text, "*warning*"))
        //     text = text.replace("*warning*", "</p>");

        // console.log("se inlocuieste textul: " + PockeySettings.OPPONENT_NICKNAME);
        // if (text != this.tipText.text) {
        // let intext = this.tipText.innerText.toUpperCase();
        // let newText = text.toUpperCase();
        // if(this.tipText.innerText.toUpperCase() == text.toUpperCase())
        // {
        //     console.log("sunt la fel")
        //     return;
        // }
        // else
        // {
        //     console.log("nu-s la fel fmm");
        //     this.tipText.innerText = text;
        // }

        // if (text != this.tipText.innerText) {
        //     // console.log("text: " + text);
        //     // console.log("innerText: " + text);
        //     this.tipText.innerText = text
        // }
        //     /* this.multilineText.text = text;
        //      if (!Settings.isMobile)
        //          this.multilineText.x = -this.multilineText.width;
        //      else {
        //          this.multilineText.x = -this.multilineText.width / 2;
        //      }*/
        //
        // }
    }

    // @ts-ignore
    private onUpdateCurrentPlayerTimer(params: any[]) {
        // let time: string = params[0];
        // let playerType: BallType = params[1];
        // let animateText: boolean = params[2];
        //
        // if (this.playerGraphicsInterface.player.type == playerType) {
        //     this.playerGraphicsInterface.OtherPooltableElements.updateTimer(time);
        //     this.opponentGraphicsInterface.OtherPooltableElements.resetTimer();
        //     // this.leftGameGraphics.setTimerColor(tintColor);
        //     if (animateText)
        //         this.playerGraphicsInterface.OtherPooltableElements.animateTimer();// = this.leftGameGraphics;
        //     // this.opponentGameGraphics = this.rightGameGraphics;
        // } else {
        //     this.opponentGraphicsInterface.OtherPooltableElements.updateTimer(time);
        //     this.playerGraphicsInterface.OtherPooltableElements.resetTimer();
        //
        //     if (animateText)
        //         this.opponentGraphicsInterface.OtherPooltableElements.animateTimer();
        //     // this.playerGameGraphics = this.rightGameGraphics;
        //     // this.opponentGameGraphics = this.leftGameGraphics;
        // }

    }

    private onResizeBackground(): void {

        // if (this.backgrounds[PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME]) {
        // this.poolTableScaleFactor = params[0];
        // let position: Point = params[1] as Point;
        // let rotation: number = params[2];
    }

    private onReset(): void {
        this.leftGameGraphics.reset();
        this.rightGameGraphics.reset();
    }

    private onSetSides() {

        // let leftSideColor: number;
        // let rightSideColor: number;
        // this.playerGraphicsInterface = {};
        // this.opponentGraphicsInterface = {};
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

        // if (this.playerGraphicsInterface.player.ballType == 'left') {
        //     this.playerGraphicsInterface.OtherPooltableElements = this.leftGameGraphics;
        //     this.opponentGraphicsInterface.OtherPooltableElements = this.rightGameGraphics;
        // } else {
        //     this.playerGraphicsInterface.OtherPooltableElements = this.rightGameGraphics;
        //     this.opponentGraphicsInterface.OtherPooltableElements = this.leftGameGraphics;
        // }
        //
        // this.playerGraphicsInterface.OtherPooltableElements.updateUsername(this.playerGraphicsInterface.player.nickname);
        // this.playerGraphicsInterface.OtherPooltableElements.tint(this.playerGraphicsInterface.player.color);
        // this.playerGraphicsInterface.OtherPooltableElements.updateScore(this.playerGraphicsInterface.player.score);
        // this.playerGraphicsInterface.OtherPooltableElements.updateAvatar(this.playerGraphicsInterface.player.avatarID);
        //
        // console.log("intra la set sides");
        //
        // this.opponentGraphicsInterface.OtherPooltableElements.updateUsername(this.opponentGraphicsInterface.player.nickname);
        // this.opponentGraphicsInterface.OtherPooltableElements.tint(this.opponentGraphicsInterface.player.color);
        // this.opponentGraphicsInterface.OtherPooltableElements.updateScore(this.opponentGraphicsInterface.player.score);
        // this.opponentGraphicsInterface.OtherPooltableElements.updateAvatar(this.opponentGraphicsInterface.player.avatarID);
        //
        // this.onUpdateMatchCircles();
    }

    private onUpdateScore(score:number[]) {
        let playerScore:number = score[0];
        let opponentScore:number = score[1];
        this.playerGraphicsInterface.graphics.updateScore(playerScore);
        this.opponentGraphicsInterface.graphics.updateScore(opponentScore);
    }

    // public onUpdatePlayerName(name: string): void {
    //     this.playerGraphicsInterface.OtherPooltableElements.updateUsername(name);
    // }
    //
    // public onChangePlayerColor(color: number): void {
    //     this.playerGraphicsInterface.OtherPooltableElements.tint(+color);
    // }
    //
    // public onChangePlayerAvatar(avatarID: string): void {
    //     this.playerGraphicsInterface.OtherPooltableElements.updateAvatar(avatarID);
    // }

    // private onUpdateOpponentScore(score: number) {
    //     this.opponentGraphicsInterface.OtherPooltableElements.updateScore(score);
    // }

    // public onUpdateOpponentName(name: string): void {
    //     this.opponentGraphicsInterface.OtherPooltableElements.updateUsername(name);
    // }
    //
    // public onChangeOpponentColor(color: number): void {
    //     this.opponentGraphicsInterface.OtherPooltableElements.tint(color);
    //
    // }
    //
    // public onChangeOpponentAvatar(avatarPath: string): void {
    //     this.opponentGraphicsInterface.OtherPooltableElements.updateAvatar(avatarPath);
    // }


    // public onChangeColors(COLORS: number[]): void {
    //     this.leftGameGraphics.tint(COLORS[0]);
    //     this.rightGameGraphics.tint(COLORS[1]);
    //     // if(this.leftGameGraphics.type == BallType.Opponent)
    //     // {
    //     //     this.leftGameGraphics.tint(color);
    //     // }
    //     // else
    //     // {
    //     //     this.rightGameGraphics.tint(color);
    //     // }
    // }

    // public onUpdateScore(score:number[]): void {
    //     this.leftGameGraphics.updateScore(score[0]);
    //     this.rightGameGraphics.updateScore(score[1]);
    // }
    //
    // public onUpdateOpponentScore(score: number): void {
    //     this.rightGameGraphics.updateScore(score);
    // }
    //
    //
    //
    // public onUpdateOpponentName(nickname: string): void {
    // }

    public handleDesktopLandscape(): void {
        let newHeight: number = (0.11 * Settings.stageHeight);
        let scaleFactor: number = newHeight / this.initialBoardHeight;
        let scaleString: string = "translate(-50%, -50%) scale(" + scaleFactor.toString() + ")";
//                 console.log("intra la desktop landscape");
//                 console.log(scaleString);
//                 console.log("------------");

        this.scoreBoard.style.transform = scaleString;
    }

    public onResizeMobileLandscape(): void {
    }

    public onResizeMobilePortrait(): void {
    }

    private defineTextStyles(): void {

    }

    private addElements(): void {
        // this.usersUIHolder = new Container();
        // this.graphicsContainer = new Container();
        // this.addChild(this.graphicsContainer);
        // this.addVersusGraphics();
        this.addLeftGameGraphics();
        this.addRightGameGraphics();

        // if (Settings.isMobile) {
        //     this.addTipTextMobile();
        // }
        // else {
        this.addTipText();
        // }
    }

    private addTipText() {
        this.tipText = document.getElementById("SpansHolder") as HTMLDivElement;
        // this.multilineText = new MultiStyleText("",
        //     {
        //         "default": this.defaultTextStyle,
        //         "warning": this.warningTextStyle,
        //         "opponent": this.opponentTextStyle
        //     });
        // let style = new PIXI.TextStyle({
        //     fontFamily: 'troika',
        //     fontSize: 56.4,
        //     fill: 0xffffff,
        //     // fontStyle: 'italic',
        //     // fontWeight: 'bold',
        //     // fill: ['#ffffff', '#00ff99'], // gradient
        //     // stroke: '#4a1850',
        //     // strokeThickness: 5,
        //     // align: "right",
        //     dropShadow: true,
        //     dropShadowColor: '#000000',
        //     dropShadowBlur: 1,
        //     dropShadowAngle: Math.PI / 3,
        //     dropShadowDistance: 8,
        //     // wordWrap: true,
        //     // wordWrapWidth: this.tipTextWidth,
        // });

        // this.tipText = new TextField("", style);

        // this.tipTextContainer = new Container();
        // this.tipTextContainer.name = "tipTextContainer";
        // this.addChild(this.tipTextContainer);
        // this.multilineText.scale.x = this.multilineText.scale.y = 0.5;
        // this.tipTextContainer.addChild(this.tipText);
        // this.tipTextContainer.addChild(this.multilineText);
    }

    /*private addTipTextMobile() {



        // this.tipTextContainer = new Container();
        // // this.addChild(this.tipTextContainer);
        // this.tipTextContainer.addChild(this.tipText);
    }
*/

    private addLeftGameGraphics() {
        this.leftGameGraphics = new PockeyUserGameGraphics("left", document.getElementById("PlayerScoreBoardLeft") as HTMLDivElement);
        // this.leftGameGraphics.x = this.versus.x - this.leftGameGraphics.width - 36;
        // this.versus.y = this.leftGameGraphics.height - this.versus.height + 8;
        // this.graphicsContainer.addChild(this.leftGameGraphics);
    }

    private addRightGameGraphics() {
        this.rightGameGraphics = new PockeyUserGameGraphics("right", document.getElementById("PlayerScoreBoardRight") as HTMLDivElement);
        // this.rightGameGraphics.x = this.versus.x + this.versus.width + 36;
        // this.graphicsContainer.addChild(this.rightGameGraphics);
    }


    // private onUpdateOpponentScore(score: number) {
    //     // this.rightGameGraphics.updateScore(score);
    // }

    // public onResize(stageWidth: number, stageHeight: number): void {
    //     // this.stageWidth = stageWidth;
    //     // this.stageHeight = stageHeight;
    //     //
    //     // this.menuBackground.x = stageWidth / 2 - this.menuBackground.width / 2;
    //     // this.menuBackground.y = stageHeight / 2 - this.menuBackground.height / 2;
    // }

}