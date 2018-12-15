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
    var LangEn;
    (function (LangEn) {
        var SkipBtnStruct = /** @class */ (function (_super) {
            __extends(SkipBtnStruct, _super);
            function SkipBtnStruct() {
                return _super.call(this) || this;
            }
            SkipBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("LangEn", "SkipBtn"));
            };
            SkipBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            SkipBtnStruct.URL = "ui://8xeoljnbboch5";
            SkipBtnStruct.DependPackages = ["LangEn"];
            return SkipBtnStruct;
        }(fairygui.GButton));
        LangEn.SkipBtnStruct = SkipBtnStruct;
    })(LangEn = fgui.LangEn || (fgui.LangEn = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SkipBtnStruct.js.map