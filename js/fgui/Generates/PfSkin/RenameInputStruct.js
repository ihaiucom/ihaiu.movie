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
        var RenameInputStruct = /** @class */ (function (_super) {
            __extends(RenameInputStruct, _super);
            function RenameInputStruct() {
                return _super.call(this) || this;
            }
            RenameInputStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "RenameInput"));
            };
            RenameInputStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            RenameInputStruct.URL = "ui://s33x8418bw70t272";
            RenameInputStruct.DependPackages = ["PfSkin", "Common"];
            return RenameInputStruct;
        }(fairygui.GLabel));
        PfSkin.RenameInputStruct = RenameInputStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RenameInputStruct.js.map