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
        var StoryAchevementItemStruct = /** @class */ (function (_super) {
            __extends(StoryAchevementItemStruct, _super);
            function StoryAchevementItemStruct() {
                return _super.call(this) || this;
            }
            StoryAchevementItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StoryAchevementItem"));
            };
            StoryAchevementItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_color = this.getController("c_color");
                this.m_desc = (this.getChild("desc"));
                this.m_progress = (this.getChild("progress"));
                this.m_list = (this.getChild("list"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            StoryAchevementItemStruct.URL = "ui://s33x8418eb3n1o4";
            StoryAchevementItemStruct.DependPackages = ["PfSkin", "Common"];
            return StoryAchevementItemStruct;
        }(fairygui.GComponent));
        PfSkin.StoryAchevementItemStruct = StoryAchevementItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryAchevementItemStruct.js.map