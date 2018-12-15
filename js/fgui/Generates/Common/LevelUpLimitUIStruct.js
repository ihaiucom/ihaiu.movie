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
        var LevelUpLimitUIStruct = /** @class */ (function (_super) {
            __extends(LevelUpLimitUIStruct, _super);
            function LevelUpLimitUIStruct() {
                return _super.call(this) || this;
            }
            LevelUpLimitUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "LevelUpLimitUI"));
            };
            LevelUpLimitUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_content = (this.getChild("content"));
                this.m_need = (this.getChild("need"));
                this.m_level = (this.getChild("level"));
                this.m_bgCom = (this.getChild("bgCom"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            LevelUpLimitUIStruct.URL = "ui://txcuvopdjs171nt";
            LevelUpLimitUIStruct.DependPackages = ["Common"];
            return LevelUpLimitUIStruct;
        }(fairygui.GComponent));
        Common.LevelUpLimitUIStruct = LevelUpLimitUIStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LevelUpLimitUIStruct.js.map