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
    var Oscar;
    (function (Oscar) {
        var OscarCandidateItemStruct = /** @class */ (function (_super) {
            __extends(OscarCandidateItemStruct, _super);
            function OscarCandidateItemStruct() {
                return _super.call(this) || this;
            }
            OscarCandidateItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Oscar", "OscarCandidateItem"));
            };
            OscarCandidateItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_showLight = this.getController("showLight");
                this.m_icon = (this.getChild("icon"));
                this.m_name = (this.getChild("name"));
                this.m_title = (this.getChild("title"));
            };
            OscarCandidateItemStruct.URL = "ui://spuqgpclyyljv";
            OscarCandidateItemStruct.DependPackages = ["Oscar", "Common"];
            return OscarCandidateItemStruct;
        }(fairygui.GButton));
        Oscar.OscarCandidateItemStruct = OscarCandidateItemStruct;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarCandidateItemStruct.js.map