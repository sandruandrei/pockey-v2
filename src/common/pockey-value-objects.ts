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


import {BallType} from "./pockey-game-settings";
import {PockeyStates} from "../client/Modules/StateMachine/pockey-state-machine";

// export enum PockeyObjectType {
//     Ball,
//     Stick,
//     Goalie,
//     StickGraphicLine,
//     StickGraphicCircle
// }

export interface PockeySoundVO {
    soundAt: number,
    soundName: string
}

export interface PockeyScreenShot
{
    id:number,
    gameElements:PockeyGameElementVO[]
}

export interface PockeyGameElementVO {
    socketID?: string,
    type?: BallType,
    name?: string,
    rotation?: number,
    xPos?: number,
    yPos?: number,
    visible?: boolean,
    alpha?: number,
    timeElapsed?: number,
    isOnReposition?: boolean
    pivot?: number,
    state?:PockeyStates,
    direction?:number
}

// export interface PockeyGraphicElementVO {
//     type: PockeyObjectType,
//     name: string,
//     positions: number[][],
//     color: number[],
//     rotation: number
// }

export interface PockeySnapshot {
    elements: PockeyGameElementVO[],
    // graphics: PockeyGraphicElementVO[],
    sounds: PockeySoundVO[],
}

export interface RoundSetup {
    roundNumber: number;
}