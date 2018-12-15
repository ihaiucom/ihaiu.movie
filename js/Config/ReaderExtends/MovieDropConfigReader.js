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
    var MovieDropConfigReader = /** @class */ (function (_super) {
        __extends(MovieDropConfigReader, _super);
        function MovieDropConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * 活动具体某条数据，依据盈利图标
         * @param val gain_pic
         */
        MovieDropConfigReader.prototype.getSellTip = function (val) {
            var list = this.getConfigList();
            for (var i = 0; i < list.length; i++) {
                if (list[i].gain_pic == val) {
                    return list[i];
                }
            }
        };
        /**
         * 获得盈利图标
         * @param level
         */
        MovieDropConfigReader.prototype.getSellIcon = function (level) {
            var list = this.getConfigList();
            for (var i = 0; i < list.length; i++) {
                if (list[i].gain_level == level) {
                    return list[i].gain_pic;
                }
            }
        };
        return MovieDropConfigReader;
    }(configs.MovieDropConfigReaderStruct));
    configs.MovieDropConfigReader = MovieDropConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=MovieDropConfigReader.js.map