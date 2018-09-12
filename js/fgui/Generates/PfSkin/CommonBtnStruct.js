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
        var CommonBtnStruct = /** @class */ (function (_super) {
            __extends(CommonBtnStruct, _super);
            function CommonBtnStruct() {
                return _super.call(this) || this;
            }
            CommonBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "CommonBtn"));
            };
            CommonBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_red = (this.getChild("red"));
            };
            CommonBtnStruct.URL = "ui://s33x8418jazc1mc";
            CommonBtnStruct.DependPackages = ["PfSkin"];
            return CommonBtnStruct;
        }(fairygui.GButton));
        PfSkin.CommonBtnStruct = CommonBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonBtnStruct.js.map