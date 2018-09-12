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
        var OscarDanmu = /** @class */ (function (_super) {
            __extends(OscarDanmu, _super);
            function OscarDanmu() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OscarDanmu.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.itemRenderer = new Handler(this, this.RenderItem, null, false);
                this.m_list.numItems = 10;
            };
            OscarDanmu.prototype.Show = function () {
                for (var index = 0; index < this.m_list.numChildren; index++) {
                    var item = this.m_list.getChildAt(index);
                    item.Show();
                }
            };
            OscarDanmu.prototype.Hide = function () {
                for (var index = 0; index < this.m_list.numChildren; index++) {
                    var item = this.m_list.getChildAt(index);
                    item.Hide();
                }
            };
            OscarDanmu.prototype.RenderItem = function (index, obj) {
            };
            OscarDanmu.prototype.UpdateView = function () {
            };
            OscarDanmu.prototype.AddDanmuList = function (danmuList) {
                if (danmuList == null) {
                    return;
                }
                for (var index = 0; index < danmuList.length; index++) {
                    var danmu = danmuList[index];
                    this.AddDanmu(danmu);
                }
            };
            OscarDanmu.prototype.AddDanmu = function (danmu) {
                var freetime = Number.MAX_VALUE;
                var freeItem;
                for (var index = 0; index < this.m_list.numChildren; index++) {
                    var item = this.m_list.getChildAt(index);
                    if (item.freeTime < freetime) {
                        freetime = item.freeTime;
                        freeItem = item;
                    }
                }
                if (freeItem) {
                    freeItem.AddDanmu(danmu);
                }
            };
            return OscarDanmu;
        }(Common.OscarDanmuStruct));
        Common.OscarDanmu = OscarDanmu;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarDanmu.js.map