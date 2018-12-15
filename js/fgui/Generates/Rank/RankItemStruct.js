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
        var RankItemStruct = /** @class */ (function (_super) {
            __extends(RankItemStruct, _super);
            function RankItemStruct() {
                return _super.call(this) || this;
            }
            RankItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Rank", "RankItem"));
            };
            RankItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_BG = this.getController("BG");
                this.m_Rank = this.getController("Rank");
                this.m_isMine = this.getController("isMine");
                this.m_txtRank = (this.getChild("txtRank"));
                this.m_txtMovie = (this.getChild("txtMovie"));
                this.m_txtName = (this.getChild("txtName"));
                this.m_icon = (this.getChild("icon"));
                this.m_btnSelect = (this.getChild("btnSelect"));
                this.m_btnPlayer = (this.getChild("btnPlayer"));
                this.m_btnMovie = (this.getChild("btnMovie"));
                this.m_aniBling = this.getTransition("aniBling");
            };
            RankItemStruct.URL = "ui://pqepuo38pqkqj";
            RankItemStruct.DependPackages = ["Rank", "Common", "WarMovie"];
            return RankItemStruct;
        }(fairygui.GLabel));
        Rank.RankItemStruct = RankItemStruct;
    })(Rank = fgui.Rank || (fgui.Rank = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankItemStruct.js.map