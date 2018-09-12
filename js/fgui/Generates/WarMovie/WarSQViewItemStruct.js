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
    var WarMovie;
    (function (WarMovie) {
        var WarSQViewItemStruct = /** @class */ (function (_super) {
            __extends(WarSQViewItemStruct, _super);
            function WarSQViewItemStruct() {
                return _super.call(this) || this;
            }
            WarSQViewItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarSQViewItem"));
            };
            WarSQViewItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_progress = (this.getChild("progress"));
                this.m_average = (this.getChild("average"));
            };
            WarSQViewItemStruct.URL = "ui://y6ozucp1qbxl6r";
            WarSQViewItemStruct.DependPackages = ["WarMovie", "System", "Common"];
            return WarSQViewItemStruct;
        }(fairygui.GLabel));
        WarMovie.WarSQViewItemStruct = WarSQViewItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSQViewItemStruct.js.map