var GameVersions;
(function (GameVersions) {
    var Handler = laya.utils.Handler;
    var UpdateResZip = /** @class */ (function () {
        function UpdateResZip() {
            this.assetsidUrl = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/version-patch/patch_v1_05_01/update/assetsid.txt";
            this.filetableUrl = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/version-patch/patch_v1_05_01/update/filetable.txt";
            this.urlpath = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/web/";
            this.zipUrl = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/version-patch/patch_v1_05_01/update/res.zip";
            this.zipRate = 0;
            this.zipRateNetBreak = 10;
            this.zipRateTimeHandler = -1;
        }
        UpdateResZip.prototype.setCallback = function (callbackObj, onComplete, onError) {
            this.callbackObj = callbackObj;
            this.callbacOnComplete = onComplete;
            this.callbacOnError = onError;
        };
        UpdateResZip.prototype.run = function () {
            this.updateAssetsid();
        };
        UpdateResZip.prototype.updateAssetsid = function () {
            var _this = this;
            Laya.loader.load(this.assetsidUrl, Handler.create(this, function () {
                _this.webAssetsid = Laya.loader.getRes(_this.assetsidUrl);
                _this.updateFiletable();
            }));
        };
        UpdateResZip.prototype.updateFiletable = function () {
            var _this = this;
            Laya.loader.load(this.filetableUrl, Handler.create(this, function () {
                _this.txtdcc = Laya.loader.getRes(_this.filetableUrl);
                _this.downZip();
            }));
        };
        UpdateResZip.prototype.saveFiletable = function () {
            //alert("this.txtdcc=" + this.txtdcc + " this.webAssetsid=" + this.webAssetsid + " " + (this.txtdcc ? this.txtdcc.length : 0));
            if (this.txtdcc && this.txtdcc.length > 0) {
                window["appcache"].saveFileTable(this.txtdcc);
                window["appcache"] = new window["AppCache"](this.urlpath);
                if (this.webAssetsid) {
                    window["appcache"].setResourceID('netassetsid', this.webAssetsid);
                }
            }
        };
        UpdateResZip.prototype.downZip = function () {
            this.zipRate = 0;
            this.zipRateNetBreak = 10;
            this.breakpointDownZip();
        };
        UpdateResZip.prototype.breakpointDownZip = function () {
            var _this = this;
            // alert("breakpointDownZip zipRate=" + this.zipRate);
            console.log("breakpointDownZip zipRate=" + this.zipRate);
            window["downloadBigFile"](this.zipUrl, this.zipPath, 
            // onprog
            function (total, now, speed) {
                var zipRate = Math.floor((now / total) * 100);
                if (zipRate != _this.zipRate) {
                    gameLaunchLoding.onVersionLoadZip(now, total, speed);
                    _this.zipRate = Math.floor((now / total) * 100);
                }
                return false;
            }, 
            // oncomp
            function (curlret, httpret) {
                if (curlret != 0 || httpret < 200 || httpret >= 300) {
                    //console.error("GameVersion downZip Fail: curlret=" + curlret + ",  httpret=" + httpret + this.zipUrl);
                    // alert("GameVersion downZip Fail: curlret=" + curlret + ",  httpret=" + httpret + "\n" + this.zipUrl);
                    Games.SystemMessag.Instance.alertText(LoadingStateTxt.NetworkState_Error, _this, function () {
                        location.reload();
                        return;
                    });
                    // this.error();
                }
                else {
                    _this.unZip();
                }
            }, 
            // 重复次数
            10, 
            // 超时时间
            100000000);
            console.log("breakpointDownZip end zipRate=" + this.zipRate);
        };
        UpdateResZip.prototype.unZip = function () {
            this.saveFiletable();
            var index = 0;
            var total = 100;
            gameLaunchLoding.onVersionUnZip(0, total);
            var zip = new window["ZipFile"]();
            if (zip.setSrc(this.zipPath)) {
                zip.forEach(function (id, name, dir, sz) {
                    if (!dir) {
                        var buf = zip.readFile(id);
                        var fid = window["appcache"].hashstr('/' + name);
                        if (window["appcache"].updateFile(fid, 0, buf, false)) {
                            console.log("GameVersion appcache updatefile:" + name);
                        }
                        else {
                            // alert("GameVersion appcache updatefile error:" + name);
                            console.log("GameVersion appcache updatefile error:" + name);
                        }
                        gameLaunchLoding.onVersionUnZip(index++, total);
                    }
                });
                zip.close();
                this.complete();
            }
            else {
                console.log('GameVersion set zip src error!');
                Games.SystemMessag.Instance.alertText(LoadingStateTxt.VersionAlertUpdateResFailMsg, this, function () {
                    location.reload();
                    return;
                });
                // this.error();
            }
        };
        /**
         * 更新完成
         */
        UpdateResZip.prototype.complete = function () {
            console.log("GameVersion onComplete " + this.zipUrl);
            if (this.callbacOnComplete) {
                if (this.callbackObj) {
                    this.callbacOnComplete.apply(this.callbackObj);
                }
                else {
                    this.callbacOnComplete();
                }
            }
        };
        UpdateResZip.prototype.error = function () {
            console.log("GameVersion error " + this.zipUrl);
            if (this.callbacOnError) {
                if (this.callbackObj) {
                    this.callbacOnError.apply(this.callbackObj);
                }
                else {
                    this.callbacOnError();
                }
            }
        };
        return UpdateResZip;
    }());
    GameVersions.UpdateResZip = UpdateResZip;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=UpdateResZip.js.map