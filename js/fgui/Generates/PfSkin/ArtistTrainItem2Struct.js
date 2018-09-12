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
        var ArtistTrainItem2Struct = /** @class */ (function (_super) {
            __extends(ArtistTrainItem2Struct, _super);
            function ArtistTrainItem2Struct() {
                return _super.call(this) || this;
            }
            ArtistTrainItem2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistTrainItem2"));
            };
            ArtistTrainItem2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_desc = (this.getChild("desc"));
                this.m_attrList = (this.getChild("attrList"));
                this.m_unlockGroup = (this.getChild("unlockGroup"));
                this.m_lockGroup = (this.getChild("lockGroup"));
                this.m_upgradeBtn = (this.getChild("upgradeBtn"));
            };
            ArtistTrainItem2Struct.URL = "ui://s33x8418jazc1m7";
            ArtistTrainItem2Struct.DependPackages = ["PfSkin"];
            return ArtistTrainItem2Struct;
        }(fairygui.GComponent));
        PfSkin.ArtistTrainItem2Struct = ArtistTrainItem2Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTrainItem2Struct.js.map