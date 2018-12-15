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
        var ConfirmCostBtnStruct = /** @class */ (function (_super) {
            __extends(ConfirmCostBtnStruct, _super);
            function ConfirmCostBtnStruct() {
                return _super.call(this) || this;
            }
            ConfirmCostBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "ConfirmCostBtn"));
            };
            ConfirmCostBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_colorCtrol = this.getController("colorCtrol");
                this.m_icon = (this.getChild("icon"));
                this.m_item = (this.getChild("item"));
                this.m_title = (this.getChild("title"));
                this.m_cost = (this.getChild("cost"));
            };
            ConfirmCostBtnStruct.URL = "ui://y6ozucp1snhga0";
            ConfirmCostBtnStruct.DependPackages = ["WarMovie", "Common"];
            return ConfirmCostBtnStruct;
        }(fairygui.GButton));
        WarMovie.ConfirmCostBtnStruct = ConfirmCostBtnStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ConfirmCostBtnStruct.js.map