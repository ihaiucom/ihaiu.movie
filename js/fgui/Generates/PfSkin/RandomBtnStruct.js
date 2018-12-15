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
        var RandomBtnStruct = /** @class */ (function (_super) {
            __extends(RandomBtnStruct, _super);
            function RandomBtnStruct() {
                return _super.call(this) || this;
            }
            RandomBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "RandomBtn"));
            };
            RandomBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            RandomBtnStruct.URL = "ui://s33x8418tag2t26x";
            RandomBtnStruct.DependPackages = ["PfSkin"];
            return RandomBtnStruct;
        }(fairygui.GButton));
        PfSkin.RandomBtnStruct = RandomBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RandomBtnStruct.js.map