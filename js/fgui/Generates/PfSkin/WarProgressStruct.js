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
        var WarProgressStruct = /** @class */ (function (_super) {
            __extends(WarProgressStruct, _super);
            function WarProgressStruct() {
                return _super.call(this) || this;
            }
            WarProgressStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarProgress"));
            };
            WarProgressStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bar = (this.getChild("bar"));
                this.m_arrow = (this.getChild("arrow"));
                this.m_title = (this.getChild("title"));
            };
            WarProgressStruct.URL = "ui://s33x8418k8js1hp";
            WarProgressStruct.DependPackages = ["PfSkin"];
            return WarProgressStruct;
        }(fairygui.GProgressBar));
        PfSkin.WarProgressStruct = WarProgressStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarProgressStruct.js.map