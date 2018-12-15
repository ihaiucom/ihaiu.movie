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
        var LyContainerStruct = /** @class */ (function (_super) {
            __extends(LyContainerStruct, _super);
            function LyContainerStruct() {
                return _super.call(this) || this;
            }
            LyContainerStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "LyContainer"));
            };
            LyContainerStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            LyContainerStruct.URL = "ui://s33x8418sm6tt1vo";
            LyContainerStruct.DependPackages = ["PfSkin"];
            return LyContainerStruct;
        }(fairygui.GComponent));
        PfSkin.LyContainerStruct = LyContainerStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LyContainerStruct.js.map