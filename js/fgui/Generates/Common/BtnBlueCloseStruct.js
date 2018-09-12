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
    var Common;
    (function (Common) {
        var BtnBlueCloseStruct = /** @class */ (function (_super) {
            __extends(BtnBlueCloseStruct, _super);
            function BtnBlueCloseStruct() {
                return _super.call(this) || this;
            }
            BtnBlueCloseStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "BtnBlueClose"));
            };
            BtnBlueCloseStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            BtnBlueCloseStruct.URL = "ui://txcuvopdol2e2o";
            BtnBlueCloseStruct.DependPackages = ["Common"];
            return BtnBlueCloseStruct;
        }(fairygui.GButton));
        Common.BtnBlueCloseStruct = BtnBlueCloseStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnBlueCloseStruct.js.map