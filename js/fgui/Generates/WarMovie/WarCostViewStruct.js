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
        var WarCostViewStruct = /** @class */ (function (_super) {
            __extends(WarCostViewStruct, _super);
            function WarCostViewStruct() {
                return _super.call(this) || this;
            }
            WarCostViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarCostView"));
            };
            WarCostViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_nameTip = (this.getChild("nameTip"));
                this.m_yrList = (this.getChild("yrList"));
                this.m_allTip = (this.getChild("allTip"));
                this.m_costText = (this.getChild("costText"));
                this.m_costIcon = (this.getChild("costIcon"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarCostViewStruct.URL = "ui://y6ozucp1r0zd2y";
            WarCostViewStruct.DependPackages = ["WarMovie", "Common", "System"];
            return WarCostViewStruct;
        }(fairygui.GComponent));
        WarMovie.WarCostViewStruct = WarCostViewStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCostViewStruct.js.map