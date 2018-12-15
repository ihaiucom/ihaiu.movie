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
    var Street;
    (function (Street) {
        var BtnBackStruct = /** @class */ (function (_super) {
            __extends(BtnBackStruct, _super);
            function BtnBackStruct() {
                return _super.call(this) || this;
            }
            BtnBackStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "BtnBack"));
            };
            BtnBackStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            BtnBackStruct.URL = "ui://mu4e45modo332c";
            BtnBackStruct.DependPackages = ["Street"];
            return BtnBackStruct;
        }(fairygui.GButton));
        Street.BtnBackStruct = BtnBackStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnBackStruct.js.map