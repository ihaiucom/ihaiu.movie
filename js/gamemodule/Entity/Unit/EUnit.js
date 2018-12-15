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
var Games;
(function (Games) {
    var Event = laya.events.Event;
    /** 单位实现 */
    var EUnit = /** @class */ (function (_super) {
        __extends(EUnit, _super);
        function EUnit() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //单位唯一uid
            _this.uid = 0;
            //单位配置Id
            _this.id = 0;
            //单位显示索引
            _this.displayIndex = -1;
            return _this;
        }
        EUnit.prototype.addComponent = function (component) {
            _super.prototype.addComponent.call(this, component);
            if (component instanceof Games.UnitViewCompoent) {
                this.unitView = component;
            }
            if (component instanceof Games.UnitAnimatorComponent) {
                this.animator = component;
            }
            if (component instanceof Games.UnitMoveComponent) {
                this.move = component;
            }
            if (component instanceof Games.UnitTalkComponent) {
                this.talk = component;
            }
        };
        /**
         * 构建单位
         * @param info
         * @param caller
         * @param complete
         * @param error
         */
        EUnit.prototype.creat = function (info, caller, complete, error) {
            this.uid = info.uid;
            (this.uid == 0) && (this.uid = ++Games.UnitCreator.incrementId);
            info.uid = this.uid;
            this.id = info.id;
            this.unitView.direction = info.direction;
            this.unitData.bounds = new Rectangle(-this.unitData.width / 2, -this.unitData.height, this.unitData.width, this.unitData.height);
            this.unitView.setBounds(this.unitData.bounds);
            this.unitView.hitArea = this.unitData.bounds;
            this.unitView.on(Event.CLICK, this, this.onUnitClick);
            this.animator.play(info.idleName, true);
            this.unitView.loadAnim(info.texturePath, info.skeletonPath, caller, complete, error);
            this.startAnimator();
        };
        /** 显示容器 */
        EUnit.prototype.showOn = function (parent, displayIndex) {
            if (displayIndex === void 0) { displayIndex = -1; }
            if (parent instanceof laya.display.Sprite) {
                this.parent = parent;
            }
            else {
                this.parent = parent.displayObject;
            }
            this.displayIndex = displayIndex;
            this.checkShow();
        };
        EUnit.prototype.checkShow = function () {
            if (this.parent && this.unitView.displayObject) {
                if (this.displayIndex >= 0) {
                    this.parent.addChildAt(this.unitView.displayObject, this.displayIndex);
                }
                else {
                    this.parent.addChild(this.unitView.displayObject);
                }
            }
        };
        /**
         * 启动动画
         */
        EUnit.prototype.startAnimator = function () {
            this.unitView.startAnimator();
        };
        /**
         * 暂停动画
         */
        EUnit.prototype.pauseAnimator = function () {
            this.unitView.pauseAnimator();
        };
        EUnit.prototype.removeHeadIcon = function () {
            this.unitView.removeHeadIcon();
        };
        //点击事件
        EUnit.prototype.onUnitClick = function () {
            // if (this.unitData.roomInfo)
            // 	console.log(this.unitData.info.id + " -- 艺人点击 -- " + this.unitData.roomInfo.type);
            Games.AvatarManager.sAvatarClick.dispatch(this.getEventData());
        };
        //事件参数
        EUnit.prototype.getEventData = function () {
            var eventData = new Games.RoomAvatarData();
            eventData.onEvent = true;
            eventData.performType = this.unitData.performType;
            eventData.avatarUid = this.unitData.info.uid;
            eventData.avatarId = this.unitData.info.id;
            if (this.unitData.roomInfo) {
                eventData.roomId = this.unitData.roomInfo.id;
                eventData.roomType = this.unitData.roomInfo.type;
            }
            if (this.unitData.currAction != null) {
                eventData.eventId = this.unitData.currEventId;
            }
            return eventData;
        };
        return EUnit;
    }(Games.EEntity));
    Games.EUnit = EUnit;
})(Games || (Games = {}));
//# sourceMappingURL=EUnit.js.map