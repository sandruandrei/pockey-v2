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
import {InventoryButton} from "./inventory-button";
import {InventoryVO, PockeySettings} from "../../../../../pockey-settings";
import {InventoryBox} from "./inventory-box";
import {TweenMax} from "gsap";
import {InventoryItemsHolderButton} from "./inventory-items-holder-buttons";
import {
    DatabaseConnector,
    DatabaseObject
} from "../../../../../qFramework/AbstractModules/Connection/database-connector";
import {SignalsManager} from "../../../../../qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../../../../SignalsModule/pockey-signal-types";
import * as _ from "lodash";
import {Settings} from "../../../../../qFramework/Settings";
import {InventoryButtonMobile} from "./inventory-button-mobile";
import {SignalsType} from "../../../../../qFramework/Signals/signal-types";
import {PockeyPlayerManager} from "../../../../GameModule/pockey-player-manager";


export class PockeyInventoryMenu {
    private inventoryButtonsHolder: HTMLDivElement;
    private inventoryButtons: InventoryButton[];

    private boxesHolder: HTMLDivElement;
    private holderTween: TweenMax;
    private boxesHolderWrapper: HTMLDivElement;
    private boxes: InventoryBox[];
    private itemsArray: InventoryVO[];

    // private currentColumnIndex: number = 0;
    private columnsNumber: number = 0;

    private nextColumnBtn: InventoryItemsHolderButton;
    private prevColumnBtn: InventoryItemsHolderButton;

    private equipBtn: HTMLDivElement;

    private bigAvatar: HTMLDivElement;
    private itemNameDiv: HTMLDivElement;

    private currentActiveItem: InventoryVO;
    private columnWidth: number = 0;
    // @ts-ignore
    private columnPadding: number = 0;
    // @ts-ignore
    private offsetLimit: number;

