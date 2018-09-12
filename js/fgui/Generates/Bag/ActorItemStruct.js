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
        var ActorItemStruct = /** @class */ (function (_super) {
            __extends(ActorItemStruct, _super);
            function ActorItemStruct() {
                return _super.call(this) || this;
            }
            ActorItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Bag", "ActorItem"));
            };
            ActorItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_txtLv = (this.getChild("txtLv"));
                this.m_title = (this.getChild("title"));
                this.m_actor = (this.getChild("actor"));
                this.m_star = (this.getChild("star"));
            };
            ActorItemStruct.URL = "ui://wdrb9z06n9f05";
            ActorItemStruct.DependPackages = ["Bag", "Common", "PlayerInfo"];
            return ActorItemStruct;
        }(fairygui.GButton));
        Bag.ActorItemStruct = ActorItemStruct;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorItemStruct.js.map