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
    var Bag;
    (function (Bag) {
        var StarItemStruct = /** @class */ (function (_super) {
            __extends(StarItemStruct, _super);
            function StarItemStruct() {
                return _super.call(this) || this;
            }
            StarItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Bag", "StarItem"));
            };
            StarItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            StarItemStruct.URL = "ui://wdrb9z06uepot";
            StarItemStruct.DependPackages = ["Bag"];
            return StarItemStruct;
        }(fairygui.GLabel));
        Bag.StarItemStruct = StarItemStruct;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StarItemStruct.js.map