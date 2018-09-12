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
        var ActorAttrItemStruct = /** @class */ (function (_super) {
            __extends(ActorAttrItemStruct, _super);
            function ActorAttrItemStruct() {
                return _super.call(this) || this;
            }
            ActorAttrItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ActorAttrItem"));
            };
            ActorAttrItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_attrIcon = (this.getChild("attrIcon"));
                this.m_attrValue = (this.getChild("attrValue"));
            };
            ActorAttrItemStruct.URL = "ui://eg7c5x5regep1h";
            ActorAttrItemStruct.DependPackages = ["Produce", "Common"];
            return ActorAttrItemStruct;
        }(fairygui.GComponent));
        Produce.ActorAttrItemStruct = ActorAttrItemStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorAttrItemStruct.js.map