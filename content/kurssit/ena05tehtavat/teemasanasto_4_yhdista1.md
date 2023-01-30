---
title: "Teema 4: Information & Communications technology - Yhdistä"
date: 2022-6-1
draft: false
type: page
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
        
         index: 0, text: 'application'
    }, { index: 1, text: 'attachment'
    }, { index: 2, text: 'backspace'
    }, { index: 3, text: 'bold, boldface'
    }, { index: 4, text: 'bookmark'
    }, { index: 5, text: 'browser'
    }, { index: 6, text: 'cursor'
    }, { index: 7, text: 'desktop'
    }, { index: 8, text: 'directory'
    }, { index: 9, text: 'domain'
    }, { index: 10, text: 'emoji'
    }, { index: 11, text: 'file'
    }, { index: 12, text: 'firewall'
    }, { index: 13, text: 'folder'
    }, { index: 14, text: 'font'
    }, { index: 15, text: 'hashtag'
    }, { index: 16, text: 'header'
    }, { index: 17, text: 'hyperlink'
    }, { index: 18, text: 'icon'
    }, { index: 19, text: 'italics'
    }, { index: 20, text: 'search engine'
    }, { index: 21, text: 'software'
    }, { index: 22, text: 'spacebar'
    }, { index: 23, text: 'boot, reboot'
    }, { index: 24, text: 'charge'
    }, { index: 25, text: 'copy and paste'
    }, { index: 26, text: 'cut and paste'
    }, { index: 27, text: 'crash'
    }, { index: 28, text: 'delete'
    }, { index: 29, text: 'download'
    }, { index: 30, text: 'drag and drop'
    }, { index: 31, text: 'install'
    }, { index: 32, text: 'log in, log out'
    }, { index: 33, text: 'refresh'
    }, { index: 34, text: 'update'
    }, { index: 35, text: 'upload'
    }, { index: 36, text: 'charger'
    }, { index: 37, text: 'display, monitor'
    }, { index: 38, text: 'docking station'
    }, { index: 39, text: 'flash drive'
    }, { index: 40, text: 'hardware'
    }, { index: 41, text: 'headset'
    }, { index: 42, text: 'keyboard'
    }, { index: 43, text: 'laptop'
    }, { index: 44, text: 'screen'
    }, { index: 45, text: 'algorithm'
    }, { index: 46, text: 'artificial intelligence, AI'
    }, { index: 47, text: 'authentication'
    }, { index: 48, text: 'bandwidth'
    }, { index: 49, text: 'bit'
    }, { index: 50, text: 'broadband'
    }, { index: 51, text: 'byte'
    }, { index: 52, text: 'cookie'
    }, { index: 53, text: 'cyber safety, cyber security'
    }, { index: 54, text: 'encryption'
    }, { index: 55, text: 'malware'
    }, { index: 56, text: 'moderator'
    }, { index: 57, text: 'network'
    }, { index: 58, text: 'online'
    }, { index: 59, text: 'phishing'
    }, { index: 60, text: 'programming'
    }, { index: 61, text: 'spam'
    }, { index: 62, text: 'spreadsheet'
    }, { index: 63, text: 'spyware'
    }, { index: 64, text: 'Wi-Fi'
    }, { index: 65, text: 'word processing'


},

    ],
    definitions: [{
         index: 0, text: 'sovellus'
    }, { index: 1, text: 'liitetiedosto'
    }, { index: 2, text: 'askelpalautin'
    }, { index: 3, text: 'lihavointi'
    }, { index: 4, text: 'kirjanmerkki'
    }, { index: 5, text: 'selain'
    }, { index: 6, text: 'kursori'
    }, { index: 7, text: 'työpöytä'
    }, { index: 8, text: 'hakemisto'
    }, { index: 9, text: 'verkkotunnus'
    }, { index: 10, text: 'emoji, hymiö'
    }, { index: 11, text: 'tiedosto'
    }, { index: 12, text: 'palomuuri'
    }, { index: 13, text: 'kansio'
    }, { index: 14, text: 'fontti, kirjasin'
    }, { index: 15, text: 'aihetunniste, risuaita'
    }, { index: 16, text: 'otsikko'
    }, { index: 17, text: 'linkki'
    }, { index: 18, text: 'kuvake'
    }, { index: 19, text: 'kursivointi'
    }, { index: 20, text: 'hakukone'
    }, { index: 21, text: 'ohjelma, ohjelmisto'
    }, { index: 22, text: 'välilyöntinäppäin'
    }, { index: 23, text: 'käynnistää uudelleen'
    }, { index: 24, text: 'ladata (virtaa)'
    }, { index: 25, text: 'kopioida ja liittää'
    }, { index: 26, text: 'leikata ja liittää'
    }, { index: 27, text: 'kaatua, lakata toimimasta'
    }, { index: 28, text: 'poistaa'
    }, { index: 29, text: 'ladata (itselleen esim. internetistä)'
    }, { index: 30, text: 'raahata ja pudottaa'
    }, { index: 31, text: 'asentaa'
    }, { index: 32, text: 'kirjautua sisään, kirjautua ulos'
    }, { index: 33, text: 'päivittää (sivu)'
    }, { index: 34, text: 'päivittää (ohjelmisto/ sovellus)'
    }, { index: 35, text: 'ladata (omalta laitteelta esim. internetiin)'
    }, { index: 36, text: 'laturi'
    }, { index: 37, text: 'näyttö(laite)'
    }, { index: 38, text: 'telakka'
    }, { index: 39, text: 'muistitikku'
    }, { index: 40, text: 'laitteisto'
    }, { index: 41, text: 'kuulokemikrofoni'
    }, { index: 42, text: 'näppäimistö'
    }, { index: 43, text: 'kannettava tietokone'
    }, { index: 44, text: 'näyttö, ruutu'
    }, { index: 45, text: 'algoritmi'
    }, { index: 46, text: 'tekoäly'
    }, { index: 47, text: 'todennus'
    }, { index: 48, text: 'kaista, siirtonopeus'
    }, { index: 49, text: 'bitti'
    }, { index: 50, text: 'laajakaista'
    }, { index: 51, text: 'tavu'
    }, { index: 52, text: 'eväste'
    }, { index: 53, text: 'tietoturva'
    }, { index: 54, text: 'salaus'
    }, { index: 55, text: 'haittaohjelma'
    }, { index: 56, text: 'moderaattori'
    }, { index: 57, text: 'verkko'
    }, { index: 58, text: 'verkossa'
    }, { index: 59, text: 'tietojenkalastelu'
    }, { index: 60, text: 'ohjelmointi'
    }, { index: 61, text: 'roskaposti'
    }, { index: 62, text: 'taulukkolaskenta'
    }, { index: 63, text: 'vakoiluohjelma'
    }, { index: 64, text: 'langaton verkko'
    }, { index: 65, text: 'tekstinkäsittely'

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
    }
  };
    
for (var a=[],i=0;i<66;++i) a[i]=i;

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
    for (var i = 0; i < 66; i++) {
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