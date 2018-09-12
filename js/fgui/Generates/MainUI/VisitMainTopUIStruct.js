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
    var MainUI;
    (function (MainUI) {
        var VisitMainTopUIStruct = /** @class */ (function (_super) {
            __extends(VisitMainTopUIStruct, _super);
            function VisitMainTopUIStruct() {
                return _super.call(this) || this;
            }
            VisitMainTopUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "VisitMainTopUI"));
            };
            VisitMainTopUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_name = (this.getChild("name"));
                this.m_checklabel = (this.getChild("checklabel"));
                this.m_time = (this.getChild("time"));
                this.m_checkbox = (this.getChild("checkbox"));
            };
            VisitMainTopUIStruct.URL = "ui://7ecreso0tpm8x5e";
            VisitMainTopUIStruct.DependPackages = ["MainUI", "Common"];
            return VisitMainTopUIStruct;
        }(fairygui.GComponent));
        MainUI.VisitMainTopUIStruct = VisitMainTopUIStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=VisitMainTopUIStruct.js.map