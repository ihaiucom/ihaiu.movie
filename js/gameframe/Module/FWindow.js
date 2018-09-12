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
var Games;
(function (Games) {
    //======================
    // 扩展 fairygui.Window
    //----------------------
    var FWindow = /** @class */ (function (_super) {
        __extends(FWindow, _super);
        function FWindow() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isAddedStage = false;
            return _this;
        }
        Object.defineProperty(FWindow.prototype, "isShowed", {
            get: function () {
                if (this.contentPane)
                    return this.parent != null;
                return false;
            },
            enumerable: true,
            configurable: true
        });
        FWindow.prototype.onWindowWillShow = function () {
            if (this.contentPane) {
                this.callChildOnWindowWillShow(this.contentPane);
            }
            this.setScreenSize();
            if (this.isAddedStage)
                return;
            this.isAddedStage = true;
            Laya.stage.on(laya.events.Event.RESIZE, this, this.setScreenSize);
        };
        FWindow.prototype.onWindowWillHide = function () {
            if (this.contentPane) {
                this.callChildOnWindowWillHide(this.contentPane);
            }
            this.isAddedStage = false;
            Laya.stage.off(laya.events.Event.RESIZE, this, this.setScreenSize);
        };
        FWindow.prototype.setScreenSize = function () {
            if (this.contentPane) {
                this.contentPane.width = ScreenSetting.screenWidth;
                this.contentPane.height = ScreenSetting.screenHeight;
                this.callChildOnWindowResize(this.contentPane);
                // this.contentPane.displayObject.graphics.drawRect(0, 0, this.contentPane.width, this.contentPane.height, "red");
            }
        };
        //=========================
        // 调用child GComponent的 onWindowWillShow
        //-------------------------
        FWindow.prototype.callChildOnWindowWillShow = function (com) {
            if (com) {
                var fun = com["onWindowWillShow"];
                if (fun) {
                    fun.apply(com);
                }
                if (com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowWillShow(com._children[i]);
                    }
                }
            }
        };
        //=========================
        // 调用child GComponent的 onWindowWillHide
        //-------------------------
        FWindow.prototype.callChildOnWindowWillHide = function (com) {
            if (com) {
                var fun = com["onWindowWillHide"];
                if (fun) {
                    fun.apply(com);
                }
                if (com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowWillHide(com._children[i]);
                    }
                }
            }
        };
        //=========================
        // 调用child GComponent的 onWindowResize
        //-------------------------
        FWindow.prototype.callChildOnWindowResize = function (com) {
            if (com) {
                var fun = com["onWindowResize"];
                if (fun) {
                    fun.apply(com);
                }
                if (com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowResize(com._children[i]);
                    }
                }
            }
        };
        return FWindow;
    }(fairygui.Window));
    Games.FWindow = FWindow;
})(Games || (Games = {}));
//# sourceMappingURL=FWindow.js.map