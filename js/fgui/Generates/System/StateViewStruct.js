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
        var StateViewStruct = /** @class */ (function (_super) {
            __extends(StateViewStruct, _super);
            function StateViewStruct() {
                return _super.call(this) || this;
            }
            StateViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "StateView"));
            };
            StateViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
            };
            StateViewStruct.URL = "ui://fiza9hgrqr3y18";
            StateViewStruct.DependPackages = ["System"];
            return StateViewStruct;
        }(fairygui.GComponent));
        System.StateViewStruct = StateViewStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StateViewStruct.js.map