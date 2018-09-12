/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    //====================
    // 消息处理器列表
    //--------------------
    var ProtoHandlerList = /** @class */ (function () {
        function ProtoHandlerList() {
            this.list = [];
            // 0 moduleName
            // 1 moduleHandlerClassName
            this.account = new Games.accountHandler();
            this.ClientGM = new Games.ClientGMHandler();
            this.GameData = new Games.GameDataHandler();
            this.CinemaBuild = new Games.CinemaBuildHandler();
            this.test = new Games.testHandler();
            this.item = new Games.itemHandler();
            this.city = new Games.cityHandler();
            this.movie = new Games.movieHandler();
            this.Actor = new Games.ActorHandler();
            this.story = new Games.storyHandler();
            this.manageOrder = new Games.manageOrderHandler();
            this.progressBox = new Games.progressBoxHandler();
            this.manageProduce = new Games.manageProduceHandler();
            this.rank = new Games.rankHandler();
            this.task = new Games.taskHandler();
            this.mall = new Games.mallHandler();
            this.Mail = new Games.MailHandler();
            this.Gift = new Games.GiftHandler();
            this.manageBusiness = new Games.manageBusinessHandler();
            this.manageVisit = new Games.manageVisitHandler();
            this.manageMeeting = new Games.manageMeetingHandler();
            this.dailySign = new Games.dailySignHandler();
            this.secretary = new Games.secretaryHandler();
            this.sevenAddUp = new Games.sevenAddUpHandler();
            this.BeginnerGuide = new Games.BeginnerGuideHandler();
            this.Danmu = new Games.DanmuHandler();
            this.cooperate = new Games.cooperateHandler();
        }
        // 初始化
        ProtoHandlerList.prototype.install = function () {
            this.initList();
        };
        // 初始化列表
        ProtoHandlerList.prototype.initList = function () {
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
        };
        return ProtoHandlerList;
    }());
    Games.ProtoHandlerList = ProtoHandlerList;
})(Games || (Games = {}));
//# sourceMappingURL=ProtoHandlerList.js.map