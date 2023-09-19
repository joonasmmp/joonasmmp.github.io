---
title: "Teema 1: Health - Yhdistä"
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

     index: 0, text: 'blood vessel'
}, { index: 1, text: 'bone marrow'
}, { index: 2, text: 'brain'
}, { index: 3, text: 'gland'
}, { index: 4, text: 'heart'
}, { index: 5, text: 'kidney'
}, { index: 6, text: 'liver'
}, { index: 7, text: 'lungs'
}, { index: 8, text: 'musculature'
}, { index: 9, text: 'nerve'
}, { index: 10, text: 'nervous system'
}, { index: 11, text: 'skull'
}, { index: 12, text: 'spine'
}, { index: 13, text: 'stomach'
}, { index: 14, text: 'thyroid'
}, { index: 15, text: 'circulation'
}, { index: 16, text: 'digestion'
}, { index: 17, text: 'metabolism'
}, { index: 18, text: 'respiration'
}, { index: 19, text: 'blood pressure'
}, { index: 20, text: 'blood sugar'
}, { index: 21, text: 'pulse'
}, { index: 22, text: 'dentist'
}, { index: 23, text: 'GP, general practitioner'
}, { index: 24, text: 'midwife'
}, { index: 25, text: 'paramedic'
}, { index: 26, text: 'patient'
}, { index: 27, text: 'pharmacist'
}, { index: 28, text: 'practical nurse'
}, { index: 29, text: 'psychologist'
}, { index: 30, text: 'RN, (registered) nurse'
}, { index: 31, text: 'surgeon'
}, { index: 32, text: 'ache, pain'
}, { index: 33, text: 'bruise'
}, { index: 34, text: 'burn'
}, { index: 35, text: 'fracture'
}, { index: 36, text: 'illness, sickness, disease, ailment'
}, { index: 37, text: 'injury'
}, { index: 38, text: 'rash'
}, { index: 39, text: 'sprain'
}, { index: 40, text: 'wound, cut'
}, { index: 41, text: 'diarrhoea (BrE), diarrhea (AmE)'
}, { index: 42, text: 'flu'
}, { index: 43, text: 'heartburn'
}, { index: 44, text: 'heatstroke'
}, { index: 45, text: 'sore throat'
}, { index: 46, text: 'sunstroke'
}, { index: 47, text: 'vomit'
}, { index: 48, text: 'cancer'
}, { index: 49, text: 'diabetes'
}, { index: 50, text: 'heart attack'
}, { index: 51, text: 'obesity'
}, { index: 52, text: 'tumour (BrE), tumor (AmE)'
}, { index: 53, text: 'addiction'
}, { index: 54, text: 'depression'
}, { index: 55, text: 'overdose'
}, { index: 56, text: 'diagnosis'
}, { index: 57, text: 'medical examination'
}, { index: 58, text: 'antidepressant'
}, { index: 59, text: 'band-aid (AmE) (sticking) plaster'
}, { index: 60, text: '(plaster) cast'
}, { index: 61, text: 'cold compress'
}, { index: 62, text: 'contraceptive (device)'
}, { index: 63, text: 'eye drops'
}, { index: 64, text: 'inhaler'
}, { index: 65, text: 'ointment'
}, { index: 66, text: 'painkiller'
}, { index: 67, text: 'stitches'
}, { index: 68, text: 'injection'
}, { index: 69, text: 'jab, vaccination'
}, { index: 70, text: 'operation, surgery'
}, { index: 71, text: 'rehabilitation'
}, { index: 72, text: 'resuscitation'
}, { index: 73, text: 'therapy'
}, { index: 74, text: 'vaccine'
}, { index: 75, text: 'hospital'
}, { index: 76, text: 'intensive care unit (ICU)'
}, { index: 77, text: 'laboratory'
}, { index: 78, text: 'reception'


},

    ],

  definitions: [{
    
     index: 0, 'verisuoni'
}, { index: 1, 'luuydin'
}, { index: 2, 'aivot'
}, { index: 3, 'rauhanen'
}, { index: 4, 'sydän'
}, { index: 5, 'munuainen'
}, { index: 6, 'maksa'
}, { index: 7, 'keuhkot'
}, { index: 8, 'lihaksisto'
}, { index: 9, 'hermo'
}, { index: 10, 'hermosto'
}, { index: 11, 'pääkallo'
}, { index: 12, 'selkäranka'
}, { index: 13, 'vatsalaukku'
}, { index: 14, 'kilpirauhanen'
}, { index: 15, 'verenkierto'
}, { index: 16, 'ruoansulatus'
}, { index: 17, 'aineenvaihdunta'
}, { index: 18, 'hengitys'
}, { index: 19, 'verenpaine'
}, { index: 20, 'verensokeri'
}, { index: 21, 'pulssi'
}, { index: 22, 'hammaslääkäri'
}, { index: 23, 'yleislääkäri'
}, { index: 24, 'kätilö'
}, { index: 25, 'ensihoitaja'
}, { index: 26, 'potilas'
}, { index: 27, 'farmaseutti'
}, { index: 28, 'lähihoitaja'
}, { index: 29, 'psykologi'
}, { index: 30, 'sairaanhoitaja'
}, { index: 31, 'kirurgi'
}, { index: 32, 'kipu, särky'
}, { index: 33, 'ruhje, mustelma'
}, { index: 34, 'palovamma'
}, { index: 35, 'murtuma'
}, { index: 36, 'sairaus'
}, { index: 37, 'vamma'
}, { index: 38, 'ihottuma'
}, { index: 39, 'venähdys, revähdys'
}, { index: 40, 'haava'
}, { index: 41, 'ripuli'
}, { index: 42, 'flunssa'
}, { index: 43, 'närästys'
}, { index: 44, 'lämpöhalvaus'
}, { index: 45, 'kurkkukipu'
}, { index: 46, 'auringonpistos'
}, { index: 47, 'oksentaa'
}, { index: 48, 'syöpä'
}, { index: 49, 'diabetes'
}, { index: 50, 'sydänkohtaus'
}, { index: 51, 'ylipaino'
}, { index: 52, 'kasvain'
}, { index: 53, 'riippuvuus'
}, { index: 54, 'masennus'
}, { index: 55, 'yliannostus'
}, { index: 56, 'diagnoosi'
}, { index: 57, 'lääkärintarkastus'
}, { index: 58, 'mielialalääke'
}, { index: 59, 'laastari'
}, { index: 60, 'kipsi'
}, { index: 61, 'kylmäpakkaus'
}, { index: 62, 'ehkäisyväline'
}, { index: 63, 'silmätipat'
}, { index: 64, 'inhalaattori'
}, { index: 65, 'voide'
}, { index: 66, 'särkylääke'
}, { index: 67, 'tikit'
}, { index: 68, 'ruiske'
}, { index: 69, 'rokotus'
}, { index: 70, 'leikkaus'
}, { index: 71, 'kuntoutus'
}, { index: 72, 'elvytys'
}, { index: 73, 'terapia'
}, { index: 74, 'rokote'
}, { index: 75, 'sairaala'
}, { index: 76, 'teho-osasto'
}, { index: 77, 'laboratorio'
}, { index: 78, 'vastaanotto'



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