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
    var Common;
    (function (Common) {
        var PactIcon_44 = /** @class */ (function (_super) {
            __extends(PactIcon_44, _super);
            function PactIcon_44() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PactIcon_44.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.OnClick);
            };
            PactIcon_44.prototype.OnClick = function () {
                if (this.itemData != null) {
                    Game.system.showItemInfo(this, this.itemData.itemId);
                }
            };
            PactIcon_44.prototype.Render = function (itemData) {
                this.itemData = itemData;
                if (itemData) {
                    this.title = itemData.itemNumTxt;
                    this.m_star.starNum = itemData.itemStar;
                    this.m_icon.AvatarId = itemData.itemConfig.icon;
                }
            };
            return PactIcon_44;
        }(Common.PactIcon_44Struct));
        Common.PactIcon_44 = PactIcon_44;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PactIcon_44.js.map