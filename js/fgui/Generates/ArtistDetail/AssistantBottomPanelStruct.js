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
        var AssistantBottomPanelStruct = /** @class */ (function (_super) {
            __extends(AssistantBottomPanelStruct, _super);
            function AssistantBottomPanelStruct() {
                return _super.call(this) || this;
            }
            AssistantBottomPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "AssistantBottomPanel"));
            };
            AssistantBottomPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            AssistantBottomPanelStruct.URL = "ui://gif3gjfsep0gt27s";
            AssistantBottomPanelStruct.DependPackages = ["ArtistDetail"];
            return AssistantBottomPanelStruct;
        }(fairygui.GComponent));
        ArtistDetail.AssistantBottomPanelStruct = AssistantBottomPanelStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssistantBottomPanelStruct.js.map