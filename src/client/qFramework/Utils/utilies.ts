/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/19/2019
 */
export class Utilities{
    public static BabylonHexToRGB(color: number): BABYLON.Color4 {
        let colorToHex: string = ('00000' + (color | 0).toString(16)).substr(-6);

        let r: number = parseInt(colorToHex.substring(0, 2), 16) / 255;
        let g: number = parseInt(colorToHex.substring(2, 4), 16) / 255;
        let b: number = parseInt(colorToHex.substring(4, 6), 16) / 255;

        return new BABYLON.Color4(r, g, b, 1);
    }

    public static ColorToHTMLString(color:number):string
    {
        return '#' + ('00000' + (color | 0).toString(16)).substr(-6);
    }

    public static ColorToPlainString(color:number):string
    {
        return '0x' + ('00000' + (color | 0).toString(16)).substr(-6);
    }
}

