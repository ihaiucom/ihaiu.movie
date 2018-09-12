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
        var RankRewardItemStruct = /** @class */ (function (_super) {
            __extends(RankRewardItemStruct, _super);
            function RankRewardItemStruct() {
                return _super.call(this) || this;
            }
            RankRewardItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "RankRewardItem"));
            };
            RankRewardItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txtRank = (this.getChild("txtRank"));
                this.m_listReward = (this.getChild("listReward"));
            };
            RankRewardItemStruct.URL = "ui://s33x8418swip1ub";
            RankRewardItemStruct.DependPackages = ["PfSkin"];
            return RankRewardItemStruct;
        }(fairygui.GComponent));
        PfSkin.RankRewardItemStruct = RankRewardItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankRewardItemStruct.js.map