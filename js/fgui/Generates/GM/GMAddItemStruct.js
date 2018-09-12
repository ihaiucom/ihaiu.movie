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
        var GMAddItemStruct = /** @class */ (function (_super) {
            __extends(GMAddItemStruct, _super);
            function GMAddItemStruct() {
                return _super.call(this) || this;
            }
            GMAddItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMAddItem"));
            };
            GMAddItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_id = (this.getChild("id"));
                this.m_title = (this.getChild("title"));
                this.m_describe = (this.getChild("describe"));
                this.m_icon = (this.getChild("icon"));
                this.m_num = (this.getChild("num"));
                this.m_button = (this.getChild("button"));
                this.m_numberInput = (this.getChild("numberInput"));
            };
            GMAddItemStruct.URL = "ui://ujw583ypfv0tc";
            GMAddItemStruct.DependPackages = ["GM"];
            return GMAddItemStruct;
        }(fairygui.GComponent));
        GM.GMAddItemStruct = GMAddItemStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMAddItemStruct.js.map