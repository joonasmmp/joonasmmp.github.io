+++
author = "PJMM"
title = "Case paritustehtävä"
date = "2022-09-11"
type = "post"
tags = [
    "verkkosivu",
    "offtopic",
    "koodaus",
    "tietotekniikka",
    ]
categories = [
    "Verkkosivu",
]
+++

Kysyin kollegaltani Markulta (nimi ei muutettu) millaisia verkkotehtäviä hän haluaisi. Hän sanoi haluavansa tehtävän, jossa sanastosta arvotaan määrä n sanoja ja niille täytyy etsiä pari. Kun paritus on valmis, on valmiina sanasto jossa toisella puolella englanninkielinen versio ja toisella puolella suomenkielinen. Lupasin hoitaa asian. 

## Tausta

Koska en osaa koodata, etsin ohjeen kuinka luoda muistipeli. Siinähän on käytännössä sama idea. Korttien sijasta laitoin kaksi riviä vastakkaisille puolille ja muutin kortit suorakulmioiksi. Indeksissä kaksi arvoa (sana suomeksi ja englanniksi) ja ne on paritettu toisiinsa. Idea on hyvin yksinkertainen: painat kahta näppäintä ja jos ne ovat pari, jotain tapahtuu. Jos ei niin homma nollaantuu. Easy money.

## Ensimmäinen yritys

{{< rawhtml >}}
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
        index: 0, text: "Koira"
      }, {
        index: 1, text: "Gorilla"
      }, {
        index: 2, text: "Riisi"
      }, {
        index: 3, text: "Metsuri"
      }, {
        index: 4, text: "Papu"
      }, {
        index: 5, text: "Koivu"
      },

    ],
    definitions: [{
        index: 0, text: "Dog"
      }, {
        index: 1, text: "Gorilla"
      }, {
        index: 2, text: "Rice"
      }, {
        index: 3, text: "Lumberjack"
      }, {
        index: 4, text: "Bean"
      }, {
        index: 5, text: "Birch"
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
    }
  };



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
    for (var i = 0; i < 6; i++) {
      container.innerHTML = container.innerHTML + "<li data-index='" + list[i]["index"] + "'>" + "<span>" + list[i]["text"] + "</span>" + "</li>";
      //OR shorter version: container.innerHTML += "<li data-index='" + list[i]["index"] + "'>" + list[i]["text"] + "</li>";
    }
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
  document.querySelector("button").addEventListener("click", function() {
    reset();
    termsContainer.setAttribute("class", "fadeOut");
    defsContainer.setAttribute("class", "fadeOut");
    setTimeout(function() {
        shuffle();
        termsContainer.removeAttribute("class", "fadeOut");
        defsContainer.removeAttribute("class", "fadeOut");
      }, 450)
      //shuffle();

  });

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

div#tehtava button {
  position: absolute;
  padding: 0;
  margin: 0;
  width: 100px;
  height: 30px;
  left: 640px;
  bottom: 0px;
  font-weight: bold;
  transition: background-color 0.3s ease-out;
  background-color: #00A0DF;
  border-radius: 3px;
  border: none;
  color: #fff;
  -webkit-box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 1);
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 1);
}

div#tehtava button:hover {
  background-color: #30BCF3;
  cursor: pointer;
}

div#tehtava button:active {
  box-shadow: none;
  outline: none;
  transform: scale(0.95, 0.95);
}

div#tehtava button:focus {
  outline: none;
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
</style>

{{< /rawhtml >}}
Ja siinähän se seisoo. Mutta mikäli jaksat klikkailla, huomaat että järjestys menee ihan miten sattuu. Alkuperäisessä muistipelissä siis korttien paikka ei vaihdu, mutta arvotaan jokaisen sivulatauksen alussa koodilla:

```html
function randomSort(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;


    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
```

Eli siis alkuperäiset indeksinumerot arvotaan uusiksi. Tällöin ne menevät uuden indeksinumeron mukaiseen järjestykseen. Luulin, että laittamalla CSS-koodin weight: 1 homma onnistuu, kun menevät värin muuttuessa listan pohjalle, mutta uusien sanojen pudotessa pohjalle sanat palauttavat alkuperäisen arvotun järjestyksensä.

## Toinen yritys

{{< rawhtml >}}
<div id="tehtavaa" class="grid grid-cols-2">
 <div><ul id="termss"> </ul></div>
 <div><ul id="defss"> </ul></div>
</div>

<script> 
   //Execute a JavaScript immediately after a page has been loaded
