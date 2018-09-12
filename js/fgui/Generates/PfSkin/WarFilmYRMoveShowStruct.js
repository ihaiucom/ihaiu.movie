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
        var WarFilmYRMoveShowStruct = /** @class */ (function (_super) {
            __extends(WarFilmYRMoveShowStruct, _super);
            function WarFilmYRMoveShowStruct() {
                return _super.call(this) || this;
            }
            WarFilmYRMoveShowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmYRMoveShow"));
            };
            WarFilmYRMoveShowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_1 = (this.getChild("1"));
                this.m_2 = (this.getChild("2"));
                this.m_3 = (this.getChild("3"));
                this.m_4 = (this.getChild("4"));
                this.m_5 = (this.getChild("5"));
                this.m_mask = (this.getChild("mask"));
                this.m_title = (this.getChild("title"));
                this.m_moveShow = this.getTransition("moveShow");
            };
            WarFilmYRMoveShowStruct.URL = "ui://s33x84186ve81gg";
            WarFilmYRMoveShowStruct.DependPackages = ["PfSkin"];
            return WarFilmYRMoveShowStruct;
        }(fairygui.GLabel));
        PfSkin.WarFilmYRMoveShowStruct = WarFilmYRMoveShowStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmYRMoveShowStruct.js.map