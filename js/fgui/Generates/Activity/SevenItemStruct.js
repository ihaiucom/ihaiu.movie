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
    var Activity;
    (function (Activity) {
        var SevenItemStruct = /** @class */ (function (_super) {
            __extends(SevenItemStruct, _super);
            function SevenItemStruct() {
                return _super.call(this) || this;
            }
            SevenItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "SevenItem"));
            };
            SevenItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_dayTip = (this.getChild("dayTip"));
                this.m_rewardList = (this.getChild("rewardList"));
                this.m_okTip = (this.getChild("okTip"));
                this.m_waitTip = (this.getChild("waitTip"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            SevenItemStruct.URL = "ui://9qou8rs7sga13";
            SevenItemStruct.DependPackages = ["Activity", "Common", "PfSkin"];
            return SevenItemStruct;
        }(fairygui.GComponent));
        Activity.SevenItemStruct = SevenItemStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SevenItemStruct.js.map