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
    var WarMovie;
    (function (WarMovie) {
        var WarYRFilmItem = /** @class */ (function (_super) {
            __extends(WarYRFilmItem, _super);
            function WarYRFilmItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarYRFilmItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_attList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
            };
            WarYRFilmItem.prototype.setData = function (data, index, aggreementList, over) {
                this.attributeUpTip = new Array();
                this.m_tip.text = "";
                this.m_tipBg.visible = false;
                this.m_attList.numItems = 0;
                this.m_icon.setIcon(Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl);
                this.m_star.m_starList.numItems = data.star;
                var str = Game.config.msg.getConfig(MsgKey.movie_none_coordination).notice;
                if (aggreementList) {
                    if (aggreementList.length > 0) {
                        var haveStory = false;
                        var haveCharter = false;
                        for (var i = 0; i < aggreementList.length; i++) {
                            var canAdd = true;
                            for (var k = 0; k < this.attributeUpTip.length; k++) {
                                if (this.attributeUpTip[k].icon === aggreementList[i].attribute) {
                                    canAdd = false;
                                }
                            }
                            if (canAdd) {
                                if (aggreementList[i].type === 1 || aggreementList[i].type === 2) {
                                    haveStory = true;
                                    var aut = new AttributeUpTip();
                                    aut.icon = aggreementList[i].attribute;
                                    aut.str = Game.config.msg.getConfig(MsgKey.movie_story_coordination_tips).notice;
                                    this.attributeUpTip.push(aut);
                                }
                                if (aggreementList[i].type === 3) {
                                    haveCharter = true;
                                    var aut = new AttributeUpTip();
                                    aut.icon = aggreementList[i].attribute;
                                    aut.str = Game.config.msg.getConfig(MsgKey.movie_character_coordination_tips).notice;
                                    this.attributeUpTip.push(aut);
                                }
                            }
                        }
                        if (haveStory && haveCharter) {
                            str = Game.config.msg.getConfig(MsgKey.movie_story_character_coordination).notice;
                        }
                        else if (haveStory) {
                            str = Game.config.msg.getConfig(MsgKey.movie_story_coordination).notice;
                        }
                        else {
                            str = Game.config.msg.getConfig(MsgKey.movie_character_coordination).notice;
                        }
                        this.m_attList.numItems = this.attributeUpTip.length;
                    }
                    if (over) {
                        this.m_tip.text = str;
                        if (str.length > 1) {
                            this.m_tipBg.visible = true;
                        }
                    }
                }
                else {
                    if (over) {
                        this.m_tip.text = str;
                        if (str.length > 1) {
                            this.m_tipBg.visible = true;
                        }
                    }
                }
            };
            // warAttributeUpTip
            WarYRFilmItem.prototype.initItem = function (index, obj) {
                var item = obj;
                if (this.attributeUpTip && this.attributeUpTip.length > index) {
                    item.setData(this.attributeUpTip[index]);
                }
            };
            return WarYRFilmItem;
        }(WarMovie.WarYRFilmItemStruct));
        WarMovie.WarYRFilmItem = WarYRFilmItem;
        // 属性是否契合
        var AttributeUpTip = /** @class */ (function () {
            function AttributeUpTip() {
            }
            return AttributeUpTip;
        }());
        WarMovie.AttributeUpTip = AttributeUpTip;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRFilmItem.js.map