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
        var ComfirmUIStruct = /** @class */ (function (_super) {
            __extends(ComfirmUIStruct, _super);
            function ComfirmUIStruct() {
                return _super.call(this) || this;
            }
            ComfirmUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ComfirmUI"));
            };
            ComfirmUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_content = (this.getChild("content"));
                this.m_title = (this.getChild("title"));
                this.m_bgCom = (this.getChild("bgCom"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_cancleBtn = (this.getChild("cancleBtn"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            ComfirmUIStruct.URL = "ui://s33x8418jazc1lg";
            ComfirmUIStruct.DependPackages = ["PfSkin", "Common"];
            return ComfirmUIStruct;
        }(fairygui.GComponent));
        PfSkin.ComfirmUIStruct = ComfirmUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ComfirmUIStruct.js.map