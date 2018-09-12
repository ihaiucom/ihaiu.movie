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
        var ProduceOffActorStruct = /** @class */ (function (_super) {
            __extends(ProduceOffActorStruct, _super);
            function ProduceOffActorStruct() {
                return _super.call(this) || this;
            }
            ProduceOffActorStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ProduceOffActor"));
            };
            ProduceOffActorStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_actorName = (this.getChild("actorName"));
                this.m_starList = (this.getChild("starList"));
                this.m_actorIcon = (this.getChild("actorIcon"));
                this.m_bgmodel = (this.getChild("bgmodel"));
                this.m_commonPanel = (this.getChild("commonPanel"));
                this.m_btnOffActor = (this.getChild("btnOffActor"));
                this.m_attr1 = (this.getChild("attr1"));
                this.m_attr2 = (this.getChild("attr2"));
                this.m_attr3 = (this.getChild("attr3"));
                this.m_attr4 = (this.getChild("attr4"));
            };
            ProduceOffActorStruct.URL = "ui://eg7c5x5regep1f";
            ProduceOffActorStruct.DependPackages = ["Produce", "System", "Common"];
            return ProduceOffActorStruct;
        }(fairygui.GComponent));
        Produce.ProduceOffActorStruct = ProduceOffActorStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceOffActorStruct.js.map