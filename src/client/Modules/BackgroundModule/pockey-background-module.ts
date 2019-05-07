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
import {
    AbstractBackgroundModule,
    iBackground
} from "../../qFramework/AbstractModules/Background/abstract-background-module";
import {SignalsManager} from "../../qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../SignalsModule/pockey-signal-types";
import {Settings} from "../../qFramework/Settings";
import {PockeySettings} from "../../pockey-settings";


export class PockeyBackgroundModule extends AbstractBackgroundModule {

    constructor() {
        super();
        this.Name = "PockeyBackgroundModule";

        // this.bgTextureName = "pockey_bg-01.png";
    }

    protected registerSignalsHandlers(): void {
        super.registerSignalsHandlers();

        SignalsManager.AddSignalCallback(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, this.onResizeBackground.bind(this));
    }

    private onResizeBackground(params: any[]): void {
        let bg: iBackground;

        if (this.backgrounds[Settings.mainBackgroundName]) {
            bg = this.backgrounds[Settings.mainBackgroundName];
            let newHeight: number = Settings.stageHeight;
            // @ts-ignore
            let scale: number = newHeight / bg.initialHeight;
            // @ts-ignore
            let newWidth: number = bg.initialWidth * scale;

            if (newWidth < Settings.stageWidth) {
                newWidth = Settings.stageWidth;
                // @ts-ignore
                scale = newWidth / bg.initialWidth;
            }

            // @ts-ignore
            bg.div.style.width = (bg.initialWidth * scale).toString() + "px";
            // @ts-ignore
            bg.div.style.height = (bg.initialHeight * scale).toString() + "px";
        }

        if (this.backgrounds[PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME]) {
            bg = this.backgrounds[PockeySettings.POCKEY_CUSTOM_BACKGROUND_NAME];

            //*********************
            let scale: number = params[0];
            let position: PIXI.Point = params[1] as PIXI.Point;

            // @ts-ignore
            bg.div.style.width = (bg.initialWidth * scale).toString() + "px";
            // @ts-ignore
            bg.div.style.width = (bg.initialWidth * scale).toString() + "px";
            bg.div.style.left = position.x.toString() + "px";
            bg.div.style.top = position.y.toString() + "px";
        }

    }


}
