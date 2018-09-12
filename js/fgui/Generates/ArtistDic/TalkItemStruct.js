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
    var ArtistDic;
    (function (ArtistDic) {
        var TalkItemStruct = /** @class */ (function (_super) {
            __extends(TalkItemStruct, _super);
            function TalkItemStruct() {
                return _super.call(this) || this;
            }
            TalkItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDic", "talkItem"));
            };
            TalkItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_haveVip = this.getController("haveVip");
                this.m_icon = (this.getChild("icon"));
                this.m_name = (this.getChild("name"));
                this.m_des = (this.getChild("des"));
                this.m_starTip = (this.getChild("starTip"));
            };
            TalkItemStruct.URL = "ui://aeg3jnlem8aty";
            TalkItemStruct.DependPackages = ["ArtistDic", "Common", "WarMovie"];
            return TalkItemStruct;
        }(fairygui.GComponent));
        ArtistDic.TalkItemStruct = TalkItemStruct;
    })(ArtistDic = fgui.ArtistDic || (fgui.ArtistDic = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TalkItemStruct.js.map