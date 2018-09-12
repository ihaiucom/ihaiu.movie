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
        var CommonDialogUIStruct = /** @class */ (function (_super) {
            __extends(CommonDialogUIStruct, _super);
            function CommonDialogUIStruct() {
                return _super.call(this) || this;
            }
            CommonDialogUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "CommonDialogUI"));
            };
            CommonDialogUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            CommonDialogUIStruct.URL = "ui://s33x8418jazc1me";
            CommonDialogUIStruct.DependPackages = ["PfSkin", "Common"];
            return CommonDialogUIStruct;
        }(fairygui.GComponent));
        PfSkin.CommonDialogUIStruct = CommonDialogUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonDialogUIStruct.js.map