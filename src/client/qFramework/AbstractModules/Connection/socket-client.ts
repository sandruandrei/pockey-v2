import {
    FrameworkSocketEvents,
    // FrameworkSocketMessages,
    FrameworkSocketNamespaces
} from "./connection-channels-and-messages";
// import {SignalsManager} from "../../Signals/signals-manager";
// import {ConnectionSignalsType} from "../../Signals/signal-types";
import {DatabaseObject} from "./database-connector";
import io from '../../../socket.io/socket.io.slim';

export class SocketClient {
    protected socket: any;
    protected searchingSocket: any;
    protected playingSocket: any;
    protected lookingForPartner: boolean = false;
    protected myID: string = "";
    protected partnerID: string;
    protected connectionID: string;
    public socketConnectionCreated: boolean = false;
    public mainCallbackFn: Function;

    public initializeClientSocket(onSocketInitializedCallback: Function): void {
        // this.socket = io.connect();
        this.socket = io();
        this.socket.binaryType = "blob";
        this.socket.on('connect', () => {
            this.onSocketInitialized();
            /* */
            /* console.log("%c socket client connected", "background: #ff9900; color: black; font-weight:bold; ");*/
        });

        this.socket.on(FrameworkSocketEvents.newConnection, () => {
            onSocketInitializedCallback();
            // this.initializePlayingSocket();
            // this.myID = this.searchingSocket.id.replace(FrameworkSocketNamespaces.SEARCH, '');
            // SignalsManager.DispatchSignal(ConnectionSignalsType.UPDATE_SOCKET_ID, [this.myID]);
            //
            // console.log("sunt conectat pe search: " + this.myID);
            //
            // this.searchingSocket.emit(FrameworkSocketEvents.letsConnect, FrameworkSocketMessages.WHO_WANTS_TO_PLAY, this.myID, "");
            // this.lookingForPartner = true;
        });

        // this.initializeSearchingSocket();
    }

    // @ts-ignore
    protected onSocketInitialized(): void {
        console.log("socket connection confirmed");
    }

    //////////////////////
    public setMainCallBackFunction(cb: Function): void {
        this.socket.on(FrameworkSocketEvents.updatePlayerData, (usernameData: JSON) => {
            cb(usernameData);
        });
    }

    public getSignedInUserData(username: string): void {
        // this.socket.on(FrameworkSocketEvents.getSignedInUserData, (usernameData: JSON) => {
        //     callback(usernameData);
        // });
        this.socket.emit(FrameworkSocketEvents.getSignedInUserData, username);
    }

    public updateServerPlayer(data: {}): void {
        this.socket.emit(FrameworkSocketEvents.updatePlayerData, data);
    }

    public updatePlayerDatabase(dbObject: DatabaseObject): void {
        // this.socket.on(FrameworkSocketEvents.updatePlayerDatabase, (data: any) => {
        //     callback(data);
        //     console.log("intra la socket client updatePlayerDatabase");
        // });
        this.socket.emit(FrameworkSocketEvents.updatePlayerDatabase, dbObject);
        console.log("intra la socket client update player database");
    }

    //////////////////////////

    public disconnect(): void {
        this.socketConnectionCreated = false;

        if (this.playingSocket)
            this.playingSocket.disconnect();
        // this.playingSocket.emit(FrameworkSocketEvents.disconnectMySocket, this.connectionID);
        // if (this.playingSocket)
        //     this.playingSocket.disconnect();
        // this.playingSocket.leave();
        // if (this.searchingSocket)
        //     this.searchingSocket.disconnect();
        // this.searchingSocket.leave();
    }

