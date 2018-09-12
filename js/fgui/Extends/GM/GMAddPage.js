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
    var GM;
    (function (GM) {
        var GMAddPage = /** @class */ (function (_super) {
            __extends(GMAddPage, _super);
            function GMAddPage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //------------------------------
                // 列表数据		
                _this.listData = [];
                _this.filterData = [];
                _this.useListData = [];
                return _this;
            }
            // 窗口初始化完毕
            GMAddPage.prototype.onWindowInited = function () {
                this.popupMenu = fgui.GM.GMPopupMenu.createInstance();
                this.popupMenu.mainButton = this.m_popupButton;
                this.popupMenu.sOnSelect.add(this.onSelectePopupItem, this);
                this.popupMenu.setListData(Games.GMAddType.list);
                this.popupMenu.center();
                this.m_popupButton.onClick(this, this.onClickPopupButton);
                this.selectPopupItem(Games.GMAddType.Item);
                this.m_listTopButton.onClick(this, this.onClickListTopButton);
                this.m_listBottomButton.onClick(this, this.onClickListBottomButton);
                this.m_filterInput.m_title.on(laya.events.Event.INPUT, this, this.onFilterInput);
                this.m_filterCheckbox.onClick(this, this.onClickFilterCheckbox);
            };
            Object.defineProperty(GMAddPage.prototype, "isFilter", {
                get: function () {
                    return this.m_filterCheckbox.selected;
                },
                set: function (val) {
                    this.m_filterCheckbox.selected = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GMAddPage.prototype, "isUseFilter", {
                get: function () {
                    return this.isFilter && isNullOrEmpty(this.m_filterInput.m_title.text.trim());
                },
                enumerable: true,
                configurable: true
            });
            GMAddPage.prototype.onClickFilterCheckbox = function () {
                var _this = this;
                setTimeout(function () {
                    if (_this.isUseFilter) {
                        _this.onFilterInput();
                    }
                    else {
                        _this.noFilter();
                    }
                }, 100);
            };
            // 过滤输入框改变
            GMAddPage.prototype.onFilterInput = function () {
                if (!this.isFilter) {
                    return;
                }
                var txt = this.m_filterInput.m_title.text.trim();
                if (isNullOrEmpty(txt)) {
                    this.noFilter();
                    return;
                }
                var mathList = [];
                if (txt.startsWith("id:")) {
                    txt = txt.replace("id:", "");
                    var arr = txt.split(/[, ;]/);
                    for (var i = 0; i < arr.length; i++) {
                        arr[i] = arr[i].trim();
                    }
                    var items = Game.config.item.getConfigList();
                    for (var i = 0; i < items.length; i++) {
                        for (var j = 0; j < arr.length; j++) {
                            if (items[i].id.toString() == arr[j]) {
                                mathList.push(items[i]);
                                break;
                            }
                        }
                    }
                }
                else if (txt.startsWith("type:")) {
                    txt = txt.replace("type:", "");
                    var arr = txt.split(/[, ;]/);
                    for (var i = 0; i < arr.length; i++) {
                        arr[i] = arr[i].trim();
                    }
                    var items = Game.config.item.getConfigList();
                    for (var i = 0; i < items.length; i++) {
                        for (var j = 0; j < arr.length; j++) {
                            if (items[i].type.toString() == arr[j]) {
                                mathList.push(items[i]);
                                break;
                            }
                        }
                    }
                }
                else {
                    var arr = txt.split(/[, ;]/);
                    var items = Game.config.item.getConfigList();
                    for (var i = 0; i < items.length; i++) {
                        for (var j = 0; j < arr.length; j++) {
                            if (items[i].name.indexOf(arr[j]) != -1 || items[i].id.toString().indexOf(arr[j]) != -1) {
                                mathList.push(items[i]);
                                break;
                            }
                        }
                    }
                }
                this.setFilterData(mathList);
            };
            GMAddPage.prototype.noFilter = function () {
                this.setListData(this.listData);
            };
            // 点击弹窗菜单按钮		
            GMAddPage.prototype.onClickPopupButton = function () {
                fairygui.GRoot.inst.showPopup(this.popupMenu, this.m_popupButton, true);
            };
            // 选中弹窗菜单
            GMAddPage.prototype.onSelectePopupItem = function (index) {
                console.log("onSelectePopupItem " + index);
                this.currentPopupIndex = index;
                this.setItemPopup();
            };
            // 选中弹窗菜单
            GMAddPage.prototype.selectPopupItem = function (index) {
                this.popupMenu.setSelect(index);
            };
            // 该组件所在Tab 显示
            GMAddPage.prototype.onTabShow = function () {
            };
            // 该组件所在Tab 隐藏
            GMAddPage.prototype.onTabHide = function () {
            };
            //------------------------------
            // 点击列表 Top		
            GMAddPage.prototype.onClickListTopButton = function () {
                this.m_list.scrollPane.scrollTop();
            };
            // 点击列表 Bottom
            GMAddPage.prototype.onClickListBottomButton = function () {
                this.m_list.scrollPane.scrollBottom();
            };
            // get useListData(): any[]
            // {
            // 	if (this.isUseFilter)
            // 	{
            // 		return this.filterData;
            // 	}
            // 	else
            // 	{
            // 		return this.listData;
            // 	}
            // }
            GMAddPage.prototype.getData = function (index) {
                return this.useListData[index];
            };
            // 物品		
            GMAddPage.prototype.setItemPopup = function () {
                var items = [];
                var itemTypes = Games.GMAddType.getItemTypes(this.currentPopupIndex);
                if (!itemTypes || itemTypes.length == 0) {
                    items = Game.config.item.getConfigList();
                }
                else {
                    items = (_a = Game.config.item).getConfigsByType.apply(_a, itemTypes);
                }
                this.setListData(items);
                var _a;
            };
            // 设置正常数据列表		
            GMAddPage.prototype.setListData = function (items) {
                this.listData = items;
                this.refreshList(items);
            };
            // 设置过滤数据列表		
            GMAddPage.prototype.setFilterData = function (items) {
                this.filterData = items;
                this.refreshList(items);
            };
            // 刷新列表		
            GMAddPage.prototype.refreshList = function (items) {
                this.useListData = items;
                var list = this.m_list;
                list.setVirtual();
                list.setVirtualAndLoop();
                if (!list.itemRenderer)
                    list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
                list.numItems = items.length;
            };
            GMAddPage.prototype.renderListItem = function (index, item) {
                var data = this.getData(index);
                var itemData = Game.moduleModel.item.getItem(data.id);
                item.setItemData(itemData);
            };
            return GMAddPage;
        }(GM.GMAddPageStruct));
        GM.GMAddPage = GMAddPage;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMAddPage.js.map