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
        var GMLanuchButton = /** @class */ (function (_super) {
            __extends(GMLanuchButton, _super);
            function GMLanuchButton() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isDraging = false;
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