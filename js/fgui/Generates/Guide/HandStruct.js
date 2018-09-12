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
        var HandStruct = /** @class */ (function (_super) {
            __extends(HandStruct, _super);
            function HandStruct() {
                return _super.call(this) || this;
            }
            HandStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "Hand"));
            };
            HandStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            HandStruct.URL = "ui://toebkrsrs9dx1e";
            HandStruct.DependPackages = ["Guide"];
            return HandStruct;
        }(fairygui.GComponent));
        Guide.HandStruct = HandStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=HandStruct.js.map