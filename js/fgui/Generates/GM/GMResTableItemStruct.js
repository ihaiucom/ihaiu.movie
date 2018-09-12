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
    var GM;
    (function (GM) {
        var GMResTableItemStruct = /** @class */ (function (_super) {
            __extends(GMResTableItemStruct, _super);
            function GMResTableItemStruct() {
                return _super.call(this) || this;
            }
            GMResTableItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMResTableItem"));
            };
            GMResTableItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_id = (this.getChild("id"));
                this.m_icon = (this.getChild("icon"));
                this.m_num = (this.getChild("num"));
                this.m_title = (this.getChild("title"));
                this.m_describe = (this.getChild("describe"));
                this.m_button = (this.getChild("button"));
                this.m_numberInput = (this.getChild("numberInput"));
            };
            GMResTableItemStruct.URL = "ui://ujw583yplrid12";
            GMResTableItemStruct.DependPackages = ["GM"];
            return GMResTableItemStruct;
        }(fairygui.GComponent));
        GM.GMResTableItemStruct = GMResTableItemStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMResTableItemStruct.js.map