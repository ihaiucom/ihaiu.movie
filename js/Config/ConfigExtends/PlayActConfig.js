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
    var PlayActConfig = /** @class */ (function (_super) {
        __extends(PlayActConfig, _super);
        function PlayActConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(PlayActConfig.prototype, "eventList", {
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
        return PlayActConfig;
    }(configs.PlayActConfigStruct));
    configs.PlayActConfig = PlayActConfig;
})(configs || (configs = {}));
//# sourceMappingURL=PlayActConfig.js.map