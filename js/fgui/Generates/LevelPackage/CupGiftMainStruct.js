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
        var CupGiftMainStruct = /** @class */ (function (_super) {
            __extends(CupGiftMainStruct, _super);
            function CupGiftMainStruct() {
                return _super.call(this) || this;
            }
            CupGiftMainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("LevelPackage", "CupGiftMain"));
            };
            CupGiftMainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_pic = (this.getChild("pic"));
                this.m_title = (this.getChild("title"));
                this.m_delayTime = (this.getChild("delayTime"));
                this.m_dialogPanel = (this.getChild("dialogPanel"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            CupGiftMainStruct.URL = "ui://7w6h9vntmpdx1";
            CupGiftMainStruct.DependPackages = ["LevelPackage", "Common", "WarMovie"];
            return CupGiftMainStruct;
        }(fairygui.GComponent));
        LevelPackage.CupGiftMainStruct = CupGiftMainStruct;
    })(LevelPackage = fgui.LevelPackage || (fgui.LevelPackage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CupGiftMainStruct.js.map