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
        var AwardsTitle = /** @class */ (function (_super) {
            __extends(AwardsTitle, _super);
            function AwardsTitle() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(AwardsTitle.prototype, "Title", {
                set: function (type) {
                    switch (type) {
                        case Games.OscarAwardsType.Man:
                            this.m_seletCup.setSelectedIndex(0);
                            break;
                        case Games.OscarAwardsType.Woman:
                            this.m_seletCup.setSelectedIndex(1);
                            break;
                        case Games.OscarAwardsType.Art:
                            this.m_seletCup.setSelectedIndex(2);
                            break;
                        case Games.OscarAwardsType.Perform:
                            this.m_seletCup.setSelectedIndex(3);
                            break;
                        case Games.OscarAwardsType.PublicPraise:
                            this.m_seletCup.setSelectedIndex(4);
                            break;
                        default:
                            this.m_seletCup.setSelectedIndex(5);
                            break;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return AwardsTitle;
        }(Oscar.AwardsTitleStruct));
        Oscar.AwardsTitle = AwardsTitle;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AwardsTitle.js.map