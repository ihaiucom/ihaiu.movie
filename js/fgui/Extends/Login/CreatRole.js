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
    var Login;
    (function (Login) {
        var CreatRole = /** @class */ (function (_super) {
            __extends(CreatRole, _super);
            function CreatRole() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // 窗口初始化完毕
            CreatRole.prototype.onWindowInited = function () {
                this.m_sex.on(fairygui.Events.CLICK_ITEM, this, this.onSelectSex);
                this.m_nameInput.m_txt_account.promptText = Games.TEXT.TipEnterRoleName;
                this.m_nameInput.m_txt_account.on(laya.events.Event.INPUT, this, this.onInputName);
                this.m_sexTip.text = Games.TEXT.SexTip;
                this.m_randomButton.onClick(this, this.onClickRandomName);
                this.m_btn_next.onClick(this, this.onClickNext);
            };
            // 窗口显示
            CreatRole.prototype.onWindowShow = function () {
                this.checkPage();
            };
            CreatRole.prototype.checkPage = function () {
                if (this.sex != -1) {
                    if (isNullOrEmpty(this.rolename)) {
                        this.m_roleSelect.selectedIndex = 1;
                    }
                    else {
                        this.m_roleSelect.selectedIndex = 2;
                    }
                }
                else {
                    this.m_roleSelect.selectedIndex = 0;
                    //choose first actor 时候不显示提示文字
                    if (Login.InitialActor) {
                        this.m_sexTip.visible = false;
                    }
                }
            };
            CreatRole.prototype.onSelectSex = function () {
                this.checkPage();
            };
            CreatRole.prototype.onInputName = function () {
                this.checkPage();
            };
            CreatRole.prototype.onClickRandomName = function () {
                this.rolename = getRandomRoleName();
                this.checkPage();
            };
            Object.defineProperty(CreatRole.prototype, "rolename", {
                // 公司名称
                get: function () {
                    return this.m_nameInput.m_txt_account.text.trim();
                },
                set: function (value) {
                    this.m_nameInput.m_txt_account.text = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CreatRole.prototype, "sex", {
                // 性别
                get: function () {
                    switch (this.m_sex.selectedIndex) {
                        case 0:
                            return Proto.SE.EUserSex.boy;
                        case 1:
                            return Proto.SE.EUserSex.girl;
                    }
                    return -1;
                },
                set: function (value) {
                    switch (value) {
                        case Proto.SE.EUserSex.boy:
                            this.m_sex.selectedIndex = 0;
                            break;
                        case Proto.SE.EUserSex.girl:
                            this.m_sex.selectedIndex = 1;
                            break;
                    }
                },
                enumerable: true,
                configurable: true
            });
            // 点击按钮--下一步
            CreatRole.prototype.onClickNext = function () {
                if (!validateRoleName(this.rolename)) {
                    return false;
                }
                Game.protosender.GameData.InitGameData(this.rolename, this.sex);
            };
            return CreatRole;
        }(Login.CreatRoleStruct));
        Login.CreatRole = CreatRole;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CreatRole.js.map