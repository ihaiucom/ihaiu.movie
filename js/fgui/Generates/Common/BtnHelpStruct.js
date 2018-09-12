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
    var Common;
    (function (Common) {
        var BtnHelpStruct = /** @class */ (function (_super) {
            __extends(BtnHelpStruct, _super);
            function BtnHelpStruct() {
                return _super.call(this) || this;
            }
            BtnHelpStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "BtnHelp"));
            };
            BtnHelpStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnHelp = (this.getChild("btnHelp"));
            };
            BtnHelpStruct.URL = "ui://txcuvopdcvs8ci";
            BtnHelpStruct.DependPackages = ["Common"];
            return BtnHelpStruct;
        }(fairygui.GComponent));
        Common.BtnHelpStruct = BtnHelpStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnHelpStruct.js.map