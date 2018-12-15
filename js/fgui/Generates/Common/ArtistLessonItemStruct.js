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
    var Common;
    (function (Common) {
        var ArtistLessonItemStruct = /** @class */ (function (_super) {
            __extends(ArtistLessonItemStruct, _super);
            function ArtistLessonItemStruct() {
                return _super.call(this) || this;
            }
            ArtistLessonItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ArtistLessonItem"));
            };
            ArtistLessonItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_visible_up = this.getController("c_visible_up");
                this.m_c_visible_level = this.getController("c_visible_level");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            ArtistLessonItemStruct.URL = "ui://txcuvopdmmict272";
            ArtistLessonItemStruct.DependPackages = ["Common", "ArtistDetail"];
            return ArtistLessonItemStruct;
        }(fairygui.GButton));
        Common.ArtistLessonItemStruct = ArtistLessonItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistLessonItemStruct.js.map