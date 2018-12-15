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
        var ProduceDescStruct = /** @class */ (function (_super) {
            __extends(ProduceDescStruct, _super);
            function ProduceDescStruct() {
                return _super.call(this) || this;
            }
            ProduceDescStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ProduceDesc"));
            };
            ProduceDescStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_descText = (this.getChild("descText"));
            };
            ProduceDescStruct.URL = "ui://eg7c5x5roh2e34";
            ProduceDescStruct.DependPackages = ["Produce"];
            return ProduceDescStruct;
        }(fairygui.GComponent));
        Produce.ProduceDescStruct = ProduceDescStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceDescStruct.js.map