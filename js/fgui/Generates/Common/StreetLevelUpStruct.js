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
        var StreetLevelUpStruct = /** @class */ (function (_super) {
            __extends(StreetLevelUpStruct, _super);
            function StreetLevelUpStruct() {
                return _super.call(this) || this;
            }
            StreetLevelUpStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "StreetLevelUp"));
            };
            StreetLevelUpStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_lastStreet = (this.getChild("lastStreet"));
                this.m_currentStreet = (this.getChild("currentStreet"));
                this.m_group2 = (this.getChild("group2"));
                this.m_awardList = (this.getChild("awardList"));
                this.m_btnGetAward = (this.getChild("btnGetAward"));
                this.m_street = (this.getChild("street"));
                this.m_t0 = this.getTransition("t0");
            };
            StreetLevelUpStruct.URL = "ui://txcuvopdcke2gb";
            StreetLevelUpStruct.DependPackages = ["Common", "Fx", "PlayerInfo"];
            return StreetLevelUpStruct;
        }(fairygui.GComponent));
        Common.StreetLevelUpStruct = StreetLevelUpStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetLevelUpStruct.js.map