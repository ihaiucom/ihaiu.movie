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
    var movie = Proto.API.movie;
    //====================
    // 消息发送器 -- 账号
    //--------------------
    var movieSender = /** @class */ (function (_super) {
        __extends(movieSender, _super);
        function movieSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.movie;
            _this.sendRequyireDict = new Dictionary();
            return _this;
        }
        /**
         * 发送拍摄请求
         */
        movieSender.prototype.MakeFilm = function () {
            var reqData = new movie.MakeFilmRequest();
            this.mySend(reqData);
        };
        /**
         * 修改剧本名称
         * @param newName
         */
        movieSender.prototype.SetMovieName = function (newName) {
            var reqData = new movie.SetMovieNameRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            reqData.index = Game.moduleModel.warData.filmIndexOf;
            reqData.name = newName;
            this.mySend(reqData);
        };
        /**
         * 设置当前电影的艺人
         * @param index 艺人在第几个位置
         * @param actorId 艺人id
         */
        movieSender.prototype.SetActor = function (index, actorId) {
            var reqData = new movie.SetActorRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            reqData.index = index;
            reqData.actorId = actorId;
            this.send(reqData, false, false);
        };
        /**
         * 确认艺人选择全部结束
         */
        movieSender.prototype.ConfirmSetActor = function () {
            var reqData = new movie.ConfirmSetActorRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            this.mySend(reqData);
        };
        /**
         * 电影类型选择
         * @param type
         */
        movieSender.prototype.ChoseType = function (type) {
            var reqData = new movie.ChoseTypeRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            reqData.type = type;
            this.mySend(reqData);
        };
        /**
         * 院线选择请求
         */
        movieSender.prototype.PublishMovie = function (theaterId) {
            var reqData = new movie.PublishMovieRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            reqData.theaterId = theaterId;
            this.mySend(reqData);
        };
        /**
         * 上映结束，准备进入持续收益阶段
         */
        movieSender.prototype.BattleOver = function () {
            var reqData = new movie.BattleOverRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            this.mySend(reqData);
        };
        /**
         * 请求通告
         * @param mediaId
         */
        movieSender.prototype.AcceptMediaVisit = function (mediaId) {
            var reqData = new movie.AcceptMediaVisitRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            reqData.mediaId = mediaId;
            this.send(reqData, false, false);
        };
        /**
         * 上传电影状态
         */
        movieSender.prototype.UpdateMovieState = function (state) {
            var reqData = new movie.UpdateMovieStateRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            reqData.state = state;
            this.mySend(reqData);
        };
        /**
         * 领取收益
         */
        movieSender.prototype.GetRewardMovie = function (uuid) {
            var reqData = new movie.GetRewardMovieRequest();
            reqData.uuid = uuid;
            this.send(reqData, false, false);
        };
        /**
         * 领取剧本目标奖励
         */
        movieSender.prototype.GetStoryGoals = function () {
            var reqData = new movie.GetStoryGoalsRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            this.mySend(reqData);
        };
        /**
         * 删除电影
         * @param uuid
         */
        movieSender.prototype.DeleteMovie = function (uuid) {
            var reqData = new movie.DeleteMovieRequest();
            reqData.uuid = uuid;
            this.mySend(reqData);
        };
        /**
         *  推广电影
         * @param uuid   电影唯一编号
         */
        movieSender.prototype.SpreadMovie = function (uuid) {
            var req = new Proto.API.movie.SpreadMovieRequest();
            req.uuid = uuid;
            this.send(req, false, false);
        };
        /**
         * 切换城市
         * @param uuid  电影唯一编号
         * @param cityId  城市ID
         */
        movieSender.prototype.SwitchCity = function (uuid, cityId) {
            var req = new Proto.API.movie.SwitchCityRequest();
            req.uuid = uuid;
            req.cityId = cityId;
            this.send(req, false, false);
        };
        movieSender.prototype.mySend = function (msg) {
            var clsname = getClassName(msg).replace("Request", "");
            var lastMsg = this.sendRequyireDict.getValue(clsname);
            if (lastMsg && lastMsg["__isRespond"] === false) {
                return;
            }
            this.sendRequyireDict.add(clsname, msg);
            msg["__isRespond"] = false;
            this.send(msg, false, false);
        };
        /**
         *  刷新电影剧本
         * @param uuid   电影唯一编号
         */
        movieSender.prototype.RefreshMovieStory = function (uuid) {
            var req = new Proto.API.movie.RefreshMovieStoryRequest();
            req.uuid = uuid;
            this.send(req);
        };
        return movieSender;
    }(Games.ProtoSender));
    Games.movieSender = movieSender;
})(Games || (Games = {}));
//# sourceMappingURL=movieSender.js.map