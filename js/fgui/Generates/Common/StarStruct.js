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
        var StarStruct = /** @class */ (function (_super) {
            __extends(StarStruct, _super);
            function StarStruct() {
                return _super.call(this) || this;
            }
            StarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "Star"));
            };
            StarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_starNum = this.getController("starNum");
                this.m_showBG = this.getController("showBG");
                this.m_starLimit = this.getController("starLimit");
                this.m_bs1 = (this.getChild("bs1"));
                this.m_bs2 = (this.getChild("bs2"));
                this.m_bs3 = (this.getChild("bs3"));
                this.m_bs4 = (this.getChild("bs4"));
                this.m_bs5 = (this.getChild("bs5"));
                this.m_bs6 = (this.getChild("bs6"));
                this.m_s1 = (this.getChild("s1"));
                this.m_s2 = (this.getChild("s2"));
                this.m_s3 = (this.getChild("s3"));
                this.m_s4 = (this.getChild("s4"));
                this.m_s5 = (this.getChild("s5"));
                this.m_s6 = (this.getChild("s6"));
            };
            StarStruct.URL = "ui://txcuvopdcvs8do";
            StarStruct.DependPackages = ["Common", "WarMovie"];
            return StarStruct;
        }(fairygui.GComponent));
        Common.StarStruct = StarStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StarStruct.js.map