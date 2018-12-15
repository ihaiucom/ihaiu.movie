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
    var OperationTasksConfigStruct = /** @class */ (function (_super) {
        __extends(OperationTasksConfigStruct, _super);
        function OperationTasksConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(OperationTasksConfigStruct.prototype, "classname", {
            get: function () {
                var value = LangManager.Instance.getValue("operationTasks", this.id, "classname");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_classname;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OperationTasksConfigStruct.prototype, "description", {
            get: function () {
                var value = LangManager.Instance.getValue("operationTasks", this.id, "description");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_description;
            },
            enumerable: true,
            configurable: true
        });
        return OperationTasksConfigStruct;
    }(configs.BaseConfig));
    configs.OperationTasksConfigStruct = OperationTasksConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=OperationTasksConfigStruct.js.map