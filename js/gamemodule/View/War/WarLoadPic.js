var Games;
(function (Games) {
    //======================
    //读取图片
    //----------------------
    var WarLoadPic = /** @class */ (function () {
        function WarLoadPic() {
        }
        /**
         * 图标赋值
         * @param loader 图标装载器
         * @param val property需求：1102,1101
         */
        WarLoadPic.setIcon = function (loader, val) {
            if (val === 0) {
                loader.visible = false;
            }
            else {
                var propertyConfig = Game.config.property.getConfig(val);
                if (propertyConfig && propertyConfig.icon && propertyConfig.icon > 0) {
                    loader.icon = Game.config.avatar.getConfig(propertyConfig.icon).iconUrl;
                }
                else {
                    loader.visible = false;
                }
            }
        };
        /**
         * 半身像赋值
         */
        WarLoadPic.getActorIcon = function (avatar) {
            return Game.config.avatar.getConfig(avatar).bodyIconUrl;
        };
        /**
         * 依据itemid，获得图片
         * @param itemId
         */
        WarLoadPic.getItemIcon = function (itemId) {
            var conf = Game.config.item.getConfig(itemId).icon;
            return Game.config.avatar.getConfig(conf).iconUrl;
        };
        /**
         * 依据avaratId,获得图片
         * @param avatarId
         */
        WarLoadPic.getAvatarIcon = function (avatarId) {
            return Game.config.avatar.getConfig(avatarId).iconUrl;
        };
        /**
         * 依据角色类型，获取角色类型底图
         * @param type 类型 2102,2103
         */
        WarLoadPic.getActorTypeIcon = function (type) {
            var property = Game.config.property.getConfig(type);
            return Game.config.avatar.getConfig(property.icon).iconUrl;
        };
        return WarLoadPic;
    }());
    Games.WarLoadPic = WarLoadPic;
})(Games || (Games = {}));
//# sourceMappingURL=WarLoadPic.js.map