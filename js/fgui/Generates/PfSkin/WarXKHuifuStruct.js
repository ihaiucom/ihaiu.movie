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
        var WarXKHuifuStruct = /** @class */ (function (_super) {
            __extends(WarXKHuifuStruct, _super);
            function WarXKHuifuStruct() {
                return _super.call(this) || this;
            }
            WarXKHuifuStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarXKHuifu"));
            };
            WarXKHuifuStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bg2 = (this.getChild("bg2"));
                this.m_bg4 = (this.getChild("bg4"));
                this.m_bg3 = (this.getChild("bg3"));
                this.m_title = (this.getChild("title"));
                this.m_Icon = (this.getChild("Icon"));
                this.m_getTip = (this.getChild("getTip"));
                this.m_time = (this.getChild("time"));
                this.m_line = (this.getChild("line"));
                this.m_number = (this.getChild("number"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            WarXKHuifuStruct.URL = "ui://s33x8418t6ra1ud";
            WarXKHuifuStruct.DependPackages = ["PfSkin", "Common"];
            return WarXKHuifuStruct;
        }(fairygui.GComponent));
        PfSkin.WarXKHuifuStruct = WarXKHuifuStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarXKHuifuStruct.js.map