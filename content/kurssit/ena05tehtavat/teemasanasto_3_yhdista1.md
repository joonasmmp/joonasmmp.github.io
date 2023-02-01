---
title: "Teema 3: Traffic - Yhdistä"
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
         index: 0, text: 'tavarajuna'
    }, { index: 1, text: 'luotijuna'
    }, { index: 2, text: 'rekka'
    }, { index: 3, text: 'taajamajuna'
    }, { index: 4, text: 'raitiovaunu'
    }, { index: 5, text: 'metro'
    }, { index: 6, text: 'ajoneuvo'
    }, { index: 7, text: 'moottoripyöräilijä, polkupyöräilijä'
    }, { index: 8, text: 'apukuski'
    }, { index: 9, text: 'työmatkalainen'
    }, { index: 10, text: 'pyöräilijä'
    }, { index: 11, text: 'moottoriajoneuvolla kulkeva'
    }, { index: 12, text: 'matkustaja'
    }, { index: 13, text: 'jalankulkija'
    }, { index: 14, text: 'pysäköinninvalvoja'
    }, { index: 15, text: 'kiihdyttää'
    }, { index: 16, text: 'katsastus'
    }, { index: 17, text: 'autovero'
    }, { index: 18, text: 'ilmailu'
    }, { index: 19, text: 'puhalluskoe'
    }, { index: 20, text: 'taajama'
    }, { index: 21, text: 'ohitustie'
    }, { index: 22, text: 'parkkipaikka'
    }, { index: 23, text: 'kimppakyyti'
    }, { index: 24, text: 'kolari'
    }, { index: 25, text: 'kadun reunakivi'
    }, { index: 26, text: 'pyörätie'
    }, { index: 27, text: 'kiertotie'
    }, { index: 28, text: 'ajokortti'
    }, { index: 29, text: 'autokoulu'
    }, { index: 30, text: 'ohituskaista'
    }, { index: 31, text: 'sakko'
    }, { index: 32, text: 'rahti'
    }, { index: 33, text: 'huoltoasema'
    }, { index: 34, text: 'nokkakolari'
    }, { index: 35, text: 'valtatie, päätie'
    }, { index: 36, text: 'vakuutus'
    }, { index: 37, text: 'eritasoliittymä'
    }, { index: 38, text: 'risteys'
    }, { index: 39, text: 'kaista'
    }, { index: 40, text: 'levähdyspaikka'
    }, { index: 41, text: 'moottoritie'
    }, { index: 42, text: 'yksisuuntainen liikenne'
    }, { index: 43, text: 'ohittaa'
    }, { index: 44, text: 'taskupysäköinti'
    }, { index: 45, text: 'pysäköidä'
    }, { index: 46, text: 'pysäköintimittari, pysäköintisovellus'
    }, { index: 47, text: 'pysäköintiruutu'
    }, { index: 48, text: 'jalkakäytävä'
    }, { index: 49, text: 'katukiveys, päällyste'
    }, { index: 50, text: 'suojatie'
    }, { index: 51, text: 'ketjukolari'
    }, { index: 52, text: 'julkinen liikenne'
    }, { index: 53, text: 'raide'
    }, { index: 54, text: 'ramppi'
    }, { index: 55, text: 'hidastaa, vähentää nopeutta'
    }, { index: 56, text: 'tankata'
    }, { index: 57, text: 'etuajo-oikeus'
    }, { index: 58, text: 'kehätie'
    }, { index: 59, text: 'rattiraivo'
    }, { index: 60, text: 'liikenneturvallisuus'
    }, { index: 61, text: 'tietyö'
    }, { index: 62, text: 'kiertoliittymä, liikenneympyrä'
    }, { index: 63, text: 'reitti'
    }, { index: 64, text: 'ruuhka-aika'
    }, { index: 65, text: 'apukuskin paikka'
    }, { index: 66, text: 'piennar'
    }, { index: 67, text: 'nopeudenvalvontakamera'
    }, { index: 68, text: 'nopeusrajoitus'
    }, { index: 69, text: 'tutka'
    }, { index: 70, text: 'ylinopeus'
    }, { index: 71, text: 'alikulkutunneli'
    }, { index: 72, text: 'puskurissa roikkuminen'
    }, { index: 73, text: 'maksu'
    }, { index: 74, text: 'keskikoroke'
    }, { index: 75, text: 'ruuhka'
    }, { index: 76, text: 'liikennesääntö'
    }, { index: 77, text: 'liikennerikkomus'
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