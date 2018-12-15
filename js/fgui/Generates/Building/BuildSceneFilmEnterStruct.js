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
        var BuildSceneFilmEnterStruct = /** @class */ (function (_super) {
            __extends(BuildSceneFilmEnterStruct, _super);
            function BuildSceneFilmEnterStruct() {
                return _super.call(this) || this;
            }
            BuildSceneFilmEnterStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildSceneFilmEnter"));
            };
            BuildSceneFilmEnterStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_screenlight = (this.getChild("screenlight"));
                this.m_filmlight = (this.getChild("filmlight"));
                this.m_title = (this.getChild("title"));
                this.m_stoyIcon = (this.getChild("stoyIcon"));
                this.m_doorContainer = (this.getChild("doorContainer"));
                this.m_canvasContainer = (this.getChild("canvasContainer"));
            };
            BuildSceneFilmEnterStruct.URL = "ui://d062jvkgg9i613z";
            BuildSceneFilmEnterStruct.DependPackages = ["Building"];
            return BuildSceneFilmEnterStruct;
        }(fairygui.GComponent));
        Building.BuildSceneFilmEnterStruct = BuildSceneFilmEnterStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildSceneFilmEnterStruct.js.map