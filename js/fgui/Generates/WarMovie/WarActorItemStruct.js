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
        var WarActorItemStruct = /** @class */ (function (_super) {
            __extends(WarActorItemStruct, _super);
            function WarActorItemStruct() {
                return _super.call(this) || this;
            }
            WarActorItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarActorItem"));
            };
            WarActorItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_YRHave = this.getController("YRHave");
                this.m_isUse = this.getController("isUse");
                this.m_Icon = (this.getChild("Icon"));
                this.m_yrName = (this.getChild("yrName"));
                this.m_attribute1 = (this.getChild("attribute1"));
                this.m_attribute2 = (this.getChild("attribute2"));
                this.m_attribute1Val = (this.getChild("attribute1Val"));
                this.m_attribute2Val = (this.getChild("attribute2Val"));
                this.m_temName = (this.getChild("temName"));
                this.m_costIcon = (this.getChild("costIcon"));
                this.m_costVal = (this.getChild("costVal"));
                this.m_freeCost = (this.getChild("freeCost"));
                this.m_tip1 = (this.getChild("tip1"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_filmStar = (this.getChild("filmStar"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_infBtn = (this.getChild("infBtn"));
            };
            WarActorItemStruct.URL = "ui://y6ozucp1qbxl62";
            WarActorItemStruct.DependPackages = ["WarMovie", "Common"];
            return WarActorItemStruct;
        }(fairygui.GButton));
        WarMovie.WarActorItemStruct = WarActorItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActorItemStruct.js.map