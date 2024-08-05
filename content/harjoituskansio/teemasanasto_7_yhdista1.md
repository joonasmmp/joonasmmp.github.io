---
title: "Teema 7: Family - Yhdistä"
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

     index: 0, text: 'aunt'
}, { index: 1, text: 'dependant'
}, { index: 2, text: '(first) cousin'
}, { index: 3, text: 'grandparent'
}, { index: 4, text: 'guardian'
}, { index: 5, text: 'nephew'
}, { index: 6, text: 'niece'
}, { index: 7, text: 'relatives'
}, { index: 8, text: 'second cousin'
}, { index: 9, text: 'sibling'
}, { index: 10, text: 'uncle'
}, { index: 11, text: 'brother-in-law'
}, { index: 12, text: 'daughter-in-law'
}, { index: 13, text: 'father-in-law'
}, { index: 14, text: 'in-laws'
}, { index: 15, text: 'mother-in-law'
}, { index: 16, text: 'sister-in-law'
}, { index: 17, text: 'son-in-law'
}, { index: 18, text: '(bride)groom'
}, { index: 19, text: 'bachelor'
}, { index: 20, text: 'bachelorette'
}, { index: 21, text: 'bride'
}, { index: 22, text: 'ex-husband'
}, { index: 23, text: 'ex-wife'
}, { index: 24, text: 'fiancé'
}, { index: 25, text: 'fiancée'
}, { index: 26, text: 'partner'
}, { index: 27, text: 'significant other'
}, { index: 28, text: 'spouse'
}, { index: 29, text: 'foster parents'
}, { index: 30, text: 'orphan'
}, { index: 31, text: 'stepfather'
}, { index: 32, text: 'stepmother'
}, { index: 33, text: 'surrogate mother'
}, { index: 34, text: 'descendant'
}, { index: 35, text: 'forefather, ancestor'
}, { index: 36, text: 'offspring'
}, { index: 37, text: 'blended family, stepfamily'
}, { index: 38, text: 'extended family'
}, { index: 39, text: 'foster family'
}, { index: 40, text: 'LGBT family'
}, { index: 41, text: 'nuclear family'
}, { index: 42, text: 'same-sex couple'
}, { index: 43, text: 'single-parent family'
}, { index: 44, text: 'divorced'
}, { index: 45, text: 'engaged'
}, { index: 46, text: 'married'
}, { index: 47, text: 'separated'
}, { index: 48, text: 'single'
}, { index: 49, text: 'widow'
}, { index: 50, text: 'widower'
}, { index: 51, text: 'adopt'
}, { index: 52, text: 'be / get divorced from'
}, { index: 53, text: 'be / get engaged to'
}, { index: 54, text: 'be / get married to'
}, { index: 55, text: 'bring up, raise'
}, { index: 56, text: 'marry someone'
}, { index: 57, text: 'nurture'
}, { index: 58, text: 'start / end a relationship with someone'
}, { index: 59, text: 'adult, of age'
}, { index: 60, text: 'child neglect'
}, { index: 61, text: 'family ties'
}, { index: 62, text: 'family values'
}, { index: 63, text: 'minor'
}, { index: 64, text: 'upbringing'

},

    ],

  definitions: [{
    
     index: 0, text: 'täti'
}, { index: 1, text: 'huollettava'
}, { index: 2, text: 'serkku'
}, { index: 3, text: 'isovanhempi'
}, { index: 4, text: 'huoltaja'
}, { index: 5, text: 'sisaren- tai veljenpoika'
}, { index: 6, text: 'sisaren- tai veljentytär'
}, { index: 7, text: 'sukulaiset'
}, { index: 8, text: 'pikkuserkku'
}, { index: 9, text: 'sisarus'
}, { index: 10, text: 'setä, eno'
}, { index: 11, text: 'lanko'
}, { index: 12, text: 'miniä'
}, { index: 13, text: 'appi'
}, { index: 14, text: 'puolison sukulaiset'
}, { index: 15, text: 'anoppi'
}, { index: 16, text: 'käly'
}, { index: 17, text: 'vävy'
}, { index: 18, text: 'sulhanen'
}, { index: 19, text: 'poikamies'
}, { index: 20, text: 'poikamiestyttö'
}, { index: 21, text: 'morsian'
}, { index: 22, text: 'entinen aviomies'
}, { index: 23, text: 'entinen vaimo'
}, { index: 24, text: 'kihlattu (mies)'
}, { index: 25, text: 'kihlattu (nainen)'
}, { index: 26, text: 'puoliso, kumppani'
}, { index: 27, text: 'kumppani'
}, { index: 28, text: 'puoliso'
}, { index: 29, text: 'sijaisvanhemmat'
}, { index: 30, text: 'orpo'
}, { index: 31, text: 'isäpuoli'
}, { index: 32, text: 'äitipuoli'
}, { index: 33, text: 'sijaissynnyttäjä'
}, { index: 34, text: 'jälkeläinen'
}, { index: 35, text: 'esi-isä'
}, { index: 36, text: 'jälkeläiset, jälkikasvu'
}, { index: 37, text: 'uusperhe (puolisoilla voi olla yhteisten lasten lisäksi lapsia edellisistä parisuhteista)'
}, { index: 38, text: 'suurperhe, suku'
}, { index: 39, text: 'sijaisperhe'
}, { index: 40, text: 'sateenkaariperhe'
}, { index: 41, text: 'ydinperhe'
}, { index: 42, text: 'samaa sukupuolta olevien parisuhde'
}, { index: 43, text: 'yhden vanhemman perhe'
}, { index: 44, text: 'eronnut'
}, { index: 45, text: 'kihloissa'
}, { index: 46, text: 'naimisissa'
}, { index: 47, text: 'erillään asuva, asumuserossa'
}, { index: 48, text: 'naimaton'
}, { index: 49, text: 'leski (naispuolinen)'
}, { index: 50, text: 'leski (miespuolinen)'
}, { index: 51, text: 'adoptoida'
}, { index: 52, text: 'erota'
}, { index: 53, text: 'olla kihloissa / mennä kihloihin'
}, { index: 54, text: 'olla naimisissa / mennä naimisiin'
}, { index: 55, text: 'kasvattaa'
}, { index: 56, text: 'mennä naimisiin jonkun kanssa'
}, { index: 57, text: 'hoivata, kasvattaa'
}, { index: 58, text: 'aloittaa / päättää suhde'
}, { index: 59, text: 'täysi-ikäinen'
}, { index: 60, text: 'lasten laiminlyönti'
}, { index: 61, text: 'perhesuhteet'
}, { index: 62, text: 'perhearvot'
}, { index: 63, text: 'alaikäinen'
}, { index: 64, text: 'kasvatus'


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
    }
  };
    
for (var a=[],i=0;i<65;++i) a[i]=i;

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
    for (var i = 0; i < 65; i++) {
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