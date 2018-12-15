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
        var WarActorItemShowStruct = /** @class */ (function (_super) {
            __extends(WarActorItemShowStruct, _super);
            function WarActorItemShowStruct() {
                return _super.call(this) || this;
            }
            WarActorItemShowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarActorItemShow"));
            };
            WarActorItemShowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_name = (this.getChild("name"));
                this.m_type = (this.getChild("type"));
                this.m_reqTip = (this.getChild("reqTip"));
                this.m_sexIcon = (this.getChild("sexIcon"));
                this.m_sexReq = (this.getChild("sexReq"));
                this.m_countryIcon = (this.getChild("countryIcon"));
                this.m_countryReq = (this.getChild("countryReq"));
                this.m_showIcon = (this.getChild("showIcon"));
                this.m_showReq = (this.getChild("showReq"));
                this.m_ageIcon = (this.getChild("ageIcon"));
                this.m_ageReq = (this.getChild("ageReq"));
                this.m_reqTip2 = (this.getChild("reqTip2"));
                this.m_property1 = (this.getChild("property1"));
                this.m_propertyup1 = (this.getChild("propertyup1"));
                this.m_property1Req = (this.getChild("property1Req"));
                this.m_property2 = (this.getChild("property2"));
                this.m_propertyup2 = (this.getChild("propertyup2"));
                this.m_property2Req = (this.getChild("property2Req"));
                this.m_des = (this.getChild("des"));
            };
            WarActorItemShowStruct.URL = "ui://y6ozucp1qbxl9c";
            WarActorItemShowStruct.DependPackages = ["WarMovie", "Common"];
            return WarActorItemShowStruct;
        }(fairygui.GComponent));
        WarMovie.WarActorItemShowStruct = WarActorItemShowStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActorItemShowStruct.js.map