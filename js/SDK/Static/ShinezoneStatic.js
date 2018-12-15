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
    var HttpRequest = laya.net.HttpRequest;
    var Event = laya.events.Event;
    var ShinezoneStatic = /** @class */ (function (_super) {
        __extends(ShinezoneStatic, _super);
        function ShinezoneStatic() {
            var _this = _super.call(this) || this;
            _this.DEFAULT_URL = "http://52.1.149.109:81/logs";
            _this.msgList = [];
            _this.httpErrorNum = 0;
            _this.httpIsSending = false;
            var httpRequest = new HttpRequest();
            httpRequest.http.timeout = 10000;
            httpRequest.on(Event.COMPLETE, _this, _this.onHttpComplete);
            httpRequest.on(Event.ERROR, _this, _this.onHttpError);
            _this.httpRequest = httpRequest;
            return _this;
        }
        Object.defineProperty(ShinezoneStatic.prototype, "url", {
            get: function () {
                if (!Games.ChannelManager.getInstance().serverItem || !Games.ChannelManager.getInstance().serverItem.staticUrl) {
                    return this.DEFAULT_URL;
                }
                return Games.ChannelManager.getInstance().serverItem.staticUrl;
            },
            enumerable: true,
            configurable: true
        });
        ShinezoneStatic.prototype.onRegistation = function (first) {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "User_info";
            this.baseDate(sm);
            sm.tid = format("name:{0}|gdr:|loc:|uname:|tz:|em:|", User.info.name); // + ":|gdr:|loc:|" + User.account.userId + ":|tz:|em:|";
            sm.value = 0;
            sm.value2 = 0;
            this.sendHttp(msg);
        };
        ShinezoneStatic.prototype.onInstall = function () {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "install";
            sm.rtime = Games.StaticAttributes.Instance.DateTimeFormat();
            sm.time = Games.StaticAttributes.Instance.DateTimeFormat();
            sm.value = 2;
            sm.value2 = 1;
            sm.uid = Games.StaticAttributes.Instance.DeviceId;
            sm.token = Games.StaticAttributes.Instance.curToken;
            this.sendHttp(msg);
        };
        ShinezoneStatic.prototype.onloadstart = function (isForceSend) {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "visit_web";
            this.baseDate(sm);
            sm.value = 0;
            sm.value2 = 0;
            this.sendHttp(msg);
        };
        ShinezoneStatic.prototype.onLoadStep = function (loadStep) {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "load_step";
            this.baseDate(sm);
            sm.item = loadStep;
            sm.value = 0;
            sm.value2 = 0;
            this.sendHttp(msg);
        };
        ShinezoneStatic.prototype.onLoadEnd = function () {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "explorer";
            this.baseDate(sm);
            sm.tid = "device_info";
            sm.item = format("device:{2}|debug:false|os:{1}|width:|height:|memory:|network:|deviceId:{0}|", Games.StaticAttributes.Instance.DeviceId, BrowserDetect.deviceInfo["os"], BrowserDetect.deviceInfo["devicename"]);
            sm.value = 2;
            sm.value2 = 0;
            this.sendHttp(msg);
        };
        ShinezoneStatic.prototype.onPurchase = function (dollar, order_id, item, confId) {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "FB_Credit";
            this.baseDate(sm);
            sm.tid = order_id;
            sm.item = item;
            sm.value = dollar * 10;
            sm.value2 = 0;
            this.sendHttp(msg);
        };
        // 是否已经初始化 首次登录资源信息
        ShinezoneStatic.prototype.onUserItemInfo = function () {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "User_item_info";
            this.baseDate(sm);
            sm.tid = "";
            var itemConfig = Game.config.item.getConfigList();
            for (var i = 0; i < itemConfig.length; i++) {
                if (itemConfig[i].User_item_info === 1) {
                    var itemCount = Game.moduleModel.item.getItemNum(itemConfig[i].id);
                    sm.tid += format("{0}:{1}|", itemConfig[i].id, itemCount);
                }
            }
            sm.item = "";
            sm.value = 0;
            sm.value2 = 0;
            this.sendHttp(msg);
        };
        ShinezoneStatic.prototype.onUserStatus = function () {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "user_status";
            this.baseDate(sm);
            sm.tid = "status_info";
            sm.item = User.info.stall + "&" + Game.moduleModel.rank.SelfGroupRank + "&" + Game.moduleModel.rank.SelfServerRank;
            sm.value = 0;
            sm.value2 = 0;
            this.sendHttp(msg);
        };
        /**
         * 记录行为
         * 解锁
         */
        ShinezoneStatic.prototype.onUserorbit = function (tid, item, action) {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "userorbit";
            this.baseDate(sm);
            sm.tid = format("Module:{0}|action:{1}|", tid, action);
            sm.item = item;
            sm.value = 1;
            sm.value2 = 0;
            this.sendHttp(msg);
        };
        /**
         * 记录升级解锁
         * 升级
         */
        ShinezoneStatic.prototype.onUpgrdae = function (tid, item, fromlevel, changelev, targetlev) {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "upgrade";
            this.baseDate(sm);
            sm.tid = format("objective:{0}|item:{1}|", tid, item);
            sm.item = format("fromlevel:{0}|changelev:{1}|targetlev:{2}|", fromlevel, changelev, targetlev);
            sm.value = 1;
            sm.value2 = 0;
            this.sendHttp(msg);
        };
        /**
         * 记录消耗
         * 解锁消耗
         */
        ShinezoneStatic.prototype.onResourceinput = function (item, type, grade, id) {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "resourceinput";
            this.baseDate(sm);
            sm.tid = "";
            if (item.length > 0) {
                for (var i = 0; i < item.length; i++) {
                    sm.tid += format("{0}:{1}|", item[i].itemId, item[i].itemNum);
                }
            }
            if (grade === -1) {
                sm.item = type;
            }
            else {
                if (id === -1) {
                    sm.item = format("{0}&{1}", type, grade);
                }
                else {
                    sm.item = format("{0}&{1}&{2}", type, grade, id);
                }
            }
            sm.value = 0;
            sm.value2 = 0;
            this.sendHttp(msg);
        };
        /**
         * 记录产出
         */
        ShinezoneStatic.prototype.onResourceoutput = function (item, type, id) {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "resourceoutput";
            this.baseDate(sm);
            sm.tid = "";
            if (item.length > 0) {
                for (var i = 0; i < item.length; i++) {
                    sm.tid += format("{0}:{1}|", item[i].itemId, item[i].itemNum);
                }
            }
            if (id && id.length > 1) {
                sm.item = format("{0}&{1}", type, id);
            }
            else {
                sm.item = type;
            }
            sm.value = 0;
            sm.value2 = 0;
            this.sendHttp(msg);
        };
        /**
         * 消耗钻石
         * @param item
         */
        ShinezoneStatic.prototype.onUseGold = function (item, cost, market) {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "Use_Gold";
            this.baseDate(sm);
            sm.item = market + item;
            sm.value = cost;
            sm.value2 = 0;
            this.sendHttp(msg);
        };
        ShinezoneStatic.prototype.onFinishTutorial = function (id) {
            var msg = new Games.StatisProto();
            msg.time = Game.time.serverSeconds;
            var sm = msg.message;
            sm.act = "tutorial-step";
            this.baseDate(sm);
            sm.item = id.toString();
            this.sendHttp(msg);
        };
        // 基础数据赋值
        ShinezoneStatic.prototype.baseDate = function (sm) {
            sm.rtime = Games.StaticAttributes.Instance.rTime;
            sm.time = Games.StaticAttributes.Instance.lTime;
            sm.uid = Games.StaticAttributes.Instance.uuid;
            sm.cash = Games.StaticAttributes.Instance.cashs;
            sm.coin = Games.StaticAttributes.Instance.coins;
            sm.level = Games.StaticAttributes.Instance.levels;
            sm.token = Games.StaticAttributes.Instance.curToken;
        };
        ShinezoneStatic.prototype.sendHttp = function (msg) {
            if (Games.StaticAttributes.Instance.enableShinezone) {
                this.msgList.push(msg);
                if (!this.httpIsSending)
                    this.dohttpSend();
            }
        };
        ShinezoneStatic.prototype.dohttpSend = function () {
            if (this.msgList.length == 0)
                return;
            if (!this.httpRequest)
                return;
            this.httpIsSending = true;
            var msg = this.msgList[0];
            console.log(this.url + " Static Data burying point :======================  " + msg.message.act + "\n" + msg.toJson());
            this.httpRequest.send(this.url, msg.toJson(), "post", "json", ShinezoneStatic.HEADERS);
        };
        ShinezoneStatic.prototype.onHttpComplete = function (msg) {
            console.log("Static onHttpComplete: " + msg);
            this.httpErrorNum = 0;
            this.httpIsSending = false;
            this.msgList.shift();
            this.dohttpSend();
        };
        ShinezoneStatic.prototype.onHttpError = function (data) {
            if (data && data.toString().indexOf("success")) {
                this.onHttpComplete({});
                return;
            }
            console.log("Static onHttpError: " + data);
            this.httpIsSending = false;
            this.httpErrorNum++;
            if (this.httpErrorNum < 1) {
                this.dohttpSend();
            }
        };
        ShinezoneStatic.HEADERS = ["content-type", "application/json", "accept-language", "zh-CN"];
        return ShinezoneStatic;
    }(Games.StaticAbstractDispatch));
    Games.ShinezoneStatic = ShinezoneStatic;
})(Games || (Games = {}));
//# sourceMappingURL=ShinezoneStatic.js.map