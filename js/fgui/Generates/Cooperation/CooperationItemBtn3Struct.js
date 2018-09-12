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
        var CooperationItemBtn3Struct = /** @class */ (function (_super) {
            __extends(CooperationItemBtn3Struct, _super);
            function CooperationItemBtn3Struct() {
                return _super.call(this) || this;
            }
            CooperationItemBtn3Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "cooperationItemBtn3"));
            };
            CooperationItemBtn3Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            CooperationItemBtn3Struct.URL = "ui://k9ycebr5g8fc22";
            CooperationItemBtn3Struct.DependPackages = ["Cooperation"];
            return CooperationItemBtn3Struct;
        }(fairygui.GButton));
        Cooperation.CooperationItemBtn3Struct = CooperationItemBtn3Struct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationItemBtn3Struct.js.map