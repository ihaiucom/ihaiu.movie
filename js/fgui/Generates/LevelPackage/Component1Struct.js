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
    var LevelPackage;
    (function (LevelPackage) {
        var Component1Struct = /** @class */ (function (_super) {
            __extends(Component1Struct, _super);
            function Component1Struct() {
                return _super.call(this) || this;
            }
            Component1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("LevelPackage", "Component1"));
            };
            Component1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_starList = (this.getChild("starList"));
                this.m_title = (this.getChild("title"));
            };
            Component1Struct.URL = "ui://7w6h9vntndr0o";
            Component1Struct.DependPackages = ["LevelPackage"];
            return Component1Struct;
        }(fairygui.GComponent));
        LevelPackage.Component1Struct = Component1Struct;
    })(LevelPackage = fgui.LevelPackage || (fgui.LevelPackage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Component1Struct.js.map