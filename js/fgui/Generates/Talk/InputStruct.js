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
    var Talk;
    (function (Talk) {
        var InputStruct = /** @class */ (function (_super) {
            __extends(InputStruct, _super);
            function InputStruct() {
                return _super.call(this) || this;
            }
            InputStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "Input"));
            };
            InputStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            InputStruct.URL = "ui://tqkotd6ue3hk5";
            InputStruct.DependPackages = ["Talk"];
            return InputStruct;
        }(fairygui.GLabel));
        Talk.InputStruct = InputStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=InputStruct.js.map