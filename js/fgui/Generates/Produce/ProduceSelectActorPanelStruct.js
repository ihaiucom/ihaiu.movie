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
    var Produce;
    (function (Produce) {
        var ProduceSelectActorPanelStruct = /** @class */ (function (_super) {
            __extends(ProduceSelectActorPanelStruct, _super);
            function ProduceSelectActorPanelStruct() {
                return _super.call(this) || this;
            }
            ProduceSelectActorPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ProduceSelectActorPanel"));
            };
            ProduceSelectActorPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_txtTip1 = (this.getChild("txtTip1"));
                this.m_txtTip2 = (this.getChild("txtTip2"));
                this.m_typefilterList = (this.getChild("typefilterList"));
                this.m_bgmodel = (this.getChild("bgmodel"));
                this.m_commonDialog = (this.getChild("commonDialog"));
            };
            ProduceSelectActorPanelStruct.URL = "ui://eg7c5x5rvw1q10";
            ProduceSelectActorPanelStruct.DependPackages = ["Produce", "System", "Common"];
            return ProduceSelectActorPanelStruct;
        }(fairygui.GComponent));
        Produce.ProduceSelectActorPanelStruct = ProduceSelectActorPanelStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceSelectActorPanelStruct.js.map