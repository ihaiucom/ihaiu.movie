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
        var TrainResultItemStruct = /** @class */ (function (_super) {
            __extends(TrainResultItemStruct, _super);
            function TrainResultItemStruct() {
                return _super.call(this) || this;
            }
            TrainResultItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "TrainResultItem"));
            };
            TrainResultItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_cur = (this.getChild("cur"));
                this.m_next = (this.getChild("next"));
                this.m_add = (this.getChild("add"));
            };
            TrainResultItemStruct.URL = "ui://s33x8418jazc1mw";
            TrainResultItemStruct.DependPackages = ["PfSkin"];
            return TrainResultItemStruct;
        }(fairygui.GLabel));
        PfSkin.TrainResultItemStruct = TrainResultItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TrainResultItemStruct.js.map