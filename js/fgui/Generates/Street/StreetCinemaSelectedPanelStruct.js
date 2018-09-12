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
        var StreetCinemaSelectedPanelStruct = /** @class */ (function (_super) {
            __extends(StreetCinemaSelectedPanelStruct, _super);
            function StreetCinemaSelectedPanelStruct() {
                return _super.call(this) || this;
            }
            StreetCinemaSelectedPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "StreetCinemaSelectedPanel"));
            };
            StreetCinemaSelectedPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txtTip1 = (this.getChild("txtTip1"));
                this.m_txtTip2 = (this.getChild("txtTip2"));
                this.m_cinemaIcon = (this.getChild("cinemaIcon"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            StreetCinemaSelectedPanelStruct.URL = "ui://mu4e45moky795";
            StreetCinemaSelectedPanelStruct.DependPackages = ["Street", "Common", "WarMovie"];
            return StreetCinemaSelectedPanelStruct;
        }(fairygui.GComponent));
        Street.StreetCinemaSelectedPanelStruct = StreetCinemaSelectedPanelStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetCinemaSelectedPanelStruct.js.map