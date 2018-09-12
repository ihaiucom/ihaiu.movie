var Games;
(function (Games) {
    //======================
    // 转圈
    //----------------------
    var SystemMessag = /** @class */ (function () {
        function SystemMessag() {
            // 浮动消息
            this.toastMessage = new Games.SystemToastMessag();
            //
            this._effectMsg = new Games.SystemEffect();
        }
        // 播放打开声音		
        SystemMessag.prototype.playOpenSound = function () {
            // 播放弹出声音
            Game.sound.playSound(SoundKey.MM02_Popup);
        };
        Object.defineProperty(SystemMessag.prototype, "alertMessage", {
            get: function () {
                if (!this._alertMessage) {
                    this._alertMessage = fgui.System.SystemAlertMessage.createInstance();
                }
                return this._alertMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "confirmMessage", {
            get: function () {
                if (!this._confirmMessage) {
                    this._confirmMessage = fgui.System.SystemConfirmMessage.createInstance();
                }
                return this._confirmMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "renameComfirm", {
            get: function () {
                if (!this._renameComfirm) {
                    this._renameComfirm = fgui.PfSkin.RenameUI.createInstance();
                }
                return this._renameComfirm;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "setNumMessage", {
            get: function () {
                if (!this._setNumMessage) {
                    this._setNumMessage = fgui.Common.SystemSetNumMessage.createInstance();
                }
                return this._setNumMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "getRewardMessage", {
            get: function () {
                if (!this._getRewardMessage) {
                    this._getRewardMessage = fgui.System.SystemAddItemMessage.createInstance();
                }
                return this._getRewardMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "selectActorPanel", {
            get: function () {
                if (!this._selectActorPanel) {
                    this._selectActorPanel = fgui.Bag.SystemSelectActorPanel.createInstance();
                }
                return this._selectActorPanel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "getItemMessage", {
            get: function () {
                if (!this._getItemMessage) {
                    this._getItemMessage = fgui.Common.SystemGetItemMessage.createInstance();
                }
                return this._getItemMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "skillEffectUI", {
            get: function () {
                if (!this._actorSkillEffect) {
                    this._actorSkillEffect = fgui.Common.SkillEffectUI.createInstance();
                }
                return this._actorSkillEffect;
            },
            enumerable: true,
            configurable: true
        });
        /**
         *
         * @param acotrId 艺人id
         * @param type 类型
         */
        SystemMessag.prototype.playSkillEffect = function (acotrId, type) {
            this.skillEffectUI.playSkillEffect(acotrId, type);
        };
        Object.defineProperty(SystemMessag.prototype, "addFansMessage", {
            get: function () {
                if (!this._addFansMessage) {
                    this._addFansMessage = fgui.Common.SystemAddFansMessage.createInstance();
                }
                return this._addFansMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "dialog", {
            get: function () {
                if (!this._dialog) {
                    this._dialog = fgui.PfSkin.DialogUI.createInstance();
                }
                return this._dialog;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "alertAwardsDialog", {
            get: function () {
                if (!this._alertAwardsDialog) {
                    this._alertAwardsDialog = fgui.Common.SystemAlertAwards.createInstance();
                }
                return this._alertAwardsDialog;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "rankMovieInfo", {
            get: function () {
                if (!this._rankMovieInfo) {
                    this._rankMovieInfo = fgui.Common.RankMovieInfoPanel.createInstance();
                }
                return this._rankMovieInfo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "rankPlayerInfo", {
            get: function () {
                if (!this._rankPlayerInfo) {
                    this._rankPlayerInfo = fgui.Common.RankPlayerInfoPanel.createInstance();
                }
                return this._rankPlayerInfo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "rankRenamePanel", {
            get: function () {
                if (!this._rankRenamePanel) {
                    this._rankRenamePanel = fgui.Common.RankRenamePanel.createInstance();
                }
                return this._rankRenamePanel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "streetLevelUpPanel", {
            get: function () {
                if (!this._streetLevelUpPanel) {
                    this._streetLevelUpPanel = fgui.Common.StreetLevelUp.createInstance();
                }
                return this._streetLevelUpPanel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "playerLevelUpPanel", {
            get: function () {
                if (!this._playerLevelUpPanel) {
                    this._playerLevelUpPanel = fgui.PlayerInfo.PlayerLevelUp.createInstance();
                }
                return this._playerLevelUpPanel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "alertTextIconDialog", {
            get: function () {
                if (!this._alertTextIconDialog) {
                    this._alertTextIconDialog = fgui.Common.SystemAlertTextIconMessage.createInstance();
                }
                return this._alertTextIconDialog;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "wayAlertDialog", {
            get: function () {
                if (!this._wayAlertDialog) {
                    this._wayAlertDialog = fgui.Common.GetWayAlert.createInstance();
                }
                return this._wayAlertDialog;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "itemInfoPanel", {
            get: function () {
                if (!this._itemInfoPanel) {
                    this._itemInfoPanel = fgui.Common.ItemInfo.createInstance();
                }
                return this._itemInfoPanel;
            },
            enumerable: true,
            configurable: true
        });
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        // 浮动消息
        SystemMessag.prototype.toastText = function (txt) {
            this.toastMessage.play(txt);
        };
        SystemMessag.prototype.toastMsg = function (msgKey) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var txt = (_a = Game.config.msg).getTxtFormat.apply(_a, [msgKey].concat(args));
            this.toastMessage.play(txt);
            var _a;
        };
        SystemMessag.prototype.toastFormatText = function (txt) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this.toastText(format(txt, args));
        };
        /**
         * 道具不足提示
         * @param id 道具id
         */
        SystemMessag.prototype.toastItemNotEnough = function (id) {
            var config = Game.config.item.getConfig(id);
            var itemName = "";
            if (config)
                itemName = config.name;
            else
                itemName = id.toString();
            this.toastText(format(Games.TEXT.ToastTextItemNotEnough, itemName));
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        // 对话框消息,一个按钮, 简洁方法
        SystemMessag.prototype.alertText = function (txt, yesObj, yesFun) {
            this.alrtTextFull(txt, "", yesObj, yesFun);
        };
        SystemMessag.prototype.alertMsg = function (msgKey, yesObj, yesFun) {
            var txt = Game.config.msg.getTxt(msgKey);
            this.alrtTextFull(txt, "", yesObj, yesFun);
        };
        SystemMessag.prototype.alertMsgFormat = function (msgKey, msgargs, yesObj, yesFun) {
            var txt = (_a = Game.config.msg).getTxtFormat.apply(_a, [msgKey].concat(msgargs));
            this.alrtTextFull(txt, "", yesObj, yesFun);
            var _a;
        };
        SystemMessag.prototype.alrtTMsgFull = function (msgkey, msgargs, title, yesObj, yesFun, yesTxt, buttonEnable, isClickButtonAutoClose) {
            if (title === void 0) { title = ""; }
            if (yesObj === void 0) { yesObj = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (buttonEnable === void 0) { buttonEnable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            var txt = (_a = Game.config.msg).getTxtFormat.apply(_a, [msgkey].concat(msgargs));
            this.alrtTextFull(txt, "", yesObj, yesFun, yesTxt, buttonEnable, isClickButtonAutoClose);
            var _a;
        };
        /**
         * 对话框消息,一个按钮
         * @param txt 消息内容
         * @param title 标题
         * @param yesObj 点击yes按钮回调对象
         * @param yesFun 点击yes按钮回调函数
         * @param yesTxt yes按钮 文本
         * @param closeButtonVisiable 是否显示关闭按钮
         * @param buttonEnable 按钮是否可以点击
         * @param isClickButtonAutoClose 点击按钮后是否自动关闭
         */
        SystemMessag.prototype.alrtTextFull = function (txt, title, yesObj, yesFun, yesTxt, closeButtonVisiable, buttonEnable, isClickButtonAutoClose) {
            if (title === void 0) { title = ""; }
            if (yesObj === void 0) { yesObj = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
            if (buttonEnable === void 0) { buttonEnable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            if (isNullOrEmpty(yesTxt)) {
                yesTxt = Games.TEXT.ButtonOk;
            }
            this.alertMessage.open(txt, title, yesObj, yesFun, yesTxt, closeButtonVisiable, buttonEnable, isClickButtonAutoClose);
            this.playOpenSound();
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        /**
         * 对话框消息,两个按钮
         * @param msgkey MsgConfig key
         * @param msgargs 消息参数
         * @param title 标题
         * @param caller 点击按钮回调对象
         * @param yesFun 点击yes按钮回调函数
         * @param noFun 点击no按钮回调函数
         * @param yesTxt yes按钮 文本
         * @param noTxt no按钮 文本
         * @param closeButtonVisiable 是否显示关闭按钮
         * @param isClickButtonAutoClose 点击按钮后是否自动关闭
         */
        SystemMessag.prototype.confirmMsg = function (msgkey, msgargs, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose) {
            if (title === void 0) { title = ""; }
            if (caller === void 0) { caller = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (noFun === void 0) { noFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (noTxt === void 0) { noTxt = null; }
            if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            var txt = (_a = Game.config.msg).getTxtFormat.apply(_a, [msgkey].concat(msgargs));
            this.confirmText(txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose);
            var _a;
        };
        /**
         * 对话框消息,两个按钮
         * @param txt 消息内容
         * @param title 标题
         * @param caller 点击按钮回调对象
         * @param yesFun 点击yes按钮回调函数
         * @param noFun 点击no按钮回调函数
         * @param yesTxt yes按钮 文本
         * @param noTxt no按钮 文本
         * @param closeButtonVisiable 是否显示关闭按钮
         * @param isClickButtonAutoClose 点击按钮后是否自动关闭
         */
        SystemMessag.prototype.confirmText = function (txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose) {
            if (title === void 0) { title = ""; }
            if (caller === void 0) { caller = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (noFun === void 0) { noFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (noTxt === void 0) { noTxt = null; }
            if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            if (isNullOrEmpty(yesTxt)) {
                yesTxt = Games.TEXT.ButtonYes;
            }
            if (isNullOrEmpty(noTxt)) {
                noTxt = Games.TEXT.ButtonNo;
            }
            this.confirmMessage.open(txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose);
            this.playOpenSound();
        };
        /**
         * 标题，文本内容，图标列表提示框
         * @param itemList
         * @param title
         * @param content
         * @param confirm
         * @param confirmText
         */
        SystemMessag.prototype.confirmTextIcon = function (itemList, title, content, confirm, caller, confirmText, isShowClose, isShowCurNum) {
            if (isShowCurNum === void 0) { isShowCurNum = true; }
            this.alertTextIconDialog.open(itemList, title, content, confirm, caller, confirmText, isShowClose, isShowCurNum);
            this.playOpenSound();
        };
        SystemMessag.prototype.alertTextIcon = function (itemList, title, confirm, caller) {
            this.alertTextIconDialog.open(itemList, title, "", confirm, null, null, null, false);
            this.playOpenSound();
        };
        /**
         *
         * @param itemList
         * @param title
         * @param confirm
         */
        SystemMessag.prototype.alertTextIconByProtoItems = function (itemList, title, content, confirm, caller, confirmText, isShowClose) {
            this.alertTextIconDialog.open(ItemDescList2DTItemNumList(itemList), title, content, confirm, caller, confirmText, isShowClose, false);
            this.playOpenSound();
        };
        /**
         *花费确定
         * @param txt
         * @param costnum
         * @param costId
         * @param caller
         * @param yesFun
         */
        SystemMessag.prototype.confirmBuyText = function (txt, cost, caller, yesFun) {
            var costId = cost[0];
            var costnum = cost[1];
            var config = Game.config.item.getConfig(costId);
            var costItemName = "";
            if (cost) {
                costItemName = config.name;
            }
            else {
                costItemName = costId + "";
            }
            if (Game.moduleModel.item.getItemNum(costId) >= costnum) {
                this.confirmText(format(txt, costnum, costItemName), Games.TEXT.SureBuy, caller, yesFun);
            }
            else {
                Game.system.openItemWay(costId, costnum);
            }
        };
        /**
         * 选择数量
         * @param limit
         * @param txt
         * @param title
         * @param caller
         * @param yesFun
         * @param noFun
         * @param closeButtonVisiable
         * @param isClickButtonAutoClose
         */
        SystemMessag.prototype.setNumText = function (limit, txt, title, caller, yesFun, noFun, yesTxt, closeButtonVisiable, isClickButtonAutoClose) {
            if (txt === void 0) { txt = ""; }
            if (title === void 0) { title = ""; }
            if (caller === void 0) { caller = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (noFun === void 0) { noFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            if (isNullOrEmpty(yesTxt)) {
                yesTxt = Games.TEXT.ButtonYes;
            }
            this.setNumMessage.open(limit, txt, title, caller, yesFun, noFun, yesTxt, closeButtonVisiable, isClickButtonAutoClose);
            this.playOpenSound();
        };
        /**
         *获得物品
         * @param txt
         * @param items
         */
        SystemMessag.prototype.getRewardText = function (items, title, autoCloseTime) {
            var list = Games.ItemData.BinningItemList(items);
            this.getRewardMessage.open(list, title, autoCloseTime);
            this.playOpenSound();
        };
        /**
         *选择演员
         * @param actorList
         * @param selectFun
         * @param caller
         * @param title
         */
        SystemMessag.prototype.selectActor = function (actorList, selectFun, caller, title) {
            if (caller === void 0) { caller = null; }
            if (title === void 0) { title = ""; }
            this.selectActorPanel.open(actorList, selectFun, caller, title);
            this.playOpenSound();
        };
        /**
                 *获得物品
                 * @param txt
                 * @param items
                 */
        SystemMessag.prototype.getItemText = function (items, closeFun, isAutoClose) {
            var list = Games.ItemData.BinningItemList(items);
            this.getItemMessage.open(list, closeFun, isAutoClose);
        };
        /**
         *增加粉丝
         * @param addFans 增加的粉丝数
         * @param closeHandler 关闭回调
         * @param title 得益于公司的市场推广
         * @param autoCloseTime 自动关闭时间， 为0时不自动关闭
         */
        SystemMessag.prototype.addFansText = function (addFans, closeHandler, title, autoCloseTime) {
            if (autoCloseTime === void 0) { autoCloseTime = 0; }
            this.addFansMessage.open(addFans, closeHandler, title, autoCloseTime);
            this.playOpenSound();
        };
        //弹窗升级界面
        SystemMessag.prototype.tryAlertLevelUp = function () {
            var hasMsg = Game.moduleModel.playerInfo.hasPlayerLevelUpMsg;
            if (hasMsg) {
                var msg = Game.moduleModel.playerInfo.dequeuePlayerLevelUpMsg();
                this.playerLevelUpPanel.show(msg.old_level, msg.now_level, msg.story);
                this.playOpenSound();
            }
        };
        SystemMessag.prototype.playerInfo = function (playerData) {
            this.rankPlayerInfo.open(playerData);
        };
        SystemMessag.prototype.movieInfo = function (movieData) {
            this.rankMovieInfo.open(movieData);
        };
        SystemMessag.prototype.rename = function (title, caller, renameFun, oldName) {
            if (oldName === void 0) { oldName = ""; }
            this.rankRenamePanel.open(title, caller, renameFun, oldName);
        };
        SystemMessag.prototype.streetLevelUp = function () {
            this.streetLevelUpPanel.open();
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        /**
         * 关闭对话框
         */
        SystemMessag.prototype.alertMessageHide = function () {
            if (this._alertMessage) {
                this._alertMessage.close();
            }
            if (this._confirmMessage) {
                this._confirmMessage.close();
            }
            if (this._getRewardMessage) {
                this._getRewardMessage.close();
            }
            if (this._setNumMessage) {
                this._setNumMessage.close();
            }
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        /**
         * 打开重命名窗口
         * @param dialogMsg 对话文本
         * @param caller 调用域
         * @param okFunc 函数
         * @param okBtnTxt 按钮文本
         * @param defaultTxt 默认输入文本
         * @param promptText 提示文本
         * @param maxLen 最大字符
         * @param url icon路径
         * @param cost 花费[id,num]
         * @param isClickButtonAutoClose 点击ok是否自动关闭
         * @param randomNames //随机名字数组
         */
        SystemMessag.prototype.openRename = function (dialogMsg, caller, okFunc, closeFunc, okBtnTxt, defaultTxt, promptText, maxLen, url, cost, isClickButtonAutoClose, randomNames) {
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            this.renameComfirm.open(dialogMsg, caller, okFunc, closeFunc, okBtnTxt, defaultTxt, promptText, maxLen, url, cost, isClickButtonAutoClose, randomNames);
            this.playOpenSound();
        };
        /**隐藏重命名窗口*/
        SystemMessag.prototype.hideRename = function () {
            this.renameComfirm.close();
        };
        SystemMessag.prototype.openDialog = function (content, okFunc) {
            this.dialog.open(content, okFunc);
            this.playOpenSound();
        };
        /**
         * 道具不足时提示获取途径
         * @param itemId
         * @param costNum
         */
        SystemMessag.prototype.openItemWay = function (itemId, costNum) {
            this.wayAlertDialog.setInfo(itemId, costNum);
            this.playOpenSound();
        };
        /**
         * 道具不足时提示获取途径
         * @param point
         * @param itemData
         */
        SystemMessag.prototype.showItemInfo = function (button, itemId) {
            this.itemInfoPanel.Show(button, itemId);
        };
        /**
         * 提示获取奖励信息
         * @param itemList
         * @param title
         * @param confirm
         */
        SystemMessag.prototype.openAwardsAlert = function (itemList, title, confirm) {
            this.alertAwardsDialog.open(itemList, title, confirm);
            this.playOpenSound();
        };
        SystemMessag.prototype.openAwardsAlertByProtoItems = function (itemList, title, confirm) {
            this.openAwardsAlert(ItemDescList2DTItemNumList(itemList), title, confirm);
        };
        SystemMessag.prototype.playEffect = function (dt) {
            this._effectMsg.playeffect(dt);
        };
        SystemMessag.prototype.playEffects = function (dts) {
            this._effectMsg.playeffects(dts);
        };
        Object.defineProperty(SystemMessag.prototype, "alertGift", {
            get: function () {
                if (!this._alertGift) {
                    this._alertGift = fgui.Common.SystemAlertGift.createInstance();
                }
                return this._alertGift;
            },
            enumerable: true,
            configurable: true
        });
        //////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////
        /**
         *
         * @param itemList
         * @param title
         * @param desc
         * @param btnTxt
         * @param btnEnabled
         * @param confirm
         */
        SystemMessag.prototype.openAwardsGift = function (itemList, title, desc, btnTxt, btnEnabled, confirm) {
            this.alertGift.open(itemList, title, desc, btnTxt, btnEnabled, confirm);
            this.playOpenSound();
        };
        Object.defineProperty(SystemMessag.prototype, "actorBreakEffect", {
            get: function () {
                if (!this._actorBreakEffect) {
                    this._actorBreakEffect = fgui.Common.ActorLvBreaktUI.createInstance();
                }
                return this._actorBreakEffect;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 播放突破效果
         * @param acotrId 艺人id
         * @param type 类型
         */
        SystemMessag.prototype.playBreakEffect = function (acotrId, desc) {
            this.actorBreakEffect.playEffect(acotrId, desc);
        };
        Object.defineProperty(SystemMessag.prototype, "goOtherFunction", {
            get: function () {
                if (!this._goOtherFunction) {
                    this._goOtherFunction = fgui.Common.SystemGoOtherFunction.createInstance();
                }
                return this._goOtherFunction;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 打开功能跳转
         * @param type
         * @param title
         * @param desc
         * @param confirmFunc
         */
        SystemMessag.prototype.openGoOtherFunc = function (type, title, desc, confirmFunc) {
            this.goOtherFunction.open(type, title, desc, confirmFunc);
        };
        return SystemMessag;
    }());
    Games.SystemMessag = SystemMessag;
})(Games || (Games = {}));
//# sourceMappingURL=SystemMessage.js.map