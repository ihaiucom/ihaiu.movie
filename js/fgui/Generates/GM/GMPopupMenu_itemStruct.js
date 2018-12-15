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
    var GM;
    (function (GM) {
        var GMPopupMenu_itemStruct = /** @class */ (function (_super) {
            __extends(GMPopupMenu_itemStruct, _super);
            function GMPopupMenu_itemStruct() {
                return _super.call(this) || this;
            }
            GMPopupMenu_itemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMPopupMenu_item"));
            };
            GMPopupMenu_itemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_checked = this.getController("checked");
                this.m_title = (this.getChild("title"));
            };
            GMPopupMenu_itemStruct.URL = "ui://ujw583ypm23g3";
            GMPopupMenu_itemStruct.DependPackages = ["GM"];
            return GMPopupMenu_itemStruct;
        }(fairygui.GButton));
        GM.GMPopupMenu_itemStruct = GMPopupMenu_itemStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMPopupMenu_itemStruct.js.map