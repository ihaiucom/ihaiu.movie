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
        var SecretaryCommonStruct = /** @class */ (function (_super) {
            __extends(SecretaryCommonStruct, _super);
            function SecretaryCommonStruct() {
                return _super.call(this) || this;
            }
            SecretaryCommonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "SecretaryCommon"));
            };
            SecretaryCommonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
            };
            SecretaryCommonStruct.URL = "ui://9qou8rs7rrsj8";
            SecretaryCommonStruct.DependPackages = ["Activity", "Common", "Fx"];
            return SecretaryCommonStruct;
        }(fairygui.GComponent));
        Activity.SecretaryCommonStruct = SecretaryCommonStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SecretaryCommonStruct.js.map