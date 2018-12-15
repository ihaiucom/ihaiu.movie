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
        var CinemaIconStruct = /** @class */ (function (_super) {
            __extends(CinemaIconStruct, _super);
            function CinemaIconStruct() {
                return _super.call(this) || this;
            }
            CinemaIconStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "CinemaIcon"));
            };
            CinemaIconStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_level = this.getController("level");
                this.m_icon = (this.getChild("icon"));
                this.m_lv = (this.getChild("lv"));
            };
            CinemaIconStruct.URL = "ui://mu4e45moky79x";
            CinemaIconStruct.DependPackages = ["Street"];
            return CinemaIconStruct;
        }(fairygui.GLabel));
        Street.CinemaIconStruct = CinemaIconStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CinemaIconStruct.js.map