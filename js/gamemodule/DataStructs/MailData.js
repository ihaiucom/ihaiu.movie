var Games;
(function (Games) {
    var MailData = /** @class */ (function () {
        function MailData() {
            this.uuid = "";
            this.title = ""; // 标题
            this.content = ""; // 内容
            this.itemList = null; // 奖励列表
            this.createTime = 0; // 创建时间
            this.IsRewardGot = false;
            this.isNew = false; // 是否是新邮件
        }
        MailData.Create = function (data) {
            var item = new MailData();
            item.content = data.content;
            item.itemList = data.itemList;
            item.createTime = data.createTime;
            item.IsRewardGot = data.IsRewardGot;
            item.isNew = data.isNew;
            item.title = data.title;
            item.uuid = data.uuid;
            return item;
        };
        Object.defineProperty(MailData.prototype, "IsNew", {
            get: function () {
                if (this.itemList.length > 0) {
                    return this.isNew && !this.IsRewardGot;
                }
                return this.isNew;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MailData.prototype, "HasReward", {
            get: function () {
                return this.itemList.length > 0 && !this.IsRewardGot;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MailData.prototype, "HasGetReward", {
            get: function () {
                return this.itemList.length > 0 && this.IsRewardGot;
            },
            enumerable: true,
            configurable: true
        });
        return MailData;
    }());
    Games.MailData = MailData;
})(Games || (Games = {}));
//# sourceMappingURL=MailData.js.map