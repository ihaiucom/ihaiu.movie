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
    var GM;
    (function (GM) {
        var GMMainStruct = /** @class */ (function (_super) {
            __extends(GMMainStruct, _super);
            function GMMainStruct() {
                return _super.call(this) || this;
            }
            GMMainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMMain"));
            };
            GMMainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_mainMenu = (this.getChild("mainMenu"));
                this.m_debugPage = (this.getChild("debugPage"));
                this.m_addPage = (this.getChild("addPage"));
                this.m_selectServerPage = (this.getChild("selectServerPage"));
                this.m_closeButton = (this.getChild("closeButton"));
                this.m_cmdPage = (this.getChild("cmdPage"));
                this.m_displayTreePage = (this.getChild("displayTreePage"));
                this.m_timeLoopPage = (this.getChild("timeLoopPage"));
                this.m_tickPage = (this.getChild("tickPage"));
            };
            GMMainStruct.URL = "ui://ujw583yp9nrl0";
            GMMainStruct.DependPackages = ["GM"];
            return GMMainStruct;
        }(fairygui.GComponent));
        GM.GMMainStruct = GMMainStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMMainStruct.js.map