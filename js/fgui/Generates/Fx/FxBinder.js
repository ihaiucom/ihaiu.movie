/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var fgui;
(function (fgui) {
    var Fx;
    (function (Fx) {
        var FxBinder = /** @class */ (function () {
            function FxBinder() {
            }
            FxBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_actor_skill.URL, Fx.Effect_actor_skill);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Starfly.URL, Fx.Starfly);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_fireworks_light01.URL, Fx.Effect_fireworks_light01);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Starboom.URL, Fx.Starboom);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_levelup_word.URL, Fx.Effect_levelup_word);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Starshanshan.URL, Fx.Starshanshan);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_fireworks_light02.URL, Fx.Effect_fireworks_light02);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Fireworks_spotlights0001.URL, Fx.Fireworks_spotlights0001);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Fireworks_spotlights0002.URL, Fx.Fireworks_spotlights0002);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Fireworks_spotlights_all.URL, Fx.Fireworks_spotlights_all);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Fireworks_spotlights0003.URL, Fx.Fireworks_spotlights0003);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Fireworks_spotlights0004.URL, Fx.Fireworks_spotlights0004);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_fireworks002.URL, Fx.Effect_fireworks002);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Starboom_allneed.URL, Fx.Starboom_allneed);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Fireworks_level_up.URL, Fx.Fireworks_level_up);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Fireworks_successful.URL, Fx.Fireworks_successful);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Fireworks_level_up_002.URL, Fx.Fireworks_level_up_002);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Fireworks_congrats.URL, Fx.Fireworks_congrats);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Particle.URL, Fx.Particle);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Starboom002.URL, Fx.Starboom002);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Particle_01.URL, Fx.Particle_01);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Particle_all.URL, Fx.Particle_all);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Particle_02.URL, Fx.Particle_02);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Particle_03.URL, Fx.Particle_03);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Particle_04.URL, Fx.Particle_04);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Smoke003.URL, Fx.Smoke003);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Beat01.URL, Fx.Beat01);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Beat02.URL, Fx.Beat02);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_Oscar_Choose02.URL, Fx.Effect_Oscar_Choose02);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_Oscar_particle.URL, Fx.Effect_Oscar_particle);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_Oscar_light02.URL, Fx.Effect_Oscar_light02);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_MovieTarget_Failed.URL, Fx.Effect_MovieTarget_Failed);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_Movie_Earnings.URL, Fx.Effect_Movie_Earnings);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_Oscar_particle2323.URL, Fx.Effect_Oscar_particle2323);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Particle_02333.URL, Fx.Particle_02333);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_Oscar_Choose01.URL, Fx.Effect_Oscar_Choose01);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_fireworks_golden.URL, Fx.Effect_fireworks_golden);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_fireworks_light03.URL, Fx.Effect_fireworks_light03);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_filming02.URL, Fx.Effect_filming02);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_upgrade_01.URL, Fx.Effect_upgrade_01);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_flower01.URL, Fx.Effect_flower01);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_propagate_01.URL, Fx.Effect_propagate_01);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_pro002.URL, Fx.Effect_pro002);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_actor_skill_top.URL, Fx.Effect_actor_skill_top);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_actor_skill_transparent.URL, Fx.Effect_actor_skill_transparent);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_actor_skill_top_red.URL, Fx.Effect_actor_skill_top_red);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_actor_skill_top_blue.URL, Fx.Effect_actor_skill_top_blue);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_actor_skill_top_yellow.URL, Fx.Effect_actor_skill_top_yellow);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_actor_skill_top_gray.URL, Fx.Effect_actor_skill_top_gray);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Pro_drop.URL, Fx.Pro_drop);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_build02.URL, Fx.Effect_build02);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_actor_skill_diban22.URL, Fx.Effect_actor_skill_diban22);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.TrailerStar1.URL, Fx.TrailerStar1);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.TrailerStar2.URL, Fx.TrailerStar2);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.TrailerStar3.URL, Fx.TrailerStar3);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.TrailerStar4.URL, Fx.TrailerStar4);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Halo.URL, Fx.Halo);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.TrailerPaper1.URL, Fx.TrailerPaper1);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.TrailerPaper2.URL, Fx.TrailerPaper2);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.TrailerPaper3.URL, Fx.TrailerPaper3);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Heart_0000.URL, Fx.Heart_0000);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_actor_skill_top_win.URL, Fx.Effect_actor_skill_top_win);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_actor_skill_top_deuce.URL, Fx.Effect_actor_skill_top_deuce);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_actor_skill_top_lose.URL, Fx.Effect_actor_skill_top_lose);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_chapter.URL, Fx.Effect_chapter);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_story_unlock.URL, Fx.Effect_story_unlock);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Button_yellow_001.URL, Fx.Button_yellow_001);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_rotate_light.URL, Fx.Effect_rotate_light);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_num1.URL, Fx.Effect_num1);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_firework_blue.URL, Fx.Effect_firework_blue);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_firework_blue55.URL, Fx.Effect_firework_blue55);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Starboom_allneed.URL, Fx.Starboom_allneed);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_actor01.URL, Fx.Effect_actor01);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_starfly0222.URL, Fx.Effect_starfly0222);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_starfly0333.URL, Fx.Effect_starfly0333);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_starfly0223.URL, Fx.Effect_starfly0223);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_starfly0224.URL, Fx.Effect_starfly0224);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Heart_011.URL, Fx.Heart_011);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Heart_003.URL, Fx.Heart_003);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Heart_004.URL, Fx.Heart_004);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_show_55454.URL, Fx.Effect_show_55454);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Heart_01233.URL, Fx.Heart_01233);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Heart_005.URL, Fx.Heart_005);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Heart_77.URL, Fx.Heart_77);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_goldappear_01.URL, Fx.Effect_goldappear_01);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Starboom_blue.URL, Fx.Starboom_blue);
                fairygui.UIObjectFactory.setPackageItemExtension(Fx.Effect_fireworks_blue.URL, Fx.Effect_fireworks_blue);
            };
            return FxBinder;
        }());
        Fx.FxBinder = FxBinder;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FxBinder.js.map