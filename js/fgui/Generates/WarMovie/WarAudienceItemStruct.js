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
        var WarAudienceItemStruct = /** @class */ (function (_super) {
            __extends(WarAudienceItemStruct, _super);
            function WarAudienceItemStruct() {
                return _super.call(this) || this;
            }
            WarAudienceItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarAudienceItem"));
            };
            WarAudienceItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_name = (this.getChild("name"));
                this.m_score = (this.getChild("score"));
                this.m_actor = (this.getChild("actor"));
                this.m_des = (this.getChild("des"));
                this.m_t0 = this.getTransition("t0");
            };
            WarAudienceItemStruct.URL = "ui://y6ozucp1qbxl74";
            WarAudienceItemStruct.DependPackages = ["WarMovie", "Common"];
            return WarAudienceItemStruct;
        }(fairygui.GComponent));
        WarMovie.WarAudienceItemStruct = WarAudienceItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarAudienceItemStruct.js.map