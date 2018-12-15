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
        var WarActorShowItemStruct = /** @class */ (function (_super) {
            __extends(WarActorShowItemStruct, _super);
            function WarActorShowItemStruct() {
                return _super.call(this) || this;
            }
            WarActorShowItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarActorShowItem"));
            };
            WarActorShowItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_icon = (this.getChild("icon"));
                this.m_1 = (this.getChild("1"));
                this.m_2 = (this.getChild("2"));
                this.m_3 = (this.getChild("3"));
                this.m_4 = (this.getChild("4"));
                this.m_5 = (this.getChild("5"));
                this.m_left = (this.getChild("left"));
                this.m_right = (this.getChild("right"));
                this.m_mask = (this.getChild("mask"));
                this.m_t0 = this.getTransition("t0");
            };
            WarActorShowItemStruct.URL = "ui://y6ozucp1kh7oa5";
            WarActorShowItemStruct.DependPackages = ["WarMovie"];
            return WarActorShowItemStruct;
        }(fairygui.GComponent));
        WarMovie.WarActorShowItemStruct = WarActorShowItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActorShowItemStruct.js.map