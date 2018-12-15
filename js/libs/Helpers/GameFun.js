// 随机角色名称
function getRandomRoleName() {
    var surnames = Game.config.randomSurname.getConfigList();
    var names = Game.config.randomName.getConfigList();
    return names[Random.range(0, names.length)].text + " " + surnames[Random.range(0, surnames.length)].text;
}
// 验证角色名
function validateRoleName(name, minLength, maxLenght) {
    if (minLength === void 0) { minLength = 4; }
    if (maxLenght === void 0) { maxLenght = 18; }
    if (isNullOrEmpty(name)) {
        Game.system.toastText(Games.TEXT.ErrorNameEmpty);
        return;
    }
    var length = getStringLength(name);
    if (length < minLength || length > maxLenght) {
        Game.system.toastMsg(MsgKey.account_name_long, minLength, maxLenght);
        return false;
    }
    // if (/^(?=.*\d.*\b)/.test(name))
    // {
    // 	Game.system.toastText(TEXT.SystemDisAllowHaveNumber);
    // 	return false;
    // }
    if (/^[0-9.]*$/.test(name)) {
        Game.system.toastText(Game.config.msg.getTxt(MsgKey.account_name_num));
        return false;
    }
    if (isStartOrEndWithNumber(name)) {
        Game.system.toastText(TEXT.SystemDisAllowHaveStartLastNumber);
        return false;
    }
    if (isNumber(name)) {
        Game.system.toastText(Game.config.msg.getTxt(MsgKey.account_name_num));
        return false;
    }
    if (isStartOrEndWithSpace(name)) {
        Game.system.toastText(Game.config.msg.getTxt(MsgKey.account_name_space));
        return false;
    }
    if (!validateBlockWords(name, true)) {
        return false;
    }
    return true;
}
// 验证角色名
function validateOtherName(name, maxLength) {
    if (maxLength === void 0) { maxLength = 18; }
    var minLength = 4;
    if (isNullOrEmpty(name)) {
        Game.system.toastText(Games.TEXT.ErrorNameEmpty);
        return;
    }
    var length = getStringLength(name);
    if (length < minLength || length > maxLength) {
        Game.system.toastMsg(MsgKey.account_name_long, minLength, maxLength);
        return false;
    }
    if (isStartOrEndWithNumber(name)) {
        Game.system.toastText(TEXT.SystemDisAllowHaveStartLastNumber);
        return false;
    }
    if (isNumber(name)) {
        Game.system.toastText(Game.config.msg.getTxt(MsgKey.account_name_num));
        return false;
    }
    if (isStartOrEndWithSpace(name)) {
        Game.system.toastText(Game.config.msg.getTxt(MsgKey.account_name_space));
        return false;
    }
    if (!validateBlockWords(name, true)) {
        return false;
    }
    return true;
}
// 验证弹幕
function validateServerName(name, minLength, maxLenght) {
    if (minLength === void 0) { minLength = 4; }
    if (maxLenght === void 0) { maxLenght = 18; }
    if (isNullOrEmpty(name)) {
        Game.system.toastText(Games.TEXT.ErrorNameEmpty);
        return;
    }
    var length = getStringLength(name);
    if (length < minLength || length > maxLenght) {
        Game.system.toastText(Games.TEXT.OscarDanmuLong);
        return false;
    }
    if (isStartOrEndWithSpace(name)) {
        Game.system.toastText(Games.TEXT.OscarDanmuSpace);
        return false;
    }
    if (!validateBlockWords(name)) {
        Game.system.toastText(Games.TEXT.OscarDanmuBlockword);
        return false;
    }
    return true;
}
// 验证弹幕
function validateDanmu(name, minLength, maxLenght) {
    if (minLength === void 0) { minLength = 4; }
    if (maxLenght === void 0) { maxLenght = 100; }
    if (isNullOrEmpty(name)) {
        Game.system.toastText(Games.TEXT.ErrorContentEmpty);
        return;
    }
    var length = getStringLength(name);
    if (length < minLength || length > maxLenght) {
        Game.system.toastText(Games.TEXT.OscarDanmuLong);
        return false;
    }
    if (isStartOrEndWithSpace(name)) {
        Game.system.toastText(Games.TEXT.OscarDanmuSpace);
        return false;
    }
    if (!validateBlockWords(name)) {
        Game.system.toastText(Games.TEXT.OscarDanmuBlockword);
        return false;
    }
    return true;
}
//验证屏蔽字符
function validateBlockWords(name, alert) {
    //屏蔽字库 @BlockWords.xlsx
    var blockWords1 = Game.config.blockWords.wordList;
    var validate = __validateBlockWords(name, blockWords1);
    if (!validate) {
        if (alert) {
            Game.system.toastText(Game.config.msg.getTxt(MsgKey.account_name_blockword));
        }
        return false;
    }
    //屏蔽字库 @BlockWordsII.xlsx
    var blockWords2 = Game.config.blockWordsII.wordList;
    validate = __validateBlockWords(name, blockWords2, true);
    if (!validate) {
        if (alert) {
            Game.system.toastText(Game.config.msg.getTxt(MsgKey.account_name_blockword));
        }
        return false;
    }
    return true;
}
function __validateBlockWords(sources, blockWordList, wholeWords) {
    var n = blockWordList.length;
    for (var i = 0; i < n; i++) {
        if (wholeWords) {
            if (sources.toLowerCase() == blockWordList[i].toLowerCase()) {
                return false;
            }
        }
        else {
            if (sources.toLowerCase().indexOf(blockWordList[i].toLowerCase()) != -1) {
                return false;
            }
        }
    }
    return true;
}
// 留言板
function validateSendMsgBoard(content, maxLenght) {
    if (maxLenght === void 0) { maxLenght = 50; }
    if (isNullOrEmpty(content)) {
        Game.system.toastText(Games.TEXT.StoryContentEmpty);
        return;
    }
    var length = getStringLength(content);
    if (length < 1 || length > maxLenght) {
        Game.system.toastText(Games.TEXT.StoryContentToMax);
        return false;
    }
    if (isStartOrEndWithSpace(content)) {
        Game.system.toastText(Games.TEXT.StoryContentSpace);
        return false;
    }
    if (!validateBlockWords(content)) {
        Game.system.toastText(Games.TEXT.StoryContentBlockWord);
        return false;
    }
    return true;
}
function addSkillExp(actorId, amount) {
    Game.protosender.test.AddSkillExp(actorId, amount);
}
function AddStoryProgress(id, index) {
    var uuid = Game.moduleModel.story.getStoryData(id).uuid;
    // Game.protosender.test.AddStoryProgress(uuid, index);
}
var dark = [new Laya.ColorFilter([
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 1, 0
    ])];
