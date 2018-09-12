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
        var CooperationAddStruct = /** @class */ (function (_super) {
            __extends(CooperationAddStruct, _super);
            function CooperationAddStruct() {
                return _super.call(this) || this;
            }
            CooperationAddStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "cooperationAdd"));
            };
            CooperationAddStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            CooperationAddStruct.URL = "ui://k9ycebr5uwsg2f";
            CooperationAddStruct.DependPackages = ["Cooperation", "MainUI"];
            return CooperationAddStruct;
        }(fairygui.GButton));
        Cooperation.CooperationAddStruct = CooperationAddStruct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationAddStruct.js.map