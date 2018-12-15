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
    var Mission;
    (function (Mission) {
        var ProgressMission = /** @class */ (function (_super) {
            __extends(ProgressMission, _super);
            function ProgressMission() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.configs = [];
                return _this;
            }
            ProgressMission.prototype.updateBarPanel = function () {
            };
            Object.defineProperty(ProgressMission.prototype, "value", {
                // 当前值
                get: function () {
                    return this.m_bar.value;
                },
                set: function (curProgress) {
                    this.m_title.text = curProgress.toString();
                    // this.m_bar.value = value;
                    var progressNums = [];
                    for (var index = 0; index < this.configs.length; index++) {
                        var element = this.configs[index];
                        progressNums.push(element.completion);
                    }
                    var preMaxValue = 0;
                    var max = 0;
                    var value = 0;
                    var num = progressNums.length;
                    var total = progressNums[num - 1];
                    var eachParagragh = total / progressNums.length;
                    for (var index = 0; index < num; index++) {
                        var prog = progressNums[index];
                        if (curProgress <= prog) {
                            max = total / ((eachParagragh * (index + 1)) / prog);
                            var diff = prog - preMaxValue;
                            var va = max * (eachParagragh / total);
                            value = max * (eachParagragh * index / total) + va / diff * (curProgress - preMaxValue);
                            break;
                        }
                        preMaxValue = prog;
                    }
                    this.m_bar.max = max;
                    this.m_bar.value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ProgressMission.prototype, "max", {
                // 最大值		
                get: function () {
                    return this.m_bar.max;
                },
                set: function (value) {
                    this.m_bar.max = value;
                },
                enumerable: true,
                configurable: true
            });
            ProgressMission.prototype.setProgressId = function (progressId) {
                this.progressId = progressId;
                this.progressData = Game.moduleModel.progressBox.getProgressBoxData(progressId);
                this.configs = Game.config.complete.getCompleteList(progressId);
                this.max = this.configs[this.configs.length - 1].completion;
                this.value = this.progressData.progress;
                var list = this.m_list;
                list.setVirtual();
                list.setVirtualAndLoop();
                if (!list.itemRenderer)
                    list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
                list.numItems = this.configs.length;
            };
            ProgressMission.prototype.renderListItem = function (index, item) {
                var config = this.configs[index];
                item.setData(index + 1, config, this.progressData);
            };
            ProgressMission.prototype.updateView = function () {
                if (this.progressData) {
                    this.setProgressId(this.progressId);
                }
            };
            ProgressMission.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.ManageOrderData, this.updateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.ProgressBoxData, this.updateView, this);
            };
            ProgressMission.prototype.onWindowShow = function () {
                this.updateView();
                Game.protoOkEvent.add(ProtoEventKey.ManageOrderData, this.updateView, this);
                Game.protoOkEvent.add(ProtoEventKey.ProgressBoxData, this.updateView, this);
            };
            return ProgressMission;
        }(Mission.ProgressMissionStruct));
        Mission.ProgressMission = ProgressMission;
    })(Mission = fgui.Mission || (fgui.Mission = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressMission.js.map