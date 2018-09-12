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
        var VisitUIStruct = /** @class */ (function (_super) {
            __extends(VisitUIStruct, _super);
            function VisitUIStruct() {
                return _super.call(this) || this;
            }
            VisitUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "VisitUI"));
            };
            VisitUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_nextFans = (this.getChild("nextFans"));
                this.m_dialog = (this.getChild("dialog"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            VisitUIStruct.URL = "ui://s33x8418h5zr1v6";
            VisitUIStruct.DependPackages = ["PfSkin"];
            return VisitUIStruct;
        }(fairygui.GComponent));
        PfSkin.VisitUIStruct = VisitUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=VisitUIStruct.js.map