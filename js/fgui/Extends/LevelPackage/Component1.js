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
    var LevelPackage;
    (function (LevelPackage) {
        var Component1 = /** @class */ (function (_super) {
            __extends(Component1, _super);
            function Component1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Component1.prototype.setItemNumDataForData = function (data) {
                this.m_icon.url = data.itemIconUrl;
                this.m_title.text = formatNumberUnit(data.itemNum);
                this.m_starList.numItems = data.itemStar;
            };
            return Component1;
        }(LevelPackage.Component1Struct));
        LevelPackage.Component1 = Component1;
    })(LevelPackage = fgui.LevelPackage || (fgui.LevelPackage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Component1.js.map