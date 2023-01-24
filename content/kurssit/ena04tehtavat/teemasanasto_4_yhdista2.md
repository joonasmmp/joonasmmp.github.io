---
title: "Teema 4: Human Welfare & Religion - yhdistä sanat 2"
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
     index: 0, text: 'avustus, tuki, etu'
}, { index: 1, text: 'viranomaiset'
}, { index: 2, text: 'kansalainen'
}, { index: 3, text: 'kansalaisuus'
}, { index: 4, text: 'lapsilisä'
}, { index: 5, text: 'lastenkoti'
}, { index: 6, text: 'päiväkoti'
}, { index: 7, text: 'vammaistuki'
}, { index: 8, text: 'tasa-arvo'
}, { index: 9, text: 'asunnottomuus'
}, { index: 10, text: 'asumistuki'
}, { index: 11, text: 'tulot'
}, { index: 12, text: 'tulovero'
}, { index: 13, text: 'terveydenhuolto'
}, { index: 14, text: 'vammaiset'
}, { index: 15, text: 'äitiyspakkaus'
}, { index: 16, text: 'köyhyys'
}, { index: 17, text: 'asukas'
}, { index: 18, text: 'jäädä eläkkeelle'
}, { index: 19, text: 'eläkeläinen'
}, { index: 20, text: 'vanhus'
}, { index: 21, text: 'palvelutalo'
}, { index: 22, text: 'sairauspäiväraha'
}, { index: 23, text: 'sosiaaliturva'
}, { index: 24, text: 'elintaso'
}, { index: 25, text: 'opintotuki'
}, { index: 26, text: 'avustus, valtionapu'
}, { index: 27, text: 'vanhukset'
}, { index: 28, text: 'työttömyyskorvaus'
}, { index: 29, text: 'hyvinvointivaltio'
}, { index: 30, text: 'siviilivihkiminen'
}, { index: 31, text: 'rekisteröity parisuhde'
}, { index: 32, text: 'avoliitto'
}, { index: 33, text: 'elatusapu'
}, { index: 34, text: 'huoltajuus'
}, { index: 35, text: 'avioero'
}, { index: 36, text: 'yhteishuoltajuus'
}, { index: 37, text: 'olla avoliitossa, asua yhdessä'
}, { index: 38, text: 'avioliitto'
}, { index: 39, text: 'avioehto'
}, { index: 40, text: 'ateismi'
}, { index: 41, text: 'kaste'
}, { index: 42, text: 'siunata'
}, { index: 43, text: 'ehtoollinen'
}, { index: 44, text: 'ripille pääsy'
}, { index: 45, text: 'isonen'
}, { index: 46, text: 'seurakunta (kirkkoväki)'
}, { index: 47, text: 'usko'
}, { index: 48, text: 'paasto'
}, { index: 49, text: 'virsi'
}, { index: 50, text: 'messu'
}, { index: 51, text: 'seurakunta'
}, { index: 52, text: 'rukoilla'
}, { index: 53, text: 'rukous'
}, { index: 54, text: 'saarnata'
}, { index: 55, text: 'Prometheus-leiri'
}, { index: 56, text: 'uskonto'
}, { index: 57, text: 'uskonnollinen'
}, { index: 58, text: 'pyhä'
}, { index: 59, text: 'maallinen'
}, { index: 60, text: 'saarna'
}, { index: 61, text: 'jumalanpalvelus'
},
    ],
    definitions: [{
     index: 0, text: 'allowance / benefit'
}, { index: 1, text: 'authorities'
}, { index: 2, text: 'citizen'
}, { index: 3, text: 'citizenship / nationality'
}, { index: 4, text: 'child benefit'
}, { index: 5, text: 'children’s home'
}, { index: 6, text: 'day care centre, kindergarten'
}, { index: 7, text: 'disability benefit'
}, { index: 8, text: 'equality'
}, { index: 9, text: 'homelessness'
}, { index: 10, text: 'housing benefit'
}, { index: 11, text: 'income'
}, { index: 12, text: 'income tax'
}, { index: 13, text: 'health care'
}, { index: 14, text: 'individuals with special needs'
}, { index: 15, text: 'maternity package'
}, { index: 16, text: 'poverty'
}, { index: 17, text: 'resident'
}, { index: 18, text: 'retire'
}, { index: 19, text: 'retiree / old age pensioner'
}, { index: 20, text: 'senior citizen'
}, { index: 21, text: 'sheltered housing'
}, { index: 22, text: 'sickness allowance'
}, { index: 23, text: 'social security'
}, { index: 24, text: 'standard of living'
}, { index: 25, text: 'student grant'
}, { index: 26, text: 'subsidy'
}, { index: 27, text: 'the elderly'
}, { index: 28, text: 'unemployment benefit'
}, { index: 29, text: 'welfare state'
}, { index: 30, text: 'civil ceremony'
}, { index: 31, text: 'civil partnership'
}, { index: 32, text: 'cohabitation'
}, { index: 33, text: 'child support'
}, { index: 34, text: 'custody'
}, { index: 35, text: 'divorce'
}, { index: 36, text: 'joint custody'
}, { index: 37, text: 'live together'
}, { index: 38, text: 'marriage'
}, { index: 39, text: 'prenuptial agreement'
}, { index: 40, text: 'atheism'
}, { index: 41, text: 'baptism / christening'
}, { index: 42, text: 'bless'
}, { index: 43, text: 'communion'
}, { index: 44, text: 'confirmation'
}, { index: 45, text: 'confirmation camp group leader'
}, { index: 46, text: 'congregation'
}, { index: 47, text: 'faith'
}, { index: 48, text: 'fast, fasting'
}, { index: 49, text: 'hymn'
}, { index: 50, text: 'mass'
}, { index: 51, text: 'parish'
}, { index: 52, text: 'pray'
}, { index: 53, text: 'prayer'
}, { index: 54, text: 'preach'
}, { index: 55, text: 'Prometheus camp'
}, { index: 56, text: 'religion'
}, { index: 57, text: 'religious'
}, { index: 58, text: 'sacred'
}, { index: 59, text: 'secular'
}, { index: 60, text: 'sermon'
}, { index: 61, text: 'service'
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
    }
  };
    
for (var a=[],i=0;i<62;++i) a[i]=i;

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
    for (var i = 0; i < 62; i++) {
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
if(h>68){$("#kaikki").html("Kaikki lisätty jo!"); }      })
  }

var numero = 0;
var h = 6;
</script>
{{< /rawhtml >}}