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
        var WarHaveReadyStruct = /** @class */ (function (_super) {
            __extends(WarHaveReadyStruct, _super);
            function WarHaveReadyStruct() {
                return _super.call(this) || this;
            }
            WarHaveReadyStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarHaveReady"));
            };
            WarHaveReadyStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_tip = (this.getChild("tip"));
            };
            WarHaveReadyStruct.URL = "ui://s33x84186ve81g5";
            WarHaveReadyStruct.DependPackages = ["PfSkin"];
            return WarHaveReadyStruct;
        }(fairygui.GLabel));
        PfSkin.WarHaveReadyStruct = WarHaveReadyStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarHaveReadyStruct.js.map