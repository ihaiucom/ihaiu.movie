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
        var Anima4_1 = /** @class */ (function (_super) {
            __extends(Anima4_1, _super);
            function Anima4_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Anima4_1.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                if (User.info.sex == Proto.SE.EUserSex.boy) {
                    this.m_player.m_sex.selectedIndex = 1;
                }
                else {
                    this.m_player.m_sex.selectedIndex = 0;
                }
                this.m_dialog1.text = Game.config.speak.getConfig(10016).speak;
                this.m_dialog2.text = Game.config.speak.getConfig(10017).speak;
                this.m_dialog3.text = Game.config.speak.getConfig(10018).speak;
                this.m_dialog4.text = Game.config.speak.getConfig(10019).speak;
            };
            return Anima4_1;
        }(OpenAnima.Anima4_1Struct));
        OpenAnima.Anima4_1 = Anima4_1;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Anima4_1.js.map