var Games;
(function (Games) {
    // ===========================
    // 层级类型
    // ---------------------------
    var MenuLayerType;
    (function (MenuLayerType) {
        // 主界面
        MenuLayerType[MenuLayerType["Home"] = 1] = "Home";
        // 主界面 上一层
        MenuLayerType[MenuLayerType["HomeTop"] = 2] = "HomeTop";
        // 模块
        MenuLayerType[MenuLayerType["Module"] = 3] = "Module";
        // 模块
        MenuLayerType[MenuLayerType["ModuleTop"] = 4] = "ModuleTop";
        // 主UI
        MenuLayerType[MenuLayerType["MainUI"] = 5] = "MainUI";
        // 对话框
        MenuLayerType[MenuLayerType["Dialog"] = 6] = "Dialog";
        // 引导
        MenuLayerType[MenuLayerType["Guide"] = 7] = "Guide";
        // 加载面板
        MenuLayerType[MenuLayerType["Loader"] = 8] = "Loader";
        // GM
        MenuLayerType[MenuLayerType["GM"] = 9] = "GM";
        // 浮动对话框
        MenuLayerType[MenuLayerType["FloatMsg"] = 10] = "FloatMsg";
    })(MenuLayerType = Games.MenuLayerType || (Games.MenuLayerType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=MenuLayerType.js.map