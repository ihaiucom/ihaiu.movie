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
        var TestStaticsStruct = /** @class */ (function (_super) {
            __extends(TestStaticsStruct, _super);
            function TestStaticsStruct() {
                return _super.call(this) || this;
            }
            TestStaticsStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "TestStatics"));
            };
            TestStaticsStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_test_Registation = (this.getChild("test_Registation"));
                this.m_test_Login = (this.getChild("test_Login"));
                this.m_test_Level = (this.getChild("test_Level"));
                this.m_test_Guide = (this.getChild("test_Guide"));
                this.m_test_Purchase = (this.getChild("test_Purchase"));
            };
            TestStaticsStruct.URL = "ui://7znsj5i6j20d5e";
            TestStaticsStruct.DependPackages = ["Login"];
            return TestStaticsStruct;
        }(fairygui.GComponent));
        Login.TestStaticsStruct = TestStaticsStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TestStaticsStruct.js.map