---
title: "Teema 1: Music & Dance - Yhdistä"
date: 2022-6-1
draft: false
type: page
weight: 63
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
     index: 0, text: 'acoustic'
}, { index: 1, text: 'arrange'
}, { index: 2, text: 'brass band'
}, { index: 3, text: 'choir'
}, { index: 4, text: 'chord'
}, { index: 5, text: 'chorus, refrain'
}, { index: 6, text: 'compose'
}, { index: 7, text: 'concert'
}, { index: 8, text: 'conduct'
}, { index: 9, text: 'encore'
}, { index: 10, text: 'gig'
}, { index: 11, text: 'headphones'
}, { index: 12, text: 'hymn'
}, { index: 13, text: 'instrument'
}, { index: 14, text: 'key'
}, { index: 15, text: 'keyboard'
}, { index: 16, text: 'lyrics'
}, { index: 17, text: 'major'
}, { index: 18, text: 'medley'
}, { index: 19, text: 'minor'
}, { index: 20, text: 'musician'
}, { index: 21, text: 'national anthem'
}, { index: 22, text: 'note'
}, { index: 23, text: 'orchestra'
}, { index: 24, text: 'percussion'
}, { index: 25, text: 'record'
}, { index: 26, text: 'record label'
}, { index: 27, text: 'riff'
}, { index: 28, text: 'sheet music, score'
}, { index: 29, text: 'speakers'
}, { index: 30, text: 'stream'
}, { index: 31, text: 'strings'
}, { index: 32, text: 'track'
}, { index: 33, text: 'verse'
}, { index: 34, text: 'vocals'
}, { index: 35, text: 'audition'
}, { index: 36, text: 'bar, measure'
}, { index: 37, text: 'beat'
}, { index: 38, text: 'contemporary'
}, { index: 39, text: 'folk'
}, { index: 40, text: 'genre'
}, { index: 41, text: 'improvise'
}, { index: 42, text: 'interpret'
}, { index: 43, text: 'perform'
}, { index: 44, text: 'rhythm'
}, { index: 45, text: 'tempo'
}, { index: 46, text: 'ball'
}, { index: 47, text: 'ballet'
}, { index: 48, text: 'ballroom dance, partner dance'
}, { index: 49, text: 'choreography, piece, routine'
}, { index: 50, text: 'footwork'
}, { index: 51, text: 'move(ment)'
}, { index: 52, text: 'pirouette'
}, { index: 53, text: 'position'
}, { index: 54, text: 'prom'
}, { index: 55, text: 'sequence'
}, { index: 56, text: 'step'
}, { index: 57, text: 'street dance'
}, { index: 58, text: 'stretching'
}, { index: 59, text: 'tap dance'
}, { index: 60, text: 'warm up'
},

    ],

  definitions: [{
     index: 0, text: 'akustinen, ilman sähköisiä vahvistimia soitettu'
}, { index: 1, text: 'sovittaa'
}, { index: 2, text: '(vaski)puhallinorkesteri'
}, { index: 3, text: 'kuoro'
}, { index: 4, text: 'sointu'
}, { index: 5, text: 'kertosäe'
}, { index: 6, text: 'säveltää'
}, { index: 7, text: 'konsertti'
}, { index: 8, text: 'johtaa orkesteria'
}, { index: 9, text: 'ylimääräinen numero itse esityksen jälkeen'
}, { index: 10, text: 'keikka'
}, { index: 11, text: 'kuulokkeet'
}, { index: 12, text: 'hymni, virsi'
}, { index: 13, text: 'soitin, instrumentti'
}, { index: 14, text: 'sävellaji'
}, { index: 15, text: 'kosketinsoitin, koskettimet'
}, { index: 16, text: 'sanoitukset, lyriikat'
}, { index: 17, text: 'duuri'
}, { index: 18, text: 'potpuri, sikermä'
}, { index: 19, text: 'molli'
}, { index: 20, text: 'muusikko'
}, { index: 21, text: 'kansallislaulu'
}, { index: 22, text: 'nuotti, sävel'
}, { index: 23, text: 'orkesteri'
}, { index: 24, text: 'lyömäsoittimet'
}, { index: 25, text: '(ääni)levy, äänittää, levyttää'
}, { index: 26, text: 'levy-yhtiö'
}, { index: 27, text: 'riffi, lyhyt toistuva sävelkulku'
}, { index: 28, text: 'nuotit, partituuri'
}, { index: 29, text: 'kaiuttimet'
}, { index: 30, text: 'kuunnella suoratoistona'
}, { index: 31, text: 'jousisoittimet'
}, { index: 32, text: '(ääni)raita, kappale'
}, { index: 33, text: 'säkeistö'
}, { index: 34, text: 'laulu(osuudet)'
}, { index: 35, text: 'koe-esiintyä, koe-esiintyminen'
}, { index: 36, text: 'tahti'
}, { index: 37, text: 'isku'
}, { index: 38, text: 'nykymusiikki, -tanssi'
}, { index: 39, text: 'kansanmusiikki, -tanssi'
}, { index: 40, text: 'tyylilaji, genre'
}, { index: 41, text: 'improvisoida'
}, { index: 42, text: 'tulkita'
}, { index: 43, text: 'esiintyä'
}, { index: 44, text: 'rytmi'
}, { index: 45, text: 'tempo, nopeus'
}, { index: 46, text: 'tanssiaiset'
}, { index: 47, text: 'baletti'
}, { index: 48, text: 'paritanssi'
}, { index: 49, text: 'koreografia'
}, { index: 50, text: 'jalkatyöskentely, -tekniikka'
}, { index: 51, text: 'liike'
}, { index: 52, text: 'piruetti'
}, { index: 53, text: 'asento'
}, { index: 54, text: 'koulutanssiaiset'
}, { index: 55, text: 'sarja'
}, { index: 56, text: 'askel'
}, { index: 57, text: 'katutanssi'
}, { index: 58, text: 'venyttely'
}, { index: 59, text: 'steppi'
}, { index: 60, text: 'lämmitellä'

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
    }
  };
    
for (var a=[],i=0;i<61;++i) a[i]=i;

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
    for (var i = 0; i < 61; i++) {
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