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
    var GM;
    (function (GM) {
        var GMAddPageStruct = /** @class */ (function (_super) {
            __extends(GMAddPageStruct, _super);
            function GMAddPageStruct() {
                return _super.call(this) || this;
            }
            GMAddPageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMAddPage"));
            };
            GMAddPageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_popupButton = (this.getChild("popupButton"));
                this.m_filterInput = (this.getChild("filterInput"));
                this.m_filterCheckbox = (this.getChild("filterCheckbox"));
                this.m_listTopButton = (this.getChild("listTopButton"));
                this.m_listBottomButton = (this.getChild("listBottomButton"));
            };
            GMAddPageStruct.URL = "ui://ujw583ypfbyi9";
            GMAddPageStruct.DependPackages = ["GM"];
            return GMAddPageStruct;
        }(fairygui.GComponent));
        GM.GMAddPageStruct = GMAddPageStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMAddPageStruct.js.map