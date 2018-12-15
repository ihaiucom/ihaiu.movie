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
        var WarExpectStruct = /** @class */ (function (_super) {
            __extends(WarExpectStruct, _super);
            function WarExpectStruct() {
                return _super.call(this) || this;
            }
            WarExpectStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "WarExpect"));
            };
            WarExpectStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_control = this.getController("control");
                this.m_tip1 = (this.getChild("tip1"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_expectProgress = (this.getChild("expectProgress"));
                this.m_t0 = this.getTransition("t0");
            };
            WarExpectStruct.URL = "ui://7ecreso0qz7hx4r";
            WarExpectStruct.DependPackages = ["MainUI", "System", "Common"];
            return WarExpectStruct;
        }(fairygui.GComponent));
        MainUI.WarExpectStruct = WarExpectStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarExpectStruct.js.map