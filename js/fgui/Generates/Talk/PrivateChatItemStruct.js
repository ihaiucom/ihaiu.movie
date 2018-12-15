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
        var PrivateChatItemStruct = /** @class */ (function (_super) {
            __extends(PrivateChatItemStruct, _super);
            function PrivateChatItemStruct() {
                return _super.call(this) || this;
            }
            PrivateChatItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "PrivateChatItem"));
            };
            PrivateChatItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_content = (this.getChild("content"));
            };
            PrivateChatItemStruct.URL = "ui://tqkotd6ue3hkc";
            PrivateChatItemStruct.DependPackages = ["Talk"];
            return PrivateChatItemStruct;
        }(fairygui.GComponent));
        Talk.PrivateChatItemStruct = PrivateChatItemStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PrivateChatItemStruct.js.map