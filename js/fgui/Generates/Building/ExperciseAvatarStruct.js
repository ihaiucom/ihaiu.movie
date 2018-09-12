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
    var Building;
    (function (Building) {
        var ExperciseAvatarStruct = /** @class */ (function (_super) {
            __extends(ExperciseAvatarStruct, _super);
            function ExperciseAvatarStruct() {
                return _super.call(this) || this;
            }
            ExperciseAvatarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "ExperciseAvatar"));
            };
            ExperciseAvatarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_sample = (this.getChild("sample"));
            };
            ExperciseAvatarStruct.URL = "ui://d062jvkgrn1r12j";
            ExperciseAvatarStruct.DependPackages = ["Building"];
            return ExperciseAvatarStruct;
        }(fairygui.GComponent));
        Building.ExperciseAvatarStruct = ExperciseAvatarStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ExperciseAvatarStruct.js.map