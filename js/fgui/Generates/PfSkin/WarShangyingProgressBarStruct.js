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
        var WarShangyingProgressBarStruct = /** @class */ (function (_super) {
            __extends(WarShangyingProgressBarStruct, _super);
            function WarShangyingProgressBarStruct() {
                return _super.call(this) || this;
            }
            WarShangyingProgressBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarShangyingProgressBar"));
            };
            WarShangyingProgressBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
            };
            WarShangyingProgressBarStruct.URL = "ui://s33x8418k8js1hz";
            WarShangyingProgressBarStruct.DependPackages = ["PfSkin"];
            return WarShangyingProgressBarStruct;
        }(fairygui.GProgressBar));
        PfSkin.WarShangyingProgressBarStruct = WarShangyingProgressBarStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarShangyingProgressBarStruct.js.map