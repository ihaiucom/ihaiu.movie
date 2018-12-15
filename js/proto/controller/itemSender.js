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
    // 消息发送器
    //--------------------
    var itemSender = /** @class */ (function (_super) {
        __extends(itemSender, _super);
        function itemSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.item;
            return _this;
        }
        /**
         * 道具出售
         * @param uuid
         * @param itemId
         * @param amount
         */
        itemSender.prototype.SellOut = function (uuid, itemId, amount) {
            var reqData = new Proto.API.item.SellOutRequest();
            reqData.uuid = uuid;
            reqData.itemId = itemId;
            reqData.amount = amount;
            this.send(reqData);
        };
        /**
         * 道具合成
         * @param uuid
         * @param itemId
         * @param amount
         */
        itemSender.prototype.Compound = function (uuid, itemId, amount) {
            var reqData = new Proto.API.item.CompoundRequest();
            reqData.uuid = uuid;
            reqData.itemId = itemId;
            reqData.amount = amount;
            this.send(reqData);
        };
        /**
         * 道具拆分
         * @param uuid
         * @param itemId
         * @param amount
         */
        itemSender.prototype.Split = function (uuid, itemId, amount) {
            var reqData = new Proto.API.item.SplitRequest();
            reqData.uuid = uuid;
            reqData.itemId = itemId;
            reqData.amount = amount;
            this.send(reqData);
        };
        /**
         * 使用道具
         * @param uuid
         * @param itemId
         * @param amount
         */
        itemSender.prototype.Use = function (uuid, itemId, amount) {
            var reqData = new Proto.API.item.UseRequest();
            reqData.uuid = uuid;
            reqData.itemId = itemId;
            reqData.amount = amount;
            this.send(reqData);
        };
        /**
         * 合成艺人
         * @param uuid
         * @param itemId
         * @param amount
         */
        itemSender.prototype.CompoundActor = function (uuid, itemId) {
            var reqData = new Proto.API.item.CompoundActorRequest();
            reqData.uuid = uuid;
            reqData.itemId = itemId;
            this.send(reqData);
        };
        /**
         *  使用艺人技能经验药水
         * @param uuid   道具唯一编号
         * @param itemId   道具id
         * @param actorId   艺人id
         * @param amount   数量
         */
        itemSender.prototype.UseActorSkillWater = function (uuid, itemId, actorId, amount) {
            var req = new Proto.API.item.UseActorSkillWaterRequest();
            req.uuid = uuid;
            // req.itemId = itemId;
            req.actorId = actorId;
            req.amount = amount;
            this.send(req);
        };
        /**
         *  使用碎片礼包道具
         * @param uuid   道具唯一编号
         * @param itemId   道具id
         * @param amount   道具数量
         * @param selItemId   选择的物品ID
         */
        itemSender.prototype.UsePiecesGiftBag = function (uuid, itemId, amount, selItemId) {
            var req = new Proto.API.item.UsePiecesGiftBagRequest();
            req.uuid = uuid;
            req.itemId = itemId;
            req.amount = amount;
            req.selItemId = selItemId;
            this.send(req);
        };
        return itemSender;
    }(Games.ProtoSender));
    Games.itemSender = itemSender;
})(Games || (Games = {}));
//# sourceMappingURL=itemSender.js.map