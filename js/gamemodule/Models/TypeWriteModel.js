/**
* name
*/
var Games;
(function (Games) {
    var TypeWriteManager = /** @class */ (function () {
        function TypeWriteManager() {
            //打字机效果
            this.typewriteDict = new Dictionary();
            //池子
            this.pools = new Array();
            //
            this.id = 0;
        }
        //从对象池获取
        TypeWriteManager.prototype.getTypeByPool = function () {
            var data;
            if (this.pools.length > 0) {
                data = this.pools[0];
                this.pools.splice(0, 1);
            }
            return data;
        };
        //创建一个
        TypeWriteManager.prototype.createTypeWrite = function () {
            var data = this.getTypeByPool();
            if (data == null) {
                data = new Games.TypeWriteData();
                this.id++;
                data.id = this.id;
                this.typewriteDict.add(this.id, data);
            }
            return data;
        };
        //根据id获取
        TypeWriteManager.prototype.getTypeWriteDataById = function (id) {
            return this.typewriteDict.getValue(id);
        };
        //停止
        TypeWriteManager.prototype.stopById = function (id) {
            var data = this.getTypeWriteDataById(id);
            if (data) {
                data.stopTypeWrite();
            }
        };
        //移除到对象池
        TypeWriteManager.prototype.removeToPool = function (id) {
            var data = this.getTypeWriteDataById(id);
            if (data) {
                data.stopTypeWrite();
                this.pools.push(data);
            }
        };
        return TypeWriteManager;
    }());
    Games.TypeWriteManager = TypeWriteManager;
})(Games || (Games = {}));
//# sourceMappingURL=TypeWriteModel.js.map