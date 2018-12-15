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
    var ItemConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ItemConfigReaderStruct, _super);
        function ItemConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Item";
            return _this;
        }
        ItemConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ItemConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.zh_cn_item_des = csvGetString(csv, this.GetHeadIndex("zh_cn_item_des"));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.star = csvGetInt(csv, this.GetHeadIndex("star"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.max_num = csvGetInt(csv, this.GetHeadIndex("max_num"));
            config.get_way = toIntArray(csvGetString(csv, this.GetHeadIndex("get_way")));
            config.can_use = csvGetBoolean(csv, this.GetHeadIndex("can_use"));
            config.use_type = csvGetInt(csv, this.GetHeadIndex("use_type"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.can_sell = csvGetBoolean(csv, this.GetHeadIndex("can_sell"));
            config.price = csvGetInt(csv, this.GetHeadIndex("price"));
            config.syn_id = csvGetInt(csv, this.GetHeadIndex("syn_id"));
            config.actor_id = csvGetInt(csv, this.GetHeadIndex("actor_id"));
            config.actor_num = csvGetInt(csv, this.GetHeadIndex("actor_num"));
            config.zh_cn_get_way_explain = csvGetString(csv, this.GetHeadIndex("zh_cn_get_way_explain"));
            config.User_item_info = csvGetInt(csv, this.GetHeadIndex("User_item_info"));
            this.addConfig(config);
        };
        return ItemConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ItemConfigReaderStruct = ItemConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ItemConfigReaderStruct.js.map