/**
 *  MADE BY GENERATOR AT 2018-9-11 20:03:41,
 *  PLEASE DO NOT REWRITE.
 */
var Proto;
(function (Proto) {
    var API;
    (function (API) {
        var GameData;
        (function (GameData) {
            var AuthRequest = /** @class */ (function () {
                function AuthRequest() {
                    this.pass = ""; // 密码
                }
                return AuthRequest;
            }());
            GameData.AuthRequest = AuthRequest;
            var AuthResponse = /** @class */ (function () {
                function AuthResponse() {
                    this.result = 0; // 返回 0成功 1失败
                }
                return AuthResponse;
            }());
            GameData.AuthResponse = AuthResponse;
            var InitGameDataRequest = /** @class */ (function () {
                function InitGameDataRequest() {
                    this.name = ""; // 公司名字
                    this.sex = 0; // 性别
                }
                return InitGameDataRequest;
            }());
            GameData.InitGameDataRequest = InitGameDataRequest;
            var InitGameDataResponse = /** @class */ (function () {
                function InitGameDataResponse() {
                    this.result = 0; // 返回 0成功 1失败
                }
                return InitGameDataResponse;
            }());
            GameData.InitGameDataResponse = InitGameDataResponse;
            var GetLoginGameDataRequest = /** @class */ (function () {
                function GetLoginGameDataRequest() {
                    this.pass = ""; // 密码
                    this.channel = ""; // 客户端的渠道代码
                }
                return GetLoginGameDataRequest;
            }());
            GameData.GetLoginGameDataRequest = GetLoginGameDataRequest;
            var GetLoginGameDataResponse = /** @class */ (function () {
                function GetLoginGameDataResponse() {
                    this.serverCode = ""; // 服务器编号
                    this.serverName = ""; // 服务器名称
                    this.noticeList = null;
                }
                return GetLoginGameDataResponse;
            }());
            GameData.GetLoginGameDataResponse = GetLoginGameDataResponse;
            var GetInitGameDataRequest = /** @class */ (function () {
                function GetInitGameDataRequest() {
                    this.nameList = null; // 需要获取的类型的string描述 DBOType枚举
                }
                return GetInitGameDataRequest;
            }());
            GameData.GetInitGameDataRequest = GetInitGameDataRequest;
            var GetInitGameDataResponse = /** @class */ (function () {
                function GetInitGameDataResponse() {
                }
                return GetInitGameDataResponse;
            }());
            GameData.GetInitGameDataResponse = GetInitGameDataResponse;
            var RenameGameDataRequest = /** @class */ (function () {
                function RenameGameDataRequest() {
                    this.playerName = ""; // 更改后的名字
                }
                return RenameGameDataRequest;
            }());
            GameData.RenameGameDataRequest = RenameGameDataRequest;
            var RenameGameDataResponse = /** @class */ (function () {
                function RenameGameDataResponse() {
                    this.result = 0; // 返回 0成功 1失败 2无须更改
                }
                return RenameGameDataResponse;
            }());
            GameData.RenameGameDataResponse = RenameGameDataResponse;
            var RePerSignatureGameDataRequest = /** @class */ (function () {
                function RePerSignatureGameDataRequest() {
                    this.perSignature = ""; // 修改玩家的个性签名
                }
                return RePerSignatureGameDataRequest;
            }());
            GameData.RePerSignatureGameDataRequest = RePerSignatureGameDataRequest;
            var RePerSignatureGameDataResponse = /** @class */ (function () {
                function RePerSignatureGameDataResponse() {
                    this.result = 0; // 返回 0成功 1失败
                }
                return RePerSignatureGameDataResponse;
            }());
            GameData.RePerSignatureGameDataResponse = RePerSignatureGameDataResponse;
            var RePortraitGameDataRequest = /** @class */ (function () {
                function RePortraitGameDataRequest() {
                    this.type = 0; // 0表示穿戴 1表示购买
                    this.portraitId = 0; // 头像ID
                }
                return RePortraitGameDataRequest;
            }());
            GameData.RePortraitGameDataRequest = RePortraitGameDataRequest;
            var RePortraitGameDataResponse = /** @class */ (function () {
                function RePortraitGameDataResponse() {
                    this.result = 0; // 返回 0成功 1失败 2无须更改
                }
                return RePortraitGameDataResponse;
            }());
            GameData.RePortraitGameDataResponse = RePortraitGameDataResponse;
            var GetGameInfoExtRequest = /** @class */ (function () {
                function GetGameInfoExtRequest() {
                }
                return GetGameInfoExtRequest;
            }());
            GameData.GetGameInfoExtRequest = GetGameInfoExtRequest;
            var GetGameInfoExtResponse = /** @class */ (function () {
                function GetGameInfoExtResponse() {
                }
                return GetGameInfoExtResponse;
            }());
            GameData.GetGameInfoExtResponse = GetGameInfoExtResponse;
            var GetInitActorRequest = /** @class */ (function () {
                function GetInitActorRequest() {
                    this.index = 0;
                }
                return GetInitActorRequest;
            }());
            GameData.GetInitActorRequest = GetInitActorRequest;
            var GetInitActorResponse = /** @class */ (function () {
                function GetInitActorResponse() {
                }
                return GetInitActorResponse;
            }());
            GameData.GetInitActorResponse = GetInitActorResponse;
            var GetNoticeListRequest = /** @class */ (function () {
                function GetNoticeListRequest() {
                }
                return GetNoticeListRequest;
            }());
            GameData.GetNoticeListRequest = GetNoticeListRequest;
            var GetNoticeListResponse = /** @class */ (function () {
                function GetNoticeListResponse() {
                    this.noticeList = null;
                }
                return GetNoticeListResponse;
            }());
            GameData.GetNoticeListResponse = GetNoticeListResponse;
        })(GameData = API.GameData || (API.GameData = {}));
        var CinemaBuild;
        (function (CinemaBuild) {
            var ExtendFloorRequest = /** @class */ (function () {
                function ExtendFloorRequest() {
                    this.floor = 0; // 楼层数
                }
                return ExtendFloorRequest;
            }());
            CinemaBuild.ExtendFloorRequest = ExtendFloorRequest;
            var ExtendFloorResponse = /** @class */ (function () {
                function ExtendFloorResponse() {
                    this.result = 0; // 0,成功，非0，错误码
                    this.floor = 0; // 当前扩充的楼层数
                }
                return ExtendFloorResponse;
            }());
            CinemaBuild.ExtendFloorResponse = ExtendFloorResponse;
            var BuildRoomRequest = /** @class */ (function () {
                function BuildRoomRequest() {
                    this.floor = 0; // 楼层数
                    this.roomType = 0; // 建筑类型
                }
                return BuildRoomRequest;
            }());
            CinemaBuild.BuildRoomRequest = BuildRoomRequest;
            var BuildRoomResponse = /** @class */ (function () {
                function BuildRoomResponse() {
                    this.result = 0; // 0,成功，非0，错误码
                    this.floor = 0; // 楼层数
                    this.roomId = 0; // 建筑id
                }
                return BuildRoomResponse;
            }());
            CinemaBuild.BuildRoomResponse = BuildRoomResponse;
            var UpgradeRoomRequest = /** @class */ (function () {
                function UpgradeRoomRequest() {
                    this.roomId = 0; // 建筑id
                }
                return UpgradeRoomRequest;
            }());
            CinemaBuild.UpgradeRoomRequest = UpgradeRoomRequest;
            var UpgradeRoomResponse = /** @class */ (function () {
                function UpgradeRoomResponse() {
                    this.result = 0; // 0,成功，非0，错误码
                    this.preRoomId = 0; // 升级前的房间id
                    this.roomId = 0; // 建筑id
                }
                return UpgradeRoomResponse;
            }());
            CinemaBuild.UpgradeRoomResponse = UpgradeRoomResponse;
        })(CinemaBuild = API.CinemaBuild || (API.CinemaBuild = {}));
        var test;
        (function (test) {
            var AddItemRequest = /** @class */ (function () {
                function AddItemRequest() {
                    this.itemId = 0; // 道具id
                    this.amount = 0; // 道具数量
                }
                return AddItemRequest;
            }());
            test.AddItemRequest = AddItemRequest;
            var AddItemResponse = /** @class */ (function () {
                function AddItemResponse() {
                }
                return AddItemResponse;
            }());
            test.AddItemResponse = AddItemResponse;
            var AddFansRequest = /** @class */ (function () {
                function AddFansRequest() {
                    this.amount = 0; // 粉丝数量
                }
                return AddFansRequest;
            }());
            test.AddFansRequest = AddFansRequest;
            var AddFansResponse = /** @class */ (function () {
                function AddFansResponse() {
                }
                return AddFansResponse;
            }());
            test.AddFansResponse = AddFansResponse;
            var AddExpectRequest = /** @class */ (function () {
                function AddExpectRequest() {
                    this.amount = 0; // 期待值数量
                }
                return AddExpectRequest;
            }());
            test.AddExpectRequest = AddExpectRequest;
            var AddExpectResponse = /** @class */ (function () {
                function AddExpectResponse() {
                }
                return AddExpectResponse;
            }());
            test.AddExpectResponse = AddExpectResponse;
            var DeleteMovieRequest = /** @class */ (function () {
                function DeleteMovieRequest() {
                    this.uuid = ""; // 电影id
                }
                return DeleteMovieRequest;
            }());
            test.DeleteMovieRequest = DeleteMovieRequest;
            var DeleteMovieResponse = /** @class */ (function () {
                function DeleteMovieResponse() {
                }
                return DeleteMovieResponse;
            }());
            test.DeleteMovieResponse = DeleteMovieResponse;
            var AddStarStoryRequest = /** @class */ (function () {
                function AddStarStoryRequest() {
                    this.starId = 0; // 剧本星级
                    this.amount = 0; // 数量
                }
                return AddStarStoryRequest;
            }());
            test.AddStarStoryRequest = AddStarStoryRequest;
            var AddStarStoryResponse = /** @class */ (function () {
                function AddStarStoryResponse() {
                }
                return AddStarStoryResponse;
            }());
            test.AddStarStoryResponse = AddStarStoryResponse;
            var AddStoryRequest = /** @class */ (function () {
                function AddStoryRequest() {
                    this.storyId = 0; // 剧本id
                }
                return AddStoryRequest;
            }());
            test.AddStoryRequest = AddStoryRequest;
            var AddStoryResponse = /** @class */ (function () {
                function AddStoryResponse() {
                }
                return AddStoryResponse;
            }());
            test.AddStoryResponse = AddStoryResponse;
            var AddActorSkillExpRequest = /** @class */ (function () {
                function AddActorSkillExpRequest() {
                    this.actorId = 0; // 艺人id
                    this.amount = 0;
                }
                return AddActorSkillExpRequest;
            }());
            test.AddActorSkillExpRequest = AddActorSkillExpRequest;
            var AddActorSkillExpResponse = /** @class */ (function () {
                function AddActorSkillExpResponse() {
                }
                return AddActorSkillExpResponse;
            }());
            test.AddActorSkillExpResponse = AddActorSkillExpResponse;
            var AddStoryProgressRequest = /** @class */ (function () {
                function AddStoryProgressRequest() {
                    this.storyId = 0; // 剧本唯一ID
                    this.index = 0; // 哪一个
                }
                return AddStoryProgressRequest;
            }());
            test.AddStoryProgressRequest = AddStoryProgressRequest;
            var AddStoryProgressResponse = /** @class */ (function () {
                function AddStoryProgressResponse() {
                }
                return AddStoryProgressResponse;
            }());
            test.AddStoryProgressResponse = AddStoryProgressResponse;
            var FinishGuideRequest = /** @class */ (function () {
                function FinishGuideRequest() {
                }
                return FinishGuideRequest;
            }());
            test.FinishGuideRequest = FinishGuideRequest;
            var FinishGuideResponse = /** @class */ (function () {
                function FinishGuideResponse() {
                }
                return FinishGuideResponse;
            }());
            test.FinishGuideResponse = FinishGuideResponse;
            var debugRequest = /** @class */ (function () {
                function debugRequest() {
                    this.num = 0;
                }
                return debugRequest;
            }());
            test.debugRequest = debugRequest;
            var debugResponse = /** @class */ (function () {
                function debugResponse() {
                }
                return debugResponse;
            }());
            test.debugResponse = debugResponse;
            var AddGiftRequest = /** @class */ (function () {
                function AddGiftRequest() {
                    this.giftUuid = ""; // 兑换码
                    this.giftId = 0; // 兑换码配置文件 id
                    this.targetId = 0; // 指定使用者
                    this.startTime = 0; // 开始时间
                    this.endTime = 0; // 结束时间
                    this.total = 0; // 总共可用次数
                }
                return AddGiftRequest;
            }());
            test.AddGiftRequest = AddGiftRequest;
            var AddGiftResponse = /** @class */ (function () {
                function AddGiftResponse() {
                }
                return AddGiftResponse;
            }());
            test.AddGiftResponse = AddGiftResponse;
            var SetBlockLevelRequest = /** @class */ (function () {
                function SetBlockLevelRequest() {
                    this.level = 0; // 街区等级
                }
                return SetBlockLevelRequest;
            }());
            test.SetBlockLevelRequest = SetBlockLevelRequest;
            var SetBlockLevelResponse = /** @class */ (function () {
                function SetBlockLevelResponse() {
                }
                return SetBlockLevelResponse;
            }());
            test.SetBlockLevelResponse = SetBlockLevelResponse;
            var RefreshTimeRequest = /** @class */ (function () {
                function RefreshTimeRequest() {
                    this.type = 0; // 刷新类型
                }
                return RefreshTimeRequest;
            }());
            test.RefreshTimeRequest = RefreshTimeRequest;
            var RefreshTimeResponse = /** @class */ (function () {
                function RefreshTimeResponse() {
                }
                return RefreshTimeResponse;
            }());
            test.RefreshTimeResponse = RefreshTimeResponse;
            var PutOrderItemsRequest = /** @class */ (function () {
                function PutOrderItemsRequest() {
                    this.uuid = ""; // 唯一订单编号
                }
                return PutOrderItemsRequest;
            }());
            test.PutOrderItemsRequest = PutOrderItemsRequest;
            var PutOrderItemsResponse = /** @class */ (function () {
                function PutOrderItemsResponse() {
                    this.uuid = ""; // 唯一订单编号
                }
                return PutOrderItemsResponse;
            }());
            test.PutOrderItemsResponse = PutOrderItemsResponse;
            var GetAutoCooperateRequest = /** @class */ (function () {
                function GetAutoCooperateRequest() {
                }
                return GetAutoCooperateRequest;
            }());
            test.GetAutoCooperateRequest = GetAutoCooperateRequest;
            var GetAutoCooperateResponse = /** @class */ (function () {
                function GetAutoCooperateResponse() {
                    this.loseNum = 0;
                    this.successNum = 0;
                }
                return GetAutoCooperateResponse;
            }());
            test.GetAutoCooperateResponse = GetAutoCooperateResponse;
            var UpdateOscarRequest = /** @class */ (function () {
                function UpdateOscarRequest() {
                }
                return UpdateOscarRequest;
            }());
            test.UpdateOscarRequest = UpdateOscarRequest;
            var UpdateOscarResponse = /** @class */ (function () {
                function UpdateOscarResponse() {
                }
                return UpdateOscarResponse;
            }());
            test.UpdateOscarResponse = UpdateOscarResponse;
            var setAllStoryGoldRequest = /** @class */ (function () {
                function setAllStoryGoldRequest() {
                }
                return setAllStoryGoldRequest;
            }());
            test.setAllStoryGoldRequest = setAllStoryGoldRequest;
            var setAllStoryGoldResponse = /** @class */ (function () {
                function setAllStoryGoldResponse() {
                }
                return setAllStoryGoldResponse;
            }());
            test.setAllStoryGoldResponse = setAllStoryGoldResponse;
            var LockAllProduceRequest = /** @class */ (function () {
                function LockAllProduceRequest() {
                }
                return LockAllProduceRequest;
            }());
            test.LockAllProduceRequest = LockAllProduceRequest;
            var LockAllProduceResponse = /** @class */ (function () {
                function LockAllProduceResponse() {
                }
                return LockAllProduceResponse;
            }());
            test.LockAllProduceResponse = LockAllProduceResponse;
            var SetSecretaryStatusRequest = /** @class */ (function () {
                function SetSecretaryStatusRequest() {
                    this.status = 0; // 小秘书状态
                }
                return SetSecretaryStatusRequest;
            }());
            test.SetSecretaryStatusRequest = SetSecretaryStatusRequest;
            var SetSecretaryStatusResponse = /** @class */ (function () {
                function SetSecretaryStatusResponse() {
                }
                return SetSecretaryStatusResponse;
            }());
            test.SetSecretaryStatusResponse = SetSecretaryStatusResponse;
            var CleanSecretaryTimesRequest = /** @class */ (function () {
                function CleanSecretaryTimesRequest() {
                }
                return CleanSecretaryTimesRequest;
            }());
            test.CleanSecretaryTimesRequest = CleanSecretaryTimesRequest;
            var CleanSecretaryTimesResponse = /** @class */ (function () {
                function CleanSecretaryTimesResponse() {
                }
                return CleanSecretaryTimesResponse;
            }());
            test.CleanSecretaryTimesResponse = CleanSecretaryTimesResponse;
            var GetRechargeGiftRequest = /** @class */ (function () {
                function GetRechargeGiftRequest() {
                }
                return GetRechargeGiftRequest;
            }());
            test.GetRechargeGiftRequest = GetRechargeGiftRequest;
            var GetRechargeGiftResponse = /** @class */ (function () {
                function GetRechargeGiftResponse() {
                }
                return GetRechargeGiftResponse;
            }());
            test.GetRechargeGiftResponse = GetRechargeGiftResponse;
            var GotoCityRequest = /** @class */ (function () {
                function GotoCityRequest() {
                    this.id = 0; // 1... 最后一个城市的编号
                }
                return GotoCityRequest;
            }());
            test.GotoCityRequest = GotoCityRequest;
            var GotoCityResponse = /** @class */ (function () {
                function GotoCityResponse() {
                }
                return GotoCityResponse;
            }());
            test.GotoCityResponse = GotoCityResponse;
            var GotoCityBeforeRequest = /** @class */ (function () {
                function GotoCityBeforeRequest() {
                    this.id = 0; // 1... 最后一个城市的编号
                }
                return GotoCityBeforeRequest;
            }());
            test.GotoCityBeforeRequest = GotoCityBeforeRequest;
            var GotoCityBeforeResponse = /** @class */ (function () {
                function GotoCityBeforeResponse() {
                }
                return GotoCityBeforeResponse;
            }());
            test.GotoCityBeforeResponse = GotoCityBeforeResponse;
        })(test = API.test || (API.test = {}));
        var item;
        (function (item) {
            var SellOutRequest = /** @class */ (function () {
                function SellOutRequest() {
                    this.uuid = ""; // 道具唯一编号
                    this.itemId = 0; // 道具id
                    this.amount = 0; // 道具数量
                }
                return SellOutRequest;
            }());
            item.SellOutRequest = SellOutRequest;
            var SellOutResponse = /** @class */ (function () {
                function SellOutResponse() {
                    this.uuid = ""; // 道具唯一编号
                }
                return SellOutResponse;
            }());
            item.SellOutResponse = SellOutResponse;
            var CompoundRequest = /** @class */ (function () {
                function CompoundRequest() {
                    this.uuid = ""; // 道具唯一编号
                    this.itemId = 0; // 道具id
                    this.amount = 0; // 道具数量
                }
                return CompoundRequest;
            }());
            item.CompoundRequest = CompoundRequest;
            var CompoundResponse = /** @class */ (function () {
                function CompoundResponse() {
                    this.uuid = ""; // 道具唯一编号
                }
                return CompoundResponse;
            }());
            item.CompoundResponse = CompoundResponse;
            var SplitRequest = /** @class */ (function () {
                function SplitRequest() {
                    this.uuid = ""; // 道具唯一编号
                    this.itemId = 0; // 道具id
                    this.amount = 0; // 道具数量
                }
                return SplitRequest;
            }());
            item.SplitRequest = SplitRequest;
            var SplitResponse = /** @class */ (function () {
                function SplitResponse() {
                    this.uuid = ""; // 道具唯一编号
                }
                return SplitResponse;
            }());
            item.SplitResponse = SplitResponse;
            var UseRequest = /** @class */ (function () {
                function UseRequest() {
                    this.uuid = ""; // 道具唯一编号
                    this.itemId = 0; // 道具id
                    this.amount = 0; // 道具数量
                }
                return UseRequest;
            }());
            item.UseRequest = UseRequest;
            var UseResponse = /** @class */ (function () {
                function UseResponse() {
                    this.uuid = ""; // 道具唯一编号
                    this.dropout = null; // 掉落物品
                }
                return UseResponse;
            }());
            item.UseResponse = UseResponse;
            var CompoundActorRequest = /** @class */ (function () {
                function CompoundActorRequest() {
                    this.uuid = ""; // 道具唯一编号
                    this.itemId = 0; // 道具id
                }
                return CompoundActorRequest;
            }());
            item.CompoundActorRequest = CompoundActorRequest;
            var CompoundActorResponse = /** @class */ (function () {
                function CompoundActorResponse() {
                    this.uuid = ""; // 道具唯一编号
                }
                return CompoundActorResponse;
            }());
            item.CompoundActorResponse = CompoundActorResponse;
            var UseActorSkillWaterRequest = /** @class */ (function () {
                function UseActorSkillWaterRequest() {
                    this.uuid = ""; // 道具唯一编号
                    this.actorId = 0; // 艺人id
                    this.amount = 0; // 数量
                }
                return UseActorSkillWaterRequest;
            }());
            item.UseActorSkillWaterRequest = UseActorSkillWaterRequest;
            var UseActorSkillWaterResponse = /** @class */ (function () {
                function UseActorSkillWaterResponse() {
                    this.uuid = ""; // 道具唯一编号
                }
                return UseActorSkillWaterResponse;
            }());
            item.UseActorSkillWaterResponse = UseActorSkillWaterResponse;
        })(item = API.item || (API.item = {}));
        var city;
        (function (city) {
            var SetPropagandaActorRequest = /** @class */ (function () {
                function SetPropagandaActorRequest() {
                    this.uuid = ""; // 道具唯一编号
                    this.cityId = 0; // 城市id
                    this.areaId = 0; // 区域id
                    this.actorId = 0; // 艺人id
                }
                return SetPropagandaActorRequest;
            }());
            city.SetPropagandaActorRequest = SetPropagandaActorRequest;
            var SetPropagandaActorResponse = /** @class */ (function () {
                function SetPropagandaActorResponse() {
                    this.uuid = ""; // 道具唯一编号
                }
                return SetPropagandaActorResponse;
            }());
            city.SetPropagandaActorResponse = SetPropagandaActorResponse;
            var PropagandaRequest = /** @class */ (function () {
                function PropagandaRequest() {
                    this.uuid = ""; // 道具唯一编号
                    this.cityId = 0; // 城市id
                    this.areaId = 0; // 区域id
                }
                return PropagandaRequest;
            }());
            city.PropagandaRequest = PropagandaRequest;
            var PropagandaResponse = /** @class */ (function () {
                function PropagandaResponse() {
                    this.uuid = ""; // 道具唯一编号
                }
                return PropagandaResponse;
            }());
            city.PropagandaResponse = PropagandaResponse;
            var RoadshowRequest = /** @class */ (function () {
                function RoadshowRequest() {
                    this.uuid = ""; // 道具唯一编号
                    this.cityId = 0; // 城市id
                    this.areaId = 0; // 区域id
                }
                return RoadshowRequest;
            }());
            city.RoadshowRequest = RoadshowRequest;
            var RoadshowResponse = /** @class */ (function () {
                function RoadshowResponse() {
                    this.uuid = ""; // 道具唯一编号
                    this.result = 0; // 0成功 1失败
                }
                return RoadshowResponse;
            }());
            city.RoadshowResponse = RoadshowResponse;
            var SetAmbassadorRequest = /** @class */ (function () {
                function SetAmbassadorRequest() {
                    this.uuid = ""; // 道具唯一编号
                    this.cityId = 0; // 城市id
                    this.psition = 0; // 位置1,2,3,4....
                    this.actuuid = ""; // 艺人唯一ID
                }
                return SetAmbassadorRequest;
            }());
            city.SetAmbassadorRequest = SetAmbassadorRequest;
            var SetAmbassadorResponse = /** @class */ (function () {
                function SetAmbassadorResponse() {
                    this.uuid = ""; // 道具唯一编号
                    this.dropout = null; // 掉落物品
                }
                return SetAmbassadorResponse;
            }());
            city.SetAmbassadorResponse = SetAmbassadorResponse;
            var GetRewardRequest = /** @class */ (function () {
                function GetRewardRequest() {
                    this.uuid = ""; // 唯一编号
                    this.cityId = 0; // 城市id
                }
                return GetRewardRequest;
            }());
            city.GetRewardRequest = GetRewardRequest;
            var GetRewardResponse = /** @class */ (function () {
                function GetRewardResponse() {
                    this.uuid = ""; // 唯一编号
                    this.dropout = null;
                }
                return GetRewardResponse;
            }());
            city.GetRewardResponse = GetRewardResponse;
            var HoldCityRequest = /** @class */ (function () {
                function HoldCityRequest() {
                    this.uuid = ""; // 道具唯一编号
                }
                return HoldCityRequest;
            }());
            city.HoldCityRequest = HoldCityRequest;
            var HoldCityResponse = /** @class */ (function () {
                function HoldCityResponse() {
                    this.uuid = ""; // 道具唯一编号
                }
                return HoldCityResponse;
            }());
            city.HoldCityResponse = HoldCityResponse;
        })(city = API.city || (API.city = {}));
        var movie;
        (function (movie) {
            var MakeFilmRequest = /** @class */ (function () {
                function MakeFilmRequest() {
                    this.uuid = ""; // 唯一编号
                }
                return MakeFilmRequest;
            }());
            movie.MakeFilmRequest = MakeFilmRequest;
            var MakeFilmResponse = /** @class */ (function () {
                function MakeFilmResponse() {
                    this.uuid = ""; // 唯一编号
                }
                return MakeFilmResponse;
            }());
            movie.MakeFilmResponse = MakeFilmResponse;
            var SetMovieNameRequest = /** @class */ (function () {
                function SetMovieNameRequest() {
                    this.uuid = ""; // 电影唯一编号
                    this.index = 0; // 选择的电影下标, 从0开始
                    this.name = ""; // 名字
                }
                return SetMovieNameRequest;
            }());
            movie.SetMovieNameRequest = SetMovieNameRequest;
            var SetMovieNameResponse = /** @class */ (function () {
                function SetMovieNameResponse() {
                    this.uuid = ""; // 电影唯一编号
                }
                return SetMovieNameResponse;
            }());
            movie.SetMovieNameResponse = SetMovieNameResponse;
            var SetActorRequest = /** @class */ (function () {
                function SetActorRequest() {
                    this.uuid = ""; // 电影唯一编号
                    this.index = 0; // 选择的电影下标, 从0开始
                    this.actorId = 0; // 艺人id
                }
                return SetActorRequest;
            }());
            movie.SetActorRequest = SetActorRequest;
            var SetActorResponse = /** @class */ (function () {
                function SetActorResponse() {
                    this.uuid = ""; // 电影唯一编号
                }
                return SetActorResponse;
            }());
            movie.SetActorResponse = SetActorResponse;
            var ConfirmSetActorRequest = /** @class */ (function () {
                function ConfirmSetActorRequest() {
                    this.uuid = ""; // 电影唯一编号
                }
                return ConfirmSetActorRequest;
            }());
            movie.ConfirmSetActorRequest = ConfirmSetActorRequest;
            var ConfirmSetActorResponse = /** @class */ (function () {
                function ConfirmSetActorResponse() {
                    this.uuid = ""; // 电影唯一编号
                }
                return ConfirmSetActorResponse;
            }());
            movie.ConfirmSetActorResponse = ConfirmSetActorResponse;
            var ChoseTypeRequest = /** @class */ (function () {
                function ChoseTypeRequest() {
                    this.uuid = ""; // 电影唯一编号
                    this.type = 0; // 电影类型
                }
                return ChoseTypeRequest;
            }());
            movie.ChoseTypeRequest = ChoseTypeRequest;
            var ChoseTypeResponse = /** @class */ (function () {
                function ChoseTypeResponse() {
                    this.uuid = ""; // 电影唯一编号
                    this.storyShootType = 0; // 类型契合度
                }
                return ChoseTypeResponse;
            }());
            movie.ChoseTypeResponse = ChoseTypeResponse;
            var AcceptMediaVisitRequest = /** @class */ (function () {
                function AcceptMediaVisitRequest() {
                    this.uuid = ""; // 电影唯一编号
                    this.mediaId = 0; // 媒体id
                }
                return AcceptMediaVisitRequest;
            }());
            movie.AcceptMediaVisitRequest = AcceptMediaVisitRequest;
            var AcceptMediaVisitResponse = /** @class */ (function () {
                function AcceptMediaVisitResponse() {
                    this.uuid = ""; // 电影唯一编号
                    this.addExpection = 0;
                }
                return AcceptMediaVisitResponse;
            }());
            movie.AcceptMediaVisitResponse = AcceptMediaVisitResponse;
            var PublishMovieRequest = /** @class */ (function () {
                function PublishMovieRequest() {
                    this.uuid = ""; // 电影唯一编号
                    this.theaterId = 0; // 院线id
                }
                return PublishMovieRequest;
            }());
            movie.PublishMovieRequest = PublishMovieRequest;
            var PublishMovieResponse = /** @class */ (function () {
                function PublishMovieResponse() {
                    this.uuid = ""; // 电影唯一编号
                }
                return PublishMovieResponse;
            }());
            movie.PublishMovieResponse = PublishMovieResponse;
            var BattleOverRequest = /** @class */ (function () {
                function BattleOverRequest() {
                    this.uuid = ""; // 电影唯一编号
                }
                return BattleOverRequest;
            }());
            movie.BattleOverRequest = BattleOverRequest;
            var BattleOverResponse = /** @class */ (function () {
                function BattleOverResponse() {
                    this.uuid = ""; // 电影唯一编号
                    this.dropout = null; // 掉落
                }
                return BattleOverResponse;
            }());
            movie.BattleOverResponse = BattleOverResponse;
            var SpreadMovieRequest = /** @class */ (function () {
                function SpreadMovieRequest() {
                    this.uuid = ""; // 电影唯一编号
                }
                return SpreadMovieRequest;
            }());
            movie.SpreadMovieRequest = SpreadMovieRequest;
            var SpreadMovieResponse = /** @class */ (function () {
                function SpreadMovieResponse() {
                    this.uuid = ""; // 电影唯一编号
                }
                return SpreadMovieResponse;
            }());
            movie.SpreadMovieResponse = SpreadMovieResponse;
            var GetRewardMovieRequest = /** @class */ (function () {
                function GetRewardMovieRequest() {
                    this.uuid = ""; // 电影唯一编号
                }
                return GetRewardMovieRequest;
            }());
            movie.GetRewardMovieRequest = GetRewardMovieRequest;
            var GetRewardMovieResponse = /** @class */ (function () {
                function GetRewardMovieResponse() {
                    this.uuid = ""; // 电影唯一编号
                    this.dropout = null; // 掉落物品
                }
                return GetRewardMovieResponse;
            }());
            movie.GetRewardMovieResponse = GetRewardMovieResponse;
            var SwitchCityRequest = /** @class */ (function () {
                function SwitchCityRequest() {
                    this.uuid = ""; // 电影唯一编号
                    this.cityId = 0; // 城市ID
                }
                return SwitchCityRequest;
            }());
            movie.SwitchCityRequest = SwitchCityRequest;
            var SwitchCityResponse = /** @class */ (function () {
                function SwitchCityResponse() {
                    this.uuid = ""; // 电影唯一编号
                }
                return SwitchCityResponse;
            }());
            movie.SwitchCityResponse = SwitchCityResponse;
            var UpdateMovieStateRequest = /** @class */ (function () {
                function UpdateMovieStateRequest() {
                    this.uuid = ""; // 电影唯一编号
                    this.state = 0; // 当前电影状态
                }
                return UpdateMovieStateRequest;
            }());
            movie.UpdateMovieStateRequest = UpdateMovieStateRequest;
            var UpdateMovieStateResponse = /** @class */ (function () {
                function UpdateMovieStateResponse() {
                    this.uuid = ""; // 电影唯一编号
                }
                return UpdateMovieStateResponse;
            }());
            movie.UpdateMovieStateResponse = UpdateMovieStateResponse;
            var GetStoryGoalsRequest = /** @class */ (function () {
                function GetStoryGoalsRequest() {
                    this.uuid = ""; // 电影唯一编号
                }
                return GetStoryGoalsRequest;
            }());
            movie.GetStoryGoalsRequest = GetStoryGoalsRequest;
            var GetStoryGoalsResponse = /** @class */ (function () {
                function GetStoryGoalsResponse() {
                    this.uuid = ""; // 电影唯一编号
                }
                return GetStoryGoalsResponse;
            }());
            movie.GetStoryGoalsResponse = GetStoryGoalsResponse;
            var DeleteMovieRequest = /** @class */ (function () {
                function DeleteMovieRequest() {
                    this.uuid = ""; // 电影唯一编号
                }
                return DeleteMovieRequest;
            }());
            movie.DeleteMovieRequest = DeleteMovieRequest;
            var DeleteMovieResponse = /** @class */ (function () {
                function DeleteMovieResponse() {
                    this.uuid = ""; // 电影唯一编号
                    this.dropout = null; // 掉落物品
                }
                return DeleteMovieResponse;
            }());
            movie.DeleteMovieResponse = DeleteMovieResponse;
        })(movie = API.movie || (API.movie = {}));
        var Actor;
        (function (Actor) {
            var NoseInfoActorRequest = /** @class */ (function () {
                function NoseInfoActorRequest() {
                    this.isUseCard = false; // 是否使用星探卡，强制查探
                }
                return NoseInfoActorRequest;
            }());
            Actor.NoseInfoActorRequest = NoseInfoActorRequest;
            var NoseInfoActorResponse = /** @class */ (function () {
                function NoseInfoActorResponse() {
                    this.result = 0; // 0,成功，非0，错误码
                }
                return NoseInfoActorResponse;
            }());
            Actor.NoseInfoActorResponse = NoseInfoActorResponse;
            var RecruitActorRequest = /** @class */ (function () {
                function RecruitActorRequest() {
                    this.actorId = 0; // 艺人ID
                }
                return RecruitActorRequest;
            }());
            Actor.RecruitActorRequest = RecruitActorRequest;
            var RecruitActorResponse = /** @class */ (function () {
                function RecruitActorResponse() {
                    this.result = 0; // 0,成功，非0，错误码
                    this.actorId = 0; // 艺人ID
                    this.isNewActor = false; // 是否新加艺人
                }
                return RecruitActorResponse;
            }());
            Actor.RecruitActorResponse = RecruitActorResponse;
            var HideActorRequest = /** @class */ (function () {
                function HideActorRequest() {
                    this.uuid = ""; // 艺人ID
                    this.isHide = false; // 是否雪藏艺人，true雪藏，false取消雪藏
                }
                return HideActorRequest;
            }());
            Actor.HideActorRequest = HideActorRequest;
            var HideActorResponse = /** @class */ (function () {
                function HideActorResponse() {
                    this.result = 0; // 0,成功，非0，错误码
                }
                return HideActorResponse;
            }());
            Actor.HideActorResponse = HideActorResponse;
            var AddActorSlotRequest = /** @class */ (function () {
                function AddActorSlotRequest() {
                }
                return AddActorSlotRequest;
            }());
            Actor.AddActorSlotRequest = AddActorSlotRequest;
            var AddActorSlotResponse = /** @class */ (function () {
                function AddActorSlotResponse() {
                    this.result = 0; // 0,成功，非0，错误码
                }
                return AddActorSlotResponse;
            }());
            Actor.AddActorSlotResponse = AddActorSlotResponse;
            var UpgradeActorRequest = /** @class */ (function () {
                function UpgradeActorRequest() {
                    this.uuid = ""; // 艺人ID
                }
                return UpgradeActorRequest;
            }());
            Actor.UpgradeActorRequest = UpgradeActorRequest;
            var UpgradeActorResponse = /** @class */ (function () {
                function UpgradeActorResponse() {
                    this.result = 0; // 0,成功，非0，错误码
                }
                return UpgradeActorResponse;
            }());
            Actor.UpgradeActorResponse = UpgradeActorResponse;
            var GiveActorAssetsRequest = /** @class */ (function () {
                function GiveActorAssetsRequest() {
                    this.uuid = ""; // 艺人ID
                    this.giveType = 0; // 赠送类型
                    this.giveLevel = 0; // 赠送等级
                    this.giveNum = 0; // 赠送数量
                }
                return GiveActorAssetsRequest;
            }());
            Actor.GiveActorAssetsRequest = GiveActorAssetsRequest;
            var GiveActorAssetsResponse = /** @class */ (function () {
                function GiveActorAssetsResponse() {
                    this.result = 0; // 0,成功，非0，错误码
                }
                return GiveActorAssetsResponse;
            }());
            Actor.GiveActorAssetsResponse = GiveActorAssetsResponse;
            var UpgradeActorSkillRequest = /** @class */ (function () {
                function UpgradeActorSkillRequest() {
                    this.uuid = ""; // 艺人ID
                    this.skillId = 0; // 技能ID
                }
                return UpgradeActorSkillRequest;
            }());
            Actor.UpgradeActorSkillRequest = UpgradeActorSkillRequest;
            var UpgradeActorSkillResponse = /** @class */ (function () {
                function UpgradeActorSkillResponse() {
                    this.result = 0; // 0,成功，非0，错误码
                }
                return UpgradeActorSkillResponse;
            }());
            Actor.UpgradeActorSkillResponse = UpgradeActorSkillResponse;
            var ActorTrainRequest = /** @class */ (function () {
                function ActorTrainRequest() {
                    this.uuid = ""; // 艺人ID
                    this.trainType = 0; // 培养类型
                    this.useDiamond = false; // 使用钻石
                }
                return ActorTrainRequest;
            }());
            Actor.ActorTrainRequest = ActorTrainRequest;
            var ActorTrainResponse = /** @class */ (function () {
                function ActorTrainResponse() {
                    this.result = 0; // 0,成功，非0，错误码
                    this.uuid = ""; // 艺人ID
                    this.trainType = 0; // 培养类型
                    this.attrChangeList = null; // 属性改变列表
                }
                return ActorTrainResponse;
            }());
            Actor.ActorTrainResponse = ActorTrainResponse;
            var ActorChangeNameRequest = /** @class */ (function () {
                function ActorChangeNameRequest() {
                    this.uuid = ""; // 艺人ID
                    this.name = ""; // 艺人名字
                }
                return ActorChangeNameRequest;
            }());
            Actor.ActorChangeNameRequest = ActorChangeNameRequest;
            var ActorChangeNameResponse = /** @class */ (function () {
                function ActorChangeNameResponse() {
                    this.result = 0; // 0,成功，非0，错误码
                }
                return ActorChangeNameResponse;
            }());
            Actor.ActorChangeNameResponse = ActorChangeNameResponse;
            var ActorExerciseStartRequest = /** @class */ (function () {
                function ActorExerciseStartRequest() {
                    this.aId = ""; // 艺人ID
                    this.eId = ""; // 训练队列id
                }
                return ActorExerciseStartRequest;
            }());
            Actor.ActorExerciseStartRequest = ActorExerciseStartRequest;
            var ActorExerciseStartResponse = /** @class */ (function () {
                function ActorExerciseStartResponse() {
                    this.aId = ""; // 艺人 id
                }
                return ActorExerciseStartResponse;
            }());
            Actor.ActorExerciseStartResponse = ActorExerciseStartResponse;
            var ActorExerciseRewardRequest = /** @class */ (function () {
                function ActorExerciseRewardRequest() {
                    this.eId = ""; // 训练队列id
                    this.useMoney = false; // 是否使用钻石
                }
                return ActorExerciseRewardRequest;
            }());
            Actor.ActorExerciseRewardRequest = ActorExerciseRewardRequest;
            var ActorExerciseRewardResponse = /** @class */ (function () {
                function ActorExerciseRewardResponse() {
                    this.aId = ""; // 艺人 id
                    this.eId = ""; // 队列 id
                }
                return ActorExerciseRewardResponse;
            }());
            Actor.ActorExerciseRewardResponse = ActorExerciseRewardResponse;
            var ActorExerciseAddRequest = /** @class */ (function () {
                function ActorExerciseAddRequest() {
                }
                return ActorExerciseAddRequest;
            }());
            Actor.ActorExerciseAddRequest = ActorExerciseAddRequest;
            var ActorExerciseAddResponse = /** @class */ (function () {
                function ActorExerciseAddResponse() {
                    this.eId = ""; // 训练队列 
                }
                return ActorExerciseAddResponse;
            }());
            Actor.ActorExerciseAddResponse = ActorExerciseAddResponse;
            var GiveLoyaltyCardRequest = /** @class */ (function () {
                function GiveLoyaltyCardRequest() {
                    this.uuid = ""; // 艺人ID
                    this.giveType = 0; // 赠送类型
                    this.num = 0; // 赠送忠诚卡数量
                }
                return GiveLoyaltyCardRequest;
            }());
            Actor.GiveLoyaltyCardRequest = GiveLoyaltyCardRequest;
            var GiveLoyaltyCardResponse = /** @class */ (function () {
                function GiveLoyaltyCardResponse() {
                    this.uuid = ""; // 艺人ID
                    this.giveType = 0; // 赠送类型
                }
                return GiveLoyaltyCardResponse;
            }());
            Actor.GiveLoyaltyCardResponse = GiveLoyaltyCardResponse;
        })(Actor = API.Actor || (API.Actor = {}));
        var story;
        (function (story) {
            var findStoryRequest = /** @class */ (function () {
                function findStoryRequest() {
                }
                return findStoryRequest;
            }());
            story.findStoryRequest = findStoryRequest;
            var findStoryResponse = /** @class */ (function () {
                function findStoryResponse() {
                    this.type = 0; // 搜罗类型 1剧本 2物品
                    this.id = 0; // 物品ID 剧本ID
                    this.num = 0; // 数量
                    this.time = 0; // 已经搜罗次数
                    this.refreshTime = 0; // 上次免费搜罗时间
                }
                return findStoryResponse;
            }());
            story.findStoryResponse = findStoryResponse;
            var cleanFindStoryRequest = /** @class */ (function () {
                function cleanFindStoryRequest() {
                }
                return cleanFindStoryRequest;
            }());
            story.cleanFindStoryRequest = cleanFindStoryRequest;
            var cleanFindStoryResponse = /** @class */ (function () {
                function cleanFindStoryResponse() {
                    this.result = 0; // 0 成功 1 失败 
                    this.refreshTime = 0; // 上次免费搜罗时间
                }
                return cleanFindStoryResponse;
            }());
            story.cleanFindStoryResponse = cleanFindStoryResponse;
            var getRewardRequest = /** @class */ (function () {
                function getRewardRequest() {
                    this.storySuitId = 0; // 剧本组ID
                }
                return getRewardRequest;
            }());
            story.getRewardRequest = getRewardRequest;
            var getRewardResponse = /** @class */ (function () {
                function getRewardResponse() {
                    this.storySuitId = 0; // 剧本组ID
                    this.result = 0; // 0 成功 1 失败
                }
                return getRewardResponse;
            }());
            story.getRewardResponse = getRewardResponse;
            var GetMessageRequest = /** @class */ (function () {
                function GetMessageRequest() {
                    this.stroyId = 0; // 剧本ID
                }
                return GetMessageRequest;
            }());
            story.GetMessageRequest = GetMessageRequest;
            var GetMessageResponse = /** @class */ (function () {
                function GetMessageResponse() {
                    this.stroyId = 0; // 剧本ID
                    this.message = null;
                }
                return GetMessageResponse;
            }());
            story.GetMessageResponse = GetMessageResponse;
            var SetMessageRequest = /** @class */ (function () {
                function SetMessageRequest() {
                    this.stroyId = 0; // 剧本ID
                    this.content = ""; // 内容
                }
                return SetMessageRequest;
            }());
            story.SetMessageRequest = SetMessageRequest;
            var SetMessageResponse = /** @class */ (function () {
                function SetMessageResponse() {
                    this.stroyId = 0; // 0 成功 1 失败
                }
                return SetMessageResponse;
            }());
            story.SetMessageResponse = SetMessageResponse;
        })(story = API.story || (API.story = {}));
        var manageOrder;
        (function (manageOrder) {
            var PutItemRequest = /** @class */ (function () {
                function PutItemRequest() {
                    this.uuid = ""; // 唯一订单编号
                    this.entityId = 0; // 协助的人
                    this.itemId = 0; // 物品baseId 
                    this.type = 0; // 0操作自己的订单，1别人的
                }
                return PutItemRequest;
            }());
            manageOrder.PutItemRequest = PutItemRequest;
            var PutItemResponse = /** @class */ (function () {
                function PutItemResponse() {
                    this.uuid = ""; // 唯一订单编号
                    this.itemInfo = null; // 奖励信息
                    this.type = 0; // 0操作自己的订单，1别人的
                }
                return PutItemResponse;
            }());
            manageOrder.PutItemResponse = PutItemResponse;
            var DelOrderRequest = /** @class */ (function () {
                function DelOrderRequest() {
                    this.uuid = ""; // 唯一订单编号
                }
                return DelOrderRequest;
            }());
            manageOrder.DelOrderRequest = DelOrderRequest;
            var DelOrderResponse = /** @class */ (function () {
                function DelOrderResponse() {
                    this.uuid = ""; // 唯一订单编号
                }
                return DelOrderResponse;
            }());
            manageOrder.DelOrderResponse = DelOrderResponse;
            var FinishOrderRequest = /** @class */ (function () {
                function FinishOrderRequest() {
                    this.uuid = ""; // 唯一订单编号
                }
                return FinishOrderRequest;
            }());
            manageOrder.FinishOrderRequest = FinishOrderRequest;
            var FinishOrderResponse = /** @class */ (function () {
                function FinishOrderResponse() {
                    this.uuid = ""; // 唯一订单编号
                }
                return FinishOrderResponse;
            }());
            manageOrder.FinishOrderResponse = FinishOrderResponse;
            var DealOrderRequest = /** @class */ (function () {
                function DealOrderRequest() {
                }
                return DealOrderRequest;
            }());
            manageOrder.DealOrderRequest = DealOrderRequest;
            var DealOrderResponse = /** @class */ (function () {
                function DealOrderResponse() {
                }
                return DealOrderResponse;
            }());
            manageOrder.DealOrderResponse = DealOrderResponse;
        })(manageOrder = API.manageOrder || (API.manageOrder = {}));
        var progressBox;
        (function (progressBox) {
            var GetRewardRequest = /** @class */ (function () {
                function GetRewardRequest() {
                    this.uuid = ""; // 唯一进度宝箱编号
                    this.gear = 0; // 档位
                }
                return GetRewardRequest;
            }());
            progressBox.GetRewardRequest = GetRewardRequest;
            var GetRewardResponse = /** @class */ (function () {
                function GetRewardResponse() {
                    this.uuid = ""; // 唯一进度宝箱编号
                    this.gear = 0; // 档位
                }
                return GetRewardResponse;
            }());
            progressBox.GetRewardResponse = GetRewardResponse;
        })(progressBox = API.progressBox || (API.progressBox = {}));
        var manageProduce;
        (function (manageProduce) {
            var ProduceRequest = /** @class */ (function () {
                function ProduceRequest() {
                    this.uuid = ""; // 唯一生产编号
                }
                return ProduceRequest;
            }());
            manageProduce.ProduceRequest = ProduceRequest;
            var ProduceResponse = /** @class */ (function () {
                function ProduceResponse() {
                    this.uuid = ""; // 唯一生产编号
                }
                return ProduceResponse;
            }());
            manageProduce.ProduceResponse = ProduceResponse;
            var GetRewardRequest = /** @class */ (function () {
                function GetRewardRequest() {
                    this.uuid = ""; // 唯一生产编号
                }
                return GetRewardRequest;
            }());
            manageProduce.GetRewardRequest = GetRewardRequest;
            var GetRewardResponse = /** @class */ (function () {
                function GetRewardResponse() {
                    this.uuid = ""; // 唯一生产编号
                }
                return GetRewardResponse;
            }());
            manageProduce.GetRewardResponse = GetRewardResponse;
            var UplevelRequest = /** @class */ (function () {
                function UplevelRequest() {
                    this.uuid = ""; // 唯一生产编号
                    this.skillId = 0; // 升级效果id
                }
                return UplevelRequest;
            }());
            manageProduce.UplevelRequest = UplevelRequest;
            var UplevelResponse = /** @class */ (function () {
                function UplevelResponse() {
                    this.uuid = ""; // 唯一生产编号
                    this.skillId = 0; // 升级效果id
                }
                return UplevelResponse;
            }());
            manageProduce.UplevelResponse = UplevelResponse;
            var SendActorRequest = /** @class */ (function () {
                function SendActorRequest() {
                    this.uuid = ""; // 唯一生产编号
                    this.actBaseId = 0; // 艺人的唯一ID 
                }
                return SendActorRequest;
            }());
            manageProduce.SendActorRequest = SendActorRequest;
            var SendActorResponse = /** @class */ (function () {
                function SendActorResponse() {
                    this.uuid = ""; // 唯一生产编号
                    this.actBaseId = 0; // 艺人的唯一ID 
                }
                return SendActorResponse;
            }());
            manageProduce.SendActorResponse = SendActorResponse;
            var DeblockingRequest = /** @class */ (function () {
                function DeblockingRequest() {
                    this.produceId = 0; // 需要解锁的生产ID
                }
                return DeblockingRequest;
            }());
            manageProduce.DeblockingRequest = DeblockingRequest;
            var DeblockingResponse = /** @class */ (function () {
                function DeblockingResponse() {
                    this.produceId = 0; // 需要解锁的生产ID
                }
                return DeblockingResponse;
            }());
            manageProduce.DeblockingResponse = DeblockingResponse;
            var QuickGetRewardRequest = /** @class */ (function () {
                function QuickGetRewardRequest() {
                    this.stall = 0; // 档位
                }
                return QuickGetRewardRequest;
            }());
            manageProduce.QuickGetRewardRequest = QuickGetRewardRequest;
            var QuickGetRewardResponse = /** @class */ (function () {
                function QuickGetRewardResponse() {
                    this.stall = 0; // 档位
                }
                return QuickGetRewardResponse;
            }());
            manageProduce.QuickGetRewardResponse = QuickGetRewardResponse;
            var QuickProduceRequest = /** @class */ (function () {
                function QuickProduceRequest() {
                    this.stall = 0; // 档位
                }
                return QuickProduceRequest;
            }());
            manageProduce.QuickProduceRequest = QuickProduceRequest;
            var QuickProduceResponse = /** @class */ (function () {
                function QuickProduceResponse() {
                    this.stall = 0; // 档位
                    this.num = 0; // 生产了多少个
                }
                return QuickProduceResponse;
            }());
            manageProduce.QuickProduceResponse = QuickProduceResponse;
            var cleanTimeRequest = /** @class */ (function () {
                function cleanTimeRequest() {
                    this.uuid = ""; // 唯一生产编号
                }
                return cleanTimeRequest;
            }());
            manageProduce.cleanTimeRequest = cleanTimeRequest;
            var cleanTimeResponse = /** @class */ (function () {
                function cleanTimeResponse() {
                    this.uuid = ""; // 唯一生产编号
                }
                return cleanTimeResponse;
            }());
            manageProduce.cleanTimeResponse = cleanTimeResponse;
        })(manageProduce = API.manageProduce || (API.manageProduce = {}));
        var rank;
        (function (rank) {
            var GetSelfListRequest = /** @class */ (function () {
                function GetSelfListRequest() {
                }
                return GetSelfListRequest;
            }());
            rank.GetSelfListRequest = GetSelfListRequest;
            var GetSelfListResponse = /** @class */ (function () {
                function GetSelfListResponse() {
                    this.data = null; // 排行榜数据
                }
                return GetSelfListResponse;
            }());
            rank.GetSelfListResponse = GetSelfListResponse;
            var GetServerRankListRequest = /** @class */ (function () {
                function GetServerRankListRequest() {
                }
                return GetServerRankListRequest;
            }());
            rank.GetServerRankListRequest = GetServerRankListRequest;
            var GetServerRankListResponse = /** @class */ (function () {
                function GetServerRankListResponse() {
                    this.selfRank = 0; // 全服排名
                    this.selfData = null; // 自己的排行榜数据
                    this.data = null; // 排行榜数据
                }
                return GetServerRankListResponse;
            }());
            rank.GetServerRankListResponse = GetServerRankListResponse;
            var GetGroupRankListRequest = /** @class */ (function () {
                function GetGroupRankListRequest() {
                }
                return GetGroupRankListRequest;
            }());
            rank.GetGroupRankListRequest = GetGroupRankListRequest;
            var GetGroupRankListResponse = /** @class */ (function () {
                function GetGroupRankListResponse() {
                    this.selfRank = 0; // 全服排名
                    this.selfData = null; // 自己的排行榜数据
                    this.data = null; // 排行榜数据
                }
                return GetGroupRankListResponse;
            }());
            rank.GetGroupRankListResponse = GetGroupRankListResponse;
            var GetGroupMovieRankListRequest = /** @class */ (function () {
                function GetGroupMovieRankListRequest() {
                }
                return GetGroupMovieRankListRequest;
            }());
            rank.GetGroupMovieRankListRequest = GetGroupMovieRankListRequest;
            var GetGroupMovieRankListResponse = /** @class */ (function () {
                function GetGroupMovieRankListResponse() {
                    this.selfRank = 0; // 全服排名
                    this.selfData = null; // 自己的排行榜数据
                    this.data = null; // 排行榜数据
                }
                return GetGroupMovieRankListResponse;
            }());
            rank.GetGroupMovieRankListResponse = GetGroupMovieRankListResponse;
            var GetMovieShortDataRequest = /** @class */ (function () {
                function GetMovieShortDataRequest() {
                    this.uuid = ""; // 电影唯一id
                }
                return GetMovieShortDataRequest;
            }());
            rank.GetMovieShortDataRequest = GetMovieShortDataRequest;
            var GetMovieShortDataResponse = /** @class */ (function () {
                function GetMovieShortDataResponse() {
                    this.data = null; // 排行榜数据
                }
                return GetMovieShortDataResponse;
            }());
            rank.GetMovieShortDataResponse = GetMovieShortDataResponse;
            var GetPlayerShortDataRequest = /** @class */ (function () {
                function GetPlayerShortDataRequest() {
                    this.userId = 0; // id
                }
                return GetPlayerShortDataRequest;
            }());
            rank.GetPlayerShortDataRequest = GetPlayerShortDataRequest;
            var GetPlayerShortDataResponse = /** @class */ (function () {
                function GetPlayerShortDataResponse() {
                    this.data = null; // 玩家信息
                }
                return GetPlayerShortDataResponse;
            }());
            rank.GetPlayerShortDataResponse = GetPlayerShortDataResponse;
            var GetServerListRewardRequest = /** @class */ (function () {
                function GetServerListRewardRequest() {
                    this.uuid = ""; // 排行榜唯一id
                }
                return GetServerListRewardRequest;
            }());
            rank.GetServerListRewardRequest = GetServerListRewardRequest;
            var GetServerListRewardResponse = /** @class */ (function () {
                function GetServerListRewardResponse() {
                    this.dropout = null; // 奖励物品
                }
                return GetServerListRewardResponse;
            }());
            rank.GetServerListRewardResponse = GetServerListRewardResponse;
            var ChangeServerNameRequest = /** @class */ (function () {
                function ChangeServerNameRequest() {
                    this.uuid = ""; // 排行榜唯一id
                    this.name = ""; // 服务器名称
                }
                return ChangeServerNameRequest;
            }());
            rank.ChangeServerNameRequest = ChangeServerNameRequest;
            var ChangeServerNameResponse = /** @class */ (function () {
                function ChangeServerNameResponse() {
                }
                return ChangeServerNameResponse;
            }());
            rank.ChangeServerNameResponse = ChangeServerNameResponse;
            var GetOscarDataRequest = /** @class */ (function () {
                function GetOscarDataRequest() {
                }
                return GetOscarDataRequest;
            }());
            rank.GetOscarDataRequest = GetOscarDataRequest;
            var GetOscarDataResponse = /** @class */ (function () {
                function GetOscarDataResponse() {
                }
                return GetOscarDataResponse;
            }());
            rank.GetOscarDataResponse = GetOscarDataResponse;
            var GetOscarRewardRequest = /** @class */ (function () {
                function GetOscarRewardRequest() {
                    this.type = 0;
                }
                return GetOscarRewardRequest;
            }());
            rank.GetOscarRewardRequest = GetOscarRewardRequest;
            var GetOscarRewardResponse = /** @class */ (function () {
                function GetOscarRewardResponse() {
                    this.dropout = null;
                }
                return GetOscarRewardResponse;
            }());
            rank.GetOscarRewardResponse = GetOscarRewardResponse;
            var ChoseTheaterRequest = /** @class */ (function () {
                function ChoseTheaterRequest() {
                    this.theaterId = 0;
                }
                return ChoseTheaterRequest;
            }());
            rank.ChoseTheaterRequest = ChoseTheaterRequest;
            var ChoseTheaterResponse = /** @class */ (function () {
                function ChoseTheaterResponse() {
                }
                return ChoseTheaterResponse;
            }());
            rank.ChoseTheaterResponse = ChoseTheaterResponse;
            var GetStreetRewardRequest = /** @class */ (function () {
                function GetStreetRewardRequest() {
                    this.type = 0; // 0 街区奖励 1 排行榜祝贺, 2 总票房排行榜祝贺
                }
                return GetStreetRewardRequest;
            }());
            rank.GetStreetRewardRequest = GetStreetRewardRequest;
            var GetStreetRewardResponse = /** @class */ (function () {
                function GetStreetRewardResponse() {
                    this.type = 0;
                    this.dropout = null;
                }
                return GetStreetRewardResponse;
            }());
            rank.GetStreetRewardResponse = GetStreetRewardResponse;
        })(rank = API.rank || (API.rank = {}));
        var task;
        (function (task) {
            var rewardRequest = /** @class */ (function () {
                function rewardRequest() {
                    this.tId = ""; // id
                }
                return rewardRequest;
            }());
            task.rewardRequest = rewardRequest;
            var rewardResponse = /** @class */ (function () {
                function rewardResponse() {
                    this.tId = ""; // id
                    this.dropout = null; // 奖励内容
                }
                return rewardResponse;
            }());
            task.rewardResponse = rewardResponse;
        })(task = API.task || (API.task = {}));
        var mall;
        (function (mall) {
            var buyRequest = /** @class */ (function () {
                function buyRequest() {
                    this.goodsId = 0; // 商品编号
                    this.amount = 0; // 商品数量
                }
                return buyRequest;
            }());
            mall.buyRequest = buyRequest;
            var buyResponse = /** @class */ (function () {
                function buyResponse() {
                    this.result = 0; // 返回购买结果
                }
                return buyResponse;
            }());
            mall.buyResponse = buyResponse;
        })(mall = API.mall || (API.mall = {}));
        var Mail;
        (function (Mail) {
            var MailGetRewardRequest = /** @class */ (function () {
                function MailGetRewardRequest() {
                    this.uuid = "";
                }
                return MailGetRewardRequest;
            }());
            Mail.MailGetRewardRequest = MailGetRewardRequest;
            var MailGetRewardResponse = /** @class */ (function () {
                function MailGetRewardResponse() {
                    this.uuid = "";
                    this.dropout = null;
                }
                return MailGetRewardResponse;
            }());
            Mail.MailGetRewardResponse = MailGetRewardResponse;
            var MailGetRewardManyRequest = /** @class */ (function () {
                function MailGetRewardManyRequest() {
                    this.uuid = null;
                }
                return MailGetRewardManyRequest;
            }());
            Mail.MailGetRewardManyRequest = MailGetRewardManyRequest;
            var MailGetRewardManyResponse = /** @class */ (function () {
                function MailGetRewardManyResponse() {
                    this.uuid = null;
                    this.dropout = null;
                }
                return MailGetRewardManyResponse;
            }());
            Mail.MailGetRewardManyResponse = MailGetRewardManyResponse;
            var MailDeleteManyRequest = /** @class */ (function () {
                function MailDeleteManyRequest() {
                    this.uuid = null;
                }
                return MailDeleteManyRequest;
            }());
            Mail.MailDeleteManyRequest = MailDeleteManyRequest;
            var MailDeleteManyResponse = /** @class */ (function () {
                function MailDeleteManyResponse() {
                    this.uuid = null;
                }
                return MailDeleteManyResponse;
            }());
            Mail.MailDeleteManyResponse = MailDeleteManyResponse;
            var MailDeleteRequest = /** @class */ (function () {
                function MailDeleteRequest() {
                    this.uuid = "";
                }
                return MailDeleteRequest;
            }());
            Mail.MailDeleteRequest = MailDeleteRequest;
            var MailDeleteResponse = /** @class */ (function () {
                function MailDeleteResponse() {
                    this.uuid = "";
                }
                return MailDeleteResponse;
            }());
            Mail.MailDeleteResponse = MailDeleteResponse;
            var MailReadRequest = /** @class */ (function () {
                function MailReadRequest() {
                    this.uuid = "";
                }
                return MailReadRequest;
            }());
            Mail.MailReadRequest = MailReadRequest;
            var MailReadResponse = /** @class */ (function () {
                function MailReadResponse() {
                    this.uuid = "";
                }
                return MailReadResponse;
            }());
            Mail.MailReadResponse = MailReadResponse;
        })(Mail = API.Mail || (API.Mail = {}));
        var Gift;
        (function (Gift) {
            var ExchangeRequest = /** @class */ (function () {
                function ExchangeRequest() {
                    this.id = ""; // 兑换码 id
                }
                return ExchangeRequest;
            }());
            Gift.ExchangeRequest = ExchangeRequest;
            var ExchangeResponse = /** @class */ (function () {
                function ExchangeResponse() {
                    this.result = 0;
                    this.dropout = null; // 掉落
                }
                return ExchangeResponse;
            }());
            Gift.ExchangeResponse = ExchangeResponse;
        })(Gift = API.Gift || (API.Gift = {}));
        var manageBusiness;
        (function (manageBusiness) {
            var GetRewardRequest = /** @class */ (function () {
                function GetRewardRequest() {
                }
                return GetRewardRequest;
            }());
            manageBusiness.GetRewardRequest = GetRewardRequest;
            var GetRewardResponse = /** @class */ (function () {
                function GetRewardResponse() {
                }
                return GetRewardResponse;
            }());
            manageBusiness.GetRewardResponse = GetRewardResponse;
        })(manageBusiness = API.manageBusiness || (API.manageBusiness = {}));
        var manageVisit;
        (function (manageVisit) {
            var StartVisitRequest = /** @class */ (function () {
                function StartVisitRequest() {
                }
                return StartVisitRequest;
            }());
            manageVisit.StartVisitRequest = StartVisitRequest;
            var StartVisitResponse = /** @class */ (function () {
                function StartVisitResponse() {
                }
                return StartVisitResponse;
            }());
            manageVisit.StartVisitResponse = StartVisitResponse;
            var GetRewardRequest = /** @class */ (function () {
                function GetRewardRequest() {
                }
                return GetRewardRequest;
            }());
            manageVisit.GetRewardRequest = GetRewardRequest;
            var GetRewardResponse = /** @class */ (function () {
                function GetRewardResponse() {
                }
                return GetRewardResponse;
            }());
            manageVisit.GetRewardResponse = GetRewardResponse;
        })(manageVisit = API.manageVisit || (API.manageVisit = {}));
        var manageMeeting;
        (function (manageMeeting) {
            var GetRewardRequest = /** @class */ (function () {
                function GetRewardRequest() {
                    this.type = 0; // 0领取 1回绝
                }
                return GetRewardRequest;
            }());
            manageMeeting.GetRewardRequest = GetRewardRequest;
            var GetRewardResponse = /** @class */ (function () {
                function GetRewardResponse() {
                    this.type = 0; // 0领取 1回绝
                }
                return GetRewardResponse;
            }());
            manageMeeting.GetRewardResponse = GetRewardResponse;
            var MarkupRequest = /** @class */ (function () {
                function MarkupRequest() {
                    this.type = 0; // 2 50% 1 200%
                }
                return MarkupRequest;
            }());
            manageMeeting.MarkupRequest = MarkupRequest;
            var MarkupResponse = /** @class */ (function () {
                function MarkupResponse() {
                    this.type = 0; // 2 50% 1 200%
                }
                return MarkupResponse;
            }());
            manageMeeting.MarkupResponse = MarkupResponse;
        })(manageMeeting = API.manageMeeting || (API.manageMeeting = {}));
        var dailySign;
        (function (dailySign) {
            var signRequest = /** @class */ (function () {
                function signRequest() {
                }
                return signRequest;
            }());
            dailySign.signRequest = signRequest;
            var signResponse = /** @class */ (function () {
                function signResponse() {
                    this.dropout = null; // 掉落
                }
                return signResponse;
            }());
            dailySign.signResponse = signResponse;
        })(dailySign = API.dailySign || (API.dailySign = {}));
        var secretary;
        (function (secretary) {
            var GetDailyRewardRequest = /** @class */ (function () {
                function GetDailyRewardRequest() {
                }
                return GetDailyRewardRequest;
            }());
            secretary.GetDailyRewardRequest = GetDailyRewardRequest;
            var GetDailyRewardResponse = /** @class */ (function () {
                function GetDailyRewardResponse() {
                }
                return GetDailyRewardResponse;
            }());
            secretary.GetDailyRewardResponse = GetDailyRewardResponse;
            var OpenSecretaryRequest = /** @class */ (function () {
                function OpenSecretaryRequest() {
                    this.key = 0; // 操作哪一个模块小秘书
                    this.type = 0; // 0关闭 1开启
                }
                return OpenSecretaryRequest;
            }());
            secretary.OpenSecretaryRequest = OpenSecretaryRequest;
            var OpenSecretaryResponse = /** @class */ (function () {
                function OpenSecretaryResponse() {
                    this.key = 0; // 操作哪一个模块小秘书
                    this.type = 0; // 0关闭 1开启
                }
                return OpenSecretaryResponse;
            }());
            secretary.OpenSecretaryResponse = OpenSecretaryResponse;
            var ApplyMovieLicenceRequest = /** @class */ (function () {
                function ApplyMovieLicenceRequest() {
                }
                return ApplyMovieLicenceRequest;
            }());
            secretary.ApplyMovieLicenceRequest = ApplyMovieLicenceRequest;
            var ApplyMovieLicenceResponse = /** @class */ (function () {
                function ApplyMovieLicenceResponse() {
                }
                return ApplyMovieLicenceResponse;
            }());
            secretary.ApplyMovieLicenceResponse = ApplyMovieLicenceResponse;
            var RewardMovieLicenceRequest = /** @class */ (function () {
                function RewardMovieLicenceRequest() {
                }
                return RewardMovieLicenceRequest;
            }());
            secretary.RewardMovieLicenceRequest = RewardMovieLicenceRequest;
            var RewardMovieLicenceResponse = /** @class */ (function () {
                function RewardMovieLicenceResponse() {
                }
                return RewardMovieLicenceResponse;
            }());
            secretary.RewardMovieLicenceResponse = RewardMovieLicenceResponse;
        })(secretary = API.secretary || (API.secretary = {}));
        var sevenAddUp;
        (function (sevenAddUp) {
            var GetRewardRequest = /** @class */ (function () {
                function GetRewardRequest() {
                    this.uuid = ""; // 唯一七日礼包ID
                    this.gear = 0; // 档位
                }
                return GetRewardRequest;
            }());
            sevenAddUp.GetRewardRequest = GetRewardRequest;
            var GetRewardResponse = /** @class */ (function () {
                function GetRewardResponse() {
                    this.uuid = ""; // 唯一七日礼包ID
                    this.gear = 0; // 档位
                }
                return GetRewardResponse;
            }());
            sevenAddUp.GetRewardResponse = GetRewardResponse;
            var TouchRequest = /** @class */ (function () {
                function TouchRequest() {
                }
                return TouchRequest;
            }());
            sevenAddUp.TouchRequest = TouchRequest;
            var TouchResponse = /** @class */ (function () {
                function TouchResponse() {
                }
                return TouchResponse;
            }());
            sevenAddUp.TouchResponse = TouchResponse;
        })(sevenAddUp = API.sevenAddUp || (API.sevenAddUp = {}));
        var BeginnerGuide;
        (function (BeginnerGuide) {
            var CompleteGuideRequest = /** @class */ (function () {
                function CompleteGuideRequest() {
                    this.gId = 0; // 引导任务编号
                    this.type = 0; // 引导类型
                }
                return CompleteGuideRequest;
            }());
            BeginnerGuide.CompleteGuideRequest = CompleteGuideRequest;
            var CompleteGuideResponse = /** @class */ (function () {
                function CompleteGuideResponse() {
                    this.gId = 0; // 引导任务编号
                    this.type = 0; // 引导类型
                }
                return CompleteGuideResponse;
            }());
            BeginnerGuide.CompleteGuideResponse = CompleteGuideResponse;
        })(BeginnerGuide = API.BeginnerGuide || (API.BeginnerGuide = {}));
        var Danmu;
        (function (Danmu) {
            var setRequest = /** @class */ (function () {
                function setRequest() {
                    this.id = 0; // 颁奖场次 Id
                    this.msg = ""; // 弹幕消息
                }
                return setRequest;
            }());
            Danmu.setRequest = setRequest;
            var setResponse = /** @class */ (function () {
                function setResponse() {
                }
                return setResponse;
            }());
            Danmu.setResponse = setResponse;
            var getRequest = /** @class */ (function () {
                function getRequest() {
                    this.id = 0; // 颁奖场次 Id
                    this.time = 0; // 时间戳
                }
                return getRequest;
            }());
            Danmu.getRequest = getRequest;
            var getResponse = /** @class */ (function () {
                function getResponse() {
                    this.data = null; // 返回结果
                    this.time = 0; // 返回的时间戳
                }
                return getResponse;
            }());
            Danmu.getResponse = getResponse;
        })(Danmu = API.Danmu || (API.Danmu = {}));
        var cooperate;
        (function (cooperate) {
            var ApplyRequest = /** @class */ (function () {
                function ApplyRequest() {
                    this.entityId = 0; // 合作者ID 为0时，为公开邀请
                }
                return ApplyRequest;
            }());
            cooperate.ApplyRequest = ApplyRequest;
            var ApplyResponse = /** @class */ (function () {
                function ApplyResponse() {
                }
                return ApplyResponse;
            }());
            cooperate.ApplyResponse = ApplyResponse;
            var CancelCooperateRequest = /** @class */ (function () {
                function CancelCooperateRequest() {
                }
                return CancelCooperateRequest;
            }());
            cooperate.CancelCooperateRequest = CancelCooperateRequest;
            var CancelCooperateResponse = /** @class */ (function () {
                function CancelCooperateResponse() {
                }
                return CancelCooperateResponse;
            }());
            cooperate.CancelCooperateResponse = CancelCooperateResponse;
            var RelieveRequest = /** @class */ (function () {
                function RelieveRequest() {
                }
                return RelieveRequest;
            }());
            cooperate.RelieveRequest = RelieveRequest;
            var RelieveResponse = /** @class */ (function () {
                function RelieveResponse() {
                }
                return RelieveResponse;
            }());
            cooperate.RelieveResponse = RelieveResponse;
            var ApproveRequest = /** @class */ (function () {
                function ApproveRequest() {
                    this.type = 0; // 审批类型 0同意 1拒绝
                    this.entityId = ""; // 审批的哪个玩家
                }
                return ApproveRequest;
            }());
            cooperate.ApproveRequest = ApproveRequest;
            var ApproveResponse = /** @class */ (function () {
                function ApproveResponse() {
                    this.type = 0; // 审批类型 0同意 1拒绝
                    this.entityId = ""; // 审批的哪个玩家
                }
                return ApproveResponse;
            }());
            cooperate.ApproveResponse = ApproveResponse;
            var GetInfoRequest = /** @class */ (function () {
                function GetInfoRequest() {
                    this.oldOrderUuids = null;
                }
                return GetInfoRequest;
            }());
            cooperate.GetInfoRequest = GetInfoRequest;
            var GetInfoResponse = /** @class */ (function () {
                function GetInfoResponse() {
                }
                return GetInfoResponse;
            }());
            cooperate.GetInfoResponse = GetInfoResponse;
            var TaskOperateRequest = /** @class */ (function () {
                function TaskOperateRequest() {
                    this.type = 0; // 任务操作 0接取 1协作
                    this.taskId = 0; // 哪个任务
                    this.star = 0; // 星级
                }
                return TaskOperateRequest;
            }());
            cooperate.TaskOperateRequest = TaskOperateRequest;
            var TaskOperateResponse = /** @class */ (function () {
                function TaskOperateResponse() {
                    this.type = 0; // 任务操作 0接取 1协作
                    this.taskId = 0; // 哪个任务
                    this.star = 0; // 星级
                }
                return TaskOperateResponse;
            }());
            cooperate.TaskOperateResponse = TaskOperateResponse;
            var GetTaskRewardRequest = /** @class */ (function () {
                function GetTaskRewardRequest() {
                    this.taskId = 0; // 哪个任务
                    this.star = 0; // 星级 
                }
                return GetTaskRewardRequest;
            }());
            cooperate.GetTaskRewardRequest = GetTaskRewardRequest;
            var GetTaskRewardResponse = /** @class */ (function () {
                function GetTaskRewardResponse() {
                    this.taskId = 0; // 哪个任务
                    this.star = 0; // 星级
                }
                return GetTaskRewardResponse;
            }());
            cooperate.GetTaskRewardResponse = GetTaskRewardResponse;
            var GiveRewardRequest = /** @class */ (function () {
                function GiveRewardRequest() {
                    this.itemId = 0; // 赠送物品ID
                }
                return GiveRewardRequest;
            }());
            cooperate.GiveRewardRequest = GiveRewardRequest;
            var GiveRewardResponse = /** @class */ (function () {
                function GiveRewardResponse() {
                    this.itemId = 0;
                }
                return GiveRewardResponse;
            }());
            cooperate.GiveRewardResponse = GiveRewardResponse;
            var GetProgressTaskRequest = /** @class */ (function () {
                function GetProgressTaskRequest() {
                    this.index = 0; // 领取哪一个
                }
                return GetProgressTaskRequest;
            }());
            cooperate.GetProgressTaskRequest = GetProgressTaskRequest;
            var GetProgressTaskResponse = /** @class */ (function () {
                function GetProgressTaskResponse() {
                    this.index = 0;
                }
                return GetProgressTaskResponse;
            }());
            cooperate.GetProgressTaskResponse = GetProgressTaskResponse;
            var ReadCooperateRequest = /** @class */ (function () {
                function ReadCooperateRequest() {
                }
                return ReadCooperateRequest;
            }());
            cooperate.ReadCooperateRequest = ReadCooperateRequest;
            var ReadCooperateResponse = /** @class */ (function () {
                function ReadCooperateResponse() {
                }
                return ReadCooperateResponse;
            }());
            cooperate.ReadCooperateResponse = ReadCooperateResponse;
        })(cooperate = API.cooperate || (API.cooperate = {}));
        var account;
        (function (account) {
            var authRequest = /** @class */ (function () {
                function authRequest() {
                    this.account = "";
                }
                return authRequest;
            }());
            account.authRequest = authRequest;
            var authResponse = /** @class */ (function () {
                function authResponse() {
                    this.account = "";
                    this.token = "";
                }
                return authResponse;
            }());
            account.authResponse = authResponse;
            var loginRequest = /** @class */ (function () {
                function loginRequest() {
                    this.account = "";
                    this.token = "";
                }
                return loginRequest;
            }());
            account.loginRequest = loginRequest;
            var loginResponse = /** @class */ (function () {
                function loginResponse() {
                    this.jwt = "";
                    this.userId = 0;
                    this.timestamp = 0;
                }
                return loginResponse;
            }());
            account.loginResponse = loginResponse;
            var refreshTokenRequest = /** @class */ (function () {
                function refreshTokenRequest() {
                }
                return refreshTokenRequest;
            }());
            account.refreshTokenRequest = refreshTokenRequest;
            var refreshTokenResponse = /** @class */ (function () {
                function refreshTokenResponse() {
                    this.jwt = "";
                }
                return refreshTokenResponse;
            }());
            account.refreshTokenResponse = refreshTokenResponse;
        })(account = API.account || (API.account = {}));
        var ClientGM;
        (function (ClientGM) {
            var gmTestRequest = /** @class */ (function () {
                function gmTestRequest() {
                }
                return gmTestRequest;
            }());
            ClientGM.gmTestRequest = gmTestRequest;
            var gmTestResponse = /** @class */ (function () {
                function gmTestResponse() {
                    this.num = 0;
                }
                return gmTestResponse;
            }());
            ClientGM.gmTestResponse = gmTestResponse;
            var gmUpdateOscarRequest = /** @class */ (function () {
                function gmUpdateOscarRequest() {
                }
                return gmUpdateOscarRequest;
            }());
            ClientGM.gmUpdateOscarRequest = gmUpdateOscarRequest;
            var gmUpdateOscarResponse = /** @class */ (function () {
                function gmUpdateOscarResponse() {
                }
                return gmUpdateOscarResponse;
            }());
            ClientGM.gmUpdateOscarResponse = gmUpdateOscarResponse;
        })(ClientGM = API.ClientGM || (API.ClientGM = {}));
    })(API = Proto.API || (Proto.API = {}));
})(Proto || (Proto = {}));
//# sourceMappingURL=API.js.map