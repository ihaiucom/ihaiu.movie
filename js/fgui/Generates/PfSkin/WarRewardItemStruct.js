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
        var WarRewardItemStruct = /** @class */ (function (_super) {
            __extends(WarRewardItemStruct, _super);
            function WarRewardItemStruct() {
                return _super.call(this) || this;
            }
            WarRewardItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarRewardItem"));
            };
            WarRewardItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            WarRewardItemStruct.URL = "ui://s33x8418k8js1ha";
            WarRewardItemStruct.DependPackages = ["PfSkin"];
            return WarRewardItemStruct;
        }(fairygui.GButton));
        PfSkin.WarRewardItemStruct = WarRewardItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarRewardItemStruct.js.map