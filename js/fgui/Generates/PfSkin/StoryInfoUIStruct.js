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
        var StoryInfoUIStruct = /** @class */ (function (_super) {
            __extends(StoryInfoUIStruct, _super);
            function StoryInfoUIStruct() {
                return _super.call(this) || this;
            }
            StoryInfoUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StoryInfoUI"));
            };
            StoryInfoUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_list = (this.getChild("list"));
                this.m_none = (this.getChild("none"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_filmTypeList = (this.getChild("filmTypeList"));
                this.m_inputBG = (this.getChild("inputBG"));
                this.m_input = (this.getChild("input"));
                this.m_totalList = (this.getChild("totalList"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_desc = (this.getChild("desc"));
                this.m_filmIcon = (this.getChild("filmIcon"));
                this.m_sendBtn = (this.getChild("sendBtn"));
            };
            StoryInfoUIStruct.URL = "ui://s33x8418eb3n1o7";
            StoryInfoUIStruct.DependPackages = ["PfSkin", "Common", "WarMovie"];
            return StoryInfoUIStruct;
        }(fairygui.GComponent));
        PfSkin.StoryInfoUIStruct = StoryInfoUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryInfoUIStruct.js.map