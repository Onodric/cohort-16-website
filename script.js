$(window).on('load', ()=>{
  var list;
  $('#cohort-bios').hide()
  // Click-to-scroll for animated arrow
  $('#about-us').click(function () {
      $('html,body').animate({
          scrollTop: $(".meet-us--tiles").offset().top},
          'slow');
  });
  getItems().then( (response)=>{
    list = response;
    let $items = getItem(list);
    console.log($items);
    $('#cohort-bios').html( $items );
    $('#cohort-bios').show();
  });
  function getItem(items) {
    var list_of_people = '';
    $.each(items, (index, person)=>{
        list_of_people += `
          <div class="card col s10 offset-s1 col m4 offset-m1 col l3 offset-l1">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator person-image" src="${person.professionalPic}" alt="${person.name}">
               <span class="card-title activator">${person.name}</i></span>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i></span>
              <p><a href="${person.githubLink}"><i class="fa-github"></i></a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${person.name}<i class="material-icons right">close</i></span>
              <p>${person.aboutMe}</p>
            </div>
          </div>`
    });
    return $( list_of_people);
  }
  function getItems() {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: "classinfo.json",
      }).done(function(response) {
        let users = [];
        Object.keys(response).forEach( (key)=>{
          users.push(response[key]);
        });
        console.log("users", users);
        resolve(users[0]);
      }).fail(function(error) {
        reject(error);
      })
    });
  }
  $('.card').on('hover', (event)=>{
    console.log("event", event);
    $(this).find('> .card-image > img.activator').click();
    }, function() {
      $(this).find('> .card-reveal > .card-title').click();
    }
  );
  $('#search').keypress( (event)=>{
    if (event.which == 13){
      let search = $("#search").val();
      searchBios(search);
      $("#search").val("");
    }
  });
  $('#search-button').on("click", (event)=>{
    let search = $("#search").val();
    searchBios(search);
    $("#search").val("");
  });
  function searchBios(search_query){
    var found_bios = $.grep(list, (bio, index)=> {
          console.log(bio);
          if (bio.name.includes(search_query)){
            console.log("bio", bio);
            return bio
          }
          if (bio.aboutMe.includes(search_query)){
            console.log("bio", bio);
            return bio
          }
    });
    let $items = getItem(found_bios);
    console.log($items);
    $('#cohort-bios').html('');
    $('#cohort-bios').html( $items );
  }
});

  


