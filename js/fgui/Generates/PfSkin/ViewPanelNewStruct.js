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
        var ViewPanelNewStruct = /** @class */ (function (_super) {
            __extends(ViewPanelNewStruct, _super);
            function ViewPanelNewStruct() {
                return _super.call(this) || this;
            }
            ViewPanelNewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ViewPanelNew"));
            };
            ViewPanelNewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listAsset = (this.getChild("listAsset"));
                this.m_title = (this.getChild("title"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            ViewPanelNewStruct.URL = "ui://s33x8418pmz6t25r";
            ViewPanelNewStruct.DependPackages = ["PfSkin", "Common"];
            return ViewPanelNewStruct;
        }(fairygui.GLabel));
        PfSkin.ViewPanelNewStruct = ViewPanelNewStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ViewPanelNewStruct.js.map