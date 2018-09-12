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
    var Guide;
    (function (Guide) {
        var GuideTaskRecordUI = /** @class */ (function (_super) {
            __extends(GuideTaskRecordUI, _super);
            function GuideTaskRecordUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GuideTaskRecordUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.setVirtual();
                this.m_list.itemRenderer = Handler.create(this, this.onUpdateItemRender, null, false);
            };
            GuideTaskRecordUI.prototype.onUpdateItemRender = function (index, item) {
                var item1 = item;
                item1.updateView(this.storyLists[index]);
            };
            GuideTaskRecordUI.prototype.onWindowShow = function () {
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
            };
            GuideTaskRecordUI.prototype.onWindowHide = function () {
                this.m_closeBtn.offClick(this, this.onClickCloseBtn);
            };
            GuideTaskRecordUI.prototype.onClickCloseBtn = function () {
                this.hide();
            };
            GuideTaskRecordUI.prototype.show = function () {
                this.visible = true;
                this.storyLists = Game.moduleModel.guide.storyLists;
                this.m_list.numItems = this.storyLists.length;
            };
            GuideTaskRecordUI.prototype.hide = function () {
                this.visible = false;
            };
            return GuideTaskRecordUI;
        }(Guide.GuideTaskRecordUIStruct));
        Guide.GuideTaskRecordUI = GuideTaskRecordUI;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideTaskRecordUI.js.map