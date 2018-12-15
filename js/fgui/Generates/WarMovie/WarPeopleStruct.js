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
        var WarPeopleStruct = /** @class */ (function (_super) {
            __extends(WarPeopleStruct, _super);
            function WarPeopleStruct() {
                return _super.call(this) || this;
            }
            WarPeopleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarPeople"));
            };
            WarPeopleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_sex = (this.getChild("sex"));
            };
            WarPeopleStruct.URL = "ui://y6ozucp1r0zd52";
            WarPeopleStruct.DependPackages = ["WarMovie"];
            return WarPeopleStruct;
        }(fairygui.GLabel));
        WarMovie.WarPeopleStruct = WarPeopleStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarPeopleStruct.js.map