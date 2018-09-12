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
        var CooperationItemBtnStruct = /** @class */ (function (_super) {
            __extends(CooperationItemBtnStruct, _super);
            function CooperationItemBtnStruct() {
                return _super.call(this) || this;
            }
            CooperationItemBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "cooperationItemBtn"));
            };
            CooperationItemBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            CooperationItemBtnStruct.URL = "ui://k9ycebr5g8fc20";
            CooperationItemBtnStruct.DependPackages = ["Cooperation"];
            return CooperationItemBtnStruct;
        }(fairygui.GButton));
        Cooperation.CooperationItemBtnStruct = CooperationItemBtnStruct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationItemBtnStruct.js.map