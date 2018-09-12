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
    var AvatarConfigStruct = /** @class */ (function (_super) {
        __extends(AvatarConfigStruct, _super);
        function AvatarConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(AvatarConfigStruct.prototype, "icon", {
            get: function () {
                var value = LangManager.Instance.getValue("avatar", this.id, "icon");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_icon;
            },
            enumerable: true,
            configurable: true
        });
        return AvatarConfigStruct;
    }(configs.BaseConfig));
    configs.AvatarConfigStruct = AvatarConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=AvatarConfigStruct.js.map