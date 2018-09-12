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
        var WarFilmSQViewItemStruct = /** @class */ (function (_super) {
            __extends(WarFilmSQViewItemStruct, _super);
            function WarFilmSQViewItemStruct() {
                return _super.call(this) || this;
            }
            WarFilmSQViewItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmSQViewItem"));
            };
            WarFilmSQViewItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_loading = (this.getChild("loading"));
                this.m_arrow = (this.getChild("arrow"));
                this.m_tip = (this.getChild("tip"));
                this.m_otherCom = (this.getChild("otherCom"));
                this.m_progress = (this.getChild("progress"));
            };
            WarFilmSQViewItemStruct.URL = "ui://s33x8418k8js1hm";
            WarFilmSQViewItemStruct.DependPackages = ["PfSkin"];
            return WarFilmSQViewItemStruct;
        }(fairygui.GLabel));
        PfSkin.WarFilmSQViewItemStruct = WarFilmSQViewItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSQViewItemStruct.js.map