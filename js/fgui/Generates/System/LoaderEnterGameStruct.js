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
    var System;
    (function (System) {
        var LoaderEnterGameStruct = /** @class */ (function (_super) {
            __extends(LoaderEnterGameStruct, _super);
            function LoaderEnterGameStruct() {
                return _super.call(this) || this;
            }
            LoaderEnterGameStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "LoaderEnterGame"));
            };
            LoaderEnterGameStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_help = (this.getChild("help"));
                this.m_txt_resVer = (this.getChild("txt_resVer"));
                this.m_txt_gamever = (this.getChild("txt_gamever"));
                this.m_screenBG = (this.getChild("screenBG"));
                this.m_progressBar = (this.getChild("progressBar"));
            };
            LoaderEnterGameStruct.URL = "ui://fiza9hgr5sas6";
            LoaderEnterGameStruct.DependPackages = ["System"];
            return LoaderEnterGameStruct;
        }(fairygui.GComponent));
        System.LoaderEnterGameStruct = LoaderEnterGameStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LoaderEnterGameStruct.js.map