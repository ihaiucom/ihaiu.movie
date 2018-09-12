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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var fx;
    (function (fx) {
        var dajian_01UI = /** @class */ (function (_super) {
            __extends(dajian_01UI, _super);
            function dajian_01UI() {
                return _super.call(this) || this;
            }
            dajian_01UI.prototype.createChildren = function () {
                View.regComponent("Particle2D", laya.particle.Particle2D);
                _super.prototype.createChildren.call(this);
                this.createView(ui.fx.dajian_01UI.uiView);
            };
            dajian_01UI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Particle2D", "props": { "y": 82, "x": 164, "width": 1, "url": "Yun_01.part", "height": 1 } }, { "type": "Particle2D", "props": { "y": 82, "x": 164, "width": 1, "url": "ChuiZi_01.part", "height": 1 } }] };
            return dajian_01UI;
        }(View));
        fx.dajian_01UI = dajian_01UI;
    })(fx = ui.fx || (ui.fx = {}));
})(ui || (ui = {}));
(function (ui) {
    var fx;
    (function (fx) {
        var Effect_gain_itemUI = /** @class */ (function (_super) {
            __extends(Effect_gain_itemUI, _super);
            function Effect_gain_itemUI() {
                return _super.call(this) || this;
            }
            Effect_gain_itemUI.prototype.createChildren = function () {
                View.regComponent("Particle2D", laya.particle.Particle2D);
                _super.prototype.createChildren.call(this);
                this.createView(ui.fx.Effect_gain_itemUI.uiView);
            };
            Effect_gain_itemUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "skin": "beijing_01/图层957拷贝3(2).png" } }, { "type": "Particle2D", "props": { "y": 475, "x": 360, "width": 77, "url": "Effect_gain_item_f1_1.part", "scaleY": 5, "scaleX": 5, "height": 65 } }, { "type": "Particle2D", "props": { "y": 475, "x": 360, "width": 63, "url": "Effect_gain_item_f1_2.part", "scaleY": 5, "scaleX": 5, "height": 50 } }, { "type": "Particle2D", "props": { "y": 475, "x": 336, "width": 82, "url": "Effect_gain_item_f2.part", "scaleY": 4.5, "scaleX": 4.5, "height": 64 } }, { "type": "Particle2D", "props": { "y": 475, "x": 360, "url": "Effect_gain_item_x1.part" } }, { "type": "Particle2D", "props": { "y": 475, "x": 360, "url": "Effect_gain_item_x2.part" } }, { "type": "Particle2D", "props": { "y": 475, "x": 360, "url": "Effect_gain_item_y1.part" } }, { "type": "Image", "props": { "y": 218, "x": 8, "skin": "beijing_01/light_layer1_congrats.png" } }, { "type": "Image", "props": { "y": 415, "x": 111, "skin": "beijing_01/bg_title_congrats.png" } }, { "type": "Image", "props": { "y": 429, "x": 154, "skin": "beijing_01/font_congrats.png" } }, { "type": "Particle2D", "props": { "y": 1096, "x": 508, "url": "Effect_jiantou_01.part" } }, { "type": "Particle2D", "props": { "y": 470, "x": 350, "width": 77, "url": "Effect_MovieTarget_Success_f1.part", "scaleY": 5, "scaleX": 5, "height": 65 } }, { "type": "Particle2D", "props": { "y": 470, "x": 350, "width": 77, "url": "Effect_MovieTarget_Success_f2.part", "scaleY": 5, "scaleX": 5, "height": 65 } }, { "type": "Particle2D", "props": { "y": 472, "x": 345, "width": 77, "url": "Effect_MovieTarget_Success_f3.part", "scaleY": 5, "scaleX": 5, "height": 65 } }] };
            return Effect_gain_itemUI;
        }(View));
        fx.Effect_gain_itemUI = Effect_gain_itemUI;
    })(fx = ui.fx || (ui.fx = {}));
})(ui || (ui = {}));
(function (ui) {
    var fx;
    (function (fx) {
        var Effect_produce_01UI = /** @class */ (function (_super) {
            __extends(Effect_produce_01UI, _super);
            function Effect_produce_01UI() {
                return _super.call(this) || this;
            }
            Effect_produce_01UI.prototype.createChildren = function () {
                View.regComponent("Particle2D", laya.particle.Particle2D);
                _super.prototype.createChildren.call(this);
                this.createView(ui.fx.Effect_produce_01UI.uiView);
            };
            Effect_produce_01UI.uiView = { "type": "View", "props": { "width": 256, "height": 256 }, "child": [{ "type": "Particle2D", "props": { "y": 160, "x": 128, "url": "Effect_produce_01_1.part" } }, { "type": "Image", "props": { "y": 137, "x": 66, "width": 128, "skin": "ShockWave_01.png", "height": 64 } }, { "type": "Image", "props": { "y": 88, "x": 92, "skin": "beijing_01/icon_shejitu.png" } }, { "type": "Particle2D", "props": { "y": 128, "x": 128, "width": 1, "url": "Effect_produce_01.part", "height": 1 } }, { "type": "Particle2D", "props": { "y": 136, "x": 126, "url": "Effect_produce_02.part" } }, { "type": "Image", "props": { "y": 86, "x": 82, "skin": "beijing_01/zb18.png" } }] };
            return Effect_produce_01UI;
        }(View));
        fx.Effect_produce_01UI = Effect_produce_01UI;
    })(fx = ui.fx || (ui.fx = {}));
})(ui || (ui = {}));
(function (ui) {
    var fx;
    (function (fx) {
        var Effect_story_01UI = /** @class */ (function (_super) {
            __extends(Effect_story_01UI, _super);
            function Effect_story_01UI() {
                return _super.call(this) || this;
            }
            Effect_story_01UI.prototype.createChildren = function () {
                View.regComponent("Particle2D", laya.particle.Particle2D);
                _super.prototype.createChildren.call(this);
                this.createView(ui.fx.Effect_story_01UI.uiView);
            };
            Effect_story_01UI.uiView = { "type": "View", "props": { "width": 512, "height": 512 }, "child": [{ "type": "Image", "props": { "y": 296, "x": 133, "skin": "jbk_souluoxiangzi.png" } }, { "type": "Particle2D", "props": { "y": 295, "x": 253, "url": "Effect_story_02.part" } }, { "type": "Particle2D", "props": { "y": 310, "x": 259, "width": 84, "url": "Effect_story_03.part", "height": 70 } }, { "type": "Particle2D", "props": { "y": 304, "x": 249, "url": "Effect_story_04.part" } }, { "type": "Particle2D", "props": { "y": 302, "x": 261, "url": "Effect_story_05.part" } }, { "type": "Particle2D", "props": { "y": 320, "x": 253, "url": "Effect_story_01.part" } }, { "type": "Particle2D", "props": { "y": 275, "x": 252, "url": "fangsheguang_01.part" } }] };
            return Effect_story_01UI;
        }(View));
        fx.Effect_story_01UI = Effect_story_01UI;
    })(fx = ui.fx || (ui.fx = {}));
})(ui || (ui = {}));
(function (ui) {
    var fx;
    (function (fx) {
        var Effect_upgrade_01UI = /** @class */ (function (_super) {
            __extends(Effect_upgrade_01UI, _super);
            function Effect_upgrade_01UI() {
                return _super.call(this) || this;
            }
            Effect_upgrade_01UI.prototype.createChildren = function () {
                View.regComponent("Particle2D", laya.particle.Particle2D);
                _super.prototype.createChildren.call(this);
                this.createView(ui.fx.Effect_upgrade_01UI.uiView);
            };
            Effect_upgrade_01UI.uiView = { "type": "View", "props": { "width": 127, "height": 197 }, "child": [{ "type": "Image", "props": { "skin": "beijing_01/jq_xiaoyun.png" } }, { "type": "Particle2D", "props": { "y": 156, "x": 50, "width": 100, "url": "Effect_upgrade_01.part", "height": 63 } }, { "type": "Particle2D", "props": { "y": 157, "x": 58, "url": "Effect_upgrade_02.part" } }] };
            return Effect_upgrade_01UI;
        }(View));
        fx.Effect_upgrade_01UI = Effect_upgrade_01UI;
    })(fx = ui.fx || (ui.fx = {}));
})(ui || (ui = {}));
(function (ui) {
    var fx;
    (function (fx) {
        var JinBiUI = /** @class */ (function (_super) {
            __extends(JinBiUI, _super);
            function JinBiUI() {
                return _super.call(this) || this;
            }
            JinBiUI.prototype.createChildren = function () {
                View.regComponent("Particle2D", laya.particle.Particle2D);
                _super.prototype.createChildren.call(this);
                this.createView(ui.fx.JinBiUI.uiView);
            };
            JinBiUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 78, "x": 135, "width": 145, "skin": "true01.png", "pivotY": 63, "pivotX": 64, "height": 137 } }, { "type": "Image", "props": { "y": 79, "x": 219, "width": 150, "skin": "true01.png", "pivotY": 63, "pivotX": 64, "height": 136 } }, { "type": "Image", "props": { "y": 86, "x": 193, "width": 106, "skin": "true01.png", "pivotY": 63, "pivotX": 64, "height": 133 } }, { "type": "Image", "props": { "y": 71, "x": 150, "width": 85, "skin": "钱袋01.png", "height": 76 } }, { "type": "Image", "props": { "y": 56, "x": 90, "width": 102, "skin": "钱袋01.png", "height": 93 } }, { "type": "Image", "props": { "y": 59, "x": 185, "width": 102, "skin": "钱袋01.png", "height": 86 } }, { "type": "Particle2D", "props": { "y": 35, "x": 200, "width": 1, "url": "jinbi_02.part", "height": 1 } }, { "type": "Particle2D", "props": { "y": 121, "x": 190, "width": 1, "url": "ShanGuang_01.part", "height": 1 } }] };
            return JinBiUI;
        }(View));
        fx.JinBiUI = JinBiUI;
    })(fx = ui.fx || (ui.fx = {}));
})(ui || (ui = {}));
(function (ui) {
    var fx;
    (function (fx) {
        var lihua_01UI = /** @class */ (function (_super) {
            __extends(lihua_01UI, _super);
            function lihua_01UI() {
                return _super.call(this) || this;
            }
            lihua_01UI.prototype.createChildren = function () {
                View.regComponent("Particle2D", laya.particle.Particle2D);
                _super.prototype.createChildren.call(this);
                this.createView(ui.fx.lihua_01UI.uiView);
            };
            lihua_01UI.uiView = { "type": "View", "props": { "width": 506, "height": 900 }, "child": [{ "type": "Image", "props": { "skin": "beijing_01/commer_chatu.png" } }, { "type": "Image", "props": { "y": 225, "x": 75, "skin": "beijing_01/sc_jianglimianban.png" } }, { "type": "Image", "props": { "y": 271, "x": 246, "width": 256, "skin": "彩带-01.png", "pivotY": 128, "pivotX": 128, "height": 256 } }, { "type": "Particle2D", "props": { "y": 273, "x": 252, "url": "Effect_propagate_01.part" } }, { "type": "Particle2D", "props": { "y": 273, "x": 252, "url": "Effect_propagate_02.part" } }, { "type": "Particle2D", "props": { "y": 273, "x": 252, "url": "Effect_propagate_03.part" } }, { "type": "Particle2D", "props": { "y": 273, "x": 252, "url": "Effect_propagate_04.part" } }, { "type": "Particle2D", "props": { "y": -6, "x": 252, "width": 258, "url": "Effect_search_01.part", "height": 100 } }] };
            return lihua_01UI;
        }(View));
        fx.lihua_01UI = lihua_01UI;
    })(fx = ui.fx || (ui.fx = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map