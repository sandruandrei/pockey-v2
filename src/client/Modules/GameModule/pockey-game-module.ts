/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 3/29/2019
 */
import {AbstractModule} from "../../qFramework/Abstracts/abstract-module";
import {PoolTableGraphics} from "./GameObjects/pool-table-graphics";
import {AbstractEntryPoint} from "../../qFramework/AbstractEntryPoint";
import {Settings} from "../../qFramework/Settings";
import {SignalsManager} from "../../qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../SignalsModule/pockey-signal-types";
import {PockeyGameManager} from "./pockey-game-manager";
import {PoolTableManager} from "./GameObjects/pool-table-manager";

export class PockeyGameModule extends AbstractModule {

    private poolTableGraphics: PoolTableGraphics;
    private poolTableManager: PoolTableManager;

    constructor() {
        super();
    }

    createElements() {
        console.log("create game module!!!!!");
        this.poolTableGraphics = new PoolTableGraphics();
        this.addChild(this.poolTableGraphics);

        this.poolTableManager = new PoolTableManager(this.poolTableGraphics)
        new PockeyGameManager(this.poolTableManager);


        super.createElements();
    }


    update(deltaFrame: number) {
        super.update(deltaFrame);

        this.poolTableManager.update(deltaFrame);
    }

    protected handleDesktopLandscape(): void {
        super.handleDesktopLandscape();
        // console.log("stage width: " + this.stageWidth);
        // console.log("stage height: " + this.stageHeight);

        if (this.poolTableGraphics) {

            // this.poolTableGraphics.poolStick.visible = false;
            // console.log("this.poolTableGraphics width after: " + this.poolTableGraphics.width);
            this.poolTableGraphics.height = 0.7 * Settings.stageHeight;
            let backgroundScaleFactor: number = this.poolTableGraphics.scale.y;
            this.poolTableGraphics.scale.x = backgroundScaleFactor;

            this.poolTableGraphics.x = Settings.stageWidth / 2;
            let difference: number = this.poolTableGraphics.y;
            this.poolTableGraphics.y = 0.18 * Settings.stageHeight + this.poolTableGraphics.height / 2;//
            difference -= this.poolTableGraphics.y;
            SignalsManager.DispatchSignal(PockeySignalTypes.POCKEY_POOL_TABLE_RESIZED, [backgroundScaleFactor, this.poolTableGraphics.position, this.poolTableGraphics.rotation, this.poolTableGraphics.width, this.poolTableGraphics.height, difference]);

            backgroundScaleFactor = 0.5 / backgroundScaleFactor;

            AbstractEntryPoint.camera.orthoTop = Settings.stageHeight * backgroundScaleFactor;
            AbstractEntryPoint.camera.orthoBottom = -Settings.stageHeight * backgroundScaleFactor;
            AbstractEntryPoint.camera.orthoLeft = -Settings.stageWidth * backgroundScaleFactor;
            AbstractEntryPoint.camera.orthoRight = Settings.stageWidth * backgroundScaleFactor;

            // this.poolTableGraphics.poolStick.visible = true;

        }
    }

}