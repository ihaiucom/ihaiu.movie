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
        var SignItemStruct = /** @class */ (function (_super) {
            __extends(SignItemStruct, _super);
            function SignItemStruct() {
                return _super.call(this) || this;
            }
            SignItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "SignItem"));
            };
            SignItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_c1 = this.getController("c1");
                this.m_icon = (this.getChild("icon"));
                this.m_day = (this.getChild("day"));
                this.m_num = (this.getChild("num"));
            };
            SignItemStruct.URL = "ui://9qou8rs7pytu6";
            SignItemStruct.DependPackages = ["Activity", "Common"];
            return SignItemStruct;
        }(fairygui.GButton));
        Activity.SignItemStruct = SignItemStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SignItemStruct.js.map