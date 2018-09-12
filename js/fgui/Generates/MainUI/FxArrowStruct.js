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
    var MainUI;
    (function (MainUI) {
        var FxArrowStruct = /** @class */ (function (_super) {
            __extends(FxArrowStruct, _super);
            function FxArrowStruct() {
                return _super.call(this) || this;
            }
            FxArrowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "FxArrow"));
            };
            FxArrowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_arrow1 = (this.getChild("arrow1"));
                this.m_t0 = this.getTransition("t0");
            };
            FxArrowStruct.URL = "ui://7ecreso0r1gox59";
            FxArrowStruct.DependPackages = ["MainUI"];
            return FxArrowStruct;
        }(fairygui.GComponent));
        MainUI.FxArrowStruct = FxArrowStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FxArrowStruct.js.map