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
    var WarMovie;
    (function (WarMovie) {
        var WarActorPropertyStruct = /** @class */ (function (_super) {
            __extends(WarActorPropertyStruct, _super);
            function WarActorPropertyStruct() {
                return _super.call(this) || this;
            }
            WarActorPropertyStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarActorProperty"));
            };
            WarActorPropertyStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            WarActorPropertyStruct.URL = "ui://y6ozucp1yytj5p";
            WarActorPropertyStruct.DependPackages = ["WarMovie"];
            return WarActorPropertyStruct;
        }(fairygui.GComponent));
        WarMovie.WarActorPropertyStruct = WarActorPropertyStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActorPropertyStruct.js.map