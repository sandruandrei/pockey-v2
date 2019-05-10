/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/27/2019
 */
import "@babel/polyfill";
import {Server} from "node-static";
import * as http from "http";
import socketIO from 'socket.io';
import {Pool} from "pg";

import {
    FrameworkSocketEvents, FrameworkSocketMessages,
    FrameworkSocketNamespaces
} from "../client/qFramework/AbstractModules/Connection/connection-channels-and-messages";

import {PockeyRoom} from "./pockey-room";
import {PockeyPlayerServer} from "./pockey-player-server";
import {Player} from "../common/player";
import {WinStatus} from "../common/pockey-value-objects";

export class PockeyServerIndex {
    protected file: any;
    protected httpServer: any;
    protected socketIo: any;
    protected socketIsFree: boolean = true;
    protected databaseConnected: boolean = false;
    protected databasePool: Pool | undefined;
    protected rooms: PockeyRoom[] = [];
    protected players: PockeyPlayerServer[] = [];

    // protected playingNamespace

    constructor() {
        this.initializeServer();
        this.initializeDb();
        this.createSocket();
        // this.createGame();
    };

    private initializeServer() {
        this.file = new Server('dist', { // bin is the folder containing our html, etc
            cache: 0,	// don't cache
            // @ts-ignore
            gzip: true	// gzip our assets
        });

        let port = process.env.PORT || 8080;
        // create our server
        this.httpServer = http.createServer((request, response) => {
            request.addListener('end', () => {
                this.file.serve(request, response);
            });
            request.resume();
        });

        this.httpServer.on('listening', function () {
            console.log('ok, server is running');
        });

        this.httpServer.listen(port, '0.0.0.0');
    }

    private initializeDb(): void {
        this.databasePool = new Pool({
            user: 'npvswhggxgsgxk',
            host: 'ec2-54-225-98-131.compute-1.amazonaws.com',
            database: 'd1uk2vnpdjl28q',
            password: '556e5013ea1dec59d2daa5d7bff223ec028c16da4ac577db94e78dbc75471965',
            port: 5432,
            ssl: true
        });

        this.databasePool.on('error', (err) => {
            console.error('Unexpected error on idle client', err);
            process.exit(-1);
        });

        this.databasePool.connect((err) => {
            if (err) {
                throw err;
            } else {
                console.log("s-a logat, merge.");
                this.databaseConnected = true;
            }
        });
    }

    private createSocket() {
        this.socketIo = socketIO();
        this.socketIo.serveClient(true); // the server will serve the client js file
        this.socketIo.attach(this.httpServer);

        this.handleSocketEvents();
    }

