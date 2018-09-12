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
        var Marquee = /** @class */ (function (_super) {
            __extends(Marquee, _super);
            function Marquee() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isShow = false;
                return _this;
                // private OnLastFree()
                // {
                // 	if (this.isShow)
                // 	{
                // 		this.AddNewContent();
                // 	}
                // }
            }
            Marquee.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // this.m_way.AllFreeHandler = Handler.create(this, this.OnLastFree, null, false);
                this.tick = Game.tick.AddTick(20, -1, Handler.create(this, this.AddNewContent, null, false), null);
            };
            Marquee.prototype.UpdateView = function (msg, distance) {
                if (distance === void 0) { distance = 20; }
                this.msgList = msg;
                this.tick.SetDistance(distance);
            };
            Marquee.prototype.Show = function () {
                this.isShow = true;
                this.m_way.Show();
                this.tick.Continue();
            };
            Marquee.prototype.Hide = function () {
                this.isShow = false;
                this.m_way.Hide();
                this.tick.Stop();
            };
            Marquee.prototype.AddNewContent = function () {
                if (this.isShow && this.msgList) {
                    var range = this.msgList.length;
                    var rand = Math.random();
                    var index = Math.round(rand * (this.msgList.length - 1));
                    this.m_way.AddMsg(this.msgList[index]);
                }
            };
            return Marquee;
        }(Common.MarqueeStruct));
        Common.Marquee = Marquee;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Marquee.js.map