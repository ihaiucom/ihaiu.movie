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
    var Bag;
    (function (Bag) {
        var SystemSelectActorPanelStruct = /** @class */ (function (_super) {
            __extends(SystemSelectActorPanelStruct, _super);
            function SystemSelectActorPanelStruct() {
                return _super.call(this) || this;
            }
            SystemSelectActorPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Bag", "SystemSelectActorPanel"));
            };
            SystemSelectActorPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_list = (this.getChild("list"));
                this.m_tipNoActor = (this.getChild("tipNoActor"));
                this.m_btnClose = (this.getChild("btnClose"));
                this.m_btnConfirm = (this.getChild("btnConfirm"));
            };
            SystemSelectActorPanelStruct.URL = "ui://wdrb9z06n9f03";
            SystemSelectActorPanelStruct.DependPackages = ["Bag", "Common"];
            return SystemSelectActorPanelStruct;
        }(fairygui.GComponent));
        Bag.SystemSelectActorPanelStruct = SystemSelectActorPanelStruct;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemSelectActorPanelStruct.js.map