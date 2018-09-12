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
        var GMDebugPageStruct = /** @class */ (function (_super) {
            __extends(GMDebugPageStruct, _super);
            function GMDebugPageStruct() {
                return _super.call(this) || this;
            }
            GMDebugPageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMDebugPage"));
            };
            GMDebugPageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_subMenuBar = (this.getChild("subMenuBar"));
                this.m_clearButton = (this.getChild("clearButton"));
                this.m_refreshButton = (this.getChild("refreshButton"));
            };
            GMDebugPageStruct.URL = "ui://ujw583ypfbyi8";
            GMDebugPageStruct.DependPackages = ["GM"];
            return GMDebugPageStruct;
        }(fairygui.GComponent));
        GM.GMDebugPageStruct = GMDebugPageStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMDebugPageStruct.js.map