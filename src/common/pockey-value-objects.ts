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


import {PockeyStates} from "../client/Modules/GameModule/StateMachine/pockey-state-machine";
import {PockeyPlayerData} from "./pockey-player-data";

export enum RoundCompleteType {
    matchComplete,
    roundComplete,
    playerDisconnected,
    rematch,
    opponentFound
}

export interface RoundVO {
    type?: RoundCompleteType,
    roundNumber?: number,
    leftPlayerData?: PockeyPlayerData,
    rightPlayerData?: PockeyPlayerData,
    // playerDisconnected,
    // rematch
}

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
    direction?:number,
    canBeRemoved?:boolean,
    scale?:number
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

export enum BallType {
    Left = 'LeftBall',
    Right = 'RightBall',
    White = "WhiteBall",
    Puck = "Puck"
}

export enum WinStatus {
    WIN,
    LOST
}