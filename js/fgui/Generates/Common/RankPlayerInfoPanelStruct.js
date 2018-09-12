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
        var RankPlayerInfoPanelStruct = /** @class */ (function (_super) {
            __extends(RankPlayerInfoPanelStruct, _super);
            function RankPlayerInfoPanelStruct() {
                return _super.call(this) || this;
            }
            RankPlayerInfoPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "RankPlayerInfoPanel"));
            };
            RankPlayerInfoPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_btnClose = (this.getChild("btnClose"));
                this.m_info = (this.getChild("info"));
                this.m_movie = (this.getChild("movie"));
            };
            RankPlayerInfoPanelStruct.URL = "ui://txcuvopdcvs8cj";
            RankPlayerInfoPanelStruct.DependPackages = ["Common"];
            return RankPlayerInfoPanelStruct;
        }(fairygui.GComponent));
        Common.RankPlayerInfoPanelStruct = RankPlayerInfoPanelStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankPlayerInfoPanelStruct.js.map