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
        var TalkContentViewStruct = /** @class */ (function (_super) {
            __extends(TalkContentViewStruct, _super);
            function TalkContentViewStruct() {
                return _super.call(this) || this;
            }
            TalkContentViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "TalkContentView"));
            };
            TalkContentViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_inputView = (this.getChild("inputView"));
            };
            TalkContentViewStruct.URL = "ui://tqkotd6ue3hk3";
            TalkContentViewStruct.DependPackages = ["Talk"];
            return TalkContentViewStruct;
        }(fairygui.GComponent));
        Talk.TalkContentViewStruct = TalkContentViewStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TalkContentViewStruct.js.map