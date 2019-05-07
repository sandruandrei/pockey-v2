/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 10/31/2018
 */

export class TutorialMenu {
    private howToPlayButton: HTMLDivElement;
    private howToButtonClicked: boolean = false;
    private howToPlayImage: HTMLDivElement;

    constructor() {
        this.howToPlayButton = document.getElementById("HowToPlayButtonHolder") as HTMLDivElement;
        this.howToPlayImage = document.getElementById("HowToPlayImage") as HTMLDivElement;
        let buttonBg: HTMLDivElement = this.howToPlayButton.querySelector('.normalButtonBackground') as HTMLDivElement;
//                 console.log("how to clicked la constructor: " + this.howToButtonClicked);

        this.howToPlayButton.onclick = () => {
            this.howToButtonClicked = (!this.howToButtonClicked);
            console.log("how to clicked la click: " + this.howToButtonClicked);
            if (this.howToButtonClicked) {
                this.howToPlayButton.style.borderColor = "#ffffff";
                buttonBg.style.backgroundColor = "#ffffff";
                buttonBg.style.color = "#2D899D";


                this.howToPlayImage.style.background = "none";
                let random: number = Math.random() * 50;

                this.howToPlayImage.style.background = "url(Assets/Desktop/Images/howtoplay.gif?v=" + random.toString() + ")  center center / 97% no-repeat";

                (document.getElementById("HowToPlayImage") as HTMLDivElement).style.display = "block";
                (document.getElementById("FbTwitterPromoHolder") as HTMLDivElement).style.display = "none";
                (document.getElementById("ShareButtonsHolder") as HTMLDivElement).style.display = "none";
            } else {

                this.howToPlayButton.style.borderColor = "";
                buttonBg.style.backgroundColor = "";
                buttonBg.style.color = "";
                this.howToPlayImage.style.background = "none";

                (document.getElementById("HowToPlayImage") as HTMLDivElement).style.display = "none";
                (document.getElementById("FbTwitterPromoHolder") as HTMLDivElement).style.display = "flex";
                // if(Settings.isMobile && Settings.stageHeight > 228)
                // {
                (document.getElementById("ShareButtonsHolder") as HTMLDivElement).style.display = "block";
                // }

            }
        };

    }
}