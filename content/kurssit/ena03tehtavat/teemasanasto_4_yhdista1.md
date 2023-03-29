---
title: "Teema 4: Visual arts & photography - Yhdistä"
date: 2022-6-1
draft: false
type: page
weight: 68
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

     index: 0, text: 'aesthetic, esthetic'
}, { index: 1, text: 'architecture'
}, { index: 2, text: 'art gallery'
}, { index: 3, text: 'artwork, work of art'
}, { index: 4, text: 'brush'
}, { index: 5, text: 'brushstroke'
}, { index: 6, text: 'canvas'
}, { index: 7, text: 'cartoon'
}, { index: 8, text: 'carve'
}, { index: 9, text: 'ceramics'
}, { index: 10, text: 'charcoal'
}, { index: 11, text: 'chisel'
}, { index: 12, text: 'clay'
}, { index: 13, text: 'collection'
}, { index: 14, text: 'composition'
}, { index: 15, text: 'contemporary art'
}, { index: 16, text: 'contrast'
}, { index: 17, text: 'crayon'
}, { index: 18, text: 'depict'
}, { index: 19, text: 'design'
}, { index: 20, text: 'drawing'
}, { index: 21, text: 'easel'
}, { index: 22, text: 'etching'
}, { index: 23, text: 'exhibit'
}, { index: 24, text: 'exhibition'
}, { index: 25, text: 'frame'
}, { index: 26, text: 'fake, forgery'
}, { index: 27, text: 'graffiti'
}, { index: 28, text: 'graphics'
}, { index: 29, text: 'graphics tablet'
}, { index: 30, text: 'hue'
}, { index: 31, text: 'illustration'
}, { index: 32, text: 'installation'
}, { index: 33, text: 'landscape'
}, { index: 34, text: 'marble'
}, { index: 35, text: 'marker'
}, { index: 36, text: 'masterpiece'
}, { index: 37, text: 'modern art'
}, { index: 38, text: 'mosaic'
}, { index: 39, text: 'motif'
}, { index: 40, text: 'mural'
}, { index: 41, text: 'oil colour'
}, { index: 42, text: 'oil painting'
}, { index: 43, text: 'painting'
}, { index: 44, text: 'painter'
}, { index: 45, text: 'perspective'
}, { index: 46, text: 'print'
}, { index: 47, text: 'portray'
}, { index: 48, text: 'portrait'
}, { index: 49, text: 'poster'
}, { index: 50, text: 'pottery'
}, { index: 51, text: 'primary colours'
}, { index: 52, text: 'proportion'
}, { index: 53, text: 'sculpt'
}, { index: 54, text: 'sculptor'
}, { index: 55, text: 'sculpture'
}, { index: 56, text: 'solvent'
}, { index: 57, text: 'self-portrait'
}, { index: 58, text: 'shade'
}, { index: 59, text: 'sketch'
}, { index: 60, text: 'stained glass'
}, { index: 61, text: 'statue'
}, { index: 62, text: 'still life'
}, { index: 63, text: 'three-dimensional'
}, { index: 64, text: 'tint'
}, { index: 65, text: 'translucent'
}, { index: 66, text: 'transparent'
}, { index: 67, text: 'watercolour'
}, { index: 68, text: 'angle'
}, { index: 69, text: 'close-up'
}, { index: 70, text: 'crop'
}, { index: 71, text: 'enlarge'
}, { index: 72, text: 'exposure'
}, { index: 73, text: 'flash'
}, { index: 74, text: 'focus'
}, { index: 75, text: 'lens'
}, { index: 76, text: 'panorama'
}, { index: 77, text: 'photography'
}, { index: 78, text: 'photographer'
}, { index: 79, text: 'photoshop'
}, { index: 80, text: 'pose'
}, { index: 81, text: 'shoot, shot, shot'
}, { index: 82, text: 'shot'
}, { index: 83, text: 'shutter'
}, { index: 84, text: 'tripod'
}, { index: 85, text: 'zoom'
}
    ],

  definitions: [{

     index: 0, text: 'esteettinen'
}, { index: 1, text: 'arkkitehtuuri'
}, { index: 2, text: 'taidegalleria'
}, { index: 3, text: 'taideteos'
}, { index: 4, text: 'sivellin'
}, { index: 5, text: 'siveltimenveto'
}, { index: 6, text: 'kangas'
}, { index: 7, text: 'sarjakuva'
}, { index: 8, text: 'kaivertaa, veistää'
}, { index: 9, text: 'keramiikka'
}, { index: 10, text: 'hiili'
}, { index: 11, text: 'taltta'
}, { index: 12, text: 'savi'
}, { index: 13, text: 'kokoelma'
}, { index: 14, text: 'sommitelma'
}, { index: 15, text: 'nykytaide'
}, { index: 16, text: 'kontrasti'
}, { index: 17, text: 'värikynä'
}, { index: 18, text: 'kuvata'
}, { index: 19, text: 'suunnittelu; muotoilla, suunnitella; muotoilu, malli'
}, { index: 20, text: 'piirros, piirustus'
}, { index: 21, text: 'maalausteline'
}, { index: 22, text: 'etsaus (syövyttämällä tehtävä taidegrafiikka)'
}, { index: 23, text: 'esittää, asettaa näytteille, näyttelyesine'
}, { index: 24, text: 'näyttely'
}, { index: 25, text: 'kehys'
}, { index: 26, text: 'väärennös'
}, { index: 27, text: 'graffiti'
}, { index: 28, text: 'grafiikka'
}, { index: 29, text: 'piirtopöytä'
}, { index: 30, text: 'sävy'
}, { index: 31, text: 'kuvitus'
}, { index: 32, text: 'installaatio'
}, { index: 33, text: 'maisemamaalaus'
}, { index: 34, text: 'marmori'
}, { index: 35, text: 'tussikynä'
}, { index: 36, text: 'mestariteos'
}, { index: 37, text: 'moderni taide'
}, { index: 38, text: 'mosaiikki'
}, { index: 39, text: 'aihe'
}, { index: 40, text: 'seinämaalaus'
}, { index: 41, text: 'öljyväri'
}, { index: 42, text: 'öljyvärimaalaus'
}, { index: 43, text: 'maalaus'
}, { index: 44, text: 'taidemaalari'
}, { index: 45, text: 'perspektiivi'
}, { index: 46, text: 'painokuva'
}, { index: 47, text: 'esittää'
}, { index: 48, text: 'muotokuva'
}, { index: 49, text: 'juliste'
}, { index: 50, text: 'keramiikka, savenvalanta'
}, { index: 51, text: 'päävärit'
}, { index: 52, text: 'mittasuhde'
}, { index: 53, text: 'veistää, muotoilla'
}, { index: 54, text: 'kuvanveistäjä'
}, { index: 55, text: 'kuvanveisto, veistos'
}, { index: 56, text: 'liuotin'
}, { index: 57, text: 'omakuva'
}, { index: 58, text: 'varjo'
}, { index: 59, text: 'luonnostella, luonnos'
}, { index: 60, text: 'lasimaalaus'
}, { index: 61, text: 'patsas'
}, { index: 62, text: 'asetelma'
}, { index: 63, text: 'kolmiulotteinen'
}, { index: 64, text: 'värisävy'
}, { index: 65, text: 'läpikuultava'
}, { index: 66, text: 'läpinäkyvä'
}, { index: 67, text: 'akvarelli, vesivärimaalaus'
}, { index: 68, text: 'kuvakulma'
}, { index: 69, text: 'lähikuva'
}, { index: 70, text: 'rajata (kuvaa)'
}, { index: 71, text: 'suurentaa'
}, { index: 72, text: 'valotus'
}, { index: 73, text: 'salamavalo'
}, { index: 74, text: 'tarkentaa'
}, { index: 75, text: 'linssi'
}, { index: 76, text: 'panoraama'
}, { index: 77, text: 'valokuvaus'
}, { index: 78, text: 'valokuvaaja'
}, { index: 79, text: 'käsitellä kuvaa kuvankäsittelyohjelmalla'
}, { index: 80, text: 'poseerata'
}, { index: 81, text: 'kuvata'
}, { index: 82, text: 'kuva, otto, otos'
}, { index: 83, text: 'suljin'
}, { index: 84, text: 'kolmijalka'
}, { index: 85, text: 'zoomata'

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

    }
  };
    
for (var a=[],i=0;i<86;++i) a[i]=i;

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
    for (var i = 0; i < 86; i++) {
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