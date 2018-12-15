/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
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
var configs;
(function (configs) {
    var ActorTrainConfigStruct = /** @class */ (function (_super) {
        __extends(ActorTrainConfigStruct, _super);
        function ActorTrainConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ActorTrainConfigStruct.prototype, "name", {
            get: function () {
                var value = LangManager.Instance.getValue("actorTrain", this.id, "name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorTrainConfigStruct.prototype, "scene_name", {
            get: function () {
                var value = LangManager.Instance.getValue("actorTrain", this.id, "scene_name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.cn_scene_name;
            },
            enumerable: true,
            configurable: true
        });
        return ActorTrainConfigStruct;
    }(configs.BaseConfig));
    configs.ActorTrainConfigStruct = ActorTrainConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorTrainConfigStruct.js.map