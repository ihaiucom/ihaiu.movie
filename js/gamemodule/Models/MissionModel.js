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
    //======================
    // 日常任务 数据模型
    //----------------------
    var MissionModel = /** @class */ (function (_super) {
        __extends(MissionModel, _super);
        function MissionModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.dict = new Dictionary();
            _this.list = [];
            return _this;
        }
        // 获取		
        MissionModel.prototype.getMissionData = function (id) {
            return this.dict.getValue(id);
        };
        // 初始化
        MissionModel.prototype.install = function () {
            var list = Game.config.task.getConfigList();
            for (var i = 0; i < list.length; i++) {
                var config = list[i];
                if (config.type == EAchievementType.daily) {
                    var item = new Games.MissionData();
                    item.id = config.id;
                    item.config = config;
                    this.dict.add(item.id, item);
                    this.list.push(item);
                }
            }
        };
        MissionModel.prototype.setData = function (msg) {
            var data = this.getMissionData(msg.cid);
            if (data) {
                data.protoData = msg;
            }
        };
        // 获取功能以及解锁的任务		
        MissionModel.prototype.getUnlockList = function () {
            var list = [];
            for (var i = 0; i < this.list.length; i++) {
                var data = this.list[i];
                // let unlock = Game.moduleModel.building.validataBuildLevel(data.config.unlock);
                // if (unlock)
                // {
                // 	list.push(data);
                // }
                list.push(data);
            }
            list.sort(function (a, b) {
                var stateA = a.protoData.state;
                var stateB = b.protoData.state;
                switch (stateA) {
                    case EAchievementState.rewarded:
                        stateA = -1;
                        break;
                }
                switch (stateB) {
                    case EAchievementState.rewarded:
                        stateB = -1;
                        break;
                }
                if (stateB == stateA) {
                    if (a.config.goal > 0 && b.config.goal > 0) {
                        return a.protoData.progress / a.config.goal - b.protoData.progress / b.config.goal;
                    }
                }
                return stateB - stateA;
            });
            return list;
        };
        // 获取红点数量
        MissionModel.prototype.getRead = function () {
            var num = 0;
            var list = this.getUnlockList();
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var data = list_1[_i];
                if (data.protoData.state == EAchievementState.finished) {
                    num++;
                }
            }
            var progressData = Game.moduleModel.progressBox.getProgressBoxData(EProgressBoxId.dailyTask);
            if (progressData) {
                num += progressData.getReadNum();
            }
            return num;
        };
        return MissionModel;
    }(Games.MModel));
    Games.MissionModel = MissionModel;
})(Games || (Games = {}));
//# sourceMappingURL=MissionModel.js.map