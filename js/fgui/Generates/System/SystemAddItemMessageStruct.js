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
    var System;
    (function (System) {
        var SystemAddItemMessageStruct = /** @class */ (function (_super) {
            __extends(SystemAddItemMessageStruct, _super);
            function SystemAddItemMessageStruct() {
                return _super.call(this) || this;
            }
            SystemAddItemMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "SystemAddItemMessage"));
            };
            SystemAddItemMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_listItem = (this.getChild("listItem"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_bgCom = (this.getChild("bgCom"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            SystemAddItemMessageStruct.URL = "ui://fiza9hgrnyfh11";
            SystemAddItemMessageStruct.DependPackages = ["System", "Common"];
            return SystemAddItemMessageStruct;
        }(fairygui.GComponent));
        System.SystemAddItemMessageStruct = SystemAddItemMessageStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAddItemMessageStruct.js.map