    private handleSocketEvents(): void {

        this.socketIo.on('connection', (socket: any) => {
            let player: PockeyPlayerServer = new PockeyPlayerServer();
            player.setSocket(socket);
            this.players.push(player);

            socket.emit(FrameworkSocketEvents.newConnection, player.data.socketID);

            console.log('a user connected. users connected: ' + this.players.length);
            //todo aici trebuie sa te ocupi de disconnect dar si pe celalalte socketuri

            player.socket.on(FrameworkSocketEvents.getSignedInUserData, (username: string) => {
                console.log('-> get signed in player');
                if (this.databaseConnected) {
                    this.checkForUserID(player, username);
                }
            });

            player.socket.on(FrameworkSocketEvents.updatePlayerDatabase, (data: any) => {
                console.log('-> update player database');

                if (this.databaseConnected) {
                    this.updateUserDb(player, data);
                }
            });

            player.socket.on(FrameworkSocketEvents.updatePlayerData, (data: any) => {
                console.log('-> update player data');
                player.updatePlayerData(data);
                // if (this.databaseConnected) {
                //     this.updateUserDb(player, data);
                // }
            });

            player.socket.on('disconnect', () => {

                // console.log("a iesit de pe canalul pacii: " + socket.id);
                this.players.forEach((player: PockeyPlayerServer, index: number) => {
                    if (player.data.socketID === socket.id) {
                        this.players.splice(index, 1);

                        player.selfDestroy();
                    }
                });

                console.log('a user left. users connected: ' + this.players.length);

                // socket.to(room).emit(FrameworkSocketEvents.leftRoom, socket.id);
                // socket.disconnect();
            });
        });

        /*this.socketIo.on('disconnect', (socket: any) => {
            this.players.forEach((player: Player, index: number) => {
                if (player.data.socketID === socket.id) {
                    this.players.splice(index, 1);
                }
            });
            // console.log('user disconnected');
            // connectCounter--;
            console.log('a user left. users connected: ' + this.players.length);
        });*/
        // this.socketIo.on('disconnect', (socket) => {
        //s
        // });
        let lookingForPartnerNamespace = this.socketIo.of(FrameworkSocketNamespaces.SEARCH);
        lookingForPartnerNamespace.on('connection', (socket: any) => {
            let id: string = socket.id.toString().replace(FrameworkSocketNamespaces.SEARCH, '').replace("#", "");
            let player: PockeyPlayerServer = this.getPlayerByID(id, socket);
            player.isLookingForPartner = true;

            console.log(FrameworkSocketNamespaces.SEARCH + ' -> someone connected: ' + player.data.socketID);

            this.matchMaker(player);
            /*socket.on(FrameworkSocketEvents.letsConnect, (msg: any, id: string, partnerID: string) => {
                socket.broadcast.emit(FrameworkSocketEvents.letsConnect, msg, id, partnerID);
            });*/
        });

        let playingNamespace = this.socketIo.of(FrameworkSocketNamespaces.PLAY);

        playingNamespace.on('connection', (socket: any) => {

            let id: string = socket.id.toString().replace(FrameworkSocketNamespaces.PLAY, '').replace("#", "");
            let player: PockeyPlayerServer = this.getPlayerByID(id, socket);

            player.socket.on(FrameworkSocketEvents.joinRoom, (roomID: string) => {
                player.socket.join(roomID);

                let pockeyRoom: PockeyRoom = this.getRoomByID(roomID, playingNamespace);
                pockeyRoom.assignPlayer(player);
                // socket.broadcast.emit(FrameworkSocketEvents.joinRoom, room, id);
                player.socket.emit(FrameworkSocketEvents.joinedRoom, roomID);

                // console.log("on join room. room nickname: " + roomID);

                socket.on('disconnect', function () {

                    console.log("a iesit de pe canalul pacii: " + socket.id);

                    socket.to(roomID).emit(FrameworkSocketEvents.leftRoom, socket.id);
                    socket.disconnect();
                });
            });

            player.socket.on(FrameworkSocketEvents.privateMessage, (room: any, messageType: FrameworkSocketMessages, messageData: any) => {
                if (messageType == FrameworkSocketMessages.HELLO)
                    console.log("se face helloul");

                socket.broadcast.to(room).emit(FrameworkSocketEvents.privateMessage, messageType, messageData);

            });

            socket.on(FrameworkSocketEvents.disconnectMySocket, () => {

            });
        });
    }

    private matchMaker(player: PockeyPlayerServer): void {
        this.players.forEach((otherPlayer: PockeyPlayerServer) => {
            if (player != otherPlayer && otherPlayer.isLookingForPartner) {
                console.log("we have a room");
                player.isLookingForPartner = false;
                otherPlayer.isLookingForPartner = false;

                let roomID: string = player.data.socketID + "#" + otherPlayer.data.socketID;

                player.socket.emit(FrameworkSocketEvents.roomCreated, roomID);
                otherPlayer.socket.emit(FrameworkSocketEvents.roomCreated, roomID);

                return true;
            }
        });
    }

    private getPlayerByID(id: string, socket: any): PockeyPlayerServer {
        let playerByID: PockeyPlayerServer = new PockeyPlayerServer();
        // console.log("get player by id -> searching: " + id);
        this.players.forEach((player: PockeyPlayerServer) => {
            if (player.data.socketID === id) {
                // console.log("get player by id -> found: " + id);
                playerByID = player;
                playerByID.setSocket(socket);
                return true;
            }
        });

        playerByID.socket = socket;

        return playerByID;
    }

