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
    var ProgressBoxModel = /** @class */ (function (_super) {
        __extends(ProgressBoxModel, _super);
        function ProgressBoxModel() {
            var _this = _super.call(this) || this;
            _this.progressBoxDict = new Dictionary();
            _this.progressBoxUUidDict = new Dictionary();
            return _this;
        }
        ProgressBoxModel.prototype.getProgressBoxData = function (id) {
            if (!this.progressBoxDict.hasKey(id)) {
                var data = new Games.ProgressBoxData();
                data.id = id;
                this.progressBoxDict.add(id, data);
            }
            return this.progressBoxDict.getValue(id);
        };
        ProgressBoxModel.prototype.getProgressBoxDataByUUid = function (uuid) {
            return this.progressBoxUUidDict.getValue(uuid);
        };
        ProgressBoxModel.prototype.addProgressBoxData = function (msg) {
            var data = this.getProgressBoxData(msg.moduleId);
            if (data == null) {
                data = new Games.ProgressBoxData();
            }
            data.uuid = msg.uuid;
            data.id = msg.moduleId;
            data.lastTime = msg.lastTime;
            data.progress = msg.progress;
            data.staus = msg.staus;
            data.startResetTime();
            //添加到集合中
            this.progressBoxDict.add(data.id, data);
            this.progressBoxUUidDict.add(data.uuid, data);
        };
        return ProgressBoxModel;
    }(Games.MModel));
    Games.ProgressBoxModel = ProgressBoxModel;
})(Games || (Games = {}));
//# sourceMappingURL=ProgressBoxModel.js.map