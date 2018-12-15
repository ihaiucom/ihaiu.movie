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
        var ProduceRenderItemStruct = /** @class */ (function (_super) {
            __extends(ProduceRenderItemStruct, _super);
            function ProduceRenderItemStruct() {
                return _super.call(this) || this;
            }
            ProduceRenderItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ProduceRenderItem"));
            };
            ProduceRenderItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_activeItem = (this.getChild("activeItem"));
                this.m_inActiveItem = (this.getChild("inActiveItem"));
            };
            ProduceRenderItemStruct.URL = "ui://eg7c5x5rek6818";
            ProduceRenderItemStruct.DependPackages = ["Produce", "Common", "Fx"];
            return ProduceRenderItemStruct;
        }(fairygui.GComponent));
        Produce.ProduceRenderItemStruct = ProduceRenderItemStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceRenderItemStruct.js.map