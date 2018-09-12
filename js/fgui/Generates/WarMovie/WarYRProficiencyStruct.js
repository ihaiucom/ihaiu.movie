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
    var WarMovie;
    (function (WarMovie) {
        var WarYRProficiencyStruct = /** @class */ (function (_super) {
            __extends(WarYRProficiencyStruct, _super);
            function WarYRProficiencyStruct() {
                return _super.call(this) || this;
            }
            WarYRProficiencyStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarYRProficiency"));
            };
            WarYRProficiencyStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_actorList = (this.getChild("actorList"));
                this.m_filmDes = (this.getChild("filmDes"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarYRProficiencyStruct.URL = "ui://y6ozucp1qbxl6f";
            WarYRProficiencyStruct.DependPackages = ["WarMovie", "Common"];
            return WarYRProficiencyStruct;
        }(fairygui.GComponent));
        WarMovie.WarYRProficiencyStruct = WarYRProficiencyStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRProficiencyStruct.js.map