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
        var ActionContainerStruct = /** @class */ (function (_super) {
            __extends(ActionContainerStruct, _super);
            function ActionContainerStruct() {
                return _super.call(this) || this;
            }
            ActionContainerStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ActionContainer"));
            };
            ActionContainerStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            ActionContainerStruct.URL = "ui://s33x8418gjpxt24j";
            ActionContainerStruct.DependPackages = ["PfSkin"];
            return ActionContainerStruct;
        }(fairygui.GComponent));
        PfSkin.ActionContainerStruct = ActionContainerStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActionContainerStruct.js.map