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
    var GM;
    (function (GM) {
        var GMLogItem = /** @class */ (function (_super) {
            __extends(GMLogItem, _super);
            function GMLogItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GMLogItem.prototype.setData = function (data) {
                this.data = data;
                try {
                    this.title = data.msg;
                }
                catch (e) {
                }
                switch (data.logType) {
                    case LogType.Log:
                        this.m_title.color = "#121212";
                        break;
                    case LogType.Warn:
                        this.m_title.color = "#FFFF00";
                        break;
                    case LogType.Error:
                        this.m_title.color = "#FF0000";
                        break;
                }
            };
            return GMLogItem;
        }(GM.GMLogItemStruct));
        GM.GMLogItem = GMLogItem;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMLogItem.js.map