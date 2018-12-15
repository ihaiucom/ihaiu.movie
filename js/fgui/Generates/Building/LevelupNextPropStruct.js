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
        var LevelupNextPropStruct = /** @class */ (function (_super) {
            __extends(LevelupNextPropStruct, _super);
            function LevelupNextPropStruct() {
                return _super.call(this) || this;
            }
            LevelupNextPropStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "LevelupNextProp"));
            };
            LevelupNextPropStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_list = (this.getChild("list"));
            };
            LevelupNextPropStruct.URL = "ui://d062jvkg9zjb13j";
            LevelupNextPropStruct.DependPackages = ["Building", "Common"];
            return LevelupNextPropStruct;
        }(fairygui.GComponent));
        Building.LevelupNextPropStruct = LevelupNextPropStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LevelupNextPropStruct.js.map