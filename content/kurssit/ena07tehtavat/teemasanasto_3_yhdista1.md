---
title: "Teema 3: Climate change & Natural disasters - Yhdistä"
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
     index: 0, text: 'adaptation'
}, { index: 1, text: 'Anthropocene'
}, { index: 2, text: 'atmosphere'
}, { index: 3, text: 'biodiversity'
}, { index: 4, text: 'carbon dioxide, CO2'
}, { index: 5, text: 'carbon footprint'
}, { index: 6, text: 'carbon neutral'
}, { index: 7, text: 'carbon sink'
}, { index: 8, text: 'carbon tax'
}, { index: 9, text: 'climate change'
}, { index: 10, text: 'conservation'
}, { index: 11, text: 'corporate accountability'
}, { index: 12, text: 'eco-anxiety'
}, { index: 13, text: 'ecological restoration'
}, { index: 14, text: 'ecosystem'
}, { index: 15, text: 'emissions trading, cap and trade'
}, { index: 16, text: 'global warming'
}, { index: 17, text: 'greenhouse effect'
}, { index: 18, text: 'greenhouse gas'
}, { index: 19, text: 'green transition'
}, { index: 20, text: 'greenwash'
}, { index: 21, text: 'intergenerational equity'
}, { index: 22, text: 'methane'
}, { index: 23, text: 'mitigation'
}, { index: 24, text: 'offsetting'
}, { index: 25, text: 'solar irradiance'
}, { index: 26, text: 'sustainability'
}, { index: 27, text: 'sustainable development'
}, { index: 28, text: 'tipping point'
}, { index: 29, text: 'algal bloom'
}, { index: 30, text: 'Arctic shrinkage'
}, { index: 31, text: 'avalanche'
}, { index: 32, text: 'biodiversity loss'
}, { index: 33, text: 'blizzard'
}, { index: 34, text: 'coral bleaching'
}, { index: 35, text: 'cyclone, hurricane, typhoon'
}, { index: 36, text: 'deforestation'
}, { index: 37, text: 'desertification'
}, { index: 38, text: 'drought'
}, { index: 39, text: 'earthquake'
}, { index: 40, text: 'eutrophication'
}, { index: 41, text: 'heatwave'
}, { index: 42, text: 'flood'
}, { index: 43, text: 'landslide'
}, { index: 44, text: 'ocean acidification'
}, { index: 45, text: 'ozone depletion'
}, { index: 46, text: 'sea level rise'
}, { index: 47, text: 'volcanic eruption'
}, { index: 48, text: 'wildfire'



},

    ],

  definitions: [{
    
}, { index: 0, text: 'sopeutuminen'
}, { index: 1, text: 'antroposeeni, ihmisen vaikutuksen aikakausi'
}, { index: 2, text: 'ilmakehä'
}, { index: 3, text: 'luonnon monimuotoisuus'
}, { index: 4, text: 'hiilidioksidi'
}, { index: 5, text: 'hiilijalanjälki'
}, { index: 6, text: 'hiilineutraali'
}, { index: 7, text: 'hiilinielu'
}, { index: 8, text: 'hiilivero'
}, { index: 9, text: 'ilmastonmuutos'
}, { index: 10, text: 'ympäristönsuojelu'
}, { index: 11, text: 'yritysvastuu'
}, { index: 12, text: 'ilmastoahdistus'
}, { index: 13, text: 'luonnon ennallistaminen'
}, { index: 14, text: 'ekosysteemi'
}, { index: 15, text: 'päästökauppa'
}, { index: 16, text: 'ilmaston lämpeneminen'
}, { index: 17, text: 'kasvihuoneilmiö'
}, { index: 18, text: 'kasvihuonekaasu'
}, { index: 19, text: 'vihreä siirtymä'
}, { index: 20, text: 'viherpesu'
}, { index: 21, text: 'sukupolvien välinen tasa-arvo'
}, { index: 22, text: 'metaani'
}, { index: 23, text: 'lieventäminen'
}, { index: 24, text: 'kompensaatio, hyvitys'
}, { index: 25, text: 'auringon säteily'
}, { index: 26, text: 'kestävyys'
}, { index: 27, text: 'kestävä kehitys'
}, { index: 28, text: 'keikahduspiste, kriittinen piste'
}, { index: 29, text: 'leväkukinta'
}, { index: 30, text: 'arktisen alueen kutistuminen'
}, { index: 31, text: 'lumivyöry'
}, { index: 32, text: 'luontokato'
}, { index: 33, text: 'lumimyrsky'
}, { index: 34, text: 'korallien vaaleneminen'
}, { index: 35, text: 'trooppinen hirmumyrsky'
}, { index: 36, text: 'metsäkato'
}, { index: 37, text: 'aavikoituminen'
}, { index: 38, text: 'kuivuus'
}, { index: 39, text: 'maanjäristys'
}, { index: 40, text: 'rehevöityminen'
}, { index: 41, text: 'helleaalto'
}, { index: 42, text: 'tulva'
}, { index: 43, text: 'maanvyöry'
}, { index: 44, text: 'merien happamoituminen'
}, { index: 45, text: 'otsonikato'
}, { index: 46, text: 'merenpinnan nousu'
}, { index: 47, text: 'tulivuorenpurkaus'
}, { index: 48, text: 'maastopalo'



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
    }
  };
    
for (var a=[],i=0;i<49;++i) a[i]=i;

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
    for (var i = 0; i < 49; i++) {
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