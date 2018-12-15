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
        var ModalBGStruct = /** @class */ (function (_super) {
            __extends(ModalBGStruct, _super);
            function ModalBGStruct() {
                return _super.call(this) || this;
            }
            ModalBGStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ModalBG"));
            };
            ModalBGStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            ModalBGStruct.URL = "ui://txcuvopdoapb8o";
            ModalBGStruct.DependPackages = ["Common"];
            return ModalBGStruct;
        }(fairygui.GComponent));
        Common.ModalBGStruct = ModalBGStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ModalBGStruct.js.map