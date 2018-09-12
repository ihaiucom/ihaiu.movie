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
    var PfSkin;
    (function (PfSkin) {
        var StoryLibraryUIStruct = /** @class */ (function (_super) {
            __extends(StoryLibraryUIStruct, _super);
            function StoryLibraryUIStruct() {
                return _super.call(this) || this;
            }
            StoryLibraryUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StoryLibraryUI"));
            };
            StoryLibraryUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_name = (this.getChild("name"));
                this.m_souluotimes = (this.getChild("souluotimes"));
                this.m_times = (this.getChild("times"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_achieveBtn = (this.getChild("achieveBtn"));
                this.m_gold = (this.getChild("gold"));
                this.m_souBtn = (this.getChild("souBtn"));
                this.m_speed = (this.getChild("speed"));
                this.m_achevementUI = (this.getChild("achevementUI"));
                this.m_achevementTargetUI = (this.getChild("achevementTargetUI"));
                this.m_diamand = (this.getChild("diamand"));
                this.m_findResultUI = (this.getChild("findResultUI"));
            };
            StoryLibraryUIStruct.URL = "ui://s33x8418eb3n1nx";
            StoryLibraryUIStruct.DependPackages = ["PfSkin", "Common", "WarMovie", "Fx"];
            return StoryLibraryUIStruct;
        }(fairygui.GComponent));
        PfSkin.StoryLibraryUIStruct = StoryLibraryUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryLibraryUIStruct.js.map