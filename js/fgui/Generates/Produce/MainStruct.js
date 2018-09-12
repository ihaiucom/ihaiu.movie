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
        var MainStruct = /** @class */ (function (_super) {
            __extends(MainStruct, _super);
            function MainStruct() {
                return _super.call(this) || this;
            }
            MainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "Main"));
            };
            MainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_subBg = (this.getChild("subBg"));
                this.m_produceList = (this.getChild("produceList"));
                this.m_roomContainer = (this.getChild("roomContainer"));
                this.m_btn_close = (this.getChild("btn_close"));
                this.m_assetListTitle = (this.getChild("assetListTitle"));
                this.m_tabList = (this.getChild("tabList"));
                this.m_btn_quickProduce = (this.getChild("btn_quickProduce"));
                this.m_btn_quickGetaward = (this.getChild("btn_quickGetaward"));
            };
            MainStruct.URL = "ui://eg7c5x5rfd650";
            MainStruct.DependPackages = ["Produce", "Common"];
            return MainStruct;
        }(fairygui.GComponent));
        Produce.MainStruct = MainStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MainStruct.js.map