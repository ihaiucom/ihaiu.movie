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
        var WarPromptBoxStruct = /** @class */ (function (_super) {
            __extends(WarPromptBoxStruct, _super);
            function WarPromptBoxStruct() {
                return _super.call(this) || this;
            }
            WarPromptBoxStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarPromptBox"));
            };
            WarPromptBoxStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bg2 = (this.getChild("bg2"));
                this.m_bg3 = (this.getChild("bg3"));
                this.m_bg4 = (this.getChild("bg4"));
                this.m_tip = (this.getChild("tip"));
                this.m_title = (this.getChild("title"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarPromptBoxStruct.URL = "ui://s33x8418pvrg1ic";
            WarPromptBoxStruct.DependPackages = ["PfSkin"];
            return WarPromptBoxStruct;
        }(fairygui.GComponent));
        PfSkin.WarPromptBoxStruct = WarPromptBoxStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarPromptBoxStruct.js.map