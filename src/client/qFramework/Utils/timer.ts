/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 5/8/2019
 */

export class Timer {
    private timer: any;
    private currentTime: number;

    constructor(private onUpdateCallback: Function, private onCompleteCallback: Function) {

    };

    public start(i: number) {
        this.currentTime = i;
        //callback = callback || function(){};
        this.timer = setInterval(() => {
            this.currentTime--;
            if (this.currentTime < 0) {
                clearInterval(this.timer);
                this.onCompleteCallback();
            } else {
                this.onUpdateCallback();
            }
        }, 1000);
    }

    public stop() {
        clearInterval(this.timer);
    };

    public getCurrentTime(): number {
        return this.currentTime;
    }
}