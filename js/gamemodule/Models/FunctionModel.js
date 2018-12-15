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
var Games;
(function (Games) {
    var FunctionModel = /** @class */ (function (_super) {
        __extends(FunctionModel, _super);
        function FunctionModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //当前是否正在播放解锁
            _this._isPlaying = false;
            // 菜单按钮字典
            _this._menuDict = new Dictionary();
            _this._menuList = [];
            //红点
            _this._menuRedDict = new Dictionary();
            // 子菜单栏
            _this.submenuBarDict = new Dictionary();
            _this.submenus = [];
            return _this;
        }
        FunctionModel.prototype.install = function () {
            _super.prototype.install.call(this);
            Game.protoOkEvent.add(ProtoEventKey.GameInfo, this.onUpdateGameInfoHandler, this); //等级解锁
            Game.protoOkEvent.add(ProtoEventKey.CityData, this.onUpdateCityDataHandler, this); //占领城市
            // Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_BuildRoom, this.onBuildRoomHandler, this);//建筑解锁
            Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_UpgradeRoom, this.onUpgradeRoomHandler, this); //建筑升级解锁
            Game.protoOobListOkEvent.add(ProtoEventKey.TaskData, this.onFinishTaskDataHandler, this); //建筑升级解锁
            //解锁的
            this._unlockDict = new Dictionary();
            this._initUnlockTypeDict = new Dictionary();
            //所有的未解锁的
            this._allLockList = [];
            //准备解锁
            this._readyUnlockList = [];
            //
            this.initFunc();
        };
        FunctionModel.prototype.onFinishTaskDataHandler = function () {
            this.initMainTask();
        };
        //更新
        FunctionModel.prototype.onUpdateCityDataHandler = function () {
            //
            this.initHoldCity();
        };
        // 添加按钮列表		
        FunctionModel.prototype.addMenuList = function (list) {
            for (var i = 0; i < list.length; i++) {
                // this._menuDict.add(list[i].menuId, list[i]);
                // this._menuList.push(list[i]);
                this.addMenu(list[i].menuId, list[i]);
            }
        };
        FunctionModel.prototype.addSubMenu = function (subbarId, submenu) {
            this.submenus.push(submenu);
            this.submenuBarDict.add(subbarId, submenu);
        };
        // 获取子菜单栏
        FunctionModel.prototype.getSubmenu = function (subbarId) {
            return this.submenuBarDict.getValue(subbarId);
        };
        FunctionModel.prototype.getSubmenus = function () {
            return this.submenus;
        };
        // 获取子菜单栏是否打开
        FunctionModel.prototype.getSubmenuIsOpened = function (subbarId) {
            var subbar = this.getSubmenu(subbarId);
            if (subbar) {
                return subbar.parent ? true : false;
            }
            return false;
        };
        //获取
        FunctionModel.prototype.addMenu = function (id, ctrl) {
            this._menuDict.add(id, ctrl);
            this._menuList.push(ctrl);
        };
        //获取单个功能按钮
        /**
         *
         * @param id unlockid
         */
        FunctionModel.prototype.getMenuCtrl = function (id) {
            var config = Game.config.unlock.getConfig(id);
            return this._menuDict.getValue(config.position);
        };
        //获取所有的列表
        FunctionModel.prototype.getMenuList = function () {
            return this._menuList;
        };
        //通过功能获取
        FunctionModel.prototype.getMenuCtrlByMenuId = function (menuId) {
            var unlockConfig = Game.config.unlock.getUnlockConfig(menuId);
            var ctrl = null;
            if (unlockConfig) {
                ctrl = this._menuDict.getValue(unlockConfig.id);
            }
            return ctrl;
        };
        //建造建筑
        FunctionModel.prototype.onBuildRoomHandler = function () {
            this.checkBuildLevel();
        };
        //升级建筑
        FunctionModel.prototype.onUpgradeRoomHandler = function () {
            this.checkBuildLevel();
        };
        FunctionModel.prototype.checkBuildLevel = function () {
            this.checkUnlock(Games.UnlockType.BuildingLevel);
        };
        //检测占领城市
        FunctionModel.prototype.checkHoldCity = function () {
            this.checkUnlock(Games.UnlockType.HoldCity);
        };
        //检测升档
        FunctionModel.prototype.checkBlockLevel = function () {
            this.checkUnlock(Games.UnlockType.BlockLevel);
        };
        //检测升级
        FunctionModel.prototype.checkLevelUp = function () {
            this.checkUnlock(Games.UnlockType.Level);
        };
        //检测升级
        FunctionModel.prototype.checkMainTask = function () {
            this.checkUnlock(Games.UnlockType.MainTask);
        };
        //接受
        FunctionModel.prototype.onUpdateGameInfoHandler = function () {
            this.addUnlockByType(Games.UnlockType.Level);
            this.addUnlockByType(Games.UnlockType.BlockLevel);
            this.addUnlockByType(Games.UnlockType.BuildingLevel);
        };
        //添加解锁到
        FunctionModel.prototype.addUnlockByType = function (type) {
            if (this._initUnlockTypeDict.getValue(type) != true) {
                this._initUnlockTypeDict.add(type, true);
                this.resetFuncByType(type);
            }
        };
        //初始化
        FunctionModel.prototype.initHoldCity = function () {
            var type = Games.UnlockType.HoldCity;
            this.addUnlockByType(type);
        };
        FunctionModel.prototype.initMainTask = function () {
            var type = Games.UnlockType.MainTask;
            this.addUnlockByType(type);
        };
        //初始化
        FunctionModel.prototype.initFunc = function () {
            this._unlockDict.clear();
            this._initUnlockTypeDict.clear();
            this._readyUnlockList.splice(0, this._readyUnlockList.length);
            //
            this._allLockList = Game.config.unlock.getConfigList().concat();
        };
        //重置初始化解锁
        FunctionModel.prototype.resetFuncByType = function (type) {
            var list = this.getUnlockMenuId(type);
            for (var index = 0; index < list.length; index++) {
                var unlockId = list[index];
                this._unlockDict.add(unlockId, true);
            }
            //解锁
            if (list.length > 0) {
                Game.event.dispatch(GameEventKey.GameEventKey_UnlockInit, type);
            }
        };
        //检查是否有
        FunctionModel.prototype.checkUnlock = function (type) {
            var newList = this.getUnlockMenuId(type);
            this._readyUnlockList = this._readyUnlockList.concat(newList);
            for (var index = 0; index < newList.length; index++) {
                var element = newList[index];
                var unlockConfig = Game.config.unlock.getConfig(element);
                if (unlockConfig && unlockConfig.is_new) {
                    this._menuRedDict.add(unlockConfig.menuId, true);
                }
            }
            if (this._isPlaying == false) {
                //触发播放
                this.playUnlock();
            }
        };
        //播放解锁
        FunctionModel.prototype.playUnlock = function () {
            if (this._readyUnlockList.length > 0) {
                var id = this._readyUnlockList.shift();
                this._unlockDict.add(id, true);
                var config = Game.config.unlock.getConfig(id);
                if (config && (config.isOpenShow || config.isOpenShowMenu)) {
                    if (config.isOpenShowMenu) {
                        Game.event.add(GameEventKey.GameFrame_CloseMenu, this.closeMenu, this);
                        Game.event.dispatch(GameEventKey.GameEventKey_UnlockChange, id);
                        this._isPlaying = false;
                        Game.menu.open(config.menuId);
                    }
                    else {
                        this._isPlaying = true;
                        Game.system.openUnlock(id);
                    }
                }
                else {
                    Game.event.dispatch(GameEventKey.GameEventKey_UnlockChange, id);
                    //
                    this.playUnlock();
                }
            }
            else {
                this._isPlaying = false;
            }
            return this._isPlaying;
        };
        //结束
        FunctionModel.prototype.closeMenu = function (menuId) {
            Game.event.remove(GameEventKey.GameFrame_CloseMenu, this.closeMenu, this);
            this.playUnlock();
        };
        //关闭submenu
        FunctionModel.prototype.closeSubmenus = function () {
            var list = Game.moduleModel.func.getSubmenus();
            for (var i = 0; i < list.length; i++) {
                Games.MenuLayer.home.hidePopup(list[i]);
            }
        };
        /**
         *获取解锁
         * @param type
         */
        FunctionModel.prototype.getUnlockMenuId = function (type) {
            var list = Game.config.unlock.getUnlocks(type);
            var unlocks = [];
            for (var index = 0; index < list.length; index++) {
                var config = list[index];
                if (config.isUnlock && this.isUnlock(config.id) == false) {
                    unlocks.push(config.id);
                }
            }
            if (unlocks.length > 0) {
                unlocks.sort(function (a, b) { return a - b; });
            }
            return unlocks;
        };
        //获取是否开放
        FunctionModel.prototype.isUnlock = function (id) {
            var unlock = false;
            if (this._unlockDict.hasKey(id)) {
                unlock = this._unlockDict.getValue(id);
            }
            return unlock;
        };
        //刷新进度
        FunctionModel.prototype.refreshProgress = function (id) {
            var btnCtrl = this.getMenuCtrl(id);
            if (btnCtrl) {
                btnCtrl.refreshProgress();
            }
        };
        //清除红点标记
        FunctionModel.prototype.clearNewFlag = function (menuId) {
            if (this._menuRedDict.hasKey(menuId)) {
                this._menuRedDict.remove(menuId);
            }
        };
        //
        FunctionModel.prototype.getIsNewMenu = function (menuId) {
            var isNew = false;
            if (this._menuRedDict.hasKey(menuId)) {
                isNew = this._menuRedDict.getValue(menuId);
            }
            return isNew;
        };
        return FunctionModel;
    }(Games.MModel));
    Games.FunctionModel = FunctionModel;
})(Games || (Games = {}));
//# sourceMappingURL=FunctionModel.js.map