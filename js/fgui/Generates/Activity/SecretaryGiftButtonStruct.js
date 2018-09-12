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
        var SecretaryGiftButtonStruct = /** @class */ (function (_super) {
            __extends(SecretaryGiftButtonStruct, _super);
            function SecretaryGiftButtonStruct() {
                return _super.call(this) || this;
            }
            SecretaryGiftButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "SecretaryGiftButton"));
            };
            SecretaryGiftButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            SecretaryGiftButtonStruct.URL = "ui://9qou8rs7rrsja";
            SecretaryGiftButtonStruct.DependPackages = ["Activity", "Common"];
            return SecretaryGiftButtonStruct;
        }(fairygui.GButton));
        Activity.SecretaryGiftButtonStruct = SecretaryGiftButtonStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SecretaryGiftButtonStruct.js.map