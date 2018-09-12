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
        var WarReceiveBtnStruct = /** @class */ (function (_super) {
            __extends(WarReceiveBtnStruct, _super);
            function WarReceiveBtnStruct() {
                return _super.call(this) || this;
            }
            WarReceiveBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarReceiveBtn"));
            };
            WarReceiveBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_colorChange = this.getController("colorChange");
                this.m_bg = (this.getChild("bg"));
                this.m_selectTip = (this.getChild("selectTip"));
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            WarReceiveBtnStruct.URL = "ui://s33x8418k8js1h8";
            WarReceiveBtnStruct.DependPackages = ["PfSkin"];
            return WarReceiveBtnStruct;
        }(fairygui.GButton));
        PfSkin.WarReceiveBtnStruct = WarReceiveBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarReceiveBtnStruct.js.map