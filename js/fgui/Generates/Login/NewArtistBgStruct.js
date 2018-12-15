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
        var NewArtistBgStruct = /** @class */ (function (_super) {
            __extends(NewArtistBgStruct, _super);
            function NewArtistBgStruct() {
                return _super.call(this) || this;
            }
            NewArtistBgStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "NewArtistBg"));
            };
            NewArtistBgStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            NewArtistBgStruct.URL = "ui://7znsj5i6wrr65s";
            NewArtistBgStruct.DependPackages = ["Login"];
            return NewArtistBgStruct;
        }(fairygui.GComponent));
        Login.NewArtistBgStruct = NewArtistBgStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=NewArtistBgStruct.js.map