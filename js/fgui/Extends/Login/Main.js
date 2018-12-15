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
    var Login;
    (function (Login) {
        var Main = /** @class */ (function (_super) {
            __extends(Main, _super);
            function Main() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 如果定义了该变量, 且whenSelfVisiableCallWindowShowAndHide=true，只有自己 visiable == true时, onWindowShow和onWindowHide才会被调
                _this.whenSelfVisiableCallWindowShowAndHide = true;
                return _this;
            }
            Main.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_login.m_btn_forgot.visible = false;
                this.m_login.m_btn_security.visible = false;
            };
            // 如果定义了该方法，主窗口显示时将被调
            Main.prototype.onWindowShow = function () {
                this.m_version.m_txt_gamever.text = "GameVersion:" + GameVersions.Manager.Instance.localAppVersionData.toString();
                this.m_version.m_txt_resVer.text = "ResVersion:" + GameVersions.Manager.Instance.localResVersionData.toString();
            };
            // 如果定义了该方法,主窗口关闭时将被调
            Main.prototype.onWindowHide = function () {
            };
            return Main;
        }(Login.MainStruct));
        Login.Main = Main;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Main.js.map