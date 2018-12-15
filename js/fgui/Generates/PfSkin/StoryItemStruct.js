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
        var StoryItemStruct = /** @class */ (function (_super) {
            __extends(StoryItemStruct, _super);
            function StoryItemStruct() {
                return _super.call(this) || this;
            }
            StoryItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StoryItem"));
            };
            StoryItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_story_enable = this.getController("story_enable");
                this.m_c_visible_effect = this.getController("c_visible_effect");
                this.m_bg = (this.getChild("bg"));
                this.m_finishBg = (this.getChild("finishBg"));
                this.m_icon = (this.getChild("icon"));
                this.m_gouGroup = (this.getChild("gouGroup"));
                this.m_starList = (this.getChild("starList"));
                this.m_mark1 = (this.getChild("mark1"));
                this.m_mark2 = (this.getChild("mark2"));
                this.m_mark3 = (this.getChild("mark3"));
                this.m_infoBtn = (this.getChild("infoBtn"));
                this.m_achieveBtn = (this.getChild("achieveBtn"));
                this.m_mask = (this.getChild("mask"));
                this.m_effect = (this.getChild("effect"));
            };
            StoryItemStruct.URL = "ui://s33x8418eb3n1o1";
            StoryItemStruct.DependPackages = ["PfSkin", "Fx", "Common"];
            return StoryItemStruct;
        }(fairygui.GComponent));
        PfSkin.StoryItemStruct = StoryItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryItemStruct.js.map