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
        var ProgressBarYellowStruct = /** @class */ (function (_super) {
            __extends(ProgressBarYellowStruct, _super);
            function ProgressBarYellowStruct() {
                return _super.call(this) || this;
            }
            ProgressBarYellowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ProgressBarYellow"));
            };
            ProgressBarYellowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_title = (this.getChild("title"));
            };
            ProgressBarYellowStruct.URL = "ui://s33x8418jazc1mn";
            ProgressBarYellowStruct.DependPackages = ["PfSkin", "Common"];
            return ProgressBarYellowStruct;
        }(fairygui.GProgressBar));
        PfSkin.ProgressBarYellowStruct = ProgressBarYellowStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressBarYellowStruct.js.map