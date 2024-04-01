---
title: "Teema 1: Media - yhdistä sanat 2 (ES)"
date: 2022-6-1
draft: false
type: page
weight: 67
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
         index: 0, text: 'analysis, analyses'
    }, { index: 1, text: 'average'
    }, { index: 2, text: 'cell'
    }, { index: 3, text: 'chart, table'
    }, { index: 4, text: 'classification'
    }, { index: 5, text: 'concept'
    }, { index: 6, text: 'conclusion'
    }, { index: 7, text: 'conduct an experiment'
    }, { index: 8, text: 'data'
    }, { index: 9, text: 'database'
    }, { index: 10, text: 'discover'
    }, { index: 11, text: 'discovery'
    }, { index: 12, text: 'engineer'
    }, { index: 13, text: 'evidence'
    }, { index: 14, text: 'experiment'
    }, { index: 15, text: 'genetic engineering, gene editing'
    }, { index: 16, text: 'hypothesis, hypotheses'
    }, { index: 17, text: 'invent'
    }, { index: 18, text: 'invention'
    }, { index: 19, text: 'measure'
    }, { index: 20, text: 'observe'
    }, { index: 21, text: 'researcher'
    }, { index: 22, text: 'scale'
    }, { index: 23, text: 'scientific'
    }, { index: 24, text: 'scientist'
    }, { index: 25, text: 'statistics'
    }, { index: 26, text: 'survey'
    }, { index: 27, text: 'variable'
    }, { index: 28, text: 'accelerate'
    }, { index: 29, text: 'acceleration'
    }, { index: 30, text: 'charge'
    }, { index: 31, text: 'circuit'
    }, { index: 32, text: 'density'
    }, { index: 33, text: 'dissolve'
    }, { index: 34, text: 'electric current'
    }, { index: 35, text: 'formula, formulae'
    }, { index: 36, text: 'frequency'
    }, { index: 37, text: 'friction'
    }, { index: 38, text: 'gravity'
    }, { index: 39, text: 'inertia'
    }, { index: 40, text: 'lever'
    }, { index: 41, text: 'magnification'
    }, { index: 42, text: 'mass'
    }, { index: 43, text: 'matter'
    }, { index: 44, text: 'nuclear physics'
    }, { index: 45, text: 'nucleus, nuclei'
    }, { index: 46, text: 'orbit'
    }, { index: 47, text: 'phenomenon, phenomena'
    }, { index: 48, text: 'physicist'
    }, { index: 49, text: 'radiation'
    }, { index: 50, text: 'volume'
    }, { index: 51, text: 'velocity, speed'
    }, { index: 52, text: 'wavelength'
    }, { index: 53, text: 'acid'
    }, { index: 54, text: 'atom'
    }, { index: 55, text: 'base'
    }, { index: 56, text: 'carbon dioxide'
    }, { index: 57, text: 'chemical reaction'
    }, { index: 58, text: 'chemist'
    }, { index: 59, text: 'compound'
    }, { index: 60, text: 'element'
    }, { index: 61, text: 'evaporate'
    }, { index: 62, text: 'gas'
    }, { index: 63, text: 'hydrogen'
    }, { index: 64, text: 'molecule'
    }, { index: 65, text: 'liquid'
    }, { index: 66, text: 'nitrogen'
    }, { index: 67, text: 'oxidation'
    }, { index: 68, text: 'oxygen'
    }, { index: 69, text: 'periodic table'
    }, { index: 70, text: 'property'
    }, { index: 71, text: 'reduction'
    }, { index: 72, text: 'saturated'
    }, { index: 73, text: 'solid'
    }, { index: 74, text: 'solution'
    }, { index: 75, text: 'substance'

},

    ],
    definitions: [{        
         index: 0, text: 'análisis, análisis'
    }, { index: 1, text: 'promedio'
    }, { index: 2, text: 'célula'
    }, { index: 3, text: 'tabla, gráfico'
    }, { index: 4, text: 'clasificación'
    }, { index: 5, text: 'concepto'
    }, { index: 6, text: 'conclusión'
    }, { index: 7, text: 'realizar un experimento'
    }, { index: 8, text: 'datos'
    }, { index: 9, text: 'base de datos'
    }, { index: 10, text: 'descubrir'
    }, { index: 11, text: 'descubrimiento'
    }, { index: 12, text: 'ingeniero'
    }, { index: 13, text: 'evidencia'
    }, { index: 14, text: 'experimento'
    }, { index: 15, text: 'ingeniería genética, edición de genes'
    }, { index: 16, text: 'hipótesis, hipótesis'
    }, { index: 17, text: 'inventar'
    }, { index: 18, text: 'invento'
    }, { index: 19, text: 'medir'
    }, { index: 20, text: 'observar'
    }, { index: 21, text: 'investigador'
    }, { index: 22, text: 'escala'
    }, { index: 23, text: 'científico'
    }, { index: 24, text: 'científico'
    }, { index: 25, text: 'estadísticas'
    }, { index: 26, text: 'encuesta'
    }, { index: 27, text: 'variable'
    }, { index: 28, text: 'acelerar'
    }, { index: 29, text: 'aceleración'
    }, { index: 30, text: 'carga'
    }, { index: 31, text: 'circuito'
    }, { index: 32, text: 'densidad'
    }, { index: 33, text: 'disolver'
    }, { index: 34, text: 'corriente eléctrica'
    }, { index: 35, text: 'fórmula, fórmula'
    }, { index: 36, text: 'frecuencia'
    }, { index: 37, text: 'fricción'
    }, { index: 38, text: 'gravedad'
    }, { index: 39, text: 'inercia'
    }, { index: 40, text: 'palanca'
    }, { index: 41, text: 'ampliación'
    }, { index: 42, text: 'masa'
    }, { index: 43, text: 'materia'
    }, { index: 44, text: 'física nuclear'
    }, { index: 45, text: 'núcleo, núcleos'
    }, { index: 46, text: 'órbita'
    }, { index: 47, text: 'fenómeno, fenómenos'
    }, { index: 48, text: 'físico'
    }, { index: 49, text: 'radiación'
    }, { index: 50, text: 'volumen'
    }, { index: 51, text: 'velocidad, rapidez'
    }, { index: 52, text: 'longitud de onda'
    }, { index: 53, text: 'ácido'
    }, { index: 54, text: 'átomo'
    }, { index: 55, text: 'base'
    }, { index: 56, text: 'dióxido de carbono'
    }, { index: 57, text: 'reacción química'
    }, { index: 58, text: 'químico'
    }, { index: 59, text: 'compuesto'
    }, { index: 60, text: 'elemento'
    }, { index: 61, text: 'evaporar'
    }, { index: 62, text: 'gas'
    }, { index: 63, text: 'hidrógeno'
    }, { index: 64, text: 'molécula'
    }, { index: 65, text: 'líquido'
    }, { index: 66, text: 'nitrógeno'
    }, { index: 67, text: 'oxidación'
    }, { index: 68, text: 'oxígeno'
    }, { index: 69, text: 'tabla periódica'
    }, { index: 70, text: 'propiedad'
    }, { index: 71, text: 'reducción'
    }, { index: 72, text: 'saturado'
    }, { index: 73, text: 'sólido'
    }, { index: 74, text: 'solución'
    }, { index: 75, text: 'sustancia'
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
    }
  };
    
for (var a=[],i=0;i<76;++i) a[i]=i;

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
    for (var i = 0; i < 76; i++) {
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
if(h>80){$("#kaikki").html("Misión cumplida!"); }      })
  }

var numero = 0;
var h = 6;
</script>
{{< /rawhtml >}}