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
        var BtnProduceAllStruct = /** @class */ (function (_super) {
            __extends(BtnProduceAllStruct, _super);
            function BtnProduceAllStruct() {
                return _super.call(this) || this;
            }
            BtnProduceAllStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "BtnProduceAll"));
            };
            BtnProduceAllStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            BtnProduceAllStruct.URL = "ui://eg7c5x5rt2271d";
            BtnProduceAllStruct.DependPackages = ["Produce", "Common"];
            return BtnProduceAllStruct;
        }(fairygui.GButton));
        Produce.BtnProduceAllStruct = BtnProduceAllStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnProduceAllStruct.js.map