// /*------------------------------------------------------------ */
// namespace ZFTests
// {
// 	import Stage = Laya.Stage;
// 	import Component = Laya.Component;
// 	import List = Laya.List;
// 	import Button = Laya.Button;
// 	import Handler = Laya.Handler;
// 	import WebGL = Laya.WebGL;
// 	import Event = Laya.Event;
// 	import Skeleton = Laya.Skeleton;
// 	import Templet = Laya.Templet;
// 	import Browser = Laya.Browser;
// 	import Stat = Laya.Stat;
// 	export class MenuButtons
// 	{
// 		static MainMenu = "返回主菜单";
// 		static LoadResList = "加载资源列表";
// 		static AddPackageFgui = "AddPackage Fgui";
// 		static AddPackageFsprite = "AddPackage Fsprite";
// 		static BindFgui = "Bind Fgui";
// 		static SpineSK = "SpineSK";
// 		static List: string[] = [
// 			MenuButtons.MainMenu,
// 			MenuButtons.LoadResList,
// 			MenuButtons.AddPackageFgui,
// 			MenuButtons.AddPackageFsprite,
// 			MenuButtons.BindFgui,
// 			MenuButtons.SpineSK
// 		];
// 	}
// 	export class ButtonListItem extends Button
// 	{
// 		public static WID: number = 500;
// 		public static HEI: number = 80;
// 		constructor()
// 		{
// 			super();
// 			this.labelSize = 30;
// 			this.labelAlign = "left";
// 			this.width = ButtonListItem.WID;
// 			this.height = ButtonListItem.HEI;
// 		}
// 	}
// 	export class ButtonList extends Component
// 	{
// 		menu: string;
// 		testMemory: TestMemory;
// 		list: List;
// 		listData: any[];
// 		constructor(menu: string, testMemory: TestMemory)
// 		{
// 			super();
// 			this.menu = menu;
// 			this.testMemory = testMemory;
// 		}
// 		createButtonList(): List
// 		{
// 			var list: List = new List();
// 			list.itemRender = ButtonListItem;
// 			list.repeatX = 1;
// 			list.repeatY = 10;
// 			list.x = (Laya.stage.width - ButtonListItem.WID) / 2;
// 			list.y = (Laya.stage.height - ButtonListItem.HEI * list.repeatY) / 2;
// 			// 使用但隐藏滚动条
// 			list.vScrollBarSkin = "";
// 			list.selectEnable = true;
// 			list.selectHandler = new Handler(this, this.onSelect);
// 			list.renderHandler = new Handler(this, this.updateItem);
// 			this.addChild(list);
// 			this.list = list;
// 			list.array = this.listData;
// 			return list;
// 		}
// 		protected updateItem(cell: ButtonListItem, index: number): void
// 		{
// 			cell.label = cell.dataSource;
// 		}
// 		protected onSelect(index: number): void
// 		{
// 		}
// 		unitM = 1024 * 1024;
// 		protected get currentMemorySize(): string
// 		{
// 			let val = laya.utils.Stat.currentMemorySize;
// 			if (laya.utils.Stat.currentMemorySize > this.unitM)
// 			{
// 				return Math.floor(val / this.unitM * 100) / 100 + " M";
// 			}
// 			else
// 			{
// 				return Math.floor(val / 1024 * 100) / 100 + " K";
// 			}
// 		}
// 		private static preMemorySize: number = 0;
// 		protected get currentSubMemorySize(): number
// 		{
// 			let sub = ButtonList.preMemorySize - laya.utils.Stat.currentMemorySize;
// 			ButtonList.preMemorySize = laya.utils.Stat.currentMemorySize;
// 			return sub;
// 		}
// 		public static initPreMemorySize()
// 		{
// 			ButtonList.preMemorySize = laya.utils.Stat.currentMemorySize;
// 		}
// 	}
// 	export class MenuButtonList extends ButtonList
// 	{
// 		constructor(menu: string, testMemory: TestMemory)
// 		{
// 			super(menu, testMemory);
// 			this.listData = MenuButtons.List;
// 			this.createButtonList();
// 		}
// 		protected onSelect(index: number): void
// 		{
// 			let button = this.listData[index];
// 			this.testMemory.openTab(button);
// 		}
// 	}
// 	export class ResListView extends ButtonList
// 	{
// 		constructor(menu: string, testMemory: TestMemory, list: any[])
// 		{
// 			super(menu, testMemory);
// 			this.listData = list;
// 			this.createButtonList();
// 		}
// 		protected updateItem(cell: ButtonListItem, index: number): void
// 		{
// 			if (index < this.listData.length)
// 			{
// 				let name: string = this.listData[index]["path"];
// 				let arr = name.split('/');
// 				name = arr[arr.length - 1].replace("@", "--");
// 				cell.label = name;
// 			}
// 		}
// 		protected onSelect(index: number): void
// 		{
// 			if (index < this.listData.length)
// 			{
// 				let path = "res" + this.listData[index]["path"];
// 				let arr = path.split(".");
// 				let ext = arr[arr.length - 1];
// 				let type = ext == "bin" ? Laya.Loader.BUFFER : Laya.Loader.IMAGE;
// 				console.log("BeginLoad: " + path);
// 				Laya.loader.load(path, Handler.create(this, this.onLoadItem, [path]), null, type);
// 			}
// 		}
// 		protected onLoadItem(path: string)
// 		{
// 			console.log("onLoadItem: " + path + ", currentMemorySize:" + this.currentMemorySize + "  " + this.currentSubMemorySize);
// 		}
// 	}
// 	export class LoadAllResListView extends ButtonList
// 	{
// 		constructor(menu: string, testMemory: TestMemory, list: any[])
// 		{
// 			super(menu, testMemory);
// 			this.listData = list;
// 			this.createButtonList();
// 		}
// 		protected updateItem(cell: ButtonListItem, index: number): void
// 		{
// 			if (index < this.listData.length)
// 			{
// 				cell.label = this.listData[index];
// 			}
// 		}
// 		protected onSelect(index: number): void
// 		{
// 			if (index < this.listData.length)
// 			{
// 				let path = this.listData[index];
// 				let list = this.testMemory.getResList(path);
// 				for (let i = 0; i < list.length; i++)
// 				{
// 					let itemPath = "res" + list[i]["path"]
// 					console.log("BeginLoad: " + itemPath);
// 					let arr = itemPath.split(".");
// 					let ext = arr[arr.length - 1];
// 					let type = ext == "bin" ? Laya.Loader.BUFFER : Laya.Loader.IMAGE;
// 					Laya.loader.load(itemPath, Handler.create(this, this.onLoadItem, [itemPath]), null, type);
// 				}
// 			}
// 		}
// 		protected onLoadItem(path: string)
// 		{
// 			console.log("onLoadItem: " + path + ", currentMemorySize:" + this.currentMemorySize + "  " + this.currentSubMemorySize);
// 		}
// 	}
// 	export class AddPackageListView extends ButtonList
// 	{
// 		constructor(menu: string, testMemory: TestMemory, list: any[])
// 		{
// 			super(menu, testMemory);
// 			this.listData = list;
// 			this.createButtonList();
// 		}
// 		protected updateItem(cell: ButtonListItem, index: number): void
// 		{
// 			if (index < this.listData.length)
// 			{
// 				cell.label = this.listData[index]["path"];
// 			}
// 		}
// 		protected onSelect(index: number): void
// 		{
// 			if (index < this.listData.length)
// 			{
// 				let pack = this.listData[index]["path"];
// 				pack = "res" + pack.replace(".bin", "");
// 				Games.GuiSetting.addPackage(pack);
// 			}
// 		}
// 	}
// 	export class BindListView extends ButtonList
// 	{
// 		constructor(menu: string, testMemory: TestMemory, list: any[])
// 		{
// 			super(menu, testMemory);
// 			this.listData = list;
// 			this.createButtonList();
// 		}
// 		protected updateItem(cell: ButtonListItem, index: number): void
// 		{
// 			if (index < this.listData.length)
// 			{
// 				cell.label = this.listData[index]["path"];
// 			}
// 		}
// 		protected onSelect(index: number): void
// 		{
// 			if (index < this.listData.length)
// 			{
// 				let pack = this.listData[index]["path"].replace(".bin", "");
// 				let arr = pack.split('/');
// 				let name = arr[arr.length - 1];
// 				if (fgui[name] && fgui[name][name + "Binder"])
// 					fgui[name][name + "Binder"]["bindAll"]();
// 			}
// 		}
// 	}
// 	export class SpineListView extends ButtonList
// 	{
// 		constructor(menu: string, testMemory: TestMemory, list: any[])
// 		{
// 			super(menu, testMemory);
// 			this.listData = list;
// 			this.createButtonList();
// 		}
// 		protected updateItem(cell: ButtonListItem, index: number): void
// 		{
// 			if (index < this.listData.length)
// 			{
// 				cell.label = this.listData[index]["path"];
// 			}
// 		}
// 		protected onSelect(index: number): void
// 		{
// 			if (index < this.listData.length)
// 			{
// 				let path = "res" + this.listData[index]["path"];
// 				let urls = [
// 					{ url: path.replace(".sk", ".png"), type: Laya.Loader.IMAGE },
// 					{ url: path, type: Laya.Loader.BUFFER }
// 				];
// 				Laya.loader.load(urls, Laya.Handler.create(this, this.onLoadRes, [path]));
// 			}
// 		}
// 		templets: Templet[] = [];
// 		skeletons: Skeleton[] = [];
// 		onLoadRes(path: string)
// 		{
// 			let png = Laya.loader.getRes(path.replace(".sk", ".png"));
// 			let sk = Laya.loader.getRes(path);
// 			let templet = new Templet();
// 			templet.on(Event.COMPLETE, this, () =>
// 			{
// 				let sk = templet.buildArmature(0);
// 				sk.x = Laya.stage.width * 0.5;
// 				sk.y = Laya.stage.height - 50;
// 				sk.play(0, true);
// 				Laya.stage.addChild(sk);
// 				this.skeletons.push(sk);
// 			});
// 			templet.parseData(png, sk);
// 			this.templets.push(templet);
// 			console.log("this.templets.length=" + this.templets.length);
// 		}
// 	}
// 	export class ResList
// 	{
// 		static FguiBin = "ResList/FguiBin.json";
// 		static FguiImage = "ResList/FguiImage.json";
// 		static FSpriteBin = "ResList/FSpriteBin.json";
// 		static FSpriteImage = "ResList/FSpriteImage.json";
// 		static Sprite = "ResList/Sprite.json";
// 		static SpineSK = "ResList/SpineSK.json";
// 		static SpineImage = "ResList/SpineImage.json";
// 		static List = [
// 			ResList.FguiBin,
// 			ResList.FguiImage,
// 			ResList.FSpriteBin,
// 			ResList.FSpriteImage,
// 			ResList.Sprite,
// 			ResList.SpineSK,
// 			ResList.SpineImage
// 		];
// 	}
// 	export class TestMemory
// 	{
// 		container: Component;
// 		tabDict: ButtonList[] = [];
// 		resListDict = {};
// 		constructor()
// 		{
// 			// 设置fgui文件后缀
// 			fairygui.UIConfig["packageFileExtension"] = Games.GuiSetting.packageFileExtension;
// 			this.container = new Component();
// 			Laya.stage.addChild(this.container);
// 			this.loadResListJson();
// 			this.container.mouseEnabled = true;
// 			gameLaunchLoding.onEnd()
// 		}
// 		onClickBackMainMenu()
// 		{
// 			this.openTab(MenuButtons.MainMenu);
// 		}
// 		onClicBindAll()
// 		{
// 			let list = this.getResList(ResList.FguiBin);
// 			for (let i = 0; i < list.length; i++)
// 			{
// 				let path = list[i].path.replace(".bin", "");
// 				let arr = path.split('/');
// 				let name = arr[arr.length - 1];
// 				if (fgui[name] && fgui[name][name + "Binder"])
// 					fgui[name][name + "Binder"]["bindAll"]();
// 			}
// 		}
// 		createTabs()
// 		{
// 			for (let i = 0; i < ResList.List.length; i++)
// 			{
// 				MenuButtons.List.push(ResList.List[i]);
// 			}
// 			let buttonList: ButtonList;
// 			buttonList = new MenuButtonList(MenuButtons.MainMenu, this);
// 			this.tabDict.push(buttonList);
// 			buttonList = new LoadAllResListView(MenuButtons.LoadResList, this, ResList.List);
// 			this.tabDict.push(buttonList);
// 			buttonList = new AddPackageListView(MenuButtons.AddPackageFgui, this, this.getResList(ResList.FguiBin));
// 			this.tabDict.push(buttonList);
// 			buttonList = new AddPackageListView(MenuButtons.AddPackageFsprite, this, this.getResList(ResList.FSpriteBin));
// 			this.tabDict.push(buttonList);
// 			buttonList = new BindListView(MenuButtons.BindFgui, this, this.getResList(ResList.FguiBin));
// 			this.tabDict.push(buttonList);
// 			buttonList = new SpineListView(MenuButtons.SpineSK, this, this.getResList(ResList.SpineSK));
// 			this.tabDict.push(buttonList);
// 			for (let i = 0; i < ResList.List.length; i++)
// 			{
// 				buttonList = new ResListView(ResList.List[i], this, this.getResList(ResList.List[i]));
// 				this.tabDict.push(buttonList);
// 			}
// 			this.openTab(MenuButtons.MainMenu);
// 			let mainMenuButton = new Button(null, "主菜单");
// 			mainMenuButton.width = 300;
// 			mainMenuButton.height = 80;
// 			mainMenuButton.labelSize = 30;
// 			mainMenuButton.mouseEnabled = true;
// 			mainMenuButton.on(laya.events.Event.CLICK, this, this.onClickBackMainMenu);
// 			this.container.addChild(mainMenuButton);
// 			mainMenuButton = new Button(null, "BindAll");
// 			mainMenuButton.width = 300;
// 			mainMenuButton.height = 80;
// 			mainMenuButton.labelSize = 30;
// 			mainMenuButton.mouseEnabled = true;
// 			mainMenuButton.on(laya.events.Event.CLICK, this, this.onClicBindAll);
// 			mainMenuButton.y = 100;
// 			this.container.addChild(mainMenuButton);
// 			mainMenuButton = new Button(null, "创建所有单位动画");
// 			mainMenuButton.width = 300;
// 			mainMenuButton.height = 80;
// 			mainMenuButton.labelSize = 30;
// 			mainMenuButton.mouseEnabled = true;
// 			mainMenuButton.on(laya.events.Event.CLICK, this, this.createAllUnitSpine);
// 			mainMenuButton.x = 400;
// 			mainMenuButton.y = 100;
// 			this.container.addChild(mainMenuButton);
// 			mainMenuButton = new Button(null, "销毁所有单位动画");
// 			mainMenuButton.width = 300;
// 			mainMenuButton.height = 80;
// 			mainMenuButton.labelSize = 30;
// 			mainMenuButton.mouseEnabled = true;
// 			mainMenuButton.on(laya.events.Event.CLICK, this, this.destoryAllUnitSpine);
// 			mainMenuButton.x = 400;
// 			mainMenuButton.y = 200;
// 			this.container.addChild(mainMenuButton);
// 			ButtonList.initPreMemorySize();
// 		}
// 		spineSkUrls: string[] = [];
// 		spinePngUrls: string[] = [];
// 		templets: Templet[] = [];
// 		skeletons: Skeleton[] = [];
// 		destoryAllUnitSpine()
// 		{
// 			this.destorySkeleton();
// 			this.destoryTemplet();
// 			this.destorySpineRes();
// 		}
// 		destorySkeleton()
// 		{
// 			while (this.skeletons.length > 0)
// 			{
// 				let tmp = this.skeletons.pop();
// 				tmp.removeSelf();
// 				tmp.destroy();
// 			}
// 		}
// 		destoryTemplet()
// 		{
// 			while (this.templets.length > 0)
// 			{
// 				let tmp = this.templets.pop();
// 				tmp.destroy();
// 				tmp.dispose();
// 			}
// 		}
// 		destorySpineRes()
// 		{
// 			while (this.spinePngUrls.length > 0)
// 			{
// 				Laya.loader.clearRes(this.spinePngUrls.pop(), true);
// 			}
// 			while (this.spineSkUrls.length > 0)
// 			{
// 				Laya.loader.clearRes(this.spineSkUrls.pop(), true);
// 			}
// 		}
// 		createAllUnitSpine()
// 		{
// 			let list = this.getResList(ResList.SpineSK);
// 			for (let i = 0; i < list.length; i++)
// 			{
// 				let path = list[i].path;
// 				if (
// 					path.indexOf("/spine/Female01") == 0 ||
// 					path.indexOf("/spine/Female02") == 0 ||
// 					path.indexOf("/spine/Female03") == 0 ||
// 					path.indexOf("/spine/Male01") == 0 ||
// 					path.indexOf("/spine/Male02") == 0 ||
// 					path.indexOf("/spine/Male03") == 0
// 				)
// 				{
// 					let skUrl = "res" + path;
// 					let pngUrl = skUrl.replace(".sk", ".png");
// 					let urls = [
// 						{ url: pngUrl, type: Laya.Loader.IMAGE },
// 						{ url: skUrl, type: Laya.Loader.BUFFER }
// 					];
// 					Laya.loader.load(urls, Laya.Handler.create(this, this.onLoadSpineRes, [skUrl, pngUrl]));
// 					this.spinePngUrls.push(pngUrl);
// 					this.spineSkUrls.push(skUrl);
// 				}
// 			}
// 		}
// 		onLoadSpineRes(skUrl: string, pngUrl: string)
// 		{
// 			let png = Laya.loader.getRes(pngUrl);
// 			let sk = Laya.loader.getRes(skUrl);
// 			let templet = new Templet();
// 			templet.on(Event.COMPLETE, this, () =>
// 			{
// 				let sk = templet.buildArmature(0);
// 				sk.x = Laya.stage.width * 0.5;
// 				sk.y = Laya.stage.height - 50;
// 				sk.play(0, true);
// 				Laya.stage.addChild(sk);
// 				this.skeletons.push(sk);
// 			});
// 			templet.parseData(png, sk);
// 			this.templets.push(templet);
// 			console.log("this.templets.length=" + this.templets.length);
// 		}
// 		openTab(menu: string)
// 		{
// 			for (let i = 0; i < this.tabDict.length; i++)
// 			{
// 				if (this.tabDict[i].menu == menu)
// 				{
// 					if (!this.tabDict[i].parent)
// 					{
// 						this.container.addChildAt(this.tabDict[i], 0);
// 					}
// 				}
// 				else
// 				{
// 					if (this.tabDict[i].parent)
// 					{
// 						this.tabDict[i].removeSelf();
// 					}
// 				}
// 			}
// 		}
// 		private loadResListNum = 0;
// 		loadResListJson()
// 		{
// 			for (let i = 0; i < ResList.List.length; i++)
// 			{
// 				console.log("BeginLoad:" + ResList.List[i]);
// 				Laya.loader.load(ResList.List[i], Handler.create(this, this.onLoadResList, [ResList.List[i]]), null, Laya.Loader.JSON);
// 			}
// 		}
// 		onLoadResList(path: string)
// 		{
// 			console.log("onLoadResList:" + path);
// 			this.resListDict[path] = Laya.loader.getRes(path);
// 			this.loadResListNum++;
// 			if (this.loadResListNum >= ResList.List.length)
// 			{
// 				this.createTabs();
// 			}
// 		}
// 		getResList(path: string)
// 		{
// 			return this.resListDict[path];
// 		}
// 	}
// }
// /*------------------------------------------------------------ */
//# sourceMappingURL=GameTest.js.map