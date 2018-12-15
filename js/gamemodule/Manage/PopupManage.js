var Games;
(function (Games) {
    var PopupType;
    (function (PopupType) {
        PopupType[PopupType["Menu"] = 0] = "Menu";
        PopupType[PopupType["MenuParam"] = 1] = "MenuParam";
    })(PopupType = Games.PopupType || (Games.PopupType = {}));
    var PopupData = /** @class */ (function () {
        function PopupData() {
        }
        return PopupData;
    }());
    Games.PopupData = PopupData;
    var PopupHandler = /** @class */ (function () {
        function PopupHandler() {
        }
        return PopupHandler;
    }());
    Games.PopupHandler = PopupHandler;
    var PopupManage = /** @class */ (function () {
        function PopupManage() {
            //是否正在播放
            this.isPlayed = false;
        }
        /**
         * 获取单例实例
         */
        PopupManage.getInstance = function () {
            var Class = this;
            if (Class.__instance == null) {
                Class.__instance = new Class();
                Class.__instance.install();
            }
            return Class.__instance;
        };
        PopupManage.prototype.install = function () {
            this.popList = [];
            this.recoverList = [];
            this.checkListHandlers = [];
            this.addHandler(Games.MenuId.PopUp, Handler.create(this, this.popUp, null, false), Handler.create(this, this.paramHandler, null, false));
            // this.addHandler(MenuId.GuideComplete, Handler.create(this, this.guideComplete, null, false), null);
            Game.event.add(GameEventKey.GameEventKey_StorylineComplete, this.checkPopupMenuByStoryline, this);
            Game.event.add(GameEventKey.GameEventKey_TimeLimitRemind, this.checkPopupMenu, this);
        };
        PopupManage.prototype.checkPopupMenuByStoryline = function () {
            this.checkPopupMenu();
        };
        PopupManage.prototype.popUp = function () {
            return User.popUpInf().length > 0;
        };
        PopupManage.prototype.guideComplete = function () {
            return Game.moduleModel.guide.isPopupGuideComplete;
        };
        PopupManage.prototype.paramHandler = function () {
            return User.popUpInf();
        };
        /**
         *
         * @param menuId
         * @param handler
         * @param paramHandler
         */
        PopupManage.prototype.addHandler = function (menuId, handler, paramHandler) {
            var data = new PopupHandler();
            data.handler = handler;
            data.menuId = menuId;
            data.paramer = paramHandler;
            this.checkListHandlers.push(data);
        };
        ///检查是否弹出
        PopupManage.prototype.checkPopupMenu = function () {
            var played = false;
            if (Game.menu.getLastOpenMenuId() == Games.MenuId.Home) {
                for (var index = 0; index < this.checkListHandlers.length; index++) {
                    var element = this.checkListHandlers[index];
                    if (element.handler.run()) {
                        played = true;
                        this.pushMenu(element.menuId, element.paramer ? element.paramer.run() : null);
                    }
                }
            }
            return played;
        };
        //弹出窗口
        PopupManage.prototype.popupMenu = function () {
            if (this.isPlayed == false) {
                if (this.popList.length > 0) {
                    this.curPopup = this.popList.shift();
                    this.addMenuEvent();
                    Game.menu.open(this.curPopup.menuId, this.curPopup.menuParamer);
                    this.isPlayed = true;
                }
            }
            return false;
        };
        //添加监听
        PopupManage.prototype.addMenuEvent = function () {
            Game.event.add(GameEventKey.GameFrame_CloseMenu, this.closeMenuHandler, this);
        };
        //移除监听
        PopupManage.prototype.removeMenuEvent = function () {
            Game.event.remove(GameEventKey.GameFrame_CloseMenu, this.closeMenuHandler, this);
        };
        PopupManage.prototype.closeMenuHandler = function (menuId) {
            if (this.curPopup == null) {
                this.isPlayed = false;
                return;
            }
            if (menuId == this.curPopup.menuId) {
                this.recoverList.push(this.curPopup);
                this.isPlayed = false;
                this.removeMenuEvent();
                this.popupMenu();
            }
        };
        //加入弹出
        PopupManage.prototype.pushMenu = function (menuId, param) {
            if (param === void 0) { param = null; }
            var data;
            if (this.recoverList.length > 0) {
                data = this.recoverList.shift();
            }
            else {
                data = new PopupData();
            }
            data.menuId = menuId;
            data.menuParamer = param;
            this.popList.push(data);
            this.popupMenu();
        };
        return PopupManage;
    }());
    Games.PopupManage = PopupManage;
})(Games || (Games = {}));
//# sourceMappingURL=PopupManage.js.map