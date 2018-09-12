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
        var HeadItemIconStruct = /** @class */ (function (_super) {
            __extends(HeadItemIconStruct, _super);
            function HeadItemIconStruct() {
                return _super.call(this) || this;
            }
            HeadItemIconStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "HeadItemIcon"));
            };
            HeadItemIconStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            HeadItemIconStruct.URL = "ui://txcuvopdw1srd5";
            HeadItemIconStruct.DependPackages = ["Common"];
            return HeadItemIconStruct;
        }(fairygui.GLabel));
        Common.HeadItemIconStruct = HeadItemIconStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=HeadItemIconStruct.js.map