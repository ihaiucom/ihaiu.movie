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
        var WarEndIncomeItemStruct = /** @class */ (function (_super) {
            __extends(WarEndIncomeItemStruct, _super);
            function WarEndIncomeItemStruct() {
                return _super.call(this) || this;
            }
            WarEndIncomeItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarEndIncomeItem"));
            };
            WarEndIncomeItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_icon = (this.getChild("icon"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_shouyipingjia = (this.getChild("shouyipingjia"));
                this.m_timeLeftTip = (this.getChild("timeLeftTip"));
                this.m_timeLeft = (this.getChild("timeLeft"));
                this.m_endBtn = (this.getChild("endBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarEndIncomeItemStruct.URL = "ui://y6ozucp1qbxl8f";
            WarEndIncomeItemStruct.DependPackages = ["WarMovie"];
            return WarEndIncomeItemStruct;
        }(fairygui.GComponent));
        WarMovie.WarEndIncomeItemStruct = WarEndIncomeItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarEndIncomeItemStruct.js.map