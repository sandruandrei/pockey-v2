import {RoundCompleteScreen} from "./pockey-ui-round-complete-screen";

/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/13/2019
 */


export class MatchCompleteScreen extends RoundCompleteScreen {
    protected textDiv: HTMLDivElement = document.getElementById("MatchCompleteScreen") as HTMLDivElement;

    constructor(){
        super();

        this.assignDivs();
    }

    protected assignDivs(): void {
        this.div = document.getElementById("MatchCompleteScreen") as HTMLDivElement;
        this.textDiv = document.getElementById("MatchCompleteText") as HTMLDivElement;
    }

    public updateText(text: string): void {
        // console.log("la opp screen timeru: " + text);
        this.textDiv.innerText = text;
    }
}