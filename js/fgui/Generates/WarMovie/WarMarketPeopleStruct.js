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
        var WarMarketPeopleStruct = /** @class */ (function (_super) {
            __extends(WarMarketPeopleStruct, _super);
            function WarMarketPeopleStruct() {
                return _super.call(this) || this;
            }
            WarMarketPeopleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarMarketPeople"));
            };
            WarMarketPeopleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_colorControl = this.getController("colorControl");
                this.m_sex = this.getController("sex");
                this.m_curMarket = (this.getChild("curMarket"));
                this.m_req = (this.getChild("req"));
                this.m_req2 = (this.getChild("req2"));
            };
            WarMarketPeopleStruct.URL = "ui://y6ozucp1qbxl8j";
            WarMarketPeopleStruct.DependPackages = ["WarMovie", "Common"];
            return WarMarketPeopleStruct;
        }(fairygui.GComponent));
        WarMovie.WarMarketPeopleStruct = WarMarketPeopleStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarMarketPeopleStruct.js.map