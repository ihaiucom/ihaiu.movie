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
    var Common;
    (function (Common) {
        var UpgradeBtnStruct = /** @class */ (function (_super) {
            __extends(UpgradeBtnStruct, _super);
            function UpgradeBtnStruct() {
                return _super.call(this) || this;
            }
            UpgradeBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "upgradeBtn"));
            };
            UpgradeBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            UpgradeBtnStruct.URL = "ui://txcuvopdoapba1";
            UpgradeBtnStruct.DependPackages = ["Common"];
            return UpgradeBtnStruct;
        }(fairygui.GButton));
        Common.UpgradeBtnStruct = UpgradeBtnStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=UpgradeBtnStruct.js.map