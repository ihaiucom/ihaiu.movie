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
        var WarSelectFilmTypeStruct = /** @class */ (function (_super) {
            __extends(WarSelectFilmTypeStruct, _super);
            function WarSelectFilmTypeStruct() {
                return _super.call(this) || this;
            }
            WarSelectFilmTypeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarSelectFilmType"));
            };
            WarSelectFilmTypeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bg1 = (this.getChild("bg1"));
                this.m_bgBai = (this.getChild("bgBai"));
                this.m_bgTop = (this.getChild("bgTop"));
                this.m_title = (this.getChild("title"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_typeList = (this.getChild("typeList"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_filmInfBtn = (this.getChild("filmInfBtn"));
            };
            WarSelectFilmTypeStruct.URL = "ui://s33x84186ve81gv";
            WarSelectFilmTypeStruct.DependPackages = ["PfSkin"];
            return WarSelectFilmTypeStruct;
        }(fairygui.GComponent));
        PfSkin.WarSelectFilmTypeStruct = WarSelectFilmTypeStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSelectFilmTypeStruct.js.map