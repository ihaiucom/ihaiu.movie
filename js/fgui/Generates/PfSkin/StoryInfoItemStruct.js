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
        var StoryInfoItemStruct = /** @class */ (function (_super) {
            __extends(StoryInfoItemStruct, _super);
            function StoryInfoItemStruct() {
                return _super.call(this) || this;
            }
            StoryInfoItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StoryInfoItem"));
            };
            StoryInfoItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_name = (this.getChild("name"));
                this.m_desc = (this.getChild("desc"));
                this.m_tagLabel = (this.getChild("tagLabel"));
                this.m_tagGroup = (this.getChild("tagGroup"));
                this.m_head = (this.getChild("head"));
            };
            StoryInfoItemStruct.URL = "ui://s33x8418eb3n1o8";
            StoryInfoItemStruct.DependPackages = ["PfSkin", "Common"];
            return StoryInfoItemStruct;
        }(fairygui.GComponent));
        PfSkin.StoryInfoItemStruct = StoryInfoItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryInfoItemStruct.js.map