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
        var CinemaItem_llittleStruct = /** @class */ (function (_super) {
            __extends(CinemaItem_llittleStruct, _super);
            function CinemaItem_llittleStruct() {
                return _super.call(this) || this;
            }
            CinemaItem_llittleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "CinemaItem_llittle"));
            };
            CinemaItem_llittleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_level = this.getController("level");
                this.m_title = (this.getChild("title"));
                this.m_num = (this.getChild("num"));
                this.m_icon = (this.getChild("icon"));
            };
            CinemaItem_llittleStruct.URL = "ui://mu4e45moky7910";
            CinemaItem_llittleStruct.DependPackages = ["Street"];
            return CinemaItem_llittleStruct;
        }(fairygui.GLabel));
        Street.CinemaItem_llittleStruct = CinemaItem_llittleStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CinemaItem_llittleStruct.js.map