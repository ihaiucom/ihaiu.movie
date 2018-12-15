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
        var LabItem_bigStruct = /** @class */ (function (_super) {
            __extends(LabItem_bigStruct, _super);
            function LabItem_bigStruct() {
                return _super.call(this) || this;
            }
            LabItem_bigStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "LabItem_big"));
            };
            LabItem_bigStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_trColor = this.getController("trColor");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            LabItem_bigStruct.URL = "ui://fiza9hgrnyfh13";
            LabItem_bigStruct.DependPackages = ["System", "Common"];
            return LabItem_bigStruct;
        }(fairygui.GLabel));
        System.LabItem_bigStruct = LabItem_bigStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabItem_bigStruct.js.map