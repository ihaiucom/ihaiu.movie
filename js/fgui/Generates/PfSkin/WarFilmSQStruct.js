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
        var WarFilmSQStruct = /** @class */ (function (_super) {
            __extends(WarFilmSQStruct, _super);
            function WarFilmSQStruct() {
                return _super.call(this) || this;
            }
            WarFilmSQStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmSQ"));
            };
            WarFilmSQStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_topbg = (this.getChild("topbg"));
                this.m_handUp = (this.getChild("handUp"));
                this.m_bg1 = (this.getChild("bg1"));
                this.m_bgBai = (this.getChild("bgBai"));
                this.m_line = (this.getChild("line"));
                this.m_bg2 = (this.getChild("bg2"));
                this.m_bg3 = (this.getChild("bg3"));
                this.m_bg4 = (this.getChild("bg4"));
                this.m_handDown = (this.getChild("handDown"));
                this.m_title = (this.getChild("title"));
                this.m_tip = (this.getChild("tip"));
                this.m_hand = this.getTransition("hand");
            };
            WarFilmSQStruct.URL = "ui://s33x8418k8js1he";
            WarFilmSQStruct.DependPackages = ["PfSkin"];
            return WarFilmSQStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmSQStruct = WarFilmSQStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSQStruct.js.map