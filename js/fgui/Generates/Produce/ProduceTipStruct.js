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
        var ProduceTipStruct = /** @class */ (function (_super) {
            __extends(ProduceTipStruct, _super);
            function ProduceTipStruct() {
                return _super.call(this) || this;
            }
            ProduceTipStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ProduceTip"));
            };
            ProduceTipStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_baseAddNum = (this.getChild("baseAddNum"));
                this.m_itemIcon1 = (this.getChild("itemIcon1"));
                this.m_itemIcon2 = (this.getChild("itemIcon2"));
                this.m_actorAddNum = (this.getChild("actorAddNum"));
                this.m_actorProduceDesc = (this.getChild("actorProduceDesc"));
                this.m_GActor = (this.getChild("GActor"));
            };
            ProduceTipStruct.URL = "ui://eg7c5x5rx9sk1a";
            ProduceTipStruct.DependPackages = ["Produce", "Common"];
            return ProduceTipStruct;
        }(fairygui.GComponent));
        Produce.ProduceTipStruct = ProduceTipStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceTipStruct.js.map