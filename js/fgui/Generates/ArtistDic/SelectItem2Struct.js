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
        var SelectItem2Struct = /** @class */ (function (_super) {
            __extends(SelectItem2Struct, _super);
            function SelectItem2Struct() {
                return _super.call(this) || this;
            }
            SelectItem2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDic", "SelectItem2"));
            };
            SelectItem2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
            };
            SelectItem2Struct.URL = "ui://aeg3jnlem8at17";
            SelectItem2Struct.DependPackages = ["ArtistDic", "Common"];
            return SelectItem2Struct;
        }(fairygui.GButton));
        ArtistDic.SelectItem2Struct = SelectItem2Struct;
    })(ArtistDic = fgui.ArtistDic || (fgui.ArtistDic = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SelectItem2Struct.js.map