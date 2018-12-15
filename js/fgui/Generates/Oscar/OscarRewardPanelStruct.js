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
        var OscarRewardPanelStruct = /** @class */ (function (_super) {
            __extends(OscarRewardPanelStruct, _super);
            function OscarRewardPanelStruct() {
                return _super.call(this) || this;
            }
            OscarRewardPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Oscar", "OscarRewardPanel"));
            };
            OscarRewardPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_list = (this.getChild("list"));
                this.m_btnConfirm = (this.getChild("btnConfirm"));
            };
            OscarRewardPanelStruct.URL = "ui://spuqgpclyylj1";
            OscarRewardPanelStruct.DependPackages = ["Oscar", "Common"];
            return OscarRewardPanelStruct;
        }(fairygui.GComponent));
        Oscar.OscarRewardPanelStruct = OscarRewardPanelStruct;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarRewardPanelStruct.js.map