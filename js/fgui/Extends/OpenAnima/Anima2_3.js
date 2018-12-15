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
        var Anima2_3 = /** @class */ (function (_super) {
            __extends(Anima2_3, _super);
            function Anima2_3() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Anima2_3.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                if (User.info.sex == Proto.SE.EUserSex.boy) {
                    this.m_player.m_hand.m_hand_kanxin.selectedIndex = 1;
                }
                else {
                    this.m_player.m_hand.m_hand_kanxin.selectedIndex = 0;
                }
                this.m_label1.text = Game.config.speak.getConfig(10005).speak;
                this.m_label2.text = Game.config.speak.getConfig(10006).speak;
                this.m_label3.text = Game.config.speak.getConfig(10007).speak;
            };
            return Anima2_3;
        }(OpenAnima.Anima2_3Struct));
        OpenAnima.Anima2_3 = Anima2_3;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Anima2_3.js.map