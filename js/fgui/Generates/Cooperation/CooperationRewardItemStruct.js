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
        var CooperationRewardItemStruct = /** @class */ (function (_super) {
            __extends(CooperationRewardItemStruct, _super);
            function CooperationRewardItemStruct() {
                return _super.call(this) || this;
            }
            CooperationRewardItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "CooperationRewardItem"));
            };
            CooperationRewardItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_status = this.getController("status");
                this.m_des = (this.getChild("des"));
                this.m_list = (this.getChild("list"));
                this.m_assitingText = (this.getChild("assitingText"));
                this.m_icon = (this.getChild("icon"));
                this.m_receiveBtn = (this.getChild("receiveBtn"));
                this.m_getBtn = (this.getChild("getBtn"));
                this.m_assistBtn = (this.getChild("assistBtn"));
            };
            CooperationRewardItemStruct.URL = "ui://k9ycebr5w3bv5";
            CooperationRewardItemStruct.DependPackages = ["Cooperation", "Common"];
            return CooperationRewardItemStruct;
        }(fairygui.GComponent));
        Cooperation.CooperationRewardItemStruct = CooperationRewardItemStruct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationRewardItemStruct.js.map