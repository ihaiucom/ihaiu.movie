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
        var StarStruct = /** @class */ (function (_super) {
            __extends(StarStruct, _super);
            function StarStruct() {
                return _super.call(this) || this;
            }
            StarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "Star"));
            };
            StarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_starNum = this.getController("starNum");
                this.m_color = this.getController("color");
            };
            StarStruct.URL = "ui://s33x8418xl2j1nj";
            StarStruct.DependPackages = ["PfSkin"];
            return StarStruct;
        }(fairygui.GComponent));
        PfSkin.StarStruct = StarStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StarStruct.js.map