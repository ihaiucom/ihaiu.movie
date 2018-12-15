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
    var PfSkin;
    (function (PfSkin) {
        var NewArtistBgStruct = /** @class */ (function (_super) {
            __extends(NewArtistBgStruct, _super);
            function NewArtistBgStruct() {
                return _super.call(this) || this;
            }
            NewArtistBgStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "NewArtistBg"));
            };
            NewArtistBgStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            NewArtistBgStruct.URL = "ui://s33x8418wgdot21e";
            NewArtistBgStruct.DependPackages = ["PfSkin", "Common"];
            return NewArtistBgStruct;
        }(fairygui.GComponent));
        PfSkin.NewArtistBgStruct = NewArtistBgStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=NewArtistBgStruct.js.map