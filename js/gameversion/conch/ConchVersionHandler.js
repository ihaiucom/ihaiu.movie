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
var GameVersions;
(function (GameVersions) {
    var ConchVersionHandler = /** @class */ (function (_super) {
        __extends(ConchVersionHandler, _super);
        function ConchVersionHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * 检测是否需要拷贝assets->data/{packages}/files
         */
        ConchVersionHandler.prototype.checkAssetsCopy = function () {
        };
        /**
         * 更新 分包资源
         */
        ConchVersionHandler.prototype.updatePartial = function () {
            var _this = this;
            var zip = new GameVersions.UpdateResZip();
            zip.urlpath = this.urlpath;
            zip.assetsidUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PartialFolder + "/update/assetsid.txt";
            zip.filetableUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PartialFolder + "/update/filetable.txt";
            zip.zipUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PartialFolder + "/res.zip";
            var cachePath = window["conch"].getCachePath();
            var filename = "res_partia_" + this.webVersionConfig.PatchVersion + "__" + this.webVersionConfig.PatchFolder;
            filename = filename.replace(/\./g, "_").replace(/\//g, "__").replace(/\\/g, "__") + new Date().getTime();
            zip.zipPath = cachePath + "/" + filename + ".zip";
            zip.setCallback(this, 
            // onComplete	
            function () {
                _this.manager.onUpdateParitialComplete();
            }, 
            // onError
            function () {
                // 检测是否需要更新 补丁资源
                if (_this.isNeedUpdateRes(_this.localResVersionData, _this.webResVersionData)) {
                    _this.updatePatch();
                }
                else {
                    _this.end();
                }
            });
            zip.run();
        };
        /**
         * 更新 补丁资源
         */
        ConchVersionHandler.prototype.updatePatch = function () {
            var _this = this;
            var zip = new GameVersions.UpdateResZip();
            zip.urlpath = this.urlpath;
            zip.assetsidUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PatchFolder + "/update/assetsid.txt";
            zip.filetableUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PatchFolder + "/update/filetable.txt";
            zip.zipUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PatchFolder + "/res.zip";
            var cachePath = window["conch"] ? window["conch"].getCachePath() : "./";
            var filename = "res_patch_" + this.webVersionConfig.PatchVersion + "__" + this.webVersionConfig.PatchFolder;
            filename = filename.replace(/\./g, "_").replace(/\//g, "__").replace(/\\/g, "__") + new Date().getTime();
            zip.zipPath = cachePath + "/" + filename + ".zip";
            zip.setCallback(this, 
            // onComplete	
            function () {
                _this.manager.onUpdatePatchComplete();
            }, 
            // onError
            function () {
                _this.end();
            });
            zip.run();
        };
        return ConchVersionHandler;
    }(GameVersions.VersionHandler));
    GameVersions.ConchVersionHandler = ConchVersionHandler;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=ConchVersionHandler.js.map