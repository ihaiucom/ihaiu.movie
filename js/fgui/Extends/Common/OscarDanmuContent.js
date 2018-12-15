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
    var Common;
    (function (Common) {
        var OscarDanmuContent = /** @class */ (function (_super) {
            __extends(OscarDanmuContent, _super);
            function OscarDanmuContent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OscarDanmuContent.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            OscarDanmuContent.prototype.InitView = function (data, parentWidth, speed, caller, onFree, onFinish) {
                this.danmuData = data;
                this.parentWidth = parentWidth;
                this.speed = speed;
                this.caller = caller;
                this.onFree = onFree;
                this.onFinish = onFinish;
                this.title = this.danmuData.msg;
                this.width = this.m_title.width + 50;
                this.startPos = this.parentWidth;
                this.freePos = this.parentWidth - this.width;
                this.finishPos = -this.width;
            };
            OscarDanmuContent.prototype.StartMove = function () {
                this.StopMove();
                if (this.x > this.startPos) {
                    this.x = this.startPos;
                    this.moveTween = Laya.Tween.to(this, { x: this.freePos }, (this.x - this.freePos) / this.speed, null, Handler.create(this, this.OnMoveFinish, null, false));
                }
                else {
                    if (this.x > this.freePos) {
                        this.moveTween = Laya.Tween.to(this, { x: this.freePos }, (this.x - this.freePos) / this.speed, null, Handler.create(this, this.OnMoveFree, null, false));
                    }
                    else if (this.x > this.finishPos) {
                        this.moveTween = Laya.Tween.to(this, { x: this.finishPos }, (this.x - this.finishPos) / this.speed, null, Handler.create(this, this.OnMoveFinish, null, false));
                    }
                    else {
                        this.OnMoveFinish();
                    }
                }
            };
            OscarDanmuContent.prototype.StopMove = function () {
                if (this.moveTween) {
                    this.moveTween.clear();
                    this.moveTween = null;
                }
            };
            OscarDanmuContent.prototype.OnMoveFree = function () {
                // this.StopMove();
                this.moveTween = Laya.Tween.to(this, { x: this.finishPos }, (this.x - this.finishPos) / this.speed, null, Handler.create(this, this.OnMoveFinish, null, false));
                this.onFree.apply(this.caller, [this]);
            };
            OscarDanmuContent.prototype.OnMoveFinish = function () {
                this.StopMove();
                this.onFinish.apply(this.caller, [this]);
            };
            Object.defineProperty(OscarDanmuContent.prototype, "freeTime", {
                get: function () {
                    if (this.x < this.freePos) {
                        return 0;
                    }
                    return (this.x - this.freePos) / this.speed;
                },
                enumerable: true,
                configurable: true
            });
            return OscarDanmuContent;
        }(Common.OscarDanmuContentStruct));
        Common.OscarDanmuContent = OscarDanmuContent;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarDanmuContent.js.map