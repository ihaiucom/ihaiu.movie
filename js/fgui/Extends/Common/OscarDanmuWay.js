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
        var OscarDanmuWay = /** @class */ (function (_super) {
            __extends(OscarDanmuWay, _super);
            function OscarDanmuWay() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 运行中的弹幕组件
                _this.listDanmuContent = [];
                // 弹幕组件对象池
                _this.contentPool = new fairygui.GObjectPool();
                // 弹幕速度
                _this.speed = 0.1;
                //未空余时缓存数据		
                _this.contentCache = [];
                _this.isStart = false;
                return _this;
            }
            Object.defineProperty(OscarDanmuWay.prototype, "freeTime", {
                get: function () {
                    if (this.runToFreeItem) {
                        if (this.contentCache.length > 0) {
                            return this.runToFreeItem.freeTime + this.width / this.speed * this.contentCache.length;
                        }
                        else {
                            return this.runToFreeItem.freeTime;
                        }
                    }
                    return 0;
                },
                enumerable: true,
                configurable: true
            });
            OscarDanmuWay.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            OscarDanmuWay.prototype.Show = function () {
                this.Start();
            };
            OscarDanmuWay.prototype.Hide = function () {
                this.Clear();
            };
            OscarDanmuWay.prototype.AddDanmu = function (danmu) {
                if (this.freeTime == 0) {
                    this.AddDanmuItem(danmu);
                }
                else {
                    this.contentCache.push(danmu);
                }
            };
            OscarDanmuWay.prototype.AddMsg = function (msg) {
                var danmu = new Games.DanmuData();
                danmu.msg = msg;
                this.AddDanmu(danmu);
            };
            OscarDanmuWay.prototype.AddDanmuItem = function (danmu) {
                var content = this.contentPool.getObject(fgui.Common.OscarDanmuContent.URL);
                this.addChild(content);
                content.setXY(this.width, 0);
                content.InitView(danmu, this.width, this.speed, this, this.OnMoveFree, this.OnMoveFinish);
                this.runToFreeItem = content;
                this.listDanmuContent.push(content);
                if (this.isStart) {
                    content.StartMove();
                }
            };
            OscarDanmuWay.prototype.Start = function () {
                this.isStart = true;
                for (var index = 0; index < this.listDanmuContent.length; index++) {
                    var item = this.listDanmuContent[index];
                    item.StartMove();
                }
            };
            OscarDanmuWay.prototype.Clear = function () {
                this.isStart = false;
                if (this.runToFreeItem) {
                    this.runToFreeItem = null;
                }
                for (var index = 0; index < this.listDanmuContent.length; index++) {
                    var item = this.listDanmuContent[index];
                    item.OnMoveFinish();
                }
                this.contentCache.length = 0;
            };
            OscarDanmuWay.prototype.OnMoveFree = function (item) {
                if (this.contentCache && this.contentCache.length > 0) {
                    var data = this.contentCache.shift();
                    this.AddDanmuItem(data);
                }
                else {
                    this.runToFreeItem = null;
                    if (this.allFreeHandler) {
                        this.allFreeHandler.run();
                    }
                }
            };
            OscarDanmuWay.prototype.OnMoveFinish = function (item) {
                if (this.listDanmuContent && this.listDanmuContent.length > 0) {
                    this.listDanmuContent.shift();
                }
                else {
                    if (this.allFinishHandler) {
                        this.allFinishHandler.run();
                    }
                }
                this.removeChild(item);
                this.contentPool.returnObject(item);
            };
            Object.defineProperty(OscarDanmuWay.prototype, "AllFreeHandler", {
                set: function (handler) {
                    this.allFreeHandler = handler;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(OscarDanmuWay.prototype, "AllFinishHandler", {
                set: function (handler) {
                    this.allFinishHandler = handler;
                },
                enumerable: true,
                configurable: true
            });
            return OscarDanmuWay;
        }(Common.OscarDanmuWayStruct));
        Common.OscarDanmuWay = OscarDanmuWay;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarDanmuWay.js.map