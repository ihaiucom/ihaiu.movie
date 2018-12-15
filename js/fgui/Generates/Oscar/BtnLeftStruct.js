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
    var Oscar;
    (function (Oscar) {
        var BtnLeftStruct = /** @class */ (function (_super) {
            __extends(BtnLeftStruct, _super);
            function BtnLeftStruct() {
                return _super.call(this) || this;
            }
            BtnLeftStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Oscar", "btnLeft"));
            };
            BtnLeftStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            BtnLeftStruct.URL = "ui://spuqgpcln3vm1x";
            BtnLeftStruct.DependPackages = ["Oscar"];
            return BtnLeftStruct;
        }(fairygui.GButton));
        Oscar.BtnLeftStruct = BtnLeftStruct;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnLeftStruct.js.map