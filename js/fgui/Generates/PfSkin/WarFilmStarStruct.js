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
        var WarFilmStarStruct = /** @class */ (function (_super) {
            __extends(WarFilmStarStruct, _super);
            function WarFilmStarStruct() {
                return _super.call(this) || this;
            }
            WarFilmStarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmStar"));
            };
            WarFilmStarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Star = this.getController("Star");
                this.m_11 = (this.getChild("11"));
                this.m_21 = (this.getChild("21"));
                this.m_22 = (this.getChild("22"));
                this.m_31 = (this.getChild("31"));
                this.m_32 = (this.getChild("32"));
                this.m_33 = (this.getChild("33"));
                this.m_41 = (this.getChild("41"));
                this.m_42 = (this.getChild("42"));
                this.m_43 = (this.getChild("43"));
                this.m_44 = (this.getChild("44"));
                this.m_51 = (this.getChild("51"));
                this.m_52 = (this.getChild("52"));
                this.m_53 = (this.getChild("53"));
                this.m_54 = (this.getChild("54"));
                this.m_55 = (this.getChild("55"));
                this.m_61 = (this.getChild("61"));
                this.m_62 = (this.getChild("62"));
                this.m_63 = (this.getChild("63"));
                this.m_64 = (this.getChild("64"));
                this.m_65 = (this.getChild("65"));
                this.m_66 = (this.getChild("66"));
                this.m_6 = (this.getChild("6"));
            };
            WarFilmStarStruct.URL = "ui://s33x8418znuj1fa";
            WarFilmStarStruct.DependPackages = ["PfSkin"];
            return WarFilmStarStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmStarStruct = WarFilmStarStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmStarStruct.js.map