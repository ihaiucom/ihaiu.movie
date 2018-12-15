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
        var BarSquareStruct = /** @class */ (function (_super) {
            __extends(BarSquareStruct, _super);
            function BarSquareStruct() {
                return _super.call(this) || this;
            }
            BarSquareStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "BarSquare"));
            };
            BarSquareStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t1 = this.getTransition("t1");
            };
            BarSquareStruct.URL = "ui://fiza9hgrqmhbeh";
            BarSquareStruct.DependPackages = ["System"];
            return BarSquareStruct;
        }(fairygui.GComponent));
        System.BarSquareStruct = BarSquareStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BarSquareStruct.js.map