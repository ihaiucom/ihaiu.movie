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
        var InputViewStruct = /** @class */ (function (_super) {
            __extends(InputViewStruct, _super);
            function InputViewStruct() {
                return _super.call(this) || this;
            }
            InputViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "InputView"));
            };
            InputViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_input = (this.getChild("input"));
                this.m_btnSend = (this.getChild("btnSend"));
            };
            InputViewStruct.URL = "ui://tqkotd6ue3hk4";
            InputViewStruct.DependPackages = ["Talk"];
            return InputViewStruct;
        }(fairygui.GComponent));
        Talk.InputViewStruct = InputViewStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=InputViewStruct.js.map