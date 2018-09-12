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
        var GroupRankViewStruct = /** @class */ (function (_super) {
            __extends(GroupRankViewStruct, _super);
            function GroupRankViewStruct() {
                return _super.call(this) || this;
            }
            GroupRankViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "GroupRankView"));
            };
            GroupRankViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_groupRankList = (this.getChild("groupRankList"));
                this.m_txtGroupMovie = (this.getChild("txtGroupMovie"));
                this.m_txtGroupMovieRank = (this.getChild("txtGroupMovieRank"));
                this.m_txtMovieTime = (this.getChild("txtMovieTime"));
                this.m_tip = (this.getChild("tip"));
            };
            GroupRankViewStruct.URL = "ui://s33x8418oebq1vq";
            GroupRankViewStruct.DependPackages = ["PfSkin"];
            return GroupRankViewStruct;
        }(fairygui.GComponent));
        PfSkin.GroupRankViewStruct = GroupRankViewStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GroupRankViewStruct.js.map