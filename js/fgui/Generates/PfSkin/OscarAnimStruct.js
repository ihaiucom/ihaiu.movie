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
        var OscarAnimStruct = /** @class */ (function (_super) {
            __extends(OscarAnimStruct, _super);
            function OscarAnimStruct() {
                return _super.call(this) || this;
            }
            OscarAnimStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "OscarAnim"));
            };
            OscarAnimStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_ChairGroup1 = (this.getChild("ChairGroup1"));
                this.m_ChairGroup2 = (this.getChild("ChairGroup2"));
                this.m_ChairGroup3 = (this.getChild("ChairGroup3"));
                this.m_ChairGroup4 = (this.getChild("ChairGroup4"));
                this.m_OscarAnim_022 = (this.getChild("OscarAnim_022"));
                this.m_actorContainner = (this.getChild("actorContainner"));
                this.m_speekerContainner = (this.getChild("speekerContainner"));
            };
            OscarAnimStruct.URL = "ui://s33x8418iacmt1w5";
            OscarAnimStruct.DependPackages = ["PfSkin", "Fx"];
            return OscarAnimStruct;
        }(fairygui.GComponent));
        PfSkin.OscarAnimStruct = OscarAnimStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarAnimStruct.js.map