var Games;
(function (Games) {
    var TalkBoxCtrl = /** @class */ (function () {
        function TalkBoxCtrl() {
            //默认说话时长-秒
            this.DEFAULT_TALK_TIME = 5;
            //单位显示索引
            this.displayIndex = -1;
            //显示文字内容
            this.content = "";
            //坐标值
            this._x = 0;
            this._y = 0;
            //宽高
            this._width = 0;
            this._height = 0;
            //缩放值
            this._scaleFactor = 1;
            this._scaleX = 1;
            this._scaleY = 1;
            //单位Bounds
            this._unitBounds = new Rectangle(0, 0, 0, 0);
            //是否有对话
            this._hasTalk = false;
            //是否调整对话框位置
            this.isAutoPos = true;
        }
        Object.defineProperty(TalkBoxCtrl.prototype, "scaleFactor", {
            get: function () {
                return this._scaleFactor;
            },
            enumerable: true,
            configurable: true
        });
        //设置缩放比
        TalkBoxCtrl.prototype.setScale = function (sx, sy) {
            this._scaleX = sx;
            this._scaleY = sy;
            this._scaleFactor = this._scaleX;
            this.talkBox && this.talkBox.setScale(sx, sy);
        };
        TalkBoxCtrl.prototype.scaleAndOffset = function (scale, talkBoxOffsetY, talkBoxOffsetX) {
            if (talkBoxOffsetY === void 0) { talkBoxOffsetY = 0; }
            if (talkBoxOffsetX === void 0) { talkBoxOffsetX = 0; }
            this.setScale(scale, scale);
        };
        Object.defineProperty(TalkBoxCtrl.prototype, "x", {
            get: function () {
                return this._x;
            },
            //设置x, y
            set: function (val) {
                this._x = val;
                this.talkBox && (this.talkBox.x = val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TalkBoxCtrl.prototype, "y", {
            get: function () {
                return this._y;
            },
            set: function (val) {
                this._y = val;
                this.talkBox && (this.talkBox.y = val);
            },
            enumerable: true,
            configurable: true
        });
        TalkBoxCtrl.prototype.pos = function (x, y) {
            this.x = x;
            this.y = y;
            this.talkBox && this.talkBox.setXY(x, y);
        };
        Object.defineProperty(TalkBoxCtrl.prototype, "width", {
            get: function () {
                if (this.hasTalk && this.talkBox) {
                    return this.talkBox.width;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TalkBoxCtrl.prototype, "height", {
            get: function () {
                if (this.hasTalk && this.talkBox) {
                    return this.talkBox.height;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        TalkBoxCtrl.prototype.setChildIndex = function (index) {
            this.talkBox && this.parent.setChildIndex(this.talkBox.displayObject, index);
        };
        /** 设置单位Bounds */
        TalkBoxCtrl.prototype.setUnitBounds = function (unitBounds) {
            this._unitBounds = unitBounds;
        };
        /** 显示对话 */
        TalkBoxCtrl.prototype.showOn = function (content, parent, displayIndex) {
            if (displayIndex === void 0) { displayIndex = -1; }
            this.content = content;
            this._hasTalk = true;
            this.talkBox = Game.pool.talkBoxPool.requestItem();
            if (parent instanceof laya.display.Sprite) {
                this.parent = parent;
            }
            else {
                this.parent = parent.displayObject;
            }
            this.displayIndex = displayIndex;
            this.checkShow();
        };
        TalkBoxCtrl.prototype.checkShow = function () {
            if (this.parent && this.talkBox) {
                if (this.displayIndex >= 0) {
                    this.parent.addChildAt(this.talkBox.displayObject, this.displayIndex);
                }
                else {
                    this.parent.addChild(this.talkBox.displayObject);
                }
                this.talkBox.setText(this.content);
                this.talkBox.setXY(this.x, this.y);
                this.talkBox.setScale(this._scaleX, this._scaleY);
            }
        };
        //关闭对话框
        TalkBoxCtrl.prototype.close = function (isDestroy) {
            if (this._hasTalk) {
                if (this.talkBox) {
                    this.content = "";
                    this.talkBox.displayObject.removeSelf();
                    Game.pool.talkBoxPool.recoverItem(this.talkBox);
                    // if (!isDestroy)
                    // {
                    // 	GamePool.talkBoxPool.recoverItem(this.talkBox);
                    // }
                    // else
                    // {
                    // 	this.talkBox.dispose();
                    // 	this.talkBox = null;
                    // }
                }
                this._hasTalk = false;
            }
        };
        Object.defineProperty(TalkBoxCtrl.prototype, "hasTalk", {
            //是否有对话
            get: function () {
                return this._hasTalk;
            },
            enumerable: true,
            configurable: true
        });
        return TalkBoxCtrl;
    }());
    Games.TalkBoxCtrl = TalkBoxCtrl;
})(Games || (Games = {}));
//# sourceMappingURL=TalkBoxCtrl.js.map