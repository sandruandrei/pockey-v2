import {AbstractModule} from "../../Abstracts/abstract-module";
import {SocketClient} from "./socket-client";
import {LoginHandler} from "./login-handler";
import {Settings} from "../../Settings";
import {ConnectionSignalsType, SignalsType} from "../../Signals/signal-types";
import {SignalsManager} from "../../Signals/signals-manager";
import {DatabaseConnector} from "./database-connector";
import * as _ from "lodash";

export class AbstractConnectionModule extends AbstractModule {

    protected socketClient: SocketClient;

    constructor() {

        super();

        this.Name = "AbstractConnectionModule";

        this.createLoginHandler();
    }

    protected createLoginHandler(): void {
        new LoginHandler();
        console.log("%c AbstractConnectionModule -> login handler", "color: white; background:green");
    }

    public createElements(): void {
        /*super.createElements();*/

        this.startSocketConnection();
    }

    private startSocketConnection(): void {
        this.onCreateSocketIoConnection();
        console.log("%c AbstractConnectionModule -> startSocketConnection", "color: white; background:green");
    }

    protected registerSignalsHandlers(): void {
        super.registerSignalsHandlers();
        if (!Settings.singlePlayer) {
            SignalsManager.AddSignalCallback(ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION, this.onCreateSearchForPartnerConnection.bind(this));
            // SignalsManager.AddSignalCallback(ConnectionSignalsType.SOCKET_IO_DISCONNECTED, this.onSocketIoDisconnected.bind(this));
            SignalsManager.AddSignalCallback(ConnectionSignalsType.PRIVATE_MESSAGE, this.onPrivateMessage.bind(this));
            SignalsManager.AddSignalCallback(ConnectionSignalsType.UPDATE_SOCKET_ID, this.onUpdateSocketID.bind(this));
            SignalsManager.AddSignalCallback(ConnectionSignalsType.DISCONNECT_MY_SOCKET, this.onDisconnectMySocket.bind(this));
        }
    }

    protected onCreateSearchForPartnerConnection(): void {
        this.socketClient.initializeSearchingSocket();
    }

    protected onUpdateSocketID(params: any[]): void {
        Settings.socketID = params[0];
    }

    protected onDisconnectMySocket(): void {
        this.socketClient.disconnect();
    }

    protected onPrivateMessage(params: any[]): void {
        this.socketClient.sendPrivateMessage(params);
    }

    protected onCreateSocketIoConnection(): void {
        if (_.isNull(this.socketClient) || _.isUndefined(this.socketClient)) {
            this.socketClient = this.getSocketIoClient();
            DatabaseConnector.socketClient = this.socketClient;
            this.socketClient.initializeClientSocket(this.onSocketInitiliazed.bind(this));
        }
    }

    protected onSocketInitiliazed(): void {
        console.log("%c AbstractConnectionModule -> Socket Initiliazed", "color: white; background:green");
        console.log("%c" + this.Name + " Elements Created!", "color: green");
        this.ElementsCreated = true;
        SignalsManager.DispatchSignal(SignalsType.MODULE_ELEMENTS_CREATED);
    }

    protected getSocketIoClient(): SocketClient {
        return new SocketClient();
    }

}
