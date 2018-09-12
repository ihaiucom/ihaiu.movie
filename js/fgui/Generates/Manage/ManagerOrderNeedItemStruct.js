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
        var ManagerOrderNeedItemStruct = /** @class */ (function (_super) {
            __extends(ManagerOrderNeedItemStruct, _super);
            function ManagerOrderNeedItemStruct() {
                return _super.call(this) || this;
            }
            ManagerOrderNeedItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "ManagerOrderNeedItem"));
            };
            ManagerOrderNeedItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_complete = this.getController("complete");
                this.m_canComplete = this.getController("canComplete");
                this.m_lv = (this.getChild("lv"));
                this.m_icon = (this.getChild("icon"));
                this.m_head = (this.getChild("head"));
            };
            ManagerOrderNeedItemStruct.URL = "ui://y3jchkngtpm8i";
            ManagerOrderNeedItemStruct.DependPackages = ["Manage", "Common"];
            return ManagerOrderNeedItemStruct;
        }(fairygui.GButton));
        Manage.ManagerOrderNeedItemStruct = ManagerOrderNeedItemStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ManagerOrderNeedItemStruct.js.map