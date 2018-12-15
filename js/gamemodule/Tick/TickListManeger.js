var Games;
(function (Games) {
    var TickMenuManager = /** @class */ (function () {
        function TickMenuManager() {
            //
            this._tickDict = new Dictionary();
            //按钮
            this._timeButtonDict = new Dictionary();
            //更新调用
            this._updateFuncDict = new Dictionary();
            //更新调用
            this._getStrFuncDict = new Dictionary();
        }
        Object.defineProperty(TickMenuManager, "getInstance", {
            get: function () {
                if (this._instance == null) {
                    this._instance = new TickMenuManager();
                    this._instance.initsall();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        TickMenuManager.prototype.initsall = function () {
            this._updateFuncDict.add(Games.MenuId.Awards, Handler.create(Game.moduleModel.oscar, Game.moduleModel.oscar.UpdateOscarTick, null, false));
            this._getStrFuncDict.add(Games.MenuId.Awards, Handler.create(Game.moduleModel.oscar, Game.moduleModel.oscar.GetOscarCDTxt, null, false));
            this._getStrFuncDict.add(Games.MenuId.CupGift, Handler.create(Game.moduleModel.targetPackage, Game.moduleModel.targetPackage.curTimeStr, null, false));
        };
        TickMenuManager.prototype.addTick = function (menuId) {
            if (this._tickDict.hasKey(menuId) == false) {
                var tick = Game.tick.AddTick(1, 0, Handler.create(this, this.onTickUpdate, [menuId], false), null);
                tick.Restart();
                this._tickDict.add(menuId, tick);
            }
        };
        //停止计时
        TickMenuManager.prototype.stopTick = function (menuId) {
            var tick = this._tickDict.getValue(menuId);
            if (tick) {
                tick.Stop();
            }
        };
        //添加按钮，可添加多个
        TickMenuManager.prototype.addButton = function (menuId, button) {
            var list = this.getButtons(menuId);
            var but = list.findOne(function (element) { return element == button; });
            if (but == null) {
                list.push(button);
            }
            //
            this.onTickUpdate(menuId);
        };
        //
        TickMenuManager.prototype.getButtons = function (menuId) {
            var list;
            if (this._timeButtonDict.hasKey(menuId)) {
                list = this._timeButtonDict.getValue(menuId);
            }
            else {
                list = [];
                this._timeButtonDict.add(menuId, list);
            }
            return list;
        };
        TickMenuManager.prototype.removeButton = function (menuId, button) {
            var list = this.getButtons(menuId);
            for (var index = 0; index < list.length; index++) {
                var element = list[index];
                if (element == button) {
                    list.splice(index, 1);
                    return true;
                }
            }
            return false;
        };
        TickMenuManager.prototype.onTickUpdate = function (menuId) {
            var list = this._timeButtonDict.getValue(menuId);
            if (list) {
                var str = "";
                if (this._getStrFuncDict.hasKey(menuId)) {
                    str = this._getStrFuncDict.getValue(menuId).run();
                }
                for (var index = 0; index < list.length; index++) {
                    var button = list[index];
                    button.m_buttonTime.m_time.text = str;
                }
            }
            if (this._updateFuncDict.hasKey(menuId)) {
                var stop_1 = this._updateFuncDict.getValue(menuId).run();
                if (stop_1) {
                    this.stopTick(menuId);
                }
            }
        };
        return TickMenuManager;
    }());
    Games.TickMenuManager = TickMenuManager;
})(Games || (Games = {}));
// TickList = new Games.TickListManager();
//# sourceMappingURL=TickListManeger.js.map