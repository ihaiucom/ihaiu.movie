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
        var ProgressBar_roadshowStruct = /** @class */ (function (_super) {
            __extends(ProgressBar_roadshowStruct, _super);
            function ProgressBar_roadshowStruct() {
                return _super.call(this) || this;
            }
            ProgressBar_roadshowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ProgressBar_roadshow"));
            };
            ProgressBar_roadshowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_title = (this.getChild("title"));
                this.m_aniProgress = this.getTransition("aniProgress");
            };
            ProgressBar_roadshowStruct.URL = "ui://s33x8418mywn1ke";
            ProgressBar_roadshowStruct.DependPackages = ["PfSkin"];
            return ProgressBar_roadshowStruct;
        }(fairygui.GProgressBar));
        PfSkin.ProgressBar_roadshowStruct = ProgressBar_roadshowStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressBar_roadshowStruct.js.map