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
    var PopUp;
    (function (PopUp) {
        var PopUpMainStruct = /** @class */ (function (_super) {
            __extends(PopUpMainStruct, _super);
            function PopUpMainStruct() {
                return _super.call(this) || this;
            }
            PopUpMainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PopUp", "PopUpMain"));
            };
            PopUpMainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_pic = (this.getChild("pic"));
                this.m_close = (this.getChild("close"));
                this.m_check = (this.getChild("check"));
            };
            PopUpMainStruct.URL = "ui://4fu4p3osij4v0";
            PopUpMainStruct.DependPackages = ["PopUp", "Common"];
            return PopUpMainStruct;
        }(fairygui.GComponent));
        PopUp.PopUpMainStruct = PopUpMainStruct;
    })(PopUp = fgui.PopUp || (fgui.PopUp = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopUpMainStruct.js.map