/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
var fgui;
(function (fgui) {
    var Building;
    (function (Building) {
        var BuildRoomList = /** @class */ (function (_super) {
            __extends(BuildRoomList, _super);
            function BuildRoomList() {
                var _this = _super.call(this) || this;
                _this.roomInfoList = [];
                return _this;
            }
            BuildRoomList.prototype.onWindowInited = function () {
            };
            BuildRoomList.prototype.onWindowShow = function () {
            };
            BuildRoomList.prototype.onWindowHide = function () {
            };
            //初始数据
            BuildRoomList.prototype.init = function (floor) {
                this.setTopAssets();
                this.floor = floor;
                this.roomInfoList.length = 0;
                var configRooms = this.getBuildRoomList();
                for (var _i = 0, configRooms_1 = configRooms; _i < configRooms_1.length; _i++) {
                    var room = configRooms_1[_i];
                    var info = new Games.RoomInfo();
                    info.id = room.id;
                    info.name = room.name;
                    info.type = room.type;
                    if (this.isRoomBuilded(room.type)) {
                        info.isBuilded = true;
                    }
                    this.roomInfoList.push(info);
                }
                //显示房间列表
                this.showRoomList();
            };
            BuildRoomList.prototype.setTopAssets = function () {
                this.m_topAsset.m_assetList.removeChildrenToPool();
                var asset = this.m_topAsset.m_assetList.addItemFromPool();
                asset.setItemId(Games.AssetType.Tile);
                this.m_topAsset.m_assetList.addChild(asset);
                asset = this.m_topAsset.m_assetList.addItemFromPool();
                asset.setItemId(Games.AssetType.Glass);
                this.m_topAsset.m_assetList.addChild(asset);
                asset = this.m_topAsset.m_assetList.addItemFromPool();
                asset.setItemId(Games.AssetType.Wood);
                this.m_topAsset.m_assetList.addChild(asset);
                asset = this.m_topAsset.m_assetList.addItemFromPool();
                asset.setItemId(Games.AssetType.Cement);
                this.m_topAsset.m_assetList.addChild(asset);
                //cache bitmap
                // this.m_topAsset.displayObject.cacheAs = "bitmap";
            };
            //显示建造房间列表
            BuildRoomList.prototype.showRoomList = function () {
                var _this = this;
                var sortId = function (valA, valB) {
                    return valA.id - valB.id;
                };
                var sortHasBuild = function (valA, valB) {
                    if (valA.isBuilded && !valB.isBuilded) {
                        return 1;
                    }
                    else if (!valA.isBuilded && valB.isBuilded) {
                        return -1;
                    }
                    return sortId(valA, valB);
                };
                this.roomInfoList = this.roomInfoList.sort(function (valA, valB) {
                    var checkA = _this.checkAll(valA);
                    var checkB = _this.checkAll(valB);
                    if (checkA.result && !checkB.result) {
                        return -1;
                    }
                    else if (!checkA.result && checkB.result) {
                        return 1;
                    }
                    else {
                        return sortHasBuild(valA, valB);
                    }
                });
                this.m_roomList.scrollItemToViewOnClick = false;
                this.m_roomList.removeChildrenToPool();
                for (var _i = 0, _a = this.roomInfoList; _i < _a.length; _i++) {
                    var roomInfo = _a[_i];
                    var buildRoom = this.m_roomList.addItemFromPool();
                    buildRoom.setInfo(roomInfo);
                    this.m_roomList.addChild(buildRoom);
                    buildRoom.m_btn_roomTip.onClick(this, this.onRoomTip);
                    if (!roomInfo.isBuilded) {
                        buildRoom.m_touch.onClick(this, this.onRoomSelect, [roomInfo]);
                    }
                    var checkAll = this.checkAll(roomInfo);
                    if (!checkAll.result) {
                        buildRoom.setBuildLock(checkAll.reason);
                    }
                }
                this.m_topAsset.m_btn_topClose.onClick(this, this.onClose);
            };
            BuildRoomList.prototype.checkAll = function (roomInfo) {
                var checkResult = { result: true, reason: "" };
                var checkIsBuilded = this.checkIsBuilded(roomInfo);
                var checkLevel = this.checkLevel(roomInfo);
                var checkBlock = this.checkBlock(roomInfo);
                var checkPrevTypeLevel = this.checkPrevTypeLevel(roomInfo);
                if (!checkIsBuilded.result) {
                    checkResult.result = false;
                    checkResult.reason += checkIsBuilded.reason;
                    return checkResult; //return;
                }
                if (!checkLevel.result) {
                    checkResult.result = false;
                    checkResult.reason += checkLevel.reason + ";"; //'\n';
                }
                if (!checkBlock.result) {
                    checkResult.result = false;
                    checkResult.reason += checkBlock.reason + ";"; //'\n';
                }
                if (!checkPrevTypeLevel.result) {
                    checkResult.result = false;
                    checkResult.reason += checkPrevTypeLevel.reason + ";"; //'\n';
                }
                checkResult.reason = checkResult.reason.replace(";;", ";");
                checkResult.reason = checkResult.reason.substring(0, checkResult.reason.length - 1);
                return checkResult;
            };
            //前置建造
            BuildRoomList.prototype.checkPrevTypeLevel = function (roomInfo) {
                var checkResult = { result: true, reason: "" };
                var typeLevelList = Game.config.buildingLevel.getConfig(roomInfo.id).type_level;
                for (var _i = 0, typeLevelList_1 = typeLevelList; _i < typeLevelList_1.length; _i++) {
                    var typeLevel = typeLevelList_1[_i];
                    if (typeLevel.type != roomInfo.type) {
                        var buildRoomInfo = Game.moduleModel.building.getRoomByType(typeLevel.type);
                        if (!buildRoomInfo) //未建造
                         {
                            checkResult.result = false;
                            var lv = typeLevel.level == 1 ? "" : typeLevel.level;
                            var msg = Game.config.msg.getTxtFormat(MsgKey.build_non_prebuilding, this.getRoomNameByType(typeLevel.type), lv);
                            checkResult.reason += msg + ";"; //\n";
                        }
                        else {
                            if (buildRoomInfo.level < typeLevel.level) //已建造，等级不足
                             {
                                checkResult.result = false;
                                var lv = typeLevel.level == 1 ? "" : typeLevel.level;
                                var msg = Game.config.msg.getTxtFormat(MsgKey.build_non_prebuilding, this.getRoomNameByType(typeLevel.type), lv);
                                checkResult.reason += msg + ";"; // \n";
                            }
                        }
                    }
                }
                return checkResult;
            };
            //检查是否已建造
            BuildRoomList.prototype.checkIsBuilded = function (roomInfo) {
                var checkResult = { result: true, reason: "" };
                if (roomInfo.isBuilded) {
                    checkResult.result = false;
                    checkResult.reason = Game.config.msg.getTxt(MsgKey.build_be_builded);
                }
                return checkResult;
            };
            //公司等级
            BuildRoomList.prototype.checkLevel = function (roomInfo) {
                var checkResult = { result: true, reason: "" };
                var levelReq = Game.config.buildingLevel.getConfig(roomInfo.id).level_req;
                if (levelReq > User.info.level) {
                    checkResult.result = false;
                    var msg = Game.config.msg.getTxtFormat(MsgKey.build_non_level, levelReq);
                    checkResult.reason = msg;
                    return checkResult;
                }
                return checkResult;
            };
            //街区档次
            BuildRoomList.prototype.checkBlock = function (roomInfo) {
                var checkResult = { result: true, reason: "" };
                var blockReq = Game.config.buildingLevel.getConfig(roomInfo.id).block_req;
                if (blockReq > User.info.stall) {
                    checkResult.result = false;
                    var blockCfg = Game.config.blockLevel.getConfig(blockReq);
                    var msg = Game.config.msg.getTxtFormat(MsgKey.build_non_block, blockCfg.name);
                    checkResult.reason = msg;
                    return checkResult;
                }
                return checkResult;
            };
            /**
             * 根据房间类型获取房间名
             * @param roomType
             */
            BuildRoomList.prototype.getRoomNameByType = function (roomType) {
                var list = Game.config.buildingLevel.getConfigList();
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var room = list_1[_i];
                    if (room.type == roomType) {
                        return room.name;
                    }
                }
            };
            //建造房间选择
            BuildRoomList.prototype.onRoomSelect = function (roomInfo) {
                var _this = this;
                if (this.checkCost(roomInfo)) {
                    var checkAll = this.checkAll(roomInfo);
                    if (!checkAll.result) {
                        return;
                    }
                    if (roomInfo.isBuilded) {
                        return;
                    }
                    Game.system.confirmText(Game.config.msg.getTxtFormat(MsgKey.build_confirm, roomInfo.name), "", null, function () {
                        //请求建造房间
                        Game.sound.playSound(SoundKey.MM06_Building);
                        Game.protosender.CinemaBuild.BuildRoom(_this.floor, roomInfo.type);
                        _this.dispose();
                        Games.AvatarManager.stopTimeAlloc();
                    }, null);
                }
            };
            //房间Tips
            BuildRoomList.prototype.onRoomTip = function () {
            };
            BuildRoomList.prototype.checkCost = function (roomInfo) {
                var costItemList = Game.config.buildingLevel.getConfig(roomInfo.id).cost;
                for (var _i = 0, costItemList_1 = costItemList; _i < costItemList_1.length; _i++) {
                    var cost = costItemList_1[_i];
                    var itemcfg = Game.config.item.getConfig(cost.itemId);
                    var hasItemNum = Game.moduleModel.item.getItemNum(cost.itemId);
                    if (cost.itemNum > hasItemNum) {
                        Game.system.openItemWay(cost.itemId, cost.itemNum);
                        return false;
                    }
                }
                return true;
            };
            //房间是否已建造
            BuildRoomList.prototype.isRoomBuilded = function (type) {
                var buildingRoomInfoList = Game.moduleModel.building.getInfoList();
                for (var _i = 0, buildingRoomInfoList_1 = buildingRoomInfoList; _i < buildingRoomInfoList_1.length; _i++) {
                    var info = buildingRoomInfoList_1[_i];
                    if (info.type == type) {
                        return true;
                    }
                }
                return false;
            };
            //获取所有房间列表
            BuildRoomList.prototype.getBuildRoomList = function () {
                var result = [];
                var roomListConfig = Game.config.buildingLevel.getConfigList();
                for (var _i = 0, roomListConfig_1 = roomListConfig; _i < roomListConfig_1.length; _i++) {
                    var source = roomListConfig_1[_i];
                    var isMatch = false;
                    for (var _a = 0, result_1 = result; _a < result_1.length; _a++) {
                        var des = result_1[_a];
                        if (des.type == source.type) {
                            isMatch = true;
                        }
                    }
                    if (!isMatch) {
                        result.push(source);
                    }
                }
                return result;
            };
            BuildRoomList.prototype.dispose = function () {
                Game.menu.close(MenuId.BuildRoomList);
            };
            BuildRoomList.prototype.onClose = function () {
                this.dispose();
            };
            //-------------------------------
            //房间引导
            //-------------------------------
            //获取房间触摸区同时滚动房间到顶部
            BuildRoomList.prototype.getRoomAndScrollTop = function (roomType) {
                var index = this.getRoomIndexByType(roomType);
                if (index < 0 || index > this.m_roomList.numChildren - 1)
                    return;
                this.m_roomList.scrollToView(index, false, true);
                return this.m_roomList.getChildAt(index);
            };
            BuildRoomList.prototype.getRoomIndexByType = function (roomType) {
                var num = this.m_roomList.numChildren;
                for (var i = 0; i < num; i++) {
                    var roomInfoItem = this.m_roomList.getChildAt(i);
                    if (roomInfoItem.info.type == roomType) {
                        return i;
                    }
                }
                return -1;
            };
            return BuildRoomList;
        }(Building.BuildRoomListStruct));
        Building.BuildRoomList = BuildRoomList;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildRoomList.js.map