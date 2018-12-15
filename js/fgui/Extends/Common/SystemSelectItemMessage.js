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
        var SystemSelectItemMessage = /** @class */ (function (_super) {
            __extends(SystemSelectItemMessage, _super);
            function SystemSelectItemMessage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SystemSelectItemMessage.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_commonPanel.m_closeBtn.onClick(this, this.OnCloseClick);
                this.m_confirmBtn.onClick(this, this.OnBtnConfirmClick);
                this.m_assetList.itemRenderer = Handler.create(this, this.RenderItem, null, false);
            };
            SystemSelectItemMessage.prototype.open = function (itemList, caller, fun) {
                this.m_assetList.selectNone();
                this.itemList = itemList;
                if (this.itemList) {
                    this.m_assetList.numItems = this.itemList.length;
                    if (this.itemList.length == 1) {
                        this.m_assetList.selectedIndex = 0;
                    }
                    else {
                        this.m_assetList.selectNone();
                    }
                }
                this.caller = caller;
                this.fun = fun;
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
            };
            SystemSelectItemMessage.prototype.RenderItem = function (index, obj) {
                var data = this.itemList[index];
                obj.Render(data);
            };
            SystemSelectItemMessage.prototype.OnBtnConfirmClick = function () {
                if (this.m_assetList.selectedIndex < 0) {
                    Game.system.toastText(Games.TEXT.BagSelectItem);
                    return;
                }
                var item = this.itemList[this.m_assetList.selectedIndex];
                if (item == null) {
                    Game.system.toastText(Games.TEXT.BagSelectItem);
                    return;
                }
                if (this.fun) {
                    if (this.caller) {
                        this.fun.apply(this.caller, [this.m_assetList.selectedIndex]);
                    }
                    else {
                        this.fun(this.m_assetList.selectedIndex);
                    }
                }
                this.close();
            };
            SystemSelectItemMessage.prototype.OnCloseClick = function () {
                this.close();
            };
            SystemSelectItemMessage.prototype.close = function () {
                Games.MenuLayer.hideDialogModel();
                // this.m_t1.play(Handler.create(this, this.onHide));
                this.onHide();
            };
            SystemSelectItemMessage.prototype.onHide = function () {
                this.removeFromParent();
            };
            return SystemSelectItemMessage;
        }(Common.SystemSelectItemMessageStruct));
        Common.SystemSelectItemMessage = SystemSelectItemMessage;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemSelectItemMessage.js.map