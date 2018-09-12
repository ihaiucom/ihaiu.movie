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
        var SecretaryGiftListItemStruct = /** @class */ (function (_super) {
            __extends(SecretaryGiftListItemStruct, _super);
            function SecretaryGiftListItemStruct() {
                return _super.call(this) || this;
            }
            SecretaryGiftListItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "SecretaryGiftListItem"));
            };
            SecretaryGiftListItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_img = (this.getChild("img"));
                this.m_goods = (this.getChild("goods"));
                this.m_number = (this.getChild("number"));
            };
            SecretaryGiftListItemStruct.URL = "ui://9qou8rs7rrsj9";
            SecretaryGiftListItemStruct.DependPackages = ["Activity", "Common"];
            return SecretaryGiftListItemStruct;
        }(fairygui.GComponent));
        Activity.SecretaryGiftListItemStruct = SecretaryGiftListItemStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SecretaryGiftListItemStruct.js.map