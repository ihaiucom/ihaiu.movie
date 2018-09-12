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
        var GroupMovieViewStruct = /** @class */ (function (_super) {
            __extends(GroupMovieViewStruct, _super);
            function GroupMovieViewStruct() {
                return _super.call(this) || this;
            }
            GroupMovieViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "GroupMovieView"));
            };
            GroupMovieViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_groupMovieRankList = (this.getChild("groupMovieRankList"));
                this.m_txtMovie = (this.getChild("txtMovie"));
                this.m_txtMovieRank = (this.getChild("txtMovieRank"));
                this.m_txtMovieName = (this.getChild("txtMovieName"));
            };
            GroupMovieViewStruct.URL = "ui://s33x8418oebq1vr";
            GroupMovieViewStruct.DependPackages = ["PfSkin"];
            return GroupMovieViewStruct;
        }(fairygui.GComponent));
        PfSkin.GroupMovieViewStruct = GroupMovieViewStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GroupMovieViewStruct.js.map