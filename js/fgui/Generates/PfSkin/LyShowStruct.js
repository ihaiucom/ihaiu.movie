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
        var LyShowStruct = /** @class */ (function (_super) {
            __extends(LyShowStruct, _super);
            function LyShowStruct() {
                return _super.call(this) || this;
            }
            LyShowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "LyShow"));
            };
            LyShowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_ChairGroup1 = (this.getChild("ChairGroup1"));
                this.m_ChairGroup2 = (this.getChild("ChairGroup2"));
                this.m_ChairGroup3 = (this.getChild("ChairGroup3"));
                this.m_ChairGroup4 = (this.getChild("ChairGroup4"));
                this.m_voice = (this.getChild("voice"));
                this.m_avatarContainner = (this.getChild("avatarContainner"));
            };
            LyShowStruct.URL = "ui://s33x8418sm6tt1vd";
            LyShowStruct.DependPackages = ["PfSkin", "Fx"];
            return LyShowStruct;
        }(fairygui.GComponent));
        PfSkin.LyShowStruct = LyShowStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LyShowStruct.js.map