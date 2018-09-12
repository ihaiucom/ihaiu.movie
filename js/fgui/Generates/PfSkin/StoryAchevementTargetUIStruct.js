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
        var StoryAchevementTargetUIStruct = /** @class */ (function (_super) {
            __extends(StoryAchevementTargetUIStruct, _super);
            function StoryAchevementTargetUIStruct() {
                return _super.call(this) || this;
            }
            StoryAchevementTargetUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StoryAchevementTargetUI"));
            };
            StoryAchevementTargetUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_close = (this.getChild("close"));
                this.m_title = (this.getChild("title"));
                this.m_desc = (this.getChild("desc"));
                this.m_list = (this.getChild("list"));
            };
            StoryAchevementTargetUIStruct.URL = "ui://s33x8418eb3n1o6";
            StoryAchevementTargetUIStruct.DependPackages = ["PfSkin", "Common"];
            return StoryAchevementTargetUIStruct;
        }(fairygui.GComponent));
        PfSkin.StoryAchevementTargetUIStruct = StoryAchevementTargetUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryAchevementTargetUIStruct.js.map