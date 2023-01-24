---
title: "Teema 3: Politics & Global issues - yhdistä sanat 2"
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
}, { index: 0, text: 'laki, asetus'
}, { index: 1, text: 'hallinto'
}, { index: 2, text: 'lakiehdotus'
}, { index: 3, text: 'ehdokas'
}, { index: 4, text: 'väestönlaskenta'
}, { index: 5, text: 'kokoomus-, koalitiohallitus'
}, { index: 6, text: 'perustuslaki'
}, { index: 7, text: 'demokratia'
}, { index: 8, text: 'hajottaa'
}, { index: 9, text: 'sisäpolitiikka'
}, { index: 10, text: 'vaalikampanja'
}, { index: 11, text: 'ulkopolitiikka'
}, { index: 12, text: 'eduskuntavaalit'
}, { index: 13, text: 'hallitus'
}, { index: 14, text: 'valtion päämies'
}, { index: 15, text: 'oikeuslaitos'
}, { index: 16, text: 'lainsäädäntö'
}, { index: 17, text: 'enemmistö'
}, { index: 18, text: 'kansanedustaja'
}, { index: 19, text: 'eurokansanedustaja'
}, { index: 20, text: 'vähemmistö'
}, { index: 21, text: 'monarkia'
}, { index: 22, text: 'kunnallisvaalit'
}, { index: 23, text: 'kunta'
}, { index: 24, text: 'oppositio'
}, { index: 25, text: 'eduskunta, parlamentti'
}, { index: 26, text: 'puolue'
}, { index: 27, text: 'kansanäänestys'
}, { index: 28, text: 'tasavalta'
}, { index: 29, text: 'olla ehdolla'
}, { index: 30, text: 'virkakausi'
}, { index: 31, text: 'Euroopan Unioni'
}, { index: 32, text: 'vasemmisto'
}, { index: 33, text: 'oikeisto'
}, { index: 34, text: 'äänioikeus'
}, { index: 35, text: 'varapresidentti'
}, { index: 36, text: 'äänestää'
}, { index: 37, text: 'avustustyöntekijä'
}, { index: 38, text: 'syrjäytyminen'
}, { index: 39, text: 'turvapaikka'
}, { index: 40, text: 'turvapaikanhakija'
}, { index: 41, text: 'mustat, alkuperäiskansat ja muut ei-valkoiseksi rodullistetut henkilöt'
}, { index: 42, text: 'hyväntekeväisyys(järjestö)'
}, { index: 43, text: 'maastakarkotus'
}, { index: 44, text: 'kehittyvä maa'
}, { index: 45, text: 'syrjintä'
}, { index: 46, text: 'toisinajattelija'
}, { index: 47, text: 'muuttaa maasta'
}, { index: 48, text: 'ulkomailla asuva'
}, { index: 49, text: 'reilu kauppa'
}, { index: 50, text: 'nälänhätä'
}, { index: 51, text: 'myöntää'
}, { index: 52, text: 'hätäapu'
}, { index: 53, text: 'luku- ja kirjoitustaidoton'
}, { index: 54, text: 'maahanmuuttaja'
}, { index: 55, text: 'maahanmuutto'
}, { index: 56, text: 'kotoperäinen, alkuperäinen'
}, { index: 57, text: 'lapsikuolleisuus'
}, { index: 58, text: 'sulautuminen'
}, { index: 59, text: 'oikeudenmukaisuus, oikeus'
}, { index: 60, text: 'odotettu elinikä'
}, { index: 61, text: 'luku- ja kirjoitustaito'
}, { index: 62, text: 'elinolosuhteet'
}, { index: 63, text: 'vähävarainen maa'
}, { index: 64, text: 'aliravitsemus, huono ravinto'
}, { index: 65, text: 'rahallinen apu'
}, { index: 66, text: 'monikulttuurinen'
}, { index: 67, text: 'kansalaisjärjestö'
}, { index: 68, text: 'rauhanturvaaja'
}, { index: 69, text: 'rotuerottelu'
}, { index: 70, text: 'rasismi, rotuviha'
}, { index: 71, text: 'vastaanottokeskus'
}, { index: 72, text: 'pakolainen'
}, { index: 73, text: 'avustustyöntekijä'
}, { index: 74, text: 'oleskelulupa'
}, { index: 75, text: 'slummi'
}, { index: 76, text: 'nälänhätä'
}, { index: 77, text: 'suvaitsevaisuus'
}, { index: 78, text: 'työlupa'
},
    ],
    definitions: [{
     index: 0, text: 'act'
}, { index: 1, text: 'administration'
}, { index: 2, text: 'bill'
}, { index: 3, text: 'candidate'
}, { index: 4, text: 'census'
}, { index: 5, text: 'coalition government'
}, { index: 6, text: 'constitution'
}, { index: 7, text: 'democracy'
}, { index: 8, text: 'dissolve'
}, { index: 9, text: 'domestic policy'
}, { index: 10, text: 'election campaign'
}, { index: 11, text: 'foreign policy'
}, { index: 12, text: 'general elections'
}, { index: 13, text: 'government'
}, { index: 14, text: 'head of state'
}, { index: 15, text: 'judiciary, judicial system'
}, { index: 16, text: 'legislation'
}, { index: 17, text: 'majority'
}, { index: 18, text: 'Member of Parliament (MP) / representative'
}, { index: 19, text: 'Member of the European Parliament (MEP)'
}, { index: 20, text: 'minority'
}, { index: 21, text: 'monarchy'
}, { index: 22, text: 'municipal elections'
}, { index: 23, text: 'municipality'
}, { index: 24, text: 'opposition'
}, { index: 25, text: 'parliament'
}, { index: 26, text: 'party'
}, { index: 27, text: 'referendum'
}, { index: 28, text: 'republic'
}, { index: 29, text: 'stand for (BrE), run for (AmE)'
}, { index: 30, text: 'term (of office)'
}, { index: 31, text: 'the European Union'
}, { index: 32, text: 'the Left, the left wing'
}, { index: 33, text: 'the Right, the right wing'
}, { index: 34, text: 'universal suffrage, right to vote'
}, { index: 35, text: 'vice-president'
}, { index: 36, text: 'vote'
}, { index: 37, text: 'aid worker, relief worker'
}, { index: 38, text: 'alienation'
}, { index: 39, text: 'asylum'
}, { index: 40, text: 'asylum seeker'
}, { index: 41, text: 'BIPOC (black, indigenous and people of color)'
}, { index: 42, text: 'charity'
}, { index: 43, text: 'deportation'
}, { index: 44, text: 'developing country'
}, { index: 45, text: 'discrimination'
}, { index: 46, text: 'dissident'
}, { index: 47, text: 'emigrate'
}, { index: 48, text: 'expat'
}, { index: 49, text: 'fair trade'
}, { index: 50, text: 'famine'
}, { index: 51, text: 'grant'
}, { index: 52, text: 'humanitarian aid / relief aid'
}, { index: 53, text: 'illiterate'
}, { index: 54, text: 'immigrant'
}, { index: 55, text: 'immigration'
}, { index: 56, text: 'indigenous'
}, { index: 57, text: 'infant mortality'
}, { index: 58, text: 'integration'
}, { index: 59, text: 'justice'
}, { index: 60, text: 'life expectancy'
}, { index: 61, text: 'literacy'
}, { index: 62, text: 'living conditions'
}, { index: 63, text: 'low-income country'
}, { index: 64, text: 'malnourishment'
}, { index: 65, text: 'monetary aid'
}, { index: 66, text: 'multicultural'
}, { index: 67, text: 'NGO, non-governmental organisation'
}, { index: 68, text: 'peacekeeper'
}, { index: 69, text: 'racial segregation'
}, { index: 70, text: 'racism'
}, { index: 71, text: 'reception centre'
}, { index: 72, text: 'refugee'
}, { index: 73, text: 'relief worker'
}, { index: 74, text: 'residence permit'
}, { index: 75, text: 'slum / urban ghetto'
}, { index: 76, text: 'starvation'
}, { index: 77, text: 'tolerance'
}, { index: 78, text: 'work permit'
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
    }
  };
    
for (var a=[],i=0;i<79;++i) a[i]=i;

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
    for (var i = 0; i < 79; i++) {
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
if(h>85){$("#kaikki").html("Kaikki lisätty jo!"); }      })
  }

var numero = 0;
var h = 6;
</script>
{{< /rawhtml >}}