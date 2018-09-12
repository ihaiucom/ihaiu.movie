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
    var PfSkin;
    (function (PfSkin) {
        var ItemCellView = fgui.Common.ItemCellView;
        var TipRewardUI = /** @class */ (function (_super) {
            __extends(TipRewardUI, _super);
            function TipRewardUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TipRewardUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            /**
             *
             * @param items
             */
            TipRewardUI.prototype.setItems = function (items) {
                this.m_list.removeChildrenToPool();
                for (var index = 0; index < items.length; index++) {
                    var item = items[index];
                    var view = this.m_list.addItemFromPool(ItemCellView.URL);
                    view.updateViewByDTNum(item);
                }
                this.m_list.viewWidth = items.length * 86;
            };
            /**
             *
             * @param target
             */
            TipRewardUI.prototype.setPos = function (target) {
                var globalPos = target.localToGlobal(0, 0);
                var localPos = this.parent.globalToLocal(globalPos.x, globalPos.y);
                this.setXY(localPos.x + 43, localPos.y);
                if (localPos.x + this.m_list.viewWidth > fairygui.GRoot.inst.width) {
                    this.m_c1.selectedIndex = 1;
                    this.setPivot((this.width - 60) / this.width, 1, true);
                }
                else {
                    this.m_c1.selectedIndex = 0;
                    this.setPivot(0.5, 1, true);
                }
            };
            return TipRewardUI;
        }(PfSkin.TipRewardUIStruct));
        PfSkin.TipRewardUI = TipRewardUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TipRewardUI.js.map