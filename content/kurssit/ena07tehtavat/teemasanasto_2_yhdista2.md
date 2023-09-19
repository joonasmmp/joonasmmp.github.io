---
title: "Teema 2: Energy & Production - Yhdistä"
date: 2022-6-1
draft: false
type: page
weight: 64
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
 
  //Data for terms and definitions. This can be stored in a separate .js file, in a JSON file or here in the main file
   var data = {
    terms: [{
     index: 0, text: 'biofuel'
}, { index: 1, text: 'biogas'
}, { index: 2, text: 'biomass'
}, { index: 3, text: 'geothermal energy'
}, { index: 4, text: 'hydropower'
}, { index: 5, text: 'ocean energy'
}, { index: 6, text: 'solar energy'
}, { index: 7, text: 'tidal energy'
}, { index: 8, text: 'wave energy'
}, { index: 9, text: 'wind power'
}, { index: 10, text: 'wood pellet'
}, { index: 11, text: 'charcoal'
}, { index: 12, text: 'coal'
}, { index: 13, text: 'crude oil, petroleum'
}, { index: 14, text: 'fossil fuel'
}, { index: 15, text: 'natural gas'
}, { index: 16, text: 'nuclear energy'
}, { index: 17, text: 'peat'
}, { index: 18, text: 'battery'
}, { index: 19, text: 'blackout, power failure/cut/outage'
}, { index: 20, text: 'boiler'
}, { index: 21, text: 'central heating'
}, { index: 22, text: 'electrical grid'
}, { index: 23, text: 'energy supply'
}, { index: 24, text: 'geothermal heating'
}, { index: 25, text: 'oil rig'
}, { index: 26, text: 'power plant'
}, { index: 27, text: 'power line'
}, { index: 28, text: 'radiator'
}, { index: 29, text: 'solar panel'
}, { index: 30, text: 'wind farm'
}, { index: 31, text: 'wind turbine'
}, { index: 32, text: 'biodegradable'
}, { index: 33, text: 'compost'
}, { index: 34, text: 'contamination'
}, { index: 35, text: 'circular economy'
}, { index: 36, text: 'decompose'
}, { index: 37, text: 'dumpster'
}, { index: 38, text: 'garbage, waste, trash, rubbish, litter, debris'
}, { index: 39, text: 'hazardous waste'
}, { index: 40, text: 'inorganic waste'
}, { index: 41, text: 'landfill'
}, { index: 42, text: 'mixed waste'
}, { index: 43, text: 'organic waste'
}, { index: 44, text: 'packaging'
}, { index: 45, text: 'pollution'
}, { index: 46, text: 'recycle'
}, { index: 47, text: 'recyclable materials'
}, { index: 48, text: 'reuse'
}, { index: 49, text: 'scraps'
}, { index: 50, text: 'sewage, wastewater'
}, { index: 51, text: 'skip'
}, { index: 52, text: 'waste incineration'
}, { index: 53, text: 'crop, harvest, yield'
}, { index: 54, text: 'crop rotation'
}, { index: 55, text: 'dairy farm'
}, { index: 56, text: 'domestic animal'
}, { index: 57, text: 'dung, manure'
}, { index: 58, text: 'factory farming'
}, { index: 59, text: 'fertility'
}, { index: 60, text: 'fertiliser'
}, { index: 61, text: 'fodder'
}, { index: 62, text: 'food chain'
}, { index: 63, text: 'forestry'
}, { index: 64, text: 'genetically modified (GM)'
}, { index: 65, text: 'graze'
}, { index: 66, text: 'herbicide'
}, { index: 67, text: 'irrigation'
}, { index: 68, text: 'livestock'
}, { index: 69, text: 'local food'
}, { index: 70, text: 'organic'
}, { index: 71, text: 'pest'
}, { index: 72, text: 'pesticide'
}, { index: 73, text: 'preservative'
}, { index: 74, text: 'soil'



},

    ],

  definitions: [{
    
     index: 0, text: 'biopolttoaine'
}, { index: 1, text: 'biokaasu'
}, { index: 2, text: 'biomassa'
}, { index: 3, text: 'maalämpö'
}, { index: 4, text: 'vesivoima'
}, { index: 5, text: 'valtamerienergia'
}, { index: 6, text: 'aurinkovoima'
}, { index: 7, text: 'vuorovesivoima'
}, { index: 8, text: 'aaltovoima'
}, { index: 9, text: 'tuulivoima'
}, { index: 10, text: 'puupelletti'
}, { index: 11, text: 'puuhiili, antrasiitti'
}, { index: 12, text: 'kivihiili'
}, { index: 13, text: 'raakaöljy'
}, { index: 14, text: 'fossiilinen polttoaine'
}, { index: 15, text: 'maakaasu'
}, { index: 16, text: 'ydinvoima'
}, { index: 17, text: 'turve'
}, { index: 18, text: 'akku'
}, { index: 19, text: 'sähkökatko'
}, { index: 20, text: 'lämminvesivaraaja, vedenlämmitin'
}, { index: 21, text: 'keskuslämmitys'
}, { index: 22, text: 'sähköverkko'
}, { index: 23, text: 'energiantuotanto, energian jakelu'
}, { index: 24, text: 'maalämpö'
}, { index: 25, text: 'öljynporauslautta'
}, { index: 26, text: 'voimala'
}, { index: 27, text: 'sähkölinja'
}, { index: 28, text: 'lämpöpatteri'
}, { index: 29, text: 'aurinkopaneeli'
}, { index: 30, text: 'tuulivoimapuisto'
}, { index: 31, text: 'tuuliturbiini'
}, { index: 32, text: 'biologisesti hajoava'
}, { index: 33, text: 'kompostoida, komposti'
}, { index: 34, text: 'saastuminen, pilaantuminen'
}, { index: 35, text: 'kiertotalous'
}, { index: 36, text: 'maatua, hajottaa'
}, { index: 37, text: 'roskalaatikko'
}, { index: 38, text: 'jäte, jätteet, roska, roskat'
}, { index: 39, text: 'ongelmajäte, vaarallinen jäte'
}, { index: 40, text: 'epäorgaaninen jäte'
}, { index: 41, text: 'kaatopaikka'
}, { index: 42, text: 'sekajäte'
}, { index: 43, text: 'orgaaninen jäte'
}, { index: 44, text: 'pakkausmateriaali'
}, { index: 45, text: 'saastuminen, saaste'
}, { index: 46, text: 'kierrättää'
}, { index: 47, text: 'kierrätysmateriaali'
}, { index: 48, text: 'käyttää uudelleen'
}, { index: 49, text: 'ruoantähteet'
}, { index: 50, text: 'jätevesi'
}, { index: 51, text: 'jätelava'
}, { index: 52, text: 'jätteenpoltto'
}, { index: 53, text: 'sato'
}, { index: 54, text: 'vuoroviljely'
}, { index: 55, text: 'maitotila'
}, { index: 56, text: 'kotieläin'
}, { index: 57, text: 'lanta'
}, { index: 58, text: 'tehotuotanto'
}, { index: 59, text: 'hedelmällisyys'
}, { index: 60, text: 'lannoite'
}, { index: 61, text: 'rehu'
}, { index: 62, text: 'ravintoketju'
}, { index: 63, text: 'metsänhoito'
}, { index: 64, text: 'geenimuunneltu'
}, { index: 65, text: 'laiduntaa'
}, { index: 66, text: 'kasvimyrkky'
}, { index: 67, text: 'kastelu'
}, { index: 68, text: 'karja'
}, { index: 69, text: 'lähiruoka'
}, { index: 70, text: 'luomu'
}, { index: 71, text: 'tuholainen'
}, { index: 72, text: 'tuholaismyrkky'
}, { index: 73, text: 'säilöntäaine'
}, { index: 74, text: 'maaperä'



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
    }
  };
    
for (var a=[],i=0;i<75;++i) a[i]=i;

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
    for (var i = 0; i < 75; i++) {
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