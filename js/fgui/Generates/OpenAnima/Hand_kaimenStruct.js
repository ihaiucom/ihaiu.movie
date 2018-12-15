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
        var Hand_kaimenStruct = /** @class */ (function (_super) {
            __extends(Hand_kaimenStruct, _super);
            function Hand_kaimenStruct() {
                return _super.call(this) || this;
            }
            Hand_kaimenStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "hand_kaimen"));
            };
            Hand_kaimenStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_hand_kaimen = this.getController("hand_kaimen");
            };
            Hand_kaimenStruct.URL = "ui://oyge7e0tboch1q";
            Hand_kaimenStruct.DependPackages = ["OpenAnima"];
            return Hand_kaimenStruct;
        }(fairygui.GComponent));
        OpenAnima.Hand_kaimenStruct = Hand_kaimenStruct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Hand_kaimenStruct.js.map