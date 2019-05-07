// Created by: Sandru Andrei for Edgeflow on 7/11/2018


import {Settings} from "../Settings";
import {SignalsType} from "../Signals/signal-types";
import {SignalsManager} from "../Signals/signals-manager";
import * as _ from "lodash";

export class AbstractModule {

    //files that the loader module should load
    public AssetsToLoad: string[];
    public Name: string = "AbstractModule";
    public Layer: PIXI.Container = new PIXI.Container();
    public ElementsCreated: boolean = false;

    constructor() {
        this.registerSignalsHandlers();
        this.AssetsToLoad = [];
    }

    public addAssetToLoad(path: string): void {
        this.AssetsToLoad.push(path);
    }

    public createElements() {
        console.log("%c" + this.Name + " Elements Created!", "color: green");
        this.ElementsCreated = true;
        SignalsManager.DispatchSignal(SignalsType.MODULE_ELEMENTS_CREATED);

        // if (_.isNull(this.Display) || _.isUndefined(this.Display)) {
        //     this.Display = new Container();
        // }
    }


    protected addChild(child: PIXI.DisplayObject):void {
        if (_.isNull(this.Layer) || _.isUndefined(this.Layer)) {
            console.log("%c" + this.Name + " LAYER not set!", "color: red");
        }
        this.Layer.addChild(child);
    }

    protected removeChild(child: PIXI.DisplayObject):void {
        if (_.isNull(this.Layer) || _.isUndefined(this.Layer)) {
            console.log("%c" + this.Name + " LAYER not set!", "color: red");
        }
        this.Layer.removeChild(child);
    }


    protected registerSignalsHandlers() {
        SignalsManager.AddSignalCallback(SignalsType.WINDOW_RESIZE, this.onResize.bind(this));
    }

    protected onResize(): void {

        if (Settings.stageWidth >= Settings.stageHeight) {
            if (Settings.isMobile) {
                this.handleMobileLandscape();
            } else {
                this.handleDesktopLandscape();
            }

        } else {
            if (Settings.isMobile) {
                this.handleMobilePortrait();
            } else {
                this.handleDesktopPortrait();

            }
        }
        // console.log("%c" + this.Name + " onResize", "color: red");

    }

    protected handleMobileLandscape(): void {

    }

    protected handleMobilePortrait(): void {

    }

    protected handleDesktopLandscape(): void {
    }

    protected handleDesktopPortrait(): void {
        this.handleDesktopLandscape();
    }

    // @ts-ignore
    public update(deltaFrame: number) {

    }
}

