import {AbstractConnectionModule} from "../../qFramework/AbstractModules/Connection/abstract-connection-module";
import {SocketClient} from "../../qFramework/AbstractModules/Connection/socket-client";
import {PockeySocketClient} from "./pockey-socket-client";
import {PockeyLoginHandler} from "./pockey-login-handler";

export class PockeyConnectionModule extends AbstractConnectionModule {

    protected registerSignalsHandlers(): void {
        super.registerSignalsHandlers();
    }

    protected getSocketIoClient(): SocketClient {
        return new PockeySocketClient();
    }

    protected createLoginHandler(): void {
        new PockeyLoginHandler();
    }
}