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
        var OnProduceAnimStruct = /** @class */ (function (_super) {
            __extends(OnProduceAnimStruct, _super);
            function OnProduceAnimStruct() {
                return _super.call(this) || this;
            }
            OnProduceAnimStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "OnProduceAnim"));
            };
            OnProduceAnimStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            OnProduceAnimStruct.URL = "ui://eg7c5x5rpspr2p";
            OnProduceAnimStruct.DependPackages = ["Produce"];
            return OnProduceAnimStruct;
        }(fairygui.GComponent));
        Produce.OnProduceAnimStruct = OnProduceAnimStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OnProduceAnimStruct.js.map