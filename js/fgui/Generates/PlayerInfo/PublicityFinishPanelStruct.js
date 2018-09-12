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
    var PlayerInfo;
    (function (PlayerInfo) {
        var PublicityFinishPanelStruct = /** @class */ (function (_super) {
            __extends(PublicityFinishPanelStruct, _super);
            function PublicityFinishPanelStruct() {
                return _super.call(this) || this;
            }
            PublicityFinishPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "PublicityFinishPanel"));
            };
            PublicityFinishPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_awardList = (this.getChild("awardList"));
                this.m_t0 = this.getTransition("t0");
            };
            PublicityFinishPanelStruct.URL = "ui://tderqmz5dm3125";
            PublicityFinishPanelStruct.DependPackages = ["PlayerInfo", "Common"];
            return PublicityFinishPanelStruct;
        }(fairygui.GComponent));
        PlayerInfo.PublicityFinishPanelStruct = PublicityFinishPanelStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PublicityFinishPanelStruct.js.map