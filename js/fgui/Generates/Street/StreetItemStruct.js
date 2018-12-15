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
        var StreetItemStruct = /** @class */ (function (_super) {
            __extends(StreetItemStruct, _super);
            function StreetItemStruct() {
                return _super.call(this) || this;
            }
            StreetItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "StreetItem"));
            };
            StreetItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_isCurrent = this.getController("isCurrent");
                this.m_btnSelect = (this.getChild("btnSelect"));
                this.m_streetIcon = (this.getChild("streetIcon"));
                this.m_playerIcon = (this.getChild("playerIcon"));
                this.m_rewardView = (this.getChild("rewardView"));
                this.m_cinemaView = (this.getChild("cinemaView"));
                this.m_progress = (this.getChild("progress"));
                this.m_t0 = this.getTransition("t0");
            };
            StreetItemStruct.URL = "ui://mu4e45moky79b";
            StreetItemStruct.DependPackages = ["Street", "Common", "WarMovie"];
            return StreetItemStruct;
        }(fairygui.GLabel));
        Street.StreetItemStruct = StreetItemStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetItemStruct.js.map