var guy = [
  "                                               `                  `",
  "                                                   `              `   `",
  "                                              ``.```    . ``      `  `. `",
  "                                              ``````` ` ` `   ` . .  ``",
  "                                              ```. `.```.   ... ``..```` `",
  "                                      `  `   `` .`.`` ..`.``....`.`.`....` .",
  "                                      ` ..`  `. ..``.`....``....```.....``` `",
  "                                `    `.  ``.``.`.````.`.```...`.....``...````",
  "                                    ` .  ...`,..`..```...``.````. `.```.`` .`",
  "                                 .`  .````....`.````````````````````.````` ``",
  "                                . .` ``.`.`.``````````````````.``````````  `   `",
  "                               `.`` .```..`.````````````````````````````` `````",
  "                                `.` ...```.`````````````````````````````.``.`...",
  "                             ` ``..``````````````````````````````````````.`.``.`   `",
  "                              ``````.`````````````````````````````````` ``..```  `.",
  "                               ``..``````````````` .````````````````````.`..``` . `",
  "                         .`  `` .`.``.```.``````````.```````````````````.``...`.  `",
  "                          .``` .`.```````````````````````````````````````````.`. ``",
  "                         ` ```` ....````````````..````` ```````````````````````.`.  `",
  "                         ` ````..``````` ```````.`````` ````````` `````````..`..`.",
  "                        . ` `.  ``.```````````````````` ```.````` `````.```.``..`. .",
  "                         ` ``` `````` ``````````.``````````.````````.``.```.``..`.```",
  "                        `` ``.   ````````` ``````````````..`````````.```. `````.`..``",
  "                       `````.` ` ``````````.` ` ````````````````.` `.``.`````````. `.",
  "                       `   `.`  `````` ````.```````````````.`.```````````````````.``.`",
  "                     ```   `.````````` ``` ``````````````````````````````````````...``",
  "                      ```    `.`````` `````````.``````.````.``````````````````````.``.",
  "                      `.` `.`  ````````````.````````.`````````````````````` ````````.`",
  "                       ` ` ```   ``` ```  `.``````````.```.`..``..``.``````  `````.`..",
  "                        ``````. `````` `` ``````.``.``.`````..``````.````.`` ``````... `",
  "                        ```````..```````` ````.`.```````````..````````.```````````..``",
  "                        `.````` ` ````` `  `````.``.``````....``````.`.`..````````.```..",
  "                        `````.````  ``` ``  ````````.````.``..`.` ````.`.``.`````````.``",
  "                     ` `` `.`.`` `     ` ` ```.`````````````.``.``.`.`...``....``````.` `",
  "                       ``..```````` ` `. ``````...`````````````.`.`.`.....,,....````..`",
  "                      `.`,``````.```   `` ` .```..`````````.```````..,,...,,,,...```````",
  "                      `.`.`` ```````   ``````.`````````````````..`........,,,,...`````.````",
  "                       `.``.```````` ` ``.`..``.`....````````............,,,,,,..`````.",
  "                     ` ...`````````` `````.`.......`````````..`..`.......,,,,,,.`..`.`. `",
  "                      ``..`````````````.`..........`````````````........,.,,,,,........`",
  "                      ``````````````````.............````````````........,,,,,,.`.......",
  "                      .````. ``` `` `.....``.......`.````````````........,,,,,,,.....`.`",
  "                      `` `` ```` `````.............``````````````.......,,,,,,:,.......``",
  "                       ``.``  ``` ````................``````````.......,,,,,:,,,...`...`",
  "                     ` .`````  ``.````................`````````........,,.,,:,::,......`",
  "                     ``````````` `````.................```````.........,,,,,:,,:..`..,.`",
  "                      ```.``````` ```....................```..........,,,,,,,,::,.`.....`",
  "                      . `.``````..````.......,............``.........,,,,,,,,,,:,...,...",
  "                      `.  ``````.`.````.,.............................,,,,,,,:,:,....,..`",
  "                       `. `````..`.````.,...,........................,,,,,,,,,,::,...,..",
  "                      ``.``````....```..,,.,,,,......................,,,,,,,,,:::,,.,,.`",
  "                      `````````.``.```...,.,,,,,....................,,,,,,,,,,,::,,,.,,`",
  "                       `.``.`.``..``.....,.,..,,,....................,,,,,,,,,,:::,.,.,,",
  "                       .```.`..``.```.``.,.,,.,,,,,..................,,,,,,,,,,:::,,.,,`",
  "                      ` .```.........``..,,,,,,,.....................,,,,,,,,,,:::,,..,`",
  "                      `` `.````,`,`.```..,,,..,,,.......................,,,,,,,,:::,..,",
  "                       `````````.`..``...,,,.,,,........................,.,,,,,,:::;,.,.",
  "                       .`....````,..`.`.,,,,,,,,,........................,,,,,,::::',.,.",
  "                       ```.... ``.`..`.`,,,,,,,,.,.......................,,,,,,::::;:,,.",
  "                       ```.,..` ```.. `..,,,,,,,,.,......................,,,,,,,:::;;,:;.",
  "                       ``...,,,..``.`.`..,,,,,,,,.......................,,,,,,,:::::;,.;`",
  "                        ````,,.,,..`.`...,,,,,,,,..........`..........,,,,,,,,,,::::;,.:`",
  "                         `.``...`..```.`.,,,,,,,,....................,,,,,,,,,::::::;:,;.",
  "                         `.``.`.,``...`.,,,,,,,,,...................,,,,,,::;;;';;::::,;,",
  "                         ......`````...,:,,,,,,,,,..............,,,,,,:::'''''''''::::,:,",
  "                         `.....,.......,,,,,,,,,.,,......,,...,,,,,,::;;'++++++''';:::,,,",
  "                        `..````.......,:,,,,,,,,..,..,...,,,,,,,,,,,:;'++##++''';;;:::,,.",
  "                          ..``..`..,,:,,,,,,,,,,...,,,..,,:,,,,,,,,,:;'+++'';;;;::;::::.`",
  "                         `..,.`..,..,,:,,,,,,,,,,,.,,,::::::::,::,,:;'''';;;;;;;:::::::,`",
  "                         `.,,..,,,...:,,,,,,,,:,::::;;''';;::::,::::;;'''+####++;::::::,`",
  "                         ``.,:,,,.`..,,,,,,,,,::;;;''+++''';;::,,,,:;''++#@@@####;:::::,.`",
  "                          .,:;,,,,.:.:,,,,,,,:;''''++++++';;;::,,,:;'+'''@'@@#+++';::::,,",
  "                          ..';',,.:.,,,,,,,,:;;'''+''+';;;;;;;:,,,:;'+'###+';'';;'::,:::.",
  "                           `:::;:,,...,,,,,,;;'''';;:;;;;;;;;;:,..,;+##';;:;;;::::::,,::`",
  "                           ,::,,::....,.,,,,;;;;;;:::'#++;;;;;:...,;++';;:::::::;:,:,::;`",
  "                           ,;;:,,.....,,.,,:;;;;:;;+@@@'+'';;':.`.,:''';:::::::;:,,,,::;",
  "                           .;;':::....,,,,,:;;;;;+##@@#+###'';:.`..,;;;;;;;;;;;;:,,:,,:;",
  "                           `;;+':,....,,..,:;;;;###@+#+'';;:;::.`..,,;:::;;;;;:.,,:,:::;`",
  "                            ;;'';,,....,,,,,:;;+++';::;;::;;;,:....,,,::,,,:,,...,,::::;,",
  "                            :;;'',..,...,,,,:;;;,:,,:,::;;;::,,......,:,,,.......,,,::,;:",
  "                            :';;':....,,,,::::;:,,,,,,:;;;:::,.....,.,,,,........,,,::,;:",
  "                            .;:;;:.,,,,,,,,:,.,,:,,:::;;::,:,,......,,,,,........,,,,:,;:",
  "                             :;;;;,..,,,,,,...,.,:::;;;;:,,,,...``..,..,,........,,,,:,;:",
  "                             :;;::,,,,,,,,,..,.,,::;;::,.,,,,...```..,,:,,........,,,,,:;",
  "                             .:::;:.:,,,,,,,,.,,............,..`.``.,,:;:,,.......,,,,,:;",
  "                              ,:::;:,:,,,,,,,.....``.`.........````..,;'';,......,,,,,,,:",
  "                              :;,:;::,,:,,,,......````.`....,,,.```..,;;'',,,,,,.,,,,,,,'",
  "                              ,:.:;:::,,,,,,.....````````...,:,,````.,;,,#':,,,,,,,,,,,,.,",
  "                               ,,:;:;:::,,,,,....`````````.,:::,.```.,,.,:+;:,,,,,,,,,,,.,",
  "                               ,:,,::::,:,,,.....````````.,:,,:,..``..,..,'';:,,,,:::,,:,`",
  "                               ,,:,:::::,,,,......``````..::...,..``..,,,,'';;,,:,:::,::,`",
  "                               ,.:,,::::,,,,.............,;:......```.,,,,''';:,::::::::,,",
  "                                ,.,,::::,,,,............,:;:......``..,,,,''';::::::;::::'",
  "                                ,..,::::,,,,,..........,:;::.........,,.:#''';;:::;;;;;;;`",
  "                                ,.,,:::,,,,,..........,:;;::,,,,,...,,:;##';'+;:::;;;;;;:",
  "                                `..,::::,,,,,,,.......::;;:::::::,,,,:;###':;+':::;;;;;;:",
  "                                 ..,::::,,,,,,,,,....,:;';::''';:::::;'##+;';'+;::;;;;;;:",
  "                                 :,,:::,,:,,,,,,,,...,:;;:::;'++';;;;;##+#''+++;;;;;;;;;,",
  "                                  ,,:::,,,:,,,,,,,,,,:;';;:;;+##++'''###++++'++';;;;;;;;.",
  "                                 `.:::::,:,:,::,,,,,::;';;;;;'+#+##++###++''++++;:;;;';;`",
  "                                 . `,:::::::::::::,,::;'';;;;'++++#+'+#+++':'+++;::;;;;;",
  "                                 ,  '::::::::::::::::;'''';;;''+++##'++'+';;++++;::;;;;'",
  "                                 :  +:::::::::;::::::;'+';;';'+++++++++''''#+'++;:;;;;;'",
  "                                 .  +:;::::::;:::;::;'+++''';'''+'++';;'';@#++++::;;';;:",
  "                                  :.+;;;:::::::;;:::;'+++''':;;;'';;;'';,;@#++++;:';;;'`",
  "                                  ,::;;;::;:::::;:::;++++''';;;;;;''';;::@##+'++;:;';;'",
  "                                   ':;;;;;;:;:;;;:::;+++#@;,,:,,,,.:.,::@@#+';'+:;;;;;'",
  "                                   #@';;;;:::::::;:::'+#+#@;,,.,.,`:,,'#@#+';;'+;;;;;',",
  "                                   +#:;;;;;;::::;::::;++'##@@#+#::.,'#####+';;'+'';;;'",
  "                                   ;@,;;;;;;;::;;:::::++';+#####++######++';;;;+''';;'",
  "                                   #@;';;;;;;::::::,,:;+;::'+##++++#+'#+'';;;:;++';;;,",
  "                                  `##@+;;;;;;::::;::,,;+::::;;'++''+++'';;;;;;;++'';;#@+",
  "                                  .;@#:';;';;:::::::,,;+;::,:::;;;'';;::;:;;:;;++';''@@@@@@@:`",
  "                                  ,+@@,';;;;;;::::;:,,;+;,,,,::,.,::,,:;;::::;;++';;'@@@@@@####@#;,;,`",
  "                                  ,+#@+';;'';;;:::::::;+;:,::,::,,..,::;;::::;'++';;'@@@@@@@@@@#######@@@:`",
  "                                  ,+###,';;'';;::::::,:+::,,::,::,,,,::;::::::;++';;'#@@@@@@##@##@@@@######@:`",
  "                                  .+;##:';;'';;;::::::;+',,,:::,,,,,:::;,:::::'++';''@@@@@@@@###@#############@;  `",
  "                                  .'+#@#;;;;;;;;::::;::+':,,,,::,,,:,::,:,,:::'+#;;;'@@@@@@@@#####################@@",
  "                                  .':;@#,';;'';;:::;:::+'::,,,:::,,::,,...,,::'+#;;;'@@@@@@@@#######################@",
  "                                  `+@;+##'';;;;;:::::;;+'::.,,,,..,,,...,,,:::'+#';;'@#@@@@@#@#######################@",
  "                                  ;#@#'#@:';;;;;;;::::'+':,,,,,,....,....,,,::'+#';;'@#@@@@@#@########################+",
  "                                 ',+##+'@#:';;;;;:::::;++:,,,,,..,....,...,:,;'+++;;'@+#@@@@@@@########################'",
  "                                `#;+#+#++#++;;;;;::::,;#'',...,...,,,..,`.,,:;++#+;;'@##@@@@###@########################'",
  "                                ###:#'#+;@':+;;;;;::::;++':,.............,,,,;'###;;'@##@@@@@##@#########################'",
  "                               #### #'##+@@',';;;;:::::#+;:,,.......`....:,.:;+##+';'@#@@@@@@###@#########################+",
  "                              :####+:+@#+###+:;;;;;::,;+++;,,.,`,....`...,:,:'+#++;;+##+@@@@@##############################+",
  "                              ###### ##'###@##;;;;;:::'##+':,,...`....,,.,:,;;###+';#:@##@@@@###############################+",
  "                             +#######,#@###@@+#;;;;;:::+#+'::,..,,...,..,:::;'#+++';+:##+#@@@#################################",
  "                            .########.#@###@@#'@;;;;;;;+##+;::,.,,.,..,,.,:;;+#+##+'+#+@'#@@@##################################",
  "                            ########## @#@#@@##'@;;;;'++#++';;:,,,,,,,,,:,:'+##+#+''##,@;@@@@##################################.",
  "                           ############,@###@@#++#;;;;'####''';:,,,,.,.,,:;'++###'';#@,#'@@@@@##################################",
  "                          .###########'.#####@##+##;'+######++';;,,.,,.,.;;'+#++''';#@;+@@@@@###################################.",
  "                          @##########';;`#@##@@##'@#'+#####+##+';;,,,,,,.;+++++'''';#@@;+##@@####################################;",
  "                         ###########+;;;;;####@#''#@##########+#+':,.,:,,;++#+''''''+@@,#+#@@####################################@.",
  "                        +##########+;;;;;;#@###@+''##############;;:,.::::+#''''''''+##:#;#@@####################################@#",
  "                       :###########;;;;;;;;@###@@+'@@###+#+######'',,.:,;:++';'''';++@#+;:@@@@###################################@#,",
  "                       ###########;;;;;;;;;;##@#@#'###@@#+++###+++'::,,,'';''''''''++#++.:#@@#######################################",
  "                      +##########+;;;;;;;;;;:#@#@@++##@@@#@++####+';,,,,,;''''''''++'#;;@;@@########################################",
  "                     `########+##;;;;;;;;;;;';###@#+##@@@@@;+';'+++;:,.,,;'''''''+++'##;#'@#@####################################@##",
  "                    `###########+;;;;;;;;;;;;:'#@#@#+#@@@@@:#';;;;';:,,,:''''''''++''+#:####@####################################@##",
  "                   .############;;;;;;;;;;;;;;,+#@###+@@@@@;#+';''';;;:,:''+''+'+++'++@@'###@#######################################,",
  "                  `###########+';;;;;;;;;;;;;;;,'##@###@@@@#++'''''';,:,;'++++++++'''+#;;@##@@######################################@",
  "                  ##########++#;;;;;;;;'';;;;;;','#@@###@@@@'#+''''';:::++++++++++'+'+;:,@##@########################################,",
  "                 +############;;;;;;;;;''';;;;;;'.:#@###@@@@:#++''''';:+'####++++++'''#+.###@@######################################++",
  "                 #########@###;;;;;;;;;;''';;;;;'',,#@###@@@:#++++++++##########+++'';+':#@#########################################+'.",
  "                '##+######@@@#;;;;;;;;;;;''';;;;;';,`#####@@'##+++++###########+++''';+:;@##@########################################''",
  "                ####+#######@#';;;;;;';;;;''';;;;;'':`##+#@@#+#################+++'';;#'########################################@#####'",
  "               :##############'';;;;;;;';;'''';;;;''';`:#+##@;#################++''';;+'###############################################:",
  "               ###########+###;'';;;';+;::,;''';;;;''''.`@##@,@##@@@@@@#########++';;;;,@######################################@#######:",
  "              #########+#+##++;'';;';;;''';;;''';;;;'''';`.@+.@@#@@@@@@@#######++''';;',###############################################+.",
  "             `#########++####;;;'+';;'';:;';'##+';;;'''''';`.,@@@@@@@@@@######+++'';;;+;################################################.",
  "             ###########+++#';;;;'';;;#':+,';+#'+';;;''''''';.`#@###@@@@######+++';;;;'#################################@###############'.",
  "            ;#############'';;;;;;;;;'+++;:+;,+#'';;;;''''''''+:`:+@##########++''';;;,@################################################+.",
  "            #############;;;;;;;;;;;;:'#+++;',,:#''';;'''''''''''+':,:+#@#####++'''';;.@###############################################'+'`",
  "           #############;;;;;;;;;;;;;;;+#;+++';;;++';;;''''''''''''++++;,;@##++''''';;:@################################################''`",
  "          .##########+#;;;;;;;;;;;;;;;;;#;+'#+';'#'+';;;''''''''''''''++++'.'++''''';;'@################################################;'`,",
  "          ###########++;;;;;;;;;;;;;';;;'+'++';,;'#''';;;'''''''''''''''+++++::'''';';#@##################################@####@########''`;:",
  "         ;#########@##;;;;;;;;;;;;;;;';;'+#+###'::;'+';;;''''''''''''''''++'''+::'';;,@##################################@##############+''. `",
  "         #####@@###+#;;;;;;;;;;;;;;+:+++''#####++::''+';;;''''''''''''''''''''''':;;;.###################################@@##############'''.",
  "        '###@@######';;;;;;;;;;;;;;#+##+''######'+;'++'';;;;''''''''''''''''''''''':'.#@@################################@@##############'''+@.",
  "        ###@@#######;;;;;;;;;;;;;;;;+##+''#######+':''+';;;;'''''''''''''''''''''''+:,##@################################@@##############+''+;,",
  "       '#@@####@@@@@;;;;;;;;;;;;;;;+++''+++###+;;#++:;''';;;;;''''''''''''''''''''''+;#@@################################@@###############''';'",
  "       #@########@@@#;;;;;;;;;;;;;;'''''#++++#++@;+++;:+';;;;;''''''''''''''''''''''+'@@#################################@@################'#+#`",
  "      ,@@###########@+;;;;;;;;;;;;;;;;;++'+++;:#'#;'++;'+';;;;;;'''''''''''''''''''''##@#################################@@#################++#:",
  "      #@#############+';;;;;;;;;;;;::::;+'+++;,#+#'++';''';;;;;;;''''''''''''''''''+;##@#################################@@##################'''",
  "      @#############;;;';;;;;;;;;;;:::;+##'+';;+#@+@+#:;''';;;;''''''''';''''''''''':##@##################################@###################''",
  "     +##############;;;;';;;;;;;;;;:::,'###'+;''++@#+##;''';;;;''''''''';;''''''''''.##@##################################@#################@#+'.",
  "     @##############;;;;;';;;;;;;;;:,::;###++;':'+';++##;''';;;''''';;''';';''''''''`##@##################################@################@###';",
  "    ;##############+;;;;;;;;;;;;;;;::,,;+####'',''+##+#';;'';;;;''''';''';;;''''''''`##@##################################@#############@##@####'",
  "    @#############++;;;;;;'';;;;;;;:,,,:'##+#'+''''+#+#+;;;+';;;''''';;'';;;''''''''.##@@#################################@###############@#####+,",
  "    ###############';;;;;;;';;;;;;;:,:,,;++'###+:'''#;###;;'+;;;;;'''';;;;;;'''''''',#####################################@@##@##########@@######'",
  "   :##############+;;;;;;;;;';;;;;;:,,,::+#@####;'''';##+;;'+';;;'''''';;;;;'''''''''###@##################################@##@##########@########",
  "   @###############;;;;;;;;;;';;;;;;;::,,;+###'#+,'';'##+;;;'+;;;;;'''''';;;''''''';+###@##################################@##@#########@@########:",
  "   ################;;;;;;;;;;;;;;;;;#;:,,:+##+@##;'+:''#;';;''';;;''''''''''''''''',####@##################################@##@########@@##########",
  "  `###############+;;;;;;;;;;;';;;;;;;':,,;+##+;##';+'',#;;;;'+;;;;''''''''''''''''.####@##################################@##@########@###########",
  "  ,#############+#+;;;;;;;;;;;;';;;;'#:;,,:;##;####+'+''++:;;''';;;;;'''''''''''''' #######################################@##@#######@@###########,",
  "  ###############';;;;;;;;;;;;;;';;;;'#'';;#':'#;##+++'',+;;;;'+;;;;;''''''''''''''`#######################################@##@#######@############'",
  "  @##########@;;;;;;;;;;;;;;;;;;;';;;''+':::'+#:@###++;+;'';;;''';;';'''''''''''''':#####@#################################@#@#######@############+;",
  "  ##########+;;;;;;;;;;;;;;;;;;;;';;;';,:',;#+#++'###+:'';;';;###;;;;';''''''''''';'#######################################@@@####################+',",
  " `########@'';;;;;;;;;;;;;;;;;;;;;';;:';;;:#+;';'@+@#++;+::;;;@##';;;;;''''''''''':######@#################################@#@######@##############'+",
  " ;#######@;;;;;;;;;;;;;;;;;;;;;;;;;';;:'''''##'#+,#'';+:'+':;;+##+;;;;;'''''''';''`######@#################################@@@@####################'+",
  " @#######;'';;;;;;;;;;';';;;;;;;;;;';;',;,+,;###;+;####+'+':;'+##+';;;''''''''''''`######@#################################@@@#####################';`",
  " #######;;'';;;;;;;;;;;'''';;;;;;;;'';',,'':'+###;@:##;;++::;+###++;;;''''''''''''.#######@################################@@@######################;:",
].join("\n");