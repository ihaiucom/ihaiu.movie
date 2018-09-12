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
        var BGModelStruct = /** @class */ (function (_super) {
            __extends(BGModelStruct, _super);
            function BGModelStruct() {
                return _super.call(this) || this;
            }
            BGModelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "BGModel"));
            };
            BGModelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
            };
            BGModelStruct.URL = "ui://fiza9hgrg2lpz";
            BGModelStruct.DependPackages = ["System"];
            return BGModelStruct;
        }(fairygui.GComponent));
        System.BGModelStruct = BGModelStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BGModelStruct.js.map