window.onload = function() {

  //Data for terms and definitions. This can be stored in a separate .js file, in a JSON file or here in the main file
  var data = {
    terms: [{
        index: 0, text: "Koira"
      }, {
        index: 1, text: "Gorilla"
      }, {
        index: 2, text: "Riisi"
      }, {
        index: 3, text: "Metsuri"
      }, {
        index: 4, text: "Papu"
      }, {
        index: 5, text: "Koivu"
      },

    ],
    definitions: [{
        index: 0, text: "Dog"
      }, {
        index: 1, text: "Gorilla"
      }, {
        index: 2, text: "Rice"
      }, {
        index: 3, text: "Lumberjack"
      }, {
        index: 4, text: "Bean"
      }, {
        index: 5, text: "Birch"
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
    }
  };



  var selectedTerm = null, //to make sure none is selected onload
    selectedDef = null,
    termsContainer = document.querySelector("#termss"), //list of terms
    defsContainer = document.querySelector("#defss"); //list of definitions

  //This function takes two arguments, that is one term and one def to compare if they match. It returns True or False after compairing values of the "pairs" object property.     
  function isMatch(termIndex, defIndex) {
    return data.pairs[termIndex] === defIndex;
  }

  //This function adds HTML elements and content to the specified container (UL).
  function createListHTML(list, container) {
    container.innerHTML = ""; //first, clean up any existing LI elements
    for (var i = 0; i < 6; i++) {
      container.innerHTML = container.innerHTML + "<li data-index='" + list[i]["index"] + "'>" + "<span>" + list[i]["text"] + "</span>" + "</li>";
      //OR shorter version: container.innerHTML += "<li data-index='" + list[i]["index"] + "'>" + list[i]["text"] + "</li>";
    }
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
      var term = document.querySelector("#termss [data-index='" + selectedTerm + "']");
      var def = document.querySelector("#defss [data-index='" + selectedDef + "']");
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
      //var term = document.querySelector("#termss [data-index='"+selectedTerm+"']");
      var term = termsContainer.querySelector("[data-index='" + selectedTerm + "']");
      //var def = document.querySelector("#defss [data-index='"+selectedDef+"']");
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
  document.querySelector("button").addEventListener("click", function() {
    reset();
    termsContainer.setAttribute("class", "fadeOut");
    defsContainer.setAttribute("class", "fadeOut");
    setTimeout(function() {
        shuffle();
        termsContainer.removeAttribute("class", "fadeOut");
        defsContainer.removeAttribute("class", "fadeOut");
      }, 450)
      //shuffle();

  });

}

var numero = 0;
</script>

<style>
div#tehtavaa {
  overflow: hidden;
}

div#tehtavaa ul {
  list-style: none;
  font-size: 0.75em;
}

div#tehtavaa ul#termss {
  display: flex;
  flex-direction: column;
}

div#tehtavaa ul#defss {
  display: flex;
  flex-direction: column;
}

div#tehtavaa ul#termss li {
  background: #1F2937;
  color: #ffffff;
}

div#tehtavaa ul#defss li {
  color: #000000
}

div#tehtavaa li {
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

div#tehtavaa li:hover {
  transform: scale(1.05, 1.05);
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 1);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 1);
}

div#tehtavaa li[data-selected] {
  transform: scale(1.05, 1.05);
  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.75);
  outline: 4px solid #00A0DF;
}

div#tehtavaa ul li span {
  width: 100%;
  height: 100%;
  display: block;
  vertical-align: middle;
  text-align: center;
  padding: 10px;
  transform: none;
  transition: opacity 0.2s ease-out;
}

div#tehtavaa span:hover {
  transform: none;
}

div#tehtavaa button {
  position: absolute;
  padding: 0;
  margin: 0;
  width: 100px;
  height: 30px;
  left: 640px;
  bottom: 0px;
  font-weight: bold;
  transition: background-color 0.3s ease-out;
  background-color: #00A0DF;
  border-radius: 3px;
  border: none;
  color: #fff;
  -webkit-box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 1);
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 1);
}

div#tehtavaa button:hover {
  background-color: #30BCF3;
  cursor: pointer;
}

div#tehtavaa button:active {
  box-shadow: none;
  outline: none;
  transform: scale(0.95, 0.95);
}

div#tehtavaa button:focus {
  outline: none;
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
</style>

{{< /rawhtml >}}

Ja siinähän se taas seisoo. Aiempi ongelma korjattiin helpolla muutoksella, tosin kyseessä oli vasta noin kymmenes muutosyritys eli kokeilin vaikka ja mitä ennen kuin sain toimimaan koska en edelleenkään osaa koodata. Pakkomielteisesti yritin ratkaista ongelman palauttamalla alkuperäiset indeksinumerot parin löytymisen jälkeen. Ongelma kuitenkin ratkaistiin luomalla uusi muuttuja 

```javascript
var numero = 0 
```

Parin löytyessä kyseinen muuttuja nousee yhdellä

```javascript
numero++ 
```

Ja kummankin puolen sanoihin lisätään css-muutoksen yhteydessä järjestysnumero muuttujan mukaan

```javascript
      if (isMatch(selectedTerm, selectedDef)) {
				term.className = "score";
        def.className = "score";
  	   			term.style.order = (numero);
   			def.style.order = (numero);
            }
```
Joten tehtävä on valmis. Vai onko? Markku toivoi, mikäli oikein ymmärsin, että sanat arvottaisiin suuremmasta sanastosta. Ja se olisi tietty myös opettajalle helpompi, kun ei tarvitsisi näperrellä usean tehtävän kanssa. Joten mitä jos indeksiin lisää uusia sanoja, ja laittaa tehtävän arpomaan vain osan indeksin sanoista tehtävän alussa?

## Kolmas yritys

