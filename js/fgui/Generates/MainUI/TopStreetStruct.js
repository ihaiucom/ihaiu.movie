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
    var MainUI;
    (function (MainUI) {
        var TopStreetStruct = /** @class */ (function (_super) {
            __extends(TopStreetStruct, _super);
            function TopStreetStruct() {
                return _super.call(this) || this;
            }
            TopStreetStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "TopStreet"));
            };
            TopStreetStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_blockIcon = (this.getChild("blockIcon"));
                this.m_streetId = (this.getChild("streetId"));
                this.m_roleName = (this.getChild("roleName"));
                this.m_streetRank = (this.getChild("streetRank"));
                this.m_red = (this.getChild("red"));
            };
            TopStreetStruct.URL = "ui://7ecreso0rbh3x46";
            TopStreetStruct.DependPackages = ["MainUI"];
            return TopStreetStruct;
        }(fairygui.GButton));
        MainUI.TopStreetStruct = TopStreetStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopStreetStruct.js.map