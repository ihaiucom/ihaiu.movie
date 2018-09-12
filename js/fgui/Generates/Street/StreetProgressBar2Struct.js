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
        var StreetProgressBar2Struct = /** @class */ (function (_super) {
            __extends(StreetProgressBar2Struct, _super);
            function StreetProgressBar2Struct() {
                return _super.call(this) || this;
            }
            StreetProgressBar2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "StreetProgressBar2"));
            };
            StreetProgressBar2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_title = (this.getChild("title"));
            };
            StreetProgressBar2Struct.URL = "ui://mu4e45moky79t";
            StreetProgressBar2Struct.DependPackages = ["Street"];
            return StreetProgressBar2Struct;
        }(fairygui.GProgressBar));
        Street.StreetProgressBar2Struct = StreetProgressBar2Struct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetProgressBar2Struct.js.map