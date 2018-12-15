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
    var Produce;
    (function (Produce) {
        var ProduceRenderItem = /** @class */ (function (_super) {
            __extends(ProduceRenderItem, _super);
            function ProduceRenderItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProduceRenderItem.prototype.setData = function (cfg, grade) {
                this.produceId = cfg.id;
                this.grade = grade;
                this.m_activeItem.visible = false;
                this.m_inActiveItem.visible = false;
                if (this.isOpen) {
                    this.m_activeItem.visible = true;
                    this.m_activeItem.setInfo(this.produceId, this.grade);
                }
                else {
                    this.m_inActiveItem.visible = true;
                    this.m_inActiveItem.setInfo(this.produceId, this.grade);
                }
            };
            Object.defineProperty(ProduceRenderItem.prototype, "isOpen", {
                //是否已解锁
                get: function () {
                    return Game.moduleModel.produce.hasProduce(this.produceId);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ProduceRenderItem.prototype, "activeItem", {
                get: function () {
                    return this.m_activeItem;
                },
                enumerable: true,
                configurable: true
            });
            ProduceRenderItem.prototype.updateAssets = function () {
                if (this.isOpen) {
                    this.m_activeItem.updateAssets();
                }
            };
            //更新单项
            ProduceRenderItem.prototype.updateSingleProduce = function () {
                if (this.isOpen) {
                    this.m_activeItem.singleUpdate();
                }
            };
            //更新list所有项
            ProduceRenderItem.prototype.updateProduce = function () {
                if (this.isOpen) {
                    this.m_activeItem.updateView();
                }
                else {
                    this.m_inActiveItem.visible = true;
                    this.m_inActiveItem.setInfo(this.produceId, this.grade);
                }
            };
            ProduceRenderItem.prototype.updateGetRewardView = function () {
                if (this.isOpen) {
                    this.m_activeItem.updateGetReward();
                }
            };
            ProduceRenderItem.prototype.updateLevelupView = function (skillId) {
                if (this.isOpen) {
                    this.m_activeItem.updateUpgrade(skillId);
                }
            };
            ProduceRenderItem.prototype.updateActorView = function (skillId) {
                if (this.isOpen) {
                    this.m_activeItem.updateActor(skillId);
                }
            };
            ProduceRenderItem.prototype.updateImmediateProduce = function () {
                if (this.isOpen) {
                    this.m_activeItem.updateImmediateProduce();
                }
            };
            Object.defineProperty(ProduceRenderItem.prototype, "produceItemIconPos", {
                //showEffect
                get: function () {
                    if (this.isOpen) {
                        return this.m_activeItem.m_itemIcon.displayObject.localToGlobal(new Point(0, 0));
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ProduceRenderItem.prototype, "ProduceLinePos", {
                get: function () {
                    if (this.isOpen) {
                        var produceLineNum = this.m_activeItem.m_produceLine.numChildren;
                        if (produceLineNum > 0) {
                            var lineIcon = this.m_activeItem.m_produceLine.getChildAt(0);
                            var lineListPos = this.m_activeItem.m_produceLine.displayObject.localToGlobal(new Point(0, 0));
                            lineListPos.x += produceLineNum * lineIcon.width - lineIcon.width;
                            return lineListPos;
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            return ProduceRenderItem;
        }(Produce.ProduceRenderItemStruct));
        Produce.ProduceRenderItem = ProduceRenderItem;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceRenderItem.js.map