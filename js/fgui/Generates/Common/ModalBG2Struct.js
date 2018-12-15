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
    var Common;
    (function (Common) {
        var ModalBG2Struct = /** @class */ (function (_super) {
            __extends(ModalBG2Struct, _super);
            function ModalBG2Struct() {
                return _super.call(this) || this;
            }
            ModalBG2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ModalBG2"));
            };
            ModalBG2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
            };
            ModalBG2Struct.URL = "ui://txcuvopdep0gt25z";
            ModalBG2Struct.DependPackages = ["Common"];
            return ModalBG2Struct;
        }(fairygui.GComponent));
        Common.ModalBG2Struct = ModalBG2Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ModalBG2Struct.js.map