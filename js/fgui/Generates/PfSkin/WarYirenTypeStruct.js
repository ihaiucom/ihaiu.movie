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
        var WarYirenTypeStruct = /** @class */ (function (_super) {
            __extends(WarYirenTypeStruct, _super);
            function WarYirenTypeStruct() {
                return _super.call(this) || this;
            }
            WarYirenTypeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarYirenType"));
            };
            WarYirenTypeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
            };
            WarYirenTypeStruct.URL = "ui://s33x84186ve81g0";
            WarYirenTypeStruct.DependPackages = ["PfSkin"];
            return WarYirenTypeStruct;
        }(fairygui.GLabel));
        PfSkin.WarYirenTypeStruct = WarYirenTypeStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYirenTypeStruct.js.map