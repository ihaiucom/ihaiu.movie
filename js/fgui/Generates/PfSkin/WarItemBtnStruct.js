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
    var PfSkin;
    (function (PfSkin) {
        var WarItemBtnStruct = /** @class */ (function (_super) {
            __extends(WarItemBtnStruct, _super);
            function WarItemBtnStruct() {
                return _super.call(this) || this;
            }
            WarItemBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarItemBtn"));
            };
            WarItemBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_bg = (this.getChild("bg"));
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            WarItemBtnStruct.URL = "ui://s33x8418k8js1i7";
            WarItemBtnStruct.DependPackages = ["PfSkin"];
            return WarItemBtnStruct;
        }(fairygui.GButton));
        PfSkin.WarItemBtnStruct = WarItemBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarItemBtnStruct.js.map