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
        var WarFilmYirenPopStruct = /** @class */ (function (_super) {
            __extends(WarFilmYirenPopStruct, _super);
            function WarFilmYirenPopStruct() {
                return _super.call(this) || this;
            }
            WarFilmYirenPopStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmYirenPop"));
            };
            WarFilmYirenPopStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_arrow = (this.getChild("arrow"));
                this.m_bg = (this.getChild("bg"));
                this.m_fenge = (this.getChild("fenge"));
                this.m_curType = (this.getChild("curType"));
                this.m_curName = (this.getChild("curName"));
                this.m_tip = (this.getChild("tip"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_req1 = (this.getChild("req1"));
                this.m_req2 = (this.getChild("req2"));
                this.m_req3 = (this.getChild("req3"));
                this.m_req4 = (this.getChild("req4"));
                this.m_attTip1 = (this.getChild("attTip1"));
                this.m_attTip2 = (this.getChild("attTip2"));
                this.m_attDes = (this.getChild("attDes"));
            };
            WarFilmYirenPopStruct.URL = "ui://s33x8418r8ay1fp";
            WarFilmYirenPopStruct.DependPackages = ["PfSkin"];
            return WarFilmYirenPopStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmYirenPopStruct = WarFilmYirenPopStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmYirenPopStruct.js.map