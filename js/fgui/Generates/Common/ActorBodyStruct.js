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
    var Common;
    (function (Common) {
        var ActorBodyStruct = /** @class */ (function (_super) {
            __extends(ActorBodyStruct, _super);
            function ActorBodyStruct() {
                return _super.call(this) || this;
            }
            ActorBodyStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "actorBody"));
            };
            ActorBodyStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            ActorBodyStruct.URL = "ui://txcuvopdcp1ct24i";
            ActorBodyStruct.DependPackages = ["Common"];
            return ActorBodyStruct;
        }(fairygui.GLabel));
        Common.ActorBodyStruct = ActorBodyStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorBodyStruct.js.map