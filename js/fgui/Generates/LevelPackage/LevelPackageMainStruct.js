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
    var LevelPackage;
    (function (LevelPackage) {
        var LevelPackageMainStruct = /** @class */ (function (_super) {
            __extends(LevelPackageMainStruct, _super);
            function LevelPackageMainStruct() {
                return _super.call(this) || this;
            }
            LevelPackageMainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("LevelPackage", "LevelPackageMain"));
            };
            LevelPackageMainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_isOver = this.getController("isOver");
                this.m_pic = (this.getChild("pic"));
                this.m_rewardList = (this.getChild("rewardList"));
                this.m_title = (this.getChild("title"));
                this.m_overTitle = (this.getChild("overTitle"));
                this.m_overTitle2 = (this.getChild("overTitle2"));
                this.m_dialogPanel = (this.getChild("dialogPanel"));
                this.m_tip1 = (this.getChild("tip1"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            LevelPackageMainStruct.URL = "ui://7w6h9vntndr0l";
            LevelPackageMainStruct.DependPackages = ["LevelPackage", "Common", "WarMovie"];
            return LevelPackageMainStruct;
        }(fairygui.GComponent));
        LevelPackage.LevelPackageMainStruct = LevelPackageMainStruct;
    })(LevelPackage = fgui.LevelPackage || (fgui.LevelPackage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LevelPackageMainStruct.js.map