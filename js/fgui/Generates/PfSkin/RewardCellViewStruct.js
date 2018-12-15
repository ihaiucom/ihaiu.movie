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
    var PfSkin;
    (function (PfSkin) {
        var RewardCellViewStruct = /** @class */ (function (_super) {
            __extends(RewardCellViewStruct, _super);
            function RewardCellViewStruct() {
                return _super.call(this) || this;
            }
            RewardCellViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "RewardCellView"));
            };
            RewardCellViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            RewardCellViewStruct.URL = "ui://s33x8418jazc1mg";
            RewardCellViewStruct.DependPackages = ["PfSkin"];
            return RewardCellViewStruct;
        }(fairygui.GLabel));
        PfSkin.RewardCellViewStruct = RewardCellViewStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RewardCellViewStruct.js.map