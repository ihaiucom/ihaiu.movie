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
        var AnimContainerStruct = /** @class */ (function (_super) {
            __extends(AnimContainerStruct, _super);
            function AnimContainerStruct() {
                return _super.call(this) || this;
            }
            AnimContainerStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "AnimContainer"));
            };
            AnimContainerStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_oscarBg = (this.getChild("oscarBg"));
                this.m_oscarCard = (this.getChild("oscarCard"));
                this.m_oscarAvatar = (this.getChild("oscarAvatar"));
            };
            AnimContainerStruct.URL = "ui://s33x8418h1e3t1wk";
            AnimContainerStruct.DependPackages = ["PfSkin"];
            return AnimContainerStruct;
        }(fairygui.GComponent));
        PfSkin.AnimContainerStruct = AnimContainerStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AnimContainerStruct.js.map