---
title: "Teema 1: Body parts - Yhdistä"
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
     index: 0, text: 'archipelago'
}, { index: 1, text: 'bay, gulf'
}, { index: 2, text: 'brook'
}, { index: 3, text: 'canal, channel'
}, { index: 4, text: 'coast'
}, { index: 5, text: 'current'
}, { index: 6, text: 'delta'
}, { index: 7, text: 'ditch'
}, { index: 8, text: 'glacier'
}, { index: 9, text: 'iceberg'
}, { index: 10, text: 'island'
}, { index: 11, text: 'lake'
}, { index: 12, text: 'ocean'
}, { index: 13, text: 'peninsula'
}, { index: 14, text: 'pond'
}, { index: 15, text: 'reef'
}, { index: 16, text: 'river'
}, { index: 17, text: 'sea'
}, { index: 18, text: 'spring'
}, { index: 19, text: 'tide'
}, { index: 20, text: 'waterfall'
}, { index: 21, text: 'clay'
}, { index: 22, text: 'continent'
}, { index: 23, text: 'desert'
}, { index: 24, text: 'dirt, earth, soil'
}, { index: 25, text: 'fertile'
}, { index: 26, text: 'field'
}, { index: 27, text: 'fjeld, fell'
}, { index: 28, text: 'gorge, ravine'
}, { index: 29, text: 'gravel'
}, { index: 30, text: 'hill'
}, { index: 31, text: 'interior'
}, { index: 32, text: 'landscape, scenery'
}, { index: 33, text: 'lowland'
}, { index: 34, text: 'mainland'
}, { index: 35, text: 'mountain range'
}, { index: 36, text: 'mud'
}, { index: 37, text: 'non-arable, barren'
}, { index: 38, text: 'plain'
}, { index: 39, text: 'plateau'
}, { index: 40, text: 'sand'
}, { index: 41, text: 'slope'
}, { index: 42, text: 'soil, earth, ground'
}, { index: 43, text: 'valley'
}, { index: 44, text: 'volcano'
}, { index: 45, text: 'wilderness'
}, { index: 46, text: 'endangered (species)'
}, { index: 47, text: 'extinction'
}, { index: 48, text: 'food chain'
}, { index: 49, text: 'habitat'
}, { index: 50, text: 'indigenous'
}, { index: 51, text: 'invasive species'
}, { index: 52, text: 'protected (species)'
}, { index: 53, text: 'sanctuary'
}, { index: 54, text: 'species, species'
}, { index: 55, text: 'wildlife'
}, { index: 56, text: 'alga, algae'
}, { index: 57, text: 'bloom'
}, { index: 58, text: 'blossom'
}, { index: 59, text: 'branch'
}, { index: 60, text: 'bud'
}, { index: 61, text: 'bush'
}, { index: 62, text: 'cone'
}, { index: 63, text: 'coniferous tree'
}, { index: 64, text: 'cyanobacteria, blue-green algae'
}, { index: 65, text: 'deciduous tree'
}, { index: 66, text: 'evergreen (plant)'
}, { index: 67, text: 'flora and fauna'
}, { index: 68, text: 'foliage'
}, { index: 69, text: 'forest'
}, { index: 70, text: 'grove'
}, { index: 71, text: 'herb'
}, { index: 72, text: 'jungle'
}, { index: 73, text: 'lichen'
}, { index: 74, text: 'meadow'
}, { index: 75, text: 'moss'
}, { index: 76, text: 'mushroom; fungus, fungi'
}, { index: 77, text: 'needle'
}, { index: 78, text: 'plant'
}, { index: 79, text: 'pollen'
}, { index: 80, text: 'sapling'
}, { index: 81, text: 'seed'
}, { index: 82, text: 'shrub'
}, { index: 83, text: 'sprout'
}, { index: 84, text: 'swamp, bog, marshland'
}, { index: 85, text: 'trunk'
}, { index: 86, text: 'vegetation'
}, { index: 87, text: 'weed'
}, { index: 88, text: 'wither'
}, { index: 89, text: 'amphibian'
}, { index: 90, text: 'antenna, antennae'
}, { index: 91, text: 'arachnid'
}, { index: 92, text: 'beast'
}, { index: 93, text: 'bird of prey'
}, { index: 94, text: 'bovine animal'
}, { index: 95, text: 'breed'
}, { index: 96, text: 'carnivore'
}, { index: 97, text: 'claw'
}, { index: 98, text: 'fin'
}, { index: 99, text: 'fur'
}, { index: 100, text: 'game'
}, { index: 101, text: 'gill'
}, { index: 102, text: 'herbivore'
}, { index: 103, text: 'hibernate'
}, { index: 104, text: 'hoof'
}, { index: 105, text: 'horn'
}, { index: 106, text: 'hump'
}, { index: 107, text: 'insect'
}, { index: 108, text: 'invertebrate'
}, { index: 109, text: 'mammal'
}, { index: 110, text: 'marsupial'
}, { index: 111, text: 'migratory bird'
}, { index: 112, text: 'mollusc'
}, { index: 113, text: 'muzzle'
}, { index: 114, text: 'nest'
}, { index: 115, text: 'nocturnal animal'
}, { index: 116, text: 'offspring'
}, { index: 117, text: 'paw'
}, { index: 118, text: 'reptile'
}, { index: 119, text: 'rodent'
}, { index: 120, text: 'scavenger'
}, { index: 121, text: 'shell'
}, { index: 122, text: 'tail'
}, { index: 123, text: 'tentacle'
}, { index: 124, text: 'territory'
}, { index: 125, text: 'tusk'
}, { index: 126, text: 'vermin'
}, { index: 127, text: 'vertebrate'
}, { index: 128, text: 'whisker'


},

    ],

  definitions: [{
    
     index: 0, text: 'saaristo'
}, { index: 1, text: 'lahti'
}, { index: 2, text: 'puro'
}, { index: 3, text: 'kanaali'
}, { index: 4, text: 'rannikko'
}, { index: 5, text: 'virta, virtaus'
}, { index: 6, text: 'suisto'
}, { index: 7, text: 'oja'
}, { index: 8, text: 'jäätikkö'
}, { index: 9, text: 'jäävuori'
}, { index: 10, text: 'saari'
}, { index: 11, text: 'järvi'
}, { index: 12, text: 'valtameri'
}, { index: 13, text: 'niemimaa'
}, { index: 14, text: 'lampi'
}, { index: 15, text: 'riutta, särkkä'
}, { index: 16, text: 'joki'
}, { index: 17, text: 'meri'
}, { index: 18, text: 'lähde'
}, { index: 19, text: 'vuorovesi'
}, { index: 20, text: 'vesiputous'
}, { index: 21, text: 'savi'
}, { index: 22, text: 'maanosa'
}, { index: 23, text: 'autiomaa'
}, { index: 24, text: 'multa'
}, { index: 25, text: 'hedelmällinen'
}, { index: 26, text: 'pelto'
}, { index: 27, text: 'tunturi'
}, { index: 28, text: 'rotko'
}, { index: 29, text: 'sora'
}, { index: 30, text: 'mäki, kukkula'
}, { index: 31, text: 'sisämaa'
}, { index: 32, text: 'maisema'
}, { index: 33, text: 'alanko'
}, { index: 34, text: 'mantere'
}, { index: 35, text: 'vuoristo'
}, { index: 36, text: 'muta'
}, { index: 37, text: 'viljelyyn sopimaton'
}, { index: 38, text: 'tasanko'
}, { index: 39, text: 'ylätasanko'
}, { index: 40, text: 'hiekka'
}, { index: 41, text: 'rinne'
}, { index: 42, text: 'maaperä'
}, { index: 43, text: 'laakso'
}, { index: 44, text: 'tulivuori'
}, { index: 45, text: 'erämaa'
}, { index: 46, text: 'uhanalainen (laji)'
}, { index: 47, text: 'sukupuuttoon kuoleminen'
}, { index: 48, text: 'ravintoketju'
}, { index: 49, text: 'elinympäristö'
}, { index: 50, text: 'kotoperäinen, alkuperäinen'
}, { index: 51, text: 'vieraslaji'
}, { index: 52, text: 'rauhoitettu (laji)'
}, { index: 53, text: 'suojelualue, rauhoitusalue'
}, { index: 54, text: 'laji, lajit'
}, { index: 55, text: 'luonto; luonnonvaraiset eläimet (ja joskus myös kasvit)'
}, { index: 56, text: 'levä, levät'
}, { index: 57, text: 'kukinto, kukkia'
}, { index: 58, text: 'kukka, kukkia'
}, { index: 59, text: 'oksa'
}, { index: 60, text: 'nuppu'
}, { index: 61, text: 'pensas'
}, { index: 62, text: 'käpy'
}, { index: 63, text: 'havupuu'
}, { index: 64, text: 'sinilevä'
}, { index: 65, text: 'lehtipuu'
}, { index: 66, text: 'ikivihreä (kasvi)'
}, { index: 67, text: 'kasvit ja eläimet'
}, { index: 68, text: 'lehvistö, lehdet'
}, { index: 69, text: 'metsä'
}, { index: 70, text: 'metsikkö, lehto'
}, { index: 71, text: 'yrtti'
}, { index: 72, text: 'viidakko'
}, { index: 73, text: 'jäkälä'
}, { index: 74, text: 'niitty'
}, { index: 75, text: 'sammal'
}, { index: 76, text: 'sieni, sienet'
}, { index: 77, text: 'neulanen'
}, { index: 78, text: 'kasvi; istuttaa'
}, { index: 79, text: 'siitepöly'
}, { index: 80, text: 'taimi'
}, { index: 81, text: 'siemen'
}, { index: 82, text: 'varpu, pensas'
}, { index: 83, text: 'verso, itu'
}, { index: 84, text: 'suo'
}, { index: 85, text: 'runko'
}, { index: 86, text: 'kasvillisuus'
}, { index: 87, text: 'rikkaruoho'
}, { index: 88, text: 'kuihtua, lakastua'
}, { index: 89, text: 'sammakkoeläin'
}, { index: 90, text: 'tuntosarvi, tuntosarvet'
}, { index: 91, text: 'hämähäkkieläin'
}, { index: 92, text: 'eläin, peto'
}, { index: 93, text: 'petolintu'
}, { index: 94, text: 'nautaeläin'
}, { index: 95, text: 'rotu'
}, { index: 96, text: 'lihansyöjä'
}, { index: 97, text: 'kynsi'
}, { index: 98, text: 'evä'
}, { index: 99, text: 'turkki'
}, { index: 100, text: 'riista'
}, { index: 101, text: 'kidus'
}, { index: 102, text: 'kasvinsyöjä'
}, { index: 103, text: 'talvehtia, horrostaa'
}, { index: 104, text: 'sorkka, kavio'
}, { index: 105, text: 'sarvi'
}, { index: 106, text: 'kyttyrä'
}, { index: 107, text: 'hyönteinen'
}, { index: 108, text: 'selkärangaton'
}, { index: 109, text: 'nisäkäs'
}, { index: 110, text: 'pussieläin'
}, { index: 111, text: 'muuttolintu'
}, { index: 112, text: 'nilviäinen'
}, { index: 113, text: 'turpa, kuono'
}, { index: 114, text: 'pesä; pesiä'
}, { index: 115, text: 'yöeläin'
}, { index: 116, text: 'jälkeläiset'
}, { index: 117, text: 'tassu, käpälä'
}, { index: 118, text: 'matelija'
}, { index: 119, text: 'jyrsijä'
}, { index: 120, text: 'haaskaeläin'
}, { index: 121, text: 'kilpi, kuori'
}, { index: 122, text: 'häntä'
}, { index: 123, text: 'lonkero'
}, { index: 124, text: 'reviiri'
}, { index: 125, text: 'syöksyhammas'
}, { index: 126, text: 'tuhoeläin, tuholainen'
}, { index: 127, text: 'selkärankainen'
}, { index: 128, text: 'viiksikarva'


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
      87: 87,
      88: 88,
      89: 89,
      90: 90,
      91: 91,
      92: 92,
      93: 93,
      94: 94,
      95: 95,
      96: 96,
      97: 97,
      98: 98,
      99: 99,
      100: 100,
      101: 101,
      102: 102,
      103: 103,
      104: 104,
      105: 105,
      106: 106,
      107: 107,
      108: 108,
      109: 109,
      110: 110,
      111: 111,
      112: 112,
      113: 113,
      114: 114,
      115: 115,
      116: 116,
      117: 117,
      118: 118,
      119: 119,
      120: 120,
      121: 121,
      122: 122,
      123: 123,
      124: 124,
      125: 125,
      126: 126,
      127: 127,
      128: 128,

    }
  };
    
for (var a=[],i=0;i<129;++i) a[i]=i;

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
    for (var i = 0; i < 129; i++) {
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