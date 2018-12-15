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
    var Talk;
    (function (Talk) {
        var TabStruct = /** @class */ (function (_super) {
            __extends(TabStruct, _super);
            function TabStruct() {
                return _super.call(this) || this;
            }
            TabStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "tab"));
            };
            TabStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            TabStruct.URL = "ui://tqkotd6ue3hkb";
            TabStruct.DependPackages = ["Talk"];
            return TabStruct;
        }(fairygui.GButton));
        Talk.TabStruct = TabStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TabStruct.js.map