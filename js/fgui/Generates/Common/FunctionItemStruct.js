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
        var FunctionItemStruct = /** @class */ (function (_super) {
            __extends(FunctionItemStruct, _super);
            function FunctionItemStruct() {
                return _super.call(this) || this;
            }
            FunctionItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "FunctionItem"));
            };
            FunctionItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            FunctionItemStruct.URL = "ui://txcuvopdcwjyax";
            FunctionItemStruct.DependPackages = ["Common"];
            return FunctionItemStruct;
        }(fairygui.GButton));
        Common.FunctionItemStruct = FunctionItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FunctionItemStruct.js.map