export class FrameworkSocketNamespaces {
    public static SEARCH: string = "/searching";
    public static PLAY: string = "/play";
}

export class FrameworkSocketEvents {

    public static newConnection: string = "FrameworkSocketEvents." + "newConnection";
    public static letsConnect: string = "FrameworkSocketEvents." + "letsConnect";
    public static joinRoom: string = "FrameworkSocketEvents." + "joinRoom";
    public static joinedRoom: string = "FrameworkSocketEvents." + "joinedRoom";
    public static leftRoom: string = "FrameworkSocketEvents." + "leftRoom";
    public static privateMessage: string = "FrameworkSocketEvents." + "privateMessage";
    public static getSignedInUserData: string = "FrameworkSocketEvents." + "getSignedInUserData";
    public static updatePlayerDatabase: string = "FrameworkSocketEvents." + "updatePlayerDatabase";
    public static disconnectMySocket: string = "FrameworkSocketEvents." + "disconnectMySocket";
    public static gameSetup: string = "FrameworkSocketEvents." + "gameSetup";
    public static roomCreated: string = "FrameworkSocketEvents." + "roomCreated";
    public static updatePlayerDataFromServer: string = "FrameworkSocketEvents." + "updatePlayerDataFromServer";
    public static updatePlayerDataFromClient: string = "FrameworkSocketEvents." + "updatePlayerDataFromClient";
    public static updatePlayerData: string = "FrameworkSocketEvents." + "updatePlayerData";
    public static startSendingSnapshots: string = "FrameworkSocketEvents." + "startSendingSnapshots";
    public static snapshotUpdate: string = "FrameworkSocketEvents." + "snapshotUpdate";
    // public static partnerFoundChannel: string = "partnerFoundChannel";
}

export class FrameworkSocketMessages {
    public static WHO_WANTS_TO_PLAY: string = "FrameworkSocketMessages." + "WHO_WANTS_TO_PLAY";
    public static I_WANT_TO_PLAY: string = "FrameworkSocketMessages." + "I_WANTS_TO_PLAY";
    public static HELLO: string = "FrameworkSocketMessages." + "HELLO";

}