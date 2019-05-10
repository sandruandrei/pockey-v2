/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/5/2019
 */
import {AbstractScreen} from "../../../qFramework/AbstractModules/UserInterface/abstract-screen";
import {InventoryVO, PockeySettings} from "../../../pockey-settings";
import * as _ from "lodash";
import {PockeyPlayerManager} from "../../../pockey-player-manager";
import {RoundCompleteType} from "../../../../common/pockey-value-objects";

export class PockeyUiOpponentFoundScreen extends AbstractScreen {
    private roundBeginsText: HTMLDivElement | undefined;
    private avatarDiv: HTMLDivElement | undefined;
    private nameDiv: HTMLDivElement | undefined;

    constructor() {
        super();

        this.assignDivs();
    }

    protected assignDivs(): void {
        super.assignDivs();

        this.div = document.getElementById("PlayerFoundScreen") as HTMLDivElement;
        this.avatarDiv = document.getElementById("OpponentAvatarImage").getElementsByClassName("avatarImage")[0] as HTMLDivElement;
        this.nameDiv = document.getElementById("PlayerFoundName") as HTMLDivElement;
        this.roundBeginsText = document.getElementById("RoundOneStartsText") as HTMLDivElement;
        this.titleDiv = document.getElementById("PlayerFoundTitle") as HTMLDivElement;
    }

    public show(params: RoundCompleteType): void {
        this.updateAvatar(PockeyPlayerManager.Instance().opponent.avatar);
        this.updateOpponentName(PockeyPlayerManager.Instance().opponent.nickname);
        super.show(params);

        if (params == RoundCompleteType.rematch) {
            (this.titleDiv as HTMLDivElement).innerText = "rematch";
        } else {
            (this.titleDiv as HTMLDivElement).innerText = "opponent found";
        }

    }

// public show(): void {
    //     this.div.style.display = "flex";
    // }
    //
    // public hide(): void {
    //     this.div.style.display = "none";
    // }

    public hide(): void {
        super.hide();
        // console.log("intra la hide on found screen");
    }

    public updateText(text: string): void {
        // console.log("la opp screen timeru: " + text);
        (this.roundBeginsText as HTMLDivElement).innerText = "first round starts in " + text;
    }

    private updateAvatar(avatarID: string): void {

        let avatarPath: string | undefined = "";

        _.forEach(PockeySettings.LARGE_AVATARS_ARRAY, (avatarVO: InventoryVO) => {
            if (avatarVO.id == avatarID) {
                avatarPath = avatarVO.icon;
                return true;
            }
        });

        avatarPath = "center / contain no-repeat #1a4157 url(" + avatarPath + ")";
        this.avatarDiv.style.background = avatarPath;
    }

    private updateOpponentName(nickname: string): void {
        (this.nameDiv as HTMLDivElement).innerText = nickname;
    }
}