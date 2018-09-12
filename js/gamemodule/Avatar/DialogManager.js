var Games;
(function (Games) {
    //----------------------------
    // 对话管理
    //----------------------------
    var DialogManager = /** @class */ (function () {
        function DialogManager() {
        }
        DialogManager.install = function () {
            // this.sDialogFinish.add(this.onDialogFinish, this);
        };
        DialogManager.startDialog = function (avatarA, avatarB, dialogs, performType) {
            var dialog = new Games.Dialog();
            dialog.dialogId = ++this.dialogId;
            dialog.start(avatarA, avatarB, dialogs, performType);
            return dialog;
        };
        DialogManager.dialogId = 0;
        DialogManager.sDialogFinish = new TypedSignal();
        DialogManager.sDialogEvent = new TypedSignal();
        DialogManager.dialogDict = new Dictionary();
        return DialogManager;
    }());
    Games.DialogManager = DialogManager;
})(Games || (Games = {}));
//# sourceMappingURL=DialogManager.js.map