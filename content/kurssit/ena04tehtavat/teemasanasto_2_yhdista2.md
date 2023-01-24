---
title: "Teema 2: Crime & Justice - yhdistä sanat 2"
date: 2022-6-1
draft: false
type: page
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
     index: 0, text: 'rikoskumppani'
}, { index: 1, text: 'tuhopoltto'
}, { index: 2, text: 'pahoinpitely'
}, { index: 3, text: 'kiristys'
}, { index: 4, text: 'murtovarkaus'
}, { index: 5, text: 'murtovaras'
}, { index: 6, text: 'tehdä rikos'
}, { index: 7, text: 'väärennös'
}, { index: 8, text: 'rikos'
}, { index: 9, text: 'syyllinen, syypää'
}, { index: 10, text: 'rattijuoppo'
}, { index: 11, text: 'rattijuopumus, päihtyneenä ajaminen'
}, { index: 12, text: 'kavallus'
}, { index: 13, text: 'väärentää'
}, { index: 14, text: 'petos'
}, { index: 15, text: 'syyllinen (adj.)'
}, { index: 16, text: 'ryöstö, keikka (erityisesti pankkiin tai taidemuseoon)'
}, { index: 17, text: 'kaappaus'
}, { index: 18, text: 'murha'
}, { index: 19, text: 'nuorisorikollinen'
}, { index: 20, text: 'tappo'
}, { index: 21, text: 'pahoinpitely'
}, { index: 22, text: 'rike, rikkomus'
}, { index: 23, text: 'rikoksentekijä'
}, { index: 24, text: 'taskuvaras'
}, { index: 25, text: 'raiskaaja'
}, { index: 26, text: 'rikoksenuusija'
}, { index: 27, text: 'ryöstö'
}, { index: 28, text: 'seksuaalirikollinen'
}, { index: 29, text: 'myymälävarkaus'
}, { index: 30, text: 'ylinopeuden ajaminen'
}, { index: 31, text: 'salakuljettaa'
}, { index: 32, text: 'varkaus'
}, { index: 33, text: 'varas'
}, { index: 34, text: 'maanpetos'
}, { index: 35, text: 'vapauttaa, antaa vapauttava tuomio'
}, { index: 36, text: 'vedota, vetoomus'
}, { index: 37, text: 'pidättää, vangita'
}, { index: 38, text: 'takuu'
}, { index: 39, text: 'kuolemanrangaistus'
}, { index: 40, text: 'syyte, nostaa syyte'
}, { index: 41, text: 'yhdyskuntapalvelu'
}, { index: 42, text: 'tuomita, todeta syylliseksi; vanki'
}, { index: 43, text: 'tuomio (syylliseksi tuomitseminen)'
}, { index: 44, text: 'oikeusjuttu'
}, { index: 45, text: 'piirisyyttäjä'
}, { index: 46, text: 'puolustus'
}, { index: 47, text: 'vastaaja, syytetty'
}, { index: 48, text: 'syyttää, nostaa syyte'
}, { index: 49, text: 'sakko, sakkorangaistus'
}, { index: 50, text: 'vankeus'
}, { index: 51, text: 'vanki'
}, { index: 52, text: 'vankila (puhekielinen)'
}, { index: 53, text: 'tuomari'
}, { index: 54, text: 'valamiehistö'
}, { index: 55, text: 'asianajaja'
}, { index: 56, text: 'armahdus, armahtaa'
}, { index: 57, text: 'ehdonalainen'
}, { index: 58, text: 'kantaja'
}, { index: 59, text: 'vankila'
}, { index: 60, text: 'ehdollinen tuomio'
}, { index: 61, text: 'syyttäjä'
}, { index: 62, text: 'lähestymiskielto'
}, { index: 63, text: 'tuomio; tuomita, langettaa tuomio'
}, { index: 64, text: 'haastaa oikeuteen'
}, { index: 65, text: 'todistaa (oikeudessa)'
}, { index: 66, text: 'todistajanlausunto'
}, { index: 67, text: 'rikesakko, sakko'
}, { index: 68, text: 'oikeudenkäynti'
}, { index: 69, text: 'tuomio (juryn päätös)'
}, { index: 70, text: 'todistaa; nähdä rikos'
},
    ],
    definitions: [{
     index: 0, text: 'accomplice'
}, { index: 1, text: 'arson'
}, { index: 2, text: 'assault'
}, { index: 3, text: 'blackmail / extortion'
}, { index: 4, text: 'breaking and entering / burglary'
}, { index: 5, text: 'burglar'
}, { index: 6, text: 'commit a crime'
}, { index: 7, text: 'counterfeit / forgery'
}, { index: 8, text: 'crime'
}, { index: 9, text: 'culprit'
}, { index: 10, text: 'drunk driver'
}, { index: 11, text: 'DUI (driving under the influence)'
}, { index: 12, text: 'embezzlement'
}, { index: 13, text: 'forge'
}, { index: 14, text: 'fraud'
}, { index: 15, text: 'guilty'
}, { index: 16, text: 'heist'
}, { index: 17, text: 'hijacking'
}, { index: 18, text: 'homicide / murder'
}, { index: 19, text: 'juvenile delinquent'
}, { index: 20, text: 'manslaughter'
}, { index: 21, text: 'mugging'
}, { index: 22, text: 'offence'
}, { index: 23, text: 'perpetrator, perp'
}, { index: 24, text: 'pickpocket'
}, { index: 25, text: 'rapist'
}, { index: 26, text: 'repeat offender'
}, { index: 27, text: 'robbery'
}, { index: 28, text: 'sexual offender'
}, { index: 29, text: 'shoplifting'
}, { index: 30, text: 'speeding'
}, { index: 31, text: 'smuggle'
}, { index: 32, text: 'theft'
}, { index: 33, text: 'thief'
}, { index: 34, text: 'treason'
}, { index: 35, text: 'acquit'
}, { index: 36, text: 'appeal'
}, { index: 37, text: 'arrest'
}, { index: 38, text: 'bail'
}, { index: 39, text: 'capital punishment / death penalty'
}, { index: 40, text: 'charge'
}, { index: 41, text: 'community service'
}, { index: 42, text: 'convict'
}, { index: 43, text: 'conviction'
}, { index: 44, text: 'court case'
}, { index: 45, text: 'DA (district attorney)'
}, { index: 46, text: 'defence'
}, { index: 47, text: 'defendant'
}, { index: 48, text: 'file a lawsuit / press charges'
}, { index: 49, text: 'fine'
}, { index: 50, text: 'imprisonment'
}, { index: 51, text: 'inmate'
}, { index: 52, text: 'jail'
}, { index: 53, text: 'judge'
}, { index: 54, text: 'jury'
}, { index: 55, text: 'lawyer'
}, { index: 56, text: 'pardon'
}, { index: 57, text: 'parole'
}, { index: 58, text: 'plaintiff'
}, { index: 59, text: 'prison'
}, { index: 60, text: 'probation / suspended sentence'
}, { index: 61, text: 'prosecutor'
}, { index: 62, text: 'restraining order'
}, { index: 63, text: 'sentence'
}, { index: 64, text: 'sue'
}, { index: 65, text: 'testify'
}, { index: 66, text: 'testimony / statement'
}, { index: 67, text: 'ticket'
}, { index: 68, text: 'trial'
}, { index: 69, text: 'verdict'
}, { index: 70, text: 'witness'
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
    }
  };
    
for (var a=[],i=0;i<71;++i) a[i]=i;

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
    for (var i = 0; i < 71; i++) {
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
{{< /rawhtml >}}