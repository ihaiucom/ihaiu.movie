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
    var OpenAnima;
    (function (OpenAnima) {
        var Anima3_2 = /** @class */ (function (_super) {
            __extends(Anima3_2, _super);
            function Anima3_2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Anima3_2.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                if (User.info.sex == Proto.SE.EUserSex.boy) {
                    this.m_player.m_player.m_sex.selectedIndex = 1;
                }
                else {
                    this.m_player.m_player.m_sex.selectedIndex = 0;
                }
                this.m_dialog1.text = Game.config.speak.getConfig(10011).speak;
                this.m_dialog2.text = Game.config.speak.getConfig(10012).speak;
                this.m_dialog3.text = Game.config.speak.getConfig(10013).speak;
                this.m_dialog4.text = Game.config.speak.getConfig(10014).speak;
            };
            return Anima3_2;
        }(OpenAnima.Anima3_2Struct));
        OpenAnima.Anima3_2 = Anima3_2;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Anima3_2.js.map