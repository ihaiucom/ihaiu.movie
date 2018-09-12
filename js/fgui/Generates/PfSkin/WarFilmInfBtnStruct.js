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
        var WarFilmInfBtnStruct = /** @class */ (function (_super) {
            __extends(WarFilmInfBtnStruct, _super);
            function WarFilmInfBtnStruct() {
                return _super.call(this) || this;
            }
            WarFilmInfBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmInfBtn"));
            };
            WarFilmInfBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
            };
            WarFilmInfBtnStruct.URL = "ui://s33x84186ve81g2";
            WarFilmInfBtnStruct.DependPackages = ["PfSkin"];
            return WarFilmInfBtnStruct;
        }(fairygui.GButton));
        PfSkin.WarFilmInfBtnStruct = WarFilmInfBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmInfBtnStruct.js.map