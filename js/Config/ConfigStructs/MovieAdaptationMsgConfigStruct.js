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
    var MovieAdaptationMsgConfigStruct = /** @class */ (function (_super) {
        __extends(MovieAdaptationMsgConfigStruct, _super);
        function MovieAdaptationMsgConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MovieAdaptationMsgConfigStruct.prototype, "msg1", {
            get: function () {
                var value = LangManager.Instance.getValue("movieAdaptationMsg", this.id, "msg1");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_msg1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieAdaptationMsgConfigStruct.prototype, "msg2", {
            get: function () {
                var value = LangManager.Instance.getValue("movieAdaptationMsg", this.id, "msg2");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_msg2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieAdaptationMsgConfigStruct.prototype, "msg3", {
            get: function () {
                var value = LangManager.Instance.getValue("movieAdaptationMsg", this.id, "msg3");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_msg3;
            },
            enumerable: true,
            configurable: true
        });
        return MovieAdaptationMsgConfigStruct;
    }(configs.BaseConfig));
    configs.MovieAdaptationMsgConfigStruct = MovieAdaptationMsgConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MovieAdaptationMsgConfigStruct.js.map