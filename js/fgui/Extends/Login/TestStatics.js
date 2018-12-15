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
        var TestStatics = /** @class */ (function (_super) {
            __extends(TestStatics, _super);
            function TestStatics() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.test_level = 1;
                return _this;
            }
            TestStatics.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.test();
            };
            TestStatics.prototype.test = function () {
                // this.m_test_Registation.onClick(this, () =>
                // {
                // 	Games.appsFlyerAndNative.Instance.onAppsFlyerRegistation();
                // });
                // this.m_test_Login.onClick(this, () =>
                // {
                // 	Games.appsFlyerAndNative.Instance.onAppsFlyerLogin();
                // });
                // this.m_test_Level.onClick(this, () =>
                // {
                // 	Games.appsFlyerAndNative.Instance.onAppsFlyerLevelAchieved(this.test_level++);
                // });
                // this.m_test_Guide.onClick(this, () =>
                // {
                // 	Games.appsFlyerAndNative.Instance.onAppsFlyerTutorial();
                // });
                // this.m_test_Purchase.onClick(this, () =>
                // {
                // 	Games.appsFlyerAndNative.Instance.onAppsFlyerPurchase(1, 10);
                // });
            };
            return TestStatics;
        }(Login.TestStaticsStruct));
        Login.TestStatics = TestStatics;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TestStatics.js.map