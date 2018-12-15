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
        var ActorExperciseSelectPanelStruct = /** @class */ (function (_super) {
            __extends(ActorExperciseSelectPanelStruct, _super);
            function ActorExperciseSelectPanelStruct() {
                return _super.call(this) || this;
            }
            ActorExperciseSelectPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ActorExperciseSelectPanel"));
            };
            ActorExperciseSelectPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_list = (this.getChild("list"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            ActorExperciseSelectPanelStruct.URL = "ui://s33x8418rn1rt1vu";
            ActorExperciseSelectPanelStruct.DependPackages = ["PfSkin", "Common", "System"];
            return ActorExperciseSelectPanelStruct;
        }(fairygui.GComponent));
        PfSkin.ActorExperciseSelectPanelStruct = ActorExperciseSelectPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorExperciseSelectPanelStruct.js.map