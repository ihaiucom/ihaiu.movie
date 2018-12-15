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
        var ScoutInputStruct = /** @class */ (function (_super) {
            __extends(ScoutInputStruct, _super);
            function ScoutInputStruct() {
                return _super.call(this) || this;
            }
            ScoutInputStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ScoutInput"));
            };
            ScoutInputStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_nameGroup = (this.getChild("nameGroup"));
                this.m_title = (this.getChild("title"));
            };
            ScoutInputStruct.URL = "ui://s33x8418bw70t273";
            ScoutInputStruct.DependPackages = ["PfSkin", "Common"];
            return ScoutInputStruct;
        }(fairygui.GLabel));
        PfSkin.ScoutInputStruct = ScoutInputStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ScoutInputStruct.js.map