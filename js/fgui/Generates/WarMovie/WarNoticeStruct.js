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
        var WarNoticeStruct = /** @class */ (function (_super) {
            __extends(WarNoticeStruct, _super);
            function WarNoticeStruct() {
                return _super.call(this) || this;
            }
            WarNoticeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarNotice"));
            };
            WarNoticeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_nameTip = (this.getChild("nameTip"));
                this.m_title = (this.getChild("title"));
                this.m_noticeList = (this.getChild("noticeList"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarNoticeStruct.URL = "ui://y6ozucp1qbxl6c";
            WarNoticeStruct.DependPackages = ["WarMovie", "Common", "System"];
            return WarNoticeStruct;
        }(fairygui.GComponent));
        WarMovie.WarNoticeStruct = WarNoticeStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarNoticeStruct.js.map