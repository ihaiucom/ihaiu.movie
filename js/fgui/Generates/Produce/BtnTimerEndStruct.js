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
        var BtnTimerEndStruct = /** @class */ (function (_super) {
            __extends(BtnTimerEndStruct, _super);
            function BtnTimerEndStruct() {
                return _super.call(this) || this;
            }
            BtnTimerEndStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "BtnTimerEnd"));
            };
            BtnTimerEndStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_assetIcon = (this.getChild("assetIcon"));
                this.m_num = (this.getChild("num"));
            };
            BtnTimerEndStruct.URL = "ui://eg7c5x5rfd657";
            BtnTimerEndStruct.DependPackages = ["Produce"];
            return BtnTimerEndStruct;
        }(fairygui.GButton));
        Produce.BtnTimerEndStruct = BtnTimerEndStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnTimerEndStruct.js.map