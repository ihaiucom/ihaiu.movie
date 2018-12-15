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
        var AssetItemVerticalStruct = /** @class */ (function (_super) {
            __extends(AssetItemVerticalStruct, _super);
            function AssetItemVerticalStruct() {
                return _super.call(this) || this;
            }
            AssetItemVerticalStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "AssetItemVertical"));
            };
            AssetItemVerticalStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_star = (this.getChild("star"));
            };
            AssetItemVerticalStruct.URL = "ui://txcuvopdsc1s32";
            AssetItemVerticalStruct.DependPackages = ["Common"];
            return AssetItemVerticalStruct;
        }(fairygui.GComponent));
        Common.AssetItemVerticalStruct = AssetItemVerticalStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssetItemVerticalStruct.js.map