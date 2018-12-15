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
        var WarCurrentMarketInfoStruct = /** @class */ (function (_super) {
            __extends(WarCurrentMarketInfoStruct, _super);
            function WarCurrentMarketInfoStruct() {
                return _super.call(this) || this;
            }
            WarCurrentMarketInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarCurrentMarketInfo"));
            };
            WarCurrentMarketInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_des = (this.getChild("des"));
                this.m_tip1 = (this.getChild("tip1"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_clickTip = (this.getChild("clickTip"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_men = (this.getChild("men"));
                this.m_women = (this.getChild("women"));
                this.m_child = (this.getChild("child"));
            };
            WarCurrentMarketInfoStruct.URL = "ui://y6ozucp1qbxl8h";
            WarCurrentMarketInfoStruct.DependPackages = ["WarMovie", "Common"];
            return WarCurrentMarketInfoStruct;
        }(fairygui.GComponent));
        WarMovie.WarCurrentMarketInfoStruct = WarCurrentMarketInfoStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCurrentMarketInfoStruct.js.map