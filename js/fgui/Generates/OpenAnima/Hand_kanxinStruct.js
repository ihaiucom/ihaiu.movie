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
        var Hand_kanxinStruct = /** @class */ (function (_super) {
            __extends(Hand_kanxinStruct, _super);
            function Hand_kanxinStruct() {
                return _super.call(this) || this;
            }
            Hand_kanxinStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "hand_kanxin"));
            };
            Hand_kanxinStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_hand_kanxin = this.getController("hand_kanxin");
            };
            Hand_kanxinStruct.URL = "ui://oyge7e0tboch23";
            Hand_kanxinStruct.DependPackages = ["OpenAnima"];
            return Hand_kanxinStruct;
        }(fairygui.GComponent));
        OpenAnima.Hand_kanxinStruct = Hand_kanxinStruct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Hand_kanxinStruct.js.map