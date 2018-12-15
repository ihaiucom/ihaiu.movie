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
    var Rank;
    (function (Rank) {
        var RankRewardItemStruct = /** @class */ (function (_super) {
            __extends(RankRewardItemStruct, _super);
            function RankRewardItemStruct() {
                return _super.call(this) || this;
            }
            RankRewardItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Rank", "RankRewardItem"));
            };
            RankRewardItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txtRank = (this.getChild("txtRank"));
                this.m_listReward = (this.getChild("listReward"));
            };
            RankRewardItemStruct.URL = "ui://pqepuo38pqkqk";
            RankRewardItemStruct.DependPackages = ["Rank", "WarMovie", "Common"];
            return RankRewardItemStruct;
        }(fairygui.GComponent));
        Rank.RankRewardItemStruct = RankRewardItemStruct;
    })(Rank = fgui.Rank || (fgui.Rank = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankRewardItemStruct.js.map