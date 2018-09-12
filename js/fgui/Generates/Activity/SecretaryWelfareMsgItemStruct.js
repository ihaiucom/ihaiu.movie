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
    var Activity;
    (function (Activity) {
        var SecretaryWelfareMsgItemStruct = /** @class */ (function (_super) {
            __extends(SecretaryWelfareMsgItemStruct, _super);
            function SecretaryWelfareMsgItemStruct() {
                return _super.call(this) || this;
            }
            SecretaryWelfareMsgItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "SecretaryWelfareMsgItem"));
            };
            SecretaryWelfareMsgItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            SecretaryWelfareMsgItemStruct.URL = "ui://9qou8rs7rrsjd";
            SecretaryWelfareMsgItemStruct.DependPackages = ["Activity"];
            return SecretaryWelfareMsgItemStruct;
        }(fairygui.GLabel));
        Activity.SecretaryWelfareMsgItemStruct = SecretaryWelfareMsgItemStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SecretaryWelfareMsgItemStruct.js.map