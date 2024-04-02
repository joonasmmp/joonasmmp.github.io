---
title: "Teema 2: Working life - yhdistä sanat"
date: 2022-6-1
draft: false
type: page
weight: 65
layout: tehtava
---
{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/yhdistely.css"/>
<div id="nappulat">
<button id="lisaa">
Lisää pareja
</button>
</div>
<div id="kaikki"></div>
<div id="tehtava" class="grid grid-cols-2">
 <div><ul id="terms"> </ul></div>
 <div><ul id="defs"> </ul></div>

</div>


<script> 
 
 //Execute a JavaScript immediately after a page has been loaded
window.onload = function() {

  //Data for terms and definitions. This can be stored in a separate .js file, in a JSON file or here in the main file
     var data = {
    terms: [{

     index: 0, text: 'applicant'
}, { index: 1, text: 'CEO, chief executive officer'
}, { index: 2, text: 'colleague, co-worker'
}, { index: 3, text: 'employee'
}, { index: 4, text: 'employer'
}, { index: 5, text: 'entrepreneur, self-employed'
}, { index: 6, text: 'factory worker'
}, { index: 7, text: 'foreman, superior'
}, { index: 8, text: 'management'
}, { index: 9, text: 'manager, director'
}, { index: 10, text: 'office worker'
}, { index: 11, text: 'pensioner'
}, { index: 12, text: 'personnel, staff'
}, { index: 13, text: 'subordinate'
}, { index: 14, text: 'supervisor'
}, { index: 15, text: 'temporary worker, temp'
}, { index: 16, text: 'trainee, apprentice, intern'
}, { index: 17, text: 'unemployed, jobless'
}, { index: 18, text: 'workforce, labour force'
}, { index: 19, text: 'application'
}, { index: 20, text: 'apply for a job'
}, { index: 21, text: 'curriculum vitae, CV, résumé'
}, { index: 22, text: 'job interview'
}, { index: 23, text: 'job offer'
}, { index: 24, text: 'reference'
}, { index: 25, text: 'vacancy, vacant position'
}, { index: 26, text: 'apprenticeship'
}, { index: 27, text: 'career'
}, { index: 28, text: 'certificate of employment'
}, { index: 29, text: 'collective bargaining agreement'
}, { index: 30, text: 'commission'
}, { index: 31, text: 'company, business, enterprise'
}, { index: 32, text: 'dismiss, give notice, make redundant'
}, { index: 33, text: 'earn'
}, { index: 34, text: 'fire someone'
}, { index: 35, text: 'flexitime, flexible hours'
}, { index: 36, text: 'fringe benefits, perks'
}, { index: 37, text: 'full-time job'
}, { index: 38, text: 'gig economy'
}, { index: 39, text: 'go on strike'
}, { index: 40, text: 'hire, employ, recruit'
}, { index: 41, text: 'hot desking'
}, { index: 42, text: 'hub'
}, { index: 43, text: 'hybrid work'
}, { index: 44, text: 'income'
}, { index: 45, text: 'in-person meeting'
}, { index: 46, text: 'in-service training'
}, { index: 47, text: 'job, occupation'
}, { index: 48, text: 'job centre, employment agency'
}, { index: 49, text: 'lay off (temporarily)'
}, { index: 50, text: 'leave of absence'
}, { index: 51, text: 'make a living, earn a living'
}, { index: 52, text: 'manual work'
}, { index: 53, text: 'moonlighting'
}, { index: 54, text: 'on-the-job training'
}, { index: 55, text: 'on-site work'
}, { index: 56, text: 'open-plan office'
}, { index: 57, text: 'orientation'
}, { index: 58, text: 'overtime bonus'
}, { index: 59, text: 'part-time work'
}, { index: 60, text: 'pay, salary, wages'
}, { index: 61, text: 'pay rise'
}, { index: 62, text: 'pension'
}, { index: 63, text: 'permanent job'
}, { index: 64, text: 'piecework'
}, { index: 65, text: 'post'
}, { index: 66, text: 'premises'
}, { index: 67, text: 'production line'
}, { index: 68, text: 'profession'
}, { index: 69, text: 'promotion'
}, { index: 70, text: 'qualify'
}, { index: 71, text: 'remote meeting'
}, { index: 72, text: 'remote work'
}, { index: 73, text: 'resign, quit'
}, { index: 74, text: 'retire'
}, { index: 75, text: 'retirement'
}, { index: 76, text: 'rota'
}, { index: 77, text: 'salary increment'
}, { index: 78, text: 'service industries'
}, { index: 79, text: 'shift work'
}, { index: 80, text: 'short-term contract, temporary job'
}, { index: 81, text: 'sick leave'
}, { index: 82, text: 'strike'
}, { index: 83, text: 'supervise'
}, { index: 84, text: 'trade union'
}, { index: 85, text: 'unemployment'
}, { index: 86, text: 'unemployment benefit, dole (money) (BrE)'
}, { index: 87, text: 'volunteering, volunteer work'
}, { index: 88, text: 'work conditions'
}, { index: 89, text: 'work contract'
}, { index: 90, text: 'working hours'
}, { index: 91, text: 'work practice, internship'
}, { index: 92, text: 'work overtime'
}, { index: 93, text: 'work shifts'
}, { index: 94, text: 'zero-hour contract'


},

    ],
    definitions: [{    
     index: 0, text: 'hakija'
}, { index: 1, text: 'toimitusjohtaja'
}, { index: 2, text: 'työkaveri'
}, { index: 3, text: 'työntekijä'
}, { index: 4, text: 'työnantaja'
}, { index: 5, text: 'yrittäjä'
}, { index: 6, text: 'tehdastyöntekijä'
}, { index: 7, text: 'esihenkilö'
}, { index: 8, text: 'johto'
}, { index: 9, text: 'johtaja, pomo'
}, { index: 10, text: 'toimistotyöntekijä'
}, { index: 11, text: 'eläkeläinen'
}, { index: 12, text: 'henkilökunta'
}, { index: 13, text: 'alainen'
}, { index: 14, text: 'työnjohtaja, tarkastaja, esihenkilö'
}, { index: 15, text: 'tilapäistyöntekijä'
}, { index: 16, text: 'harjoittelija'
}, { index: 17, text: 'työtön'
}, { index: 18, text: 'työvoima, henkilöstö'
}, { index: 19, text: 'hakemus'
}, { index: 20, text: 'hakea työpaikkaa'
}, { index: 21, text: 'ansioluettelo'
}, { index: 22, text: 'työpaikkahaastattelu'
}, { index: 23, text: 'työtarjous'
}, { index: 24, text: 'suositus'
}, { index: 25, text: 'avoin työpaikka'
}, { index: 26, text: 'oppisopimus'
}, { index: 27, text: 'ura'
}, { index: 28, text: 'työtodistus'
}, { index: 29, text: 'työehtosopimus'
}, { index: 30, text: 'provisiopalkka'
}, { index: 31, text: 'yhtiö, yritys'
}, { index: 32, text: 'irtisanoa'
}, { index: 33, text: 'ansaita'
}, { index: 34, text: 'antaa potkut'
}, { index: 35, text: 'liukuva työaika'
}, { index: 36, text: 'luontoisedut'
}, { index: 37, text: 'kokopäivätyö'
}, { index: 38, text: 'keikkatalous'
}, { index: 39, text: 'mennä lakkoon'
}, { index: 40, text: 'palkata'
}, { index: 41, text: 'työpisteiden jakaminen'
}, { index: 42, text: 'yhteisöllinen työtila'
}, { index: 43, text: 'monipaikkainen työ, hybridityö'
}, { index: 44, text: 'tulot, ansio'
}, { index: 45, text: 'lähikokous'
}, { index: 46, text: 'täydennyskoulutus'
}, { index: 47, text: 'ammatti'
}, { index: 48, text: 'TE-toimisto (työ- ja elinkeinotoimisto)'
}, { index: 49, text: 'lomauttaa'
}, { index: 50, text: 'virkavapaa'
}, { index: 51, text: 'ansaita elantonsa'
}, { index: 52, text: 'ruumiillinen, käsin tehty työ'
}, { index: 53, text: 'pimeä työ'
}, { index: 54, text: 'työpaikkakoulutus'
}, { index: 55, text: 'lähityö'
}, { index: 56, text: 'avokonttori'
}, { index: 57, text: 'perehdyttäminen'
}, { index: 58, text: 'ylityökorvaus'
}, { index: 59, text: 'osa-aikatyö'
}, { index: 60, text: 'palkka'
}, { index: 61, text: 'palkankorotus'
}, { index: 62, text: 'eläke'
}, { index: 63, text: 'vakituinen työpaikka'
}, { index: 64, text: 'urakkatyö'
}, { index: 65, text: 'virka'
}, { index: 66, text: 'toimitilat'
}, { index: 67, text: 'tuotantolinja'
}, { index: 68, text: 'akateeminen ammatti'
}, { index: 69, text: 'ylennys'
}, { index: 70, text: 'pätevöityä'
}, { index: 71, text: 'etäkokous'
}, { index: 72, text: 'etätyö'
}, { index: 73, text: 'irtisanoutua, erota'
}, { index: 74, text: 'jäädä eläkkeelle'
}, { index: 75, text: 'eläköityminen'
}, { index: 76, text: 'työvuorolista'
}, { index: 77, text: 'palkanlisä'
}, { index: 78, text: 'palvelualat'
}, { index: 79, text: 'vuorotyö'
}, { index: 80, text: 'pätkätyö, väliaikainen työ, keikkatyö'
}, { index: 81, text: 'sairausloma'
}, { index: 82, text: 'lakko'
}, { index: 83, text: 'valvoa, ohjata, johtaa'
}, { index: 84, text: 'ammattiyhdistys, palkansaajajärjestö'
}, { index: 85, text: 'työttömyys'
}, { index: 86, text: 'työttömyyskorvaus'
}, { index: 87, text: 'vapaaehtoistyö'
}, { index: 88, text: 'työolosuhteet'
}, { index: 89, text: 'työsopimus'
}, { index: 90, text: 'työaika'
}, { index: 91, text: 'työharjoittelu'
}, { index: 92, text: 'tehdä ylitöitä'
}, { index: 93, text: 'tehdä vuorotyötä'
}, { index: 94, text: 'nollatuntisopimus'


},

    ],
    //this creates matches for indexes. This is a sort of an Answer Sheet
    pairs: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      34: 34,
      35: 35,
      36: 36,
      37: 37,
      38: 38,
      39: 39,
      40: 40,
      41: 41,
      42: 42,
      43: 43,
      44: 44,
      45: 45,
      46: 46,
      47: 47,
      48: 48,
      49: 49,
      50: 50,
      51: 51,
      52: 52,
      53: 53,
      54: 54,
      55: 55,
      56: 56,
      57: 57,
      58: 58,
      59: 59,
      60: 60,
      61: 61,
      62: 62,
      63: 63,
      64: 64,
      65: 65,
      66: 66,
      67: 67,
      68: 68,
      69: 69,
      70: 70,
      71: 71,
      72: 72,
      73: 73,
      74: 74,
      75: 75,
      76: 76,
      77: 77,
      78: 78,
      79: 79,
      80: 80,
      81: 81,
      82: 82,
      83: 83,
      84: 84,
      85: 85,
      86: 86,
      87: 87,
      88: 88,
      89: 89,
      90: 90,
      91: 91,
      92: 92,
      93: 93,
      94: 94,
    }
  };
    
for (var a=[],i=0;i<95;++i) a[i]=i;

function shufflee(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

a = shufflee(a);
  

  var selectedTerm = null, //to make sure none is selected onload
    selectedDef = null,
    termsContainer = document.querySelector("#terms"), //list of terms
    defsContainer = document.querySelector("#defs"); //list of definitions

  //This function takes two arguments, that is one term and one def to compare if they match. It returns True or False after compairing values of the "pairs" object property.     
  function isMatch(termIndex, defIndex) {
    return data.pairs[termIndex] === defIndex;
  }

  //This function adds HTML elements and content to the specified container (UL).
  function createListHTML(list, container) {
    container.innerHTML = ""; //first, clean up any existing LI elements
    for (var i = 0; i < 95; i++) {
      container.innerHTML = container.innerHTML + "<li data-index='" + list[i]["index"] + "'>" + "<span>" + list[i]["text"] + "</span>" + "</li>";

    }
  }

function addCSS(css){
  var elem=document.createElement('style');
  if(elem.styleSheet && !elem.sheet)elem.styleSheet.cssText=css;
  else elem.appendChild(document.createTextNode(css));
  document.getElementsByTagName('head')[0].appendChild(elem); 
}

  createListHTML(data.terms, termsContainer);
  createListHTML(data.definitions, defsContainer);

  //listen for a "click" event on a list of Terms and store the clicked object in the target object
  termsContainer.addEventListener("click", function(e) {
    var target = e.target.parentNode;
    if (target.className === "score")
      return;
    var termIndex = Number(target.getAttribute("data-index"));
    //the condition is that only one LI can be selected
    if (selectedTerm !== null && selectedTerm !== termIndex) {
      termsContainer.querySelector("li[data-index='" + selectedTerm + "']").removeAttribute("data-selected");
    }

    //deletion of the decoration
    if (target.hasAttribute("data-selected")) {
      target.removeAttribute("data-selected");
      selectedTerm = null;
    }
    //selecting on click	
    else {
      target.setAttribute("data-selected", true);
      selectedTerm = termIndex;
    }

    if (selectedTerm !== null && selectedDef !== null) {
      var term = document.querySelector("#terms [data-index='" + selectedTerm + "']");
      var def = document.querySelector("#defs [data-index='" + selectedDef + "']");
      if (isMatch(selectedTerm, selectedDef)) {
				term.className = "score";
        def.className = "score";
  			numero++;
   			term.style.order = (numero);
   			def.style.order = (numero);
            }
      selectedTerm = null;
      selectedDef = null;
      term.removeAttribute("data-selected");
      def.removeAttribute("data-selected");
			    }
  })

  defsContainer.addEventListener("click", function(e) {
    var target = e.target.parentNode;
    if (target.className === "score")
      return;
    var defIndex = Number(target.getAttribute("data-index"));
    var defText = Number(target.getAttribute("data-index"))

    if (selectedDef !== null && selectedDef !== defIndex) {
      defsContainer.querySelector("li[data-index='" + selectedDef + "']").removeAttribute("data-selected");
    }

    if (target.hasAttribute("data-selected"))
      target.removeAttribute("data-selected");
    else
      target.setAttribute("data-selected", true);
    selectedDef = Number(target.getAttribute("data-index"));
    if (selectedTerm !== null && selectedDef !== null) {
      //var term = document.querySelector("#terms [data-index='"+selectedTerm+"']");
      var term = termsContainer.querySelector("[data-index='" + selectedTerm + "']");
      //var def = document.querySelector("#defs [data-index='"+selectedDef+"']");
      var def = defsContainer.querySelector("[data-index='" + selectedDef + "']");
      if (isMatch(selectedTerm, selectedDef)) {
				term.className = "score";
        def.className = "score";
  			numero++;
   			term.style.order = (numero);
   			def.style.order = (numero);
       }
      
      selectedTerm = null; //poista napautusten valinta
      selectedDef = null; //poista napautusten valinta
      term.removeAttribute("data-selected");
      def.removeAttribute("data-selected");
    }
  })

  function shuffle() {
    randomSort(data.terms)
    randomSort(data.definitions)
    createListHTML(data.terms, termsContainer)
    createListHTML(data.definitions, defsContainer)
    addCSS("div#tehtava li[data-index]{display: none;}")
    addCSS("div#tehtava li[data-index='" + a[0] + "']{display: flex;}")
		addCSS("div#tehtava li[data-index='" + a[1] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[2] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[3] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[4] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[5] + "']{display: flex;}")
  }
  
  
  
  function randomSort(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;

    // While there remain elements to shuffle...

    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element. SWAP
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  shuffle(); 
  
document.getElementById("lisaa").addEventListener("click", function() {
        h++;
        addCSS("div#tehtava li[data-index='" + a[h] + "']{display: flex;}")
				h++;
        addCSS("div#tehtava li[data-index='" + a[h] + "']{display: flex;}")
				h++;
        addCSS("div#tehtava li[data-index='" + a[h] + "']{display: flex;}")
				h++;
        addCSS("div#tehtava li[data-index='" + a[h] + "']{display: flex;}")
				h++;
        addCSS("div#tehtava li[data-index='" + a[h] + "']{display: flex;}")
				h++;
        addCSS("div#tehtava li[data-index='" + a[h] + "']{display: flex;}")
if(h>92){$("#kaikki").html("Kaikki lisätty jo!"); }      })
  }

var numero = 0;
var h = 6;
</script>
{{< /rawhtml >}}