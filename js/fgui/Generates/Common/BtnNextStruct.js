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
        var BtnNextStruct = /** @class */ (function (_super) {
            __extends(BtnNextStruct, _super);
            function BtnNextStruct() {
                return _super.call(this) || this;
            }
            BtnNextStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "BtnNext"));
            };
            BtnNextStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            BtnNextStruct.URL = "ui://txcuvopdenjffh";
            BtnNextStruct.DependPackages = ["Common"];
            return BtnNextStruct;
        }(fairygui.GButton));
        Common.BtnNextStruct = BtnNextStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnNextStruct.js.map