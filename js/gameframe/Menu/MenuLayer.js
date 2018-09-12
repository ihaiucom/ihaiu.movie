var Games;
(function (Games) {
    var MenuLayer = /** @class */ (function () {
        function MenuLayer() {
        }
        Object.defineProperty(MenuLayer, "dialogModel", {
            get: function () {
                if (!MenuLayer._dialogModel) {
                    MenuLayer._dialogModel = fgui.System.BGModel.createInstance();
                }
                return MenuLayer._dialogModel;
            },
            enumerable: true,
            configurable: true
        });
        MenuLayer.showDialogModel = function () {
            MenuLayer.dialog.width = ScreenSetting.screenWidth;
            MenuLayer.dialog.height = ScreenSetting.screenHeight;
            MenuLayer.dialogModel.m_bg.alpha = 0.8;
            MenuLayer.dialogModel.width = ScreenSetting.screenWidth;
            MenuLayer.dialogModel.height = ScreenSetting.screenHeight;
            if (MenuLayer.dialogModel)
                MenuLayer.dialog.addChildAt(MenuLayer.dialogModel, 0);
        };
        MenuLayer.hideDialogModel = function () {
            if (MenuLayer.dialogModel)
                MenuLayer.dialogModel.removeFromParent();
        };
        // 初始化
        MenuLayer.install = function () {
            // 根容器
            Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
            MenuLayer.root = fairygui.GRoot.inst;
            MenuLayer.home = MenuLayer.createLayer("MenuLayer-home");
            MenuLayer.homeTop = MenuLayer.createLayer("MenuLayer-homeTop");
            MenuLayer.module = MenuLayer.createLayer("MenuLayer-module");
            MenuLayer.mainUI = MenuLayer.createLayer("MenuLayer-mainUI");
            MenuLayer.dialog = MenuLayer.createLayer("MenuLayer-dialog");
            MenuLayer.guide = MenuLayer.createLayer("MenuLayer-guide");
            MenuLayer.loader = MenuLayer.createLayer("MenuLayer-loader");
            MenuLayer.gm = MenuLayer.createLayer("MenuLayer-gm");
            MenuLayer.floatMsg = MenuLayer.createLayer("MenuLayer-floatMsg");
            MenuLayer.dict.add(Games.MenuLayerType.Home, MenuLayer.home);
            MenuLayer.dict.add(Games.MenuLayerType.HomeTop, MenuLayer.homeTop);
            MenuLayer.dict.add(Games.MenuLayerType.Module, MenuLayer.module);
            MenuLayer.dict.add(Games.MenuLayerType.MainUI, MenuLayer.mainUI);
            MenuLayer.dict.add(Games.MenuLayerType.Dialog, MenuLayer.dialog);
            MenuLayer.dict.add(Games.MenuLayerType.Guide, MenuLayer.guide);
            MenuLayer.dict.add(Games.MenuLayerType.Loader, MenuLayer.loader);
            MenuLayer.dict.add(Games.MenuLayerType.GM, MenuLayer.gm);
            MenuLayer.dict.add(Games.MenuLayerType.FloatMsg, MenuLayer.floatMsg);
        };
        MenuLayer.getLayer = function (layerType) {
            return MenuLayer.dict.getValue(layerType);
        };
        MenuLayer.createLayer = function (name) {
            var root = MenuLayer.root;
            var v = new fairygui.GRoot();
            if (name) {
                v.name = name;
            }
            v.setSize(root.width, root.height);
            root.addChild(v);
            return v;
        };
        // 字典
        MenuLayer.dict = new Dictionary();
        return MenuLayer;
    }());
    Games.MenuLayer = MenuLayer;
})(Games || (Games = {}));
//# sourceMappingURL=MenuLayer.js.map