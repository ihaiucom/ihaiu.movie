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
        var OtherPlayerUIStruct = /** @class */ (function (_super) {
            __extends(OtherPlayerUIStruct, _super);
            function OtherPlayerUIStruct() {
                return _super.call(this) || this;
            }
            OtherPlayerUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "OtherPlayerUI"));
            };
            OtherPlayerUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_di = (this.getChild("di"));
                this.m_list = (this.getChild("list"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            OtherPlayerUIStruct.URL = "ui://s33x8418lq441ul";
            OtherPlayerUIStruct.DependPackages = ["PfSkin", "Common"];
            return OtherPlayerUIStruct;
        }(fairygui.GComponent));
        PfSkin.OtherPlayerUIStruct = OtherPlayerUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OtherPlayerUIStruct.js.map