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
    var Common;
    (function (Common) {
        var RankRenamePanelStruct = /** @class */ (function (_super) {
            __extends(RankRenamePanelStruct, _super);
            function RankRenamePanelStruct() {
                return _super.call(this) || this;
            }
            RankRenamePanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "RankRenamePanel"));
            };
            RankRenamePanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_titleName = (this.getChild("titleName"));
                this.m_inputName = (this.getChild("inputName"));
                this.m_txtContent = (this.getChild("txtContent"));
                this.m_btn_close = (this.getChild("btn_close"));
                this.m_btn_rename = (this.getChild("btn_rename"));
                this.m_btn_editor = (this.getChild("btn_editor"));
            };
            RankRenamePanelStruct.URL = "ui://txcuvopdcvs8cl";
            RankRenamePanelStruct.DependPackages = ["Common"];
            return RankRenamePanelStruct;
        }(fairygui.GComponent));
        Common.RankRenamePanelStruct = RankRenamePanelStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankRenamePanelStruct.js.map