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
    var ArtistDetail;
    (function (ArtistDetail) {
        var RenameBtnStruct = /** @class */ (function (_super) {
            __extends(RenameBtnStruct, _super);
            function RenameBtnStruct() {
                return _super.call(this) || this;
            }
            RenameBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "RenameBtn"));
            };
            RenameBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            RenameBtnStruct.URL = "ui://gif3gjfsjazc1mp";
            RenameBtnStruct.DependPackages = ["ArtistDetail", "Common"];
            return RenameBtnStruct;
        }(fairygui.GButton));
        ArtistDetail.RenameBtnStruct = RenameBtnStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RenameBtnStruct.js.map