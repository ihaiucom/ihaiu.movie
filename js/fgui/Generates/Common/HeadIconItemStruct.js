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
        var HeadIconItemStruct = /** @class */ (function (_super) {
            __extends(HeadIconItemStruct, _super);
            function HeadIconItemStruct() {
                return _super.call(this) || this;
            }
            HeadIconItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "HeadIconItem"));
            };
            HeadIconItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            HeadIconItemStruct.URL = "ui://txcuvopdlq443b";
            HeadIconItemStruct.DependPackages = ["Common"];
            return HeadIconItemStruct;
        }(fairygui.GButton));
        Common.HeadIconItemStruct = HeadIconItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=HeadIconItemStruct.js.map