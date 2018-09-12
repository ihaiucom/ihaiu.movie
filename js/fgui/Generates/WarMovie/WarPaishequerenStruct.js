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
        var WarPaishequerenStruct = /** @class */ (function (_super) {
            __extends(WarPaishequerenStruct, _super);
            function WarPaishequerenStruct() {
                return _super.call(this) || this;
            }
            WarPaishequerenStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarPaishequeren"));
            };
            WarPaishequerenStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tip = (this.getChild("tip"));
                this.m_icon = (this.getChild("icon"));
                this.m_cost = (this.getChild("cost"));
                this.m_closeTip = (this.getChild("closeTip"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarPaishequerenStruct.URL = "ui://y6ozucp1r0zd2v";
            WarPaishequerenStruct.DependPackages = ["WarMovie", "Common"];
            return WarPaishequerenStruct;
        }(fairygui.GComponent));
        WarMovie.WarPaishequerenStruct = WarPaishequerenStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarPaishequerenStruct.js.map