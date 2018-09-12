var Games;
(function (Games) {
    // ===========================
    // 打开menu方式
    // ---------------------------
    var MenuOpenType;
    (function (MenuOpenType) {
        // 默认
        MenuOpenType[MenuOpenType["None"] = 0] = "None";
        // Tab面板
        MenuOpenType[MenuOpenType["Tab"] = 2] = "Tab";
        // 子窗口
        MenuOpenType[MenuOpenType["Subwindow"] = 3] = "Subwindow";
    })(MenuOpenType = Games.MenuOpenType || (Games.MenuOpenType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=MenuOpenType.js.map