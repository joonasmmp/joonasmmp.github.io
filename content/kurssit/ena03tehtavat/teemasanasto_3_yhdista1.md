---
title: "Teema 3: Films & TV - Yhdistä"
date: 2022-6-1
draft: false
type: page
weight: 66
layout: tehtava
---
Etsi sanaa vastaava käännös. Numeroita klikkaamalla voit luoda haluamasi määrän uusia pareja.
{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/yhdistely.css"/>
<div id="nappulat">
    <button id="kuusi">
    6
    </button>
    <button id="yhdeksän">
    9
    </button>
    <button id="kakstoista">
    12
    </button>
    </div>
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
     index: 0, text: 'actor, actress'
}, { index: 1, text: 'adaptation'
}, { index: 2, text: 'audition'
}, { index: 3, text: 'animation'
}, { index: 4, text: 'blockbuster'
}, { index: 5, text: 'box office'
}, { index: 6, text: 'cast'
}, { index: 7, text: 'cinema'
}, { index: 8, text: 'cinematography'
}, { index: 9, text: 'cliffhanger'
}, { index: 10, text: 'climax'
}, { index: 11, text: 'costumer, costume designer'
}, { index: 12, text: 'costume'
}, { index: 13, text: 'credits'
}, { index: 14, text: 'dialogue'
}, { index: 15, text: 'director'
}, { index: 16, text: 'documentary'
}, { index: 17, text: 'dub'
}, { index: 18, text: 'editor'
}, { index: 19, text: 'extra'
}, { index: 20, text: 'feature film'
}, { index: 21, text: 'film franchise'
}, { index: 22, text: 'flashback'
}, { index: 23, text: 'flick'
}, { index: 24, text: 'hero, heroine'
}, { index: 25, text: 'lead role'
}, { index: 26, text: 'lighting'
}, { index: 27, text: 'location'
}, { index: 28, text: 'moviegoer, cinemagoer'
}, { index: 29, text: 'movie theatre'
}, { index: 30, text: 'premiere'
}, { index: 31, text: 'producer'
}, { index: 32, text: 'props'
}, { index: 33, text: 'release'
}, { index: 34, text: 'romcom, romantic comedy'
}, { index: 35, text: 'scene'
}, { index: 36, text: 'script, screenplay'
}, { index: 37, text: 'screenwriter'
}, { index: 38, text: 'sequel'
}, { index: 39, text: 'set'
}, { index: 40, text: 'setting'
}, { index: 41, text: 'silver screen'
}, { index: 42, text: 'sound effect'
}, { index: 43, text: 'soundtrack'
}, { index: 44, text: 'special effect'
}, { index: 45, text: 'stunt (man/woman/double)'
}, { index: 46, text: 'subtitle'
}, { index: 47, text: 'supporting role'
}, { index: 48, text: 'trailer'
}, { index: 49, text: 'villain'
}, { index: 50, text: 'visual effects'
}, { index: 51, text: 'voice actor'
}, { index: 52, text: 'voice-over'
}, { index: 53, text: 'binge-watch'
}, { index: 54, text: 'fast forward'
}, { index: 55, text: 'live streaming'
}, { index: 56, text: 'OTT, over the top'
}, { index: 57, text: 'original series'
}, { index: 58, text: 'pause'
}, { index: 59, text: 'pay-TV'
}, { index: 60, text: 'replay'
}, { index: 61, text: 'rewind'
}, { index: 62, text: 'streaming service'
}, { index: 63, text: 'subscription'
}, { index: 64, text: 'VoD, video on demand'
}, { index: 65, text: 'blooper'
}, { index: 66, text: 'broadcast'
}, { index: 67, text: 'cartoon'
}, { index: 68, text: 'channel'
}, { index: 69, text: 'commercial'
}, { index: 70, text: 'episode'
}, { index: 71, text: 'footage'
}, { index: 72, text: 'game show'
}, { index: 73, text: 'host'
}, { index: 74, text: 'late night show'
}, { index: 75, text: 'linear TV'
}, { index: 76, text: 'newscast'
}, { index: 77, text: 'prime time'
}, { index: 78, text: 'ratings'
}, { index: 79, text: 'reality TV'
}, { index: 80, text: 'recording'
}, { index: 81, text: 'rerun'
}, { index: 82, text: 'season'
}, { index: 83, text: 'season finale'
}, { index: 84, text: 'series'
}, { index: 85, text: 'sitcom, situation comedy'
}, { index: 86, text: 'soap opera'
}, { index: 87, text: 'spin off'
}, { index: 88, text: 'talent show'
}, { index: 89, text: 'talk show'
}, { index: 90, text: 'viewer'

},

    ],

  definitions: [{
     index: 0, text: 'näyttelijä'
}, { index: 1, text: 'sovitus, versiointi, adaptaatio'
}, { index: 2, text: 'koe-esiintyminen'
}, { index: 3, text: 'piirrosfilmi, animaatio'
}, { index: 4, text: 'menestyselokuva'
}, { index: 5, text: 'lippukassa, -myymälä, -luukku'
}, { index: 6, text: 'roolittaa, näyttelijäryhmä, -kaarti'
}, { index: 7, text: 'elokuvateatteri, -teollisuus, -taide'
}, { index: 8, text: 'elokuvan kuvaaminen'
}, { index: 9, text: 'loppuhuipennus, koukuttava (avoin) loppuratkaisu'
}, { index: 10, text: 'huipentuma, käännekohta'
}, { index: 11, text: 'puvustaja'
}, { index: 12, text: 'esiintymisasu, puvustaa'
}, { index: 13, text: 'tekijäluettelo'
}, { index: 14, text: 'vuoropuhelu'
}, { index: 15, text: 'ohjaaja'
}, { index: 16, text: 'dokumenttielokuva'
}, { index: 17, text: 'jälkiäänittää, dubata'
}, { index: 18, text: 'leikkaaja, editoija'
}, { index: 19, text: 'avustaja'
}, { index: 20, text: 'kokoillan elokuva'
}, { index: 21, text: 'elokuvasarja'
}, { index: 22, text: 'takauma'
}, { index: 23, text: 'leffa, elokuva'
}, { index: 24, text: 'sankari'
}, { index: 25, text: 'päärooli'
}, { index: 26, text: 'valaistus'
}, { index: 27, text: 'kuvauspaikka'
}, { index: 28, text: 'elokuvissa kävijä'
}, { index: 29, text: 'elokuvateatteri'
}, { index: 30, text: 'ensi-ilta'
}, { index: 31, text: 'tuottaja'
}, { index: 32, text: 'rekvisiitta'
}, { index: 33, text: 'julkaista'
}, { index: 34, text: 'romanttinen komedia'
}, { index: 35, text: 'kohtaus, tapahtumapaikka, kulissi'
}, { index: 36, text: '(elokuva)käsikirjoitus'
}, { index: 37, text: 'elokuvakäsikirjoittaja'
}, { index: 38, text: 'jatko-osa'
}, { index: 39, text: 'kulissit'
}, { index: 40, text: 'tapahtumapaikka, miljöö'
}, { index: 41, text: 'valkokangas'
}, { index: 42, text: 'äänitehoste'
}, { index: 43, text: 'elokuvan musiikki'
}, { index: 44, text: 'erikoistehoste'
}, { index: 45, text: 'sijaisnäyttelijä'
}, { index: 46, text: 'tekstitys'
}, { index: 47, text: 'sivurooli'
}, { index: 48, text: 'ennakkomainos'
}, { index: 49, text: 'roisto'
}, { index: 50, text: 'visuaaliset tehosteet'
}, { index: 51, text: 'ääninäyttelijä'
}, { index: 52, text: 'taustaselostus'
}, { index: 53, text: 'katsoa ”ahmien”, katsoa putkeen'
}, { index: 54, text: '(pika-)kelata eteenpäin'
}, { index: 55, text: 'lähettää esitys suorana netin välityksellä, livestriimata'
}, { index: 56, text: 'internetin yli välitettävä'
}, { index: 57, text: 'alkuperäissarja'
}, { index: 58, text: 'pysäyttää kuva'
}, { index: 59, text: 'maksutelevisio'
}, { index: 60, text: 'toistaa uudelleen'
}, { index: 61, text: 'kelata taaksepäin'
}, { index: 62, text: 'suoratoisto-, ohjelmakirjastopalvelu'
}, { index: 63, text: 'tilaus'
}, { index: 64, text: 'tilausvideo'
}, { index: 65, text: 'pieleen mennyt otos, kömmähdys'
}, { index: 66, text: 'lähetys, lähettää'
}, { index: 67, text: 'piirrossarja, -elokuva'
}, { index: 68, text: 'kanava'
}, { index: 69, text: 'mainos'
}, { index: 70, text: 'jakso'
}, { index: 71, text: 'kuvamateriaali'
}, { index: 72, text: 'visailuohjelma'
}, { index: 73, text: 'juontaja, juontaa, emäntä, isäntä'
}, { index: 74, text: 'myöhäisillan ohjelma'
}, { index: 75, text: 'perinteinen televisio, jossa ohjelmat katsotaan silloin, kun kanava ne lähettää'
}, { index: 76, text: 'uutislähetys'
}, { index: 77, text: 'paras katseluaika'
}, { index: 78, text: 'katsojaluvut'
}, { index: 79, text: 'tosi-TV'
}, { index: 80, text: 'tallenne'
}, { index: 81, text: 'uusinta'
}, { index: 82, text: 'kausi'
}, { index: 83, text: 'kauden päätösjakso'
}, { index: 84, text: 'sarja, kausi'
}, { index: 85, text: 'tilannekomedia'
}, { index: 86, text: 'saippuaooppera'
}, { index: 87, text: 'oheistuote, -sarja'
}, { index: 88, text: 'kykykilpailu'
}, { index: 89, text: 'keskusteluohjelma'
}, { index: 90, text: 'katsoja'


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

    }
  };
    
for (var a=[],i=0;i<91;++i) a[i]=i;

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
    for (var i = 0; i < 91; i++) {
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
  
    function shuffle9() {
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
    addCSS("div#tehtava li[data-index='" + a[6] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[7] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[8] + "']{display: flex;}")
  }
  
      function shuffle12() {
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
    addCSS("div#tehtava li[data-index='" + a[6] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[7] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[8] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[9] + "']{display: flex;}")
		addCSS("div#tehtava li[data-index='" + a[10] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[11] + "']{display: flex;}")
    addCSS("div#tehtava li[data-index='" + a[12] + "']{display: flex;}")
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
  
  document.getElementById("kuusi").addEventListener("click", function() {
        shuffle();
        a = shufflee(a);
      }   
       )
  document.getElementById("yhdeksän").addEventListener("click", function() {
        shuffle9();
        a = shufflee(a);
      }   
       )
  document.getElementById("kakstoista").addEventListener("click", function() {
        shuffle12();
        a = shufflee(a);
      }   
       )
       
  }

var numero = 0;

</script>
{{< /rawhtml >}}