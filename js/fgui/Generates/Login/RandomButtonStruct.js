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
    var Login;
    (function (Login) {
        var RandomButtonStruct = /** @class */ (function (_super) {
            __extends(RandomButtonStruct, _super);
            function RandomButtonStruct() {
                return _super.call(this) || this;
            }
            RandomButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "RandomButton"));
            };
            RandomButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            RandomButtonStruct.URL = "ui://7znsj5i6oh1c2y";
            RandomButtonStruct.DependPackages = ["Login"];
            return RandomButtonStruct;
        }(fairygui.GButton));
        Login.RandomButtonStruct = RandomButtonStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RandomButtonStruct.js.map