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
    var MailModel = /** @class */ (function (_super) {
        __extends(MailModel, _super);
        function MailModel() {
            var _this = _super.call(this) || this;
            _this.lastDelectMail = [];
            _this.dict = new Dictionary();
            return _this;
        }
        Object.defineProperty(MailModel.prototype, "mailList", {
            get: function () {
                var list = [];
                var items = this.dict.getValues();
                for (var i = 0; i < items.length; i++) {
                    if (items[i]) {
                        list.push(items[i]);
                    }
                }
                return list;
            },
            enumerable: true,
            configurable: true
        });
        MailModel.prototype.UpdateServeMailData = function (mail) {
            var data = Games.MailData.Create(mail);
            this.dict.add(mail.uuid, data);
        };
        MailModel.prototype.RemoveMailData = function (uuid) {
            this.dict.remove(uuid);
        };
        MailModel.prototype.GetMailList = function () {
            return this.mailList.sort(function (a, b) {
                if (a.IsNew == true && b.IsNew != true) {
                    return -1;
                }
                if (a.IsNew != true && b.IsNew == true) {
                    return 1;
                }
                return b.createTime - a.createTime;
            });
        };
        MailModel.prototype.GetMail = function (uuid) {
            return this.dict.getValue(uuid);
        };
        MailModel.prototype.DeleteMail = function (uuid) {
            this.lastDelectMail = [];
            var mail = this.GetMail(uuid);
            if (mail && (mail.itemList.length == 0 || mail.IsRewardGot)) {
                this.lastDelectMail.push(uuid);
                Game.protosender.Mail.MailDelete(uuid);
            }
        };
        MailModel.prototype.RewardMail = function (uuid, showError) {
            if (showError == null) {
                showError = true;
            }
            var mail = this.GetMail(uuid);
            var rewardList = [];
            if (mail && !mail.IsRewardGot && mail.itemList.length > 0) {
                var itemNums = 0;
                for (var _i = 0, _a = mail.itemList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var cfg = Game.config.item.getConfig(item.itemId);
                    if (cfg && cfg.type == 4) {
                        itemNums += item.amount;
                    }
                    if (Game.moduleModel.bag.IsLicenceFull(item.itemId, item.amount)) {
                        if (showError) {
                            Game.system.toastText(Games.TEXT.LincenceMax);
                        }
                        return false;
                    }
                }
                if (Game.moduleModel.bag.IsBagFull(itemNums)) {
                    if (showError) {
                        Game.system.toastMsg(MsgKey.produce_warehouse_max);
                    }
                    return false;
                }
                Game.protosender.Mail.MailGetReward(uuid);
                for (var _b = 0, _c = mail.itemList; _b < _c.length; _b++) {
                    var item = _c[_b];
                    var reward = new DTItemNum();
                    reward.itemId = item.itemId;
                    reward.itemNum = item.amount;
                    rewardList.push(reward);
                }
                return rewardList;
            }
            return false;
        };
        MailModel.prototype.ReadMail = function (uuid) {
            var mail = this.GetMail(uuid);
            if (mail && mail.isNew) {
                Game.protosender.Mail.MailRead(uuid);
            }
        };
        MailModel.prototype.DeleteAll = function () {
            var mailList = this.GetMailList();
            var deleteList = [];
            for (var _i = 0, mailList_1 = mailList; _i < mailList_1.length; _i++) {
                var mail = mailList_1[_i];
                if (mail.IsNew) {
                    continue;
                }
                if (mail.itemList.length > 0 && !mail.IsRewardGot) {
                    continue;
                }
                deleteList.push(mail.uuid);
            }
            if (deleteList.length == 0) {
                Game.system.toastMsg(MsgKey.non_deletable_mail);
            }
            else {
                this.lastDelectMail = deleteList;
                Game.protosender.Mail.MailDeleteMany(deleteList);
            }
        };
        MailModel.prototype.RewardAll = function () {
            var mailList = this.GetMailList();
            var rewardMailList = [];
            var itemNums = 0;
            var isFull = false;
            var isLicenceLimit = false;
            var licenceAddNum = 0;
            var Movie_Licence_ID = Game.config.global.getConfig(GlobalKey.Movie_Licence_ID).value;
            for (var _i = 0, mailList_2 = mailList; _i < mailList_2.length; _i++) {
                var mail = mailList_2[_i];
                if (mail.itemList.length == 0 || mail.IsRewardGot) {
                    continue;
                }
                var thItems = 0;
                var thLicenceNum = 0;
                for (var _a = 0, _b = mail.itemList; _a < _b.length; _a++) {
                    var item = _b[_a];
                    var cfg = Game.config.item.getConfig(item.itemId);
                    if (cfg && cfg.type == 4) {
                        thItems += item.amount;
                    }
                    if (item.itemId == Movie_Licence_ID) {
                        thLicenceNum += item.amount;
                    }
                }
                if (item.itemId == Movie_Licence_ID) {
                    if (Game.moduleModel.bag.IsLicenceFull(item.itemId, item.amount + licenceAddNum)) {
                        isLicenceLimit = true;
                        continue;
                    }
                    else {
                        licenceAddNum++;
                    }
                }
                if (Game.moduleModel.bag.IsBagFull(itemNums + thItems)) {
                    isFull = true;
                    continue;
                }
                itemNums += thItems;
                rewardMailList.push(mail.uuid);
            }
            if (rewardMailList.length > 0) {
                Game.protosender.Mail.MailGetRewardMany(rewardMailList);
            }
            if (isFull) {
                Game.system.toastMsg(MsgKey.produce_warehouse_max);
            }
            if (isLicenceLimit) {
                Game.system.toastText(Games.TEXT.LincenceMax);
            }
            if ((!isLicenceLimit && !isFull) && rewardMailList.length == 0) {
                Game.system.toastMsg(MsgKey.non_can_receive_mail);
            }
        };
        Object.defineProperty(MailModel.prototype, "RedNum", {
            get: function () {
                var mailList = this.GetMailList();
                var num = 0;
                for (var index = 0; index < mailList.length; index++) {
                    var mail = mailList[index];
                    if (mail.IsNew) {
                        num++;
                    }
                }
                return Math.min(num, 999);
            },
            enumerable: true,
            configurable: true
        });
        return MailModel;
    }(Games.MModel));
    Games.MailModel = MailModel;
})(Games || (Games = {}));
//# sourceMappingURL=MailModel.js.map