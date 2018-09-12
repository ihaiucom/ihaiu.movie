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
    var PfSkin;
    (function (PfSkin) {
        var RenameUI = /** @class */ (function (_super) {
            __extends(RenameUI, _super);
            function RenameUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // public showMessage(data: Games.ActorData): void
            // {
            // 	this.visible = true;
            // 	this.actorData = data;
            // 	this.m_okBtn.text = Games.TEXT.Rename;
            // 	this.m_content.text = "";
            // 	this.m_okBtn.m_number.text = GlobalConfig.getValue1(GlobalKey.KEY_1010_ZiDingYiYi__MingChenXiaoHao)[1] + "";
            // 	this.getRandomNames();
            // 	this.m_tip.text = format(Games.TEXT.RenameAnGoodName, data.name);
            // }
            RenameUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                this.m_noCostBtn.onClick(this, this.onClickNoCostBtn);
                this.m_randomBtn.onClick(this, this.onClickRandomBtn);
                this.m_close.onClick(this, this.onClickCloseBtn);
                this.m_okBtn.visible = false;
                this.m_noCostBtn.visible = false;
            };
            /**
             *
             * @param dialogMsg
             * @param caller
             * @param okFunc
             * @param closeFunc
             * @param okBtnTxt
             * @param defaultTxt
             * @param promptText
             * @param maxLen
             * @param url
             * @param cost
             * @param isClickButtonAutoClose
             * @param randomNames
             */
            RenameUI.prototype.open = function (dialogMsg, caller, okFunc, closeFunc, okBtnTxt, defaultTxt, promptText, maxLen, url, cost, isClickButtonAutoClose, randomNames) {
                if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
                if (isNullOrEmpty(okBtnTxt)) {
                    okBtnTxt = Games.TEXT.Rename;
                }
                //tip文本
                this.m_tip.text = dialogMsg;
                //按钮文本
                this.m_okBtn.text = okBtnTxt;
                //最大字符数量
                this.m_content.input.maxChars = maxLen;
                this.charMaxLength = maxLen;
                //输入限制
                this.m_content.input.restrict = "a-zA-Z0-9\u4e00-\u9fa5\ ";
                //默认输入文本
                this.m_content.text = defaultTxt;
                //
                if (maxLen > 0) {
                    promptText = format(promptText, maxLen);
                }
                //提示信息
                this.m_content.promptText = promptText;
                //设置焦点
                this.m_content.input.focus = true;
                //回调函数
                this.okFunc = okFunc;
                //关闭函数
                this.closeFunc = closeFunc;
                //关闭
                this.isClickButtonAutoClose = isClickButtonAutoClose;
                //花费
                this.cost = cost;
                //函数所有者
                this.caller = caller;
                //随机名字
                this.randomNames = randomNames;
                if (isNullOrEmpty(url)) {
                    url = Game.config.avatar.GetBodyIconUrl(9999);
                }
                //图片
                this.m_icon.icon = url;
                //随机名字
                if (randomNames && randomNames.length > 0) {
                    this.getRandomNames();
                }
                //花费
                if (cost && cost.length > 0) {
                    //消耗的道具
                    this.m_okBtn.icon = Game.config.avatar.getConfig(Game.config.item.getConfig(cost[0]).icon).iconUrl;
                    //
                    this.m_okBtn.m_number.text = formatNumberUnit(cost[1]);
                    this.m_okBtn.visible = true;
                    this.m_noCostBtn.visible = false;
                }
                else {
                    this.m_okBtn.visible = false;
                    this.m_noCostBtn.visible = true;
                }
                Games.MenuLayer.module.addChild(this);
                setScreenSize(this);
                centerScreen(this);
            };
            /**
             * 点击关闭按钮
             */
            RenameUI.prototype.onClickCloseBtn = function () {
                if (this.closeFunc) {
                    this.closeFunc();
                }
                this.close();
            };
            /**
             * 点击确定按钮
             */
            RenameUI.prototype.onClickOkBtn = function () {
                if (validateOtherName(this.m_content.text, this.charMaxLength)) {
                    var enough = Games.ItemHelper.checkItemEnough3(this.cost);
                    if (enough) {
                        this.onClickNoCostBtn();
                    }
                    else {
                        Game.system.toastItemNotEnough(this.cost[0]);
                    }
                }
            };
            /**
             * 点击不消耗按钮
             */
            RenameUI.prototype.onClickNoCostBtn = function () {
                if (this.isClickButtonAutoClose) {
                    this.close();
                }
                if (this.okFunc) {
                    if (this.caller) {
                        this.okFunc.apply(this.caller, this.m_content.text);
                    }
                    else {
                        this.okFunc(this.m_content.text);
                    }
                }
            };
            /**
             * 关闭界面
             */
            RenameUI.prototype.close = function () {
                this.removeFromParent();
            };
            /**
             * 点击随机改名字
             */
            RenameUI.prototype.onClickRandomBtn = function () {
                this.m_content.text = this.randomNames[this.randomIndex];
                this.randomIndex++;
                if (this.randomIndex >= this.randomNames.length) {
                    this.randomIndex = 0;
                }
            };
            /**
             *初始化名字
             */
            RenameUI.prototype.getRandomNames = function () {
                this.randomIndex = Math.floor(this.randomNames.length * Math.random());
            };
            return RenameUI;
        }(PfSkin.RenameUIStruct));
        PfSkin.RenameUI = RenameUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RenameUI.js.map