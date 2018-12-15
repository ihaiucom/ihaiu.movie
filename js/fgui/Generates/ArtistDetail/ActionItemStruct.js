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
    var ArtistDetail;
    (function (ArtistDetail) {
        var ActionItemStruct = /** @class */ (function (_super) {
            __extends(ActionItemStruct, _super);
            function ActionItemStruct() {
                return _super.call(this) || this;
            }
            ActionItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "ActionItem"));
            };
            ActionItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_level = (this.getChild("level"));
                this.m_type = (this.getChild("type"));
            };
            ActionItemStruct.URL = "ui://gif3gjfsjazc1lw";
            ActionItemStruct.DependPackages = ["ArtistDetail", "PfSkin"];
            return ActionItemStruct;
        }(fairygui.GComponent));
        ArtistDetail.ActionItemStruct = ActionItemStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActionItemStruct.js.map