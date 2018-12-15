/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var GMLanuchButtonClickArea;
        (function (GMLanuchButtonClickArea) {
            GMLanuchButtonClickArea[GMLanuchButtonClickArea["None"] = 0] = "None";
            GMLanuchButtonClickArea[GMLanuchButtonClickArea["Left_Top"] = 1] = "Left_Top";
            GMLanuchButtonClickArea[GMLanuchButtonClickArea["Left_Bottom"] = 2] = "Left_Bottom";
            GMLanuchButtonClickArea[GMLanuchButtonClickArea["Right_Buttom"] = 3] = "Right_Buttom";
            GMLanuchButtonClickArea[GMLanuchButtonClickArea["Right_Top"] = 4] = "Right_Top";
        })(GMLanuchButtonClickArea = System.GMLanuchButtonClickArea || (System.GMLanuchButtonClickArea = {}));
        var GMLanuchButton = /** @class */ (function (_super) {
            __extends(GMLanuchButton, _super);
            function GMLanuchButton() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isDraging = false;
                _this.__clickStageIndex = -1;
                _this.__clickPreArea = GMLanuchButtonClickArea.None;
                return _this;
            }
            GMLanuchButton.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.onClickButton);
                this.on(fairygui.Events.DRAG_MOVE, this, this.onDragMove);
                this.on(fairygui.Events.DRAG_END, this, this.onDragEnd);
                if (window["Game"]) {
                    this.x = Game.localStorage.gmX;
                    this.y = Game.localStorage.gmY;
                }
                // Laya.stage.on(laya.events.Event.CLICK, this, this.onClickStage);
            };
            GMLanuchButton.prototype.onClickStage = function (event) {
                if (event && event["stageX"]) {
                    if (this.visible)
                        return;
                    var x = event.stageX;
                    var y = event.stageY;
                    var px = Math.floor(x / Laya.stage.width * 100);
                    var py = Math.floor(y / Laya.stage.height * 100);
                    var area = GMLanuchButtonClickArea.None;
                    if (px < 10 && py < 10) {
                        area = GMLanuchButtonClickArea.Left_Top;
                        if (this.__clickPreArea == GMLanuchButtonClickArea.None) {
                            this.__clickStageIndex = 1;
                        }
                        else if (this.__clickPreArea == GMLanuchButtonClickArea.Right_Top) {
                            this.__clickStageIndex++;
                        }
                        else {
                            this.__clickStageIndex = 0;
                        }
                    }
                    else if (px < 10 && py > 90) {
                        area = GMLanuchButtonClickArea.Left_Bottom;
                        if (this.__clickPreArea == GMLanuchButtonClickArea.Left_Top) {
                            this.__clickStageIndex++;
                        }
                        else {
                            this.__clickStageIndex = 0;
                        }
                    }
                    else if (px > 90 && py > 90) {
                        area = GMLanuchButtonClickArea.Right_Buttom;
                        if (this.__clickPreArea == GMLanuchButtonClickArea.Left_Bottom) {
                            this.__clickStageIndex++;
                        }
                        else {
                            this.__clickStageIndex = 0;
                        }
                    }
                    else if (px > 90 && py < 10) {
                        area = GMLanuchButtonClickArea.Right_Top;
                        if (this.__clickPreArea == GMLanuchButtonClickArea.Right_Buttom) {
                            this.__clickStageIndex++;
                        }
                        else {
                            this.__clickStageIndex = 0;
                        }
                    }
                    this.__clickPreArea = area;
                    if (area == GMLanuchButtonClickArea.None) {
                        this.__clickStageIndex = 0;
                    }
                    if (this.__clickStageIndex >= 20) {
                        this.visible = true;
                    }
                    // console.log("GMLaunchButton onClickStage event.stageX=" + event.stageX + " stageY=" + event.stageY + "  " + px + "%,  " + py + "%" + "  area=" + area + " this.__clickStageIndex=" + this.__clickStageIndex);
                }
            };
            GMLanuchButton.prototype.onDragMove = function () {
                this.isDraging = true;
            };
            GMLanuchButton.prototype.onDragEnd = function () {
                var _this = this;
                setTimeout(function () {
                    _this.isDraging = false;
                }, 100);
                Game.localStorage.gmX = this.x;
                Game.localStorage.gmY = this.y;
            };
            GMLanuchButton.prototype.onClickButton = function () {
                if (!this.isDraging) {
                    Games.GM.visiable = !Games.GM.visiable;
                }
            };
            return GMLanuchButton;
        }(System.GMLanuchButtonStruct));
        System.GMLanuchButton = GMLanuchButton;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMLanuchButton.js.map