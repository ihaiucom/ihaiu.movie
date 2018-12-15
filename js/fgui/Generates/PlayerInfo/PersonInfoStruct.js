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
    var PlayerInfo;
    (function (PlayerInfo) {
        var PersonInfoStruct = /** @class */ (function (_super) {
            __extends(PersonInfoStruct, _super);
            function PersonInfoStruct() {
                return _super.call(this) || this;
            }
            PersonInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "PersonInfo"));
            };
            PersonInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_progressBarText = (this.getChild("progressBarText"));
                this.m_headName = (this.getChild("headName"));
                this.m_level = (this.getChild("level"));
                this.m_self_introduction_input = (this.getChild("self_introduction_input"));
                this.m_self_introduction = (this.getChild("self_introduction"));
                this.m_btn_touch_desc = (this.getChild("btn_touch_desc"));
                this.m_progressBar = (this.getChild("progressBar"));
                this.m_headCircleIcon = (this.getChild("headCircleIcon"));
                this.m_btn_editor_desc = (this.getChild("btn_editor_desc"));
                this.m_btn_editor_name = (this.getChild("btn_editor_name"));
            };
            PersonInfoStruct.URL = "ui://tderqmz5dyfeh";
            PersonInfoStruct.DependPackages = ["PlayerInfo", "Common"];
            return PersonInfoStruct;
        }(fairygui.GComponent));
        PlayerInfo.PersonInfoStruct = PersonInfoStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PersonInfoStruct.js.map