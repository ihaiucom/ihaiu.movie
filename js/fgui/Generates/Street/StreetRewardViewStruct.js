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
        var StreetRewardViewStruct = /** @class */ (function (_super) {
            __extends(StreetRewardViewStruct, _super);
            function StreetRewardViewStruct() {
                return _super.call(this) || this;
            }
            StreetRewardViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "StreetRewardView"));
            };
            StreetRewardViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_txtTip = (this.getChild("txtTip"));
                this.m_listReward = (this.getChild("listReward"));
            };
            StreetRewardViewStruct.URL = "ui://mu4e45moky79v";
            StreetRewardViewStruct.DependPackages = ["Street", "Common"];
            return StreetRewardViewStruct;
        }(fairygui.GButton));
        Street.StreetRewardViewStruct = StreetRewardViewStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetRewardViewStruct.js.map