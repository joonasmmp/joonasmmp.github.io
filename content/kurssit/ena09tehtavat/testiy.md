---
title: "Testi, testi, connectsss"
date: 2022-5-23
draft: true
type: page
layout: tehtava
---

{{< rawhtml >}}

<div id="tehtava">
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
         }, { index: 1, text: "Gorilla"
         }, { index: 2, text: "Riisi"
         }, { index: 3, text: "Metsuri"
         }, { index: 4, text: "Papu"
         }, { index: 5, text: "Koivu"
         }, { index: 6, text: "Saapas"
         }, { index: 7, text: "Kolmio"
         }, { index: 8, text: "Kivi"
         }, { index: 9, text: "Vehnä"
         },
   
       ],
       definitions: [{
              index: 0, text: "Dog"
         }, { index: 1, text: "Gorilla"
         }, { index: 2, text: "Rice"
         }, { index: 3, text: "Lumberjack"
         }, { index: 4, text: "Bean"
         }, { index: 5, text: "Birch"
         }, { index: 6, text: "Boot"
         }, { index: 7, text: "Triangle"
         }, { index: 8, text: "Rock"
         }, { index: 9, text: "Wheat"
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
       for (var i = 0; i < 10; i++) {
         container.innerHTML = container.innerHTML + "<li data-index='" + list[i]["index"] + "'>" + "<span>" + list[i]["text"] + "</span>" + "</li>";
   
       }
     }
   
     function createListHTML3(list, container) {
       container.innerHTML = ""; //first, clean up any existing LI elements
       for (var i = 0; i < 3; i++) {
         container.innerHTML = container.innerHTML + "<li data-index='" + list[i]["index"] + "'>" + "<span>" + list[i]["text"] + "</span>" + "</li>";
   
       }
     }
       const addCSS = s => document.head.appendChild(document.createElement("style")).innerHTML = s;
   
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
       addCSS("div#tehtava li[data-index='" + a[1] + "']{display: flex;}")
       addCSS("div#tehtava li[data-index='" + a[2] + "']{display: flex;}")
       addCSS("div#tehtava li[data-index='" + a[3] + "']{display: flex;}")
       addCSS("div#tehtava li[data-index='" + a[4] + "']{display: flex;}")
       addCSS("div#tehtava li[data-index='" + a[5] + "']{display: flex;}")
       addCSS("div#tehtava li[data-index='" + a[6] + "']{display: flex;}")
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
         }   
          )
          document.getElementById("yhdeksän").addEventListener("click", function() {
           shuffle9();
         }   
          )}
   
   var numero = 0;
   
   for (var a=[],i=0;i<10;++i) a[i]=i;
   
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

div#tehtava li[data-index]{
  display: none;
}
</style>
{{< /rawhtml >}}