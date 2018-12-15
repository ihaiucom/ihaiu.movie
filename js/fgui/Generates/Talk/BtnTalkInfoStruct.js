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
        var BtnTalkInfoStruct = /** @class */ (function (_super) {
            __extends(BtnTalkInfoStruct, _super);
            function BtnTalkInfoStruct() {
                return _super.call(this) || this;
            }
            BtnTalkInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "btnTalkInfo"));
            };
            BtnTalkInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_content = (this.getChild("content"));
            };
            BtnTalkInfoStruct.URL = "ui://tqkotd6uk6rcm";
            BtnTalkInfoStruct.DependPackages = ["Talk"];
            return BtnTalkInfoStruct;
        }(fairygui.GComponent));
        Talk.BtnTalkInfoStruct = BtnTalkInfoStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnTalkInfoStruct.js.map