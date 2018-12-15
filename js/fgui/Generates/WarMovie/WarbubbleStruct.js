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
    var WarMovie;
    (function (WarMovie) {
        var WarbubbleStruct = /** @class */ (function (_super) {
            __extends(WarbubbleStruct, _super);
            function WarbubbleStruct() {
                return _super.call(this) || this;
            }
            WarbubbleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "Warbubble"));
            };
            WarbubbleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_lv = this.getController("lv");
                this.m_icon0 = (this.getChild("icon0"));
                this.m_icon1 = (this.getChild("icon1"));
                this.m_icon3 = (this.getChild("icon3"));
                this.m_icon4 = (this.getChild("icon4"));
                this.m_title = (this.getChild("title"));
                this.m_t0 = this.getTransition("t0");
            };
            WarbubbleStruct.URL = "ui://y6ozucp1r0zd3t";
            WarbubbleStruct.DependPackages = ["WarMovie"];
            return WarbubbleStruct;
        }(fairygui.GLabel));
        WarMovie.WarbubbleStruct = WarbubbleStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarbubbleStruct.js.map