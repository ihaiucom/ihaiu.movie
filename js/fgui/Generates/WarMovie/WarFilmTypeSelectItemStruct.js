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
        var WarFilmTypeSelectItemStruct = /** @class */ (function (_super) {
            __extends(WarFilmTypeSelectItemStruct, _super);
            function WarFilmTypeSelectItemStruct() {
                return _super.call(this) || this;
            }
            WarFilmTypeSelectItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmTypeSelectItem"));
            };
            WarFilmTypeSelectItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_filmType = (this.getChild("filmType"));
                this.m_lovePeople = (this.getChild("lovePeople"));
                this.m_proficiency = (this.getChild("proficiency"));
                this.m_totalTip = (this.getChild("totalTip"));
                this.m_tip = (this.getChild("tip"));
                this.m_actorVal1 = (this.getChild("actorVal1"));
                this.m_actorVal2 = (this.getChild("actorVal2"));
                this.m_actorVal3 = (this.getChild("actorVal3"));
                this.m_actorVal4 = (this.getChild("actorVal4"));
                this.m_actorVal5 = (this.getChild("actorVal5"));
                this.m_actor1 = (this.getChild("actor1"));
                this.m_actor2 = (this.getChild("actor2"));
                this.m_actor3 = (this.getChild("actor3"));
                this.m_actor4 = (this.getChild("actor4"));
                this.m_actor5 = (this.getChild("actor5"));
            };
            WarFilmTypeSelectItemStruct.URL = "ui://y6ozucp1qbxl6a";
            WarFilmTypeSelectItemStruct.DependPackages = ["WarMovie", "Common"];
            return WarFilmTypeSelectItemStruct;
        }(fairygui.GButton));
        WarMovie.WarFilmTypeSelectItemStruct = WarFilmTypeSelectItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmTypeSelectItemStruct.js.map