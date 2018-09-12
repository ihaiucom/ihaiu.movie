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
        var WarMoveTextUDStruct = /** @class */ (function (_super) {
            __extends(WarMoveTextUDStruct, _super);
            function WarMoveTextUDStruct() {
                return _super.call(this) || this;
            }
            WarMoveTextUDStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarMoveTextUD"));
            };
            WarMoveTextUDStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            WarMoveTextUDStruct.URL = "ui://s33x8418r8ay1fk";
            WarMoveTextUDStruct.DependPackages = ["PfSkin"];
            return WarMoveTextUDStruct;
        }(fairygui.GLabel));
        PfSkin.WarMoveTextUDStruct = WarMoveTextUDStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarMoveTextUDStruct.js.map