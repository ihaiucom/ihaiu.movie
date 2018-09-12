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
        var StateView = /** @class */ (function (_super) {
            __extends(StateView, _super);
            function StateView() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.list = [];
                _this.list2 = [];
                return _this;
            }
            StateView.show = function () {
                if (StateView._install == null) {
                    StateView._install = StateView.createInstance();
                }
                if (!StateView._install.parent) {
                    Games.MenuLayer.floatMsg.addChild(StateView._install);
                    StateView._install.onShow();
                }
            };
            StateView.hide = function () {
                if (StateView._install) {
                    if (StateView._install.parent) {
                        StateView._install.removeFromParent();
                        StateView._install.onHide();
                    }
                }
            };
            StateView.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                var item = System.StateItem.createInstance();
                item = System.StateItem.createInstance();
                item.key = "isWebGL";
                item.setVal(Laya.Render.isWebGL);
                this.list2.push(item);
                item = System.StateItem.createInstance();
                item.key = "isConchWebGL";
                item.setVal(Laya.Render.isConchWebGL);
                this.list2.push(item);
                item = System.StateItem.createInstance();
                item.key = "is3DMode";
                item.setVal(Laya.Render.is3DMode);
                this.list2.push(item);
                item = System.StateItem.createInstance();
                item.key = "isConchApp";
                item.setVal(Laya.Render.isConchApp);
                this.list2.push(item);
                item = System.StateItem.createInstance();
                item.key = "isConchNode";
                item.setVal(Laya.Render.isConchNode);
                this.list2.push(item);
                item = System.StateItem.createInstance();
                item.key = "Render.context";
                item.setVal(getClassName(Laya.Render.context));
                this.list2.push(item);
                item = System.StateItem.createInstance();
                item.key = "FPS";
                this.list.push(item);
                this.FPS = item;
                item = System.StateItem.createInstance();
                item.key = "canvasNormal";
                this.list.push(item);
                this.canvasNormal = item;
                item = System.StateItem.createInstance();
                item.key = "canvasBitmap";
                this.list.push(item);
                this.canvasBitmap = item;
                item = System.StateItem.createInstance();
                item.key = "canvasReCache";
                this.list.push(item);
                this.canvasReCache = item;
                item = System.StateItem.createInstance();
                item.key = "currentMemorySize";
                this.list.push(item);
                this.currentMemorySize = item;
                item = System.StateItem.createInstance();
                item.key = "shaderCall";
                this.list.push(item);
                this.shaderCall = item;
                item = System.StateItem.createInstance();
                item.key = "drawCall";
                this.list.push(item);
                this.drawCall = item;
                item = System.StateItem.createInstance();
                item.key = "trianglesFaces";
                this.list.push(item);
                this.trianglesFaces = item;
                item = System.StateItem.createInstance();
                item.key = "spriteCount";
                this.list.push(item);
                this.spriteCount = item;
                item = System.StateItem.createInstance();
                item.key = "spriteRenderUseCacheCount";
                this.list.push(item);
                this.spriteRenderUseCacheCount = item;
                item = System.StateItem.createInstance();
                item.key = "treeNodeCollision";
                this.list.push(item);
                this.treeNodeCollision = item;
                item = System.StateItem.createInstance();
                item.key = "treeSpriteCollision";
                this.list.push(item);
                this.treeSpriteCollision = item;
                item = System.StateItem.createInstance();
                item.key = "renderSlow";
                this.list.push(item);
                this.renderSlow = item;
                for (var i = 0; i < this.list2.length; i++) {
                    this.list2[i].y = i * 40;
                    this.addChild(this.list2[i]);
                }
                for (var i = 0; i < this.list.length; i++) {
                    this.list[i].y = (i + this.list2.length) * 40;
                    this.addChild(this.list[i]);
                }
                this.height = (this.list.length + this.list2.length) * 40;
                this.draggable = true;
                this.dragBounds = new laya.maths.Rectangle(-50, -50, Laya.stage.width + 100, Laya.stage.height + 100);
            };
            StateView.prototype.onShow = function () {
                Laya.timer.frameLoop(60, this, this.loop);
            };
            StateView.prototype.onHide = function () {
                Laya.timer.clear(this, this.loop);
            };
            StateView.prototype.loop = function () {
                var state = laya.utils.Stat;
                for (var i = 0; i < this.list.length; i++) {
                    var item = this.list[i];
                    item.setVal(state[item.key]);
                }
            };
            return StateView;
        }(System.StateViewStruct));
        System.StateView = StateView;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StateView.js.map