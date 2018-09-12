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
        var CommonProgressBlueStruct = /** @class */ (function (_super) {
            __extends(CommonProgressBlueStruct, _super);
            function CommonProgressBlueStruct() {
                return _super.call(this) || this;
            }
            CommonProgressBlueStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "CommonProgressBlue"));
            };
            CommonProgressBlueStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_top1 = (this.getChild("top1"));
            };
            CommonProgressBlueStruct.URL = "ui://txcuvopdr5spav";
            CommonProgressBlueStruct.DependPackages = ["Common", "System"];
            return CommonProgressBlueStruct;
        }(fairygui.GProgressBar));
        Common.CommonProgressBlueStruct = CommonProgressBlueStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonProgressBlueStruct.js.map