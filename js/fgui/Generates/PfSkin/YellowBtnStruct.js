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
    var PfSkin;
    (function (PfSkin) {
        var YellowBtnStruct = /** @class */ (function (_super) {
            __extends(YellowBtnStruct, _super);
            function YellowBtnStruct() {
                return _super.call(this) || this;
            }
            YellowBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "YellowBtn"));
            };
            YellowBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            YellowBtnStruct.URL = "ui://s33x8418jazc1mx";
            YellowBtnStruct.DependPackages = ["PfSkin"];
            return YellowBtnStruct;
        }(fairygui.GButton));
        PfSkin.YellowBtnStruct = YellowBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=YellowBtnStruct.js.map