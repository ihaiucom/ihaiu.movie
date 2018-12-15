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
    /** 显示对象事件 */
    var EventHandler = /** @class */ (function () {
        function EventHandler() {
        }
        return EventHandler;
    }());
    Games.EventHandler = EventHandler;
    /** 单位组件--抽象显示对象 */
    var UnitViewCompoent = /** @class */ (function (_super) {
        __extends(UnitViewCompoent, _super);
        function UnitViewCompoent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 事件
            _this.eventList = [];
            //方向
            _this._direction = Games.DirtionType.Right;
            return _this;
        }
        Object.defineProperty(UnitViewCompoent.prototype, "direction", {
            get: function () {
                return this._direction;
            },
            set: function (value) {
                this._direction = value;
            },
            enumerable: true,
            configurable: true
        });
        UnitViewCompoent.prototype.size = function (w, h) {
        };
        UnitViewCompoent.prototype.scale = function (scaleFactor) {
        };
        Object.defineProperty(UnitViewCompoent.prototype, "x", {
            set: function (val) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitViewCompoent.prototype, "y", {
            set: function (val) {
            },
            enumerable: true,
            configurable: true
        });
        UnitViewCompoent.prototype.pos = function (x, y) {
        };
        UnitViewCompoent.prototype.setBounds = function (bounds) {
        };
        Object.defineProperty(UnitViewCompoent.prototype, "hitArea", {
            set: function (bounds) {
            },
            enumerable: true,
            configurable: true
        });
        /** 设置引导ui */
        UnitViewCompoent.prototype.addGuidUI = function (guideUI) {
        };
        /** 设置单位头顶头像 */
        UnitViewCompoent.prototype.setTopHeadIcon = function (headIcon, sourceScale) {
            if (sourceScale === void 0) { sourceScale = 0.26; }
        };
        UnitViewCompoent.prototype.removeHeadIcon = function () {
        };
        //开启关闭阴影
        UnitViewCompoent.prototype.openShadow = function (val) {
            if (val === void 0) { val = true; }
        };
        UnitViewCompoent.prototype.loadAnim = function (texturePath, skeletonPath, caller, complete, error) {
        };
        UnitViewCompoent.prototype.startAnimator = function () {
        };
        UnitViewCompoent.prototype.pauseAnimator = function () {
        };
        /** 渲染 */
        UnitViewCompoent.prototype.onRender = function () {
        };
        //---------------------------------
        // 事件
        //---------------------------------
        UnitViewCompoent.prototype.on = function (type, caller, listener, args) {
            var eventHandler = new EventHandler();
            eventHandler.eventType = type;
            eventHandler.eventCaller = caller;
            eventHandler.eventListener = listener;
            eventHandler.eventArgs = args;
            this.eventList.push(eventHandler);
            this.displayObject && this.displayObject.on(type, caller, listener, args);
        };
        UnitViewCompoent.prototype.off = function (type, caller, listener) {
            for (var i = this.eventList.length - 1; i >= 0; i--) {
                var evt = this.eventList[i];
                if (evt.eventType == type && evt.eventCaller == caller && evt.eventListener == listener) {
                    this.eventList.splice(i, 1);
                }
            }
            this.displayObject && this.displayObject.off(type, caller, listener);
        };
        UnitViewCompoent.prototype.hasListener = function (type) {
            if (this.displayObject) {
                return this.displayObject.hasListener(type);
            }
            return false;
        };
        return UnitViewCompoent;
    }(Games.UnitComponent));
    Games.UnitViewCompoent = UnitViewCompoent;
})(Games || (Games = {}));
//# sourceMappingURL=UnitViewCompoent.js.map