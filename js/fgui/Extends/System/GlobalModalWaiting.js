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
        var GlobalModalWaiting = /** @class */ (function (_super) {
            __extends(GlobalModalWaiting, _super);
            function GlobalModalWaiting() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.hideTimeHandler = -1;
                _this.delayShowTimeHandler = -1;
                return _this;
            }
            Object.defineProperty(GlobalModalWaiting, "Instance", {
                get: function () {
                    if (!GlobalModalWaiting._Instance) {
                        GlobalModalWaiting._Instance = GlobalModalWaiting.createInstance();
                        ;
                    }
                    return GlobalModalWaiting._Instance;
                },
                enumerable: true,
                configurable: true
            });
            GlobalModalWaiting.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.setScreenSize();
            };
            GlobalModalWaiting.prototype.onLayoutModelWaitPane = function () {
                this.setScreenSize();
            };
            GlobalModalWaiting.prototype.setScreenSize = function () {
                this.width = ScreenSetting.screenWidth;
                this.height = ScreenSetting.screenHeight;
            };
            GlobalModalWaiting.prototype.setShow = function (time, delay) {
                var _this = this;
                clearTimeout(this.delayShowTimeHandler);
                if (delay && delay > 0) {
                    this.delayShowTimeHandler = setTimeout(function () {
                        _this.doShow(time);
                    }, delay);
                }
                else {
                    this.doShow(time);
                }
            };
            GlobalModalWaiting.prototype.doShow = function (time) {
                var _this = this;
                if (time === undefined)
                    time = 5000;
                this.setScreenSize();
                // console.log("GlobalModalWaiting.doShow time=" + time);
                Games.MenuLayer.root.addChild(this);
                clearTimeout(this.hideTimeHandler);
                if (time && time > 0) {
                    this.hideTimeHandler = setTimeout(function () {
                        _this.setHide();
                    }, time);
                }
            };
            GlobalModalWaiting.prototype.setHide = function () {
                // console.log("GlobalModalWaiting.setHide");
                // if (this.hideTimeHandler > 0)
                // {
                // 	clearTimeout(this.hideTimeHandler);
                // 	this.hideTimeHandler = -1;
                // }
                clearTimeout(this.delayShowTimeHandler);
                this.removeFromParent();
            };
            GlobalModalWaiting.show = function (time, delay) {
                GlobalModalWaiting.Instance.setShow(time, delay);
            };
            GlobalModalWaiting.hide = function () {
                GlobalModalWaiting.Instance.setHide();
            };
            return GlobalModalWaiting;
        }(System.GlobalModalWaitingStruct));
        System.GlobalModalWaiting = GlobalModalWaiting;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
var GlobalModalWaiting = fgui.System.GlobalModalWaiting;
//# sourceMappingURL=GlobalModalWaiting.js.map