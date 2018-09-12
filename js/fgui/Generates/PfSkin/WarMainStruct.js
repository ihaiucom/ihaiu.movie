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
        var WarMainStruct = /** @class */ (function (_super) {
            __extends(WarMainStruct, _super);
            function WarMainStruct() {
                return _super.call(this) || this;
            }
            WarMainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarMain"));
            };
            WarMainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_topBg = (this.getChild("topBg"));
                this.m_bottomBg = (this.getChild("bottomBg"));
                this.m_filmItemList = (this.getChild("filmItemList"));
                this.m_labelTip = (this.getChild("labelTip"));
                this.m_surveyProgress = (this.getChild("surveyProgress"));
                this.m_mask = (this.getChild("mask"));
                this.m_sliver = (this.getChild("sliver"));
                this.m_xukezheng = (this.getChild("xukezheng"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_surveyMan = (this.getChild("surveyMan"));
                this.m_surveyWoman = (this.getChild("surveyWoman"));
                this.m_surveyChild = (this.getChild("surveyChild"));
            };
            WarMainStruct.URL = "ui://s33x8418znuj1ex";
            WarMainStruct.DependPackages = ["PfSkin"];
            return WarMainStruct;
        }(fairygui.GComponent));
        PfSkin.WarMainStruct = WarMainStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarMainStruct.js.map