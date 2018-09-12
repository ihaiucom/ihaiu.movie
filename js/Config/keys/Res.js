var Res = /** @class */ (function () {
    function Res() {
    }
    // 获取骨骼动画 -- 骨骼
    Res.getSpineSKPath = function (path) {
        return Res.root + "spine/" + path + ".sk";
    };
    // 获取骨骼动画 -- 皮肤
    Res.getSpinePngPath = function (path) {
        return Res.root + "spine/" + path + ".png";
    };
    //获取骨骼动画槽位部件
    Res.getSpineSoltPartPath = function (path) {
        return Res.root + "spine/SlotTexture/" + path + ".png";
    };
    // 获取Sprite图片
    Res.getSpritePath = function (path) {
        return Res.root + "fspriteassets/" + path + ".png";
    };
    Res.getRoom = function (id) {
        return Res.getSpritePath("Building/" + id);
    };
    //获取拍摄幕帘
    Res.getCinemaCanvasSK = function () {
        return Res.getSpineSKPath("Scene/Scene_SheYingpeng/Scene_SheYingpeng");
    };
    Res.getCinemaCanvasSkin = function () {
        return Res.getSpinePngPath("Scene/Scene_SheYingpeng/Scene_SheYingpeng");
    };
    //获取观众
    Res.getAudienceSK = function () {
        return Res.getSpineSKPath("Scene/Audience01/Audience01");
    };
    Res.getAudienceSkin = function () {
        var skinIndex = Random.rangeBoth(1, 4);
        return Res.getSpinePngPath("Scene/Audience01/Audience0" + skinIndex);
    };
    Object.defineProperty(Res, "cinemaHallActorSK", {
        //获取电影拍摄动画骨骼资源
        get: function () {
            return Res.getSpineSKPath("Scene/Cinema_Hall/Cinema_Hall1");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res, "cinemaHallActorSkin", {
        get: function () {
            return Res.getSpinePngPath("Scene/Cinema_Hall/Cinema_Hall1");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res, "cinemaHallDoorSK", {
        get: function () {
            return Res.getSpineSKPath("Scene/Cinema_Hall/Cinema_Hall2");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res, "cinemaHallDoorSkin", {
        get: function () {
            return Res.getSpinePngPath("Scene/Cinema_Hall/Cinema_Hall2");
        },
        enumerable: true,
        configurable: true
    });
    //获取--特效路径
    Res.getFx = function (path) {
        return Res.rootFx + path + ".part";
    };
    Res.rootFx = "fx/";
    Res.root = "res/";
    return Res;
}());
//# sourceMappingURL=Res.js.map