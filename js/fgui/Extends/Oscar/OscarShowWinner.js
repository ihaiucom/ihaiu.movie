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
    var Oscar;
    (function (Oscar) {
        var OscarShowWinner = /** @class */ (function (_super) {
            __extends(OscarShowWinner, _super);
            function OscarShowWinner() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OscarShowWinner.prototype.Open = function (data) {
                Game.sound.playSound(SoundKey.MM05_Upgrade);
                this.visible = true;
                this.m_awardsTitle.Title = data.type;
                this.m_candidate.Render(data.winner, data.type);
            };
            OscarShowWinner.prototype.Hide = function () {
                this.visible = false;
            };
            return OscarShowWinner;
        }(Oscar.OscarShowWinnerStruct));
        Oscar.OscarShowWinner = OscarShowWinner;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarShowWinner.js.map