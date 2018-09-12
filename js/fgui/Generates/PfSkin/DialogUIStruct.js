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
        var DialogUIStruct = /** @class */ (function (_super) {
            __extends(DialogUIStruct, _super);
            function DialogUIStruct() {
                return _super.call(this) || this;
            }
            DialogUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "DialogUI"));
            };
            DialogUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_close = (this.getChild("close"));
                this.m_dialog = (this.getChild("dialog"));
                this.m_t2 = this.getTransition("t2");
            };
            DialogUIStruct.URL = "ui://s33x8418js171nv";
            DialogUIStruct.DependPackages = ["PfSkin", "Common"];
            return DialogUIStruct;
        }(fairygui.GComponent));
        PfSkin.DialogUIStruct = DialogUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=DialogUIStruct.js.map