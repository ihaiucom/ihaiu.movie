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
        var ProduceItemStruct = /** @class */ (function (_super) {
            __extends(ProduceItemStruct, _super);
            function ProduceItemStruct() {
                return _super.call(this) || this;
            }
            ProduceItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ProduceItem"));
            };
            ProduceItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_avatarLoader = (this.getChild("avatarLoader"));
                this.m_descText = (this.getChild("descText"));
                this.m_produceMaxLine = (this.getChild("produceMaxLine"));
                this.m_produceLine = (this.getChild("produceLine"));
                this.m_levelText = (this.getChild("levelText"));
                this.m_nameText = (this.getChild("nameText"));
                this.m_storeBg = (this.getChild("storeBg"));
                this.m_curItemNumLb = (this.getChild("curItemNumLb"));
                this.m_curItemNum = (this.getChild("curItemNum"));
                this.m_item = (this.getChild("item"));
                this.m_cutTime = (this.getChild("cutTime"));
                this.m_onProducing = (this.getChild("onProducing"));
                this.m_btn_addAvatar = (this.getChild("btn_addAvatar"));
                this.m_btn_produce = (this.getChild("btn_produce"));
                this.m_btn_upgrade = (this.getChild("btn_upgrade"));
                this.m_btn_tips = (this.getChild("btn_tips"));
                this.m_effectFull = (this.getChild("effectFull"));
                this.m_itemIcon = (this.getChild("itemIcon"));
                this.m_btn_getItem = (this.getChild("btn_getItem"));
                this.m_btn_timeEnd = (this.getChild("btn_timeEnd"));
                this.m_tip = (this.getChild("tip"));
            };
            ProduceItemStruct.URL = "ui://eg7c5x5rfd65g";
            ProduceItemStruct.DependPackages = ["Produce", "Common", "Fx"];
            return ProduceItemStruct;
        }(fairygui.GComponent));
        Produce.ProduceItemStruct = ProduceItemStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceItemStruct.js.map