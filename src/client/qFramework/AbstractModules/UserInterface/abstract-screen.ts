/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/5/2019
 */

export class AbstractScreen {
    get div(): HTMLDivElement | undefined {
        return this._div;
    }

    set div(value: HTMLDivElement | undefined) {
        this._div = value;
    }

    private _div: HTMLDivElement | undefined;
    protected titleDiv: HTMLDivElement | undefined;

    constructor() {

    };

    protected assignDivs(): void {
    };

    // @ts-ignore
    public show(params: any = null): void {
        this._div.style.display = "flex";
    };

    public hide(): void {
        this._div.style.display = "none";
    };

    // @ts-ignore
    public updateText(text: string): void {

    }
}
