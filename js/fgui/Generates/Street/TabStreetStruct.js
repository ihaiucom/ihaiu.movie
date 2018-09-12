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
        var TabStreetStruct = /** @class */ (function (_super) {
            __extends(TabStreetStruct, _super);
            function TabStreetStruct() {
                return _super.call(this) || this;
            }
            TabStreetStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "TabStreet"));
            };
            TabStreetStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_grayed = this.getController("grayed");
                this.m_title = (this.getChild("title"));
            };
            TabStreetStruct.URL = "ui://mu4e45moiiww2a";
            TabStreetStruct.DependPackages = ["Street", "PfSkin"];
            return TabStreetStruct;
        }(fairygui.GButton));
        Street.TabStreetStruct = TabStreetStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TabStreetStruct.js.map