    public initializeSearchingSocket(): void {
        this.searchingSocket = io(FrameworkSocketNamespaces.SEARCH);
        this.searchingSocket.on(FrameworkSocketEvents.roomCreated, (roomID: string) => {
            this.initializePlayingSocket(roomID);
            console.log("pe search s-a gasit opponent. room id: " + roomID);
            // this.myID = this.searchingSocket.id.replace(FrameworkSocketNamespaces.SEARCH, '');
            // SignalsManager.DispatchSignal(ConnectionSignalsType.UPDATE_SOCKET_ID, [this.myID]);
            //
            // console.log("sunt conectat pe search: " + this.myID);
            //
            // this.searchingSocket.emit(FrameworkSocketEvents.letsConnect, FrameworkSocketMessages.WHO_WANTS_TO_PLAY, this.myID, "");
            // this.lookingForPartner = true;
        });


        /*this.searchingSocket.on('connect', () => {
            this.myID = this.searchingSocket.id.replace(FrameworkSocketNamespaces.SEARCH, '');
            SignalsManager.DispatchSignal(ConnectionSignalsType.UPDATE_SOCKET_ID, [this.myID]);

            console.log("sunt conectat pe search: " + this.myID);

            this.searchingSocket.emit(FrameworkSocketEvents.letsConnect, FrameworkSocketMessages.WHO_WANTS_TO_PLAY, this.myID, "");
            this.lookingForPartner = true;
        });

        this.searchingSocket.on(FrameworkSocketEvents.letsConnect, (msg:any, id:string, partnerID:string) => {
            console.log("cineva vrea sa ma conectez, socket: " + id + ". verific...");
            if (this.lookingForPartner && msg == FrameworkSocketMessages.WHO_WANTS_TO_PLAY) {
                if (id != this.myID && (partnerID == "")) {
                    console.log("ma conectez cu: " + id);
                    this.searchingSocket.emit(FrameworkSocketEvents.letsConnect, FrameworkSocketMessages.I_WANT_TO_PLAY, id, this.myID);
                    this.partnerID = id;
                    this.connectionID = id + this.myID;

                    this.initializePlayingSocket();

                    this.lookingForPartner = false;
                }
            } else if (this.lookingForPartner && msg == FrameworkSocketMessages.I_WANT_TO_PLAY) {
                if (id == this.myID && (partnerID != "" && partnerID != null)) {
                    console.log("ma conectez cu: " + partnerID);

                    this.partnerID = partnerID;
                    this.connectionID = this.myID + partnerID;

                    this.initializePlayingSocket();

                    this.lookingForPartner = false;
                }
            }
        });*/
    }

    protected initializePlayingSocket(roomID: string): void {
        this.playingSocket = io(FrameworkSocketNamespaces.PLAY);
        this.playingSocket.on('connect', () => {
            this.searchingSocket.disconnect();
            this.searchingSocket = null;

            this.onPlayingSocketInitialized();

            this.playingSocket.emit(FrameworkSocketEvents.joinRoom, roomID);

            /*this.playingSocket.on(FrameworkSocketEvents.joinedRoom, (room:string) => {
                console.log("sunt conectat pe playing room: " + room + " as " + this.myID);

                this.playingSocket.emit(FrameworkSocketEvents.privateMessage, this.connectionID, FrameworkSocketMessages.HELLO, this.myID, this.partnerID);
                // SignalsManager.DispatchSignal(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED, [this.myID, this.partnerID, this.connectionID]);
            });

            this.playingSocket.on(FrameworkSocketEvents.leftRoom, (socketID:string) => {
                SignalsManager.DispatchSignal(ConnectionSignalsType.OPPONENT_DISCONNECTED);
                this.socketConnectionCreated = false;
                this.playingSocket.disconnect();
                // console.log("sunt conectat pe playing room: " + room + " as " + this.myID);
                console.log("s-a deconectat oponentul bagamiaspula: " + socketID);
                // this.playingSocket.emit(FrameworkSocketEvents.privateMessage, this.connectionID, FrameworkSocketMessages.HELLO, this.myID, this.partnerID);
                // SignalsManager.DispatchSignal(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED, [this.myID, this.partnerID, this.connectionID]);
            });

            this.playingSocket.on(FrameworkSocketEvents.privateMessage, (messageType:string, messageData:any) => {
                this.handlePrivateMessage(messageType, messageData);
            });*/
        });
    }

    protected onPlayingSocketInitialized(): void {

    }

    /* protected handlePrivateMessage(messageType:string, messageData:any): void {
         switch (messageType) {
             case FrameworkSocketMessages.HELLO: {
                 if (!this.socketConnectionCreated) {
                     this.socketConnectionCreated = true;

                     SignalsManager.DispatchSignal(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED, [this.myID, this.partnerID, this.connectionID]);
                     this.playingSocket.emit(FrameworkSocketEvents.privateMessage, this.connectionID, FrameworkSocketMessages.HELLO);
                 }

                 break;
             }
         }
     }*/

    public sendPrivateMessage(params: any[]): void {
        if (this.playingSocket && this.connectionID && this.myID) {
            let messageType = params[0];
            let messageData = params[1];

            this.playingSocket.emit(FrameworkSocketEvents.privateMessage, this.connectionID, messageType, messageData);

            // console.log("private message sent: " + messageType, messageData);

        }
    }
}