    constructor() {
        this.itemsArray = [];
        this.handleItemDescriptionPanel();
        this.handleInventoryBoxes();
        this.handleInventoryButtons();

        SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_IN, this.onPlayerSignedIn.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.PLAYER_SIGNED_OUT, this.onPlayerSignedOut.bind(this));
        SignalsManager.AddSignalCallback(PockeySignalTypes.INVENTORY_ITEM_UPDATED, this.onInventoryItemUpdated.bind(this));
        SignalsManager.AddSignalCallback(SignalsType.ALL_MODULES_ELEMENTS_CREATED, this.onAllModulesElementsCreated.bind(this));
    }

    private onAllModulesElementsCreated(): void {
        for (let i = this.inventoryButtons.length; i--; i >= 0) {
            this.inventoryButtons[i].activate();
        }

        // this.moveHolderToOffset(0, true);
    }

    private onInventoryItemUpdated(): void {
        // if(params[0] == "true")
        // {
        //     return;
        // }
        this.updateBoxes(this.itemsArray);
    }

    private onPlayerSignedIn(): void {
        _.forEach(this.inventoryButtons, (button: InventoryButton) => {
            button.onSignedIn();
        })
    }

    private onPlayerSignedOut(): void {
        _.forEach(this.inventoryButtons, (button: InventoryButton) => {
            button.onSignedOut();
        });

        this.updateBoxes(this.itemsArray);

        this.moveHolderToOffset(0, true);
    }

    private handleItemDescriptionPanel(): void {
        this.bigAvatar = document.getElementById("InventoryBigAvatar") as HTMLDivElement;
        this.itemNameDiv = document.getElementById("ItemNameText") as HTMLDivElement;
    }

    private handleInventoryBoxes(): void {
        this.boxesHolder = document.getElementById("ItemsHolder") as HTMLDivElement;
        this.boxesHolderWrapper = document.getElementById("ItemsHolderWrapper") as HTMLDivElement;
        this.boxesHolderWrapper.classList.add("inventoryRightSideMask");
        this.boxes = [];

        /* var x = this.boxesHolder.querySelector('.itemsColumn');
         var initialWidth = x.clientWidth;
         console.log("initialWidth : " + initialWidth);

        this.columnWidth = (this.boxesHolder.children[0] as HTMLDivElement).offsetWidth;
         console.log("offset width: " + this.columnWidth);
         // console.log("outer width: " + column.outerWidth);
         this.columnWidth = (this.boxesHolder.children[0] as HTMLDivElement).scrollWidth;
         console.log("scroll width: " + this.columnWidth);*/

        // let counter: number = 0;
        _.forEach(this.boxesHolder.children, (column: Element) => {
            this.columnsNumber++;

            this.columnPadding = +(((column as HTMLDivElement).style.marginRight).replace("px", ""));
            // console.log("offset width: " + column.);
            // // console.log("outer width: " + column.outerWidth);
            // console.log("scroll width: " + column.scrollWidth);
            // console.log("parent node width: " + column.parentNode.);
            _.forEach(column.children, (item: Element) => {
                let box: InventoryBox = new InventoryBox(item as HTMLDivElement, this.showItemDescription.bind(this));
                this.boxes.push(box);
                // counter++;
            });
        });

        TweenMax.delayedCall(0.5, () => {
            if (this.columnWidth == 0) {
                this.columnWidth = this.boxesHolder.scrollWidth / this.boxesHolder.children.length;
            }
        });


        // holderWidth = holderWidth.replace("px", "");


        //console.log("curr col index: " + this.currentColumnIndex);
    }

    private showCategory(category: InventoryVO[]): void {
        if (this.columnWidth == 0) {
            this.columnWidth = this.boxesHolder.scrollWidth / this.boxesHolder.children.length;
        }

        _.forEach(category, (inventoryVO: InventoryVO) => {
            _.remove(this.itemsArray, (item: InventoryVO) => {
                return item.id == inventoryVO.id;
            });

            this.itemsArray.push(inventoryVO);
        });

        this.reorderItemsArray();

        let neededColumns: number = Math.round(this.itemsArray.length / 3);
        let columnsNo: number = this.boxesHolder.children.length;

        if (neededColumns > columnsNo) {
            // Get the last <li> element ("Milk") of <ul> with id="myList2"
            let itm = this.boxesHolder.children[0];

            _.forEach(_.range(neededColumns - columnsNo), () => {
                let newColumn = itm.cloneNode(true);
                this.boxesHolder.appendChild(newColumn);
            });

            this.boxes = [];

            _.forEach(this.boxesHolder.children, (column: Element) => {
                // this.columnsNumber++;
                _.forEach(column.children, (item: Element) => {
                    let box: InventoryBox = new InventoryBox(item as HTMLDivElement, this.showItemDescription.bind(this));
                    this.boxes.push(box);
                });
            });
        }

        // this.getNewColumnIndexOnShow(category[0].category);
        this.updateBoxes(this.itemsArray, category[0].category);


        let columnIndex = this.getNewColumnIndexOnShow(category[0].category);

        let newOffset: number = columnIndex * this.columnWidth;
        this.moveHolderToOffset(newOffset);
        /*
        this.updateBoxes(this.itemsToBeDisplayed, category[0].category);*/
    }

    private getNewColumnIndexOnShow(categoryName: string): number {

        let firstItemIndex: number = -1;
        // let lastItemIndex: number = 0;

        _.forEach(this.itemsArray, (item: InventoryVO, counter: number) => {
            if (item.category == categoryName) {

                if (firstItemIndex == -1) {

                    firstItemIndex = counter;
                    // lastItemIndex = firstItemIndex - 1;

                }

                // lastItemIndex++;
            }
        });

        // console.log("first and last item: " + firstItemIndex, lastItemIndex);

        let columnIndex: number = Math.floor(firstItemIndex / 3);
        let maxColumns: number = this.boxesHolder.children.length;

        if (columnIndex > maxColumns) {
            columnIndex = maxColumns;
        }

        /* if (tempColumnIndex < this.columnsNumber) {
             tempColumnIndex = this.columnsNumber;
         }*/

        // this.currentColumnIndex = tempColumnIndex;


        // console.log("tempColumnIndex: " + tempColumnIndex);
        // console.log("max columns: " + maxColumns);
        // console.log("itemsArray length: " + this.itemsArray.length);

        //

        // console.log("current columns index: " + this.currentColumnIndex);
        return columnIndex;
    }

    private reorderItemsArray(): void {
        let newArr: InventoryVO[] = [];

        _.forEach(this.inventoryButtons, (button: InventoryButton) => {
            _.forEach(this.itemsArray, (item: InventoryVO) => {
                if (item.category.toUpperCase() == button.category.toUpperCase()) {
                    newArr.push(item);
                }
            });
        });

        this.itemsArray = newArr;

    }

    private hideCategory(category: InventoryVO[]): void {

        // let neededColumns: number = Math.round(this.itemsArray.length / 3);
        // let columnsNo:number = document.getElementById("ItemsHolder").children.length;


        // let tempCurrentColumn: number = this.currentColumnIndex;

        _.forEach(category, (inventoryVO: InventoryVO) => {
            _.remove(this.itemsArray, (item: InventoryVO) => {
                if (item.id == inventoryVO.id) {

                }
                return item.id == inventoryVO.id;
            });
        });
        this.reorderItemsArray();


        let neededColumns: number = Math.round(this.itemsArray.length / 3);
        if (neededColumns < this.columnsNumber) {
            neededColumns = this.columnsNumber;
        }
        let columnsNo: number = this.boxesHolder.children.length;
        if (columnsNo > neededColumns) {
            // console.log("intra la columnsNo > neededColumns");
            // console.log("children inainate de remove: " + this.boxesHolder.children.length);

            let boxes: HTMLCollection = this.boxesHolder.children;
            for (let i = boxes.length - 1; i >= neededColumns; i--) {
                this.boxesHolder.removeChild(boxes[i]);
            }


            /*_.forEach(_.range(document.getElementById("ItemsHolder").children.length), (counter:number) => {
                if(counter >= neededColumns - 1)
                {
                    // var elem = document.getElementById(id);
                    // this.boxesHolder.removeChild(this.boxesHolder.childNodes[counter]);
                    // removech
                    // this.boxesHolder.removeChild(this.boxesHolder.childNodes[counter]);
                }
            });*/
            // console.log("children dupa remove: " + this.boxesHolder.children.length);

            // var element = document.getElementById(elementId);
            // element.parentNode.removeChild(element);
            // while (document.getElementById("ItemsHolder").children.length > neededColumns) {
            //     document.getElementById("ItemsHolder").parentNode.removeChild(document.getElementById("ItemsHolder").parentNode.children[0]);
            // }

            // let itm = document.getElementById("ItemsHolder").children[0];
            /*
                                _.forEach(_.range(neededColumns - columnsNo), () => {
                                    let newColumn = itm.cloneNode(true);
                                    document.getElementById("ItemsHolder").appendChild(newColumn);
                                });

                                this.boxes = [];

                                _.forEach(this.boxesHolder.children, (column: HTMLDivElement) => {
                                    this.columnsNumber++;
                                    _.forEach(column.children, (item: HTMLDivElement) => {
                                        let box: InventoryBox = new InventoryBox(item, this.showItemDescription.bind(this));
                                        this.boxes.push(box);
                                    });
                                });*/
        }
        // let maxColumns: number = Math.round(this.itemsArray.length / 3);
        // if (tempCurrentColumn > maxColumns)
        //     tempCurrentColumn = maxColumns;
        // if (tempCurrentColumn < this.columnsNumber)
        //     tempCurrentColumn = this.columnsNumber;
        //
        // let itemsArrayIncludesClickedBoxID: boolean = false;
        //
        // _.forEach(this.itemsArray, (item: InventoryVO, counter: number) => {
        //     if (this.currentActiveItem.id && item.id == this.currentActiveItem.id) {
        //         itemsArrayIncludesClickedBoxID = true;
        //         return true;
        //     }
        // });
        //
        // if (!itemsArrayIncludesClickedBoxID) {
        //     //todo in caz ca ai unul selectat dintr-o categorie care a ramas sa ramana ala activ chiar daca in alt box vezi clicked id vezi clickedID
        //     this.resetItemDescription();
        // }
        //
        // this.currentColumnIndex = tempCurrentColumn;


        this.updateBoxes(this.itemsArray);

        let currentRight: string = this.boxesHolder.style.right;
        currentRight = currentRight.replace("px", "");

        let newOffset: number = +currentRight;


        if (this.itemsArray.length == 0) {
            this.disableEquipBtn(false);
            this.moveHolderToOffset(0);
        } else {
            if (this.itemsArray.length < 21) {
                this.moveHolderToOffset(0, true);
            } else {
                this.moveHolderToOffset(newOffset, true);
            }
        }
    }

    private handleInventoryButtons(): void {
        this.nextColumnBtn = new InventoryItemsHolderButton(document.getElementById("ItemsNextButton") as HTMLDivElement);
        // this.handleArrowBtn(this.nextColumnBtn);
        this.nextColumnBtn.button.onclick = () => {
            if (this.nextColumnBtn.button.getAttribute("isActive") == "true") {
                if (this.columnWidth == 0) {
                    this.columnWidth = this.boxesHolder.scrollWidth / this.boxesHolder.children.length;
                }
                let currentRightPos: string = this.boxesHolder.style.right;
                currentRightPos = currentRightPos.replace("px", "");

                let newOffset: number = +currentRightPos + this.columnWidth * 2;

                this.moveHolderToOffset(newOffset);
            }

        };

        this.prevColumnBtn = new InventoryItemsHolderButton(document.getElementById("ItemsPrevButton") as HTMLDivElement);
        // this.handleArrowBtn(this.prevColumnBtn);
        this.prevColumnBtn.button.onclick = () => {
            if (this.prevColumnBtn.button.getAttribute("isActive") == "true") {
                if (this.columnWidth == 0) {
                    this.columnWidth = this.boxesHolder.scrollWidth / this.boxesHolder.children.length;
                }
                let currentRightPos: string = this.boxesHolder.style.right;
                currentRightPos = currentRightPos.replace("px", "");

                let newOffset: number = +currentRightPos - this.columnWidth * 2;
                this.moveHolderToOffset(newOffset);
            }

        };

        this.inventoryButtonsHolder = document.getElementById("InventoryButtonsHolder") as HTMLDivElement;

        this.inventoryButtons = [];

        let inventoryButton: InventoryButton;
        _.forEach(this.inventoryButtonsHolder.children, (button: Element) => {
            // for (let i = 0; i < doc.childNodes.length; i++) {
            if (button.className == "inventoryButton") {
                if (Settings.isMobile)
                    inventoryButton = new InventoryButtonMobile(button as HTMLDivElement, this.showCategory.bind(this), this.hideCategory.bind(this));
                else
                    inventoryButton = new InventoryButton(button as HTMLDivElement, this.showCategory.bind(this), this.hideCategory.bind(this));

                this.inventoryButtons.push(inventoryButton);

            }
        });

        //todo la start game signals callback si abia atunci sa dai show category
        // this.showCategory(this.inventoryButtons[0].categoryElements);
        // this.updateBoxes(this.itemsArray)


        this.equipBtn = document.getElementById("EquipButtonHolder") as HTMLDivElement;
        this.equipBtn.style.opacity = "0.5";
        this.equipBtn.setAttribute('clicked', 'false');

        this.equipBtn.onclick = () => {
            if (this.equipBtn.getAttribute("enabled") == "true") {
                // let clicked: string = (this.equipBtn.getAttribute('clicked') == "true") ? "false" : "true";
                // this.equipBtn.setAttribute('clicked', clicked);

                // if(this.equipBtn.getAttribute('clicked') == "true")
                // {
                // this.currentActiveItem
                switch (this.currentActiveItem.category) {

                    case "AVATARS": {
                        // _.forEach(PockeySettings.LARGE_AVATARS_ARRAY)
                        // if (PockeySettings.PLAYER_AVATAR_ID != this.currentActiveItem.id) {
                        //     this.enableEquipBtn();
                        // }
                        // else {
                        //     this.disableEquipBtn();
                        // }
                        PockeyPlayerManager.Instance().player.data.avatar = this.currentActiveItem.id;
                        SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                        this.checkIfCurrentItemCanBeUsed();
                        let dbObject: DatabaseObject = {
                            userID: PockeyPlayerManager.Instance().player.data.user_id,
                            column: "avatar",
                            value: PockeyPlayerManager.Instance().player.data.avatar
                        };
                        DatabaseConnector.updatePlayerDatabase(dbObject);
                        return;
                    }
                    case "CUES": {
                        // if (PockeySettings.PLAYER_CUE_ID != this.currentActiveItem.id) {
                        //     this.enableEquipBtn();
                        // }
                        // else {
                        //     this.disableEquipBtn();
                        // }
                        PockeyPlayerManager.Instance().player.data.stick = this.currentActiveItem.id;
                        SignalsManager.DispatchSignal(PockeySignalTypes.UPDATE_STICK_SKIN, [PockeyPlayerManager.Instance().player.data.stick]);
                        SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                        this.checkIfCurrentItemCanBeUsed();
                        let dbObject: DatabaseObject = {
                            userID: PockeyPlayerManager.Instance().player.data.user_id,
                            column: "stick",
                            value: PockeyPlayerManager.Instance().player.data.stick
                        };
                        DatabaseConnector.updatePlayerDatabase(dbObject);

                        return;
                    }
                    case "DECALS": {
                        // if (PockeySettings.PLAYER_DECAL_ID != this.currentActiveItem.id) {
                        //     this.enableEquipBtn();
                        // }
                        // else {
                        //     this.disableEquipBtn();
                        // }
                        PockeyPlayerManager.Instance().player.data.decal = this.currentActiveItem.id;
                        SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_DECAL, [PockeyPlayerManager.Instance().player.data.decal]);
                        console.log("de aici se trimite salam decal");
                        SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                        this.checkIfCurrentItemCanBeUsed();
                        let dbObject: DatabaseObject = {
                            userID: PockeyPlayerManager.Instance().player.data.user_id,
                            column: "decal",
                            value: PockeyPlayerManager.Instance().player.data.decal
                        };
                        DatabaseConnector.updatePlayerDatabase(dbObject);
                        return;
                    }
                    case "GOALIES": {
                        return;
                    }
                    case "MISC": {
                        PockeyPlayerManager.Instance().player.data.felt = this.currentActiveItem.id;
                        SignalsManager.DispatchSignal(PockeySignalTypes.CHANGE_POOLTABLE_FELT, [PockeyPlayerManager.Instance().player.data.felt]);
                        SignalsManager.DispatchSignal(PockeySignalTypes.INVENTORY_ITEM_UPDATED);
                        this.checkIfCurrentItemCanBeUsed();
                        let dbObject: DatabaseObject = {
                            userID: PockeyPlayerManager.Instance().player.data.user_id,
                            column: "felt",
                            value: PockeyPlayerManager.Instance().player.data.felt
                        };
                        DatabaseConnector.updatePlayerDatabase(dbObject);
                        return;
                    }
                }
            }
            /*else
            {

            }*/
            // console.log("equip: " + this.equipBtn.getAttribute('clicked'));
            // }

        }
    }

    private moveHolderToOffset(offset: number, fast?: boolean): void {
        this.offsetLimit = this.boxesHolder.offsetWidth;
        // this.prevColumnBtn.enable();
        // this.prevColumnBtn.enable();

        if (offset > this.boxesHolder.scrollWidth - this.boxesHolder.offsetWidth) {
            // console.log("cazul 1: " + offset, this.boxesHolder.scrollWidth, this.boxesHolder.offsetWidth);

            offset = this.boxesHolder.scrollWidth - this.boxesHolder.offsetWidth;
            if (offset != 0) {
                this.boxesHolderWrapper.classList.remove("inventoryMask");
                this.boxesHolderWrapper.classList.remove("inventoryRightSideMask");
                this.boxesHolderWrapper.classList.add("inventoryLeftSideMask");
                this.nextColumnBtn.disable();
                this.prevColumnBtn.enable();
            }


            // this.disableArrow(this.nextColumnBtn);
            // this.nextColumnBtn.classList.add("disabledInventoryBtn");
            // this.prevColumnBtn.classList.remove("disabledInventoryBtn");
        } else if (offset <= 0) {
            offset = 0;
            this.boxesHolderWrapper.classList.remove("inventoryMask");
            this.boxesHolderWrapper.classList.remove("inventoryLeftSideMask");
            this.boxesHolderWrapper.classList.add("inventoryRightSideMask");
            this.nextColumnBtn.enable();
            this.prevColumnBtn.disable();

            // console.log("cazul 2");

            // this.nextColumnBtn.classList.remove("disabledInventoryBtn");
            // this.prevColumnBtn.classList.add("disabledInventoryBtn");
        } else {
            this.boxesHolderWrapper.classList.remove("inventoryLeftSideMask");
            this.boxesHolderWrapper.classList.remove("inventoryRightSideMask");
            this.boxesHolderWrapper.classList.add("inventoryMask");
            this.nextColumnBtn.enable();
            this.prevColumnBtn.enable();

            // console.log("cazul 3");

            // this.nextColumnBtn.classList.remove("disabledInventoryBtn");
            // this.prevColumnBtn.classList.remove("disabledInventoryBtn");
        }

        if (this.itemsArray.length == 0) {
            this.nextColumnBtn.disable();
            this.prevColumnBtn.disable();
        }

        if (this.holderTween && this.holderTween.isActive()) {
            this.holderTween.kill();
        }

        let tweenTime: number = 0.2;
        if (fast)
            tweenTime = 0;

        this.holderTween = TweenMax.to(this.boxesHolder, tweenTime, {css: {"right": offset.toString() + "px"}});
        // this.boxesHolder.style.right = offset.toString() + "px";
    }

    /*private disableArrowButton(btn: HTMLDivElement): void {
        btn.style.opacity = "0.5";
        btn.style.cursor = "default";
        btn.setAttribute("isActive", "false");
        let bg: HTMLDivElement = btn.getElementsByClassName("normalButtonBackground")[0] as HTMLDivElement;
        bg.style.background = "#2d899d";
        // bg.style.zIndex = "-10";
    }

    private enableArrowBtn(btn: HTMLDivElement): void {
        btn.style.opacity = "";
        btn.style.cursor = "";
        btn.setAttribute("isActive", "true");
    }*/

    private updateBoxes(itemsToBeDisplayed: InventoryVO[], categoryToAnimate?: string) {
        let maxLength: number = (this.boxes.length <= itemsToBeDisplayed.length) ? this.boxes.length : itemsToBeDisplayed.length;

        _.forEach(this.boxes, (box: InventoryBox) => {
            box.clearVO();
        });

        _.forEach(_.range(maxLength), (counter: number) => {
            this.boxes[counter].addVO(itemsToBeDisplayed[counter]);

            if (this.currentActiveItem && this.boxes[counter].inventoryVO.id == this.currentActiveItem.id) {
                this.boxes[counter].click();
            } else {
                this.boxes[counter].unClick();
            }

            if (this.boxes[counter].inventoryVO.level > PockeySettings.PLAYER_LEVEL) {
                (this.boxes[counter].iconDiv.querySelector(".inventoryItemBoxLocked") as HTMLDivElement).style.display = "block";
            } else {
                (this.boxes[counter].iconDiv.querySelector(".inventoryItemBoxLocked") as HTMLDivElement).style.display = "";
            }

            if (categoryToAnimate && this.boxes[counter].inventoryVO.category.toUpperCase() == categoryToAnimate.toUpperCase()) {
                this.boxes[counter].animate();
            }

            if (this.boxes[counter].inventoryVO.id == PockeyPlayerManager.Instance().player.data.avatar
                || this.boxes[counter].inventoryVO.id == PockeyPlayerManager.Instance().player.data.decal
                || this.boxes[counter].inventoryVO.id == PockeyPlayerManager.Instance().player.data.stick
                || this.boxes[counter].inventoryVO.id == PockeyPlayerManager.Instance().player.data.felt) {
                (this.boxes[counter].iconDiv.querySelector(".inventoryItemBoxSelected") as HTMLDivElement).style.display = "block";
            } else {
                (this.boxes[counter].iconDiv.querySelector(".inventoryItemBoxSelected") as HTMLDivElement).style.display = "";

            }
        });

    }

    private showItemDescription(inventoryVO: InventoryVO): void {
        this.bigAvatar.style.background = "center / contain no-repeat #062f38 url(" + inventoryVO.icon + ")";
        this.itemNameDiv.innerHTML = inventoryVO.id;

        _.forEach(this.boxes, (box: InventoryBox) => {
            if (box.occupied) {
                if (box.inventoryVO.id != inventoryVO.id) {
                    box.unClick();
                }
            }
        });

        this.currentActiveItem = inventoryVO;

        this.checkIfCurrentItemCanBeUsed();
    }

    private checkIfCurrentItemCanBeUsed(): void {

        if (this.currentActiveItem.level > PockeySettings.PLAYER_LEVEL) {
            this.disableEquipBtn(false);
            return;
        }

        switch (this.currentActiveItem.category) {

            case "AVATARS": {
                // _.forEach(PockeySettings.LARGE_AVATARS_ARRAY)
                if (PockeyPlayerManager.Instance().player.data.avatar != this.currentActiveItem.id) {
                    this.enableEquipBtn();
                } else {
                    this.disableEquipBtn();
                }
                return;
            }
            case "CUES": {
                if (PockeyPlayerManager.Instance().player.data.stick != this.currentActiveItem.id) {
                    this.enableEquipBtn();
                } else {
                    this.disableEquipBtn();
                }
                return;
            }
            case "DECALS": {
                if (PockeyPlayerManager.Instance().player.data.decal != this.currentActiveItem.id) {
                    this.enableEquipBtn();
                } else {
                    this.disableEquipBtn();
                }
                return;
            }
            case "GOALIES": {

                return;
            }
            case "MISC": {
                if (PockeyPlayerManager.Instance().player.data.felt != this.currentActiveItem.id) {
                    this.enableEquipBtn();
                } else {
                    this.disableEquipBtn();
                }
                return;
            }
        }
    }

    private enableEquipBtn(): void {
        this.equipBtn.setAttribute("enabled", "true");
        this.equipBtn.style.opacity = "1";
        this.equipBtn.querySelector(".normalButtonBackground").innerHTML = "EQUIP";
        this.equipBtn.style.cursor = "pointer";
        // let equipBtnBackground:HTMLDivElement = this.equipBtn.querySelector(".normalButtonBackground") as HTMLDivElement;
    }

    private disableEquipBtn(changeText: boolean = true): void {
        this.equipBtn.setAttribute("enabled", "false");
        this.equipBtn.style.opacity = "0.5";
        if (changeText)
            this.equipBtn.querySelector(".normalButtonBackground").innerHTML = "EQUIPPED";
        else {
            this.equipBtn.querySelector(".normalButtonBackground").innerHTML = "EQUIP";
        }
        this.equipBtn.style.cursor = "";
    }

    /*private resetItemDescription(): void {
        this.bigAvatar.style.background = "center / contain no-repeat #062f38 url('')";
        this.itemNameDiv.innerHTML = "Item Name";

        /!*_.forEach(this.boxes, (box:InventoryBox) => {
            if(box.occupied)
            {
                if(box.inventoryVO.id != inventoryVO.id)
                {
                    box.unClick();
                }
            }
        });*!/
    }*/

    /* private handleArrowBtn(arrow: HTMLDivElement): void {
         //center url("Assets/Desktop/Images/icon_arrow1-left-reg.svg")
         let iconBgID: string = (arrow.getElementsByClassName("buttonArrow")[0] as HTMLDivElement).id;
         let iconBg: any = document.getElementById(iconBgID);
         let iconStyle = iconBg.currentStyle || window.getComputedStyle(iconBg);

         // let initialBackground:string = iconBg.style.background;
         let mouseOverBackground: string = iconStyle.background.toString().replace(".svg", "-reg.svg");

         let bg: HTMLDivElement = arrow.getElementsByClassName("normalButtonBackground")[0] as HTMLDivElement;

         arrow.setAttribute("isActive", "true");
         arrow.onmouseover = () => {
             if (arrow.getAttribute("isActive") == "true") {
                 bg.style.background = "white";
                 // bg.style.color = "#2d899d";
                 iconBg.style.background = mouseOverBackground;
                 /!* cursor: pointer; *!/
             }
             else {
                 bg.style.background = "";
                 // bg.style.color = "";
                 iconBg.style.background = "";
                 /!* cursor: pointer; *!/
             }
         };

         arrow.onmouseout = () => {
             // if (arrow.getAttribute("isActive") == "true") {
             bg.style.background = "";
             // bg.style.color = "#";
             iconBg.style.background = "";

             /!* cursor: pointer; *!/
             // }
         };


         /!* let arrowBg:HTMLDivElement = arrow.getElementsByClassName("buttonArrow")[0] as HTMLDivElement;
          if(!arrow.getAttribute("initialBg"))
          {
             arrow.setAttribute("initialBg", arrowBg.style.background)
          }

          // arrow.classList.remove("hover");
          arrow.style.opacity = "0.5";
          arrow.onmouseover = () => {
              arrow.style.cursor = "default";
              // arrowBg.style.cursor = "default";
              arrowBg.style.background = arrow.getAttribute("initialBg");
          }*!/

     }*/
}