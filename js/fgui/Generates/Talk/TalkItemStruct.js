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
    var Talk;
    (function (Talk) {
        var TalkItemStruct = /** @class */ (function (_super) {
            __extends(TalkItemStruct, _super);
            function TalkItemStruct() {
                return _super.call(this) || this;
            }
            TalkItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "TalkItem"));
            };
            TalkItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_isMin = this.getController("isMin");
                this.m_content = (this.getChild("content"));
            };
            TalkItemStruct.URL = "ui://tqkotd6ue3hk9";
            TalkItemStruct.DependPackages = ["Talk"];
            return TalkItemStruct;
        }(fairygui.GComponent));
        Talk.TalkItemStruct = TalkItemStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TalkItemStruct.js.map