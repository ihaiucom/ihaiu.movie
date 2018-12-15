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
    var MainUI;
    (function (MainUI) {
        var WarExpect = /** @class */ (function (_super) {
            __extends(WarExpect, _super);
            function WarExpect() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.showHide = false;
                return _this;
            }
            WarExpect.prototype.showHidePanel = function (showHide) {
                if (showHide === void 0) { showHide = true; }
                this.showHide = showHide;
                this.visible = this.showHide;
                if (this.visible) {
                    this.onWindowShow();
                }
                else {
                    this.onWindowHide();
                }
            };
            // 窗口显示
            WarExpect.prototype.onWindowShow = function () {
                if (this.visible) {
                    this.m_t0.play(null, -1);
                }
            };
            // 窗口隐藏
            WarExpect.prototype.onWindowHide = function () {
                this.m_t0.stop();
            };
            /**
             * 期待值赋值
             * @param showHide true显示，false隐藏
             */
            WarExpect.prototype.setData = function (showHide) {
                if (showHide === void 0) { showHide = true; }
                if (this.showHide) {
                    var expectVal = User.info.expected;
                    var movieExpect = Game.config.movieExpect.getConfigWithExpect(expectVal);
                    var indexOf = 0;
                    switch (movieExpect.id) {
                        case 1:
                        case 2:
                            {
                                indexOf = 1;
                            }
                            break;
                        case 3:
                        case 4:
                            {
                                indexOf = 2;
                            }
                            break;
                        default:
                            {
                                indexOf = 0;
                            }
                            break;
                    }
                    this.m_control.setSelectedIndex(indexOf);
                    this.m_expectProgress.m_Progress.setSelectedIndex(indexOf);
                    var max = movieExpect.expect_req_max;
                    if (max < 0) {
                        max = expectVal + 10;
                    }
                    this.m_expectProgress.max = max;
                    this.m_expectProgress.value = expectVal;
                    if (movieExpect.expect_req_max < 0) {
                        this.m_expectProgress.m_title.text = expectVal.toFixed(0);
                    }
                    this.m_tip1.text = movieExpect.name;
                }
            };
            return WarExpect;
        }(MainUI.WarExpectStruct));
        MainUI.WarExpect = WarExpect;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarExpect.js.map