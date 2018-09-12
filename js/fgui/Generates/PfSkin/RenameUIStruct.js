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
        var RenameUIStruct = /** @class */ (function (_super) {
            __extends(RenameUIStruct, _super);
            function RenameUIStruct() {
                return _super.call(this) || this;
            }
            RenameUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "RenameUI"));
            };
            RenameUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_tip = (this.getChild("tip"));
                this.m_content = (this.getChild("content"));
                this.m_close = (this.getChild("close"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_noCostBtn = (this.getChild("noCostBtn"));
                this.m_randomBtn = (this.getChild("randomBtn"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            RenameUIStruct.URL = "ui://s33x8418jazc1lj";
            RenameUIStruct.DependPackages = ["PfSkin", "Common"];
            return RenameUIStruct;
        }(fairygui.GComponent));
        PfSkin.RenameUIStruct = RenameUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RenameUIStruct.js.map