function isNumber(x) {
    return typeof x === "number";
}
//判断是否是正整数
function isInt(s) {
    if (s != null) {
        var r, re;
        re = /\d*/i; //\d表示数字,*表示匹配多个数字
        r = s.match(re);
        return (r == s) ? true : false;
    }
    return false;
}
function isString(x) {
    return typeof x === "string";
}
function isNullOrEmpty(x) {
    if (x instanceof Array)
        return x == null || x == undefined;
    return x == null || x == undefined || x == "";
}
// 获取类名
function getClassName(obj) {
    return obj["constructor"]["name"];
}
// 获取函数名
function getFunctionName(method) {
    return method["name"] || method.toString().match(/function\s*([^(]*)\(/)[1];
}
// 获取时间戳
function getTime() {
    return new Date().getTime();
}
// 获取时间戳 （秒）
function getTimeStamp() {
    return Math.floor(getTime() / 1000);
}
// 屏幕自适应
function autoScreenSize(content, alignH, alignV) {
    var rate = ScreenSetting.screenScaleExpand;
    content.width = content.sourceWidth * rate;
    content.height = content.sourceHeight * rate;
    if (alignH) {
        var parent_1 = fairygui.GRoot.inst;
        switch (alignH) {
            case Laya.Stage.ALIGN_LEFT:
                content.x = 0;
                break;
            case Laya.Stage.ALIGN_CENTER:
                content.x = (parent_1.width - content.width) * 0.5;
                break;
            case Laya.Stage.ALIGN_RIGHT:
                content.x = parent_1.width - content.width;
                break;
        }
        switch (alignV) {
            case Laya.Stage.ALIGN_TOP:
                content.y = 0;
                break;
            case Laya.Stage.ALIGN_MIDDLE:
                content.y = (parent_1.height - content.height) * 0.5;
                break;
            case Laya.Stage.ALIGN_BOTTOM:
                content.y = parent_1.height - content.height;
                break;
        }
    }
}
// 屏幕居中
function centerScreen(content) {
    content.x = (ScreenSetting.screenWidth - content.width) * 0.5;
    content.y = (ScreenSetting.screenHeight - content.height) * 0.5;
}
function centerScreenForCenter(content) {
    content.x = ScreenSetting.screenWidth * 0.5;
    content.y = ScreenSetting.screenHeight * 0.5;
}
// 屏幕大小
function setScreenSize(content) {
    content.width = ScreenSetting.screenWidth;
    content.height = ScreenSetting.screenHeight;
}
/** 获取值，使用访问路径 */
function getValueForPath(path, content) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (path.endsWith("()")) {
        return getFunResultForPath.apply(void 0, [path, content].concat(args));
    }
    else {
        return getFieldValueForPath(path, content);
    }
}
/** 获取函数结果值，使用访问路径 */
function getFunResultForPath(path, content) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (path.endsWith("()")) {
        path = path.replace("()", "");
        var fun = getFieldValueForPath(path, content);
        if (fun) {
            var paths = path.split(/[\.\/]/);
            if (paths.length == 1) {
                if (args.length == 1) {
                    return fun.apply(content, args[0]);
                }
                return fun.apply(content, args);
            }
            else {
                var objPath = "";
                var gap = "";
                for (var i = 0; i < paths.length - 1; i++) {
                    objPath += gap + paths[i];
                    gap = ".";
                }
                var obj = getFieldValueForPath(objPath, content);
                if (args.length == 1) {
                    return fun.apply(obj, args[0]);
                }
                return fun.apply(obj, args);
            }
        }
    }
    else {
        return getFieldValueForPath(path, content);
    }
}
/** 获取值，使用访问路径 */
function getFieldValueForPath(path, content) {
    if (!content) {
        content = window;
        if (!content) {
            content = this;
        }
    }
    var paths = path.split(/[\.\/]/);
    var val = content;
    for (var i = 0; i < paths.length; i++) {
        if (val[paths[i]]) {
            val = val[paths[i]];
        }
        else {
            return null;
        }
    }
    return val;
}
function bToStr(b) {
    if (b < 1024) {
        return b + "B";
    }
    var kb = b / 1024;
    return kbToStr(kb);
}
function kbToStr(kb) {
    if (kb < 1024) {
        return Math.ceil(kb) + "KB";
    }
    var mb = kb / 1024;
    if (mb < 1024) {
        return (Math.ceil(mb * 100) / 100) + "MB";
    }
    var gb = mb / 1024;
    return (Math.ceil(gb * 100) / 100) + "GB";
}
//# sourceMappingURL=Fun.js.map