---
title: "Teema 1: Media - yhdistä sanat 2"
date: 2022-6-1
draft: false
type: page
layout: tehtava
---
{{< rawhtml >}}
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
     index: 0, text: 'mainostaulu'
}, { index: 1, text: 'tuoreimmat uutiset'
}, { index: 2, text: 'sensuuri, valvonta'
}, { index: 3, text: 'kuluttaja'
}, { index: 4, text: 'tarkastaa faktat'
}, { index: 5, text: 'valeuutinen'
}, { index: 6, text: 'valtamedia'
}, { index: 7, text: 'joukkotiedotusvälineet, massamedia'
}, { index: 8, text: 'median puolueellisuus'
}, { index: 9, text: 'medialukutaito'
}, { index: 10, text: 'tiedotusväline'
}, { index: 11, text: 'multimedia (monia mediamuotoja yhdistelevä media)'
}, { index: 12, text: 'uutiskatsaus'
}, { index: 13, text: 'uutisarvoinen, uutiskynnyksen ylittävä'
}, { index: 14, text: 'kohdeyleisö'
}, { index: 15, text: 'kuuluttaja'
}, { index: 16, text: 'uutisankkuri'
}, { index: 17, text: 'lähetys, lähettää ohjelmaa'
}, { index: 18, text: 'kanava'
}, { index: 19, text: 'kommentaattori, selostaja'
}, { index: 20, text: 'mainos(-elokuva)'
}, { index: 21, text: '(live-)kuvamateriaali'
}, { index: 22, text: 'taajuus'
}, { index: 23, text: 'uutistenlukija'
}, { index: 24, text: 'juontaja'
}, { index: 25, text: 'paras katselu-/kuunteluaika'
}, { index: 26, text: 'televisioida'
}, { index: 27, text: 'säätoimittaja'
}, { index: 28, text: 'mainos, ilmoitus'
}, { index: 29, text: 'artikkeli'
}, { index: 30, text: 'täysikokoinen (laatu-)sanomalehti'
}, { index: 31, text: 'artikkelin kirjoittajan nimi / nimen paikka'
}, { index: 32, text: 'kuvateksti'
}, { index: 33, text: 'levikki'
}, { index: 34, text: 'kolumni, mielipidekirjoitus'
}, { index: 35, text: 'kolumnisti'
}, { index: 36, text: 'sarjakuva'
}, { index: 37, text: 'tekijänoikeus'
}, { index: 38, text: 'kirjeenvaihtaja'
}, { index: 39, text: 'uutispeitto, uutisointi'
}, { index: 40, text: 'painos, (lehden) numero'
}, { index: 41, text: 'päätoimittaja'
}, { index: 42, text: 'pääkirjoitus'
}, { index: 43, text: 'erikoisartikkeli'
}, { index: 44, text: 'otsikko'
}, { index: 45, text: 'tutkiva journalismi'
}, { index: 46, text: 'lehden numero'
}, { index: 47, text: 'toimittaja, journalisti'
}, { index: 48, text: 'taitto, asettelu, ulkoasu'
}, { index: 49, text: 'aikakauslehti'
}, { index: 50, text: 'uutistoimisto'
}, { index: 51, text: 'sanomalehti'
}, { index: 52, text: 'aikakauslehti'
}, { index: 53, text: 'lehdistö'
}, { index: 54, text: 'painomedia'
}, { index: 55, text: 'julkaisu'
}, { index: 56, text: 'kustantaja, kustantamo'
}, { index: 57, text: 'reportteri'
}, { index: 58, text: 'jymyuutinen, skuuppi'
}, { index: 59, text: 'tilata (lehteä)'
}, { index: 60, text: 'tilaus'
}, { index: 61, text: 'iltapäivälehti'
}, { index: 62, text: 'keltainen lehdistö, sensaatiolehdistö'
}, { index: 63, text: 'algoritmi'
}, { index: 64, text: 'sovellus'
}, { index: 65, text: 'banneri, mainospalkki'
}, { index: 66, text: 'klikkiotsikko'
}, { index: 67, text: 'joukkoistaminen, yleisön osallistaminen'
}, { index: 68, text: 'syöte, uutissyöte'
}, { index: 69, text: 'suoratoisto'
}, { index: 70, text: 'meemi'
}, { index: 71, text: 'maksumuuri'
}, { index: 72, text: 'podcast, verkossa julkaistu äänitallenne'
}, { index: 73, text: 'julkaista, julkaisu'
}, { index: 74, text: 'hakukone'
}, { index: 75, text: 'suoratoistoalusta'
}, { index: 76, text: 'tägi, merkintä, tunniste, tägätä, merkitä'
}, { index: 77, text: 'muodikas, suosittu'
}, { index: 78, text: 'trolli, ihminen, joka provosoi kommenteillaan netissä'
}, { index: 79, text: 'tviitti; tviitata, julkaista tviitti'
}, { index: 80, text: 'katsoja'
}, { index: 81, text: 'vlogi, videoblogi'
}, { index: 82, text: 'viraali, nopean internetsuosion saanut asia tai tapahtuma'

},
    ],
    definitions: [{
     index: 0, text: 'billboard'
}, { index: 1, text: 'breaking news'
}, { index: 2, text: 'censorship'
}, { index: 3, text: 'consumer'
}, { index: 4, text: 'fact-check'
}, { index: 5, text: 'fake news'
}, { index: 6, text: 'mainstream media'
}, { index: 7, text: 'mass media'
}, { index: 8, text: 'media bias'
}, { index: 9, text: 'media literacy'
}, { index: 10, text: 'media outlet'
}, { index: 11, text: 'multimedia'
}, { index: 12, text: 'news bulletin'
}, { index: 13, text: 'newsworthy'
}, { index: 14, text: 'target audience'
}, { index: 15, text: 'announcer'
}, { index: 16, text: 'anchor'
}, { index: 17, text: 'broadcast'
}, { index: 18, text: 'channel'
}, { index: 19, text: 'commentator'
}, { index: 20, text: 'commercial'
}, { index: 21, text: '(live) footage'
}, { index: 22, text: 'frequency'
}, { index: 23, text: 'newsreader'
}, { index: 24, text: 'presenter'
}, { index: 25, text: 'prime time'
}, { index: 26, text: 'televise'
}, { index: 27, text: 'weather reporter'
}, { index: 28, text: 'advertisement, advert, ad'
}, { index: 29, text: 'article'
}, { index: 30, text: 'broadsheet'
}, { index: 31, text: 'byline'
}, { index: 32, text: 'caption'
}, { index: 33, text: 'circulation'
}, { index: 34, text: 'column'
}, { index: 35, text: 'columnist'
}, { index: 36, text: 'comic strip'
}, { index: 37, text: 'copyright'
}, { index: 38, text: 'correspondent'
}, { index: 39, text: 'coverage'
}, { index: 40, text: 'edition'
}, { index: 41, text: 'editor (-in-chief)'
}, { index: 42, text: 'editorial'
}, { index: 43, text: 'feature'
}, { index: 44, text: 'headline'
}, { index: 45, text: 'investigative journalism'
}, { index: 46, text: 'issue'
}, { index: 47, text: 'journalist'
}, { index: 48, text: 'layout'
}, { index: 49, text: 'magazine'
}, { index: 50, text: 'news agency'
}, { index: 51, text: 'newspaper'
}, { index: 52, text: 'periodical'
}, { index: 53, text: 'the press'
}, { index: 54, text: 'print media'
}, { index: 55, text: 'publication'
}, { index: 56, text: 'publisher'
}, { index: 57, text: 'reporter'
}, { index: 58, text: 'scoop'
}, { index: 59, text: 'subscribe to'
}, { index: 60, text: 'subscription'
}, { index: 61, text: 'tabloid'
}, { index: 62, text: 'tabloid journalism, yellow journalism'
}, { index: 63, text: 'algorithm'
}, { index: 64, text: 'application, app'
}, { index: 65, text: 'banner'
}, { index: 66, text: 'clickbait'
}, { index: 67, text: 'crowdsourcing'
}, { index: 68, text: 'feed'
}, { index: 69, text: 'livestream'
}, { index: 70, text: 'meme'
}, { index: 71, text: 'paywall'
}, { index: 72, text: 'podcast'
}, { index: 73, text: 'post'
}, { index: 74, text: 'search engine'
}, { index: 75, text: 'streaming platform'
}, { index: 76, text: 'tag'
}, { index: 77, text: 'trending'
}, { index: 78, text: 'troll'
}, { index: 79, text: 'tweet'
}, { index: 80, text: 'viewer'
}, { index: 81, text: 'vlog (video blog)'
}, { index: 82, text: 'viral'
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
    }
  };
    
