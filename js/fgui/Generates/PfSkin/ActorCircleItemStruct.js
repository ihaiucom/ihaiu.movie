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
        var ActorCircleItemStruct = /** @class */ (function (_super) {
            __extends(ActorCircleItemStruct, _super);
            function ActorCircleItemStruct() {
                return _super.call(this) || this;
            }
            ActorCircleItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ActorCircleItem"));
            };
            ActorCircleItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            ActorCircleItemStruct.URL = "ui://s33x8418mywn1kf";
            ActorCircleItemStruct.DependPackages = ["PfSkin"];
            return ActorCircleItemStruct;
        }(fairygui.GLabel));
        PfSkin.ActorCircleItemStruct = ActorCircleItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorCircleItemStruct.js.map