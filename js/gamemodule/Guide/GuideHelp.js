/**
 * 引导查找UI方式类型
 */
var GuideFindUIType;
(function (GuideFindUIType) {
    /** 菜单按钮 */
    GuideFindUIType[GuideFindUIType["MenuId"] = 1] = "MenuId";
    /** UI路径 */
    GuideFindUIType[GuideFindUIType["UIPath"] = 2] = "UIPath";
    /** 列表数据索引 */
    GuideFindUIType[GuideFindUIType["ListIndex"] = 3] = "ListIndex";
    /** 列表数据查询 */
    GuideFindUIType[GuideFindUIType["ListFind"] = 4] = "ListFind";
    /** 通过自定义获取 */
    GuideFindUIType[GuideFindUIType["UICustomize"] = 5] = "UICustomize";
    /** 通过自定义获取传参数 */
    GuideFindUIType[GuideFindUIType["UICustomizeParam"] = 6] = "UICustomizeParam";
})(GuideFindUIType || (GuideFindUIType = {}));
/**
 * 引导查找UI 参数 -- 菜单按钮
 */
var GuideFindUIMenuIdParameter = /** @class */ (function () {
    function GuideFindUIMenuIdParameter() {
    }
    return GuideFindUIMenuIdParameter;
}());
/**
 * 引导查找UI 参数 -- UI路径
 */
var GuideFindUIPathParameter = /** @class */ (function () {
    function GuideFindUIPathParameter() {
    }
    return GuideFindUIPathParameter;
}());
/**
 * 引导查找UI 参数 -- 列表数据索引
 */
var GuideFindUIListIndexParameter = /** @class */ (function () {
    function GuideFindUIListIndexParameter() {
    }
    return GuideFindUIListIndexParameter;
}());
/**
 * 引导查找UI 参数 -- 列表数据查询
 */
