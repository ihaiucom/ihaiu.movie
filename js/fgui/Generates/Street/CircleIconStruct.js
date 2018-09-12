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
    var Street;
    (function (Street) {
        var CircleIconStruct = /** @class */ (function (_super) {
            __extends(CircleIconStruct, _super);
            function CircleIconStruct() {
                return _super.call(this) || this;
            }
            CircleIconStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "circleIcon"));
            };
            CircleIconStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            CircleIconStruct.URL = "ui://mu4e45modo332d";
            CircleIconStruct.DependPackages = ["Street"];
            return CircleIconStruct;
        }(fairygui.GComponent));
        Street.CircleIconStruct = CircleIconStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CircleIconStruct.js.map