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
        var VisitMainTopUIStruct = /** @class */ (function (_super) {
            __extends(VisitMainTopUIStruct, _super);
            function VisitMainTopUIStruct() {
                return _super.call(this) || this;
            }
            VisitMainTopUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "VisitMainTopUI"));
            };
            VisitMainTopUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_name = (this.getChild("name"));
                this.m_checklabel = (this.getChild("checklabel"));
                this.m_time = (this.getChild("time"));
                this.m_checkbox = (this.getChild("checkbox"));
            };
            VisitMainTopUIStruct.URL = "ui://s33x8418h5zr1v7";
            VisitMainTopUIStruct.DependPackages = ["PfSkin", "Common"];
            return VisitMainTopUIStruct;
        }(fairygui.GComponent));
        PfSkin.VisitMainTopUIStruct = VisitMainTopUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=VisitMainTopUIStruct.js.map