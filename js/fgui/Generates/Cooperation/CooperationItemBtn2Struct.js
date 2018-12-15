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
        var CooperationItemBtn2Struct = /** @class */ (function (_super) {
            __extends(CooperationItemBtn2Struct, _super);
            function CooperationItemBtn2Struct() {
                return _super.call(this) || this;
            }
            CooperationItemBtn2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "cooperationItemBtn2"));
            };
            CooperationItemBtn2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            CooperationItemBtn2Struct.URL = "ui://k9ycebr5g8fc21";
            CooperationItemBtn2Struct.DependPackages = ["Cooperation"];
            return CooperationItemBtn2Struct;
        }(fairygui.GButton));
        Cooperation.CooperationItemBtn2Struct = CooperationItemBtn2Struct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationItemBtn2Struct.js.map