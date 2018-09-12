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
        var ArtistForzenUI = /** @class */ (function (_super) {
            __extends(ArtistForzenUI, _super);
            function ArtistForzenUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistForzenUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_artlist.setVirtual();
                // this.m_artlist.setVirtualAndLoop()
                this.m_artlist.itemRenderer = Handler.create(this, this.onUpdateItem, null, false);
                //没有雪藏艺人
                this.m_noTip.text = Games.TEXT.NoForzen;
            };
            ArtistForzenUI.prototype.updateView = function () {
                this.actors = Game.moduleModel.actor.getHideActors();
                this.m_artlist.numItems = this.actors.length;
                //雪藏
                if (this.actors.length <= 0) {
                    this.m_noTip.visible = true;
                }
                else {
                    this.m_noTip.visible = false;
                }
                this.m_canLabel.text = format(Games.TEXT.CanHideActorNums, this.actors.length, User.info.maxHideActor);
                this.m_artName.text = Games.TEXT.HideActor;
                this.m_descLabel.text = Games.TEXT.HideActorDesc;
            };
            /**
             *
             * @param index
             * @param item
             */
            ArtistForzenUI.prototype.onUpdateItem = function (index, item) {
                var gItem = item;
                gItem.updateView(this.actors[index]);
            };
            return ArtistForzenUI;
        }(PfSkin.ArtistForzenUIStruct));
        PfSkin.ArtistForzenUI = ArtistForzenUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistForzenUI.js.map