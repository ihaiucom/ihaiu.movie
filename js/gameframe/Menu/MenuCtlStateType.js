var Games;
(function (Games) {
    // ===========================
    // menu状态
    // ---------------------------
    var MenuCtlStateType;
    (function (MenuCtlStateType) {
        // 关闭的，或者没打开过
        MenuCtlStateType[MenuCtlStateType["Closed"] = 1] = "Closed";
        // 加载中
        MenuCtlStateType[MenuCtlStateType["Loading"] = 2] = "Loading";
        // 打开的
        MenuCtlStateType[MenuCtlStateType["Opened"] = 3] = "Opened";
        // 销毁的
        MenuCtlStateType[MenuCtlStateType["Destoryed"] = 4] = "Destoryed";
    })(MenuCtlStateType = Games.MenuCtlStateType || (Games.MenuCtlStateType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=MenuCtlStateType.js.map