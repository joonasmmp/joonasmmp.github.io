---
title: "Teema 3: Business - yhdistä sanat"
date: 2022-6-1
draft: false
type: page
weight: 65
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
 
 //Execute a JavaScript immediately after a page has been loaded
window.onload = function() {

  //Data for terms and definitions. This can be stored in a separate .js file, in a JSON file or here in the main file
     var data = {
    terms: [{

     index: 0, text: 'account'
}, { index: 1, text: 'ATM, automated teller machine'
}, { index: 2, text: 'balance'
}, { index: 3, text: 'budget'
}, { index: 4, text: 'cash'
}, { index: 5, text: 'debt'
}, { index: 6, text: 'deposit'
}, { index: 7, text: 'deposit, down payment'
}, { index: 8, text: 'expense'
}, { index: 9, text: 'finance'
}, { index: 10, text: 'income tax'
}, { index: 11, text: 'instalment payment'
}, { index: 12, text: 'interest'
}, { index: 13, text: 'mortgage'
}, { index: 14, text: 'overdraw'
}, { index: 15, text: 'payday loan'
}, { index: 16, text: 'receipt'
}, { index: 17, text: 'transaction'
}, { index: 18, text: 'wealth'
}, { index: 19, text: 'withdrawal'
}, { index: 20, text: 'assets'
}, { index: 21, text: 'bond'
}, { index: 22, text: 'crash'
}, { index: 23, text: 'dividend'
}, { index: 24, text: 'invest'
}, { index: 25, text: 'investment'
}, { index: 26, text: 'investment fund, mutual fund'
}, { index: 27, text: 'property'
}, { index: 28, text: 'share'
}, { index: 29, text: 'shareholder'
}, { index: 30, text: 'stock market'
}, { index: 31, text: 'stocks'
}, { index: 32, text: 'trade'
}, { index: 33, text: 'bankrupt'
}, { index: 34, text: 'bankruptcy'
}, { index: 35, text: 'capital'
}, { index: 36, text: 'charge'
}, { index: 37, text: 'consumer'
}, { index: 38, text: 'consumption'
}, { index: 39, text: 'currency'
}, { index: 40, text: 'depression'
}, { index: 41, text: 'economics'
}, { index: 42, text: 'economy'
}, { index: 43, text: 'embargo'
}, { index: 44, text: 'goods'
}, { index: 45, text: 'inflation'
}, { index: 46, text: 'invoice'
}, { index: 47, text: 'market'
}, { index: 48, text: 'recession'
}, { index: 49, text: 'refund'
}, { index: 50, text: 'revenue'
}, { index: 51, text: 'value added tax, VAT'
}, { index: 52, text: 'boom'
}, { index: 53, text: 'bear market'
}, { index: 54, text: 'credit card'
}, { index: 55, text: 'surplus'
}, { index: 56, text: 'upturn'
}, { index: 57, text: 'import'
}, { index: 58, text: 'in the black'
}, { index: 59, text: 'gain, profit'
}, { index: 60, text: 'gross'
}, { index: 61, text: 'demand'


},

    ],
    definitions: [{    
     index: 0, text: 'tili'
}, { index: 1, text: 'pankkiautomaatti'
}, { index: 2, text: 'saldo'
}, { index: 3, text: 'budjetti, tulo- ja menoarvio'
}, { index: 4, text: 'käteinen'
}, { index: 5, text: 'velka'
}, { index: 6, text: 'tallettaa'
}, { index: 7, text: 'käsiraha, vakuus'
}, { index: 8, text: 'kulu, meno'
}, { index: 9, text: 'rahoittaa, rahoitus'
}, { index: 10, text: 'tulovero'
}, { index: 11, text: 'osamaksu'
}, { index: 12, text: 'korko'
}, { index: 13, text: 'asuntolaina'
}, { index: 14, text: 'ylittää tili'
}, { index: 15, text: 'pikavippi'
}, { index: 16, text: 'kuitti'
}, { index: 17, text: 'tilitapahtuma'
}, { index: 18, text: 'varallisuus'
}, { index: 19, text: 'nosto'
}, { index: 20, text: 'omaisuus, varat'
}, { index: 21, text: 'joukkovelkakirja'
}, { index: 22, text: 'romahdus'
}, { index: 23, text: 'osinko'
}, { index: 24, text: 'sijoittaa'
}, { index: 25, text: 'sijoitus'
}, { index: 26, text: 'sijoitusrahasto'
}, { index: 27, text: 'kiinteistö, omaisuus'
}, { index: 28, text: 'osake'
}, { index: 29, text: 'osakas, osakkeenomistaja'
}, { index: 30, text: 'pörssi'
}, { index: 31, text: 'osakekanta, arvopaperit'
}, { index: 32, text: 'käydä kauppaa, kaupankäynti'
}, { index: 33, text: 'maksukyvytön, vararikossa'
}, { index: 34, text: 'konkurssi'
}, { index: 35, text: 'pääoma'
}, { index: 36, text: 'veloittaa, veloitus'
}, { index: 37, text: 'kuluttaja'
}, { index: 38, text: 'kulutus'
}, { index: 39, text: 'rahayksikkö, valuutta'
}, { index: 40, text: 'lama'
}, { index: 41, text: 'taloustiede'
}, { index: 42, text: 'talous'
}, { index: 43, text: 'kauppasaarto'
}, { index: 44, text: 'kauppatavara'
}, { index: 45, text: 'inflaatio'
}, { index: 46, text: 'lasku, laskuttaa'
}, { index: 47, text: 'markkinoida, markkina(t)'
}, { index: 48, text: 'taantuma'
}, { index: 49, text: 'palauttaa, takaisinmaksu'
}, { index: 50, text: 'liikevaihto'
}, { index: 51, text: 'arvonlisävero'
}, { index: 52, text: '(nopea) nousukausi'
}, { index: 53, text: 'karhumarkkina, pitkä laskukausi'
}, { index: 54, text: 'luottokortti'
}, { index: 55, text: 'ylijäämä'
}, { index: 56, text: 'noususuhdanne'
}, { index: 57, text: 'tuoda maahan, maahantuonti'
}, { index: 58, text: 'voitolla'
}, { index: 59, text: 'tuotto, voitto'
}, { index: 60, text: 'brutto'
}, { index: 61, text: 'kysyntä'

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
if(h>60){$("#kaikki").html("Kaikki lisätty jo!"); }      })
  }

var numero = 0;
var h = 6;
</script>
{{< /rawhtml >}}