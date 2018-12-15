var Games;
(function (Games) {
    var TypeWriteData = /** @class */ (function () {
        function TypeWriteData() {
        }
        /**
         * 打字机效果
         * @param delay 间隔时间
         * @param src 目标文本
         * @param textField 文本
         * @param complete 完成回调函数
         * @param update 更新回调函数
         */
        TypeWriteData.prototype.startTypeWrite = function (delay, src, textField, complete, update) {
            if (update === void 0) { update = null; }
            this.stopTypeWrite();
            this.src = src;
            this.completeFunc = complete;
            this.updateFunc = update;
            this.textField = textField;
            this.charIndex = 0;
            this.curString = "";
            Laya.timer.loop(delay, this, this.updateTime);
            this.updateTime();
        };
        //停止
        TypeWriteData.prototype.stopTypeWrite = function () {
            Laya.timer.clear(this, this.updateTime);
        };
        //设置定时间隔
        TypeWriteData.prototype.setDelay = function (delay) {
            Laya.timer.loop(delay, this, this.updateTime);
        };
        //直接完成
        TypeWriteData.prototype.completeTypeWrite = function () {
            this.charByTimeComplete();
        };
        //定时执行
        TypeWriteData.prototype.updateTime = function () {
            if (this.charIndex >= this.src.length) {
                this.charByTimeComplete();
            }
            else {
                this.charByTimeUpdate();
                this.charIndex++;
            }
        };
        //完成打字效果
        TypeWriteData.prototype.charByTimeComplete = function () {
            //直接显示
            this.textField.text = this.src;
            //有回调掉用
            if (this.completeFunc) {
                this.completeFunc();
            }
            //停止
            this.stopTypeWrite();
        };
        //更新打字效果
        TypeWriteData.prototype.charByTimeUpdate = function () {
            this.curString += this.src.charAt(this.charIndex);
            if (this.textField) {
                this.textField.text = this.curString;
            }
            //调用更新函数
            if (this.updateFunc) {
                this.updateFunc(this.curString);
            }
        };
        return TypeWriteData;
    }());
    Games.TypeWriteData = TypeWriteData;
})(Games || (Games = {}));
//# sourceMappingURL=TypeWriteData.js.map