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
    var WarMovie;
    (function (WarMovie) {
        var WarContinueRewardItemStruct = /** @class */ (function (_super) {
            __extends(WarContinueRewardItemStruct, _super);
            function WarContinueRewardItemStruct() {
                return _super.call(this) || this;
            }
            WarContinueRewardItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarContinueRewardItem"));
            };
            WarContinueRewardItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_icon = (this.getChild("icon"));
            };
            WarContinueRewardItemStruct.URL = "ui://y6ozucp1qbxl87";
            WarContinueRewardItemStruct.DependPackages = ["WarMovie", "Common"];
            return WarContinueRewardItemStruct;
        }(fairygui.GButton));
        WarMovie.WarContinueRewardItemStruct = WarContinueRewardItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarContinueRewardItemStruct.js.map