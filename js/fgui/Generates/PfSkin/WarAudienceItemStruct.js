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
        var WarAudienceItemStruct = /** @class */ (function (_super) {
            __extends(WarAudienceItemStruct, _super);
            function WarAudienceItemStruct() {
                return _super.call(this) || this;
            }
            WarAudienceItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarAudienceItem"));
            };
            WarAudienceItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bg2 = (this.getChild("bg2"));
                this.m_icon = (this.getChild("icon"));
                this.m_noticeName = (this.getChild("noticeName"));
                this.m_pinglun1 = (this.getChild("pinglun1"));
                this.m_fen = (this.getChild("fen"));
                this.m_des = (this.getChild("des"));
            };
            WarAudienceItemStruct.URL = "ui://s33x8418k8js1hw";
            WarAudienceItemStruct.DependPackages = ["PfSkin"];
            return WarAudienceItemStruct;
        }(fairygui.GLabel));
        PfSkin.WarAudienceItemStruct = WarAudienceItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarAudienceItemStruct.js.map