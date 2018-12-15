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
    var GM;
    (function (GM) {
        var GMCmdItem = /** @class */ (function (_super) {
            __extends(GMCmdItem, _super);
            function GMCmdItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GMCmdItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button.onClick(this, this.onClickButton);
            };
            GMCmdItem.prototype.setItemData = function (itemData) {
                this.itemData = itemData;
                this.m_title.text = itemData.datatxt;
                this.m_name.text = itemData.title;
            };
            GMCmdItem.prototype.onClickButton = function () {
                try {
                    var json = JSON.parse(this.m_title.text);
                    this.itemData.data = json;
                    this.itemData.datatxt = this.m_title.text;
                }
                catch (error) {
                    console.error(error);
                }
                Games.GM.sendCmd(this.itemData.name, this.itemData, this.cmdPage.selectSubMenu != Games.GMCmdSubMenuType.HISTORY);
            };
            return GMCmdItem;
        }(GM.GMCmdItemStruct));
        GM.GMCmdItem = GMCmdItem;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMCmdItem.js.map