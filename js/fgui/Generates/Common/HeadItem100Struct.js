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
        var HeadItem100Struct = /** @class */ (function (_super) {
            __extends(HeadItem100Struct, _super);
            function HeadItem100Struct() {
                return _super.call(this) || this;
            }
            HeadItem100Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "HeadItem100"));
            };
            HeadItem100Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            HeadItem100Struct.URL = "ui://txcuvopdtpm8cp";
            HeadItem100Struct.DependPackages = ["Common"];
            return HeadItem100Struct;
        }(fairygui.GLabel));
        Common.HeadItem100Struct = HeadItem100Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=HeadItem100Struct.js.map