var gold = [new Laya.ColorFilter([
        0.3, 0.3, 0.3, 0.3, 0.3,
        0.3, 0.1, 0.1, 0.3, 0.3,
        0, 0, 0, 0, 0,
        0, 0, 0, 1, 0
    ])];
function setDark(target) {
    target.displayObject.filters = dark;
}
function setGold(target) {
    target.displayObject.filters = gold;
}
function clearFilter(target) {
    target.displayObject.filters = [];
}
// 协议物品数量转DTItemNum
function ItemDesc2DTItemNum(protoItem) {
    var item = new DTItemNum();
    item.id = protoItem.itemId;
    item.itemId = protoItem.itemId;
    item.itemNum = protoItem.amount;
    return item;
}
function ItemDescList2DTItemNumList(protoItems) {
    var list = [];
    for (var _i = 0, protoItems_1 = protoItems; _i < protoItems_1.length; _i++) {
        var item = protoItems_1[_i];
        list.push(ItemDesc2DTItemNum(item));
    }
    return list;
}
function getAssetItemKey(item) {
    return item.type + " " + item.url;
}
function addItem(itemId, itemNum) {
    Game.protosender.test.AddItem(itemId, itemNum);
}
function addActor(actorId, name) {
    // Game.protosender.test.AddActor(actorId, name);
}
function addFans(amount) {
    Game.protosender.test.AddFans(amount);
}
function setBlockLevel(level) {
    Game.protosender.test.SetBlockLevel(level);
}
//获取头像
function getHeadPortrait(sex, headPortrait) {
    if (headPortrait == 0) {
        if (sex == 1101 || sex == 2002) {
            headPortrait = 1001;
        }
        else {
            headPortrait = 1101;
        }
    }
    return headPortrait;
}
var customStrList = ["{fans}", "{level}", "{name}", "{city}", "{actor}"];
/**
 * 格式化
 */
function contentFormatCustom(value) {
    var t;
    for (var index = 0; index < customStrList.length; index++) {
        var element = customStrList[index];
        var ind = value.indexOf(element);
        if (ind >= 0) {
            switch (element) {
                case "{fans}":
                    t = Game.moduleModel.item.getItemNum(EItemId.fans);
                    break;
                case "{level}":
                    t = User.info.level;
                    break;
                case "{name}":
                    t = User.info.name;
                    break;
                case "{city}":
                    t = User.info.level;
                    break;
                case "{actor}":
                    if (User.info.initActorId && User.info.initActorId > 0) {
                        t = Game.moduleModel.actor.getActor(User.info.initActorId).name;
                    }
                    break;
                default:
                    break;
            }
            value = value.replace(element, t);
        }
    }
    return value;
}
function contentFormatCustomId(value) {
    var t;
    if (isNumber(value)) {
        return value;
    }
    for (var index = 0; index < customStrList.length; index++) {
        var element = customStrList[index];
        var ind = value.indexOf(element);
        if (ind >= 0) {
            switch (element) {
                case "{name}":
                    t = User.info.sex == Proto.SE.EUserSex.boy ? 9996 : 9997;
                    break;
                case "{actor}":
                    if (User.info.initActorId && User.info.initActorId > 0) {
                        t = Game.moduleModel.actor.getActor(User.info.initActorId).config.avatarConfig.id;
                    }
                    break;
                default:
                    break;
            }
            value = value.replace(element, t);
        }
    }
    return toInt(value);
}
//# sourceMappingURL=GameFun.js.map