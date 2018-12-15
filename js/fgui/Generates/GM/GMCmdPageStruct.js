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
        var GMCmdPageStruct = /** @class */ (function (_super) {
            __extends(GMCmdPageStruct, _super);
            function GMCmdPageStruct() {
                return _super.call(this) || this;
            }
            GMCmdPageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMCmdPage"));
            };
            GMCmdPageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_subMenuBar = (this.getChild("subMenuBar"));
                this.m_input = (this.getChild("input"));
                this.m_sendButton = (this.getChild("sendButton"));
                this.m_clearButton = (this.getChild("clearButton"));
            };
            GMCmdPageStruct.URL = "ui://ujw583ypket7k";
            GMCmdPageStruct.DependPackages = ["GM"];
            return GMCmdPageStruct;
        }(fairygui.GComponent));
        GM.GMCmdPageStruct = GMCmdPageStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMCmdPageStruct.js.map