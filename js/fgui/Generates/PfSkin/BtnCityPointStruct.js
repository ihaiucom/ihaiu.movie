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
    var PfSkin;
    (function (PfSkin) {
        var BtnCityPointStruct = /** @class */ (function (_super) {
            __extends(BtnCityPointStruct, _super);
            function BtnCityPointStruct() {
                return _super.call(this) || this;
            }
            BtnCityPointStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "BtnCityPoint"));
            };
            BtnCityPointStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_title = (this.getChild("title"));
                this.m_progress = (this.getChild("progress"));
                this.m_tranOccupy = this.getTransition("tranOccupy");
            };
            BtnCityPointStruct.URL = "ui://s33x8418mywn1kg";
            BtnCityPointStruct.DependPackages = ["PfSkin"];
            return BtnCityPointStruct;
        }(fairygui.GButton));
        PfSkin.BtnCityPointStruct = BtnCityPointStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnCityPointStruct.js.map