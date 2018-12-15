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
        var IconLabelItemStruct = /** @class */ (function (_super) {
            __extends(IconLabelItemStruct, _super);
            function IconLabelItemStruct() {
                return _super.call(this) || this;
            }
            IconLabelItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "IconLabelItem"));
            };
            IconLabelItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            IconLabelItemStruct.URL = "ui://txcuvopdjazc1mf";
            IconLabelItemStruct.DependPackages = ["Common"];
            return IconLabelItemStruct;
        }(fairygui.GButton));
        Common.IconLabelItemStruct = IconLabelItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=IconLabelItemStruct.js.map