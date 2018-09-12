/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fgui;
(function (fgui) {
    var PfSkin;
    (function (PfSkin) {
        var StoryInfoItem = /** @class */ (function (_super) {
            __extends(StoryInfoItem, _super);
            function StoryInfoItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StoryInfoItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tagGroup.visible = false;
                this.m_head.onClick(this, this.onClickHandler);
            };
            StoryInfoItem.prototype.onClickHandler = function () {
                // Game.protosender.rank.GetPlayerShortData(this.playerData.userId);
                // Game.system
                Game.system.playerInfo(this.playerData.userId);
            };
            /**
             * 更新玩家留言
             * @param data
             */
            StoryInfoItem.prototype.updateView = function (data) {
                this.playerData = data;
                this.m_name.text = data.name;
                this.m_desc.text = data.message;
                var headPortrait = data.portrait;
                if (headPortrait == 0) {
                    if (data.sex == 1101 || data.sex == 2002) {
                        headPortrait = 1001;
                    }
                    else {
                        headPortrait = 1101;
                    }
                }
                this.m_head.icon = Game.config.avatar.getConfig(Game.config.headPortrait.getConfig(headPortrait).icon).iconUrl;
            };
            return StoryInfoItem;
        }(PfSkin.StoryInfoItemStruct));
        PfSkin.StoryInfoItem = StoryInfoItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryInfoItem.js.map