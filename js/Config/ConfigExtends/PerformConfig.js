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
    var ATEvent = Games.ATEvent;
    var PerformConfig = /** @class */ (function (_super) {
        __extends(PerformConfig, _super);
        function PerformConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(PerformConfig.prototype, "eventList", {
            get: function () {
                var evtList = [];
                this.event.forEach(function (value, index, array) {
                    var event = ATEvent.parse(value);
                    evtList.push(event);
                });
                return evtList;
            },
            enumerable: true,
            configurable: true
        });
        return PerformConfig;
    }(configs.PerformConfigStruct));
    configs.PerformConfig = PerformConfig;
})(configs || (configs = {}));
//# sourceMappingURL=PerformConfig.js.map