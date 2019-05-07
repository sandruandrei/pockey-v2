import {PockeyUiMatchCircle} from "./pockey-ui-match-circle";
import {Settings} from "../../../../../qFramework/Settings";
import * as _ from "lodash";


export class PockeyUiVersusGraphics {
    public leftSideMatchCircles: PockeyUiMatchCircle[];
    public rightSideMatchCircles: PockeyUiMatchCircle[];

    constructor() {

        if (Settings.isMobile) {
            // this.versusGraphics.visible = false;
        }

        this.leftSideMatchCircles = [];
        _.forEach((document.getElementById("ScoreBoardPlayerRoundsLeft") as HTMLDivElement).children, (circle: Element) => {
            let matchCircle: PockeyUiMatchCircle = new PockeyUiMatchCircle(circle as HTMLDivElement);
            this.leftSideMatchCircles.push(matchCircle);
        });

        this.rightSideMatchCircles = [];
        _.forEach((document.getElementById("ScoreBoardPlayerRoundsRight") as HTMLDivElement).children, (circle: Element) => {
            let matchCircle: PockeyUiMatchCircle = new PockeyUiMatchCircle(circle as HTMLDivElement);
            this.rightSideMatchCircles.push(matchCircle);
        });
        // this.leftSideMatchCircles.push(circle1);
        // this.leftSideMatchCircles.push(circle2);
        //
        // this.rightSideMatchCircles.push(circle3);
        // this.rightSideMatchCircles.push(circle4);
    }
}