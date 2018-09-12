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
        var BtnCloseStruct = /** @class */ (function (_super) {
            __extends(BtnCloseStruct, _super);
            function BtnCloseStruct() {
                return _super.call(this) || this;
            }
            BtnCloseStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "BtnClose"));
            };
            BtnCloseStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            BtnCloseStruct.URL = "ui://s33x8418mywn1k8";
            BtnCloseStruct.DependPackages = ["PfSkin", "Common"];
            return BtnCloseStruct;
        }(fairygui.GButton));
        PfSkin.BtnCloseStruct = BtnCloseStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnCloseStruct.js.map