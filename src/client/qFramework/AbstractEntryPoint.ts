// Created by: Sandru Andrei for Edgeflow on 7/11/2018

import {AbstractModule} from "./Abstracts/abstract-module";
import {AssetsLoader} from "./Loaders/assets-loader";
import {AbstractBackgroundModule} from "./AbstractModules/Background/abstract-background-module";
import {Layers} from "./Abstracts/layers";
import {AbstractConnectionModule} from "./AbstractModules/Connection/abstract-connection-module";
import {AbstractUserInterfaceModule} from "./AbstractModules/UserInterface/abstract-user-interface-module";
import {Settings} from "./Settings";
import {ConnectionSignalsType, SignalsType} from "./Signals/signal-types";
import {SignalsManager} from "./Signals/signals-manager";
import {AbstractSoundModule} from "./AbstractModules/Sound/abstract-sound-module";
import * as _ from "lodash";
// @ts-ignore
import * as BABYLON from '../babylonjs/babylon';
import {PockeySettings} from "../pockey-settings";


export class AbstractEntryPoint {
    protected gameModules: AbstractModule[];
    //the pixi loader that will load all the assets mapped to each module
    protected assetsLoader: AssetsLoader;
    protected name: string = "";

    public static stage: PIXI.Container;
    protected backgroundModule: AbstractModule;
    protected uiModule: AbstractModule;
    protected connectionModule: AbstractModule;
    protected soundModule: AbstractModule;
    protected allElementsCreated: boolean = false;
    public static renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    protected engine: any;
    public static camera: any;
    public static scene: BABYLON.Scene;
    protected isWebGL1: boolean;

    protected maxSubSteps: number = 10;
    protected fixedTimeStep: number = 60;
    protected oldTime: number;

    constructor() {
        this.name = "AbstractEntryPoint";

        this.checkDevice();
        this.setWindowSize();
        this.initializeBabylon();
        this.initializePixi();
        this.registerSignals();
        this.subscribeToSignals();
        this.createLayers();
        this.addModules();
        this.initializeSingletons();
        this.startLoadingAssets();
    }

    protected getCookieData(): void {
        SignalsManager.DispatchSignal(SignalsType.CHECK_COOKIE_DATA);
    }

    protected userDataChecked(): void {
        if (!this.allElementsCreated) {
            this.allElementsCreated = true;

            SignalsManager.DispatchSignal(SignalsType.ALL_MODULES_ELEMENTS_CREATED);
            SignalsManager.DispatchSignal(SignalsType.WINDOW_RESIZE);
        }

        requestAnimationFrame(this.frameAnimate.bind(this));
    }

    // protected connectToDataBase(): void {
    //     let dbConnector: DatabaseConnector = new DatabaseConnector();
    // }

    private setWindowSize(): void {
        Settings.stageWidth = window.innerWidth;
        Settings.stageHeight = window.innerHeight;
    }

    protected checkDevice(): void {
        if (this.isMobile()) {
            Settings.isMobile = true;
            console.log("%c AbstractEntryPoint -> running on MOBILE!", "background: green; color: white; font-weight:bold; ");
            return;
        }

        console.log("%c AbstractEntryPoint -> running on DESKTOP!", "background: green; color: white; font-weight:bold; ");
    }


