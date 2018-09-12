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
        var UserRankStruct = /** @class */ (function (_super) {
            __extends(UserRankStruct, _super);
            function UserRankStruct() {
                return _super.call(this) || this;
            }
            UserRankStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Rank", "UserRank"));
            };
            UserRankStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_hasGetReward = this.getController("hasGetReward");
                this.m_txtName = (this.getChild("txtName"));
                this.m_txtMovie = (this.getChild("txtMovie"));
                this.m_txtRank = (this.getChild("txtRank"));
                this.m_listReward = (this.getChild("listReward"));
                this.m_btnReward = (this.getChild("btnReward"));
                this.m_btnMovie = (this.getChild("btnMovie"));
            };
            UserRankStruct.URL = "ui://pqepuo38pqkqn";
            UserRankStruct.DependPackages = ["Rank", "Common"];
            return UserRankStruct;
        }(fairygui.GComponent));
        Rank.UserRankStruct = UserRankStruct;
    })(Rank = fgui.Rank || (fgui.Rank = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=UserRankStruct.js.map