import {SocketClient} from "../../qFramework/AbstractModules/Connection/socket-client";
import {PockeyPlayerManager} from "../../pockey-player-manager";

export class PockeySocketClient extends SocketClient {

    protected onSocketInitialized(): void {
        this.createClientPlayer();
    }

    protected onPlayingSocketInitialized(): void {
        PockeyPlayerManager.Instance().player.switchToPlayingSocket(this.playingSocket);
    }

    private createClientPlayer() {
        console.log("create createClientPlayer!!!!!");

        PockeyPlayerManager.Instance().player.setSocket(this.socket);
        // this.socket.on(FrameworkSocketEvents.updatePlayerDataFromServer, this.updatePlayerData.bind(this));
        // PockeyPlayerManager.Instance().player.socket.
    }

    // private updatePlayerData(data:PockeyPlayerData):void
    // {
    //     PockeyPlayerManager.Instance().player.updatePlayerData(data);
    //     console.log("muiecacasrakdmsalmdaslnfnk");
    // }

    /*protected handlePrivateMessage(messageType: string, messageData: any): void {
        super.handlePrivateMessage(messageType, messageData);
        switch (messageType) {

            case PockeySocketMessages.WATCH: {
                SignalsManager.DispatchSignal(PockeyConnectionSignals.WATCH, [messageData]);
                break;
            }
            case PockeySocketMessages.OPPONENT_SETTINGS: {
                SignalsManager.DispatchSignal(PockeyConnectionSignals.OPPONENT_SETTINGS, [messageData]);
                break;
            }
            case PockeySocketMessages.YOUR_TURN: {
                SignalsManager.DispatchSignal(PockeyConnectionSignals.YOUR_TURN, [messageData]);
                break;
            }
            case PockeySocketMessages.OPPONENT_REMATCH: {
                SignalsManager.DispatchSignal(PockeyConnectionSignals.OPPONENT_NEXT_ROUND, [messageData]);
                break;
            }
        }
    }*/

}