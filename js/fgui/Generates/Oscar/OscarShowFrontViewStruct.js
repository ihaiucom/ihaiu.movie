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
        var OscarShowFrontViewStruct = /** @class */ (function (_super) {
            __extends(OscarShowFrontViewStruct, _super);
            function OscarShowFrontViewStruct() {
                return _super.call(this) || this;
            }
            OscarShowFrontViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Oscar", "OscarShowFrontView"));
            };
            OscarShowFrontViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_seletCup = this.getController("seletCup");
                this.m_buttonState = this.getController("buttonState");
                this.m_listOscarCup = (this.getChild("listOscarCup"));
                this.m_title = (this.getChild("title"));
                this.m_name = (this.getChild("name"));
                this.m_btnLeft = (this.getChild("btnLeft"));
                this.m_btnRight = (this.getChild("btnRight"));
                this.m_awardsTitle = (this.getChild("awardsTitle"));
                this.m_btnCongra = (this.getChild("btnCongra"));
                this.m_btnReward = (this.getChild("btnReward"));
            };
            OscarShowFrontViewStruct.URL = "ui://spuqgpclenjfz";
            OscarShowFrontViewStruct.DependPackages = ["Oscar", "Common"];
            return OscarShowFrontViewStruct;
        }(fairygui.GComponent));
        Oscar.OscarShowFrontViewStruct = OscarShowFrontViewStruct;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarShowFrontViewStruct.js.map