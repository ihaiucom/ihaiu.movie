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
        var LeftTimeBtnStruct = /** @class */ (function (_super) {
            __extends(LeftTimeBtnStruct, _super);
            function LeftTimeBtnStruct() {
                return _super.call(this) || this;
            }
            LeftTimeBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "LeftTimeBtn"));
            };
            LeftTimeBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
                this.m_costIcon = (this.getChild("costIcon"));
                this.m_title2 = (this.getChild("title2"));
            };
            LeftTimeBtnStruct.URL = "ui://s33x8418aqgxt1x0";
            LeftTimeBtnStruct.DependPackages = ["PfSkin", "Common"];
            return LeftTimeBtnStruct;
        }(fairygui.GButton));
        PfSkin.LeftTimeBtnStruct = LeftTimeBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LeftTimeBtnStruct.js.map