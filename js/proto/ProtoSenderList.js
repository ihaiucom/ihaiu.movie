/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    //====================
    // 消息发送器列表
    //--------------------
    var ProtoSenderList = /** @class */ (function () {
        function ProtoSenderList() {
            this.list = [];
            // 0 moduleName
            // 1 moduleSenderClassName
            this.account = new Games.accountSender();
            this.ClientGM = new Games.ClientGMSender();
            this.GameData = new Games.GameDataSender();
            this.CinemaBuild = new Games.CinemaBuildSender();
            this.test = new Games.testSender();
            this.item = new Games.itemSender();
            this.city = new Games.citySender();
            this.movie = new Games.movieSender();
            this.Actor = new Games.ActorSender();
            this.story = new Games.storySender();
            this.manageOrder = new Games.manageOrderSender();
            this.progressBox = new Games.progressBoxSender();
            this.manageProduce = new Games.manageProduceSender();
            this.rank = new Games.rankSender();
            this.task = new Games.taskSender();
            this.mall = new Games.mallSender();
            this.Mail = new Games.MailSender();
            this.Gift = new Games.GiftSender();
            this.manageBusiness = new Games.manageBusinessSender();
            this.manageVisit = new Games.manageVisitSender();
            this.manageMeeting = new Games.manageMeetingSender();
            this.dailySign = new Games.dailySignSender();
            this.secretary = new Games.secretarySender();
            this.sevenAddUp = new Games.sevenAddUpSender();
            this.BeginnerGuide = new Games.BeginnerGuideSender();
            this.Danmu = new Games.DanmuSender();
            this.cooperate = new Games.cooperateSender();
            this.pay = new Games.paySender();
            this.chat = new Games.chatSender();
            this.smallTarget = new Games.smallTargetSender();
        }
        // 初始化
        ProtoSenderList.prototype.install = function () {
            this.initList();
        };
        // 初始化列表
        ProtoSenderList.prototype.initList = function () {
            this.list.push(this.account);
            this.list.push(this.ClientGM);
            this.list.push(this.GameData);
            this.list.push(this.CinemaBuild);
            this.list.push(this.test);
            this.list.push(this.item);
            this.list.push(this.city);
            this.list.push(this.movie);
            this.list.push(this.Actor);
            this.list.push(this.story);
            this.list.push(this.manageOrder);
            this.list.push(this.progressBox);
            this.list.push(this.manageProduce);
            this.list.push(this.rank);
            this.list.push(this.task);
            this.list.push(this.mall);
            this.list.push(this.Mail);
            this.list.push(this.Gift);
            this.list.push(this.manageBusiness);
            this.list.push(this.manageVisit);
            this.list.push(this.manageMeeting);
            this.list.push(this.dailySign);
            this.list.push(this.secretary);
            this.list.push(this.sevenAddUp);
            this.list.push(this.BeginnerGuide);
            this.list.push(this.Danmu);
            this.list.push(this.cooperate);
            this.list.push(this.pay);
            this.list.push(this.chat);
            this.list.push(this.smallTarget);
        };
        return ProtoSenderList;
    }());
    Games.ProtoSenderList = ProtoSenderList;
})(Games || (Games = {}));
//# sourceMappingURL=ProtoSenderList.js.map