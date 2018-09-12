/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var SoundKey = /** @class */ (function () {
    function SoundKey() {
    }
    Object.defineProperty(SoundKey, "idDict", {
        get: function () {
            if (!SoundKey._idDict) {
                SoundKey.init();
            }
            return SoundKey._idDict;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundKey, "extDict", {
        get: function () {
            if (!SoundKey._extDict) {
                SoundKey.init();
            }
            return SoundKey._extDict;
        },
        enumerable: true,
        configurable: true
    });
    SoundKey.getId = function (key) {
        if (!SoundKey.idDict.hasKey(key)) {
            console.error("SoundKey 不存在 key=" + key);
            return "";
        }
        return SoundKey.idDict.getValue(key);
    };
    SoundKey.getUrl = function (key) {
        return "ui://" + SoundKey.SoundPackageId + SoundKey.getId(key);
    };
    SoundKey.getPath = function (key) {
        return Games.GuiSetting.getResPath(SoundKey.SoundPackageName + "@" + SoundKey.getId(key) + SoundKey.extDict.getValue(key), "fgui");
    };
    SoundKey.init = function () {
        var dict = SoundKey._idDict = new Dictionary();
        dict.add("MM_BGM_Cinema.mp3", "s3xz1n");
        dict.add("MM_BGM_Propaganda.mp3", "s3xz1o");
        dict.add("MM_BGM_RoadShow.mp3", "s3xz1p");
        dict.add("MM01_Button.wav", "s3xz1q");
        dict.add("MM02_Popup.wav", "s3xz1r");
        dict.add("MM03_ReachGoal.wav", "s3xz1s");
        dict.add("MM04_Lose.wav", "s3xz1t");
        dict.add("MM05_Upgrade.wav", "s3xz1u");
        dict.add("MM06_Building.wav", "s3xz1v");
        dict.add("MM07_GoldMuch.wav", "s3xz1w");
        dict.add("MM08_GoldLess.wav", "s3xz1x");
        dict.add("MM09_GoldReward.wav", "s3xz1y");
        dict.add("MM10_PayMent.wav", "s3xz1z");
        dict.add("MM11_NewsPaperTop.wav", "s3xz20");
        dict.add("MM12_RecruitArtist.wav", "s3xz21");
        dict.add("MM13_GetArtist.wav", "s3xz22");
        dict.add("MM14_ArtistGradeUp.wav", "s3xz23");
        dict.add("MM15_Propaganda.wav", "s3xz24");
        dict.add("MM16_ScriptRolling.wav", "s3xz25");
        dict.add("MM17_Action.wav", "s3xz26");
        dict.add("MM18_Screen.wav", "s3xz27");
        dict.add("MM19_ArtistShow.wav", "s3xz28");
        dict.add("MM20_ArtistData.wav", "s3xz29");
        dict.add("MM21_ArtistAccord.wav", "s3xz2a");
        dict.add("MM22_ScreenOver.wav", "s3xz2b");
        dict.add("MM23_Premiere.wav", "s3xz2c");
        dict.add("MM24_NiceScore1.wav", "s3xz2d");
        dict.add("MM25_NiceScore2.wav", "s3xz2e");
        dict.add("MM26_DialogBox.wav", "s3xz2f");
        dict.add("MM27_TicketStatistics.wav", "s3xz2g");
        dict.add("MM27_TicketsOrdinary.wav", "8z3l2h");
        dict.add("MM28_TicketsGood.wav", "8z3l2i");
        dict.add("MM29_TicketsGreat.wav", "8z3l2j");
        dict.add("MM30_Settlements.wav", "8z3l2k");
        dict.add("MM31_ClickScreenMenu.wav", "8z3l2l");
        dict.add("MM32_FilmStart.wav", "8z3l2m");
        dict.add("MM33_FilmShow.wav", "8z3l2n");
        dict.add("MM26_NiceScore3.wav", "q9mu2o");
        dict.add("MM33_NiceScore4.wav", "q9mu2p");
        dict.add("MM17_FoundArtist.wav", "o3172q");
        dict.add("MM32_GetScript .wav", "o3172r");
        dict.add("MM34_CultrueArtist.wav", "o3172s");
        var exts = SoundKey._extDict = new Dictionary();
        exts.add("MM_BGM_Cinema.mp3", ".mp3");
        exts.add("MM_BGM_Propaganda.mp3", ".mp3");
        exts.add("MM_BGM_RoadShow.mp3", ".mp3");
        exts.add("MM01_Button.wav", ".wav");
        exts.add("MM02_Popup.wav", ".wav");
        exts.add("MM03_ReachGoal.wav", ".wav");
        exts.add("MM04_Lose.wav", ".wav");
        exts.add("MM05_Upgrade.wav", ".wav");
        exts.add("MM06_Building.wav", ".wav");
        exts.add("MM07_GoldMuch.wav", ".wav");
        exts.add("MM08_GoldLess.wav", ".wav");
        exts.add("MM09_GoldReward.wav", ".wav");
        exts.add("MM10_PayMent.wav", ".wav");
        exts.add("MM11_NewsPaperTop.wav", ".wav");
        exts.add("MM12_RecruitArtist.wav", ".wav");
        exts.add("MM13_GetArtist.wav", ".wav");
        exts.add("MM14_ArtistGradeUp.wav", ".wav");
        exts.add("MM15_Propaganda.wav", ".wav");
        exts.add("MM16_ScriptRolling.wav", ".wav");
        exts.add("MM17_Action.wav", ".wav");
        exts.add("MM18_Screen.wav", ".wav");
        exts.add("MM19_ArtistShow.wav", ".wav");
        exts.add("MM20_ArtistData.wav", ".wav");
        exts.add("MM21_ArtistAccord.wav", ".wav");
        exts.add("MM22_ScreenOver.wav", ".wav");
        exts.add("MM23_Premiere.wav", ".wav");
        exts.add("MM24_NiceScore1.wav", ".wav");
        exts.add("MM25_NiceScore2.wav", ".wav");
        exts.add("MM26_DialogBox.wav", ".wav");
        exts.add("MM27_TicketStatistics.wav", ".wav");
        exts.add("MM27_TicketsOrdinary.wav", ".wav");
        exts.add("MM28_TicketsGood.wav", ".wav");
        exts.add("MM29_TicketsGreat.wav", ".wav");
        exts.add("MM30_Settlements.wav", ".wav");
        exts.add("MM31_ClickScreenMenu.wav", ".wav");
        exts.add("MM32_FilmStart.wav", ".wav");
        exts.add("MM33_FilmShow.wav", ".wav");
        exts.add("MM26_NiceScore3.wav", ".wav");
        exts.add("MM33_NiceScore4.wav", ".wav");
        exts.add("MM17_FoundArtist.wav", ".wav");
        exts.add("MM32_GetScript .wav", ".wav");
        exts.add("MM34_CultrueArtist.wav", ".wav");
    };
    SoundKey.SoundPackageName = "Sound";
    SoundKey.SoundPackageId = "44whq70o";
    SoundKey.MM_BGM_Cinema = "MM_BGM_Cinema.mp3";
    SoundKey.MM_BGM_Propaganda = "MM_BGM_Propaganda.mp3";
    SoundKey.MM_BGM_RoadShow = "MM_BGM_RoadShow.mp3";
    SoundKey.MM01_Button = "MM01_Button.wav";
    SoundKey.MM02_Popup = "MM02_Popup.wav";
    SoundKey.MM03_ReachGoal = "MM03_ReachGoal.wav";
    SoundKey.MM04_Lose = "MM04_Lose.wav";
    SoundKey.MM05_Upgrade = "MM05_Upgrade.wav";
    SoundKey.MM06_Building = "MM06_Building.wav";
    SoundKey.MM07_GoldMuch = "MM07_GoldMuch.wav";
    SoundKey.MM08_GoldLess = "MM08_GoldLess.wav";
    SoundKey.MM09_GoldReward = "MM09_GoldReward.wav";
    SoundKey.MM10_PayMent = "MM10_PayMent.wav";
    SoundKey.MM11_NewsPaperTop = "MM11_NewsPaperTop.wav";
    SoundKey.MM12_RecruitArtist = "MM12_RecruitArtist.wav";
    SoundKey.MM13_GetArtist = "MM13_GetArtist.wav";
    SoundKey.MM14_ArtistGradeUp = "MM14_ArtistGradeUp.wav";
    SoundKey.MM15_Propaganda = "MM15_Propaganda.wav";
    SoundKey.MM16_ScriptRolling = "MM16_ScriptRolling.wav";
    SoundKey.MM17_Action = "MM17_Action.wav";
    SoundKey.MM18_Screen = "MM18_Screen.wav";
    SoundKey.MM19_ArtistShow = "MM19_ArtistShow.wav";
    SoundKey.MM20_ArtistData = "MM20_ArtistData.wav";
    SoundKey.MM21_ArtistAccord = "MM21_ArtistAccord.wav";
    SoundKey.MM22_ScreenOver = "MM22_ScreenOver.wav";
    SoundKey.MM23_Premiere = "MM23_Premiere.wav";
    SoundKey.MM24_NiceScore1 = "MM24_NiceScore1.wav";
    SoundKey.MM25_NiceScore2 = "MM25_NiceScore2.wav";
    SoundKey.MM26_DialogBox = "MM26_DialogBox.wav";
    SoundKey.MM27_TicketStatistics = "MM27_TicketStatistics.wav";
    SoundKey.MM27_TicketsOrdinary = "MM27_TicketsOrdinary.wav";
    SoundKey.MM28_TicketsGood = "MM28_TicketsGood.wav";
    SoundKey.MM29_TicketsGreat = "MM29_TicketsGreat.wav";
    SoundKey.MM30_Settlements = "MM30_Settlements.wav";
    SoundKey.MM31_ClickScreenMenu = "MM31_ClickScreenMenu.wav";
    SoundKey.MM32_FilmStart = "MM32_FilmStart.wav";
    SoundKey.MM33_FilmShow = "MM33_FilmShow.wav";
    SoundKey.MM26_NiceScore3 = "MM26_NiceScore3.wav";
    SoundKey.MM33_NiceScore4 = "MM33_NiceScore4.wav";
    SoundKey.MM17_FoundArtist = "MM17_FoundArtist.wav";
    SoundKey.MM32_GetScript = "MM32_GetScript .wav";
    SoundKey.MM34_CultrueArtist = "MM34_CultrueArtist.wav";
    return SoundKey;
}());
//# sourceMappingURL=SoundKey.js.map