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
        var WarFilmProgressStruct = /** @class */ (function (_super) {
            __extends(WarFilmProgressStruct, _super);
            function WarFilmProgressStruct() {
                return _super.call(this) || this;
            }
            WarFilmProgressStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmProgress"));
            };
            WarFilmProgressStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
            };
            WarFilmProgressStruct.URL = "ui://s33x84186ve81gs";
            WarFilmProgressStruct.DependPackages = ["PfSkin"];
            return WarFilmProgressStruct;
        }(fairygui.GProgressBar));
        PfSkin.WarFilmProgressStruct = WarFilmProgressStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmProgressStruct.js.map