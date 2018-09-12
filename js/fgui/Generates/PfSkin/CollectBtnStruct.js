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
        var CollectBtnStruct = /** @class */ (function (_super) {
            __extends(CollectBtnStruct, _super);
            function CollectBtnStruct() {
                return _super.call(this) || this;
            }
            CollectBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "CollectBtn"));
            };
            CollectBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            CollectBtnStruct.URL = "ui://s33x8418jazc1mb";
            CollectBtnStruct.DependPackages = ["PfSkin"];
            return CollectBtnStruct;
        }(fairygui.GButton));
        PfSkin.CollectBtnStruct = CollectBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CollectBtnStruct.js.map