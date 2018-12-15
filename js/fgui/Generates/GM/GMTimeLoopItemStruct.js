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
    var GM;
    (function (GM) {
        var GMTimeLoopItemStruct = /** @class */ (function (_super) {
            __extends(GMTimeLoopItemStruct, _super);
            function GMTimeLoopItemStruct() {
                return _super.call(this) || this;
            }
            GMTimeLoopItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMTimeLoopItem"));
            };
            GMTimeLoopItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_visiable = (this.getChild("visiable"));
            };
            GMTimeLoopItemStruct.URL = "ui://ujw583yp7h8s11";
            GMTimeLoopItemStruct.DependPackages = ["GM"];
            return GMTimeLoopItemStruct;
        }(fairygui.GComponent));
        GM.GMTimeLoopItemStruct = GMTimeLoopItemStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMTimeLoopItemStruct.js.map