/**
* name
*/
var frame;
(function (frame) {
    var event;
    (function (event) {
        var HttpChannelEvent = /** @class */ (function () {
            function HttpChannelEvent() {
            }
            HttpChannelEvent.LOGIN_COMPLETE = "HttpChannelEvent_login_complete";
            HttpChannelEvent.DATA_RESPONDS = "HttpChannelEvent_data_reponds";
            HttpChannelEvent.OOB_UPDATE = "HttpChannelEvent_oob_update";
            return HttpChannelEvent;
        }());
        event.HttpChannelEvent = HttpChannelEvent;
    })(event = frame.event || (frame.event = {}));
})(frame || (frame = {}));
//# sourceMappingURL=HttpEvent.js.map