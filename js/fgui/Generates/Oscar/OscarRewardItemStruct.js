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
    var Oscar;
    (function (Oscar) {
        var OscarRewardItemStruct = /** @class */ (function (_super) {
            __extends(OscarRewardItemStruct, _super);
            function OscarRewardItemStruct() {
                return _super.call(this) || this;
            }
            OscarRewardItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Oscar", "OscarRewardItem"));
            };
            OscarRewardItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_rewardState = this.getController("rewardState");
                this.m_isNew = this.getController("isNew");
                this.m_name = (this.getChild("name"));
                this.m_title = (this.getChild("title"));
                this.m_info = (this.getChild("info"));
                this.m_tip = (this.getChild("tip"));
                this.m_list = (this.getChild("list"));
                this.m_btnReward = (this.getChild("btnReward"));
            };
            OscarRewardItemStruct.URL = "ui://spuqgpclyyljr";
            OscarRewardItemStruct.DependPackages = ["Oscar", "Common"];
            return OscarRewardItemStruct;
        }(fairygui.GComponent));
        Oscar.OscarRewardItemStruct = OscarRewardItemStruct;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarRewardItemStruct.js.map