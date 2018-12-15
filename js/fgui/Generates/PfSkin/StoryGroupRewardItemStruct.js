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
        var StoryGroupRewardItemStruct = /** @class */ (function (_super) {
            __extends(StoryGroupRewardItemStruct, _super);
            function StoryGroupRewardItemStruct() {
                return _super.call(this) || this;
            }
            StoryGroupRewardItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StoryGroupRewardItem"));
            };
            StoryGroupRewardItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_name = (this.getChild("name"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            StoryGroupRewardItemStruct.URL = "ui://s33x8418eb3n1ny";
            StoryGroupRewardItemStruct.DependPackages = ["PfSkin", "Common"];
            return StoryGroupRewardItemStruct;
        }(fairygui.GButton));
        PfSkin.StoryGroupRewardItemStruct = StoryGroupRewardItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryGroupRewardItemStruct.js.map