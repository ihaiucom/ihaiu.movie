var Games;
(function (Games) {
    var EEntity = /** @class */ (function () {
        function EEntity() {
            this.componentDict = new DictionaryList();
            this.entityId = 0;
            this.isDisposed = false;
            //--------------------------------------
            // 接口调用
            //--------------------------------------
            this.isUpdateTick = false;
            this.isRenderTick = false;
            this.isSecondsTick = false;
            this.entityId = Games.IdGenerater.GenerateId();
        }
        /** 添加组件 */
        EEntity.prototype.addComponent = function (component) {
            if (!this.componentDict.hasKey(component.Type)) {
                this.componentDict.add(component.Type, component);
            }
        };
        /** 获取组件 */
        EEntity.prototype.getComponent = function (cls) {
            return this.componentDict.getValue(cls["name"]);
        };
        /** 移除组件 */
        EEntity.prototype.removeComponent = function (component) {
            if (this.componentDict.hasKey(component.Type)) {
                this.componentDict.remove(component.Type);
            }
        };
        EEntity.prototype.start = function () {
        };
        EEntity.prototype.stop = function () {
        };
        EEntity.prototype.onUpdate = function () {
            var components = this.componentDict.getValues();
            for (var i = 0; i < components.length; i++) {
                components[i].onUpdate();
            }
        };
        EEntity.prototype.onRender = function () {
            var components = this.componentDict.getValues();
            for (var i = 0; i < components.length; i++) {
                components[i].onRender();
            }
        };
        EEntity.prototype.onSeconds = function () {
            var components = this.componentDict.getValues();
            for (var i = 0; i < components.length; i++) {
                components[i].onSeconds();
            }
        };
        EEntity.prototype.dispose = function () {
            if (this.isDisposed)
                return;
            this.isDisposed = true;
            var components = this.componentDict.getValues();
            for (var i = 0; i < components.length; i++) {
                components[i].dispose();
            }
            this.componentDict.clear();
        };
        return EEntity;
    }());
    Games.EEntity = EEntity;
})(Games || (Games = {}));
//# sourceMappingURL=EEntity.js.map