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
        var ButtonStruct = /** @class */ (function (_super) {
            __extends(ButtonStruct, _super);
            function ButtonStruct() {
                return _super.call(this) || this;
            }
            ButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "Button"));
            };
            ButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            ButtonStruct.URL = "ui://tqkotd6ue3hk6";
            ButtonStruct.DependPackages = ["Talk"];
            return ButtonStruct;
        }(fairygui.GButton));
        Talk.ButtonStruct = ButtonStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonStruct.js.map