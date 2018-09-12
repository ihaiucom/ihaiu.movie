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
        var WarFilmStartBtnStruct = /** @class */ (function (_super) {
            __extends(WarFilmStartBtnStruct, _super);
            function WarFilmStartBtnStruct() {
                return _super.call(this) || this;
            }
            WarFilmStartBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmStartBtn"));
            };
            WarFilmStartBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_bg = (this.getChild("bg"));
                this.m_tip = (this.getChild("tip"));
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            WarFilmStartBtnStruct.URL = "ui://s33x8418r8ay1fr";
            WarFilmStartBtnStruct.DependPackages = ["PfSkin"];
            return WarFilmStartBtnStruct;
        }(fairygui.GButton));
        PfSkin.WarFilmStartBtnStruct = WarFilmStartBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmStartBtnStruct.js.map