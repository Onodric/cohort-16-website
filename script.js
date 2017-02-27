let doges = new Audio("/img/logo/who_let_the_dogs_out.mp3");
let partyFlag = false;

$(window).on('load', ()=>{
  var list;
  // $('#cohort-bios').hide();

  // Click-to-scroll for animated arrow
  $('#about-us').click(function () {
      $('html,body').animate({
          scrollTop: $(".meet-us--tiles").offset().top},
          'slow');
  });

  // Party Mode Button

});

$(document).ready(() => {

  $('#party-mode').show();

  $('#party-mode').click((event) => {
    let target = $(event.target);
    if (partyFlag) {
      partyModeOff(target);
    } else {
      partyModeOn(target);
    }
  });

  loadItems();
});

function partyModeOn(target) {
  target.attr("disabled", true);
  partyFlag = true;
  loadItems(partyFlag);
  doges.play();
  target.text('DISABLE PARTY MODE');
  target.attr("disabled", false);
}

function partyModeOff(target) {
  target.attr("disabled", true);
  partyFlag = false;
  doges.pause();
  loadItems(partyFlag);
  target.text('ENABLE PARTY MODE');
  target.attr("disabled", false);
}

  // XHR to load class info from json file
function loadItems(partyFlag){
  getItems().then( (response)=>{
    list = response;
    let $items = getItem(list, partyFlag);
    $('#cohort-bios').html( $items );
    $('#cohort-bios').show();
  });
}


  function getItem(items, partyFlag) {
    var list_of_people = '';
    $.each(items, (index, person)=>{
        let pictureChoice = '';
        if (partyFlag) {
          pictureChoice = person.personalityPic;
        } else {
          pictureChoice = person.professionalPic;
        }
        list_of_people += `
          <div id="card_person" class="card col s10 offset-s1 col m4 offset-m1 col l2 offset-l1">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator person-image" src="${pictureChoice}" alt="${person.name}">
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
          </div>`;
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
        resolve(users[0]);
      }).fail(function(error) {
        reject(error);
      });
    });
  }


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
          name = bio.name.toLowerCase();
          aboutMe = bio.aboutMe.toLowerCase();
          search_query = search_query.toLowerCase();
          if (name.includes(search_query)){
            return bio;
          }
          if (aboutMe.includes(search_query)){
            return bio;
          }
    });
    let $items = getItem(found_bios, partyFlag);
    $('#cohort-bios').html('');
    $('#cohort-bios').html( $items );
  }

$(document).ready( ()=>{
  $('.card').on('mouseenter', (event)=>{
      $(this).find('> .card-image > img.activator').click();
  });
  $('.card').on('mouseleave', (event)=>{
      $(this).find('> .card-reveal > .card-title').click();
  });
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

function Sound(source,volume,loop){
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    var son;
    this.son=son;
    this.finish=false;
    this.stop=function()
    {
        document.body.removeChild(this.son);
    };
    this.start=function()
    {
        if(this.finish)return false;
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
        document.body.appendChild(this.son);
    };
}