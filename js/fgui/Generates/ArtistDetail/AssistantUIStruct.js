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
    var ArtistDetail;
    (function (ArtistDetail) {
        var AssistantUIStruct = /** @class */ (function (_super) {
            __extends(AssistantUIStruct, _super);
            function AssistantUIStruct() {
                return _super.call(this) || this;
            }
            AssistantUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "AssistantUI"));
            };
            AssistantUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_canup = this.getController("c_canup");
                this.m_c_effect_visible = this.getController("c_effect_visible");
                this.m_des = (this.getChild("des"));
                this.m_costList = (this.getChild("costList"));
                this.m_dialogPanel = (this.getChild("dialogPanel"));
                this.m_topPanel = (this.getChild("topPanel"));
                this.m_centerPanel = (this.getChild("centerPanel"));
                this.m_upgradeBtn = (this.getChild("upgradeBtn"));
                this.m_effect = (this.getChild("effect"));
            };
            AssistantUIStruct.URL = "ui://gif3gjfsmmict27j";
            AssistantUIStruct.DependPackages = ["ArtistDetail", "Common", "Fx"];
            return AssistantUIStruct;
        }(fairygui.GComponent));
        ArtistDetail.AssistantUIStruct = AssistantUIStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssistantUIStruct.js.map