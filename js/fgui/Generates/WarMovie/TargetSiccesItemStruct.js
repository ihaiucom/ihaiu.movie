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
        var TargetSiccesItemStruct = /** @class */ (function (_super) {
            __extends(TargetSiccesItemStruct, _super);
            function TargetSiccesItemStruct() {
                return _super.call(this) || this;
            }
            TargetSiccesItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "targetSiccesItem"));
            };
            TargetSiccesItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon1 = (this.getChild("icon1"));
                this.m_val1 = (this.getChild("val1"));
                this.m_starList = (this.getChild("starList"));
            };
            TargetSiccesItemStruct.URL = "ui://y6ozucp1h8qae0";
            TargetSiccesItemStruct.DependPackages = ["WarMovie", "Common"];
            return TargetSiccesItemStruct;
        }(fairygui.GComponent));
        WarMovie.TargetSiccesItemStruct = TargetSiccesItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TargetSiccesItemStruct.js.map