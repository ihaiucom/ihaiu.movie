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
    var Street;
    (function (Street) {
        var CinemaItemStruct = /** @class */ (function (_super) {
            __extends(CinemaItemStruct, _super);
            function CinemaItemStruct() {
                return _super.call(this) || this;
            }
            CinemaItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "CinemaItem"));
            };
            CinemaItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_level = this.getController("level");
                this.m_title = (this.getChild("title"));
                this.m_num = (this.getChild("num"));
                this.m_icon = (this.getChild("icon"));
            };
            CinemaItemStruct.URL = "ui://mu4e45moky79z";
            CinemaItemStruct.DependPackages = ["Street"];
            return CinemaItemStruct;
        }(fairygui.GLabel));
        Street.CinemaItemStruct = CinemaItemStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CinemaItemStruct.js.map