var Games;
(function (Games) {
    var MeetingResultType;
    (function (MeetingResultType) {
        MeetingResultType[MeetingResultType["Win"] = 1] = "Win";
        MeetingResultType[MeetingResultType["Draw"] = 2] = "Draw";
        MeetingResultType[MeetingResultType["FailHalf"] = 3] = "FailHalf";
        MeetingResultType[MeetingResultType["FailAll"] = 4] = "FailAll";
    })(MeetingResultType = Games.MeetingResultType || (Games.MeetingResultType = {}));
    var MeetingRewardType;
    (function (MeetingRewardType) {
        MeetingRewardType[MeetingRewardType["Receive"] = 0] = "Receive";
        MeetingRewardType[MeetingRewardType["Refuse"] = 1] = "Refuse"; //拒绝
    })(MeetingRewardType = Games.MeetingRewardType || (Games.MeetingRewardType = {}));
    var MeetingMarkUpType;
    (function (MeetingMarkUpType) {
        MeetingMarkUpType[MeetingMarkUpType["Half"] = 1] = "Half";
        MeetingMarkUpType[MeetingMarkUpType["Double"] = 2] = "Double"; //两倍
    })(MeetingMarkUpType = Games.MeetingMarkUpType || (Games.MeetingMarkUpType = {}));
    var MeetingPanelType;
    (function (MeetingPanelType) {
        MeetingPanelType[MeetingPanelType["None"] = 0] = "None";
        MeetingPanelType[MeetingPanelType["Start"] = 1] = "Start";
        MeetingPanelType[MeetingPanelType["AskPirce"] = 2] = "AskPirce";
        MeetingPanelType[MeetingPanelType["Game"] = 3] = "Game";
        MeetingPanelType[MeetingPanelType["Result"] = 4] = "Result";
    })(MeetingPanelType = Games.MeetingPanelType || (Games.MeetingPanelType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=MeetingPanelType.js.map