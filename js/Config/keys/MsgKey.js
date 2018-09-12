/////////////////////////////////////
// ExportKey生成
// http://blog.ihaiu.com
/////////////////////////////////////
var MsgKey = /** @class */ (function () {
    function MsgKey() {
    }
    // 0 KeyField
    // 1 KeyValue
    // 2 ID
    // 3 ModuleName
    // 4 Name
    /** 1000  测试 --- 测试 */
    MsgKey.Msg_test = "Msg_test";
    /** 1001  账号信息 --- 名称长度不对 */
    MsgKey.account_name_long = "account_name_long";
    /** 1002  账号信息 --- 名称为纯数字 */
    MsgKey.account_name_num = "account_name_num";
    /** 1003  账号信息 --- 名称开头和结尾有空格 */
    MsgKey.account_name_space = "account_name_space";
    /** 1004  账号信息 --- 名称与原名相同 */
    MsgKey.account_name_repeat = "account_name_repeat";
    /** 1005  账号信息 --- 名称中有屏蔽词 */
    MsgKey.account_name_blockword = "account_name_blockword";
    /** 1006  账号信息 --- 名称与其他玩家重名 */
    MsgKey.account_name_repeatothers = "account_name_repeatothers";
    /** 1007  账号信息 --- 公司重命名成功 */
    MsgKey.account_name_ok = "account_name_ok";
    /** 1008  账号信息 --- 频繁修改个性签名提示 */
    MsgKey.account_name_often = "account_name_often";
    /** 1009  生产 --- 一键生产 */
    MsgKey.produce_one_click = "produce_one_click";
    /** 1010  生产 --- 一键领取达仓库上限 */
    MsgKey.produce_warehouse_max = "produce_warehouse_max";
    /** 1011  生产 --- 街区等级不够 */
    MsgKey.produce_recvip_less = "produce_recvip_less";
    /** 1012  生产 --- 没有足够的道具 */
    MsgKey.produce_item_less = "produce_item_less";
    /** 1013  生产 --- 没有足够的图纸 */
    MsgKey.produce_paper_less = "produce_paper_less";
    /** 1014  生产 --- 生产线累计奖励到达上限 */
    MsgKey.produce_item_max = "produce_item_max";
    /** 1015  生产 --- 生产线队列到达上限 */
    MsgKey.produce_line_max = "produce_line_max";
    /** 1016  生产 --- 前置生产线未解锁 */
    MsgKey.produce_pre_unlock = "produce_pre_unlock";
    /** 1017  生产 --- 钻石不足 */
    MsgKey.produce_diamond_less = "produce_diamond_less";
    /** 1018  生产 --- 金币不足 */
    MsgKey.produce_gold_less = "produce_gold_less";
    /** 1019  生产 --- 街区等级不够 */
    MsgKey.produce_provip_less = "produce_provip_less";
    /** 1020  生产 --- 所有生产线队列到达上限 */
    MsgKey.produce_lines_max = "produce_lines_max";
    /** 1021  拍摄 --- 未开启媒体访问提示 */
    MsgKey.non_midia_visit = "non_midia_visit";
    /** 1022  拍摄 --- 没有符合条件的艺人 */
    MsgKey.movie_non_suitable_actor = "movie_non_suitable_actor";
    /** 1023  拍摄 --- 没有足够数量的艺人 */
    MsgKey.movie_non_enough_actor = "movie_non_enough_actor";
    /** 1024  拍摄 --- 艺人招募提示 */
    MsgKey.movie_actor_recruit = "movie_actor_recruit";
    /** 1025  拍摄 --- 比赛排行重置提示 */
    MsgKey.ranking_list_reset = "ranking_list_reset";
    /** 1026  拍摄 --- 提前下映提示 */
    MsgKey.movie_stop_tips = "movie_stop_tips";
    /** 1027  排行 --- 排行榜滚动文字1 */
    MsgKey.ranking_list_tips1 = "ranking_list_tips1";
    /** 1028  排行 --- 排行榜滚动文字2 */
    MsgKey.ranking_list_tips2 = "ranking_list_tips2";
    /** 1029  排行 --- 票房排行隐藏显示提示 */
    MsgKey.movie_ranking_list_hidden = "movie_ranking_list_hidden";
    /** 1030  街区 --- 街区升档需求提示 */
    MsgKey.block_upgrade_requirement = "block_upgrade_requirement";
    /** 1031  街区 --- 奖杯获取提示 */
    MsgKey.trophy_tips = "trophy_tips";
    /** 1032  街区 --- 奖杯获取补充提示 */
    MsgKey.trophy_tips2 = "trophy_tips2";
    /** 1033  街区 --- 完成街区提示 */
    MsgKey.finished_block = "finished_block";
    /** 1034  院线 --- 院线签约 */
    MsgKey.cinema_sign = "cinema_sign";
    /** 1035  排行榜 --- 奖励说明1 */
    MsgKey.ranking_list_instruction1 = "ranking_list_instruction1";
    /** 1036  排行榜 --- 奖励说明2 */
    MsgKey.ranking_list_instruction2 = "ranking_list_instruction2";
    /** 1037  排行榜 --- 奖励说明3 */
    MsgKey.ranking_list_instruction3 = "ranking_list_instruction3";
    /** 1038  排行榜 --- 修改服务器名称 */
    MsgKey.change_server_name = "change_server_name";
    /** 1039  影城签约 --- 未选择签约影城 */
    MsgKey.choose_cinema = "choose_cinema";
    /** 1040  拍摄 --- 领取收益提示 */
    MsgKey.movie_get_tips = "movie_get_tips";
    /** 1041  拍摄 --- 剧本契合提示 */
    MsgKey.movie_story_coordination = "movie_story_coordination";
    /** 1042  拍摄 --- 角色契合提示 */
    MsgKey.movie_character_coordination = "movie_character_coordination";
    /** 1043  拍摄 --- 剧本角色契合提示 */
    MsgKey.movie_story_character_coordination = "movie_story_character_coordination";
    /** 1044  拍摄 --- 剧本角色无契合 */
    MsgKey.movie_none_coordination = "movie_none_coordination";
    /** 1049  拍摄 --- 电影掉落提示 */
    MsgKey.movie_drop_tips = "movie_drop_tips";
    /** 1050  拍摄 --- 玩家拍摄次数过多 */
    MsgKey.movie_too_much = "movie_too_much";
    /** 1051  拍摄 --- 市场风向暴击1 */
    MsgKey.movie_critical1 = "movie_critical1";
    /** 1052  拍摄 --- 市场风向暴击2 */
    MsgKey.movie_critical2 = "movie_critical2";
    /** 1053  拍摄 --- 市场风向暴击3 */
    MsgKey.movie_critical3 = "movie_critical3";
    /** 1054  拍摄 --- 市场风向暴击4 */
    MsgKey.movie_critical4 = "movie_critical4";
    /** 1060  拍摄 --- 剧本目标未达成 */
    MsgKey.movie_target_fail = "movie_target_fail";
    /** 1061  拍摄 --- 电影未大卖提示 */
    MsgKey.movie_big_sell_tips = "movie_big_sell_tips";
    /** 1062  拍摄 --- 持续收益结束提示 */
    MsgKey.earnings_over = "earnings_over";
    /** 1063  奥斯卡 --- 票房未入榜提示 */
    MsgKey.oscar_non_rank_tips = "oscar_non_rank_tips";
    /** 1064  奥斯卡 --- 总票房未入榜提示 */
    MsgKey.oscar_non_rank_tips2 = "oscar_non_rank_tips2";
    /** 1065  奥斯卡 --- 未拍摄电影提示 */
    MsgKey.oscar_non_movie_tips = "oscar_non_movie_tips";
    /** 1066  奥斯卡 --- 未大卖提示 */
    MsgKey.oscar_non_bigsell_tips = "oscar_non_bigsell_tips";
    /** 1067  奥斯卡 --- 未完成目标提示 */
    MsgKey.oscar_non_target_tips = "oscar_non_target_tips";
    /** 1068  街区 --- 街区升档提示 */
    MsgKey.block_upgrade_msg = "block_upgrade_msg";
    /** 1070  拍摄 --- 电影大卖报纸1 */
    MsgKey.movie_big_sell1 = "movie_big_sell1";
    /** 1071  拍摄 --- 电影大卖报纸2 */
    MsgKey.movie_big_sell2 = "movie_big_sell2";
    /** 1072  拍摄 --- 电影大卖报纸3 */
    MsgKey.movie_big_sell3 = "movie_big_sell3";
    /** 1080  奥斯卡 --- 奥斯卡男演员无提名 */
    MsgKey.oscar_non_actor = "oscar_non_actor";
    /** 1081  奥斯卡 --- 奥斯卡女演员无提名 */
    MsgKey.oscar_non_actress = "oscar_non_actress";
    /** 1082  奥斯卡 --- 奥斯卡最佳表演无提名 */
    MsgKey.oscar_non_performance = "oscar_non_performance";
    /** 1083  奥斯卡 --- 奥斯卡最佳艺术无提名 */
    MsgKey.oscar_non_art = "oscar_non_art";
    /** 1084  奥斯卡 --- 奥斯卡最受欢迎无提名 */
    MsgKey.oscar_non_popular = "oscar_non_popular";
    /** 1085  奥斯卡 --- 奥斯卡最佳男演员 */
    MsgKey.oscar_actor = "oscar_actor";
    /** 1086  奥斯卡 --- 奥斯卡最佳女演员 */
    MsgKey.oscar_actress = "oscar_actress";
    /** 1087  奥斯卡 --- 奥斯卡最佳表演电影 */
    MsgKey.oscar_performance = "oscar_performance";
    /** 1088  奥斯卡 --- 奥斯卡最佳艺术电影 */
    MsgKey.oscar_art = "oscar_art";
    /** 1089  奥斯卡 --- 奥斯卡最受欢迎电影 */
    MsgKey.oscar_popular = "oscar_popular";
    /** 1090  拍摄 --- 奥斯卡前禁止拍摄电影 */
    MsgKey.oscar_forbid_movie = "oscar_forbid_movie";
    /** 1091  邮件 --- 没有可删除的邮件 */
    MsgKey.non_deletable_mail = "non_deletable_mail";
    /** 1092  邮件 --- 没有可领取的邮件 */
    MsgKey.non_can_receive_mail = "non_can_receive_mail";
    /** 1093  邮件 --- 空邮箱 */
    MsgKey.non_mail = "non_mail";
    /** 1094  拍摄 --- 剧本有目标 */
    MsgKey.story_target_tips = "story_target_tips";
    /** 1095  拍摄 --- 剧本没有目标 */
    MsgKey.story_non_target_tips = "story_non_target_tips";
    /** 1096  拍摄 --- 媒体评价提示 */
    MsgKey.story_midia_tips = "story_midia_tips";
    /** 1097  合作 --- id无效 */
    MsgKey.null_id = "null_id";
    /** 1098  合作 --- 目标玩家已合作 */
    MsgKey.cooperated_player = "cooperated_player";
    /** 1099  合作 --- 本周合作次数不足 */
    MsgKey.no_cooperation_num = "no_cooperation_num";
    /** 1100  合作 --- 没有未完成的订单 */
    MsgKey.no_cooperation_orders = "no_cooperation_orders";
    /** 1101  合作 --- 解除合作 */
    MsgKey.relieve_cooperation = "relieve_cooperation";
    /** 1102  合作 --- 重复邀请 */
    MsgKey.repetition_cooperation = "repetition_cooperation";
    /** 1103  仓库 --- 赠送资产 */
    MsgKey.null_actor_send = "null_actor_send";
    /** 1104  建筑 --- 建造确认 */
    MsgKey.build_confirm = "build_confirm";
    /** 1105  建筑 --- 材料不足 */
    MsgKey.build_non_material = "build_non_material";
    /** 1106  建筑 --- 等级不足 */
    MsgKey.build_non_level = "build_non_level";
    /** 1107  建筑 --- 没有前置建筑 */
    MsgKey.build_non_prebuilding = "build_non_prebuilding";
    /** 1108  建筑 --- 街区档次不足 */
    MsgKey.build_non_block = "build_non_block";
    /** 1109  建筑 --- 房间已建造提示 */
    MsgKey.build_be_builded = "build_be_builded";
    /** 1110  拍摄 --- 剧本与市场观众对比差1 */
    MsgKey.movie_market_bad1 = "movie_market_bad1";
    /** 1111  拍摄 --- 剧本与市场观众对比差2 */
    MsgKey.movie_market_bad2 = "movie_market_bad2";
    /** 1112  拍摄 --- 剧本和市场观众对比好1 */
    MsgKey.movie_market_good1 = "movie_market_good1";
    /** 1113  拍摄 --- 剧本和市场观众对比好2 */
    MsgKey.movie_market_good2 = "movie_market_good2";
    /** 1114  拍摄 --- 电影艺人报酬提示 */
    MsgKey.movie_actor_pay = "movie_actor_pay";
    /** 1115  拍摄 --- 艺人参加媒体访问提示 */
    MsgKey.movie_mediavisit_tips = "movie_mediavisit_tips";
    /** 1116  拍摄 --- 电影熟练度加成 */
    MsgKey.movie_type_addition = "movie_type_addition";
    /** 1117  拍摄 --- 签约院线提示 */
    MsgKey.movie_cinema_tips = "movie_cinema_tips";
    /** 1118  拍摄 --- 未签约院线提示 */
    MsgKey.movie_unlock_cinema_tips = "movie_unlock_cinema_tips";
    /** 1119  拍摄 --- 下映后市场反馈 */
    MsgKey.movie_market_feedback = "movie_market_feedback";
    /** 1120  拍摄 --- 下映后剧本反馈 */
    MsgKey.movie_story_feedback = "movie_story_feedback";
    /** 1121  拍摄 --- 下映后拍摄类型反馈 */
    MsgKey.movie_shoottype_feedback = "movie_shoottype_feedback";
    /** 1122  拍摄 --- 许可证回复提示 */
    MsgKey.movie_licence_finish_tips = "movie_licence_finish_tips";
    /** 1123  拍摄 --- 拍摄类型提示 */
    MsgKey.movie_type_tips = "movie_type_tips";
    /** 1124  拍摄 --- 拍摄1阶段提示 */
    MsgKey.movie_state_tips1 = "movie_state_tips1";
    /** 1125  拍摄 --- 拍摄2阶段提示 */
    MsgKey.movie_state_tips2 = "movie_state_tips2";
    /** 1126  拍摄 --- 拍摄3阶段提示 */
    MsgKey.movie_state_tips3 = "movie_state_tips3";
    /** 1150  仓库 --- 拥有艺人提示 */
    MsgKey.bag_own_actor_tips = "bag_own_actor_tips";
    /** 1151  仓库 --- 合成物品不足提示 */
    MsgKey.bag_no_compound_tips = "bag_no_compound_tips";
    /** 1152  仓库 --- 未选择合成提示 */
    MsgKey.bag_no_compound_choose_tips = "bag_no_compound_choose_tips";
    /** 1153  仓库 --- 未选择赠送提示 */
    MsgKey.bag_no_send_choose_tips = "bag_no_send_choose_tips";
    /** 1154  仓库 --- 未选择拆分提示 */
    MsgKey.bag_no_split_choose_tips = "bag_no_split_choose_tips";
    /** 1155  仓库 --- 未选择出售提示 */
    MsgKey.bag_no_sell_choose_tips = "bag_no_sell_choose_tips";
    /** 1156  奥斯卡 --- 奥斯卡获奖发言标题 */
    MsgKey.oscar_presentation_title = "oscar_presentation_title";
    /** 1157  奥斯卡 --- 奥斯卡预设发言1 */
    MsgKey.oscar_default_presentation1 = "oscar_default_presentation1";
    /** 1158  奥斯卡 --- 奥斯卡预设发言2 */
    MsgKey.oscar_default_presentation2 = "oscar_default_presentation2";
    /** 1159  奥斯卡 --- 奥斯卡预设发言3 */
    MsgKey.oscar_default_presentation3 = "oscar_default_presentation3";
    /** 1160  拍摄 --- 上映第N天 */
    MsgKey.movie_day = "movie_day";
    /** 1161  拍摄 --- 上映天数 */
    MsgKey.movie_remaining_days = "movie_remaining_days";
    /** 1162  拍摄 --- 剧本时长 */
    MsgKey.movie_story_times = "movie_story_times";
    /** 1163  拍摄 --- 角色契合 */
    MsgKey.movie_character_coordination_tips = "movie_character_coordination_tips";
    /** 1164  拍摄 --- 剧本契合提示 */
    MsgKey.movie_story_coordination_tips = "movie_story_coordination_tips";
    /** 1165  仓库 --- 没有可赠送资产的艺人 */
    MsgKey.bag_send_no_target = "bag_send_no_target";
    /** 1166  拍摄 --- 电影下映收益时间提示 */
    MsgKey.movie_off_line_remaining_time = "movie_off_line_remaining_time";
    /** 1167  拍摄 --- 电影下映收益提示 */
    MsgKey.movie_off_line_gain_tips = "movie_off_line_gain_tips";
    /** 1168  拍摄 --- 许可证上限提示 */
    MsgKey.movie_licence_limit_tips = "movie_licence_limit_tips";
    /** 1169  拍摄 --- 城市收益解锁提示 */
    MsgKey.movie_city_unlock_tips = "movie_city_unlock_tips";
    /** 1170  拍摄 --- 电影下映收益评价 */
    MsgKey.movie_off_line_gain_evaluation = "movie_off_line_gain_evaluation";
    /** 1171  拍摄 --- 电影下映收益提示 */
    MsgKey.movie_off_line_tips = "movie_off_line_tips";
    /** 1172  拍摄 --- 确认拍摄 */
    MsgKey.movie_confirm = "movie_confirm";
    /** 1173  训练 --- 训练室等级 */
    MsgKey.train_title_level = "train_title_level";
    /** 1174  训练 --- 训练经验加成 */
    MsgKey.train_title_tips = "train_title_tips";
    /** 1175  训练 --- 训练剩余时间 */
    MsgKey.train_remaining_times = "train_remaining_times";
    /** 1176  训练 --- 训练位提示 */
    MsgKey.train_area_tips = "train_area_tips";
    /** 1177  训练 --- 训练经验提示 */
    MsgKey.train_exp = "train_exp";
    /** 1178  训练 --- 训练艺人气泡 */
    MsgKey.train_actor_tips = "train_actor_tips";
    /** 1179  合作 --- 赠送金币美元 */
    MsgKey.cooperated_send = "cooperated_send";
    /** 1180  拍摄 --- 许可证获取提示 */
    MsgKey.movie_licence_get_tips = "movie_licence_get_tips";
    /** 2022  订单 --- 订单完成失败 */
    MsgKey.order_fail = "order_fail";
    /** 2023  订单 --- 查看未解锁的订单完成度 */
    MsgKey.order_complete = "order_complete";
    /** 2024  订单 --- 已领取的奖励提示 */
    MsgKey.order_received = "order_received";
    /** 2025  订单 --- npc默认提示 */
    MsgKey.order_npc_default = "order_npc_default";
    /** 2026  公务 --- 公务倒计时 */
    MsgKey.business_countdown = "business_countdown";
    /** 2027  公务 --- 自动批阅没有秘书 */
    MsgKey.business_secretary = "business_secretary";
    /** 2028  公务 --- 全部公务批阅完毕 */
    MsgKey.business_down = "business_down";
    /** 2029  探班 --- 探班倒计时 */
    MsgKey.visit_countdown = "visit_countdown";
    /** 2030  探班 --- 自动接待没有秘书 */
    MsgKey.visit_secretary = "visit_secretary";
    /** 2031  探班 --- 探班操作提示 */
    MsgKey.visit_point = "visit_point";
    /** 2032  市场 --- 艺人国籍不对 */
    MsgKey.market_envoy_wrong1 = "market_envoy_wrong1";
    /** 2033  市场 --- 艺人类型不对 */
    MsgKey.market_envoy_wrong2 = "market_envoy_wrong2";
    /** 2034  市场 --- 艺人年龄不对 */
    MsgKey.market_envoy_wrong3 = "market_envoy_wrong3";
    /** 2035  市场 --- 艺人数值不达标 */
    MsgKey.market_envoy_wrong4 = "market_envoy_wrong4";
    /** 1045  市场 --- 艺人性别不对 */
    MsgKey.market_envoy_wrong5 = "market_envoy_wrong5";
    /** 1046  市场 --- 美元不足 */
    MsgKey.market_dollar_less = "market_dollar_less";
    /** 1047  市场 --- 路演失败 */
    MsgKey.market_show_failure = "market_show_failure";
    /** 2036  剧本 --- 留言内容非法 */
    MsgKey.story_comment_wrong = "story_comment_wrong";
    /** 2037  剧本 --- 点赞数不足 */
    MsgKey.thumbsup_less = "thumbsup_less";
    /** 2038  剧本 --- 搜罗次数不足 */
    MsgKey.story_search_less = "story_search_less";
    /** 2039  剧本 --- 街区等级需求 */
    MsgKey.block_level_less = "block_level_less";
    /** 2040  剧本 --- 搜罗冷却加速成功 */
    MsgKey.story_cd_success = "story_cd_success";
    /** 2041  会议 --- 会议倒计时提示 */
    MsgKey.meeting_time = "meeting_time";
    /** 2042  秘书 --- 本日已购买提示 */
    MsgKey.secretary_bought = "secretary_bought";
    /** 2043  秘书 --- 购买失败提示 */
    MsgKey.secretary_buy_fail = "secretary_buy_fail";
    /** 2044  秘书 --- 未聘用秘书不能购买提示 */
    MsgKey.sectrary_cannot_buy = "sectrary_cannot_buy";
    /** 2045  签到 --- 已签到提示 */
    MsgKey.daily_sign = "daily_sign";
    /** 2046  设置 --- 功能未开放提示 */
    MsgKey.setting_not_open = "setting_not_open";
    /** 2047  设置 --- 礼包兑换成功提示 */
    MsgKey.gift_success = "gift_success";
    /** 2048  设置 --- 礼包已被兑换提示 */
    MsgKey.gift_used = "gift_used";
    /** 2049  设置 --- 礼包码非法提示 */
    MsgKey.gift_illegal = "gift_illegal";
    /** 2050  商城 --- 购买非时间段内商品 */
    MsgKey.shop_period = "shop_period";
    /** 2051  生产 --- 立即完成时档位提示 */
    MsgKey.produce_down = "produce_down";
    /** 2052  生产 --- 升级生产线建筑等级不够 */
    MsgKey.produce_produce_limit = "produce_produce_limit";
    /** 2053  设置 --- 玩家ID */
    MsgKey.player_id = "player_id";
    /** 2054  设置 --- 版本号 */
    MsgKey.version_num = "version_num";
    /** 2055  设置 --- 选择语言 */
    MsgKey.choose_language = "choose_language";
    /** 2056  设置 --- 简中 */
    MsgKey.CHS = "CHS";
    /** 2057  设置 --- 繁中 */
    MsgKey.CHT = "CHT";
    /** 2058  设置 --- 英语 */
    MsgKey.EN = "EN";
    /** 2059  设置 --- 切换语言确认 */
    MsgKey.choose_language_confirm = "choose_language_confirm";
    /** 2060  设置 --- 反馈 */
    MsgKey.feedback_title = "feedback_title";
    /** 2061  设置 --- 反馈文字 */
    MsgKey.feedback_words = "feedback_words";
    /** 2062  设置 --- Q群 */
    MsgKey.Qgroup = "Qgroup";
    /** 2063  设置 --- 微信 */
    MsgKey.Wechat = "Wechat";
    /** 2064  设置 --- 微博 */
    MsgKey.Weibo = "Weibo";
    /** 2065  设置 --- 邮箱 */
    MsgKey.mailbox = "mailbox";
    /** 2066  设置 --- 兑换标题 */
    MsgKey.exchange_title = "exchange_title";
    /** 2067  设置 --- 兑换码输入框 */
    MsgKey.exchange_input = "exchange_input";
    /** 2068  设置 --- 兑换按钮 */
    MsgKey.exhange_button = "exhange_button";
    /** 2069  设置 --- 设置标题 */
    MsgKey.setting_title = "setting_title";
    /** 2070  设置 --- 设置提示 */
    MsgKey.setting_notice = "setting_notice";
    /** 2071  会议 --- 会议开始对话 */
    MsgKey.meeting_wait = "meeting_wait";
    /** 2072  会议 --- 会议目的1 */
    MsgKey.meeting_goal1 = "meeting_goal1";
    /** 2073  会议 --- 会议目的2 */
    MsgKey.meeting_goal2 = "meeting_goal2";
    /** 2074  会议 --- 会议目的3 */
    MsgKey.meeting_goal3 = "meeting_goal3";
    /** 2075  会议 --- 会议目的4 */
    MsgKey.meeting_goal4 = "meeting_goal4";
    /** 2076  会议 --- 平局 */
    MsgKey.meeting_fair = "meeting_fair";
    /** 2077  会议 --- 胜利 */
    MsgKey.meeting_win = "meeting_win";
    /** 2078  会议 --- 失败，谈判破裂 */
    MsgKey.meeting_lose1 = "meeting_lose1";
    /** 2079  会议 --- 失败，奖励减半 */
    MsgKey.meeting_lose2 = "meeting_lose2";
    /** 2080  剧本库 --- 剧本库未解锁 */
    MsgKey.story_stack_locked = "story_stack_locked";
    /** 2081  生产 --- 生产线解锁条件不够 */
    MsgKey.produce_lock = "produce_lock";
    /** 2082  会议 --- 会议弹窗文字 */
    MsgKey.meeting_goal = "meeting_goal";
    /** 2083  会议 --- 会议比试文字 */
    MsgKey.meeting_battle = "meeting_battle";
    /** 2084  会议 --- 会议主管开场白 */
    MsgKey.meeting_boss_hello = "meeting_boss_hello";
    /** 2085  会议 --- 会议客户开场白1 */
    MsgKey.meeting_client_hello1 = "meeting_client_hello1";
    /** 2086  会议 --- 会议客户开场白2 */
    MsgKey.meeting_client_hello2 = "meeting_client_hello2";
    /** 2087  会议 --- 讨价还价主管台词 */
    MsgKey.meeting_bargain1_boss = "meeting_bargain1_boss";
    /** 2088  会议 --- 讨价还价客户台词 */
    MsgKey.meeting_bargain1_client = "meeting_bargain1_client";
    /** 2089  会议 --- 漫天要价主管台词 */
    MsgKey.meeting_bargain2_boss = "meeting_bargain2_boss";
    /** 2090  会议 --- 漫天要价客户台词 */
    MsgKey.meeting_bargain2_client = "meeting_bargain2_client";
    /** 2091  会议 --- 谈判成功/平局主管台词 */
    MsgKey.meeting_bargain_not_fail_boss = "meeting_bargain_not_fail_boss";
    /** 2092  会议 --- 谈判成功/平局客户台词 */
    MsgKey.meeting_bargain_not_fail_client = "meeting_bargain_not_fail_client";
    /** 2093  会议 --- 谈判失败主管台词 */
    MsgKey.meeting_bargain_fail_boss = "meeting_bargain_fail_boss";
    /** 2094  会议 --- 谈判失败客户台词 */
    MsgKey.meeting_bargain_fail_client = "meeting_bargain_fail_client";
    /** 2095  通用 --- 天数计数 */
    MsgKey.day_count = "day_count";
    /** 2100  福利 --- 每日签到标题 */
    MsgKey.daily_sign_title = "daily_sign_title";
    /** 2101  福利 --- 终身秘书标题 */
    MsgKey.secretary_title = "secretary_title";
    /** 2102  福利 --- 申请许可证标题 */
    MsgKey.permition_title = "permition_title";
    /** 2103  福利 --- 月卡标题 */
    MsgKey.month_card_title = "month_card_title";
    /** 2096  会议 --- 会议中场说明 */
    MsgKey.meeting_midtime = "meeting_midtime";
    /** 2104  通用 --- 时长 */
    MsgKey.day_duration = "day_duration";
    /** 2105  七日 --- 超时提示 */
    MsgKey.time_out_sevendays = "time_out_sevendays";
    /** 2106  月卡 --- 月卡名 */
    MsgKey.month_card_type1 = "month_card_type1";
    /** 2107  月卡 --- 至尊月卡名 */
    MsgKey.month_card_type2 = "month_card_type2";
    /** 2108  月卡 --- 首次购买 */
    MsgKey.month_card_firstbuy = "month_card_firstbuy";
    /** 2109  月卡 --- 购买 */
    MsgKey.month_card_buy = "month_card_buy";
    /** 2110  月卡 --- 每日赠礼 */
    MsgKey.month_card_daily_gift = "month_card_daily_gift";
    /** 2111  月卡 --- 赠礼合同说明 */
    MsgKey.month_card_contracts_info = "month_card_contracts_info";
    /** 2112  通用 --- 购买通用字样 */
    MsgKey.icon_buy = "icon_buy";
    /** 2113  通用 --- 剩余天数 */
    MsgKey.days_left = "days_left";
    /** 2114  月卡 --- 特供礼包标题 */
    MsgKey.month_card_special_package1_title = "month_card_special_package1_title";
    /** 2115  月卡 --- 特供礼包标题 */
    MsgKey.month_card_special_package2_title = "month_card_special_package2_title";
    /** 2116  月卡 --- 未拥有月卡 */
    MsgKey.month_card_not_owned1 = "month_card_not_owned1";
    /** 2117  月卡 --- 未拥有至尊月卡 */
    MsgKey.month_card_not_owned2 = "month_card_not_owned2";
    /** 2118  票房目标 --- 进度条文字 */
    MsgKey.box_target_progress1 = "box_target_progress1";
    /** 2119  票房目标 --- 进度条文字 */
    MsgKey.box_target_progress2 = "box_target_progress2";
    /** 2120  票房目标 --- 进度条文字 */
    MsgKey.box_target_progress3 = "box_target_progress3";
    /** 2121  票房目标 --- 进度条文字 */
    MsgKey.box_target_progress4 = "box_target_progress4";
    /** 2122  票房目标 --- 进度条文字 */
    MsgKey.box_target_progress5 = "box_target_progress5";
    /** 2123  通用 --- 许可证上限提示 */
    MsgKey.license_limit = "license_limit";
    /** 2124  许可证申请 --- 未拥有秘书不能申请许可 */
    MsgKey.license_apply_secretary_not_owned = "license_apply_secretary_not_owned";
    /** 2125  合作订单 --- 没有合作订单 */
    MsgKey.cooperative_order_no = "cooperative_order_no";
    /** 2126  合作订单 --- 合作订单成功后提示对方 */
    MsgKey.cooperative_order_notice = "cooperative_order_notice";
    /** 2127  合作订单 --- 装填第二个订单 */
    MsgKey.cooperative_order_repeat = "cooperative_order_repeat";
    /** 2128  秘书 --- 秘书体验次数用尽 */
    MsgKey.secretary_experience = "secretary_experience";
    /** 2129  秘书 --- 前往聘用 */
    MsgKey.go_to_hire = "go_to_hire";
    /** 2130  秘书 --- 未聘用秘书 */
    MsgKey.secretary_not_owned = "secretary_not_owned";
    /** 2131  生产 --- 特殊生产线已达上限 */
    MsgKey.produce_special = "produce_special";
    /** 2132  探班 --- 探班找错人1 */
    MsgKey.visit_wrong1 = "visit_wrong1";
    /** 2133  探班 --- 探班找错人2 */
    MsgKey.visit_wrong2 = "visit_wrong2";
    /** 2134  探班 --- 探班找错人3 */
    MsgKey.visit_wrong3 = "visit_wrong3";
    /** 2135  生产 --- 生产艺人鼓舞建筑限制 */
    MsgKey.produce_inspire_buildlock = "produce_inspire_buildlock";
    /** 2136  生产 --- 生产艺人鼓舞生产线等级限制 */
    MsgKey.produce_inspire_linelock = "produce_inspire_linelock";
    /** 2137  探班 --- 没有艺人 */
    MsgKey.visit_noone = "visit_noone";
    /** 2138  秘书 --- 小秘书随即对话1 */
    MsgKey.secretary_talk1 = "secretary_talk1";
    /** 2139  秘书 --- 小秘书随即对话2 */
    MsgKey.secretary_talk2 = "secretary_talk2";
    /** 2140  秘书 --- 功能标题（无秘书） */
    MsgKey.secretary_title1 = "secretary_title1";
    /** 2141  秘书 --- 功能标题（有秘书） */
    MsgKey.secretary_title2 = "secretary_title2";
    /** 2142  秘书 --- 已拥有小秘书 */
    MsgKey.secretary_owned = "secretary_owned";
    /** 2143  市场 --- 市场解锁第5个大使 */
    MsgKey.market_ambassador = "market_ambassador";
    /** 2144  秘书 --- 秘书福利已领取提示 */
    MsgKey.secretary_gift_received = "secretary_gift_received";
    /** 2145  秘书 --- 小秘书权益说明1 */
    MsgKey.secretary_rights1 = "secretary_rights1";
    /** 2146  秘书 --- 小秘书权益说明2 */
    MsgKey.secretary_rights2 = "secretary_rights2";
    /** 2147  秘书 --- 小秘书权益说明3 */
    MsgKey.secretary_rights3 = "secretary_rights3";
    /** 2148  秘书 --- 小秘书权益说明4 */
    MsgKey.secretary_rights4 = "secretary_rights4";
    /** 2149  秘书 --- 小秘书权益说明5 */
    MsgKey.secretary_rights5 = "secretary_rights5";
    /** 2150  秘书 --- 小秘书权益说明6 */
    MsgKey.secretary_rights6 = "secretary_rights6";
    /** 2151  秘书 --- 小秘书权益说明7 */
    MsgKey.secretary_rights7 = "secretary_rights7";
    /** 2152  秘书 --- 小秘书权益说明8 */
    MsgKey.secretary_rights8 = "secretary_rights8";
    /** 2153  秘书 --- 小秘书权益说明9 */
    MsgKey.secretary_rights9 = "secretary_rights9";
    /** 2154  秘书 --- 小秘书权益说明10 */
    MsgKey.secretary_rights10 = "secretary_rights10";
    /** 2155  秘书 --- 自动市场宣传 */
    MsgKey.secretary_auto1 = "secretary_auto1";
    /** 2156  秘书 --- 自动接待粉丝 */
    MsgKey.secretary_auto2 = "secretary_auto2";
    /** 2157  秘书 --- 自动批阅公务 */
    MsgKey.secretary_auto3 = "secretary_auto3";
    /** 2158  聊天 --- 聊天间隔小于5s */
    MsgKey.chat_notime = "chat_notime";
    /** 2159  聊天 --- 聊天消息为空 */
    MsgKey.chat_nomessage = "chat_nomessage";
    /** 2160  聊天 --- 聊天消息超出长度限制 */
    MsgKey.chat_moremessage = "chat_moremessage";
    /** 2161  聊天 --- 聊天没有喇叭 */
    MsgKey.chat_nospeaker = "chat_nospeaker";
    /** 2162  聊天 --- 点击未解锁的频道 */
    MsgKey.chat_unlock = "chat_unlock";
    /** 2163  聊天 --- 获得五星艺人系统提示1 */
    MsgKey.chat_5star1 = "chat_5star1";
    /** 2164  聊天 --- 获得五星艺人系统提示2 */
    MsgKey.chat_5star2 = "chat_5star2";
    /** 2165  聊天 --- 拍出大卖的系统提示 */
    MsgKey.chat_supersale = "chat_supersale";
    /** 2166  聊天 --- 公司改名的系统提示 */
    MsgKey.chat_rename = "chat_rename";
    /** 2167  转盘 --- 转盘全部转光 */
    MsgKey.Turntable_full = "Turntable_full";
    /** 2168  订单 --- 资助合作订单提示 */
    MsgKey.order_give = "order_give";
    /** 3001  艺人 --- 一般擅长 */
    MsgKey.actor_adept_lv1 = "actor_adept_lv1";
    /** 3002  艺人 --- 普通擅长 */
    MsgKey.actor_adept_lv2 = "actor_adept_lv2";
    /** 3003  艺人 --- 比较擅长 */
    MsgKey.actor_adept_lv3 = "actor_adept_lv3";
    /** 3004  艺人 --- 非常擅长 */
    MsgKey.actor_adept_lv4 = "actor_adept_lv4";
    /** 3005  拍摄 --- {0}火热上映中 */
    MsgKey.movie_play = "movie_play";
    /** 3006  艺人 --- 训练室没有建立 */
    MsgKey.actor_trainingroom = "actor_trainingroom";
    /** 3007  许可证申请 --- 小秘书桌牌1 */
    MsgKey.license_apply_table1 = "license_apply_table1";
    /** 3008  许可证申请 --- 小秘书桌牌2 */
    MsgKey.license_apply_table2 = "license_apply_table2";
    /** 3009  许可证申请 --- 小秘书桌牌3 */
    MsgKey.license_apply_table3 = "license_apply_table3";
    /** 3010  许可证申请 --- 小秘书桌牌4 */
    MsgKey.license_apply_table4 = "license_apply_table4";
    /** 3011  许可证申请 --- 小秘书对话1 */
    MsgKey.license_apply_dialog1 = "license_apply_dialog1";
    /** 3012  许可证申请 --- 小秘书对话2 */
    MsgKey.license_apply_dialog2 = "license_apply_dialog2";
    /** 3013  许可证申请 --- 小秘书对话3 */
    MsgKey.license_apply_dialog3 = "license_apply_dialog3";
    /** 3014  许可证申请 --- 申请按钮 */
    MsgKey.license_apply_button1 = "license_apply_button1";
    /** 3015  许可证申请 --- 申请按钮 */
    MsgKey.license_apply_button2 = "license_apply_button2";
    /** 3016  许可证申请 --- 申请中说明文本 */
    MsgKey.license_apply_info = "license_apply_info";
    /** 3017  许可证申请 --- 申请数量用完 */
    MsgKey.license_apply_limit = "license_apply_limit";
    /** 3018  许可证申请 --- 许可证申请数量 */
    MsgKey.license_apply_limit_num = "license_apply_limit_num";
    /** 3019  月份 --- 一月 */
    MsgKey.month1 = "month1";
    /** 3020  月份 --- 二月 */
    MsgKey.month2 = "month2";
    /** 3021  月份 --- 三月 */
    MsgKey.month3 = "month3";
    /** 3022  月份 --- 四月 */
    MsgKey.month4 = "month4";
    /** 3023  月份 --- 五月 */
    MsgKey.month5 = "month5";
    /** 3024  月份 --- 六月 */
    MsgKey.month6 = "month6";
    /** 3025  月份 --- 七月 */
    MsgKey.month7 = "month7";
    /** 3026  月份 --- 八月 */
    MsgKey.month8 = "month8";
    /** 3027  月份 --- 九月 */
    MsgKey.month9 = "month9";
    /** 3028  月份 --- 十月 */
    MsgKey.month10 = "month10";
    /** 3029  月份 --- 十一月 */
    MsgKey.month11 = "month11";
    /** 3030  月份 --- 十二月 */
    MsgKey.month12 = "month12";
    /** 3031  活动大厅 --- 当天充值金额不足 */
    MsgKey.eventhall_moneyless1 = "eventhall_moneyless1";
    /** 3032  活动大厅 --- 领取天数不足 */
    MsgKey.eventhall_daysless = "eventhall_daysless";
    /** 3033  活动大厅 --- 累计充值金额不足 */
    MsgKey.eventhall_moneyless2 = "eventhall_moneyless2";
    /** 3034  活动大厅 --- 领取积分不足 */
    MsgKey.eventhall_scoreless2 = "eventhall_scoreless2";
    /** 3035  活动大厅 --- 培养活动介绍 */
    MsgKey.eventhall_scoretext1 = "eventhall_scoretext1";
    /** 3036  活动大厅 --- 培养问号详情 */
    MsgKey.eventhall_scoretext2 = "eventhall_scoretext2";
    /** 3037  活动大厅 --- 培养活动条件 */
    MsgKey.eventhall_scoretext3 = "eventhall_scoretext3";
    /** 3038  活动大厅 --- 星探活动介绍 */
    MsgKey.eventhall_scoretext4 = "eventhall_scoretext4";
    /** 3039  活动大厅 --- 星探问号详情 */
    MsgKey.eventhall_scoretext5 = "eventhall_scoretext5";
    /** 3040  活动大厅 --- 星探活动条件 */
    MsgKey.eventhall_scoretext6 = "eventhall_scoretext6";
    /** 2169  通用 --- 计分面板 */
    MsgKey.scoring_format = "scoring_format";
    /** 2170  任务 --- 任务未完成提示 */
    MsgKey.task_unfinished = "task_unfinished";
    /** 2171  任务 --- 任务底部滚动文字 */
    MsgKey.task_bottom = "task_bottom";
    /** 2172  活动大厅 --- 累计消耗钻石不足 */
    MsgKey.eventhall_diamondless2 = "eventhall_diamondless2";
    /** 2173  探班 --- 艺人无法接待 */
    MsgKey.visit_stop = "visit_stop";
    /** 2174  登陆 --- 名称、密码长度不对 */
    MsgKey.account_load_long = "account_load_long";
    /** 2175  登陆 --- 账号已被注册 */
    MsgKey.account_load_again = "account_load_again";
    /** 2176  登陆 --- 登录失败 */
    MsgKey.account_load_wrong1 = "account_load_wrong1";
    /** 2177  登陆 --- 登录失败 */
    MsgKey.account_load_wrong2 = "account_load_wrong2";
    return MsgKey;
}());
//# sourceMappingURL=MsgKey.js.map