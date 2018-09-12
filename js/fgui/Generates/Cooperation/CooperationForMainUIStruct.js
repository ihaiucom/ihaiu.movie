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
    var Cooperation;
    (function (Cooperation) {
        var CooperationForMainUIStruct = /** @class */ (function (_super) {
            __extends(CooperationForMainUIStruct, _super);
            function CooperationForMainUIStruct() {
                return _super.call(this) || this;
            }
            CooperationForMainUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "cooperationForMainUI"));
            };
            CooperationForMainUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_have = this.getController("have");
                this.m_iconBtn1 = (this.getChild("iconBtn1"));
                this.m_iconBtn2 = (this.getChild("iconBtn2"));
                this.m_iconBtn3 = (this.getChild("iconBtn3"));
                this.m_iconBtn4 = (this.getChild("iconBtn4"));
                this.m_add = (this.getChild("add"));
                this.m_icon = (this.getChild("icon"));
            };
            CooperationForMainUIStruct.URL = "ui://k9ycebr5g8fc29";
            CooperationForMainUIStruct.DependPackages = ["Cooperation", "Common", "MainUI"];
            return CooperationForMainUIStruct;
        }(fairygui.GComponent));
        Cooperation.CooperationForMainUIStruct = CooperationForMainUIStruct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationForMainUIStruct.js.map