var Games;
(function (Games) {
    // =====================
    // fgui 设置
    // ---------------------
    var GuiSetting = /** @class */ (function () {
        function GuiSetting() {
        }
        GuiSetting.getResPackagePath = function (packageName, dir) {
            if (isNullOrEmpty(dir)) {
                return "" + GuiSetting.resRoot + packageName;
            }
            else {
                return "" + GuiSetting.resRoot + dir + "/" + packageName;
            }
        };
        GuiSetting.getResPath = function (filename, dir) {
            if (isNullOrEmpty(dir)) {
                return "" + GuiSetting.resRoot + filename;
            }
            else {
                return "" + GuiSetting.resRoot + dir + "/" + filename;
            }
        };
        GuiSetting.addPackage = function (resKey, packageConfig) {
            if (GuiSetting._uiPackageDict.hasKey(resKey)) {
                return GuiSetting._uiPackageDict.getValue(resKey);
            }
            else {
                var pkg = fairygui.UIPackage.addPackage(resKey);
                GuiSetting._uiPackageDict.add(resKey, pkg);
                return pkg;
            }
        };
        GuiSetting.removePackage = function (resKey, packageConfig) {
            var pkg = GuiSetting._uiPackageDict.getValue(resKey);
            if (pkg) {
                fairygui.UIPackage.removePackage(resKey);
                pkg.dispose();
                GuiSetting._uiPackageDict.remove(resKey);
            }
            GuiSetting._uiPackageDictForReferenceNum.remove(resKey);
        };
        GuiSetting.hasLoadPackage = function (resKey) {
            return GuiSetting._uiPackageDict.hasKey(resKey);
        };
        GuiSetting.addPackageReferenceNum = function (resKey) {
            var num = GuiSetting.getPackageReferenceNum(resKey) + 1;
            if (num == 0) {
                num = 1;
            }
            console.log("~~addPackageReferenceNum:  " + num + "  " + resKey);
            GuiSetting._uiPackageDictForReferenceNum.add(resKey, num);
            return num;
        };
        GuiSetting.removePackageReferenceNum = function (resKey) {
            var num = GuiSetting.getPackageReferenceNum(resKey) - 1;
            if (num < 0) {
                num = 0;
            }
            console.log("~~removePackageReferenceNum:  " + num + "  " + resKey);
            GuiSetting._uiPackageDictForReferenceNum.add(resKey, num);
            return num;
        };
        GuiSetting.getPackageReferenceNum = function (resKey) {
            return GuiSetting._uiPackageDictForReferenceNum.hasKey(resKey) ? GuiSetting._uiPackageDictForReferenceNum.getValue(resKey) : 0;
        };
        // 资源根目录
        GuiSetting.resRoot = "res/";
        // 后缀
        GuiSetting.packageFileExtension = "bin";
        // 包        
        GuiSetting._uiPackageDict = new Dictionary();
        // 包 引用次数
        GuiSetting._uiPackageDictForReferenceNum = new Dictionary();
        return GuiSetting;
    }());
    Games.GuiSetting = GuiSetting;
})(Games || (Games = {}));
//# sourceMappingURL=GuiSetting.js.map