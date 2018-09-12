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
        var NumberInputStruct = /** @class */ (function (_super) {
            __extends(NumberInputStruct, _super);
            function NumberInputStruct() {
                return _super.call(this) || this;
            }
            NumberInputStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "NumberInput"));
            };
            NumberInputStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_downButton = (this.getChild("downButton"));
                this.m_upButton = (this.getChild("upButton"));
            };
            NumberInputStruct.URL = "ui://ujw583ypfv0tf";
            NumberInputStruct.DependPackages = ["GM"];
            return NumberInputStruct;
        }(fairygui.GComponent));
        GM.NumberInputStruct = NumberInputStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=NumberInputStruct.js.map