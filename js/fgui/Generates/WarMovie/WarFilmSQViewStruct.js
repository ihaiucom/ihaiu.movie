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
        var WarFilmSQViewStruct = /** @class */ (function (_super) {
            __extends(WarFilmSQViewStruct, _super);
            function WarFilmSQViewStruct() {
                return _super.call(this) || this;
            }
            WarFilmSQViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmSQView"));
            };
            WarFilmSQViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_filmAttributeList = (this.getChild("filmAttributeList"));
                this.m_zhuyanList = (this.getChild("zhuyanList"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_filmTime = (this.getChild("filmTime"));
                this.m_type = (this.getChild("type"));
                this.m_title = (this.getChild("title"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_filmIcon = (this.getChild("filmIcon"));
            };
            WarFilmSQViewStruct.URL = "ui://y6ozucp1qbxl6m";
            WarFilmSQViewStruct.DependPackages = ["WarMovie", "Common", "System"];
            return WarFilmSQViewStruct;
        }(fairygui.GComponent));
        WarMovie.WarFilmSQViewStruct = WarFilmSQViewStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSQViewStruct.js.map