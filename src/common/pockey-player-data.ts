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
import {BallType} from "./pockey-value-objects";

export interface PockeyPlayerData {
    nickname?: string,
    total_points?: number,
    socketID?: string,
    felt?: string,
    player_level?: number
    stick?: string,
    user_id?: string,
    ballsID?: string,
    decal?: string,
    avatar?: string,
    color?: string,
    first_login_date?: {},
    type?: BallType,
    currentScore?: number
    roundsWon?: number
}