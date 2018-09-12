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
    var Oscar;
    (function (Oscar) {
        var OscarShowFrontView = /** @class */ (function (_super) {
            __extends(OscarShowFrontView, _super);
            function OscarShowFrontView() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.selectIndex = 0;
                _this.finishIndex = -1;
                _this.currentIndex = 0;
                return _this;
            }
            OscarShowFrontView.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listOscarCup.itemRenderer = new Handler(this, this.RenderItem, null, false);
                this.m_btnCongra.onClick(this, this.OnBtnCongraClick);
                this.m_btnReward.onClick(this, this.OnBtnRewardClick);
                this.m_btnRight.onClick(this, this.OnBtnRightClick);
                this.m_btnLeft.onClick(this, this.OnBtnLeftClick);
            };
            OscarShowFrontView.prototype.Show = function () {
                this.selectIndex = 0;
                this.finishIndex = -1;
                this.currentIndex = 0;
                this.UpdateView();
            };
            OscarShowFrontView.prototype.Hide = function () {
            };
            OscarShowFrontView.prototype.Next = function (index) {
                if (index < 0) {
                    index = 0;
                }
                if (index > 4) {
                    index = 4;
                }
                this.currentIndex = index;
                this.Selected = this.currentIndex;
                this.finishIndex = this.currentIndex - 1;
            };
            OscarShowFrontView.prototype.Finish = function () {
                this.finishIndex = this.selectIndex;
                this.UpdateInfo();
            };
            OscarShowFrontView.prototype.UpdateView = function () {
                this.oscarAwardsList = Game.moduleModel.oscar.OscarAwardsList;
                this.m_listOscarCup.numItems = this.oscarAwardsList.length;
                if (this.selectIndex == null) {
                    this.Selected = 0;
                }
                else {
                    this.UpdateInfo();
                }
            };
            Object.defineProperty(OscarShowFrontView.prototype, "Selected", {
                set: function (index) {
                    if (index > 4) {
                        index = 4;
                    }
                    if (index < 0) {
                        index = 0;
                    }
                    this.selectIndex = index;
                    this.m_listOscarCup.selectedIndex = this.selectIndex;
                    this.UpdateInfo();
                },
                enumerable: true,
                configurable: true
            });
            OscarShowFrontView.prototype.UpdateInfo = function () {
                var data = this.oscarAwardsList[this.selectIndex];
                this.m_seletCup.setSelectedIndex(this.selectIndex);
                this.m_btnLeft.enabled = this.selectIndex > 0;
                this.m_btnRight.enabled = this.selectIndex < this.currentIndex;
                if (this.selectIndex > this.finishIndex) {
                    this.m_title.text = "???";
                    this.m_name.text = "";
                    this.ButtonState = 0;
                }
                else {
                    if (data && data.winner) {
                        this.m_title.text = data.winner.name;
                        this.m_name.text = data.winner.playerName;
                        if (data.winner.userId == User.account.userId) {
                            this.ButtonState = 2;
                        }
                        else {
                            this.ButtonState = 1;
                        }
                    }
                    else {
                        this.m_title.text = "";
                        this.m_name.text = "";
                        this.ButtonState = 0;
                    }
                }
            };
            Object.defineProperty(OscarShowFrontView.prototype, "ButtonState", {
                /**
                 * 设置按钮状态
                 * @param state: 0=不显示， 1=称赞， 2=领奖
                 */
                set: function (state) {
                    var data = this.oscarAwardsList[this.selectIndex];
                    switch (state) {
                        case 0:
                            this.m_buttonState.setSelectedIndex(0);
                            break;
                        case 1:
                            this.m_buttonState.setSelectedIndex(1);
                            this.m_btnCongra.enabled = !Game.moduleModel.oscar.HasGetReward(data.type);
                            break;
                        case 2:
                            this.m_buttonState.setSelectedIndex(2);
                            this.m_btnReward.enabled = !Game.moduleModel.oscar.HasGetReward(data.type);
                            break;
                        default:
                            break;
                    }
                },
                enumerable: true,
                configurable: true
            });
            OscarShowFrontView.prototype.RenderItem = function (index, obj) {
            };
            OscarShowFrontView.prototype.OnBtnCongraClick = function () {
                var data = this.oscarAwardsList[this.selectIndex];
                Game.protosender.rank.GetOscarReward(data.type);
            };
            OscarShowFrontView.prototype.OnBtnRewardClick = function () {
                var data = this.oscarAwardsList[this.selectIndex];
                Game.protosender.rank.GetOscarReward(data.type);
            };
            OscarShowFrontView.prototype.OnBtnRightClick = function () {
                if (this.selectIndex >= this.currentIndex) {
                    return;
                }
                this.Selected = this.selectIndex + 1;
            };
            OscarShowFrontView.prototype.OnBtnLeftClick = function () {
                if (this.selectIndex <= 0) {
                    return;
                }
                this.Selected = this.selectIndex - 1;
            };
            return OscarShowFrontView;
        }(Oscar.OscarShowFrontViewStruct));
        Oscar.OscarShowFrontView = OscarShowFrontView;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarShowFrontView.js.map