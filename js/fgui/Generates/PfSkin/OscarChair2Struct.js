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
        var OscarChair2Struct = /** @class */ (function (_super) {
            __extends(OscarChair2Struct, _super);
            function OscarChair2Struct() {
                return _super.call(this) || this;
            }
            OscarChair2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "OscarChair2"));
            };
            OscarChair2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            OscarChair2Struct.URL = "ui://s33x8418iacmt1we";
            OscarChair2Struct.DependPackages = ["PfSkin"];
            return OscarChair2Struct;
        }(fairygui.GComponent));
        PfSkin.OscarChair2Struct = OscarChair2Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarChair2Struct.js.map