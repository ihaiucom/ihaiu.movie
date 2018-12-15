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
    var System;
    (function (System) {
        var ScreenBGStruct = /** @class */ (function (_super) {
            __extends(ScreenBGStruct, _super);
            function ScreenBGStruct() {
                return _super.call(this) || this;
            }
            ScreenBGStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "ScreenBG"));
            };
            ScreenBGStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            ScreenBGStruct.URL = "ui://fiza9hgraat317";
            ScreenBGStruct.DependPackages = ["System"];
            return ScreenBGStruct;
        }(fairygui.GLabel));
        System.ScreenBGStruct = ScreenBGStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ScreenBGStruct.js.map