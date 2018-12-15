/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
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
var configs;
(function (configs) {
    var DTActorCharacterStruct = /** @class */ (function (_super) {
        __extends(DTActorCharacterStruct, _super);
        function DTActorCharacterStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTActorCharacterStruct.parse = function (txt) {
            var csv = toStringArray(txt);
            var config = new configs.DTActorCharacter();
            config.character = csvGetInt(csv, 0);
            config.lv = csvGetInt(csv, 1);
            config.property = csvGetInt(csv, 2);
            return config;
        };
        DTActorCharacterStruct.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                list.push(configs.DTActorCharacter.parse(csv[i]));
            }
            return list;
        };
        return DTActorCharacterStruct;
    }(configs.BaseConfig));
    configs.DTActorCharacterStruct = DTActorCharacterStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DTActorCharacterStruct.js.map