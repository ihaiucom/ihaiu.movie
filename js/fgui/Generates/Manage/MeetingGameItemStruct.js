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
    var Manage;
    (function (Manage) {
        var MeetingGameItemStruct = /** @class */ (function (_super) {
            __extends(MeetingGameItemStruct, _super);
            function MeetingGameItemStruct() {
                return _super.call(this) || this;
            }
            MeetingGameItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "MeetingGameItem"));
            };
            MeetingGameItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dice = this.getController("dice");
            };
            MeetingGameItemStruct.URL = "ui://y3jchkngtpm81u";
            MeetingGameItemStruct.DependPackages = ["Manage", "Common"];
            return MeetingGameItemStruct;
        }(fairygui.GComponent));
        Manage.MeetingGameItemStruct = MeetingGameItemStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingGameItemStruct.js.map