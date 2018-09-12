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
        var ActorItemStruct = /** @class */ (function (_super) {
            __extends(ActorItemStruct, _super);
            function ActorItemStruct() {
                return _super.call(this) || this;
            }
            ActorItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ActorItem"));
            };
            ActorItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_button = this.getController("button");
                this.m_selectType = this.getController("selectType");
                this.m_icon = (this.getChild("icon"));
                this.m_txtLv = (this.getChild("txtLv"));
                this.m_title = (this.getChild("title"));
                this.m_labDemand1 = (this.getChild("labDemand1"));
                this.m_labDemand2 = (this.getChild("labDemand2"));
                this.m_star = (this.getChild("star"));
                this.m_btnSelect = (this.getChild("btnSelect"));
                this.m_btnPromotion = (this.getChild("btnPromotion"));
            };
            ActorItemStruct.URL = "ui://s33x8418mywn1kl";
            ActorItemStruct.DependPackages = ["PfSkin", "PlayerInfo", "Common"];
            return ActorItemStruct;
        }(fairygui.GButton));
        PfSkin.ActorItemStruct = ActorItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorItemStruct.js.map