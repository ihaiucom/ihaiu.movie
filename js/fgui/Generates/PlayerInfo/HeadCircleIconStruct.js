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
    var PlayerInfo;
    (function (PlayerInfo) {
        var HeadCircleIconStruct = /** @class */ (function (_super) {
            __extends(HeadCircleIconStruct, _super);
            function HeadCircleIconStruct() {
                return _super.call(this) || this;
            }
            HeadCircleIconStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "HeadCircleIcon"));
            };
            HeadCircleIconStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_headIcon = (this.getChild("headIcon"));
                this.m_headCircleIconMask = (this.getChild("headCircleIconMask"));
            };
            HeadCircleIconStruct.URL = "ui://tderqmz5gy5h21";
            HeadCircleIconStruct.DependPackages = ["PlayerInfo"];
            return HeadCircleIconStruct;
        }(fairygui.GComponent));
        PlayerInfo.HeadCircleIconStruct = HeadCircleIconStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=HeadCircleIconStruct.js.map