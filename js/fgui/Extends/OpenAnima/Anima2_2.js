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
        var Anima2_2 = /** @class */ (function (_super) {
            __extends(Anima2_2, _super);
            function Anima2_2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Anima2_2.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                if (User.info.sex == Proto.SE.EUserSex.boy) {
                    this.m_player.m_hand.m_hand_kaimen.selectedIndex = 1;
                    this.m_hand.m_hand_kaixiang.selectedIndex = 1;
                }
                else {
                    this.m_player.m_hand.m_hand_kaimen.selectedIndex = 0;
                    this.m_hand.m_hand_kaixiang.selectedIndex = 0;
                }
            };
            return Anima2_2;
        }(OpenAnima.Anima2_2Struct));
        OpenAnima.Anima2_2 = Anima2_2;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Anima2_2.js.map