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
    var Guide;
    (function (Guide) {
        var GuideClickHand = /** @class */ (function (_super) {
            __extends(GuideClickHand, _super);
            function GuideClickHand() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GuideClickHand.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.touchable = false;
            };
            GuideClickHand.prototype.dispose = function () {
                console.log("dispose 窗口被销毁");
                this.recyclingHand();
            };
            // 窗口隐藏
            GuideClickHand.prototype.onWindowHide = function () {
                // console.log("GuideClickHand 窗口隐藏");
                this.recyclingHand();
            };
            // 菜单管理调的销毁
            GuideClickHand.prototype.onWindowDestory = function () {
                // console.log("GuideClickHand 销毁");
                this.recyclingHand();
                return true;
            };
            GuideClickHand.prototype.recyclingHand = function () {
                this.removeFromParent();
            };
            return GuideClickHand;
        }(Guide.GuideClickHandStruct));
        Guide.GuideClickHand = GuideClickHand;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideClickHand.js.map