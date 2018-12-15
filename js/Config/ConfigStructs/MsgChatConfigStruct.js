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
    var MsgChatConfigStruct = /** @class */ (function (_super) {
        __extends(MsgChatConfigStruct, _super);
        function MsgChatConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MsgChatConfigStruct.prototype, "notice", {
            get: function () {
                var value = LangManager.Instance.getValue("msgChat", this.id, "notice");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_notice;
            },
            enumerable: true,
            configurable: true
        });
        return MsgChatConfigStruct;
    }(configs.BaseConfig));
    configs.MsgChatConfigStruct = MsgChatConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MsgChatConfigStruct.js.map