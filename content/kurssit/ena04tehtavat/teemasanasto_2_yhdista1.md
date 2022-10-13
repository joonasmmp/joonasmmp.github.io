---
title: "Teema 2: Crime & Punishment - yhdistä sanat"
date: 2022-6-1
draft: false
type: page
layout: tehtava
---
Etsi sanaa vastaava käännös. Numeroita klikkaamalla voit luoda haluamasi määrän uusia pareja.
{{< rawhtml >}}
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
     index: 0, text: 'rikoskumppani'
}, { index: 1, text: 'tuhopoltto'
}, { index: 2, text: 'pahoinpitely'
}, { index: 3, text: 'kiristys'
}, { index: 4, text: 'murtovarkaus'
}, { index: 5, text: 'murtovaras'
}, { index: 6, text: 'murtovarkaus'
}, { index: 7, text: 'tehdä rikos'
}, { index: 8, text: 'väärennös'
}, { index: 9, text: 'rikos'
}, { index: 10, text: 'syyllinen, syypää'
}, { index: 11, text: 'rattijuoppo'
}, { index: 12, text: 'rattijuopumus, päihtyneenä ajaminen'
}, { index: 13, text: 'kavallus'
}, { index: 14, text: 'kiristys'
}, { index: 15, text: 'väärentää'
}, { index: 16, text: 'väärennös'
}, { index: 17, text: 'petos'
}, { index: 18, text: 'syyllinen (adj.)'
}, { index: 19, text: 'ryöstö, keikka (erityisesti pankkiin tai taidemuseoon)'
}, { index: 20, text: 'kaappaus'
}, { index: 21, text: 'murha'
}, { index: 22, text: 'nuorisorikollinen'
}, { index: 23, text: 'tappo'
}, { index: 24, text: 'pahoinpitely'
}, { index: 25, text: 'murha'
}, { index: 26, text: 'rike, rikkomus'
}, { index: 27, text: 'rikoksentekijä'
}, { index: 28, text: 'taskuvaras'
}, { index: 29, text: 'raiskaaja'
}, { index: 30, text: 'rikoksenuusija'
}, { index: 31, text: 'ryöstö'
}, { index: 32, text: 'seksuaalirikollinen'
}, { index: 33, text: 'myymälävarkaus'
}, { index: 34, text: 'ylinopeuden ajaminen'
}, { index: 35, text: 'salakuljettaa'
}, { index: 36, text: 'varkaus'
}, { index: 37, text: 'varas'
}, { index: 38, text: 'petos'
}, { index: 39, text: 'vapauttaa, antaa vapauttava tuomio'
}, { index: 40, text: 'vedota, vetoomus'
}, { index: 41, text: 'pidättää, vangita'
}, { index: 42, text: 'takuu'
}, { index: 43, text: 'kuolemanrangaistus'
}, { index: 44, text: 'syyte, nostaa syyte'
}, { index: 45, text: 'yhdyskuntapalvelu'
}, { index: 46, text: 'tuomita, todeta syylliseksi; vanki'
}, { index: 47, text: 'tuomio (syylliseksi tuomitseminen)'
}, { index: 48, text: 'oikeusjuttu'
}, { index: 49, text: 'syyttäjä'
}, { index: 50, text: 'puolustus'
}, { index: 51, text: 'vastaaja, syytetty'
}, { index: 52, text: 'kuolemanrangaistus'
}, { index: 53, text: 'syyttää, nostaa syyte'
}, { index: 54, text: 'sakko, sakkorangaistus'
}, { index: 55, text: 'vankeus'
}, { index: 56, text: 'vanki'
}, { index: 57, text: 'vankila (puhekielinen)'
}, { index: 58, text: 'tuomari'
}, { index: 59, text: 'valamiehistö'
}, { index: 60, text: 'asianajaja'
}, { index: 61, text: 'armahdus, armahtaa'
}, { index: 62, text: 'ehdonalainen'
}, { index: 63, text: 'kantaja'
}, { index: 64, text: 'syyttää, nostaa syyte'
}, { index: 65, text: 'vankila'
}, { index: 66, text: 'ehdollinen tuomio'
}, { index: 67, text: 'syyttäjä'
}, { index: 68, text: 'lähestymiskielto'
}, { index: 69, text: 'tuomio; tuomita, langettaa tuomio'
}, { index: 70, text: 'haastaa oikeuteen'
}, { index: 71, text: 'todistajanlausunto'
}, { index: 72, text: 'ehdollinen tuomio'
}, { index: 73, text: 'todistaa (oikeudessa)'
}, { index: 74, text: 'todistajanlausunto'
}, { index: 75, text: 'rikesakko, sakko'
}, { index: 76, text: 'oikeudenkäynti'
}, { index: 77, text: 'tuomio (juryn päätös)'
}, { index: 78, text: 'todistaa; nähdä rikos'
},
    ],
    definitions: [{
     index: 0, text: 'accomplice'
}, { index: 1, text: 'arson'
}, { index: 2, text: 'assault'
}, { index: 3, text: 'blackmail'
}, { index: 4, text: 'breaking and entering'
}, { index: 5, text: 'burglar'
}, { index: 6, text: 'burglary'
}, { index: 7, text: 'commit a crime'
}, { index: 8, text: 'counterfeit'
}, { index: 9, text: 'crime'
}, { index: 10, text: 'culprit'
}, { index: 11, text: 'drunk driver'
}, { index: 12, text: 'DUI (driving under the influence)'
}, { index: 13, text: 'embezzlement'
}, { index: 14, text: 'extortion'
}, { index: 15, text: 'forge'
}, { index: 16, text: 'forgery'
}, { index: 17, text: 'fraud'
}, { index: 18, text: 'guilty'
}, { index: 19, text: 'heist'
}, { index: 20, text: 'hijacking'
}, { index: 21, text: 'homicide'
}, { index: 22, text: 'juvenile delinquent'
}, { index: 23, text: 'manslaughter'
}, { index: 24, text: 'mugging'
}, { index: 25, text: 'murder'
}, { index: 26, text: 'offence'
}, { index: 27, text: 'perpetrator, perp'
}, { index: 28, text: 'pickpocket'
}, { index: 29, text: 'rapist'
}, { index: 30, text: 'repeat offender'
}, { index: 31, text: 'robbery'
}, { index: 32, text: 'sexual offender'
}, { index: 33, text: 'shoplifting'
}, { index: 34, text: 'speeding'
}, { index: 35, text: 'smuggle'
}, { index: 36, text: 'theft'
}, { index: 37, text: 'thief'
}, { index: 38, text: 'treason'
}, { index: 39, text: 'acquit'
}, { index: 40, text: 'appeal'
}, { index: 41, text: 'arrest'
}, { index: 42, text: 'bail'
}, { index: 43, text: 'capital punishment'
}, { index: 44, text: 'charge'
}, { index: 45, text: 'community service'
}, { index: 46, text: 'convict'
}, { index: 47, text: 'conviction'
}, { index: 48, text: 'court case'
}, { index: 49, text: 'DA (district attorney)'
}, { index: 50, text: 'defence'
}, { index: 51, text: 'defendant'
}, { index: 52, text: 'death penalty'
}, { index: 53, text: 'file a lawsuit'
}, { index: 54, text: 'fine'
}, { index: 55, text: 'imprisonment'
}, { index: 56, text: 'inmate'
}, { index: 57, text: 'jail'
}, { index: 58, text: 'judge'
}, { index: 59, text: 'jury'
}, { index: 60, text: 'lawyer'
}, { index: 61, text: 'pardon'
}, { index: 62, text: 'parole'
}, { index: 63, text: 'plaintiff'
}, { index: 64, text: 'press charges'
}, { index: 65, text: 'prison'
}, { index: 66, text: 'probation'
}, { index: 67, text: 'prosecutor'
}, { index: 68, text: 'restraining order'
}, { index: 69, text: 'sentence'
}, { index: 70, text: 'sue'
}, { index: 71, text: 'statement'
}, { index: 72, text: 'suspended sentence'
}, { index: 73, text: 'testify'
}, { index: 74, text: 'testimony'
}, { index: 75, text: 'ticket'
}, { index: 76, text: 'trial'
}, { index: 77, text: 'verdict'
}, { index: 78, text: 'witness'
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
    addCSS("div#tehtava li[data-index='" + a[0] + "']{display: block;}")
		addCSS("div#tehtava li[data-index='" + a[1] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[2] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[3] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[4] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[5] + "']{display: block;}")
  }
  
    function shuffle9() {
    randomSort(data.terms)
    randomSort(data.definitions)
    createListHTML(data.terms, termsContainer)
    createListHTML(data.definitions, defsContainer)
		addCSS("div#tehtava li[data-index]{display: none;}")
    addCSS("div#tehtava li[data-index='" + a[0] + "']{display: block;}")
		addCSS("div#tehtava li[data-index='" + a[1] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[2] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[3] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[4] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[5] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[6] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[7] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[8] + "']{display: block;}")
  }
  
      function shuffle12() {
    randomSort(data.terms)
    randomSort(data.definitions)
    createListHTML(data.terms, termsContainer)
    createListHTML(data.definitions, defsContainer)
addCSS("div#tehtava li[data-index]{display: none;}")
    addCSS("div#tehtava li[data-index='" + a[0] + "']{display: block;}")
		addCSS("div#tehtava li[data-index='" + a[1] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[2] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[3] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[4] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[5] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[6] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[7] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[8] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[9] + "']{display: block;}")
		addCSS("div#tehtava li[data-index='" + a[10] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[11] + "']{display: block;}")
    addCSS("div#tehtava li[data-index='" + a[12] + "']{display: block;}")
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

<style>

div#tehtava {
  overflow: hidden;
}

div#tehtava ul {
  list-style: none;
  font-size: 0.75em;
}

