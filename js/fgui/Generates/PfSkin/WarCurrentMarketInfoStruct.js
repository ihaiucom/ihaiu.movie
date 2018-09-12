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
        var WarCurrentMarketInfoStruct = /** @class */ (function (_super) {
            __extends(WarCurrentMarketInfoStruct, _super);
            function WarCurrentMarketInfoStruct() {
                return _super.call(this) || this;
            }
            WarCurrentMarketInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarCurrentMarketInfo"));
            };
            WarCurrentMarketInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_closeTip = (this.getChild("closeTip"));
                this.m_bg2 = (this.getChild("bg2"));
                this.m_bg3 = (this.getChild("bg3"));
                this.m_bg4 = (this.getChild("bg4"));
                this.m_tipIcon = (this.getChild("tipIcon"));
                this.m_title = (this.getChild("title"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_reqTip = (this.getChild("reqTip"));
                this.m_curTip = (this.getChild("curTip"));
                this.m_curManReq = (this.getChild("curManReq"));
                this.m_curWomanReq = (this.getChild("curWomanReq"));
                this.m_curChildReq = (this.getChild("curChildReq"));
                this.m_manTip = (this.getChild("manTip"));
                this.m_womenTip = (this.getChild("womenTip"));
                this.m_childTip = (this.getChild("childTip"));
                this.m_manIcon = (this.getChild("manIcon"));
                this.m_manOk = (this.getChild("manOk"));
                this.m_manReq = (this.getChild("manReq"));
                this.m_manReqCom = (this.getChild("manReqCom"));
                this.m_womanIcon = (this.getChild("womanIcon"));
                this.m_womanOk = (this.getChild("womanOk"));
                this.m_womenReq = (this.getChild("womenReq"));
                this.m_womanReqCom = (this.getChild("womanReqCom"));
                this.m_childIcon = (this.getChild("childIcon"));
                this.m_childOk = (this.getChild("childOk"));
                this.m_childReq = (this.getChild("childReq"));
                this.m_childReqCom = (this.getChild("childReqCom"));
                this.m_bottomCom = (this.getChild("bottomCom"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            WarCurrentMarketInfoStruct.URL = "ui://s33x8418r8ay1fs";
            WarCurrentMarketInfoStruct.DependPackages = ["PfSkin"];
            return WarCurrentMarketInfoStruct;
        }(fairygui.GComponent));
        PfSkin.WarCurrentMarketInfoStruct = WarCurrentMarketInfoStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCurrentMarketInfoStruct.js.map