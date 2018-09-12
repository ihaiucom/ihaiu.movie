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
var Games;
(function (Games) {
    //====================
    // 消息处理器
    //--------------------
    var itemHandler = /** @class */ (function (_super) {
        __extends(itemHandler, _super);
        function itemHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.item;
            return _this;
        }
        /**
         * 道具出售
         * @param resData
         */
        itemHandler.prototype.SellOut = function (resData) {
        };
        /**
         * 道具合成
         * @param resData
         */
        itemHandler.prototype.Compound = function (resData) {
        };
        /**
         * 道具拆分
         * @param resData
         */
        itemHandler.prototype.Split = function (resData) {
        };
        /**
         * 使用道具
         * @param resData
         */
        itemHandler.prototype.Use = function (resData) {
            var dropList = resData.dropout;
            if (dropList && dropList.length > 0) {
                var list = Games.ItemData.BinningItemList(dropList);
                Game.system.getItemText(list);
            }
        };
        /**
         * 合成艺人
         * @param resData
         */
        itemHandler.prototype.CompoundActor = function (resData) {
        };
        /**
         *  使用艺人技能经验药水
         */
        itemHandler.prototype.UseActorSkillWater = function (msg) {
        };
        return itemHandler;
    }(Games.ProtoHandler));
    Games.itemHandler = itemHandler;
})(Games || (Games = {}));
//# sourceMappingURL=itemHandler.js.map