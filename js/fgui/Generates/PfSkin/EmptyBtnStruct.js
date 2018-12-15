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
        var EmptyBtnStruct = /** @class */ (function (_super) {
            __extends(EmptyBtnStruct, _super);
            function EmptyBtnStruct() {
                return _super.call(this) || this;
            }
            EmptyBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "EmptyBtn"));
            };
            EmptyBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            EmptyBtnStruct.URL = "ui://s33x8418lq441uj";
            EmptyBtnStruct.DependPackages = ["PfSkin"];
            return EmptyBtnStruct;
        }(fairygui.GButton));
        PfSkin.EmptyBtnStruct = EmptyBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=EmptyBtnStruct.js.map