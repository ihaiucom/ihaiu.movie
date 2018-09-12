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
    var WarMovie;
    (function (WarMovie) {
        var WarXKHuifuStruct = /** @class */ (function (_super) {
            __extends(WarXKHuifuStruct, _super);
            function WarXKHuifuStruct() {
                return _super.call(this) || this;
            }
            WarXKHuifuStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarXKHuifu"));
            };
            WarXKHuifuStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_need = (this.getChild("need"));
                this.m_icon = (this.getChild("icon"));
                this.m_num = (this.getChild("num"));
                this.m_topTIp = (this.getChild("topTIp"));
                this.m_icon2 = (this.getChild("icon2"));
                this.m_time = (this.getChild("time"));
                this.m_bottomTip = (this.getChild("bottomTip"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            WarXKHuifuStruct.URL = "ui://y6ozucp1qbxl8k";
            WarXKHuifuStruct.DependPackages = ["WarMovie", "Common", "PlayerInfo", "MainUI"];
            return WarXKHuifuStruct;
        }(fairygui.GComponent));
        WarMovie.WarXKHuifuStruct = WarXKHuifuStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarXKHuifuStruct.js.map