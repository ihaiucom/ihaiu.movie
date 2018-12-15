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
    var Manage;
    (function (Manage) {
        var VisitUIStruct = /** @class */ (function (_super) {
            __extends(VisitUIStruct, _super);
            function VisitUIStruct() {
                return _super.call(this) || this;
            }
            VisitUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "VisitUI"));
            };
            VisitUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_nextFans = (this.getChild("nextFans"));
                this.m_icon = (this.getChild("icon"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_dialog = (this.getChild("dialog"));
            };
            VisitUIStruct.URL = "ui://y3jchkngtpm83";
            VisitUIStruct.DependPackages = ["Manage", "Common"];
            return VisitUIStruct;
        }(fairygui.GComponent));
        Manage.VisitUIStruct = VisitUIStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=VisitUIStruct.js.map