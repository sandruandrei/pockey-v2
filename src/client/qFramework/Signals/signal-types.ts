/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 7/19/2018
 */


export class SignalsType {
    public static WINDOW_RESIZE: string = "SignalsType." + "WINDOW_RESIZE";
    public static ASSETS_LOADED: string = "SignalsType." + "ASSETS_LOADED";
    public static ALL_MODULES_ELEMENTS_CREATED: string = "SignalsType." + "ALL_MODULES_ELEMENTS_CREATED";
    public static MODULE_ELEMENTS_CREATED: string = "SignalsType." + "MODULE_ELEMENTS_CREATED";
    public static CHANGE_BACKGROUND: string = "SignalsType." + "CHANGE_BACKGROUND";
    public static CHECK_COOKIE_DATA: string = "SignalsType." + "CHECK_COOKIE_DATA";
    public static COOKIE_DATA_CHECKED: string = "SignalsType." + "COOKIE_DATA_CHECKED";
    public static CREATE_SOUND_CACHE: string = "SignalsType." + "CREATE_SOUND_CACHE";
    public static PLAY_SOUND: string = "SignalsType." + "PLAY_SOUND";
    public static STOP_SOUND: string = "SignalsType." + "STOP_SOUND";
    public static BEGIN_ROUND: string = "SignalsType." + "BEGIN_ROUND";
}

export class ConnectionSignalsType {
    public static CREATE_SEARCH_FOR_PARTNER_CONNECTION: string = "ConnectionSignalsType." + 'CREATE_SEARCH_FOR_PARTNER_CONNECTION';
    public static DISCONNECT_MY_SOCKET: string = "ConnectionSignalsType." + 'DISCONNECT_MY_SOCKET';
    public static SOCKET_IO_CONNECTION_CREATED: string = "ConnectionSignalsType." + 'SOCKET_IO_CONNECTION_CREATED';
    public static SOCKET_IO_DISCONNECTED: string = "ConnectionSignalsType." + "SOCKET_IO_DISCONNECTED";
    public static PRIVATE_MESSAGE: string = "ConnectionSignalsType." + "PRIVATE_MESSAGE";
    public static UPDATE_SOCKET_ID: string = "ConnectionSignalsType." + "UPDATE_SOCKET_ID";

    public static OPPONENT_DISCONNECTED: string = "ConnectionSignalsType." + "OPPONENT_DISCONNECTED";
    public static GAME_SETUP_RECEIVED: string = "ConnectionSignalsType." + "GAME_SETUP_RECEIVED";
}
