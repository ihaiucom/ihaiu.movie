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
        var ActorFilterItemStruct = /** @class */ (function (_super) {
            __extends(ActorFilterItemStruct, _super);
            function ActorFilterItemStruct() {
                return _super.call(this) || this;
            }
            ActorFilterItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ActorFilterItem"));
            };
            ActorFilterItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_loader = (this.getChild("loader"));
            };
            ActorFilterItemStruct.URL = "ui://eg7c5x5rvw1q16";
            ActorFilterItemStruct.DependPackages = ["Produce", "Common"];
            return ActorFilterItemStruct;
        }(fairygui.GComponent));
        Produce.ActorFilterItemStruct = ActorFilterItemStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorFilterItemStruct.js.map