/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/9/2018
 */
import {SocketClient} from "./socket-client";


export interface DatabaseObject {
    userID: string,
    column: string,
    value: any,
    type?: string
}

export class DatabaseConnector {


    // private static checkUserRequest: XMLHttpRequest;
    private static _socketClient: SocketClient;
    public static mainCallbackFunctionSet:boolean = false;

    constructor() {

        /* let postString: string =
             "email=" + this.userEmail +
             "&image=" + this.currentImage +
             "&rating=" + (e.currentTarget as HTMLButtonElement).value;

         this.checkUserRequest = new XMLHttpRequest();
         this.checkUserRequest.addEventListener("load", this.onPostLoad.bind(this));
         this.checkUserRequest.open("POST", "includes/postData.php", true);

         this.checkUserRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         this.checkUserRequest.send(postString);*/
        // SignalsManager.AddSignalCallback(PockeySignalTypes.GET_PLAYER_INFO, this.getPlayerInfo.bind(this));

    }

    // public static set socketClient(value: SocketClient) {
    //     this._socketClient = value;
    // }

    ////////////////
    public static setMainCallBackFunction(cb: Function): void {
        this._socketClient.setMainCallBackFunction(cb);
        this.mainCallbackFunctionSet = true;
    };

    public static getSignedInUserData(userID: string): void {
        console.log("intra la database connector getSignedInUserData");
        this._socketClient.getSignedInUserData(userID);
    }

    public static updateServerPlayer(data: {}): void {
        console.log("intra la database connector updateServerPlayer");
        this._socketClient.updateServerPlayer(data);
    }

    public static updatePlayerDatabase(dbObject: DatabaseObject): void {
        console.log("intra la database connector updatePlayerDatabase");

        // let cb: Function = (callback != null) ? callback : this.userDataUpdated.bind(this);
        this._socketClient.updatePlayerDatabase(dbObject);
    }

    //////////////////

    static set socketClient(value: SocketClient) {
        this._socketClient = value;
    }
    // public static checkDatabaseUser(userID: string, callback: Function): void {
    //     this._socketClient.getSignedInUserData(userID, callback);
    // }

    // @ts-ignore
    private static userDataUpdated(data: any): void {
        console.log("DatabaseConnector userDataUpdated ${data}");
    }

    /* private static checkUserIDRequestListener(e: Event): void {
         /!* console.log("this.checkUserRequest.responseText: " + this.checkUserRequest.responseText);
          // if (this.checkUserRequest.responseText != 'false' && this.checkUserRequest.responseText != '') {
          //     // this.seen = _.split(this.checkUserRequest.responseText, ',').map(Number);
          // }

          this.checkUserRequest.removeEventListener("load", this.checkUserIDRequestListener.bind(this));*!/
     }*/
}