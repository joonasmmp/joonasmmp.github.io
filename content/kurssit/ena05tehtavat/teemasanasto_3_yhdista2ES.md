---
title: "Teema 3: Traffic - yhdistä sanat (ES)"
date: 2022-6-1
draft: false
type: page
weight: 69
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
        
         index: 0, text: 'freight train'
    }, { index: 1, text: 'high-speed rail'
    }, { index: 2, text: 'lorry (BrE), truck (AmE)'
    }, { index: 3, text: 'regional / commuter / local train'
    }, { index: 4, text: 'tram'
    }, { index: 5, text: 'underground (BrE), subway (AmE)'
    }, { index: 6, text: 'vehicle'
    }, { index: 7, text: 'biker'
    }, { index: 8, text: 'co-driver'
    }, { index: 9, text: 'commuter'
    }, { index: 10, text: 'cyclist'
    }, { index: 11, text: 'motorist'
    }, { index: 12, text: 'passenger'
    }, { index: 13, text: 'pedestrian'
    }, { index: 14, text: 'traffic warden'
    }, { index: 15, text: 'accelerate'
    }, { index: 16, text: 'annual inspection, vehicle safety inspection, MOT (Ministry of Safety test)'
    }, { index: 17, text: 'annual vehicle tax'
    }, { index: 18, text: 'aviation'
    }, { index: 19, text: 'breathalyzer test'
    }, { index: 20, text: 'built-up area'
    }, { index: 21, text: 'bypass'
    }, { index: 22, text: 'car park (BrE), parking lot (AmE)'
    }, { index: 23, text: 'carpool'
    }, { index: 24, text: 'collision, crash'
    }, { index: 25, text: 'curb'
    }, { index: 26, text: 'cycling lane'
    }, { index: 27, text: 'detour, diversion'
    }, { index: 28, text: 'driving licence (BrE), driver’s license (AmE)'
    }, { index: 29, text: 'driving school'
    }, { index: 30, text: 'fast lane'
    }, { index: 31, text: 'fine, ticket'
    }, { index: 32, text: 'freight, cargo'
    }, { index: 33, text: 'gas station (AmE), service station (BrE)'
    }, { index: 34, text: 'head-on collision'
    }, { index: 35, text: 'highway'
    }, { index: 36, text: 'insurance'
    }, { index: 37, text: 'interchange'
    }, { index: 38, text: 'intersection, junction, crossroads'
    }, { index: 39, text: 'lane'
    }, { index: 40, text: 'lay-by (BrE), rest stop (AmE)'
    }, { index: 41, text: 'motorway (BrE), freeway (AmE), interstate (AmE)'
    }, { index: 42, text: 'one-way traffic'
    }, { index: 43, text: 'overtake (BrE), pass (AmE)'
    }, { index: 44, text: 'parallel parking'
    }, { index: 45, text: 'park'
    }, { index: 46, text: 'parking meter, parking app'
    }, { index: 47, text: 'parking space'
    }, { index: 48, text: 'pavement (BrE), sidewalk (AmE)'
    }, { index: 49, text: 'paving'
    }, { index: 50, text: 'pedestrian crossing (BrE), zebra crossing (BrE), crosswalk (AmE)'
    }, { index: 51, text: 'pile-up'
    }, { index: 52, text: 'public transport'
    }, { index: 53, text: 'rail, track'
    }, { index: 54, text: 'ramp, exit'
    }, { index: 55, text: 'reduce speed'
    }, { index: 56, text: 'refuel, fill the tank'
    }, { index: 57, text: 'right-of-way'
    }, { index: 58, text: 'ring road'
    }, { index: 59, text: 'road rage'
    }, { index: 60, text: 'road safety'
    }, { index: 61, text: 'roadworks'
    }, { index: 62, text: 'roundabout (BrE), traffic circle (AmE)'
    }, { index: 63, text: 'route'
    }, { index: 64, text: 'rush hour'
    }, { index: 65, text: 'shotgun'
    }, { index: 66, text: '(hard) shoulder'
    }, { index: 67, text: 'speed camera'
    }, { index: 68, text: 'speed limit'
    }, { index: 69, text: 'speed trap, radar'
    }, { index: 70, text: 'speeding'
    }, { index: 71, text: 'subway (BrE), underpass (AmE)'
    }, { index: 72, text: 'tailgating'
    }, { index: 73, text: 'toll, charge'
    }, { index: 74, text: 'traffic island'
    }, { index: 75, text: 'traffic jam, congestion'
    }, { index: 76, text: 'traffic regulation, rule of the road'
    }, { index: 77, text: 'traffic violation'

},

    ],
    definitions: [{
        index: 0, text: 'tren de mercancías'
    }, { index: 1, text: 'tren bala'
    }, { index: 2, text: 'camión'
    }, { index: 3, text: 'tren suburbano'
    }, { index: 4, text: 'tranvía'
    }, { index: 5, text: 'metro'
    }, { index: 6, text: 'vehículo'
    }, { index: 7, text: 'motociclista, ciclista'
    }, { index: 8, text: 'copiloto'
    }, { index: 9, text: 'viajero de trabajo'
    }, { index: 10, text: 'ciclista'
    }, { index: 11, text: 'vehículo motorizado'
    }, { index: 12, text: 'pasajero'
    }, { index: 13, text: 'peatón'
    }, { index: 14, text: 'inspector de estacionamiento'
    }, { index: 15, text: 'acelerar'
    }, { index: 16, text: 'inspección técnica'
    }, { index: 17, text: 'impuesto de circulación'
    }, { index: 18, text: 'aviación'
    }, { index: 19, text: 'prueba de alcoholemia'
    }, { index: 20, text: 'zona urbana'
    }, { index: 21, text: 'carretera de circunvalación'
    }, { index: 22, text: 'aparcamiento'
    }, { index: 23, text: 'compartir coche'
    }, { index: 24, text: 'colisión'
    }, { index: 25, text: 'bordillo'
    }, { index: 26, text: 'carril bici'
    }, { index: 27, text: 'desvío'
    }, { index: 28, text: 'licencia de conducir'
    }, { index: 29, text: 'autoescuela'
    }, { index: 30, text: 'carril de adelantamiento'
    }, { index: 31, text: 'multa'
    }, { index: 32, text: 'carga'
    }, { index: 33, text: 'gasolinera'
    }, { index: 34, text: 'choque frontal'
    }, { index: 35, text: 'carretera principal'
    }, { index: 36, text: 'seguro'
    }, { index: 37, text: 'intercambiador'
    }, { index: 38, text: 'intersección'
    }, { index: 39, text: 'carril'
    }, { index: 40, text: 'área de descanso'
    }, { index: 41, text: 'autopista'
    }, { index: 42, text: 'tráfico de sentido único'
    }, { index: 43, text: 'adelantar'
    }, { index: 44, text: 'aparcamiento en batería'
    }, { index: 45, text: 'estacionar'
    }, { index: 46, text: 'parquímetro'
    }, { index: 47, text: 'plaza de aparcamiento'
    }, { index: 48, text: 'acera'
    }, { index: 49, text: 'adoquín'
    }, { index: 50, text: 'paso de peatones'
    }, { index: 51, text: 'colisión en cadena'
    }, { index: 52, text: 'transporte público'
    }, { index: 53, text: 'vía férrea'
    }, { index: 54, text: 'rampa'
    }, { index: 55, text: 'ralentizar'
    }, { index: 56, text: 'repostar'
    }, { index: 57, text: 'derecho de paso'
    }, { index: 58, text: 'carretera de circunvalación'
    }, { index: 59, text: 'ira al volante'
    }, { index: 60, text: 'seguridad vial'
    }, { index: 61, text: 'trabajo en carretera'
    }, { index: 62, text: 'glorieta'
    }, { index: 63, text: 'ruta'
    }, { index: 64, text: 'hora punta'
    }, { index: 65, text: 'asiento del copiloto'
    }, { index: 66, text: 'orilla'
    }, { index: 67, text: 'cámara de velocidad'
    }, { index: 68, text: 'límite de velocidad'
    }, { index: 69, text: 'radar'
    }, { index: 70, text: 'exceso de velocidad'
    }, { index: 71, text: 'túnel peatonal'
    }, { index: 72, text: 'enganchón'
    }, { index: 73, text: 'pago'
    }, { index: 74, text: 'isleta'
    }, { index: 75, text: 'atasco de tráfico'
    }, { index: 76, text: 'norma de tráfico'
    }, { index: 77, text: 'infracción de tráfico'
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
    }
  };
    
for (var a=[],i=0;i<78;++i) a[i]=i;

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
    for (var i = 0; i < 78; i++) {
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