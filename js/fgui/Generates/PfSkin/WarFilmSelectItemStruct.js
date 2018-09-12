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
        var WarFilmSelectItemStruct = /** @class */ (function (_super) {
            __extends(WarFilmSelectItemStruct, _super);
            function WarFilmSelectItemStruct() {
                return _super.call(this) || this;
            }
            WarFilmSelectItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmSelectItem"));
            };
            WarFilmSelectItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_kuang = (this.getChild("kuang"));
                this.m_typeList = (this.getChild("typeList"));
                this.m_desBg = (this.getChild("desBg"));
                this.m_filmTopic = (this.getChild("filmTopic"));
                this.m_filmMoveShow = (this.getChild("filmMoveShow"));
                this.m_starShow = (this.getChild("starShow"));
                this.m_infBtn = (this.getChild("infBtn"));
                this.m_filmDes = (this.getChild("filmDes"));
                this.m_manReq = (this.getChild("manReq"));
                this.m_womanReq = (this.getChild("womanReq"));
                this.m_childReq = (this.getChild("childReq"));
                this.m_selectBtn = (this.getChild("selectBtn"));
                this.m_infIconBtn = (this.getChild("infIconBtn"));
            };
            WarFilmSelectItemStruct.URL = "ui://s33x8418znuj1f6";
            WarFilmSelectItemStruct.DependPackages = ["PfSkin"];
            return WarFilmSelectItemStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmSelectItemStruct = WarFilmSelectItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSelectItemStruct.js.map