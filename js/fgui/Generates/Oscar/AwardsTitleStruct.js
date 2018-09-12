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
    var Oscar;
    (function (Oscar) {
        var AwardsTitleStruct = /** @class */ (function (_super) {
            __extends(AwardsTitleStruct, _super);
            function AwardsTitleStruct() {
                return _super.call(this) || this;
            }
            AwardsTitleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Oscar", "AwardsTitle"));
            };
            AwardsTitleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_seletCup = this.getController("seletCup");
                this.m_ImgTitle = (this.getChild("ImgTitle"));
            };
            AwardsTitleStruct.URL = "ui://spuqgpclenjf16";
            AwardsTitleStruct.DependPackages = ["Oscar", "Common"];
            return AwardsTitleStruct;
        }(fairygui.GComponent));
        Oscar.AwardsTitleStruct = AwardsTitleStruct;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AwardsTitleStruct.js.map