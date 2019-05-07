/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 11/20/2018
 */
import {AbstractModule} from "../../Abstracts/abstract-module";
import {SignalsManager} from "../../Signals/signals-manager";
import {SignalsType} from "../../Signals/signal-types";
import * as _ from "lodash";
import {Howl} from "howler";

export interface SoundVO {
    soundName: string,
    soundURL?: string,
    loop?: boolean,
    volume?: number,
    enableMulti: boolean
}

export class AbstractSoundModule extends AbstractModule {

    //@ts-ignore
    private sounds: { [id: string]: Howl; };

    constructor() {

        super();

        this.Name = "AbstractSoundModule";
        this.sounds = {};
    }


    protected registerSignalsHandlers(): void {
        super.registerSignalsHandlers();

        SignalsManager.AddSignalCallback(SignalsType.CREATE_SOUND_CACHE, this.onCreateSoundCache.bind(this));
        SignalsManager.AddSignalCallback(SignalsType.PLAY_SOUND, this.onPlaySound.bind(this));
        SignalsManager.AddSignalCallback(SignalsType.STOP_SOUND, this.onStopSound.bind(this));
    }

    protected onCreateSoundCache(params: any[]): void {
        let soundName: string = params[0];

        // let s = new Howl({src: soundName});
        if (!this.sounds[soundName]) {
            this.sounds[soundName] = new Howl({src: soundName});//.add(soundName, {
            // url: soundData,
            // preload: true
            // });
        }
    }

    protected onStopSound(params: SoundVO[]): void {
        let soundVO: SoundVO = params[0] as SoundVO;
        if (!this.sounds[soundVO.soundName]) {
            console.warn("SOUND - " + soundVO.soundName + " - WAS NOT ADDED TO THE PRELOADER!");

            return;
        }

        this.sounds[soundVO.soundName].stop();
    }


    protected onPlaySound(params: any[]): void {


        let soundVO: SoundVO = params[0] as SoundVO;
        {
            if (!this.sounds[soundVO.soundName]) {
                console.warn("SOUND - " + soundVO.soundName + " - WAS NOT ADDED TO THE PRELOADER!");
                return;
            }
        }
        if (_.isNull(soundVO.volume) || _.isUndefined(soundVO.volume)) {
            soundVO.volume = 1;
        }
        // if (soundVO.soundName == PockeySoundURLS.BALL_TO_BALL_HIT) {
        //     console.log("s-a cerut ball to ball hit");
        // }
        /*interface PlayOptions {
            start?: number;
            end?: number;
            speed?: number;
            loop?: boolean;
            volume?: number;
            sprite?: string;
            muted?: boolean;
            complete?: CompleteCallback;
            loaded?: LoadedCallback;
        }*/

        // let playOptions:PlayOptions = {
        //   loop:soundVO.loop,
        //   // volume: soundVO.volume
        // };
        // // PixiSound.play(soundVO.soundName, {loop: soundVO.loop});
        // PixiSound.play(soundVO.soundName, playOptions);


        // if (!PIXI.sound.exists(soundVO.soundName)) {
        //     PIXI.sound.add(soundVO.soundName, {
        //         url: soundVO.soundURL,
        //         preload: true
        //     });
        // }

        // PIXI.sound.play('boing');
        // let sound = PIXI.sound.Sound.from({
        //     url: soundVO.soundName,
        //     volume: soundVO.volume
        // });
        // // if(PIXI.sound.exists('boing'))
        // sound.play();

        if (!soundVO.enableMulti && this.sounds[soundVO.soundName].playing()) {
            this.sounds[soundVO.soundName].stop();
        }
        this.sounds[soundVO.soundName].volume(soundVO.volume);
        this.sounds[soundVO.soundName].play();
    }
}
