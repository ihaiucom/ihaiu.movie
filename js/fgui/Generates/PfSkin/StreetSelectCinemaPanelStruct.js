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
        var StreetSelectCinemaPanelStruct = /** @class */ (function (_super) {
            __extends(StreetSelectCinemaPanelStruct, _super);
            function StreetSelectCinemaPanelStruct() {
                return _super.call(this) || this;
            }
            StreetSelectCinemaPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StreetSelectCinemaPanel"));
            };
            StreetSelectCinemaPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_viewPanel = (this.getChild("viewPanel"));
                this.m_btnConfirm = (this.getChild("btnConfirm"));
            };
            StreetSelectCinemaPanelStruct.URL = "ui://s33x84186ia7t1v7";
            StreetSelectCinemaPanelStruct.DependPackages = ["PfSkin", "Common"];
            return StreetSelectCinemaPanelStruct;
        }(fairygui.GComponent));
        PfSkin.StreetSelectCinemaPanelStruct = StreetSelectCinemaPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetSelectCinemaPanelStruct.js.map