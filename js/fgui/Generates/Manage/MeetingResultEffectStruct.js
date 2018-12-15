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
    var Manage;
    (function (Manage) {
        var MeetingResultEffectStruct = /** @class */ (function (_super) {
            __extends(MeetingResultEffectStruct, _super);
            function MeetingResultEffectStruct() {
                return _super.call(this) || this;
            }
            MeetingResultEffectStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "MeetingResultEffect"));
            };
            MeetingResultEffectStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_result = this.getController("c_result");
                this.m_loseEffect = (this.getChild("loseEffect"));
                this.m_winEffect = (this.getChild("winEffect"));
                this.m_deuceEffect = (this.getChild("deuceEffect"));
            };
            MeetingResultEffectStruct.URL = "ui://y3jchkngw1sr2n";
            MeetingResultEffectStruct.DependPackages = ["Manage", "Fx"];
            return MeetingResultEffectStruct;
        }(fairygui.GComponent));
        Manage.MeetingResultEffectStruct = MeetingResultEffectStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingResultEffectStruct.js.map