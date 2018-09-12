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
        var Button_CommonStruct = /** @class */ (function (_super) {
            __extends(Button_CommonStruct, _super);
            function Button_CommonStruct() {
                return _super.call(this) || this;
            }
            Button_CommonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "Button_Common"));
            };
            Button_CommonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            Button_CommonStruct.URL = "ui://s33x8418mywn1k6";
            Button_CommonStruct.DependPackages = ["PfSkin"];
            return Button_CommonStruct;
        }(fairygui.GButton));
        PfSkin.Button_CommonStruct = Button_CommonStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Button_CommonStruct.js.map