var GuideFindUIListFindParameter = /** @class */ (function () {
    function GuideFindUIListFindParameter() {
    }
    return GuideFindUIListFindParameter;
}());
var GuideHelp = /** @class */ (function () {
    function GuideHelp() {
    }
    //获取主窗口id
    GuideHelp.getGuideMenuIdByConfig = function (id) {
        var config = Game.config.guidePath.getConfig(id);
        if (config) {
            return config.menuid;
        }
        return 0;
    };
    //获取
    GuideHelp.getGuideMenuWindow = function (config, systemCfg) {
        switch (config.find_ui_type) {
            case GuideFindUIType.MenuId:
                GuideHelp.findMenuIdParameter.menuId = config.sub_id;
                return GuideHelp.getUIForMenuId(GuideHelp.findMenuIdParameter);
            default:
                var menuCtl = Game.menu.getMenuCtl(config.menuid);
                if (menuCtl && menuCtl.moduleWindow) {
                    var content = menuCtl.moduleWindow;
                    if (config.sub_id > 0) {
                        return content.getSubwindow(config.sub_id);
                    }
                    return content;
                }
        }
        // 	case GuideFindUIType.UIPath:
        // 		break;
        // 	case GuideFindUIType.UICustomize:
        // 		return GuideHelp.getUIForCustomize(config);
        // 	case GuideFindUIType.UICustomizeParam:
        // 		return GuideHelp.getUIForCustomizeParam(config, systemCfg);
        // }
        return null;
    };
    //判断子窗口是否打开
    GuideHelp.getIsOpenSubIdByConfig = function (id) {
        var config = Game.config.guidePath.getConfig(id);
        var isOpen = true;
        if (config) {
            isOpen = Game.menu.getLastOpenMenuId() == config.menuid;
            if (isOpen) {
                var subId = config.sub_id;
                if (subId > 0) {
                    if (config.find_ui_type == GuideFindUIType.MenuId) {
                        var menuCtl = Game.menu.getMenuCtl(MenuId.Home);
                        if (menuCtl && menuCtl.moduleWindow && menuCtl.moduleWindow.contentPane) {
                            var mainUI = menuCtl.moduleWindow.contentPane;
                            isOpen = mainUI.getSubmenuIsOpened(Game.config.menu.getConfig(subId).barType);
                        }
                    }
                    else {
                        //判断子窗口打开状态
                        isOpen = Game.menu.isOpenedSubOrTab(config.menuid, subId);
                    }
                }
            }
        }
        return isOpen;
    };
    //获取引导按钮
    GuideHelp.getGuideUIByConfig = function (systemCfg) {
        var config = Game.config.guidePath.getConfig(systemCfg.path_id);
        if (config) {
            switch (config.find_ui_type) {
                case GuideFindUIType.MenuId:
                    GuideHelp.findMenuIdParameter.menuId = config.sub_id;
                    return GuideHelp.getUIForMenuId(GuideHelp.findMenuIdParameter);
                case GuideFindUIType.UIPath:
                    GuideHelp.findUIPathParameter.menuId = config.menuid;
                    GuideHelp.findUIPathParameter.uiPath = config.path;
                    return GuideHelp.getUIForMenuUIPath(GuideHelp.findUIPathParameter);
                case GuideFindUIType.ListIndex:
                    GuideHelp.findUIListIndexParameter.index = config.list_index;
                    GuideHelp.findUIListIndexParameter.itemUIPath = config.path;
                    GuideHelp.findUIPathParameter.menuId = config.menuid;
                    GuideHelp.findUIPathParameter.uiPath = config.list_path;
                    GuideHelp.findUIListIndexParameter.listUIPath = GuideHelp.findUIPathParameter;
                    return GuideHelp.getUIForListIndex(GuideHelp.findUIListIndexParameter);
                case GuideFindUIType.ListFind:
                    break;
                case GuideFindUIType.UICustomize:
                    return GuideHelp.getUIForCustomize(config);
                case GuideFindUIType.UICustomizeParam:
                    return GuideHelp.getUIForCustomizeParam(config, systemCfg);
            }
        }
        return null;
    };
    GuideHelp.getUIForCustomize = function (config) {
        var menuCtl = Game.menu.getMenuCtl(config.menuid);
        if (menuCtl && menuCtl.moduleWindow && menuCtl.moduleWindow) {
            var content = menuCtl.moduleWindow;
            return GuideHelp.getUIForFuncPath(content, config.path);
        }
        return null;
    };
    /**
     * 获取自定义参数组件
     * @param config
     */
    GuideHelp.getUIForCustomizeParam = function (config, systemCfg) {
        var menuCtl = Game.menu.getMenuCtl(config.menuid);
        if (menuCtl && menuCtl.moduleWindow && menuCtl.moduleWindow) {
            var content = menuCtl.moduleWindow;
            var args = [];
            if (systemCfg.path_par1 != null) {
                args.push(systemCfg.path_par1);
            }
            return GuideHelp.getUIForFuncPathParam(content, config.path, args);
        }
        return null;
    };
    GuideHelp.getIsOpenMenuByMenuId = function (menuId) {
        var menuCtl = Game.menu.getMenuCtl(menuId);
        if (menuCtl && menuCtl.state == Games.MenuCtlStateType.Opened) {
            return true;
        }
        return false;
    };
    /** 获取菜单按钮 */
    GuideHelp.getUIForMenuId = function (parameter) {
        var menuCtl = Game.menu.getMenuCtl(MenuId.Home);
        if (menuCtl && menuCtl.moduleWindow && menuCtl.moduleWindow.contentPane) {
            var mainUI = menuCtl.moduleWindow.contentPane;
            var menuButtonCtl = mainUI.getMenu(parameter.menuId);
            if (menuButtonCtl) {
                return menuButtonCtl.button;
            }
        }
        return null;
    };
    /** 获取模块UI路径 */
    GuideHelp.getUIForMenuUIPath = function (parameter) {
        if (parameter.menuId) {
            var menuCtl = Game.menu.getMenuCtl(parameter.menuId);
            if (menuCtl && menuCtl.moduleWindow && menuCtl.moduleWindow) {
                var content = menuCtl.moduleWindow;
                return GuideHelp.getUIForPath(content, parameter.uiPath);
            }
        }
        else {
            return getFieldValueForPath(parameter.uiPath);
        }
        return null;
    };
    /** 获取UI路径 */
    GuideHelp.getUIForPath = function (content, uiPath) {
        return getFieldValueForPath(uiPath, content);
    };
    /** 获取UI路径 */
    GuideHelp.getUIForFuncPath = function (content, funcPath) {
        return getFunResultForPath(funcPath, content);
    };
    /** 获取UI路径 */
    GuideHelp.getUIForFuncPathParam = function (content, funcPath) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return getFunResultForPath(funcPath, content, args);
    };
    /** 获取UI -- 列表数据索引 */
    GuideHelp.getUIForListIndex = function (parameter) {
        var listUI = GuideHelp.getUIForMenuUIPath(parameter.listUIPath);
        if (listUI && listUI.numItems > parameter.index) {
            listUI.scrollToView(parameter.index);
            var itemUI = listUI.getChildAt(listUI.itemIndexToChildIndex(parameter.index));
            if (itemUI) {
                if (isNullOrEmpty(parameter.itemUIPath)) {
                    return itemUI;
                }
                else {
                    return GuideHelp.getUIForPath(itemUI, parameter.itemUIPath);
                }
            }
        }
        return null;
    };
    /** 获取UI -- 列表数据索引 */
    GuideHelp.getUIListIndex = function (listUI, index) {
        if (listUI && listUI.numItems > index) {
            listUI.scrollToView(index);
            var itemUI = listUI.getChildAt(listUI.itemIndexToChildIndex(index));
            if (itemUI) {
                return itemUI;
            }
        }
        return null;
    };
    /** 获取UI -- 列表数据查询 */
    GuideHelp.getUIForListFind = function (parameter) {
        var listUI = GuideHelp.getUIForMenuUIPath(parameter.listUIPath);
        if (listUI) {
            var dataList = getValueForPath(parameter.dataListPath);
            if (dataList != null) {
                var selectIndex = -1;
                for (var i = 0; i < dataList.length; i++) {
                    var itemData = dataList[i];
                    if (itemData) {
                        var itemValue = getFieldValueForPath(parameter.itemDataFieldName, itemData);
                        if (itemValue == parameter.itemDataValue) {
                            selectIndex = i;
                            break;
                        }
                    }
                }
                if (selectIndex != -1) {
                    listUI.scrollToView(selectIndex);
                    var itemUI = listUI.getChildAt(listUI.itemIndexToChildIndex(selectIndex));
                    if (itemUI) {
                        return GuideHelp.getUIForPath(itemUI, parameter.itemUIPath);
                    }
                }
            }
        }
        return null;
    };
    GuideHelp.findMenuIdParameter = new GuideFindUIMenuIdParameter;
    GuideHelp.findUIListParameter = new GuideFindUIListFindParameter;
    GuideHelp.findUIListIndexParameter = new GuideFindUIListIndexParameter;
    GuideHelp.findUIPathParameter = new GuideFindUIPathParameter;
    return GuideHelp;
}());
//# sourceMappingURL=GuideHelp.js.map