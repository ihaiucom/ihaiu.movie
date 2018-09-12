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
        var StreetSelectCinemaPanelStruct = /** @class */ (function (_super) {
            __extends(StreetSelectCinemaPanelStruct, _super);
            function StreetSelectCinemaPanelStruct() {
                return _super.call(this) || this;
            }
            StreetSelectCinemaPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "StreetSelectCinemaPanel"));
            };
            StreetSelectCinemaPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_title = (this.getChild("title"));
                this.m_btnConfirm = (this.getChild("btnConfirm"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            StreetSelectCinemaPanelStruct.URL = "ui://mu4e45moky79p";
            StreetSelectCinemaPanelStruct.DependPackages = ["Street", "Common"];
            return StreetSelectCinemaPanelStruct;
        }(fairygui.GComponent));
        Street.StreetSelectCinemaPanelStruct = StreetSelectCinemaPanelStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetSelectCinemaPanelStruct.js.map