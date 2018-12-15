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
    var Street;
    (function (Street) {
        var StreetCinemaViewStruct = /** @class */ (function (_super) {
            __extends(StreetCinemaViewStruct, _super);
            function StreetCinemaViewStruct() {
                return _super.call(this) || this;
            }
            StreetCinemaViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "StreetCinemaView"));
            };
            StreetCinemaViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_name = (this.getChild("name"));
                this.m_num = (this.getChild("num"));
                this.m_listCinema = (this.getChild("listCinema"));
                this.m_btnSign = (this.getChild("btnSign"));
                this.m_cinemaItem = (this.getChild("cinemaItem"));
            };
            StreetCinemaViewStruct.URL = "ui://mu4e45moky79w";
            StreetCinemaViewStruct.DependPackages = ["Street", "Common"];
            return StreetCinemaViewStruct;
        }(fairygui.GComponent));
        Street.StreetCinemaViewStruct = StreetCinemaViewStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetCinemaViewStruct.js.map