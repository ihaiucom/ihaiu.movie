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
        var StoryTypeItemStruct = /** @class */ (function (_super) {
            __extends(StoryTypeItemStruct, _super);
            function StoryTypeItemStruct() {
                return _super.call(this) || this;
            }
            StoryTypeItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StoryTypeItem"));
            };
            StoryTypeItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = this.getController("bg");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            StoryTypeItemStruct.URL = "ui://s33x8418dk94t21f";
            StoryTypeItemStruct.DependPackages = ["PfSkin"];
            return StoryTypeItemStruct;
        }(fairygui.GLabel));
        PfSkin.StoryTypeItemStruct = StoryTypeItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryTypeItemStruct.js.map