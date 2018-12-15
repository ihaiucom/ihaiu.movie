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
        var ActorDetailUIStruct = /** @class */ (function (_super) {
            __extends(ActorDetailUIStruct, _super);
            function ActorDetailUIStruct() {
                return _super.call(this) || this;
            }
            ActorDetailUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ActorDetailUI"));
            };
            ActorDetailUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_aName = (this.getChild("aName"));
                this.m_starlist = (this.getChild("starlist"));
                this.m_sex = (this.getChild("sex"));
                this.m_contory = (this.getChild("contory"));
                this.m_biaoqian1 = (this.getChild("biaoqian1"));
                this.m_biaoqian2 = (this.getChild("biaoqian2"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_content = (this.getChild("content"));
            };
            ActorDetailUIStruct.URL = "ui://s33x8418jazc1kz";
            ActorDetailUIStruct.DependPackages = ["PfSkin", "Common"];
            return ActorDetailUIStruct;
        }(fairygui.GComponent));
        PfSkin.ActorDetailUIStruct = ActorDetailUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorDetailUIStruct.js.map