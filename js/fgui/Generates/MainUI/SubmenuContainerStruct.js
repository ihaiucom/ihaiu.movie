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
        var SubmenuContainerStruct = /** @class */ (function (_super) {
            __extends(SubmenuContainerStruct, _super);
            function SubmenuContainerStruct() {
                return _super.call(this) || this;
            }
            SubmenuContainerStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "SubmenuContainer"));
            };
            SubmenuContainerStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            SubmenuContainerStruct.URL = "ui://7ecreso0tf2bx4m";
            SubmenuContainerStruct.DependPackages = ["MainUI"];
            return SubmenuContainerStruct;
        }(fairygui.GComponent));
        MainUI.SubmenuContainerStruct = SubmenuContainerStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SubmenuContainerStruct.js.map