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
        var OscarPanelStruct = /** @class */ (function (_super) {
            __extends(OscarPanelStruct, _super);
            function OscarPanelStruct() {
                return _super.call(this) || this;
            }
            OscarPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "OscarPanel"));
            };
            OscarPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            OscarPanelStruct.URL = "ui://s33x8418p9t7t1wz";
            OscarPanelStruct.DependPackages = ["PfSkin"];
            return OscarPanelStruct;
        }(fairygui.GComponent));
        PfSkin.OscarPanelStruct = OscarPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarPanelStruct.js.map