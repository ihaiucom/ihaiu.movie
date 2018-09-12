var Games;
(function (Games) {
    // ===========================
    // 层级类型
    // ---------------------------
    var MenuBarType;
    (function (MenuBarType) {
        // 没有按钮
        MenuBarType[MenuBarType["None"] = 0] = "None";
        // 主按钮栏--下
        MenuBarType[MenuBarType["Bottom"] = 1] = "Bottom";
        // 右下
        MenuBarType[MenuBarType["Right_Bottom"] = 2] = "Right_Bottom";
        // 右上
        MenuBarType[MenuBarType["Right_Top"] = 3] = "Right_Top";
        // 子菜单_经营
        MenuBarType[MenuBarType["SumBar_Run"] = 10001] = "SumBar_Run";
        // 子菜单_管理
        MenuBarType[MenuBarType["SumBar_Manage"] = 10002] = "SumBar_Manage";
        // 子菜单_社交
        MenuBarType[MenuBarType["SumBar_Social"] = 10003] = "SumBar_Social";
        // 子菜单_合作
        MenuBarType[MenuBarType["SumBar_Cooperation"] = 10004] = "SumBar_Cooperation";
    })(MenuBarType = Games.MenuBarType || (Games.MenuBarType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=MenuBarType.js.map