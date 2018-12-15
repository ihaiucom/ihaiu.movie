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
    var ActorConfigStruct = /** @class */ (function (_super) {
        __extends(ActorConfigStruct, _super);
        function ActorConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ActorConfigStruct.prototype, "name", {
            get: function () {
                var value = LangManager.Instance.getValue("actor", this.id, "name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfigStruct.prototype, "tips", {
            get: function () {
                var value = LangManager.Instance.getValue("actor", this.id, "tips");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.cn_tips;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfigStruct.prototype, "getway", {
            get: function () {
                var value = LangManager.Instance.getValue("actor", this.id, "getway");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.cn_getway;
            },
            enumerable: true,
            configurable: true
        });
        return ActorConfigStruct;
    }(configs.BaseConfig));
    configs.ActorConfigStruct = ActorConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorConfigStruct.js.map