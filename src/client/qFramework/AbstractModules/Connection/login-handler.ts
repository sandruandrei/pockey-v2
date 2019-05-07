/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/14/2018
 */
import {SignalsType} from "../../Signals/signal-types";
import {SignalsManager} from "../../Signals/signals-manager";

export class LoginHandler {

    constructor() {
        SignalsManager.AddSignalCallback(SignalsType.CHECK_COOKIE_DATA, this.onCheckCookieData.bind(this));
    }

    protected onCheckCookieData(): void {
        console.log("on LOGIN HANDLER: onCheckCookieData");
        SignalsManager.DispatchSignal(SignalsType.COOKIE_DATA_CHECKED);
    }
}