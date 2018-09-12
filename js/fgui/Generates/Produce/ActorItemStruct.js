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
    var Produce;
    (function (Produce) {
        var ActorItemStruct = /** @class */ (function (_super) {
            __extends(ActorItemStruct, _super);
            function ActorItemStruct() {
                return _super.call(this) || this;
            }
            ActorItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ActorItem"));
            };
            ActorItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_button = this.getController("button");
                this.m_selectType = this.getController("selectType");
                this.m_icon = (this.getChild("icon"));
                this.m_txtLv = (this.getChild("txtLv"));
                this.m_title = (this.getChild("title"));
                this.m_busyFlag = (this.getChild("busyFlag"));
                this.m_starList = (this.getChild("starList"));
            };
            ActorItemStruct.URL = "ui://eg7c5x5rvw1qw";
            ActorItemStruct.DependPackages = ["Produce", "Common"];
            return ActorItemStruct;
        }(fairygui.GButton));
        Produce.ActorItemStruct = ActorItemStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorItemStruct.js.map