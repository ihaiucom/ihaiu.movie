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
        var CinemaChairStruct = /** @class */ (function (_super) {
            __extends(CinemaChairStruct, _super);
            function CinemaChairStruct() {
                return _super.call(this) || this;
            }
            CinemaChairStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "CinemaChair"));
            };
            CinemaChairStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_chair1 = (this.getChild("chair1"));
                this.m_sit_group1 = (this.getChild("sit_group1"));
                this.m_chair2 = (this.getChild("chair2"));
                this.m_sit_group2 = (this.getChild("sit_group2"));
                this.m_sit0 = (this.getChild("sit0"));
                this.m_sit3 = (this.getChild("sit3"));
                this.m_sit2 = (this.getChild("sit2"));
                this.m_sit1 = (this.getChild("sit1"));
                this.m_sit4 = (this.getChild("sit4"));
                this.m_sit5 = (this.getChild("sit5"));
            };
            CinemaChairStruct.URL = "ui://d062jvkgu8cee146";
            CinemaChairStruct.DependPackages = ["Building"];
            return CinemaChairStruct;
        }(fairygui.GComponent));
        Building.CinemaChairStruct = CinemaChairStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CinemaChairStruct.js.map