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
        var WarSelectActorItemStruct = /** @class */ (function (_super) {
            __extends(WarSelectActorItemStruct, _super);
            function WarSelectActorItemStruct() {
                return _super.call(this) || this;
            }
            WarSelectActorItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarSelectActorItem"));
            };
            WarSelectActorItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_actorOk = this.getController("actorOk");
                this.m_chName = (this.getChild("chName"));
                this.m_chReq1 = (this.getChild("chReq1"));
                this.m_chReq2 = (this.getChild("chReq2"));
                this.m_sex = (this.getChild("sex"));
                this.m_nation = (this.getChild("nation"));
                this.m_actorName = (this.getChild("actorName"));
                this.m_icon = (this.getChild("icon"));
                this.m_property = (this.getChild("property"));
            };
            WarSelectActorItemStruct.URL = "ui://y6ozucp1yytj5o";
            WarSelectActorItemStruct.DependPackages = ["WarMovie", "Common"];
            return WarSelectActorItemStruct;
        }(fairygui.GButton));
        WarMovie.WarSelectActorItemStruct = WarSelectActorItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSelectActorItemStruct.js.map