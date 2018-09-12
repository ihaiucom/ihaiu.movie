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
        var WarFilmSQViewStruct = /** @class */ (function (_super) {
            __extends(WarFilmSQViewStruct, _super);
            function WarFilmSQViewStruct() {
                return _super.call(this) || this;
            }
            WarFilmSQViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmSQView"));
            };
            WarFilmSQViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bg1 = (this.getChild("bg1"));
                this.m_bgTop = (this.getChild("bgTop"));
                this.m_bgBai = (this.getChild("bgBai"));
                this.m_icon = (this.getChild("icon"));
                this.m_kuang = (this.getChild("kuang"));
                this.m_filmIcon = (this.getChild("filmIcon"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_zhuyan = (this.getChild("zhuyan"));
                this.m_type = (this.getChild("type"));
                this.m_time = (this.getChild("time"));
                this.m_zhuyanList = (this.getChild("zhuyanList"));
                this.m_filmAttributeList = (this.getChild("filmAttributeList"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_filmStar = (this.getChild("filmStar"));
            };
            WarFilmSQViewStruct.URL = "ui://s33x8418k8js1hj";
            WarFilmSQViewStruct.DependPackages = ["PfSkin"];
            return WarFilmSQViewStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmSQViewStruct = WarFilmSQViewStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSQViewStruct.js.map