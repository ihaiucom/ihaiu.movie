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
    var Fx;
    (function (Fx) {
        var Effect_story_unlockStruct = /** @class */ (function (_super) {
            __extends(Effect_story_unlockStruct, _super);
            function Effect_story_unlockStruct() {
                return _super.call(this) || this;
            }
            Effect_story_unlockStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_story_unlock"));
            };
            Effect_story_unlockStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_story_unlockStruct.URL = "ui://9l36y1kiz8b5io";
            Effect_story_unlockStruct.DependPackages = ["Fx"];
            return Effect_story_unlockStruct;
        }(fairygui.GComponent));
        Fx.Effect_story_unlockStruct = Effect_story_unlockStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_story_unlockStruct.js.map