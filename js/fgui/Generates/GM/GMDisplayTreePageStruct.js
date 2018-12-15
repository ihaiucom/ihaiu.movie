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
        var GMDisplayTreePageStruct = /** @class */ (function (_super) {
            __extends(GMDisplayTreePageStruct, _super);
            function GMDisplayTreePageStruct() {
                return _super.call(this) || this;
            }
            GMDisplayTreePageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMDisplayTreePage"));
            };
            GMDisplayTreePageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tree = (this.getChild("tree"));
                this.m_refreshButton = (this.getChild("refreshButton"));
                this.m_showSelectButton = (this.getChild("showSelectButton"));
                this.m_hideSelectButton = (this.getChild("hideSelectButton"));
                this.m_noSelectButton = (this.getChild("noSelectButton"));
                this.m_parentLayerButton = (this.getChild("parentLayerButton"));
                this.m_setLayerButton = (this.getChild("setLayerButton"));
            };
            GMDisplayTreePageStruct.URL = "ui://ujw583ypx6hov";
            GMDisplayTreePageStruct.DependPackages = ["GM"];
            return GMDisplayTreePageStruct;
        }(fairygui.GComponent));
        GM.GMDisplayTreePageStruct = GMDisplayTreePageStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMDisplayTreePageStruct.js.map