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
        var StreetItemStruct = /** @class */ (function (_super) {
            __extends(StreetItemStruct, _super);
            function StreetItemStruct() {
                return _super.call(this) || this;
            }
            StreetItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StreetItem"));
            };
            StreetItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_canReward = this.getController("canReward");
                this.m_canSign = this.getController("canSign");
                this.m_showCinema = this.getController("showCinema");
                this.m_txtCinemaNumb = (this.getChild("txtCinemaNumb"));
                this.m_txtTip = (this.getChild("txtTip"));
                this.m_listCinema = (this.getChild("listCinema"));
                this.m_listReward = (this.getChild("listReward"));
                this.m_streetIcon = (this.getChild("streetIcon"));
                this.m_progress = (this.getChild("progress"));
                this.m_btnLvUp = (this.getChild("btnLvUp"));
                this.m_labReward = (this.getChild("labReward"));
                this.m_btnSelect = (this.getChild("btnSelect"));
                this.m_btnSign = (this.getChild("btnSign"));
            };
            StreetItemStruct.URL = "ui://s33x8418oebq1w1";
            StreetItemStruct.DependPackages = ["PfSkin", "Common"];
            return StreetItemStruct;
        }(fairygui.GLabel));
        PfSkin.StreetItemStruct = StreetItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetItemStruct.js.map