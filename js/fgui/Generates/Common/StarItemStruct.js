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
        var StarItemStruct = /** @class */ (function (_super) {
            __extends(StarItemStruct, _super);
            function StarItemStruct() {
                return _super.call(this) || this;
            }
            StarItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "StarItem"));
            };
            StarItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            StarItemStruct.URL = "ui://txcuvopdjazc1mu";
            StarItemStruct.DependPackages = ["Common", "PfSkin"];
            return StarItemStruct;
        }(fairygui.GLabel));
        Common.StarItemStruct = StarItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StarItemStruct.js.map