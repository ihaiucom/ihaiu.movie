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
    var Bag;
    (function (Bag) {
        var PactItemStruct = /** @class */ (function (_super) {
            __extends(PactItemStruct, _super);
            function PactItemStruct() {
                return _super.call(this) || this;
            }
            PactItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Bag", "PactItem"));
            };
            PactItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_state = this.getController("state");
                this.m_title = (this.getChild("title"));
                this.m_actor = (this.getChild("actor"));
                this.m_star = (this.getChild("star"));
            };
            PactItemStruct.URL = "ui://wdrb9z06n9f09";
            PactItemStruct.DependPackages = ["Bag", "Common"];
            return PactItemStruct;
        }(fairygui.GButton));
        Bag.PactItemStruct = PactItemStruct;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PactItemStruct.js.map