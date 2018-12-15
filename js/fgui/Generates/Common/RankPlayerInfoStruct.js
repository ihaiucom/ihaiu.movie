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
        var RankPlayerInfoStruct = /** @class */ (function (_super) {
            __extends(RankPlayerInfoStruct, _super);
            function RankPlayerInfoStruct() {
                return _super.call(this) || this;
            }
            RankPlayerInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "RankPlayerInfo"));
            };
            RankPlayerInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_name = (this.getChild("name"));
                this.m_lv = (this.getChild("lv"));
                this.m_union = (this.getChild("union"));
                this.m_signature = (this.getChild("signature"));
                this.m_street = (this.getChild("street"));
                this.m_actor = (this.getChild("actor"));
                this.m_build = (this.getChild("build"));
                this.m_market = (this.getChild("market"));
            };
            RankPlayerInfoStruct.URL = "ui://txcuvopdcvs8ck";
            RankPlayerInfoStruct.DependPackages = ["Common"];
            return RankPlayerInfoStruct;
        }(fairygui.GComponent));
        Common.RankPlayerInfoStruct = RankPlayerInfoStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankPlayerInfoStruct.js.map