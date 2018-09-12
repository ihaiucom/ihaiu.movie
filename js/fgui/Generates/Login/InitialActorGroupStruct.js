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
        var InitialActorGroupStruct = /** @class */ (function (_super) {
            __extends(InitialActorGroupStruct, _super);
            function InitialActorGroupStruct() {
                return _super.call(this) || this;
            }
            InitialActorGroupStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "InitialActorGroup"));
            };
            InitialActorGroupStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_actorItem0 = (this.getChild("actorItem0"));
                this.m_actorItem2 = (this.getChild("actorItem2"));
                this.m_actorItem3 = (this.getChild("actorItem3"));
            };
            InitialActorGroupStruct.URL = "ui://7znsj5i6oh1c35";
            InitialActorGroupStruct.DependPackages = ["Login"];
            return InitialActorGroupStruct;
        }(fairygui.GComponent));
        Login.InitialActorGroupStruct = InitialActorGroupStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=InitialActorGroupStruct.js.map