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
        var PropInfoItemStruct = /** @class */ (function (_super) {
            __extends(PropInfoItemStruct, _super);
            function PropInfoItemStruct() {
                return _super.call(this) || this;
            }
            PropInfoItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "PropInfoItem"));
            };
            PropInfoItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_c_title_color = this.getController("c_title_color");
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
            };
            PropInfoItemStruct.URL = "ui://txcuvopdlrfq1d";
            PropInfoItemStruct.DependPackages = ["Common"];
            return PropInfoItemStruct;
        }(fairygui.GButton));
        Common.PropInfoItemStruct = PropInfoItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PropInfoItemStruct.js.map