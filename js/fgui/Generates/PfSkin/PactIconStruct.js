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
        var PactIconStruct = /** @class */ (function (_super) {
            __extends(PactIconStruct, _super);
            function PactIconStruct() {
                return _super.call(this) || this;
            }
            PactIconStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "PactIcon"));
            };
            PactIconStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_star = (this.getChild("star"));
            };
            PactIconStruct.URL = "ui://s33x8418oebq1vv";
            PactIconStruct.DependPackages = ["PfSkin"];
            return PactIconStruct;
        }(fairygui.GButton));
        PfSkin.PactIconStruct = PactIconStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PactIconStruct.js.map