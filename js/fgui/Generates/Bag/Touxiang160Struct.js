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
    var Bag;
    (function (Bag) {
        var Touxiang160Struct = /** @class */ (function (_super) {
            __extends(Touxiang160Struct, _super);
            function Touxiang160Struct() {
                return _super.call(this) || this;
            }
            Touxiang160Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Bag", "touxiang160"));
            };
            Touxiang160Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            Touxiang160Struct.URL = "ui://wdrb9z06rdes13";
            Touxiang160Struct.DependPackages = ["Bag", "Common"];
            return Touxiang160Struct;
        }(fairygui.GLabel));
        Bag.Touxiang160Struct = Touxiang160Struct;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Touxiang160Struct.js.map