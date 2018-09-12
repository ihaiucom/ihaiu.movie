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
    var WarMovie;
    (function (WarMovie) {
        var WarSelectFilmTypeStruct = /** @class */ (function (_super) {
            __extends(WarSelectFilmTypeStruct, _super);
            function WarSelectFilmTypeStruct() {
                return _super.call(this) || this;
            }
            WarSelectFilmTypeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarSelectFilmType"));
            };
            WarSelectFilmTypeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_nameTip = (this.getChild("nameTip"));
                this.m_title = (this.getChild("title"));
                this.m_typeList = (this.getChild("typeList"));
                this.m_curMarket = (this.getChild("curMarket"));
                this.m_filminfBtn = (this.getChild("filminfBtn"));
                this.m_men = (this.getChild("men"));
                this.m_women = (this.getChild("women"));
                this.m_child = (this.getChild("child"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            WarSelectFilmTypeStruct.URL = "ui://y6ozucp1qbxl67";
            WarSelectFilmTypeStruct.DependPackages = ["WarMovie", "Common"];
            return WarSelectFilmTypeStruct;
        }(fairygui.GComponent));
        WarMovie.WarSelectFilmTypeStruct = WarSelectFilmTypeStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSelectFilmTypeStruct.js.map