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
        var StoryItemStarStruct = /** @class */ (function (_super) {
            __extends(StoryItemStarStruct, _super);
            function StoryItemStarStruct() {
                return _super.call(this) || this;
            }
            StoryItemStarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StoryItemStar"));
            };
            StoryItemStarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            StoryItemStarStruct.URL = "ui://s33x8418dvryt264";
            StoryItemStarStruct.DependPackages = ["PfSkin"];
            return StoryItemStarStruct;
        }(fairygui.GComponent));
        PfSkin.StoryItemStarStruct = StoryItemStarStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryItemStarStruct.js.map