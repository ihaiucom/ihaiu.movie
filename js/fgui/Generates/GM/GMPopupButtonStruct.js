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
        var GMPopupButtonStruct = /** @class */ (function (_super) {
            __extends(GMPopupButtonStruct, _super);
            function GMPopupButtonStruct() {
                return _super.call(this) || this;
            }
            GMPopupButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMPopupButton"));
            };
            GMPopupButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            GMPopupButtonStruct.URL = "ui://ujw583ypm23g5";
            GMPopupButtonStruct.DependPackages = ["GM"];
            return GMPopupButtonStruct;
        }(fairygui.GButton));
        GM.GMPopupButtonStruct = GMPopupButtonStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMPopupButtonStruct.js.map