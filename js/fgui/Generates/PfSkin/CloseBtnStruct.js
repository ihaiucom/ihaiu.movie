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
    var PfSkin;
    (function (PfSkin) {
        var CloseBtnStruct = /** @class */ (function (_super) {
            __extends(CloseBtnStruct, _super);
            function CloseBtnStruct() {
                return _super.call(this) || this;
            }
            CloseBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "CloseBtn"));
            };
            CloseBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            CloseBtnStruct.URL = "ui://s33x8418jazc1ma";
            CloseBtnStruct.DependPackages = ["PfSkin", "Common"];
            return CloseBtnStruct;
        }(fairygui.GButton));
        PfSkin.CloseBtnStruct = CloseBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CloseBtnStruct.js.map