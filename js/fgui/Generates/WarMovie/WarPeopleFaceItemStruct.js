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
        var WarPeopleFaceItemStruct = /** @class */ (function (_super) {
            __extends(WarPeopleFaceItemStruct, _super);
            function WarPeopleFaceItemStruct() {
                return _super.call(this) || this;
            }
            WarPeopleFaceItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarPeopleFaceItem"));
            };
            WarPeopleFaceItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_phiz = this.getController("phiz");
                this.m_sex = this.getController("sex");
                this.m_c1 = this.getController("c1");
                this.m_peopleMan = (this.getChild("peopleMan"));
                this.m_peopleWomen = (this.getChild("peopleWomen"));
                this.m_peopleChild = (this.getChild("peopleChild"));
                this.m_face0 = (this.getChild("face0"));
                this.m_face1 = (this.getChild("face1"));
                this.m_face2 = (this.getChild("face2"));
                this.m_face3 = (this.getChild("face3"));
                this.m_face4 = (this.getChild("face4"));
                this.m_tip = (this.getChild("tip"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_t0 = this.getTransition("t0");
            };
            WarPeopleFaceItemStruct.URL = "ui://y6ozucp1qbxl80";
            WarPeopleFaceItemStruct.DependPackages = ["WarMovie", "Common"];
            return WarPeopleFaceItemStruct;
        }(fairygui.GComponent));
        WarMovie.WarPeopleFaceItemStruct = WarPeopleFaceItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarPeopleFaceItemStruct.js.map