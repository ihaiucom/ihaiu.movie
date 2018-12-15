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
    //======================
    // 剧情 数据模型
    //----------------------
    var BagModel = /** @class */ (function (_super) {
        __extends(BagModel, _super);
        function BagModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BagModel.prototype.GetBagVolume = function () {
            var va;
            if (Game.config.global.getConfig(35)) {
                va = Game.config.global.getConfig(35).value;
            }
            else {
                va = 0;
            }
            var roomInfo = Game.moduleModel.building.getRoomByType(6);
            if (roomInfo == null) {
                return va;
            }
            var effectId = roomInfo.id * 100 + 1;
            var effect = Game.config.buildingEffect.getConfig(effectId);
            if (effect) {
                return va + effect.par1;
            }
            return va;
        };
        BagModel.prototype.GetItemNumByType = function (type) {
            var num = 0;
            var itemList = Game.moduleModel.item.itemList;
            for (var _i = 0, itemList_1 = itemList; _i < itemList_1.length; _i++) {
                var item = itemList_1[_i];
                if (item.itemType == type) {
                    num += item.itemNum;
                }
            }
            return num;
        };
        BagModel.prototype.GetItemType = function (itemId) {
            return Game.config.item.getType(itemId);
        };
        BagModel.prototype.IsItemFull = function (itemId, itemNum) {
            if (itemNum === void 0) { itemNum = 1; }
            var type = this.GetItemType(itemId);
            if (type == 4) {
                return this.IsBagFull(itemNum);
            }
            if (itemId == Game.config.global.getConfig(GlobalKey.Movie_Licence_ID).value) {
                var propNum = Game.moduleModel.item.getItemNum(itemId);
                return propNum + itemNum > Game.config.global.getConfig(GlobalKey.Licence_Store_Max).value;
            }
            return false;
        };
        BagModel.prototype.IsLicenceFull = function (itemId, itemNum) {
            if (itemId == Game.config.global.getConfig(GlobalKey.Movie_Licence_ID).value) {
                var propNum = Game.moduleModel.item.getItemNum(itemId);
                return propNum + itemNum > Game.config.global.getConfig(GlobalKey.Licence_Store_Max).value;
            }
            return false;
        };
        BagModel.prototype.IsBagFull = function (addNum) {
            if (addNum === void 0) { addNum = 1; }
            var volume = this.GetBagVolume();
            var propNum = this.GetItemNumByType(4);
            return propNum + addNum > volume;
        };
        Object.defineProperty(BagModel.prototype, "RedNum", {
            get: function () {
                return this.RedGift + this.RedPact;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BagModel.prototype, "RedGift", {
            get: function () {
                var list = Game.moduleModel.item.GetItemListByType([8, 17]);
                return list.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BagModel.prototype, "RedPact", {
            get: function () {
                var list = Game.moduleModel.item.GetItemListByType([7]);
                var num = 0;
                for (var index = 0; index < list.length; index++) {
                    var data = list[index];
                    var actorId = data.itemConfig.actor_id;
                    var actor = Game.moduleModel.actor.getActor(actorId);
                    if (actor) {
                        continue;
                    }
                    if (data.itemConfig.actor_num <= data.itemNum) {
                        num++;
                    }
                }
                num += this.RedArtistPieces;
                return num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BagModel.prototype, "RedArtistPieces", {
            get: function () {
                var list = Game.moduleModel.item.GetItemListByType([16]);
                var num = 0;
                for (var index = 0; index < list.length; index++) {
                    var data = list[index];
                    if (data.itemConfig.actor_num <= data.itemNum) {
                        num++;
                    }
                }
                return num;
            },
            enumerable: true,
            configurable: true
        });
        return BagModel;
    }(Games.MModel));
    Games.BagModel = BagModel;
})(Games || (Games = {}));
//# sourceMappingURL=BagModel.js.map