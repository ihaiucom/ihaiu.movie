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
    var Building;
    (function (Building) {
        var CurLevelPropStruct = /** @class */ (function (_super) {
            __extends(CurLevelPropStruct, _super);
            function CurLevelPropStruct() {
                return _super.call(this) || this;
            }
            CurLevelPropStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "CurLevelProp"));
            };
            CurLevelPropStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_list = (this.getChild("list"));
            };
            CurLevelPropStruct.URL = "ui://d062jvkgcpc911b";
            CurLevelPropStruct.DependPackages = ["Building"];
            return CurLevelPropStruct;
        }(fairygui.GComponent));
        Building.CurLevelPropStruct = CurLevelPropStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CurLevelPropStruct.js.map