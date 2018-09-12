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
        var WarYRForFilmStruct = /** @class */ (function (_super) {
            __extends(WarYRForFilmStruct, _super);
            function WarYRForFilmStruct() {
                return _super.call(this) || this;
            }
            WarYRForFilmStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarYRForFilm"));
            };
            WarYRForFilmStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bg1 = (this.getChild("bg1"));
                this.m_bgBai = (this.getChild("bgBai"));
                this.m_bgLan = (this.getChild("bgLan"));
                this.m_bgTop = (this.getChild("bgTop"));
                this.m_xuzuo = (this.getChild("xuzuo"));
                this.m_title = (this.getChild("title"));
                this.m_resultList = (this.getChild("resultList"));
                this.m_bubbleList = (this.getChild("bubbleList"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_curYR = (this.getChild("curYR"));
            };
            WarYRForFilmStruct.URL = "ui://s33x84186ve81gi";
            WarYRForFilmStruct.DependPackages = ["PfSkin"];
            return WarYRForFilmStruct;
        }(fairygui.GComponent));
        PfSkin.WarYRForFilmStruct = WarYRForFilmStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRForFilmStruct.js.map