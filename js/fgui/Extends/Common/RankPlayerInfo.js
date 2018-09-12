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
    var Common;
    (function (Common) {
        var RankPlayerInfo = /** @class */ (function (_super) {
            __extends(RankPlayerInfo, _super);
            function RankPlayerInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RankPlayerInfo.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            RankPlayerInfo.prototype.Render = function (playerData) {
                this.playerData = playerData;
                if (this.playerData) {
                    this.m_name.text = this.playerData.name;
                    this.m_lv.text = "Lv." + this.playerData.level;
                    this.m_street.m_value.text = Game.moduleModel.street.GetStreetName(this.playerData.blockLevel);
                    this.m_build.m_value.text = this.playerData.numBuilding.toString();
                    this.m_actor.m_value.text = this.playerData.numActor.toString();
                    var cityStreet = new Games.CityStreetData(this.playerData.city);
                    this.m_market.m_value.text = cityStreet.cityNum + "-" + cityStreet.num;
                    this.m_icon.url = Game.config.headPortrait.GetPlayerIconUrl(this.playerData.portrait, this.playerData.sex);
                    if (this.playerData.perSignature == "") {
                        if (this.playerData.userId == User.account.userId) {
                            this.playerData.perSignature = Games.TEXT.PlayerSelfSignature;
                        }
                        else {
                            this.playerData.perSignature = Games.TEXT.PlayerSignature;
                        }
                    }
                    this.m_signature.text = this.playerData.perSignature == "" ? Games.TEXT.PlayerSignature : this.playerData.perSignature;
                    this.m_union.text = "";
                }
            };
            return RankPlayerInfo;
        }(Common.RankPlayerInfoStruct));
        Common.RankPlayerInfo = RankPlayerInfo;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankPlayerInfo.js.map