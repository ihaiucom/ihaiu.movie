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
        var TalkContentStruct = /** @class */ (function (_super) {
            __extends(TalkContentStruct, _super);
            function TalkContentStruct() {
                return _super.call(this) || this;
            }
            TalkContentStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "TalkContent"));
            };
            TalkContentStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            TalkContentStruct.URL = "ui://tqkotd6ue3hk8";
            TalkContentStruct.DependPackages = ["Talk"];
            return TalkContentStruct;
        }(fairygui.GLabel));
        Talk.TalkContentStruct = TalkContentStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TalkContentStruct.js.map