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
        var WarFilmYirenItemStruct = /** @class */ (function (_super) {
            __extends(WarFilmYirenItemStruct, _super);
            function WarFilmYirenItemStruct() {
                return _super.call(this) || this;
            }
            WarFilmYirenItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmYirenItem"));
            };
            WarFilmYirenItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_popControl = this.getController("popControl");
                this.m_woman = (this.getChild("woman"));
                this.m_child = (this.getChild("child"));
                this.m_man = (this.getChild("man"));
                this.m_type = (this.getChild("type"));
                this.m_name = (this.getChild("name"));
                this.m_inf = (this.getChild("inf"));
                this.m_pop = (this.getChild("pop"));
                this.m_t0 = this.getTransition("t0");
            };
            WarFilmYirenItemStruct.URL = "ui://s33x8418r8ay1fj";
            WarFilmYirenItemStruct.DependPackages = ["PfSkin"];
            return WarFilmYirenItemStruct;
        }(fairygui.GButton));
        PfSkin.WarFilmYirenItemStruct = WarFilmYirenItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmYirenItemStruct.js.map