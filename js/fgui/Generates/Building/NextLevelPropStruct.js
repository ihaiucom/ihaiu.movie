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
        var NextLevelPropStruct = /** @class */ (function (_super) {
            __extends(NextLevelPropStruct, _super);
            function NextLevelPropStruct() {
                return _super.call(this) || this;
            }
            NextLevelPropStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "NextLevelProp"));
            };
            NextLevelPropStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_list = (this.getChild("list"));
            };
            NextLevelPropStruct.URL = "ui://d062jvkgcpc911c";
            NextLevelPropStruct.DependPackages = ["Building"];
            return NextLevelPropStruct;
        }(fairygui.GComponent));
        Building.NextLevelPropStruct = NextLevelPropStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=NextLevelPropStruct.js.map