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
    var BoxTargetConfigStruct = /** @class */ (function (_super) {
        __extends(BoxTargetConfigStruct, _super);
        function BoxTargetConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(BoxTargetConfigStruct.prototype, "dialog", {
            get: function () {
                var value = LangManager.Instance.getValue("boxTarget", this.id, "dialog");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_dialog;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoxTargetConfigStruct.prototype, "title", {
            get: function () {
                var value = LangManager.Instance.getValue("boxTarget", this.id, "title");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_title;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoxTargetConfigStruct.prototype, "targettext", {
            get: function () {
                var value = LangManager.Instance.getValue("boxTarget", this.id, "targettext");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_targettext;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoxTargetConfigStruct.prototype, "timetext", {
            get: function () {
                var value = LangManager.Instance.getValue("boxTarget", this.id, "timetext");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_timetext;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoxTargetConfigStruct.prototype, "reward", {
            get: function () {
                var value = LangManager.Instance.getValue("boxTarget", this.id, "reward");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_reward;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoxTargetConfigStruct.prototype, "_final", {
            get: function () {
                var value = LangManager.Instance.getValue("boxTarget", this.id, "final");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn__final;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BoxTargetConfigStruct.prototype, "button", {
            get: function () {
                var value = LangManager.Instance.getValue("boxTarget", this.id, "button");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_button;
            },
            enumerable: true,
            configurable: true
        });
        return BoxTargetConfigStruct;
    }(configs.BaseConfig));
    configs.BoxTargetConfigStruct = BoxTargetConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BoxTargetConfigStruct.js.map