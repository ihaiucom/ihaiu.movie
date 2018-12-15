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
    var Bag;
    (function (Bag) {
        var PropItemStruct = /** @class */ (function (_super) {
            __extends(PropItemStruct, _super);
            function PropItemStruct() {
                return _super.call(this) || this;
            }
            PropItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Bag", "PropItem"));
            };
            PropItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_type = this.getController("type");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_star = (this.getChild("star"));
                this.m_red = (this.getChild("red"));
            };
            PropItemStruct.URL = "ui://wdrb9z06n9f0e";
            PropItemStruct.DependPackages = ["Bag", "Common", "MainUI"];
            return PropItemStruct;
        }(fairygui.GButton));
        Bag.PropItemStruct = PropItemStruct;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PropItemStruct.js.map