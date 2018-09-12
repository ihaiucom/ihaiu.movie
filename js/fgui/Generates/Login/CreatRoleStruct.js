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
        var CreatRoleStruct = /** @class */ (function (_super) {
            __extends(CreatRoleStruct, _super);
            function CreatRoleStruct() {
                return _super.call(this) || this;
            }
            CreatRoleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "CreatRole"));
            };
            CreatRoleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_roleSelect = this.getController("roleSelect");
                this.m_sexTip = (this.getChild("sexTip"));
                this.m_sex = (this.getChild("sex"));
                this.m_title_sex = (this.getChild("title_sex"));
                this.m_btn_next = (this.getChild("btn_next"));
                this.m_nameInput = (this.getChild("nameInput"));
                this.m_randomButton = (this.getChild("randomButton"));
                this.m_initialActor = (this.getChild("initialActor"));
            };
            CreatRoleStruct.URL = "ui://7znsj5i6cpc91r";
            CreatRoleStruct.DependPackages = ["Login", "PfSkin", "Common", "System", "Fx"];
            return CreatRoleStruct;
        }(fairygui.GComponent));
        Login.CreatRoleStruct = CreatRoleStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CreatRoleStruct.js.map