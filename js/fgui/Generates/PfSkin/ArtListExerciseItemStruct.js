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
    var PfSkin;
    (function (PfSkin) {
        var ArtListExerciseItemStruct = /** @class */ (function (_super) {
            __extends(ArtListExerciseItemStruct, _super);
            function ArtListExerciseItemStruct() {
                return _super.call(this) || this;
            }
            ArtListExerciseItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtListExerciseItem"));
            };
            ArtListExerciseItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_noneActorBg = (this.getChild("noneActorBg"));
                this.m_onActorBg = (this.getChild("onActorBg"));
                this.m_timeText = (this.getChild("timeText"));
                this.m_desc = (this.getChild("desc"));
                this.m_costText = (this.getChild("costText"));
                this.m_assetIcon = (this.getChild("assetIcon"));
                this.m_onExpercise = (this.getChild("onExpercise"));
                this.m_t1 = (this.getChild("t1"));
                this.m_tkey = (this.getChild("tkey"));
                this.m_tvalue = (this.getChild("tvalue"));
                this.m_completeExpercise = (this.getChild("completeExpercise"));
                this.m_noneActorDesc = (this.getChild("noneActorDesc"));
                this.m_iconLoader = (this.getChild("iconLoader"));
                this.m_bar = (this.getChild("bar"));
                this.m_quickBtn = (this.getChild("quickBtn"));
                this.m_iconBtn = (this.getChild("iconBtn"));
            };
            ArtListExerciseItemStruct.URL = "ui://s33x8418rn1rt1vp";
            ArtListExerciseItemStruct.DependPackages = ["PfSkin", "Common", "System"];
            return ArtListExerciseItemStruct;
        }(fairygui.GComponent));
        PfSkin.ArtListExerciseItemStruct = ArtListExerciseItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtListExerciseItemStruct.js.map