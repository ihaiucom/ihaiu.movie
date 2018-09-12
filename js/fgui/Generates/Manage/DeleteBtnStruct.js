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
    var Manage;
    (function (Manage) {
        var DeleteBtnStruct = /** @class */ (function (_super) {
            __extends(DeleteBtnStruct, _super);
            function DeleteBtnStruct() {
                return _super.call(this) || this;
            }
            DeleteBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "DeleteBtn"));
            };
            DeleteBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            DeleteBtnStruct.URL = "ui://y3jchkngtpm8p";
            DeleteBtnStruct.DependPackages = ["Manage"];
            return DeleteBtnStruct;
        }(fairygui.GButton));
        Manage.DeleteBtnStruct = DeleteBtnStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=DeleteBtnStruct.js.map