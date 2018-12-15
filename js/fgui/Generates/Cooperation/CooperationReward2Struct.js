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
    var Cooperation;
    (function (Cooperation) {
        var CooperationReward2Struct = /** @class */ (function (_super) {
            __extends(CooperationReward2Struct, _super);
            function CooperationReward2Struct() {
                return _super.call(this) || this;
            }
            CooperationReward2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "CooperationReward2"));
            };
            CooperationReward2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_starList = (this.getChild("starList"));
            };
            CooperationReward2Struct.URL = "ui://k9ycebr5ggdh2e";
            CooperationReward2Struct.DependPackages = ["Cooperation", "Common", "PfSkin"];
            return CooperationReward2Struct;
        }(fairygui.GComponent));
        Cooperation.CooperationReward2Struct = CooperationReward2Struct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationReward2Struct.js.map