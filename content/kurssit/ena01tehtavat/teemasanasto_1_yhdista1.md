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
     index: 0, text: 'beard'
}, { index: 1, text: 'cheek'
}, { index: 2, text: 'chin'
}, { index: 3, text: 'dimple'
}, { index: 4, text: 'earlobe'
}, { index: 5, text: 'eyebrow'
}, { index: 6, text: 'eyelashes'
}, { index: 7, text: 'eyelid'
}, { index: 8, text: 'forehead'
}, { index: 9, text: 'freckle'
}, { index: 10, text: 'gums'
}, { index: 11, text: 'jaw'
}, { index: 12, text: 'lip'
}, { index: 13, text: 'mole'
}, { index: 14, text: 'moustache'
}, { index: 15, text: 'mouth'
}, { index: 16, text: 'neck'
}, { index: 17, text: 'nostril'
}, { index: 18, text: 'scar'
}, { index: 19, text: 'sideburns'
}, { index: 20, text: 'stubble'
}, { index: 21, text: 'teeth'
}, { index: 22, text: 'temple'
}, { index: 23, text: 'throat'
}, { index: 24, text: 'tongue'
}, { index: 25, text: 'cuticles'
}, { index: 26, text: 'fingernail'
}, { index: 27, text: 'fist'
}, { index: 28, text: 'index finger'
}, { index: 29, text: 'knuckles'
}, { index: 30, text: 'middle finger'
}, { index: 31, text: 'palm'
}, { index: 32, text: 'pinky, little finger'
}, { index: 33, text: 'ring finger'
}, { index: 34, text: 'thumb'
}, { index: 35, text: 'wrist'
}, { index: 36, text: 'abdomen'
}, { index: 37, text: 'ankle'
}, { index: 38, text: 'arm'
}, { index: 39, text: 'armpit'
}, { index: 40, text: 'back'
}, { index: 41, text: 'belly button'
}, { index: 42, text: 'breast'
}, { index: 43, text: 'buttocks'
}, { index: 44, text: 'calf'
}, { index: 45, text: 'chest'
}, { index: 46, text: 'elbow'
}, { index: 47, text: 'foot'
}, { index: 48, text: 'forearm'
}, { index: 49, text: 'groin'
}, { index: 50, text: 'hand'
}, { index: 51, text: 'heel'
}, { index: 52, text: 'hips'
}, { index: 53, text: 'knee'
}, { index: 54, text: 'leg'
}, { index: 55, text: 'nipple'
}, { index: 56, text: 'shin'
}, { index: 57, text: 'shoulder'
}, { index: 58, text: 'sole'
}, { index: 59, text: 'thigh'
}, { index: 60, text: 'toe'
}, { index: 61, text: 'waist'

},

    ],

  definitions: [{
    
     index: 0, text: 'parta'
}, { index: 1, text: 'poski'
}, { index: 2, text: 'leuankärki'
}, { index: 3, text: 'hymykuoppa'
}, { index: 4, text: 'korvannipukka'
}, { index: 5, text: 'kulmakarva'
}, { index: 6, text: 'silmäripset'
}, { index: 7, text: 'silmäluomi'
}, { index: 8, text: 'otsa'
}, { index: 9, text: 'pisama'
}, { index: 10, text: 'ikenet'
}, { index: 11, text: 'leuka'
}, { index: 12, text: 'huuli'
}, { index: 13, text: 'luomi'
}, { index: 14, text: 'viikset'
}, { index: 15, text: 'suu'
}, { index: 16, text: 'niska/kaula'
}, { index: 17, text: 'sierain'
}, { index: 18, text: 'arpi'
}, { index: 19, text: 'pulisongit'
}, { index: 20, text: 'sänki'
}, { index: 21, text: 'hampaat'
}, { index: 22, text: 'ohimo'
}, { index: 23, text: 'kurkku'
}, { index: 24, text: 'kieli'
}, { index: 25, text: 'kynsinauhat'
}, { index: 26, text: 'kynsi'
}, { index: 27, text: 'nyrkki'
}, { index: 28, text: 'etusormi'
}, { index: 29, text: 'rystyset'
}, { index: 30, text: 'keskisormi'
}, { index: 31, text: 'kämmen'
}, { index: 32, text: 'pikkusormi'
}, { index: 33, text: 'nimetön'
}, { index: 34, text: 'peukalo'
}, { index: 35, text: 'ranne'
}, { index: 36, text: 'vatsa'
}, { index: 37, text: 'nilkka'
}, { index: 38, text: 'käsivarsi'
}, { index: 39, text: 'kainalo'
}, { index: 40, text: 'selkä'
}, { index: 41, text: 'napa'
}, { index: 42, text: 'rinta'
}, { index: 43, text: 'pakarat'
}, { index: 44, text: 'pohje'
}, { index: 45, text: 'rintakehä'
}, { index: 46, text: 'kyynärpää'
}, { index: 47, text: 'jalka(terä)'
}, { index: 48, text: 'kyynärvarsi'
}, { index: 49, text: 'nivuset'
}, { index: 50, text: 'käsi'
}, { index: 51, text: 'kantapää'
}, { index: 52, text: 'lantio'
}, { index: 53, text: 'polvi'
}, { index: 54, text: 'jalka'
}, { index: 55, text: 'nänni'
}, { index: 56, text: 'sääri'
}, { index: 57, text: 'hartia, olkapää'
}, { index: 58, text: 'jalkapohja'
}, { index: 59, text: 'reisi'
}, { index: 60, text: 'varvas'
}, { index: 61, text: 'vyötärö'


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