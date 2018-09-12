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
        // 主UI
        MenuLayerType[MenuLayerType["MainUI"] = 4] = "MainUI";
        // 对话框
        MenuLayerType[MenuLayerType["Dialog"] = 5] = "Dialog";
        // 引导
        MenuLayerType[MenuLayerType["Guide"] = 6] = "Guide";
        // 加载面板
        MenuLayerType[MenuLayerType["Loader"] = 7] = "Loader";
        // GM
        MenuLayerType[MenuLayerType["GM"] = 8] = "GM";
        // 浮动对话框
        MenuLayerType[MenuLayerType["FloatMsg"] = 9] = "FloatMsg";
    })(MenuLayerType = Games.MenuLayerType || (Games.MenuLayerType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=MenuLayerType.js.map