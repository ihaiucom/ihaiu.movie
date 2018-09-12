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
        var RawAssetItemStruct = /** @class */ (function (_super) {
            __extends(RawAssetItemStruct, _super);
            function RawAssetItemStruct() {
                return _super.call(this) || this;
            }
            RawAssetItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "RawAssetItem"));
            };
            RawAssetItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_iconLoad = (this.getChild("iconLoad"));
            };
            RawAssetItemStruct.URL = "ui://txcuvopdahbat23n";
            RawAssetItemStruct.DependPackages = ["Common"];
            return RawAssetItemStruct;
        }(fairygui.GComponent));
        Common.RawAssetItemStruct = RawAssetItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RawAssetItemStruct.js.map