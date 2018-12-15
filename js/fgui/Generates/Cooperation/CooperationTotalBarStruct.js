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
    var Cooperation;
    (function (Cooperation) {
        var CooperationTotalBarStruct = /** @class */ (function (_super) {
            __extends(CooperationTotalBarStruct, _super);
            function CooperationTotalBarStruct() {
                return _super.call(this) || this;
            }
            CooperationTotalBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "CooperationTotalBar"));
            };
            CooperationTotalBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_level = (this.getChild("level"));
                this.m_list = (this.getChild("list"));
                this.m_progressbar = (this.getChild("progressbar"));
            };
            CooperationTotalBarStruct.URL = "ui://k9ycebr5w3bv7";
            CooperationTotalBarStruct.DependPackages = ["Cooperation", "Common"];
            return CooperationTotalBarStruct;
        }(fairygui.GComponent));
        Cooperation.CooperationTotalBarStruct = CooperationTotalBarStruct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationTotalBarStruct.js.map