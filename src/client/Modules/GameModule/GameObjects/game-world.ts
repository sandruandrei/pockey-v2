/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/8/2019
 */
import {GameObject} from "../../../qFramework/AbstractModules/GameModule/game-object";
import * as _ from "lodash";
import {PockeyGameElementVO, PockeyScreenShot} from "../../../../common/pockey-value-objects";
import {Settings} from "../../../qFramework/Settings";

export class GameWorld {
    private gameObjects: GameObject[] = [];
    private isUpdatedFromServer: boolean = false;
    private lastSentScreenShotID: number = 0;
    // @ts-ignore
    private lastReceivedScreenShotID: number = 0;

    constructor() {
        // this.createGameObjects();
    }

    public reset(): void {
        this.lastSentScreenShotID = 0;
        this.lastReceivedScreenShotID = 0;
    }

    public addGameObject(go: GameObject): void {
        this.gameObjects.push(go);
    }

    // private createGameObjects(): void {
    //     this.leftGoalie = new GoalieGameObject({ballType: TableSide.LEFT});
    //     this.leftGoalie.gameObjectData.name = 'leftGoalie';
    //     this.gameObjects.push(this.leftGoalie);
    //
    //     this.rightGoalie = new GoalieGameObject({ballType: TableSide.RIGHT});
    //     this.rightGoalie.gameObjectData.name = 'rightGoalie';
    // }

    public sendSnapshotToGameObjects(serverObjects: PockeyScreenShot): void {
        this.lastReceivedScreenShotID = serverObjects.id;
        // console.log("last Received id: " + this.lastReceivedScreenShotID);
        _.forEach(serverObjects.gameElements, (serverObject: PockeyGameElementVO) => {
            _.forEach(this.gameObjects, (gameObject: GameObject) => {
                if (gameObject.gameObjectData.name == serverObject.name) {
                    // gameObject
                    gameObject.addSnapshotToBundle(serverObject);
                }
            });
        });
    }

    protected prevTime: number = 0;

    public startSimulatingSnapshots(): void {
        // _.forEach(this.gameObjects, (gameObject: GameObject) => {
        //     gameObject.startPlayingSnapshots();
        // });
        this.isUpdatedFromServer = true;
        this.playSnapshots();
    }

    public playSnapshots(): void {
        // console.log("game objects: " + this.name + " snapshots: " + this.snapshotsBundle.length);
        // if (this.snapshotsBundle.length > 0)
        //     this.playSnapshot();
        _.forEach(this.gameObjects, (gameObject: GameObject) => {
            gameObject.playSnapshot();
        });

        if (this.isUpdatedFromServer) {
            setTimeout(this.playSnapshots.bind(this), Settings.playerUpdateInterval * 1000);
        } else {
            _.forEach(this.gameObjects, (gameObject: GameObject) => {
                gameObject.stopServerUpdate();
            });
        }
    }

    public stopServerUpdate(): void {
        this.isUpdatedFromServer = false;
        this.reset();
    }

    public getSnapshot(): PockeyScreenShot {
        this.lastSentScreenShotID++;

        let screenShot: PockeyScreenShot = {id: this.lastSentScreenShotID, gameElements: []};

        _.forEach(this.gameObjects, (gameObject: GameObject) => {
            gameObject.gameObjectData.timeElapsed = Date.now() - gameObject.gameObjectData.timeElapsed;
            screenShot.gameElements.push(gameObject.gameObjectData);
        });

//         let ssTime:number = Date.now();
// //         console.log("time elaped: " + (ssTime - this.prevTime));
//         this.prevTime = Date.now();

        // console.log("last sent: " + this.lastSentScreenShotID);
        return screenShot;
    }
}
