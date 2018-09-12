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
        var NewArtistItemStruct = /** @class */ (function (_super) {
            __extends(NewArtistItemStruct, _super);
            function NewArtistItemStruct() {
                return _super.call(this) || this;
            }
            NewArtistItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "NewArtistItem"));
            };
            NewArtistItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            NewArtistItemStruct.URL = "ui://s33x8418wgdot21d";
            NewArtistItemStruct.DependPackages = ["PfSkin"];
            return NewArtistItemStruct;
        }(fairygui.GComponent));
        PfSkin.NewArtistItemStruct = NewArtistItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=NewArtistItemStruct.js.map