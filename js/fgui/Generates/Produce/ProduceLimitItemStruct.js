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
        var ProduceLimitItemStruct = /** @class */ (function (_super) {
            __extends(ProduceLimitItemStruct, _super);
            function ProduceLimitItemStruct() {
                return _super.call(this) || this;
            }
            ProduceLimitItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ProduceLimitItem"));
            };
            ProduceLimitItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_nameText = (this.getChild("nameText"));
                this.m_descText = (this.getChild("descText"));
                this.m_timeText = (this.getChild("timeText"));
                this.m_itemIcon = (this.getChild("itemIcon"));
                this.m_itemNum = (this.getChild("itemNum"));
                this.m_btnUnlock = (this.getChild("btnUnlock"));
            };
            ProduceLimitItemStruct.URL = "ui://eg7c5x5rfd65h";
            ProduceLimitItemStruct.DependPackages = ["Produce", "Common", "Building"];
            return ProduceLimitItemStruct;
        }(fairygui.GComponent));
        Produce.ProduceLimitItemStruct = ProduceLimitItemStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceLimitItemStruct.js.map