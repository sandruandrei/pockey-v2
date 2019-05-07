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
import {PockeyPlayerData} from "../../../common/pockey-player-data";
import {PockeyClientPlayer} from "./pockey-client-player";

export class PockeyPlayerManager {
    private static instance: PockeyPlayerManager;
    private initialized: boolean = false;
    public player: PockeyClientPlayer;
    public opponent: PockeyPlayerData;
    public currentPlayerSocketID:string = '';

    static Instance(): PockeyPlayerManager {
        if (!PockeyPlayerManager.instance) {
            PockeyPlayerManager.instance = new PockeyPlayerManager();

            if (!PockeyPlayerManager.Instance().initialized) {
                PockeyPlayerManager.Instance().initialized = true;
                PockeyPlayerManager.Instance().player = new PockeyClientPlayer();
            }
        }

        return PockeyPlayerManager.instance;
    }
}
