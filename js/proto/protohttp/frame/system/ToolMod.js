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
/**
 * author chuhua
 */
var frame;
(function (frame) {
    var system;
    (function (system) {
        var ToolMod = /** @class */ (function (_super) {
            __extends(ToolMod, _super);
            function ToolMod() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 将数值转换为千位格式（千位带逗号）
             */
            ToolMod.prototype.convertAmount = function (n) {
                if (n == undefined || n < 0)
                    return "0";
                var str = n.toString();
                var newStr = "";
                var idx = 0;
                for (var i = str.length - 1; i >= 0; i--) {
                    newStr = str.charAt(i) + newStr;
                    idx++;
                    if (idx == 3) {
                        if (i > 0)
                            newStr = "," + newStr;
                        idx = 0;
                    }
                }
                return newStr;
            };
            /**
             * 将数值转换为整数千万亿格式（非整数convertAmountToWan）
             */
            ToolMod.prototype.convertIntegerNum = function (amount) {
                var str;
                var value;
                value = amount / 100000000;
                if (value >= 1 && Math.floor(value) == value)
                    return Math.floor(value) + "亿";
                value = amount / 10000;
                if (value >= 1 && Math.floor(value) == value)
                    return Math.floor(value) + "万";
                value = amount / 1000;
                if (value >= 1 && value <= 9 && Math.floor(value) == value)
                    return Math.floor(value) + "千";
                return Frame.Tool.convertAmountToWan(amount);
            };
            /**
             * 将数值转换为万亿格式
             */
            ToolMod.prototype.convertAmountToWan = function (n, digits) {
                if (digits === void 0) { digits = 1; }
                if (n == undefined)
                    return "0";
                var bv = Math.pow(10, digits);
                var n1;
                var n2;
                var dot;
                var i;
                if (Math.abs(n) >= 99999999) {
                    n1 = Math.floor(n / (100000000));
                    n2 = Math.floor(n / (100000000 / bv)) - n1 * bv;
                    if (n2 == 0 || digits <= 0)
                        return n1 + "亿";
                    dot = ".";
                    for (i = 0; i < digits - n2.toString().length; i++) {
                        dot = dot + "0";
                    }
                    return n1 + dot + n2 + "亿";
                }
                else if (Math.abs(n) > 9999) {
                    n1 = Math.floor(n / (10000));
                    n2 = Math.floor(n / (10000 / bv)) - n1 * bv;
                    if (n2 == 0 || digits <= 0)
                        return n1 + "万";
                    dot = ".";
                    for (i = 0; i < digits - n2.toString().length; i++) {
                        dot = dot + "0";
                    }
                    return n1 + dot + n2 + "万";
                }
                return n.toString();
            };
            /**
             * 在数组中增加一项（不重复）
             */
            ToolMod.prototype.addArrayItem = function (arr, item) {
                if (arr && arr.indexOf(item) < 0)
                    arr.push(item);
            };
            /**
             * 删除数组中的某一项
             */
            ToolMod.prototype.deleteArrayItem = function (arr, item) {
                if (arr) {
                    var idx = arr.indexOf(item);
                    if (idx >= 0) {
                        arr.splice(idx, 1);
                    }
                }
            };
            /**
             * 清空数组
             */
            ToolMod.prototype.clearArray = function (arr) {
                if (arr) {
                    arr.splice(0, arr.length);
                }
            };
            /**
             * 获得Unix时间（单位：秒）
             */
            ToolMod.prototype.getUnixTime = function () {
                return Math.floor(new Date().getTime() / 1000);
            };
            ToolMod.prototype.getCurrentTime = function () {
                var time = new Date(Frame.Tool.getUnixTime() * 1000).toString();
                time = time.substring(time.indexOf(":") - 2);
                time = time.substring(0, time.lastIndexOf(":") + 3);
                return time;
            };
            /**
             * 将文件名中的.转换为_
             */
            ToolMod.prototype.convertResName = function (fileName) {
                return fileName.replace(".", "_");
            };
            /**
             * 过滤字符（仅保留指定的字符）
             */
            ToolMod.prototype.filterChars = function (txt, reservedChars) {
                var newTxt = "";
                var mchar;
                for (var i = 0; i < txt.length; i++) {
                    mchar = txt.charAt(i);
                    if (reservedChars.indexOf(mchar) >= 0) {
                        newTxt += mchar;
                    }
                }
                return newTxt;
            };
            /**
             * 获取当前地址url参数的值
             * @param paramName     参数名
             */
            ToolMod.prototype.getUrlParam = function (url, paramName) {
                if (url && paramName) {
                    var s1 = url.indexOf("?" + paramName + "=");
                    if (s1 == -1)
                        s1 = url.indexOf("&" + paramName + "=");
                    if (s1 >= 0) {
                        s1 += paramName.length + 2;
                        var s2 = url.indexOf("&", s1);
                        var value;
                        if (s2 < 0) {
                            value = url.substring(s1);
                        }
                        else {
                            value = url.substring(s1, s2);
                        }
                        return value;
                    }
                }
                return null;
            };
            /**
             * 获得主机名（游戏名称前的地址）
             * @param url
             * @param gameName
             */
            ToolMod.prototype.getHostAddress = function (url, gameName) {
                var idx = url.indexOf(gameName);
                if (idx > 0) {
                    return url.substring(0, idx);
                }
                return url;
            };
            /**
             * 获得资源文件夹路径
             */
            ToolMod.prototype.getResPath = function () {
                var path = location.href;
                var idx;
                idx = path.indexOf("?");
                if (idx > 0)
                    path = path.substring(0, idx);
                idx = path.indexOf("index.");
                if (idx > 0)
                    path = path.substring(0, idx);
                if (path.substr(path.length - 1, 1) == "/")
                    path = path.substr(0, path.length - 1);
                path += "/resource/";
                return path;
            };
            ToolMod.prototype.objectToStr = function (obj) {
                var str = "[";
                var value;
                for (var key in obj) {
                    value = obj[key];
                    if (value instanceof Object || value instanceof Array) {
                        str += this.objectToStr(value);
                    }
                    else {
                        str += (key + "=" + obj[key] + " ");
                    }
                }
                str += "]";
                return str;
            };
            ToolMod.prototype.trimStr = function (str, maxLen, addDots) {
                if (addDots === void 0) { addDots = false; }
                var resultStr = str;
                if (resultStr.length > maxLen) {
                    resultStr = resultStr.substr(0, maxLen);
                    if (addDots)
                        resultStr += "...";
                }
                return resultStr;
            };
            ToolMod.prototype.lightenDarkenColor = function (color, amt) {
                var r = ((color & 0xFF0000) >> 16) + amt;
                if (r > 255)
                    r = 255;
                var g = ((color & 0x00FF00) >> 8) + amt;
                if (g > 255)
                    g = 255;
                var b = (color & 0x0000FF) + amt;
                if (b > 255)
                    b = 255;
                return (b | (g << 8) | (r << 16));
            };
            return ToolMod;
        }(frame.base.BaseSingleton));
        system.ToolMod = ToolMod;
    })(system = frame.system || (frame.system = {}));
})(frame || (frame = {}));
//# sourceMappingURL=ToolMod.js.map