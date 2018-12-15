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
    var Building;
    (function (Building) {
        var BtnNpcTipsStruct = /** @class */ (function (_super) {
            __extends(BtnNpcTipsStruct, _super);
            function BtnNpcTipsStruct() {
                return _super.call(this) || this;
            }
            BtnNpcTipsStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BtnNpcTips"));
            };
            BtnNpcTipsStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            BtnNpcTipsStruct.URL = "ui://d062jvkggy5h13r";
            BtnNpcTipsStruct.DependPackages = ["Building", "PfSkin", "Common"];
            return BtnNpcTipsStruct;
        }(fairygui.GButton));
        Building.BtnNpcTipsStruct = BtnNpcTipsStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnNpcTipsStruct.js.map