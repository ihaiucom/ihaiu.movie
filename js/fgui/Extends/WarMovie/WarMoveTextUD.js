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
        var WarMoveTextUD = /** @class */ (function (_super) {
            __extends(WarMoveTextUD, _super);
            function WarMoveTextUD() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarMoveTextUD.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 显示合作界面
                this.m_title.y = 2;
            };
            WarMoveTextUD.prototype.setData = function (str) {
                this.m_title.text = str;
                this.scrollPane.posY = -5;
            };
            return WarMoveTextUD;
        }(WarMovie.WarMoveTextUDStruct));
        WarMovie.WarMoveTextUD = WarMoveTextUD;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarMoveTextUD.js.map