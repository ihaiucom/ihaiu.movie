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
    var GM;
    (function (GM) {
        var GMTimeLoopItem = /** @class */ (function (_super) {
            __extends(GMTimeLoopItem, _super);
            function GMTimeLoopItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GMTimeLoopItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_visiable.onClick(this, this.onClickEnableButton);
            };
            GMTimeLoopItem.prototype.setItemData = function (data) {
                this.data = data;
                this.m_visiable.selected = data.enable;
                this.m_title.text = data.toString();
            };
            GMTimeLoopItem.prototype.setTickData = function (data) {
                this.tickData = data;
                this.m_visiable.selected = data.debugEnable;
                this.m_title.text = data.toString();
            };
            GMTimeLoopItem.prototype.onClickEnableButton = function () {
                if (this.data) {
                    this.data.enable = !this.data.enable;
                }
                if (this.tickData) {
                    this.tickData.debugEnable = !this.tickData.debugEnable;
                }
            };
            return GMTimeLoopItem;
        }(GM.GMTimeLoopItemStruct));
        GM.GMTimeLoopItem = GMTimeLoopItem;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMTimeLoopItem.js.map