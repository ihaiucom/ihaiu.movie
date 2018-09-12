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
        var AvatarShadowStruct = /** @class */ (function (_super) {
            __extends(AvatarShadowStruct, _super);
            function AvatarShadowStruct() {
                return _super.call(this) || this;
            }
            AvatarShadowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "AvatarShadow"));
            };
            AvatarShadowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            AvatarShadowStruct.URL = "ui://txcuvopdoapba3";
            AvatarShadowStruct.DependPackages = ["Common"];
            return AvatarShadowStruct;
        }(fairygui.GComponent));
        Common.AvatarShadowStruct = AvatarShadowStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AvatarShadowStruct.js.map