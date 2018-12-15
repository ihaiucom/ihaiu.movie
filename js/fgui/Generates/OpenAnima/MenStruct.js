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
        var MenStruct = /** @class */ (function (_super) {
            __extends(MenStruct, _super);
            function MenStruct() {
                return _super.call(this) || this;
            }
            MenStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "men"));
            };
            MenStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_hand = (this.getChild("hand"));
            };
            MenStruct.URL = "ui://oyge7e0tboch1o";
            MenStruct.DependPackages = ["OpenAnima"];
            return MenStruct;
        }(fairygui.GComponent));
        OpenAnima.MenStruct = MenStruct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MenStruct.js.map