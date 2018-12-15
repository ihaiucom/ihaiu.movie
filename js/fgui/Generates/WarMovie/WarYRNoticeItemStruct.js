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
        var WarYRNoticeItemStruct = /** @class */ (function (_super) {
            __extends(WarYRNoticeItemStruct, _super);
            function WarYRNoticeItemStruct() {
                return _super.call(this) || this;
            }
            WarYRNoticeItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarYRNoticeItem"));
            };
            WarYRNoticeItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_selected = this.getController("selected");
                this.m_icon = (this.getChild("icon"));
                this.m_lv = (this.getChild("lv"));
                this.m_title = (this.getChild("title"));
                this.m_yr1 = (this.getChild("yr1"));
                this.m_yr2 = (this.getChild("yr2"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarYRNoticeItemStruct.URL = "ui://y6ozucp1moqedn";
            WarYRNoticeItemStruct.DependPackages = ["WarMovie", "Common"];
            return WarYRNoticeItemStruct;
        }(fairygui.GComponent));
        WarMovie.WarYRNoticeItemStruct = WarYRNoticeItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRNoticeItemStruct.js.map