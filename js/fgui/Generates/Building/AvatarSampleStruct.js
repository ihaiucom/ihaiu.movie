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
        var AvatarSampleStruct = /** @class */ (function (_super) {
            __extends(AvatarSampleStruct, _super);
            function AvatarSampleStruct() {
                return _super.call(this) || this;
            }
            AvatarSampleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "AvatarSample"));
            };
            AvatarSampleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_sample = (this.getChild("sample"));
            };
            AvatarSampleStruct.URL = "ui://d062jvkgcy9t12h";
            AvatarSampleStruct.DependPackages = ["Building"];
            return AvatarSampleStruct;
        }(fairygui.GComponent));
        Building.AvatarSampleStruct = AvatarSampleStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AvatarSampleStruct.js.map