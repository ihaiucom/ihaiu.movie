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
    /** 单位组件--说话 */
    var UnitTalkComponent = /** @class */ (function (_super) {
        __extends(UnitTalkComponent, _super);
        function UnitTalkComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //默认说话时长-秒
            _this.DEFAULT_TALK_TIME = 5;
            /** 是否始终显示对话 */
            _this.isAllwaysShowTalk = false;
            _this.talkBoxOffsetY = 0;
            _this.talkBoxOffsetX = 0;
            _this.elapseTalkTime = 0;
            //显示文字内容
            _this.content = "";
            //坐标值
            _this._x = 0;
            _this._y = 0;
            //宽高
            _this._width = 0;
            _this._height = 0;
            //缩放值
            _this._scaleFactor = 1;
            _this._scaleX = 1;
            _this._scaleY = 1;
            //是否有对话
            _this._hasTalk = false;
            //是否调整对话框位置
            _this.isAutoPos = true;
            return _this;
        }
        //设置缩放比
        UnitTalkComponent.prototype.setScale = function (sx, sy) {
            this._scaleX = sx;
            this._scaleY = sy;
            this._scaleFactor = this._scaleX;
            this.unit.unitView.talkBox && this.unit.unitView.talkBox.setScale(sx, sy);
        };
        UnitTalkComponent.prototype.scaleAndOffset = function (scale, talkBoxOffsetY, talkBoxOffsetX) {
            if (talkBoxOffsetY === void 0) { talkBoxOffsetY = 0; }
            if (talkBoxOffsetX === void 0) { talkBoxOffsetX = 0; }
            this.setScale(scale, scale);
        };
        Object.defineProperty(UnitTalkComponent.prototype, "scaleFactor", {
            get: function () {
                return this._scaleFactor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitTalkComponent.prototype, "x", {
            get: function () {
                return this._x;
            },
            //设置x, y
            set: function (val) {
                if (this._x != val) {
                    this._x = val;
                    this.unit.unitView.talkBox && (this.unit.unitView.talkBox.x = val);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitTalkComponent.prototype, "y", {
            get: function () {
                return this._y;
            },
            set: function (val) {
                if (this._y != val) {
                    this._y = val;
                    this.unit.unitView.talkBox && (this.unit.unitView.talkBox.y = val);
                }
            },
            enumerable: true,
            configurable: true
        });
        UnitTalkComponent.prototype.pos = function (x, y) {
            this.x = x;
            this.y = y;
            this.unit.unitView.talkBox && this.unit.unitView.talkBox.setXY(x, y);
        };
        Object.defineProperty(UnitTalkComponent.prototype, "width", {
            get: function () {
                if (this.unit.unitView.talkBox) {
                    return this.unit.unitView.talkBox.width;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitTalkComponent.prototype, "height", {
            get: function () {
                if (this.unit.unitView.talkBox) {
                    return this.unit.unitView.talkBox.height;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitTalkComponent.prototype, "boundHeight", {
            get: function () {
                var scaleRefUnit = this.unit.unitData.shrinkScaleRate;
                return this.height * scaleRefUnit * this._scaleFactor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitTalkComponent.prototype, "boundWidth", {
            get: function () {
                var scaleRefUnit = this.unit.unitData.shrinkScaleRate;
                return this.width * scaleRefUnit * this._scaleFactor;
            },
            enumerable: true,
            configurable: true
        });
        UnitTalkComponent.prototype.onRender = function () {
            if (!this.isAllwaysShowTalk) {
                this.elapseTalkTime += Games.GameDriver.time.renderTime.deltaTime * 1000;
                if (this.elapseTalkTime > this.DEFAULT_TALK_TIME * 1000) {
                    this.elapseTalkTime = 0;
                    this.hideTalk();
                }
            }
            if (this.hasTalk) {
                var dx = -this.boundWidth / 2;
                var dy = -this.unit.unitData.boundHeight - this.boundHeight;
                this.pos(this.unit.unitData.x + dx, this.unit.unitData.y + dy);
                this.x += this.talkBoxOffsetX;
                this.y += this.talkBoxOffsetY;
            }
        };
        UnitTalkComponent.prototype.setTalk = function (content, allwaysShow) {
            //移除头顶头像
            this.unit && this.unit.removeHeadIcon();
            this.isAllwaysShowTalk = allwaysShow;
            this.elapseTalkTime = 0;
            this.hideTalk();
            this._hasTalk = true;
            this.content = content;
            this.unit.unitView.talkBox = Game.pool.talkBoxPool.requestItem();
            if (this.unit.unitView.talkBox) {
                this.unit.unitView.talkBox.visible = true;
                this.unit.unitView.talkBox.setText(content);
                var talkBoxRefUnitScale = this.unit.unitData.shrinkScaleRate * this._scaleFactor;
                this.unit.unitView.talkBox.setScale(talkBoxRefUnitScale, talkBoxRefUnitScale);
            }
            if (this.unit.parent) {
                this.unit.parent.addChild(this.unit.unitView.talkBox.displayObject);
            }
            //set once
            var dx = -this.boundWidth / 2;
            var dy = -this.unit.unitData.boundHeight - this.boundHeight;
            this.pos(this.unit.unitData.x + dx, this.unit.unitData.y + dy);
            this.x += this.talkBoxOffsetX;
            this.y += this.talkBoxOffsetY;
        };
        UnitTalkComponent.prototype.hideTalk = function () {
            if (this.hasTalk) {
                if (this.unit.unitView.talkBox) {
                    this.content = "";
                    this.unit.unitView.talkBox.setScale(1, 1);
                    this.unit.unitView.talkBox.setText("");
                    this.unit.unitView.talkBox.displayObject.removeSelf();
                    Game.pool.talkBoxPool.recoverItem(this.unit.unitView.talkBox);
                }
                this._hasTalk = false;
            }
        };
        Object.defineProperty(UnitTalkComponent.prototype, "hasTalk", {
            //是否有对话
            get: function () {
                return this._hasTalk;
            },
            enumerable: true,
            configurable: true
        });
        UnitTalkComponent.prototype.scaleTalkBox = function (scale, talkBoxOffsetX, talkBoxOffsetY) {
            if (talkBoxOffsetX === void 0) { talkBoxOffsetX = 0; }
            if (talkBoxOffsetY === void 0) { talkBoxOffsetY = 0; }
            this.talkBoxOffsetX = talkBoxOffsetX;
            this.talkBoxOffsetY = talkBoxOffsetY;
            this.scaleAndOffset(scale);
        };
        UnitTalkComponent.prototype.dispose = function () {
            this.hideTalk();
            this.talkBoxOffsetX = 0;
            this.talkBoxOffsetY = 0;
            _super.prototype.dispose.call(this);
        };
        return UnitTalkComponent;
    }(Games.UnitComponent));
    Games.UnitTalkComponent = UnitTalkComponent;
})(Games || (Games = {}));
//# sourceMappingURL=UnitTalkComponent.js.map