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
        var RoomDisplayContainerStruct = /** @class */ (function (_super) {
            __extends(RoomDisplayContainerStruct, _super);
            function RoomDisplayContainerStruct() {
                return _super.call(this) || this;
            }
            RoomDisplayContainerStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "RoomDisplayContainer"));
            };
            RoomDisplayContainerStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            RoomDisplayContainerStruct.URL = "ui://s33x8418w2u61wa";
            RoomDisplayContainerStruct.DependPackages = ["PfSkin"];
            return RoomDisplayContainerStruct;
        }(fairygui.GComponent));
        PfSkin.RoomDisplayContainerStruct = RoomDisplayContainerStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RoomDisplayContainerStruct.js.map