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
        var WarActorShowItem1Struct = /** @class */ (function (_super) {
            __extends(WarActorShowItem1Struct, _super);
            function WarActorShowItem1Struct() {
                return _super.call(this) || this;
            }
            WarActorShowItem1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarActorShowItem(1)"));
            };
            WarActorShowItem1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_1 = (this.getChild("1"));
                this.m_2 = (this.getChild("2"));
                this.m_3 = (this.getChild("3"));
                this.m_4 = (this.getChild("4"));
                this.m_5 = (this.getChild("5"));
                this.m_t0 = this.getTransition("t0");
            };
            WarActorShowItem1Struct.URL = "ui://y6ozucp1kh7oa5";
            WarActorShowItem1Struct.DependPackages = ["WarMovie"];
            return WarActorShowItem1Struct;
        }(fairygui.GComponent));
        WarMovie.WarActorShowItem1Struct = WarActorShowItem1Struct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActorShowItem1Struct.js.map