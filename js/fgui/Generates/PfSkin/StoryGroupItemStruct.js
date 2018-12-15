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
        var StoryGroupItemStruct = /** @class */ (function (_super) {
            __extends(StoryGroupItemStruct, _super);
            function StoryGroupItemStruct() {
                return _super.call(this) || this;
            }
            StoryGroupItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StoryGroupItem"));
            };
            StoryGroupItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_name = (this.getChild("name"));
                this.m_list = (this.getChild("list"));
                this.m_completeC = (this.getChild("completeC"));
                this.m_progress = (this.getChild("progress"));
                this.m_desc = (this.getChild("desc"));
                this.m_rewardItem = (this.getChild("rewardItem"));
                this.m_rewardDialog = (this.getChild("rewardDialog"));
                this.m_t0 = this.getTransition("t0");
            };
            StoryGroupItemStruct.URL = "ui://s33x8418eb3n1nz";
            StoryGroupItemStruct.DependPackages = ["PfSkin", "Common"];
            return StoryGroupItemStruct;
        }(fairygui.GLabel));
        PfSkin.StoryGroupItemStruct = StoryGroupItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryGroupItemStruct.js.map