var Games;
(function (Games) {
    var SoundManager = Laya.SoundManager;
    //======================
    // 声音管理器
    //----------------------
    var AudioManager = /** @class */ (function () {
        function AudioManager() {
            this.localUseGlobal = false;
        }
        // 初始化
        AudioManager.prototype.install = function () {
            // this.muted = this.muted;
            // this.soundMuted = this.soundMuted;
            // this.musicMuted = this.musicMuted;
            // this.musicVolume = this.musicVolume;
            // this.soundVolume = this.soundVolume;
        };
        AudioManager.prototype.onLogin = function () {
            this.muted = this.muted;
            this.soundMuted = this.soundMuted;
            this.musicMuted = this.musicMuted;
            this.musicVolume = this.musicVolume;
            this.soundVolume = this.soundVolume;
        };
        /**
         * 播放背景音乐。背景音乐同时只能播放一个，如果在播放背景音乐时再次调用本方法，会先停止之前的背景音乐，再播发当前的背景音乐。
         * @param soundKey	声音Key。
         * @param loops		循环次数,0表示无限循环。
         * @param complete	声音播放完成回调。
         * @param startTime	声音播放起始时间。
         * @return SoundChannel对象，通过此对象可以对声音进行控制，以及获取声音信息。
         */
        AudioManager.prototype.playMusic = function (soundKey, loops, complete, startTime) {
            // if (BrowserDetect.isMobile)
            // 	return;
            this.lastMusic = soundKey;
            if (this.musicMuted) {
                return;
            }
            var path = SoundKey.getPath(soundKey);
            SoundManager.stopMusic();
            return SoundManager.playMusic(path, loops, complete, startTime);
        };
        /**
         * 重新播放背景音乐
         */
        AudioManager.prototype.replayMusic = function () {
            if (this.lastMusic) {
                this.playMusic(this.lastMusic);
            }
            else {
                this.playMusic(SoundKey.MM_BGM_Cinema);
            }
        };
        /**
         * 播放音效。音效可以同时播放多个。
         * @param url			声音文件地址。
         * @param isStopPreSound 是否停止其它声音
         * @param loops			循环次数,0表示无限循环。
         * @param complete		声音播放完成回调  Handler对象。
         * @param soundClass	使用哪个声音类进行播放，null表示自动选择。
         * @param startTime		声音播放起始时间。
         * @return SoundChannel对象，通过此对象可以对声音进行控制，以及获取声音信息。
         */
        AudioManager.prototype.playSound = function (soundKey, isStopPreSound, loops, complete, startTime) {
            if (isStopPreSound) {
                this.stopAllSound();
            }
            var path = SoundKey.getPath(soundKey);
            return SoundManager.playSound(path, loops, complete, startTime);
        };
        /**
         * 停止声音播放。此方法能够停止任意声音的播放（包括背景音乐和音效），只需传入对应的声音播放地址。
         * @param url  声音文件地址。
         */
        AudioManager.prototype.stopSound = function (soundKey) {
            var path = SoundKey.getPath(soundKey);
            SoundManager.stopSound(path);
        };
        /**
         * 停止播放所有声音（包括背景音乐和音效）。
         */
        AudioManager.prototype.stopAll = function () {
            SoundManager.stopAll();
        };
        /**
         * 停止播放所有音效（不包括背景音乐）。
         */
        AudioManager.prototype.stopAllSound = function () {
            SoundManager.stopAllSound();
        };
        /**
         * 停止播放背景音乐（不包括音效）。
         * @param url  声音文件地址。
         */
        AudioManager.prototype.stopMusic = function () {
            SoundManager.stopMusic();
        };
        Object.defineProperty(AudioManager.prototype, "muted", {
            get: function () {
                if (this._muted === undefined) {
                    this._muted = Game.localStorage.hasItem("sound_muted", this.localUseGlobal) ? Game.localStorage.getBoolean("sound_muted", this.localUseGlobal) : false;
                }
                return this._muted;
            },
            set: function (value) {
                this._muted = value;
                Game.localStorage.setBoolean("sound_muted", value, this.localUseGlobal);
                SoundManager.muted = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioManager.prototype, "soundMuted", {
            get: function () {
                if (this._soundMuted === undefined) {
                    this._soundMuted = Game.localStorage.hasItem("sound_soundMuted", this.localUseGlobal) ? Game.localStorage.getBoolean("sound_soundMuted", this.localUseGlobal) : false;
                }
                return this._soundMuted;
            },
            set: function (value) {
                this._soundMuted = value;
                Game.localStorage.setBoolean("sound_soundMuted", value, this.localUseGlobal);
                SoundManager.soundMuted = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioManager.prototype, "musicMuted", {
            get: function () {
                if (this._musicMuted === undefined) {
                    this._musicMuted = Game.localStorage.hasItem("sound_musicMuted", this.localUseGlobal) ? Game.localStorage.getBoolean("sound_musicMuted", this.localUseGlobal) : false;
                }
                return this._musicMuted;
            },
            set: function (value) {
                this._musicMuted = value;
                Game.localStorage.setBoolean("sound_musicMuted", value, this.localUseGlobal);
                SoundManager.musicMuted = value;
                if (value) {
                    SoundManager.stopMusic();
                }
                else {
                    this.replayMusic();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioManager.prototype, "musicVolume", {
            get: function () {
                if (this._musicVolume === undefined) {
                    this._musicVolume = Game.localStorage.hasItem("sound_musicVolume", this.localUseGlobal) ? Game.localStorage.getFloat("sound_musicVolume", this.localUseGlobal) : 1;
                }
                return this._musicVolume;
            },
            set: function (value) {
                this._musicVolume = value;
                Game.localStorage.setFloat("sound_musicVolume", value, this.localUseGlobal);
                SoundManager.musicVolume = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AudioManager.prototype, "soundVolume", {
            get: function () {
                if (this._soundVolume === undefined) {
                    this._soundVolume = Game.localStorage.hasItem("sound_soundVolume", this.localUseGlobal) ? Game.localStorage.getFloat("sound_soundVolume", this.localUseGlobal) : 1;
                }
                return this._soundVolume;
            },
            set: function (value) {
                this._soundVolume = value;
                Game.localStorage.setFloat("sound_soundVolume", value, this.localUseGlobal);
                SoundManager.soundVolume = value;
            },
            enumerable: true,
            configurable: true
        });
        return AudioManager;
    }());
    Games.AudioManager = AudioManager;
})(Games || (Games = {}));
//# sourceMappingURL=AudioManager.js.map