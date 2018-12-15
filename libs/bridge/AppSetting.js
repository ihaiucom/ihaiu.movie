(function ()
{
	if (window.AppSetting)
	{
		return;
	}

	var AppSetting = window.AppSetting = {
		url: "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/android/web/index.html",
		appId: "com.shinezone.movie.test",
		enableVersion: false,
		isDebug: true,
		isCrosswalk: false,
		IDFA: "",
		IDFV: "",
		AppVersionName: "",
		SystemLang: "en"
	};
})();