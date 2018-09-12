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
        var StoryAchevementTargetItemStruct = /** @class */ (function (_super) {
            __extends(StoryAchevementTargetItemStruct, _super);
            function StoryAchevementTargetItemStruct() {
                return _super.call(this) || this;
            }
            StoryAchevementTargetItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StoryAchevementTargetItem"));
            };
            StoryAchevementTargetItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_gou = (this.getChild("gou"));
            };
            StoryAchevementTargetItemStruct.URL = "ui://s33x8418eb3n1o5";
            StoryAchevementTargetItemStruct.DependPackages = ["PfSkin", "Common"];
            return StoryAchevementTargetItemStruct;
        }(fairygui.GLabel));
        PfSkin.StoryAchevementTargetItemStruct = StoryAchevementTargetItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryAchevementTargetItemStruct.js.map