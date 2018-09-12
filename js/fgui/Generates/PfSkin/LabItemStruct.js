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
        var LabItemStruct = /** @class */ (function (_super) {
            __extends(LabItemStruct, _super);
            function LabItemStruct() {
                return _super.call(this) || this;
            }
            LabItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "LabItem"));
            };
            LabItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_star = (this.getChild("star"));
            };
            LabItemStruct.URL = "ui://s33x8418mywn1kk";
            LabItemStruct.DependPackages = ["PfSkin"];
            return LabItemStruct;
        }(fairygui.GLabel));
        PfSkin.LabItemStruct = LabItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabItemStruct.js.map