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
        var Hand_kaixiangStruct = /** @class */ (function (_super) {
            __extends(Hand_kaixiangStruct, _super);
            function Hand_kaixiangStruct() {
                return _super.call(this) || this;
            }
            Hand_kaixiangStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "hand_kaixiang"));
            };
            Hand_kaixiangStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_hand_kaixiang = this.getController("hand_kaixiang");
            };
            Hand_kaixiangStruct.URL = "ui://oyge7e0tboch1l";
            Hand_kaixiangStruct.DependPackages = ["OpenAnima"];
            return Hand_kaixiangStruct;
        }(fairygui.GComponent));
        OpenAnima.Hand_kaixiangStruct = Hand_kaixiangStruct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Hand_kaixiangStruct.js.map