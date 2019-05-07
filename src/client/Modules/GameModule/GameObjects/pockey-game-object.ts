/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/23/2019
 */
import {GameObject} from "../../../qFramework/AbstractModules/GameModule/game-object";
import * as p2 from "p2";
import {BallType} from "../../../../common/pockey-game-settings";

export class PockeyGameObject extends GameObject {
    private _p2Body: p2.Body;

    // Public property using getter syntax
    public get p2Body(): p2.Body {
        // Set private backing property if not already set
        if (!this._p2Body) {
            this._p2Body = this.getP2Body();
        }
        return this._p2Body;
    }

    private _p2Shadow: p2.Body;

    // Public property using getter syntax
    public get p2Shadow(): p2.Body {
        // Set private backing property if not already set
        if (!this._p2Shadow) {
            this._p2Shadow = this.getP2Shadow();
        }
        return this._p2Shadow;
    }

    constructor(name: string, public ballType: BallType) {
        super(name);
        this.gameObjectData.type = this.ballType;
    }

    protected getP2Body(): p2.Body {
        return new p2.Body();
    }

    protected getP2Shadow(): p2.Body {
        return new p2.Body();
    }

    setPosition(x: number, y: number) {
        this.p2Body.position[0] = x;
        this.p2Body.position[1] = y;

        this.p2Shadow.position[0] = x;
        this.p2Shadow.position[1] = y;

        super.setPosition(x, y);
    }

    public updateShadowPosition() {
        this.p2Shadow.position[0] = this.p2Body.position[0];
        this.p2Shadow.position[1] = this.p2Body.position[1];
    }
}
