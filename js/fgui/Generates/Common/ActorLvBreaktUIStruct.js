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
        var ActorLvBreaktUIStruct = /** @class */ (function (_super) {
            __extends(ActorLvBreaktUIStruct, _super);
            function ActorLvBreaktUIStruct() {
                return _super.call(this) || this;
            }
            ActorLvBreaktUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ActorLvBreaktUI"));
            };
            ActorLvBreaktUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_panel = (this.getChild("panel"));
            };
            ActorLvBreaktUIStruct.URL = "ui://txcuvopdlvexed";
            ActorLvBreaktUIStruct.DependPackages = ["Common", "Fx"];
            return ActorLvBreaktUIStruct;
        }(fairygui.GComponent));
        Common.ActorLvBreaktUIStruct = ActorLvBreaktUIStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorLvBreaktUIStruct.js.map