/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/9/2019
 */
import {Player} from "../common/player";
import {FrameworkSocketEvents} from "../client/qFramework/AbstractModules/Connection/connection-channels-and-messages";

export class PockeyPlayerServer extends Player {
    constructor() {
        super();
        // socket.on(FrameworkSocketEvents.updatePlayerDataFromClient, this.updatePlayerData.bind(this));
        // this.socket.on(FrameworkSocketEvents.updatePlayerDataFromClient, this.updatePlayerData.bind(this));
    }

    updatePlayerData(usernameData: {}): void {
        super.updatePlayerData(usernameData);

        console.log("server player updated. sending player data update to client");
        this.socket.emit(FrameworkSocketEvents.updatePlayerData, this.data);
    }
}