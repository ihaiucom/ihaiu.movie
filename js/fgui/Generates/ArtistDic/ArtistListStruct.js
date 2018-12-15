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
        var ArtistListStruct = /** @class */ (function (_super) {
            __extends(ArtistListStruct, _super);
            function ArtistListStruct() {
                return _super.call(this) || this;
            }
            ArtistListStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDic", "ArtistList"));
            };
            ArtistListStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_fiveList = (this.getChild("fiveList"));
                this.m_fourList = (this.getChild("fourList"));
                this.m_otherList = (this.getChild("otherList"));
                this.m_noTip = (this.getChild("noTip"));
                this.m_five = (this.getChild("five"));
                this.m_four = (this.getChild("four"));
                this.m_other = (this.getChild("other"));
            };
            ArtistListStruct.URL = "ui://aeg3jnlem8at14";
            ArtistListStruct.DependPackages = ["ArtistDic"];
            return ArtistListStruct;
        }(fairygui.GComponent));
        ArtistDic.ArtistListStruct = ArtistListStruct;
    })(ArtistDic = fgui.ArtistDic || (fgui.ArtistDic = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistListStruct.js.map