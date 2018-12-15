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
        var AttrLabelTitleStruct = /** @class */ (function (_super) {
            __extends(AttrLabelTitleStruct, _super);
            function AttrLabelTitleStruct() {
                return _super.call(this) || this;
            }
            AttrLabelTitleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "AttrLabelTitle"));
            };
            AttrLabelTitleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            AttrLabelTitleStruct.URL = "ui://gif3gjfsmmict27i";
            AttrLabelTitleStruct.DependPackages = ["ArtistDetail", "Common"];
            return AttrLabelTitleStruct;
        }(fairygui.GLabel));
        ArtistDetail.AttrLabelTitleStruct = AttrLabelTitleStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AttrLabelTitleStruct.js.map