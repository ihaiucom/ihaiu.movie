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
        var CinemaSelectItemStruct = /** @class */ (function (_super) {
            __extends(CinemaSelectItemStruct, _super);
            function CinemaSelectItemStruct() {
                return _super.call(this) || this;
            }
            CinemaSelectItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "CinemaSelectItem"));
            };
            CinemaSelectItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_txtCinemaNums = (this.getChild("txtCinemaNums"));
                this.m_txtLike = (this.getChild("txtLike"));
                this.m_cinemaIcon = (this.getChild("cinemaIcon"));
            };
            CinemaSelectItemStruct.URL = "ui://mu4e45moky790";
            CinemaSelectItemStruct.DependPackages = ["Street", "WarMovie", "Common"];
            return CinemaSelectItemStruct;
        }(fairygui.GButton));
        Street.CinemaSelectItemStruct = CinemaSelectItemStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CinemaSelectItemStruct.js.map