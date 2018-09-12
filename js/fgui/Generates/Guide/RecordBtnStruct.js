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
        var RecordBtnStruct = /** @class */ (function (_super) {
            __extends(RecordBtnStruct, _super);
            function RecordBtnStruct() {
                return _super.call(this) || this;
            }
            RecordBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "RecordBtn"));
            };
            RecordBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            RecordBtnStruct.URL = "ui://toebkrsr7vaw1k";
            RecordBtnStruct.DependPackages = ["Guide"];
            return RecordBtnStruct;
        }(fairygui.GButton));
        Guide.RecordBtnStruct = RecordBtnStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RecordBtnStruct.js.map