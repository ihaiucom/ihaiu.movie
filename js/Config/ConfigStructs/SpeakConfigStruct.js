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
    var SpeakConfigStruct = /** @class */ (function (_super) {
        __extends(SpeakConfigStruct, _super);
        function SpeakConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(SpeakConfigStruct.prototype, "speak", {
            get: function () {
                var value = LangManager.Instance.getValue("speak", this.id, "speak");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.cn_speak;
            },
            enumerable: true,
            configurable: true
        });
        return SpeakConfigStruct;
    }(configs.BaseConfig));
    configs.SpeakConfigStruct = SpeakConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SpeakConfigStruct.js.map