    private getRoomByID(roomID: string, io: any): PockeyRoom {
        // let playerByID: Player = new Player("");
        console.log("get room by id -> searching: " + roomID);
        let roomByID: PockeyRoom;

        this.rooms.forEach((room: PockeyRoom) => {
            if (room.id == roomID) {
                roomByID = room;
                return true;
            }
            // if (player.data.socketID === id) {
            //     console.log("get player by id -> found: " + id);
            //     playerByID = player;
            //     return true;
            // }
        });

        if (!roomByID) {
            roomByID = new PockeyRoom(roomID, io, this.deleteRoom.bind(this));
            this.rooms.push(roomByID);
        }

        return roomByID;
    }

    private deleteRoom(roomToDelete:PockeyRoom):void
    {
        const index = this.rooms.indexOf(roomToDelete, 0);
        if (index > -1) {
            this.rooms.splice(index, 1);
        }

        console.log("room deleted");
    }

    private updateUserDb(player: PockeyPlayerServer, data: any): void {
        let sqlText: string = "UPDATE pockey_table SET " + data["column"] + "='" + data["value"] + "' WHERE user_id='" + data["userID"] + "'";

        if (data["type"] == "winStatus") {
            if (data["value"] == WinStatus.WIN) {
                // sqlText = "UPDATE USER_TABLE SET " + data["column"] + "='points' + 10 WHERE GID='Yojimbo'";
                sqlText = 'UPDATE public."USER_TABLE" SET "points" = "points" + 10 WHERE "USER_TABLE"."GID" = ' + "'Yojimbo'";
                // console.log("sqlText la win: " + sqlText);
            } else if (data["value"] == WinStatus.LOST) {
                sqlText = 'UPDATE public."USER_TABLE" SET "points" = "points" + 10 WHERE "USER_TABLE"."GID" = ' + "'Yojimbo'";
            }
        }

        console.log("sqlText: " + sqlText, "type: " + data["type"], "value: " + data["value"]);


        (async () => {
            const client = await this.databasePool.connect();
            try {
                // @ts-ignore
                const res = await client.query(sqlText);
                // console.log("acum se face");
                this.checkForUserID(player, data["userID"]);

            } finally {
                client.release();
            }
        })().catch(e => console.log(e.stack));

    }

    private checkForUserID(player: PockeyPlayerServer, username: any): void {
        console.log("checking db for user_id: " + username);
        const query = {
            // give the query a unique nickname
            name: 'fetch-user',
            text: 'SELECT * FROM pockey_table WHERE USER_ID = $1',
            values: [username]
        };

        this.databasePool.query(query)
            .then(res => {

                if (res.rows[0] == undefined || res.rows[0] == "undefined" || res.rows[0] == null) {
                    this.createNewUser(player.socket, username);
                } else {
                    player.updatePlayerData(res.rows[0]);
                }
                // console.log(res.rows[0]); // ['Brian', 'Carlson']
            })
            .catch(e => {

                console.error(e.stack)
            })
    }

    private createNewUser(player: Player, username: any): void {
        console.log("creating new user: " + username);
        const createNewUserQuery =
            {
                name: 'create-new-user',
                text: 'INSERT INTO pockey_table(user_id) VALUES($1)',
                values: [username]
            };

        this.databasePool.query(createNewUserQuery)
        // @ts-ignore
            .then(res => {
                /* console.log("new user created. user saved into db");
                 this.socketIo.emit(FrameworkSocketEvents.getSignedInUserData, res.rows[0]);*/
                this.checkForUserID(player.socket, username);
            })
            .catch(e => {
                console.error(e.stack)
            });
    }


    /* private createGame(): void {
         this.gameEngine = new PockeyGameEngineForServer({traceLevel: Trace.TRACE_NONE});
         this.serverEngine = new PockeyServerEngine(this.socketIo, this.gameEngine, {debug: {}, updateRate: 6});
         // start the game
         // this.serverEngine.start();
     }*/
}

new PockeyServerIndex();