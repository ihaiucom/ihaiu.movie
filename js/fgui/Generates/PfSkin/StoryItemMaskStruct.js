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
        var StoryItemMaskStruct = /** @class */ (function (_super) {
            __extends(StoryItemMaskStruct, _super);
            function StoryItemMaskStruct() {
                return _super.call(this) || this;
            }
            StoryItemMaskStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StoryItemMask"));
            };
            StoryItemMaskStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_mask = (this.getChild("mask"));
            };
            StoryItemMaskStruct.URL = "ui://s33x8418lq441uk";
            StoryItemMaskStruct.DependPackages = ["PfSkin", "Common"];
            return StoryItemMaskStruct;
        }(fairygui.GComponent));
        PfSkin.StoryItemMaskStruct = StoryItemMaskStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryItemMaskStruct.js.map