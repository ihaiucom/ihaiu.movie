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
        var StarTitleStruct = /** @class */ (function (_super) {
            __extends(StarTitleStruct, _super);
            function StarTitleStruct() {
                return _super.call(this) || this;
            }
            StarTitleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDic", "StarTitle"));
            };
            StarTitleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            StarTitleStruct.URL = "ui://aeg3jnlem8at13";
            StarTitleStruct.DependPackages = ["ArtistDic"];
            return StarTitleStruct;
        }(fairygui.GLabel));
        ArtistDic.StarTitleStruct = StarTitleStruct;
    })(ArtistDic = fgui.ArtistDic || (fgui.ArtistDic = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StarTitleStruct.js.map