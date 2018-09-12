var Games;
(function (Games) {
    var MenuCloseOtherType;
    (function (MenuCloseOtherType) {
        // 不关闭任何面板
        MenuCloseOtherType[MenuCloseOtherType["None"] = 0] = "None";
        // 除自己外的所有
        MenuCloseOtherType[MenuCloseOtherType["ExceptSelf_All"] = 1] = "ExceptSelf_All";
        // 除自己外的所有模块层级面板
        MenuCloseOtherType[MenuCloseOtherType["ExceptSelf_Module"] = 2] = "ExceptSelf_Module";
        // 相同层级的其他面板
        MenuCloseOtherType[MenuCloseOtherType["ExceptSelf_SameLayer"] = 3] = "ExceptSelf_SameLayer";
    })(MenuCloseOtherType = Games.MenuCloseOtherType || (Games.MenuCloseOtherType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=MenuCloseOtherType.js.map