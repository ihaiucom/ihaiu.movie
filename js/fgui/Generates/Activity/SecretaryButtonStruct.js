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
        var SecretaryButtonStruct = /** @class */ (function (_super) {
            __extends(SecretaryButtonStruct, _super);
            function SecretaryButtonStruct() {
                return _super.call(this) || this;
            }
            SecretaryButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "SecretaryButton"));
            };
            SecretaryButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_Icon = (this.getChild("Icon"));
                this.m_title = (this.getChild("title"));
            };
            SecretaryButtonStruct.URL = "ui://9qou8rs7rrsj7";
            SecretaryButtonStruct.DependPackages = ["Activity", "Common"];
            return SecretaryButtonStruct;
        }(fairygui.GComponent));
        Activity.SecretaryButtonStruct = SecretaryButtonStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SecretaryButtonStruct.js.map