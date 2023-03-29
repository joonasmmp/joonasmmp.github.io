---
title: "Teema 2: Narratives - Yhdistä"
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
     index: 0, text: 'author, writer'
}, { index: 1, text: 'autobiography'
}, { index: 2, text: 'biography'
}, { index: 3, text: 'blurb'
}, { index: 4, text: 'chapter'
}, { index: 5, text: 'character'
}, { index: 6, text: 'chick lit'
}, { index: 7, text: 'cliffhanger'
}, { index: 8, text: 'cover'
}, { index: 9, text: 'crime novel'
}, { index: 10, text: 'critic, reviewer'
}, { index: 11, text: 'edition'
}, { index: 12, text: 'epic'
}, { index: 13, text: 'extract'
}, { index: 14, text: 'fable'
}, { index: 15, text: 'fairy tale'
}, { index: 16, text: 'genre'
}, { index: 17, text: 'ghost writer'
}, { index: 18, text: 'horror story'
}, { index: 19, text: 'illustration'
}, { index: 20, text: 'library'
}, { index: 21, text: 'literary'
}, { index: 22, text: 'memoir, memoirs'
}, { index: 23, text: 'minor character'
}, { index: 24, text: 'narrator'
}, { index: 25, text: 'novelist'
}, { index: 26, text: 'novella'
}, { index: 27, text: 'nursery rhyme'
}, { index: 28, text: 'paragraph'
}, { index: 29, text: 'plot'
}, { index: 30, text: 'protagonist, main character'
}, { index: 31, text: 'pseudonym, pen-name'
}, { index: 32, text: 'publish'
}, { index: 33, text: 'publisher'
}, { index: 34, text: 'review'
}, { index: 35, text: 'romantic fiction'
}, { index: 36, text: 'science fiction, sci-fi'
}, { index: 37, text: 'second-hand bookshop'
}, { index: 38, text: 'setting'
}, { index: 39, text: 'short story'
}, { index: 40, text: 'subplot'
}, { index: 41, text: 'theme'
}, { index: 42, text: 'thriller'
}, { index: 43, text: 'title'
}, { index: 44, text: 'twist'
}, { index: 45, text: 'whodunit, detective story'
}, { index: 46, text: 'audiobook'
}, { index: 47, text: 'bestseller'
}, { index: 48, text: 'fiction'
}, { index: 49, text: 'graphic novel'
}, { index: 50, text: 'hardback'
}, { index: 51, text: 'must-read'
}, { index: 52, text: 'narrative'
}, { index: 53, text: 'non-fiction'
}, { index: 54, text: 'novel'
}, { index: 55, text: 'page-turner'
}, { index: 56, text: 'paperback'
}, { index: 57, text: 'prose'
}, { index: 58, text: 'self-published'
}, { index: 59, text: 'story'
}, { index: 60, text: 'euphemism'
}, { index: 61, text: 'line'
}, { index: 62, text: 'metaphor'
}, { index: 63, text: 'poem'
}, { index: 64, text: 'poet'
}, { index: 65, text: 'rhyme'
}, { index: 66, text: 'verse, stanza'
}, { index: 67, text: 'act'
}, { index: 68, text: 'actor, actress'
}, { index: 69, text: 'audition'
}, { index: 70, text: 'comedy'
}, { index: 71, text: 'costumes'
}, { index: 72, text: 'curtain'
}, { index: 73, text: 'drama'
}, { index: 74, text: 'dress rehearsal'
}, { index: 75, text: 'green room'
}, { index: 76, text: 'interval'
}, { index: 77, text: 'lines'
}, { index: 78, text: 'monologue'
}, { index: 79, text: 'play'
}, { index: 80, text: 'playwright, dramatist'
}, { index: 81, text: 'rehearse'
}, { index: 82, text: 'scene'
}, { index: 83, text: 'set'
}, { index: 84, text: 'stage'
}, { index: 85, text: 'tragedy'
},

    ],

  definitions: [{
     index: 0, text: 'kirjailija'
}, { index: 1, text: 'omaelämäkerta'
}, { index: 2, text: 'elämäkerta'
}, { index: 3, text: 'takakannen teksti'
}, { index: 4, text: 'luku'
}, { index: 5, text: 'henkilöhahmo'
}, { index: 6, text: 'humoristinen naiskirjallisuus'
}, { index: 7, text: 'jäädä jännittävään kohtaan'
}, { index: 8, text: 'kansi'
}, { index: 9, text: 'rikosromaani'
}, { index: 10, text: 'arvostelija'
}, { index: 11, text: 'painos'
}, { index: 12, text: 'eepos, eeppinen'
}, { index: 13, text: 'ote'
}, { index: 14, text: 'faabeli, opettava eläinsatu'
}, { index: 15, text: 'satu'
}, { index: 16, text: 'kirjallisuuden laji'
}, { index: 17, text: 'haamukirjoittaja'
}, { index: 18, text: 'kauhutarina'
}, { index: 19, text: 'kuvitus'
}, { index: 20, text: 'kirjasto'
}, { index: 21, text: 'kirjallinen, kirjallisuus-'
}, { index: 22, text: 'muistelmat'
}, { index: 23, text: 'sivuhenkilö'
}, { index: 24, text: 'kertoja'
}, { index: 25, text: 'romaanikirjailija'
}, { index: 26, text: 'pienoisromaani'
}, { index: 27, text: 'lastenloru'
}, { index: 28, text: 'kappale'
}, { index: 29, text: 'juoni'
}, { index: 30, text: 'päähenkilö'
}, { index: 31, text: 'salanimi'
}, { index: 32, text: 'julkaista, kustantaa'
}, { index: 33, text: 'kustantaja'
}, { index: 34, text: 'arvostelu'
}, { index: 35, text: 'rakkausromaani'
}, { index: 36, text: 'tieteiskirjallisuus'
}, { index: 37, text: 'kirja-antikvariaatti'
}, { index: 38, text: 'tapahtumapaikka'
}, { index: 39, text: 'novelli'
}, { index: 40, text: 'sivujuoni'
}, { index: 41, text: 'teema, aihe'
}, { index: 42, text: 'jännitysromaani'
}, { index: 43, text: 'kirjan nimi'
}, { index: 44, text: 'juonenkäänne'
}, { index: 45, text: 'salapoliisitarina'
}, { index: 46, text: 'äänikirja'
}, { index: 47, text: 'myyntimenestys'
}, { index: 48, text: 'kaunokirjallisuus, fiktio'
}, { index: 49, text: 'sarjakuvakirja, sarjakuvaromaani'
}, { index: 50, text: 'kovakantinen kirja'
}, { index: 51, text: 'kirja, joka täytyy lukea'
}, { index: 52, text: 'kerronta, kertoma-'
}, { index: 53, text: 'tietokirjallisuus'
}, { index: 54, text: 'romaani'
}, { index: 55, text: 'kirja, jota ei voi jättää kesken'
}, { index: 56, text: 'pokkari'
}, { index: 57, text: 'proosa'
}, { index: 58, text: 'omakustanne'
}, { index: 59, text: 'kertomus, tarina'
}, { index: 60, text: 'kiertoilmaisu'
}, { index: 61, text: 'säe'
}, { index: 62, text: 'kielikuva'
}, { index: 63, text: 'runo'
}, { index: 64, text: 'runoilija'
}, { index: 65, text: 'loppusointu'
}, { index: 66, text: 'säkeistö'
}, { index: 67, text: 'näytös; näytellä'
}, { index: 68, text: 'näyttelijä'
}, { index: 69, text: 'koe-esiintyminen'
}, { index: 70, text: 'komedia'
}, { index: 71, text: 'puvustus'
}, { index: 72, text: 'esirippu'
}, { index: 73, text: 'draama, näytelmäkirjallisuus'
}, { index: 74, text: 'kenraaliharjoitus'
}, { index: 75, text: 'lämpiö'
}, { index: 76, text: 'väliaika'
}, { index: 77, text: 'repliikki, vuorosanat'
}, { index: 78, text: 'monologi, yksinpuhelu'
}, { index: 79, text: 'näytelmä'
}, { index: 80, text: 'näytelmäkirjailija'
}, { index: 81, text: 'harjoitella'
}, { index: 82, text: 'kohtaus'
}, { index: 83, text: 'lavastus'
}, { index: 84, text: 'lava, näyttämö'
}, { index: 85, text: 'murhenäytelmä'


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

    }
  };
    
for (var a=[],i=0;i<87;++i) a[i]=i;

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
    for (var i = 0; i < 87; i++) {
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
if(h>88){$("#kaikki").html("Kaikki lisätty jo!"); }      })
  }

var numero = 0;
var h = 6;
</script>
{{< /rawhtml >}}