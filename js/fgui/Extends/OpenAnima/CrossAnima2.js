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
    var OpenAnima;
    (function (OpenAnima) {
        var CrossAnima2 = /** @class */ (function (_super) {
            __extends(CrossAnima2, _super);
            function CrossAnima2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CrossAnima2.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dialog.text = Game.config.speak.getConfig(10008).speak;
            };
            return CrossAnima2;
        }(OpenAnima.CrossAnima2Struct));
        OpenAnima.CrossAnima2 = CrossAnima2;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CrossAnima2.js.map