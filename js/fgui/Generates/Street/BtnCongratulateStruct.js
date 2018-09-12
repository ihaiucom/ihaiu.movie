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
        var BtnCongratulateStruct = /** @class */ (function (_super) {
            __extends(BtnCongratulateStruct, _super);
            function BtnCongratulateStruct() {
                return _super.call(this) || this;
            }
            BtnCongratulateStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "BtnCongratulate"));
            };
            BtnCongratulateStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_isOpen = this.getController("isOpen");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_time = (this.getChild("time"));
            };
            BtnCongratulateStruct.URL = "ui://mu4e45moky79r";
            BtnCongratulateStruct.DependPackages = ["Street", "PfSkin"];
            return BtnCongratulateStruct;
        }(fairygui.GButton));
        Street.BtnCongratulateStruct = BtnCongratulateStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnCongratulateStruct.js.map