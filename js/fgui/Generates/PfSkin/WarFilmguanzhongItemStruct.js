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
        var WarFilmguanzhongItemStruct = /** @class */ (function (_super) {
            __extends(WarFilmguanzhongItemStruct, _super);
            function WarFilmguanzhongItemStruct() {
                return _super.call(this) || this;
            }
            WarFilmguanzhongItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmguanzhongItem"));
            };
            WarFilmguanzhongItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_sex = this.getController("sex");
                this.m_phiz = this.getController("phiz");
                this.m_man = (this.getChild("man"));
                this.m_woman = (this.getChild("woman"));
                this.m_child = (this.getChild("child"));
                this.m_phiz1 = (this.getChild("phiz1"));
                this.m_phiz2 = (this.getChild("phiz2"));
                this.m_phiz3 = (this.getChild("phiz3"));
                this.m_phiz4 = (this.getChild("phiz4"));
                this.m_phiz5 = (this.getChild("phiz5"));
                this.m_titleBg = (this.getChild("titleBg"));
                this.m_title = (this.getChild("title"));
                this.m_phizShow = this.getTransition("phizShow");
            };
            WarFilmguanzhongItemStruct.URL = "ui://s33x8418k8js1i0";
            WarFilmguanzhongItemStruct.DependPackages = ["PfSkin"];
            return WarFilmguanzhongItemStruct;
        }(fairygui.GLabel));
        PfSkin.WarFilmguanzhongItemStruct = WarFilmguanzhongItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmguanzhongItemStruct.js.map