for (var a=[],i=0;i<83;++i) a[i]=i;

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
    for (var i = 0; i < 83; i++) {
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
if(h>78){$("#kaikki").html("Kaikki lisätty jo!"); }      })
  }

var numero = 0;
var h = 6;
</script>

<style>

div#tehtava {
  overflow: hidden;
}

div#tehtava ul {
  list-style: none;
  font-size: 0.75em;
}

div#tehtava ul#terms {
  display: flex;
  flex-direction: column;
}

div#tehtava ul#defs {
  display: flex;
  flex-direction: column;
}

div#tehtava ul#terms li {
  background: #1F2937;
  color: #ffffff;
}

div#tehtava ul#defs li {
  color: #000000
}

div#tehtava li {
  float: left;
  height: 4em;
  margin-right: 10px;
  margin-left: 10px;
  background: white;
  text-align: center;
  cursor: pointer;
  border-radius: 0;
  -webkit-box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 1);
  box-shadow: 0 3px 5px 1px #000;
}

div#tehtava li:hover {
  transform: scale(1.05, 1.05);
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 1);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 1);
}

div#tehtava li[data-selected] {
  transform: scale(1.05, 1.05);
  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.75);
  outline: 4px solid #00A0DF;
}

div#tehtava ul li span {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: none;
  transition: opacity 0.2s ease-out;
}

div#tehtava span:hover {
  transform: none;
}

.score {
  background: none!important;
  box-shadow: none;
  color: #fff!important;
  background: #00A0DF!important;
  border-radius: 15px;
}

.score:hover {
  cursor: default;
  transform: none;
  box-shadow: none;
}

.fadeOut li span {
  transition: opacity 0.25s ease-out;
  opacity: 0;
}

.fadeOut li {
  transition: transform .5s ease-out;
  transform: rotateX(360deg);
}

div#nappulat{
  display: flex;
  justify-content: center;
}

div#nappulat button{
    font-family: inherit;
    text-align: center;
    border: 1px solid transparent;
    width: 10em;
    height: 3em;
    margin: 0.2em;
    margin-bottom: 0.5em;
    border-width: 1px;
    border-radius: 5px;
    font-size: 0.8em;
    background: #1f2937;
    border-color: #051D29;
    color: #ffffff;
}

div#kaikki{
  display: flex;
  justify-content: center;
}
</style>

{{< /rawhtml >}}