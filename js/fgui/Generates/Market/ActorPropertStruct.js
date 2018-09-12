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
    var Market;
    (function (Market) {
        var ActorPropertStruct = /** @class */ (function (_super) {
            __extends(ActorPropertStruct, _super);
            function ActorPropertStruct() {
                return _super.call(this) || this;
            }
            ActorPropertStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "ActorPropert"));
            };
            ActorPropertStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_hasIcon = this.getController("hasIcon");
                this.m_color = this.getController("color");
                this.m_value = (this.getChild("value"));
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
            };
            ActorPropertStruct.URL = "ui://p7g5z54adm31dv";
            ActorPropertStruct.DependPackages = ["Market", "Common"];
            return ActorPropertStruct;
        }(fairygui.GLabel));
        Market.ActorPropertStruct = ActorPropertStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorPropertStruct.js.map