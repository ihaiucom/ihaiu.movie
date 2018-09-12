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
    var Produce;
    (function (Produce) {
        var TabCircleListStruct = /** @class */ (function (_super) {
            __extends(TabCircleListStruct, _super);
            function TabCircleListStruct() {
                return _super.call(this) || this;
            }
            TabCircleListStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "TabCircleList"));
            };
            TabCircleListStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_cTab = this.getController("cTab");
                this.m_tab0 = (this.getChild("tab0"));
                this.m_tab1 = (this.getChild("tab1"));
                this.m_tab2 = (this.getChild("tab2"));
            };
            TabCircleListStruct.URL = "ui://eg7c5x5rpspr2f";
            TabCircleListStruct.DependPackages = ["Produce"];
            return TabCircleListStruct;
        }(fairygui.GComponent));
        Produce.TabCircleListStruct = TabCircleListStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TabCircleListStruct.js.map