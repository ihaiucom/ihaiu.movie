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
    var PfSkin;
    (function (PfSkin) {
        var OscarChair3Struct = /** @class */ (function (_super) {
            __extends(OscarChair3Struct, _super);
            function OscarChair3Struct() {
                return _super.call(this) || this;
            }
            OscarChair3Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "OscarChair3"));
            };
            OscarChair3Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            OscarChair3Struct.URL = "ui://s33x8418iacmt1wf";
            OscarChair3Struct.DependPackages = ["PfSkin"];
            return OscarChair3Struct;
        }(fairygui.GComponent));
        PfSkin.OscarChair3Struct = OscarChair3Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarChair3Struct.js.map