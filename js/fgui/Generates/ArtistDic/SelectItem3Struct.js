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
    var ArtistDic;
    (function (ArtistDic) {
        var SelectItem3Struct = /** @class */ (function (_super) {
            __extends(SelectItem3Struct, _super);
            function SelectItem3Struct() {
                return _super.call(this) || this;
            }
            SelectItem3Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDic", "SelectItem3"));
            };
            SelectItem3Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            SelectItem3Struct.URL = "ui://aeg3jnlem8at18";
            SelectItem3Struct.DependPackages = ["ArtistDic", "Common"];
            return SelectItem3Struct;
        }(fairygui.GButton));
        ArtistDic.SelectItem3Struct = SelectItem3Struct;
    })(ArtistDic = fgui.ArtistDic || (fgui.ArtistDic = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SelectItem3Struct.js.map