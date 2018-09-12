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
        var StreetProgressBarStruct = /** @class */ (function (_super) {
            __extends(StreetProgressBarStruct, _super);
            function StreetProgressBarStruct() {
                return _super.call(this) || this;
            }
            StreetProgressBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "StreetProgressBar"));
            };
            StreetProgressBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_title = (this.getChild("title"));
            };
            StreetProgressBarStruct.URL = "ui://mu4e45moky79s";
            StreetProgressBarStruct.DependPackages = ["Street"];
            return StreetProgressBarStruct;
        }(fairygui.GProgressBar));
        Street.StreetProgressBarStruct = StreetProgressBarStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetProgressBarStruct.js.map