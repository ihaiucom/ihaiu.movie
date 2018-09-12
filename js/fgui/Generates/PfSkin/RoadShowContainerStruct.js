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
        var RoadShowContainerStruct = /** @class */ (function (_super) {
            __extends(RoadShowContainerStruct, _super);
            function RoadShowContainerStruct() {
                return _super.call(this) || this;
            }
            RoadShowContainerStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "RoadShowContainer"));
            };
            RoadShowContainerStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            RoadShowContainerStruct.URL = "ui://s33x8418iacmt1w4";
            RoadShowContainerStruct.DependPackages = ["PfSkin"];
            return RoadShowContainerStruct;
        }(fairygui.GComponent));
        PfSkin.RoadShowContainerStruct = RoadShowContainerStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RoadShowContainerStruct.js.map