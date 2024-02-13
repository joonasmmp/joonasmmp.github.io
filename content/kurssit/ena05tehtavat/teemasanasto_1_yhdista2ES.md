---
title: "Teema 1: Media - yhdistä sanat 2"
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
agregar más pares
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
         index: 0, text: 'ally'
    }, { index: 1, text: 'ambush'
    }, { index: 2, text: 'ammunition'
    }, { index: 3, text: 'armed conflict'
    }, { index: 4, text: 'armoury'
    }, { index: 5, text: 'artillery'
    }, { index: 6, text: 'barracks'
    }, { index: 7, text: 'be at war'
    }, { index: 8, text: 'beat/defeat the enemy'
    }, { index: 9, text: 'border'
    }, { index: 10, text: 'casualties'
    }, { index: 11, text: 'civil war'
    }, { index: 12, text: 'combat'
    }, { index: 13, text: 'conquer'
    }, { index: 14, text: 'conscript'
    }, { index: 15, text: 'curfew'
    }, { index: 16, text: 'declare war (on a country)'
    }, { index: 17, text: 'defeat'
    }, { index: 18, text: 'defend'
    }, { index: 19, text: 'disarmament'
    }, { index: 20, text: 'do one’s military service'
    }, { index: 21, text: 'do one’s non-military service'
    }, { index: 22, text: 'ethnic cleansing'
    }, { index: 23, text: 'friendly fire'
    }, { index: 24, text: 'garrison'
    }, { index: 25, text: 'genocide'
    }, { index: 26, text: 'guerilla war'
    }, { index: 27, text: 'infantry'
    }, { index: 28, text: 'invade'
    }, { index: 29, text: 'fleet'
    }, { index: 30, text: 'military base'
    }, { index: 31, text: 'missile'
    }, { index: 32, text: 'mobilisation'
    }, { index: 33, text: 'occupation'
    }, { index: 34, text: 'paratroopers'
    }, { index: 35, text: 'prisoner of war (POW)'
    }, { index: 36, text: 'rebellion'
    }, { index: 37, text: 'regiment'
    }, { index: 38, text: 'retreat, withdraw'
    }, { index: 39, text: 'sanction'
    }, { index: 40, text: 'surrender'
    }, { index: 41, text: 'trench'
    }, { index: 42, text: 'troops'
    }, { index: 43, text: 'urban warfare'
    }, { index: 44, text: 'resistance movement'
    }, { index: 45, text: 'siege'
    }, { index: 46, text: 'suffer heavy losses'
    }, { index: 47, text: 'wage war on'
    }, { index: 48, text: 'warfare'
    }, { index: 49, text: 'warmonger'
    }, { index: 50, text: 'weaponry'
    }, { index: 51, text: 'ceasefire'
    }, { index: 52, text: 'mediate'
    }, { index: 53, text: 'negotiate'
    }, { index: 54, text: 'peace-keeping forces'
    }, { index: 55, text: 'peace negotiations'
    }, { index: 56, text: 'peace treaty'
    }, { index: 57, text: 'truce'
    }, { index: 58, text: 'the Air Force'
    }, { index: 59, text: 'the Army'
    }, { index: 60, text: 'the Coast Guard'
    }, { index: 61, text: 'the Navy'
    }, { index: 62, text: 'the Marine Corps'

},

    ],
    definitions: [{
         index: 0, text: 'aliado'
    }, { index: 1, text: 'emboscada / acechar'
    }, { index: 2, text: 'municiones, suministros de munición'
    }, { index: 3, text: 'conflicto armado'
    }, { index: 4, text: 'armería'
    }, { index: 5, text: 'artillería'
    }, { index: 6, text: 'barracas'
    }, { index: 7, text: 'estar en guerra'
    }, { index: 8, text: 'vencer al enemigo'
    }, { index: 9, text: 'frontera'
    }, { index: 10, text: 'bajas'
    }, { index: 11, text: 'guerra civil'
    }, { index: 12, text: 'combate'
    }, { index: 13, text: 'conquistar'
    }, { index: 14, text: 'recluta, conscripto'
    }, { index: 15, text: 'toque de queda'
    }, { index: 16, text: 'declarar la guerra'
    }, { index: 17, text: 'derrota'
    }, { index: 18, text: 'defender'
    }, { index: 19, text: 'desarme'
    }, { index: 20, text: 'hacer el servicio militar'
    }, { index: 21, text: 'hacer el servicio civil'
    }, { index: 22, text: 'limpieza étnica'
    }, { index: 23, text: 'fuego amigo'
    }, { index: 24, text: 'guarnición'
    }, { index: 25, text: 'genocidio'
    }, { index: 26, text: 'guerra de guerrillas'
    }, { index: 27, text: 'infantería'
    }, { index: 28, text: 'invadir'
    }, { index: 29, text: 'flota'
    }, { index: 30, text: 'base militar'
    }, { index: 31, text: 'misil'
    }, { index: 32, text: 'movilización'
    }, { index: 33, text: 'ocupación'
    }, { index: 34, text: 'paracaidistas'
    }, { index: 35, text: 'prisionero de guerra'
    }, { index: 36, text: 'rebelión'
    }, { index: 37, text: 'regimiento'
    }, { index: 38, text: 'retirarse'
    }, { index: 39, text: 'sanción'
    }, { index: 40, text: 'rendirse'
    }, { index: 41, text: 'trinchera'
    }, { index: 42, text: 'tropas'
    }, { index: 43, text: 'guerra urbana'
    }, { index: 44, text: 'movimiento de resistencia'
    }, { index: 45, text: 'asedio / sitiar'
    }, { index: 46, text: 'sufrir grandes pérdidas'
    }, { index: 47, text: 'hacer la guerra'
    }, { index: 48, text: 'guerra'
    }, { index: 49, text: 'belicista'
    }, { index: 50, text: 'armamento'
    }, { index: 51, text: 'alto al fuego'
    }, { index: 52, text: 'mediar'
    }, { index: 53, text: 'negociar'
    }, { index: 54, text: 'fuerzas de paz'
    }, { index: 55, text: 'negociaciones de paz'
    }, { index: 56, text: 'tratado de paz'
    }, { index: 57, text: 'tregua'
    }, { index: 58, text: 'la Fuerza Aérea'
    }, { index: 59, text: 'el Ejército'
    }, { index: 60, text: 'la Guardia Costera'
    }, { index: 61, text: 'la Armada'
    }, { index: 62, text: 'Cuerpo de Marines'
};

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
    }
  };
    
for (var a=[],i=0;i<63;++i) a[i]=i;

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
    for (var i = 0; i < 63; i++) {
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
if(h>66){$("#kaikki").html("Kaikki lisätty jo!"); }      })
  }

var numero = 0;
var h = 6;
</script>
{{< /rawhtml >}}