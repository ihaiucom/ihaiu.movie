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
        var CommonTapeStruct = /** @class */ (function (_super) {
            __extends(CommonTapeStruct, _super);
            function CommonTapeStruct() {
                return _super.call(this) || this;
            }
            CommonTapeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "CommonTape"));
            };
            CommonTapeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t1 = this.getTransition("t1");
            };
            CommonTapeStruct.URL = "ui://txcuvopddvatt21f";
            CommonTapeStruct.DependPackages = ["Common"];
            return CommonTapeStruct;
        }(fairygui.GComponent));
        Common.CommonTapeStruct = CommonTapeStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonTapeStruct.js.map