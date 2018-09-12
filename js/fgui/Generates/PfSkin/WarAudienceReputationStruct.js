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
        var WarAudienceReputationStruct = /** @class */ (function (_super) {
            __extends(WarAudienceReputationStruct, _super);
            function WarAudienceReputationStruct() {
                return _super.call(this) || this;
            }
            WarAudienceReputationStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarAudienceReputation"));
            };
            WarAudienceReputationStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bg1 = (this.getChild("bg1"));
                this.m_bgBai = (this.getChild("bgBai"));
                this.m_bgTop = (this.getChild("bgTop"));
                this.m_title = (this.getChild("title"));
                this.m_typeList = (this.getChild("typeList"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_tip = (this.getChild("tip"));
                this.m_mask = (this.getChild("mask"));
                this.m_att1Icon = (this.getChild("att1Icon"));
                this.m_att1Name = (this.getChild("att1Name"));
                this.m_att2Icon = (this.getChild("att2Icon"));
                this.m_att2Name = (this.getChild("att2Name"));
                this.m_att3Icon = (this.getChild("att3Icon"));
                this.m_att3Name = (this.getChild("att3Name"));
                this.m_tip3 = (this.getChild("tip3"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_filmIcon = (this.getChild("filmIcon"));
                this.m_audienceProgress = (this.getChild("audienceProgress"));
            };
            WarAudienceReputationStruct.URL = "ui://s33x8418k8js1hu";
            WarAudienceReputationStruct.DependPackages = ["PfSkin"];
            return WarAudienceReputationStruct;
        }(fairygui.GComponent));
        PfSkin.WarAudienceReputationStruct = WarAudienceReputationStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarAudienceReputationStruct.js.map