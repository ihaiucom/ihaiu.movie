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
        var BtnAddStruct = /** @class */ (function (_super) {
            __extends(BtnAddStruct, _super);
            function BtnAddStruct() {
                return _super.call(this) || this;
            }
            BtnAddStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "BtnAdd"));
            };
            BtnAddStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            BtnAddStruct.URL = "ui://eg7c5x5rfd658";
            BtnAddStruct.DependPackages = ["Produce", "Common"];
            return BtnAddStruct;
        }(fairygui.GButton));
        Produce.BtnAddStruct = BtnAddStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnAddStruct.js.map