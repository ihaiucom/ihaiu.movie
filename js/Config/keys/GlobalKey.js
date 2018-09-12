/////////////////////////////////////
// ExportKey生成
// http://blog.ihaiu.com
/////////////////////////////////////
var GlobalKey = /** @class */ (function () {
    function GlobalKey() {
    }
    // 0 KeyField
    // 1 KeyValue
    // 2 ID
    // 3 ModuleName
    // 4 Name
    /** 1   --- 金币兑换初始每日次数 */
    GlobalKey.Gold_Convert_Count = "Gold_Convert_Count";
    /** 2   --- 金币兑换每日刷新时间（点） */
    GlobalKey.Gold_Convert_Times = "Gold_Convert_Times";
    /** 3   --- 艺人培训开启等级 */
    GlobalKey.Actor_Training_OpenLevel = "Actor_Training_OpenLevel";
    /** 4   --- 拍摄许可证上限 */
    GlobalKey.Licence_Store_Max = "Licence_Store_Max";
    /** 5   --- 每日许可证回复数量 */
    GlobalKey.Licence_Restore_Max = "Licence_Restore_Max";
    /** 6   --- 初始剧本可选择数量 */
    GlobalKey.Script_choose_num = "Script_choose_num";
    /** 7   --- 电影下线后的持续收益时间（分钟） */
    GlobalKey.Popularize_Duration = "Popularize_Duration";
    /** 8   --- 电影拍摄时长（秒） */
    GlobalKey.Movie_Shoot_Time = "Movie_Shoot_Time";
    /** 9   --- 最多可同时进行持续收益的电影数量 */
    GlobalKey.Max_Movie_Num = "Max_Movie_Num";
    /** 10   --- 电影关注度最大等级 */
    GlobalKey.Max_Movie_Popularize_Level = "Max_Movie_Popularize_Level";
    /** 11   --- 许可证回复刷新时间（每日N点） */
    GlobalKey.Licence_Restore_Time = "Licence_Restore_Time";
    /** 12   --- 电影期待值最高等级 */
    GlobalKey.Max_Expect = "Max_Expect";
    /** 13   --- 电影同类拍摄疲劳度 */
    GlobalKey.Tired_Times = "Tired_Times";
    /** 14   --- 电影提前下映收益（%） */
    GlobalKey.Movie_Stop_Tips = "Movie_Stop_Tips";
    /** 15   --- 分组排行榜刷新时间（每日N点） */
    GlobalKey.Block_Ranking_List_Reset = "Block_Ranking_List_Reset";
    /** 16   --- 分组排行榜玩家数量 */
    GlobalKey.Block_Ranking_List_Player_Num = "Block_Ranking_List_Player_Num";
    /** 17   --- 同服排行榜刷新时间（每日N点） */
    GlobalKey.Server_Ranking_List_Reset = "Server_Ranking_List_Reset";
    /** 18   --- 街区排行祝贺次数 */
    GlobalKey.Block_Ranking_List_Congratulate_Times = "Block_Ranking_List_Congratulate_Times";
    /** 19   --- 街区排行祝贺冷却（秒） */
    GlobalKey.Block_Ranking_List_Congratulate_Cd = "Block_Ranking_List_Congratulate_Cd";
    /** 20   --- 剧本冷却时间（分钟） */
    GlobalKey.Story_CD = "Story_CD";
    /** 21   --- 金本属性加成时间（秒） */
    GlobalKey.Golden_Story_Time = "Golden_Story_Time";
    /** 22   --- 金本属性加成次数 */
    GlobalKey.Golden_Story_Num = "Golden_Story_Num";
    /** 23   --- 奥斯卡比赛单次大卖奖励道具 */
    GlobalKey.KEY_23_AoSiKaBi__JiangLiDaoJu = "KEY_23_AoSiKaBi__JiangLiDaoJu";
    /** 24   --- 奥斯卡比赛大卖奖励上限 */
    GlobalKey.KEY_24_AoSiKaBi__JiangLiShangXian = "KEY_24_AoSiKaBi__JiangLiShangXian";
    /** 25   --- 奥斯卡颁奖时间 */
    GlobalKey.KEY_25_AoSiKaBanJiangShiJian = "KEY_25_AoSiKaBanJiangShiJian";
    /** 26   --- 奥斯卡颁奖前禁止拍摄电影时间（秒） */
    GlobalKey.KEY_26_AoSiKaBan__YingShiJianMiao = "KEY_26_AoSiKaBan__YingShiJianMiao";
    /** 27   --- 首次合作奖励 */
    GlobalKey.KEY_27_ShouCiGeZuoJiangLi = "KEY_27_ShouCiGeZuoJiangLi";
    /** 28   --- 首次账号查找建立合作奖励 */
    GlobalKey.KEY_28_ShouCiZhangHao__GeZuoJiangLi = "KEY_28_ShouCiZhangHao__GeZuoJiangLi";
    /** 29   --- 每周合作次数 */
    GlobalKey.KEY_29_MeiZhouGeZuoCiShu = "KEY_29_MeiZhouGeZuoCiShu";
    /** 30   --- 合作任务刷新时间（每日N点） */
    GlobalKey.KEY_30_GeZuoRenWu__MeiRiNDian = "KEY_30_GeZuoRenWu__MeiRiNDian";
    /** 31   --- 媒体访问等级上限 */
    GlobalKey.KEY_31_MeiTiFangWen__DengJiShangXian = "KEY_31_MeiTiFangWen__DengJiShangXian";
    /** 32   --- 媒体访问随机数量区间 */
    GlobalKey.KEY_32_MeiTiFangWen__ShuLiangOuJian = "KEY_32_MeiTiFangWen__ShuLiangOuJian";
    /** 33   --- 媒体访问数量上限 */
    GlobalKey.KEY_33_MeiTiFangWen__ShuLiangShangXian = "KEY_33_MeiTiFangWen__ShuLiangShangXian";
    /** 34   --- 每日拍摄总疲劳清零时间（每日N点） */
    GlobalKey.KEY_34_MeiRiPaiShe__MeiRiNDian = "KEY_34_MeiRiPaiShe__MeiRiNDian";
    /** 35   --- 周边仓库初始容量 */
    GlobalKey.Bag_Initial_Capacity = "Bag_Initial_Capacity";
    /** 36   --- 许可证重置冷却时间（秒） */
    GlobalKey.Movie_License_default_Cd = "Movie_License_default_Cd";
    /** 37   --- 电影柱状图时间（每根的增长时间/毫秒） */
    GlobalKey.Movie_Histogram_Time = "Movie_Histogram_Time";
    /** 38   --- 拍摄消耗道具id */
    GlobalKey.Movie_Licence_ID = "Movie_Licence_ID";
    /** 39   --- 奥斯卡颁奖候选数量 */
    GlobalKey.Oscar_Candidate_Num = "Oscar_Candidate_Num";
    /** 40   --- 艺人训练初始经验 */
    GlobalKey.Actor_Train_Exp = "Actor_Train_Exp";
    /** 41   --- 艺人训练初始时间（分钟） */
    GlobalKey.Actor_Train_Time = "Actor_Train_Time";
    /** 42   --- 奥斯卡最佳男演员奖励 */
    GlobalKey.Oscar_Best_Actor = "Oscar_Best_Actor";
    /** 43   --- 奥斯卡最佳女演员奖励 */
    GlobalKey.Oscar_Best_Actress = "Oscar_Best_Actress";
    /** 44   --- 奥斯卡最佳表演电影奖励 */
    GlobalKey.Oscar_Best_Performance = "Oscar_Best_Performance";
    /** 45   --- 奥斯卡最佳艺术电影奖励 */
    GlobalKey.Oscar_Best_Art = "Oscar_Best_Art";
    /** 46   --- 奥斯卡最受欢迎电影奖励 */
    GlobalKey.Oscar_Best_Welcome = "Oscar_Best_Welcome";
    /** 47   --- 艺人训练位价格 */
    GlobalKey.Training_Area_Price = "Training_Area_Price";
    /** 48   --- 奥斯卡祝贺奖励 */
    GlobalKey.Oscar_Congratulated_Reward = "Oscar_Congratulated_Reward";
    /** 49   --- 合作赠送美元次数 */
    GlobalKey.Cooperate_Send_Dollar_times = "Cooperate_Send_Dollar_times";
    /** 50   --- 合作赠送金币次数 */
    GlobalKey.Cooperate_Send_Gold_times = "Cooperate_Send_Gold_times";
    /** 51   --- 发出合作邀请间隔时间（秒） */
    GlobalKey.Cooperate_Invited_CD = "Cooperate_Invited_CD";
    /** 52   --- 公开邀请持续时间（秒） */
    GlobalKey.Cooperate_Public_Invited_Time = "Cooperate_Public_Invited_Time";
    /** 53   --- 合作开启条件（街区id，必须同时修改unlock表） */
    GlobalKey.Cooperate_Open_data = "Cooperate_Open_data";
    /** 54   --- 拍摄过程中金本跳属性次数 */
    GlobalKey.Shoot_Golden_Story_Nums = "Shoot_Golden_Story_Nums";
    /** 1001   --- 探查消耗 */
    GlobalKey.KEY_1001_TanChaXiaoHao = "KEY_1001_TanChaXiaoHao";
    /** 1002   --- 星探招募探查CD(分) */
    GlobalKey.KEY_1002_XingTanQiaoMu__ChaCDFen = "KEY_1002_XingTanQiaoMu__ChaCDFen";
    /** 1003   --- 每次探查后CD增加时间(分) */
    GlobalKey.KEY_1003_MeiCiTanCha__JiaShiJianFen = "KEY_1003_MeiCiTanCha__JiaShiJianFen";
    /** 1004   --- 探查次数上限 */
    GlobalKey.KEY_1004_TanChaCiShuShangXian = "KEY_1004_TanChaCiShuShangXian";
    /** 1005   --- 探查CD重置时间(服务器时间) */
    GlobalKey.KEY_1005_TanChaCD__WuQiShiJian = "KEY_1005_TanChaCD__WuQiShiJian";
    /** 1006   --- 探查出艺人数量(个) */
    GlobalKey.KEY_1006_TanChaChuYi__RenShuLiangGe = "KEY_1006_TanChaChuYi__RenShuLiangGe";
    /** 1007   --- 探查出艺人存在时间(分) */
    GlobalKey.KEY_1007_TanChaChuYi__ZaiShiJianFen = "KEY_1007_TanChaChuYi__ZaiShiJianFen";
    /** 1008   --- 强制探查消耗物品和数量 */
    GlobalKey.KEY_1008_JiangZhiTanCha__PinHeShuLiang = "KEY_1008_JiangZhiTanCha__PinHeShuLiang";
    /** 1009   --- 钻石增加艺人上限数量消耗 */
    GlobalKey.KEY_1009_ZuanDanZengJia__ShuLiangXiaoHao = "KEY_1009_ZuanDanZengJia__ShuLiangXiaoHao";
    /** 1010   --- 自定义艺人名称消耗 */
    GlobalKey.KEY_1010_ZiDingYiYi__MingChenXiaoHao = "KEY_1010_ZiDingYiYi__MingChenXiaoHao";
    /** 1011   --- 体力重置时间(服务器时间) */
    GlobalKey.KEY_1011_TiLiChongZhi__WuQiShiJian = "KEY_1011_TiLiChongZhi__WuQiShiJian";
    /** 1012   --- 钻石培养一次艺人消耗 */
    GlobalKey.KEY_1012_ZuanDanPeiYang__YiRenXiaoHao = "KEY_1012_ZuanDanPeiYang__YiRenXiaoHao";
    /** 1013   --- 星探次数 */
    GlobalKey.KEY_1013_XingTanCiShu = "KEY_1013_XingTanCiShu";
    /** 1014   --- 探查星级随机公式 */
    GlobalKey.KEY_1014_TanChaXingJi__SuiJiGongShi = "KEY_1014_TanChaXingJi__SuiJiGongShi";
    /** 1015   --- 艺人在楼层中出现的数量上限 */
    GlobalKey.KEY_1015_YiRenZaiLou__ShuLiangShangXian = "KEY_1015_YiRenZaiLou__ShuLiangShangXian";
    /** 1016   --- 模型在楼层中播放事件的数量 */
    GlobalKey.KEY_1016_MoXingZaiLou__JianDeShuLiang = "KEY_1016_MoXingZaiLou__JianDeShuLiang";
    /** 1017   --- 模型在楼层中移动速度 */
    GlobalKey.KEY_1017_MoXingZaiLou__YiDongSuDu = "KEY_1017_MoXingZaiLou__YiDongSuDu";
    /** 1018   --- 电影上映时,电影院NPC刷新数量 */
    GlobalKey.KEY_1018_DianYingShangYing__ShuaXinShuLiang = "KEY_1018_DianYingShangYing__ShuaXinShuLiang";
    /** 1019   --- 探班时,艺人跑动动作的速度 */
    GlobalKey.KEY_1019_TanBanShiYi__ZuoDeSuDu = "KEY_1019_TanBanShiYi__ZuoDeSuDu";
    /** 1020   --- 艺人拍摄电影时，片酬消耗的货币类型 */
    GlobalKey.KEY_1020_YiRenPaiShe__HuoBiLeiXing = "KEY_1020_YiRenPaiShe__HuoBiLeiXing";
    /** 1021   --- 1级擅长标签描述文字 */
    GlobalKey.KEY_1021_1JiShanChang__MiaoShuWenZi = "KEY_1021_1JiShanChang__MiaoShuWenZi";
    /** 1022   --- 2级擅长标签描述文字 */
    GlobalKey.KEY_1022_2JiShanChang__MiaoShuWenZi = "KEY_1022_2JiShanChang__MiaoShuWenZi";
    /** 1023   --- 3级擅长标签描述文字 */
    GlobalKey.KEY_1023_3JiShanChang__MiaoShuWenZi = "KEY_1023_3JiShanChang__MiaoShuWenZi";
    /** 1024   --- 4级擅长标签描述文字 */
    GlobalKey.KEY_1024_4JiShanChang__MiaoShuWenZi = "KEY_1024_4JiShanChang__MiaoShuWenZi";
    /** 1025   --- 玩家初始艺人上限数量 */
    GlobalKey.KEY_1025_WanGuChuShi__ShangXianShuLiang = "KEY_1025_WanGuChuShi__ShangXianShuLiang";
    /** 1026   --- 玩家初始雪藏艺人数量上限 */
    GlobalKey.KEY_1026_WanGuChuShi__ShuLiangShangXian = "KEY_1026_WanGuChuShi__ShuLiangShangXian";
    /** 1027   --- 艺人培养类型1动作持续时间（毫秒） */
    GlobalKey.KEY_1027_YiRenPeiYang__ShiJianHaoMiao = "KEY_1027_YiRenPeiYang__ShiJianHaoMiao";
    /** 1028   --- 艺人培养类型2动作持续时间（毫秒） */
    GlobalKey.KEY_1028_YiRenPeiYang__ShiJianHaoMiao = "KEY_1028_YiRenPeiYang__ShiJianHaoMiao";
    /** 1029   --- 艺人培养类型3动作持续时间（毫秒） */
    GlobalKey.KEY_1029_YiRenPeiYang__ShiJianHaoMiao = "KEY_1029_YiRenPeiYang__ShiJianHaoMiao";
    /** 1030   --- 艺人培养类型4动作持续时间（毫秒） */
    GlobalKey.KEY_1030_YiRenPeiYang__ShiJianHaoMiao = "KEY_1030_YiRenPeiYang__ShiJianHaoMiao";
    /** 1031   --- 公司培养次数重置时间（服务器时间） */
    GlobalKey.KEY_1031_GongSiPeiYang__WuQiShiJian = "KEY_1031_GongSiPeiYang__WuQiShiJian";
    /** 1032   --- 艺人培养功能解锁条件（占领城市ID） */
    GlobalKey.KEY_1032_YiRenPeiYang__ChengShiID = "KEY_1032_YiRenPeiYang__ChengShiID";
    /** 1033   --- 艺人技能页签解锁条件（公司等级） */
    GlobalKey.KEY_1033_YiRenJiNeng__GongSiDengJi = "KEY_1033_YiRenJiNeng__GongSiDengJi";
    /** 1034   --- 艺人资产页签解锁条件（公司等级） */
    GlobalKey.KEY_1034_YiRenZiChan__GongSiDengJi = "KEY_1034_YiRenZiChan__GongSiDengJi";
    /** 1035   --- 艺人忠诚卡增加赠送上限数量 */
    GlobalKey.KEY_1035_YiRenZhongCheng__ShangXianShuLiang = "KEY_1035_YiRenZhongCheng__ShangXianShuLiang";
    /** 1036   --- 艺人助理页签解锁条件(艺人等级) */
    GlobalKey.KEY_1036 = "KEY_1036";
    /** 1037   --- 艺人专业助理解锁条件(艺人等级) */
    GlobalKey.KEY_1037 = "KEY_1037";
    /** 1038   --- 艺人替身演员解锁条件(艺人等级) */
    GlobalKey.KEY_1038 = "KEY_1038";
    /** 1039   --- 聘用替身演员的消耗公式(艺人合同) */
    GlobalKey.KEY_1039 = "KEY_1039";
    /** 1040   --- 替身演员第一个擅长标签解锁亲密度等级 */
    GlobalKey.KEY_1040 = "KEY_1040";
    /** 1041   --- 替身演员第二个擅长标签解锁亲密度等级 */
    GlobalKey.KEY_1041 = "KEY_1041";
    /** 1042   --- 替身演员第三个擅长标签解锁亲密度等级 */
    GlobalKey.KEY_1042 = "KEY_1042";
    /** 1043   --- 图鉴界面玩家留言数量 */
    GlobalKey.KEY_1043 = "KEY_1043";
    /** 1044   --- 图鉴界面玩家留言字符长度 */
    GlobalKey.KEY_1044 = "KEY_1044";
    /** 1045   --- 图鉴界面同一艺人玩家留言数量上限 */
    GlobalKey.KEY_1045 = "KEY_1045";
    /** 1046   --- 星探NPC模型ID */
    GlobalKey.KEY_1046 = "KEY_1046";
    /** 1047   --- 培训师NPC模型ID */
    GlobalKey.KEY_1047 = "KEY_1047";
    /** 1048   --- 训练师NPC模型ID */
    GlobalKey.KEY_1048 = "KEY_1048";
    /** 1049   --- 剧情动画跳过按钮延迟时间（毫秒） */
    GlobalKey.KEY_1049 = "KEY_1049";
    /** 2003   --- 剧本成本随机 */
    GlobalKey.story_cost_rand = "story_cost_rand";
    /** 2004   --- 角色成本随机 */
    GlobalKey.actor_cost_rand = "actor_cost_rand";
    /** 2009   --- 总拍摄次数系数 */
    GlobalKey.rand_1 = "rand_1";
    /** 2010   --- 连续拍摄系数 */
    GlobalKey.rand_2 = "rand_2";
    /** 2011   --- 疲劳参考值 */
    GlobalKey.tired_base = "tired_base";
    /** 2012   --- 普通疲劳系数 */
    GlobalKey.tired_con_1 = "tired_con_1";
    /** 2013   --- 金本疲劳系数 */
    GlobalKey.tired_con_2 = "tired_con_2";
    /** 2014   --- 拍摄总时长 */
    GlobalKey.time = "time";
    /** 2015   --- 拍摄类型时机 */
    GlobalKey.type_timer_con = "type_timer_con";
    /** 2016   --- 属性权重 */
    GlobalKey.att_rate = "att_rate";
    /** 2018   --- 属性值随机区间 */
    GlobalKey.att_rand = "att_rand";
    /** 2019   --- 延时参数 */
    GlobalKey.delay_con = "delay_con";
    /** 2020   --- 延时基准值 */
    GlobalKey.delay_base = "delay_base";
    /** 2021   --- 最多延时条数 */
    GlobalKey.delay_count = "delay_count";
    /** 2023   --- 金本调整系数 */
    GlobalKey.gold_att_con = "gold_att_con";
    /** 2024   --- 随机次数 */
    GlobalKey.gold_count = "gold_count";
    /** 2025   --- 进度条系数 */
    GlobalKey.bar_con = "bar_con";
    /** 2027   --- 评价随机参数 */
    GlobalKey.evaluate_rand = "evaluate_rand";
    /** 2028   --- 媒体评价参数 */
    GlobalKey.evaluate_con = "evaluate_con";
    /** 2029   --- 票房随机参数 */
    GlobalKey.box_office_rand = "box_office_rand";
    /** 2034   --- 评价随机参数 */
    GlobalKey.opinions_rand = "opinions_rand";
    /** 2035   --- 观众口碑参数 */
    GlobalKey.opinions_con = "opinions_con";
    /** 2036   --- 放映参数 */
    GlobalKey.day_con = "day_con";
    /** 2037   --- 后续票房随机参数 */
    GlobalKey.follow_rand = "follow_rand";
    /** 2038   --- 随机评价对照值 */
    GlobalKey.random_value = "random_value";
    /** 2039   --- 随机范围 */
    GlobalKey.random_rand = "random_rand";
    /** 2040   --- 随机评价系数1 */
    GlobalKey.random_con_1 = "random_con_1";
    /** 2041   --- 随机评价系数2 */
    GlobalKey.random_con_2 = "random_con_2";
    /** 2042   --- 随机评价系数3 */
    GlobalKey.random_con_3 = "random_con_3";
    /** 2043   --- 随机评价系数4 */
    GlobalKey.random_con_4 = "random_con_4";
    /** 2044   --- 每日任务及完成度刷新重置 */
    GlobalKey.task_convert_times = "task_convert_times";
    /** 2045   --- 剧本搜罗每天搜罗次数 */
    GlobalKey.story_stack_daily_times = "story_stack_daily_times";
    /** 2046   --- 剧本搜罗每次消耗物品 */
    GlobalKey.story_stack_search_cost = "story_stack_search_cost";
    /** 2047   --- 剧本搜罗每阶段搜罗冷却加速消耗资源类型和数量 */
    GlobalKey.story_stack_cd_stage_cost = "story_stack_cd_stage_cost";
    /** 2048   --- 剧本搜罗阶段时长 */
    GlobalKey.story_stack_cd_stage_length = "story_stack_cd_stage_length";
    /** 2049   --- 剧本搜罗阶段数量 */
    GlobalKey.story_stack_cd_stages = "story_stack_cd_stages";
    /** 2050   --- 剧本搜罗冷却时间 */
    GlobalKey.story_stack_cd = "story_stack_cd";
    /** 2051   --- 每日刷新时间 */
    GlobalKey.story_stack_daily_update = "story_stack_daily_update";
    /** 2052   --- 剧本搜罗冷却功能开放所需街区等级 */
    GlobalKey.story_stack_cd_block_level = "story_stack_cd_block_level";
    /** 2053   --- 商店每日限购刷新时间 */
    GlobalKey.shop_daily_limit = "shop_daily_limit";
    /** 2054   --- 商店每周限购刷新时间 */
    GlobalKey.shop_weekly_limit = "shop_weekly_limit";
    /** 2055   --- 观众口碑区间 */
    GlobalKey.opinions = "opinions";
    /** 2056   --- 媒体评价区间 */
    GlobalKey.evaluate = "evaluate";
    /** 2057   --- 拍摄粉丝掉落随机范围 */
    GlobalKey.fans_rand = "fans_rand";
    /** 2058   --- 后续票房随机参数 */
    GlobalKey.BarGraph_rand = "BarGraph_rand";
    /** 2059   --- 柱状图总条数 */
    GlobalKey.BattlePoint_count = "BattlePoint_count";
    /** 2060   --- 下映收入推广等级参数 */
    GlobalKey.Extension_level_con = "Extension_level_con";
    /** 2061   --- 默认语言 */
    GlobalKey.default_language = "default_language";
    /** 2062   --- 月卡持续天数 */
    GlobalKey.month_card_duration = "month_card_duration";
    /** 2063   --- 艺人熟练度 */
    GlobalKey.proficiency = "proficiency";
    /** 2064   --- 合作订单奖励 */
    GlobalKey.cooperative_order_reward = "cooperative_order_reward";
    /** 2065   --- 生产艺人鼓舞建筑限制 */
    GlobalKey.produce_inspire_buildlock = "produce_inspire_buildlock";
    /** 2066   --- 生产艺人鼓舞生产线等级限制 */
    GlobalKey.produce_inspire_linelock = "produce_inspire_linelock";
    /** 2067   --- 一键生产需要街区等级限制 */
    GlobalKey.produce_production_less = "produce_production_less";
    /** 2068   --- 一键领取需要街区等级限制 */
    GlobalKey.produce_collection_less = "produce_collection_less";
    /** 2069   --- 市场第5个大使开放的街区等级 */
    GlobalKey.market_ambassador = "market_ambassador";
    /** 2070   --- 活动大厅培养积分培养1次获得积分数 */
    GlobalKey.eventhall_score1 = "eventhall_score1";
    /** 2071   --- 活动大厅星探积分星探1次获得积分数 */
    GlobalKey.eventhall_score2 = "eventhall_score2";
    /** 2072   --- 后续收益系数 */
    GlobalKey.Extension_box_office_con = "Extension_box_office_con";
    /** 2073   --- 推广等级系数 */
    GlobalKey.Extension_con = "Extension_con";
    /** 2074   --- 第一天首次探查艺人 */
    GlobalKey.Firstday_Actor = "Firstday_Actor";
    /** 2075   --- 第二天首次探查艺人 */
    GlobalKey.Secondday_Actor = "Secondday_Actor";
    /** 2076   --- 公务初始次数上限 */
    GlobalKey.bussiness_number = "bussiness_number";
    /** 2077   --- 公务当前储存上限 */
    GlobalKey.bussiness_max = "bussiness_max";
    /** 2078   --- 公务刷新时间 */
    GlobalKey.bussiness_cd = "bussiness_cd";
    /** 2079   --- 探班初始次数上限 */
    GlobalKey.visit_number = "visit_number";
    /** 2080   --- 探班当前储存上限 */
    GlobalKey.visit_max = "visit_max";
    /** 2081   --- 探班刷新时间 */
    GlobalKey.visit_cd = "visit_cd";
    /** 2082   --- 基础会议存储次数 */
    GlobalKey.meeting_times_basic = "meeting_times_basic";
    return GlobalKey;
}());
//# sourceMappingURL=GlobalKey.js.map