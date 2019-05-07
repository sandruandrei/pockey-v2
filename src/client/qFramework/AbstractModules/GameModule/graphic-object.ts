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

export class GraphicObject extends PIXI.Container {
    public name: string = "";

    constructor() {
        super();
    }

    public setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
