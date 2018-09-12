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
        var WarEndingIncomeStruct = /** @class */ (function (_super) {
            __extends(WarEndingIncomeStruct, _super);
            function WarEndingIncomeStruct() {
                return _super.call(this) || this;
            }
            WarEndingIncomeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarEndingIncome"));
            };
            WarEndingIncomeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_nameTip = (this.getChild("nameTip"));
                this.m_title = (this.getChild("title"));
                this.m_filmList = (this.getChild("filmList"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarEndingIncomeStruct.URL = "ui://y6ozucp1qbxl8c";
            WarEndingIncomeStruct.DependPackages = ["WarMovie", "Common"];
            return WarEndingIncomeStruct;
        }(fairygui.GComponent));
        WarMovie.WarEndingIncomeStruct = WarEndingIncomeStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarEndingIncomeStruct.js.map