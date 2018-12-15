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
    var Common;
    (function (Common) {
        var PopUpBigStruct = /** @class */ (function (_super) {
            __extends(PopUpBigStruct, _super);
            function PopUpBigStruct() {
                return _super.call(this) || this;
            }
            PopUpBigStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "PopUpBig"));
            };
            PopUpBigStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            PopUpBigStruct.URL = "ui://txcuvopdx9zq48";
            PopUpBigStruct.DependPackages = ["Common", "System"];
            return PopUpBigStruct;
        }(fairygui.GComponent));
        Common.PopUpBigStruct = PopUpBigStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopUpBigStruct.js.map