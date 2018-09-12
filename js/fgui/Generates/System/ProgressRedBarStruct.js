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
        var ProgressRedBarStruct = /** @class */ (function (_super) {
            __extends(ProgressRedBarStruct, _super);
            function ProgressRedBarStruct() {
                return _super.call(this) || this;
            }
            ProgressRedBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "ProgressRedBar"));
            };
            ProgressRedBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_top = (this.getChild("top"));
                this.m_barSquare = (this.getChild("barSquare"));
            };
            ProgressRedBarStruct.URL = "ui://fiza9hgr5sas9";
            ProgressRedBarStruct.DependPackages = ["System"];
            return ProgressRedBarStruct;
        }(fairygui.GProgressBar));
        System.ProgressRedBarStruct = ProgressRedBarStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressRedBarStruct.js.map