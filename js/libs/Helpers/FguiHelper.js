var TrailerTime = /** @class */ (function () {
    function TrailerTime() {
        this.count = 0;
        this.displayIndex = -1;
        this.renderClasses = null;
        this.autoStart = true;
        this.maxCount = 1;
    }
    TrailerTime.prototype.start = function (targetOrItemId, startPos, endPos, duration, parent, displayIndex, renderClasses, autoStart, maxCount) {
        if (displayIndex === void 0) { displayIndex = -1; }
        if (renderClasses === void 0) { renderClasses = null; }
        if (autoStart === void 0) { autoStart = true; }
        if (maxCount === void 0) { maxCount = 1; }
        this.count = 0;
        this.targetOrItemId = targetOrItemId;
        this.startPos = startPos;
        this.endPos = endPos;
        this.duration = duration;
        this.parent = parent;
        this.displayIndex = displayIndex;
        this.renderClasses = renderClasses;
        this.autoStart = autoStart;
        this.maxCount = maxCount;
        Laya.timer.loop(50, this, this.onTimeLoop, null, true, true);
    };
    TrailerTime.prototype.onTimeLoop = function () {
        this.count++;
        if (this.count > this.maxCount) {
            Laya.timer.clear(this, this.onTimeLoop);
            return;
        }
        FguiHelper.startTrailSingle(this.targetOrItemId, this.startPos, this.endPos, this.duration, this.parent, this.displayIndex, this.renderClasses, this.autoStart);
    };
    return TrailerTime;
}());
var FguiHelper = /** @class */ (function () {
    function FguiHelper() {
    }
    FguiHelper.setStringsSource = function (lang) {
        //let txtmap = fairygui.UIPackage["_stringsSource"] = {};
        var txtmap = fairygui.TranslationHelper["strings"] = {};
        var list = lang.getConfigList();
        for (var i = 0; i < list.length; i++) {
            var config = list[i];
            var name_1 = config.dict.getValue("name");
            var value = config.dict.getValue("value");
            var index = name_1.indexOf("-");
            if (value === undefined || value === null)
                continue;
            if (index == -1)
                continue;
            var uiUrl = name_1.substr(0, index);
            var uiNodeName = name_1.substr(index + 1);
            var col = txtmap[uiUrl];
            if (!col) {
                col = {};
                txtmap[uiUrl] = col;
            }
            col[uiNodeName] = value;
        }
    };
    FguiHelper.setGray = function (component) {
        if (!component)
            return;
        if (!FguiHelper.grayscaleFilters) {
            var grayscaleFilter = new Laya.ColorFilter(FguiHelper.grayscaleMat);
            FguiHelper.grayscaleFilters = [grayscaleFilter];
        }
        component.displayObject.filters = FguiHelper.grayscaleFilters;
    };
    FguiHelper.clearFilters = function (component) {
        if (!component)
            return;
        component.displayObject.filters = null;
    };
    Object.defineProperty(FguiHelper, "saturationFilters", {
        get: function () {
            if (!FguiHelper._saturationFilters) {
                FguiHelper._saturationFilters = [new Laya.ColorFilter(FguiHelper.saturation)];
            }
            return FguiHelper._saturationFilters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FguiHelper, "saturationFilters2", {
        get: function () {
            if (!FguiHelper._saturationFilters2) {
                FguiHelper._saturationFilters2 = [new Laya.ColorFilter(FguiHelper.saturation2)];
            }
            return FguiHelper._saturationFilters2;
        },
        enumerable: true,
        configurable: true
    });
    FguiHelper.halfStaturation = function (obj) {
        if (!obj)
            return;
        obj.displayObject.filters = FguiHelper.saturationFilters;
    };
    FguiHelper.half2Staturation = function (obj) {
        if (!obj)
            return;
        obj.displayObject.filters = FguiHelper.saturationFilters2;
    };
    //组件弹出效果
    FguiHelper.boundEffect = function (target, duration) {
        if (duration === void 0) { duration = 1000; }
        target.setPivot(0.5, 0.5);
        target.setScale(0.5, 0.5);
        Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, Laya.Ease.backOut, Handler.create(null, function () {
        }), 0, true, true);
    };
    /**
     * 效果 拖尾Wrapper
     * @param targetOrItemId
     * @param startPos
     * @param endPos
     * @param duration
     * @param parent
     * @param displayIndex
     * @param renderClasses
     * @param autoStart
     * @param startCount 发射数量，默认5次
     */
    FguiHelper.startTrail = function (targetOrItemId, startPos, endPos, duration, parent, displayIndex, renderClasses, autoStart, startCount) {
        if (displayIndex === void 0) { displayIndex = -1; }
        if (renderClasses === void 0) { renderClasses = null; }
        if (autoStart === void 0) { autoStart = true; }
        if (startCount === void 0) { startCount = 5; }
        var trailerTime = new TrailerTime();
        startCount = gameDeviceConfig.trailNum; //根据机型高低配置读取
        trailerTime.start(targetOrItemId, startPos, endPos, duration, parent, displayIndex, renderClasses, autoStart, startCount);
    };
    /**
     * 效果-拖尾单次
     * @param target 目标对象 | 物品id
     * @param startPos 开始位置
     * @param endPos 结束位置
     * @param parent 显示容器
     * @param displayIndex 显示层级
     * @param renderClasses fgui渲染类列表
     * @param autoStart 是否自动播放
     */
    FguiHelper.startTrailSingle = function (targetOrItemId, startPos, endPos, duration, parent, displayIndex, renderClasses, autoStart) {
        if (displayIndex === void 0) { displayIndex = -1; }
        if (renderClasses === void 0) { renderClasses = null; }
        if (autoStart === void 0) { autoStart = true; }
        if (!renderClasses) {
            renderClasses = [
                fgui.Fx.TrailerStar1,
                fgui.Fx.TrailerStar3,
            ];
        }
        var emitter = Game.Fx.creatTrail(renderClasses, parent, displayIndex, startPos.x, startPos.y, autoStart);
        var target = null;
        if (isNumber(targetOrItemId)) {
            target = fgui.Common.SplashAssetItem.createInstance();
            target["itemId"] = Number(targetOrItemId);
        }
        else {
            target = targetOrItemId;
        }
        if (target != null) {
            target.setPivot(0.5, 0.5);
            target.x = -target.width / 2;
            target.y = -target.height / 2;
            emitter.addChild(target.displayObject);
        }
        Laya.Tween.to(emitter, { x: endPos.x, y: endPos.y }, duration, Laya.Ease.linearIn, Handler.create(null, function (emitterTarget) {
            Game.pool.trailPool.recover(emitterTarget);
        }, [emitter]), 0, true, true);
    };
    //设置灰色
    FguiHelper.grayscaleMat = [0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0, 0, 0, 1, 0];
    FguiHelper.grayscaleFilters = null;
    FguiHelper.normalFilters = null;
    // 饱和度一半
    FguiHelper.saturation = [
        0.5, 0, 0, 0, 0,
        0, 0.5, 0, 0, 0,
        0, 0, 0.5, 0, 0,
        0, 0, 0, 1, 0,
    ];
    // 饱和度一半
    FguiHelper.saturation2 = [
        0.25, 0, 0, 0, 0,
        0, 0.25, 0, 0, 0,
        0, 0, 0.25, 0, 0,
        0, 0, 0, 1, 0,
    ];
    return FguiHelper;
}());
//# sourceMappingURL=FguiHelper.js.map