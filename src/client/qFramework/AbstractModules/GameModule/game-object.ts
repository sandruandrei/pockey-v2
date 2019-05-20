/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/12/2019
 */
import {GraphicObject} from "./graphic-object";
import {PockeyGameElementVO} from "../../../../common/pockey-value-objects";
import {TweenMax} from "gsap";

export class GameObject {
    public graphicObject: GraphicObject;
    public gameObjectData: PockeyGameElementVO = {};
    protected snapshotsBundle: PockeyGameElementVO[] = [];
    protected animationTween: TweenMax;
    protected isUpdatingFromServer: boolean = false;

    // constructor(options?: {}) {
    constructor(protected name: string) {

    }

    public build(): GameObject {
        this.createElements();
        this.addGraphicObject();
        this.postConstructor();

        return this;
    }

    protected postConstructor(): void {

    }

    protected createElements(): void {
        this.gameObjectData.name = this.name;
    }

    protected addGraphicObject(): void {

    }

    public stopServerUpdate(): void {
        this.isUpdatingFromServer = false;
        // if (this.snapshotsBundle.length > 0) {
        //     this.gameObjectData = this.snapshotsBundle[this.snapshotsBundle.length - 1];
        //     this.snapshotsBundle = [];
        // }
    }

    public updateData(data: PockeyGameElementVO): void {
        this.gameObjectData = data;

        //todo some other calculations
    }

    public assignGraphicObject(): void {

    }

    public addSnapshotToBundle(data: PockeyGameElementVO): void {
        this.snapshotsBundle.push(data);

        // console.log("game object snapshots received: " + this.name + ":" + this.snapshotsBundle.length);

    }

    public startPlayingSnapshots(): void {
        // console.log("game objects: " + this.name + " snapshots: " + this.snapshotsBundle.length);
        if (this.snapshotsBundle.length > 0)
            this.playSnapshot();
    }

    public playSnapshot(): void {

        this.snapshotsBundle.shift();
        if (this.snapshotsBundle.length > 0) {
//             console.log("playing snapshot on: " + this.name);
            this.playSnapshot();
        }
    }

    public setPosition(x: number, y: number): void {
        this.graphicObject.setPosition(x, y);

        this.gameObjectData.xPos = x;
        this.gameObjectData.yPos = y;
    }


    protected lerp(startVal: number, endVal: number, amount: number) {
        return (1 - amount) * startVal + amount * endVal;
    }
}