    //here Pixi is initiated. Make sure you define the stage width and height before calling this method
    protected initializeBabylon(): void {
        let canvas: HTMLCanvasElement = document.getElementById("renderCanvas") as HTMLCanvasElement;

        // babylon.js rendering
        this.engine = new BABYLON.Engine(canvas, true);
        AbstractEntryPoint.scene = new BABYLON.Scene(this.engine);
        // AbstractEntryPoint.scene.posi
        // let camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -1000), AbstractEntryPoint.scene);
        AbstractEntryPoint.camera = new BABYLON.UniversalCamera("camera1", new BABYLON.Vector3(0, 0, -1000 - PockeySettings.BALL_RADIUS * 3 - 7), AbstractEntryPoint.scene);
        // camera.orthoTop = 20;
        // camera.orthoTop = 20;
        AbstractEntryPoint.camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;

        AbstractEntryPoint.camera.setTarget(BABYLON.Vector3.Zero());

        new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(-80, 60, -110), AbstractEntryPoint.scene);
        // light.intensity = 0.7;
        // let sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, this.scene);
        // sphere.position.y = 1;
        // let ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, this.scene);
        this.isWebGL1 = this.engine.webGLVersion === 1;
    }

    protected initializePixi(): void {

        /* var pixiRenderer = new PIXI.WebGLRenderer({
             context: engine._gl,
             view: engine.getRenderingCanvas(),
             width: engine.getRenderWidth(),
             height: engine.getRenderHeight(),
             clearBeforeRender: false,
             roundPixels: true,
             autoStart: false
         });
         var stage = new PIXI.Container();*/
        /////////////////////

        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;

        // SignalsManager.DispatchSignal(SignalsType.WINDOW_RESIZE, [this.stageWidth, this.stageHeight]);

        // PIXI.Texture.SC.DEFAULT = PIXI.Texture.SCALE_MODE.NEAREST;

        AbstractEntryPoint.renderer = PIXI.autoDetectRenderer(Settings.stageWidth, Settings.stageHeight, {
            /* backgroundColor: 0x0f404b,
             antialias: true,
             roundPixels: true,
             resolution: window.devicePixelRatio || 1,
             autoResize: true*/
            context: this.engine._gl,
            view: this.engine.getRenderingCanvas(),
            width: this.engine.getRenderWidth(),
            height: this.engine.getRenderHeight(),
            clearBeforeRender: true,
            roundPixels: true,
            autoResize: true,
            antialias: true,
            resolution: window.devicePixelRatio || 1,
            transparent: true
        });
        /*AbstractEntryPoint.renderer.view.style.position = "absolute";
        AbstractEntryPoint.renderer.view.style.top = "0px";
        AbstractEntryPoint.renderer.view.style.left = "0px";
        AbstractEntryPoint.renderer.view.style.zIndex = "-800";
        AbstractEntryPoint.renderer.view.style.width = "100%";
        AbstractEntryPoint.renderer.view.style.height = "100%";*/
        // console.log("la creare pixi: " + AbstractEntryPoint.renderer.view.parentNode.clientWidth);
        // AbstractEntryPoint.renderer.view.parentNode.clientHeight;
        // AbstractEntryPoint.renderer.view.style.overflow = "hidden";

        // var c = document.getElementById("canvas");
        // //@ts-ignore
        // var ctx = c.getContext("2d");
        //
        // // ctx.fillStyle="red";
        // // ctx.fillRect(20,20,75,50);
        // // ctx.globalCompositeOperation="source-over";
        // // ctx.fillStyle="blue";
        // // ctx.fillRect(50,50,75,50);
        // //
        // // ctx.fillStyle="red";
        // // ctx.fillRect(150,20,75,50);
        // //@ts-ignore
        // ctx.globalCompositeOperation = "destination-over";
        // AbstractEntryPoint.renderer.view.style.ctx.globalCompositeOperation='destination-over';

        // document.body.appendChild(AbstractEntryPoint.renderer.view);

        AbstractEntryPoint.stage = new PIXI.Container();
        /*if(Settings.isMobile){
            console.log("e mobil in plm");
            // this.stage.buttonMode = true;
            // this.stage.interactive = true;
            // this.stage.defaultCursor = "url(cursor.png) 3 2, auto";
            this.stage.buttonMode = true;
            this.stage.interactive = true;
            this.stage.hitArea = new PIXI.Rectangle(0, 0, 800, 600);
            this.stage.defaultCursor = "url(cursor.png) 3 2, auto";
        }*/

        // this.engine.runRenderLoop(() => {
        //
        //
        // });
        PIXI.ticker.shared.autoStart = false;
        PIXI.ticker.shared.stop();

        // PIXI.ticker.shared.add();

    }


    protected frameAnimate() {
        let newTime = Date.now();
        let deltaTime = newTime - this.oldTime;
        this.oldTime = newTime;
        if (deltaTime < 0) deltaTime = 0;
        if (deltaTime > 1000) deltaTime = 1000;
        let deltaFrame: number = deltaTime * 60 / 1000; //1.0 is for single frame

        this.onFrameAnimateFlag(deltaFrame);
        requestAnimationFrame(this.frameAnimate.bind(this));
    }

    protected onFrameAnimateFlag(deltaFrame: number): void {
        // PIXI.ticker.shared.update(deltaFrame);
        // AbstractEntryPoint.renderer.render(AbstractEntryPoint.stage);
        this.renderEngine();
        // AbstractEntryPoint.renderer.render(stage);
        _.forEach(this.gameModules, (module:AbstractModule)=>{
           module.update(deltaFrame);
        });
    }

    // requestAnimationFrame(animate);

    private renderEngine(): void {
        //@ts-ignore
        AbstractEntryPoint.renderer.reset();
        AbstractEntryPoint.renderer.render(AbstractEntryPoint.stage);

        AbstractEntryPoint.scene.autoClear = false;
        // tsphere.rotation.y += 0.01;
        AbstractEntryPoint.scene.render();
        this.engine.wipeCaches(true);
        // this.frameAnimate();
    }

    //all the modules used in the game should be mapped from here, before calling startLoadingAssets() as super()
    protected addModules() {
        //map the modules here before calling startLoadingAssets() by using registerModule(module)
        this.addConnectionModule();
        this.addBackgroundModule();
        this.addUIModule();
        this.addSoundModule();
    }

    protected addSoundModule(): void {
        this.soundModule = this.getSoundModule();
        this.registerModule(this.soundModule);
    }

    protected addBackgroundModule(): void {
        this.backgroundModule = this.getBackgroundModule();
        this.registerModule(this.backgroundModule);
    }

    protected addConnectionModule(): void {
        this.connectionModule = this.getConnectionModule();
        this.registerModule(this.connectionModule);
    }

    protected addUIModule(): void {
        this.uiModule = this.getUIModule();
        this.registerModule(this.uiModule);
    }

    //once every the textures have been mapped to its according module, all of them will be loaded.
    // When everything is loaded the callback method onAssetsLoadComplete is called and will tell each module
    // that it can start do his thing in  module.createElements();
    protected startLoadingAssets() {

        if (_.isNull(this.assetsLoader) || _.isUndefined(this.assetsLoader)) {
            this.assetsLoader = new AssetsLoader();
        }

        this.addFontsToLoad();

        console.log(this.gameModules);
        _.forEach(this.gameModules, (module: AbstractModule) => {
            _.forEach(module.AssetsToLoad, (asset: string) => {

                this.assetsLoader.addAssetToLoad(asset);

            });
        });


        this.assetsLoader.StartLoading();
    }

    protected addFontsToLoad(): void {
        // this.assetsLoader.addFontToLoad();
    }

    protected onAssetsLoadComplete(): void {
        //when each asset of each module is loaded that module will start creating the elements
        _.forEach(this.gameModules, (module: AbstractModule) => {
            module.createElements();
            // this.stage.addChild(module.Layer);
        });

    }

    protected registerModule(module: AbstractModule) {
        if (_.isNull(this.gameModules) || _.isUndefined(this.gameModules)) {
            this.gameModules = [];
        }

        this.gameModules.push(module);
    }

    protected getBackgroundModule(): AbstractModule {
        let backgroundModule: AbstractBackgroundModule = new AbstractBackgroundModule();

        backgroundModule.Layer = this.getLayer(Layers.BackgroundLayer);

        return backgroundModule;
    }

    protected getSoundModule(): AbstractModule {
        let soundModule: AbstractSoundModule = new AbstractSoundModule();

        soundModule.Layer = this.getLayer(Layers.DefaultLayer);

        return soundModule;
    }

    protected getUIModule(): AbstractModule {

        let uiModule: AbstractModule = new AbstractUserInterfaceModule();
        uiModule.Layer = this.getLayer(Layers.UILayer);

        return uiModule;
    }

    protected getConnectionModule(): AbstractModule {

        console.log("intra la get connection module in: " + this.name);
        let connectionModule: AbstractModule = new AbstractConnectionModule();
        return connectionModule;
    }

    public windowResize(stageWidth: number, stageHeight: number) {
        if (Settings.stageWidth == stageWidth && Settings.stageHeight == stageHeight) {
            return;
        }

        Settings.stageWidth = stageWidth;
        Settings.stageHeight = stageHeight;

        // var ratio = Settings.stageWidth / Settings.stageHeight ;
        // var zoom = AbstractEntryPoint.camera.orthoTop;
        // var newWidth = zoom * ratio;
        // AbstractEntryPoint.camera.orthoLeft = -Math.abs(newWidth);
        // AbstractEntryPoint.camera.orthoRight = newWidth;
        // AbstractEntryPoint.camera.orthoBottom = -Math.abs(zoom);

        // if(window.innerWidth >= window.innerHeight)
        // {
        //     Settings.stageWidth = window.innerWidth;
        //     Settings.stageHeight = window.innerHeight;
        // }
        // else
        // {
        //     Settings.stageWidth = window.innerHeight;
        //     Settings.stageHeight = window.innerWidth;
        // }
        /*
        Settings.stageWidth = window.innerWidth;
        Settings.stageHeight = window.innerHeight;*/
//             console.log("la window resize: w - h : " + Settings.stageWidth, Settings.stageHeight);
        // this.stageWidth = window.innerWidth;
        // this.stageHeight = window.innerHeight;s
        // AbstractEntryPoint.renderer.view.style.width = "100%";//Settings.stageWidth.toString() + "px";
        // AbstractEntryPoint.renderer.view.style.height = Settings.stageHeight.toString() + "px";
        // console.log("se face resize: " + Settings.stageWidth, Settings.stageHeight);
        AbstractEntryPoint.renderer.resize(Settings.stageWidth, Settings.stageHeight);

        SignalsManager.DispatchSignal(SignalsType.WINDOW_RESIZE);
    }

    private createLayers() {

        // Layers.LayerOrder.reverse();
        for (let i = 0; i < Layers.LayerOrder.length; i++) {
            let layerName: string = Layers.LayerOrder[i];
            let layer: PIXI.Container = new PIXI.Container();
            layer.name = layerName;
            AbstractEntryPoint.stage.addChild(layer);
        }
        // _.forEach(Layers.LayerOrder, (layerName: string) => {
        //     let layer: Container = new Container();
        //     layer.nickname = layerName;
        //     this.stage.addChild(layer);
        // })
    }

    protected getLayer(layerName: string): PIXI.Container {
        return AbstractEntryPoint.stage.getChildByName(layerName) as PIXI.Container;
    }

    protected initializeSingletons() {
        SignalsManager.Instance();
        // TouchHandler.Instance();
    }

    private subscribeToSignals() {
        SignalsManager.GetSignal(SignalsType.ASSETS_LOADED).add(this.onAssetsLoadComplete.bind(this));
        SignalsManager.GetSignal(SignalsType.MODULE_ELEMENTS_CREATED).add(this.onModuleElementsCreated.bind(this));
    }

    protected registerSignals() {
        SignalsManager.CreateNewSignal(SignalsType.CHECK_COOKIE_DATA);
        SignalsManager.CreateNewSignal(SignalsType.COOKIE_DATA_CHECKED);
        SignalsManager.CreateNewSignal(SignalsType.ASSETS_LOADED);
        SignalsManager.CreateNewSignal(SignalsType.MODULE_ELEMENTS_CREATED);
        SignalsManager.CreateNewSignal(SignalsType.ALL_MODULES_ELEMENTS_CREATED);
        SignalsManager.CreateNewSignal(SignalsType.WINDOW_RESIZE);
        SignalsManager.CreateNewSignal(SignalsType.CREATE_SOUND_CACHE);
        SignalsManager.CreateNewSignal(SignalsType.PLAY_SOUND);
        SignalsManager.CreateNewSignal(SignalsType.STOP_SOUND);
        SignalsManager.CreateNewSignal(SignalsType.CHANGE_BACKGROUND);
        // SignalsManager.CreateNewSignal(SignalsType.BEGIN_ROUND);
        SignalsManager.CreateNewSignal(ConnectionSignalsType.CREATE_SEARCH_FOR_PARTNER_CONNECTION);
        SignalsManager.CreateNewSignal(ConnectionSignalsType.SOCKET_IO_CONNECTION_CREATED);
        SignalsManager.CreateNewSignal(ConnectionSignalsType.SOCKET_IO_DISCONNECTED);
        SignalsManager.CreateNewSignal(ConnectionSignalsType.PRIVATE_MESSAGE);
        SignalsManager.CreateNewSignal(ConnectionSignalsType.UPDATE_SOCKET_ID);
        SignalsManager.CreateNewSignal(ConnectionSignalsType.OPPONENT_DISCONNECTED);
        SignalsManager.CreateNewSignal(ConnectionSignalsType.DISCONNECT_MY_SOCKET);
        SignalsManager.CreateNewSignal(ConnectionSignalsType.GAME_SETUP_RECEIVED);

        SignalsManager.AddSignalCallback(SignalsType.COOKIE_DATA_CHECKED, this.userDataChecked.bind(this));
    }

    private onModuleElementsCreated(): void {
        let modulesCounter: number = 0;

        _.forEach(this.gameModules, (module: AbstractModule) => {
            if (module.ElementsCreated) {

                modulesCounter++;
            }
        });

        if (modulesCounter == this.gameModules.length) {
            this.getCookieData();
        }

        // TweenMax.delayedCall(0.05, this.windowResize, [Settings.stageWidth, Settings.stageHeight]);

    }

    private isMobile(): boolean {
        if (navigator.userAgent.match(/Mobi/)) {
            return true;
        }

        if ('screen' in window && window.screen.width < 1366) {
            return true;
        }

        // @ts-ignore
        let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

        if (connection && connection.type === 'cellular') {
            return true;
        }

        return false;
    }

}


