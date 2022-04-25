---
title: "Genetiivi: Flashcard"
date: 2022-3-20
draft: false
type: page
layout: tehtava
---

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
        index: 0, text: "SalesWay"
      }, {
        index: 1, text: "Red Flags"
      }, {
        index: 2, text: "Coach"
      }, {
        index: 3, text: "Single Sales Objective"
      }, {
        index: 4, text: "Opportunity Plan"
      }, {
        index: 5, text: "Minimum Acceptable Action"
      },

    ],
    definitions: [{
        index: 0, text: "SalesWay MSI Go-to-Customer Methodology"
      }, {
        index: 1, text: "Indicate unknowns or uncertainties"
      }, {
        index: 2, text: "Acts as a guide"
      }, {
        index: 3, text: "Objective aligned to an opportunity"
      }, {
        index: 4, text: "Strategic in nature"
      }, {
        index: 5, text: "Your walk away point"
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
    //warunek na to, że tylko jedno LI może być zaznaczone  
    if (selectedTerm !== null && selectedTerm !== termIndex) {
      termsContainer.querySelector("li[data-index='" + selectedTerm + "']").removeAttribute("data-selected");
    }

    //kasowanie odznaczenia  
    if (target.hasAttribute("data-selected")) {
      target.removeAttribute("data-selected");
      selectedTerm = null;
    }
    //zaznaczanie na klikniecie    	
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
      }
      selectedTerm = null; //odznacz kliknięcie
      selectedDef = null; //odznacz kliknięcie  
      term.removeAttribute("data-selected");
      def.removeAttribute("data-selected");
    }
  })

  function reset() {
    var resetTerms = termsContainer.querySelectorAll("li");
    var resetDefs = defsContainer.querySelectorAll("li");
    for (var i = 0; i < resetTerms.length; i++) {
      resetTerms[i].removeAttribute("class", "score");
      resetTerms[i].removeAttribute("data-selected");
    }
    for (i = 0; i < resetDefs.length; i++) {
      resetDefs[i].removeAttribute("class", "score");
      resetDefs[i].removeAttribute("data-selected");
    }

    selectedTerm = null;
    selectedDef = null;
  }

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
</script>

<style>
div#tehtava {
  height: 420px;
}

div#tehtava ul {
  list-style: none;
  width: 240px;
  font-size: 0.75em;
  position: absolute;
  padding: 10px;
}

div#tehtava ul#terms {
  display: flex;
  flex-direction: column;
}

div#tehtava ul#defs {
  left: 22em;
  display: flex;
  flex-direction: column;
}

div#tehtava ul#terms li {
  background: #808080;
  color: #ffffff;
}

div#tehtava ul#defs li {
  color: #808080
}

div#tehtava li {
  float: left;
  height: 4em;
  width: 17em;
  margin: 10px;
  background: white;
  text-align: center;
  cursor: pointer;
  transition: all .2s ease-out;
  border-radius: 0;
  -webkit-box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 1);
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 1);
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

div#tehtava div#counter {
  position: absolute;
  left: 100px;
  margin: 1rem;
  font-size: 3em;
  display: none;
}

div#tehtava ul li span {
  width: 80%;
  vertical-align: middle;
  text-align: center;
  padding: 10px;
  padding-top: 0;
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
  order: 1;
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