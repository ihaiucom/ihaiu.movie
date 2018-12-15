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
        var AvatarDisplayObjectStruct = /** @class */ (function (_super) {
            __extends(AvatarDisplayObjectStruct, _super);
            function AvatarDisplayObjectStruct() {
                return _super.call(this) || this;
            }
            AvatarDisplayObjectStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "AvatarDisplayObject"));
            };
            AvatarDisplayObjectStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            AvatarDisplayObjectStruct.URL = "ui://d062jvkgkxna128";
            AvatarDisplayObjectStruct.DependPackages = ["Building"];
            return AvatarDisplayObjectStruct;
        }(fairygui.GComponent));
        Building.AvatarDisplayObjectStruct = AvatarDisplayObjectStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AvatarDisplayObjectStruct.js.map