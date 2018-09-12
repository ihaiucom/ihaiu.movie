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
    var VisitConfigStruct = /** @class */ (function (_super) {
        __extends(VisitConfigStruct, _super);
        function VisitConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(VisitConfigStruct.prototype, "fans_speak0", {
            get: function () {
                var value = LangManager.Instance.getValue("visit", this.id, "fans_speak0");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_fans_speak0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisitConfigStruct.prototype, "actor_speak0", {
            get: function () {
                var value = LangManager.Instance.getValue("visit", this.id, "actor_speak0");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_actor_speak0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisitConfigStruct.prototype, "fans_speak1", {
            get: function () {
                var value = LangManager.Instance.getValue("visit", this.id, "fans_speak1");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_fans_speak1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisitConfigStruct.prototype, "actor_speak1", {
            get: function () {
                var value = LangManager.Instance.getValue("visit", this.id, "actor_speak1");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_actor_speak1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisitConfigStruct.prototype, "fans_speak2", {
            get: function () {
                var value = LangManager.Instance.getValue("visit", this.id, "fans_speak2");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_fans_speak2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisitConfigStruct.prototype, "actor_speak2", {
            get: function () {
                var value = LangManager.Instance.getValue("visit", this.id, "actor_speak2");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_actor_speak2;
            },
            enumerable: true,
            configurable: true
        });
        return VisitConfigStruct;
    }(configs.BaseConfig));
    configs.VisitConfigStruct = VisitConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=VisitConfigStruct.js.map