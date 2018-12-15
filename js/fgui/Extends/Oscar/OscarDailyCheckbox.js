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
        var OscarDailyCheckbox = /** @class */ (function (_super) {
            __extends(OscarDailyCheckbox, _super);
            function OscarDailyCheckbox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OscarDailyCheckbox.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnLeft.onClick(this, this.OnLeftClick);
                this.m_btnRight.onClick(this, this.OnRightClick);
            };
            OscarDailyCheckbox.prototype.SetHandler = function (caller, func) {
                this.changehandler = Handler.create(caller, func, null, false);
            };
            Object.defineProperty(OscarDailyCheckbox.prototype, "selected", {
                get: function () {
                    return this.m_state.selectedIndex == 1;
                },
                set: function (isSelect) {
                    this.m_state.setSelectedIndex(isSelect ? 1 : 0);
                },
                enumerable: true,
                configurable: true
            });
            OscarDailyCheckbox.prototype.OnLeftClick = function () {
                this.selected = false;
                this.CallChangeHandler();
            };
            OscarDailyCheckbox.prototype.OnRightClick = function () {
                this.selected = true;
                this.CallChangeHandler();
            };
            OscarDailyCheckbox.prototype.CallChangeHandler = function () {
                if (this.changehandler) {
                    this.changehandler.run();
                }
            };
            return OscarDailyCheckbox;
        }(Oscar.OscarDailyCheckboxStruct));
        Oscar.OscarDailyCheckbox = OscarDailyCheckbox;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarDailyCheckbox.js.map