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
    var Oscar;
    (function (Oscar) {
        var OscarAwardsListPanelStruct = /** @class */ (function (_super) {
            __extends(OscarAwardsListPanelStruct, _super);
            function OscarAwardsListPanelStruct() {
                return _super.call(this) || this;
            }
            OscarAwardsListPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Oscar", "OscarAwardsListPanel"));
            };
            OscarAwardsListPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_checkDay = (this.getChild("checkDay"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            OscarAwardsListPanelStruct.URL = "ui://spuqgpclyylj0";
            OscarAwardsListPanelStruct.DependPackages = ["Oscar", "Common"];
            return OscarAwardsListPanelStruct;
        }(fairygui.GComponent));
        Oscar.OscarAwardsListPanelStruct = OscarAwardsListPanelStruct;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarAwardsListPanelStruct.js.map