div#tehtava ul#terms {
  display: flex;
  flex-direction: column;
}

div#tehtava ul#defs {
  display: flex;
  flex-direction: column;
}

div#tehtava ul#terms li {
  background: #1F2937;
  color: #ffffff;
}

div#tehtava ul#defs li {
  color: #000000
}

div#tehtava li {
  float: left;
  height: 4em;
  margin: 10px;
  background: white;
  text-align: center;
  cursor: pointer;
  transition: all .2s ease-out;
  border-radius: 0;
  -webkit-box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 1);
  box-shadow: 0 3px 5px 1px #000;
}

div#tehtava li:hover {
  transform: scale(1.05, 1.05);
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 1);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 1);
}

div#tehtava li[data-selected] {
  transform: scale(1.05, 1.05);
  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.75);
  outline: 4px solid #00A0DF;
}

div#tehtava ul li span {
  width: 100%;
  height: 100%;
  display: block;
  vertical-align: middle;
  text-align: center;
  padding: 10px;
  transform: none;
  transition: opacity 0.2s ease-out;
}

div#tehtava span:hover {
  transform: none;
}

.score {
  background: none!important;
  box-shadow: none;
  color: #fff!important;
  background: #00A0DF!important;
  border-radius: 15px;
}

.score:hover {
  cursor: default;
  transform: none;
  box-shadow: none;
}

.fadeOut li span {
  transition: opacity 0.25s ease-out;
  opacity: 0;
}

.fadeOut li {
  transition: transform .5s ease-out;
  transform: rotateX(360deg);
}

div#nappulat{
  display: flex;
  justify-content: center;
}

div#nappulat button{
    display: inline-block;
    font-family: inherit;
    text-align: center;
    border: 1px solid transparent;
    width: 3em;
    height: 3em;
    margin: 0.2em;
    border-width: 1px;
    border-radius: 5px;
    font-size: 0.8em;
    background: #1f2937;
    border-color: #051D29;
    color: #ffffff;
}
</style>

{{< /rawhtml >}}