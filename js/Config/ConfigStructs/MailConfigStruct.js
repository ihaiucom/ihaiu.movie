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
    var MailConfigStruct = /** @class */ (function (_super) {
        __extends(MailConfigStruct, _super);
        function MailConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MailConfigStruct.prototype, "title", {
            get: function () {
                var value = LangManager.Instance.getValue("mail", this.id, "title");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_title;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MailConfigStruct.prototype, "content", {
            get: function () {
                var value = LangManager.Instance.getValue("mail", this.id, "content");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_content;
            },
            enumerable: true,
            configurable: true
        });
        return MailConfigStruct;
    }(configs.BaseConfig));
    configs.MailConfigStruct = MailConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MailConfigStruct.js.map