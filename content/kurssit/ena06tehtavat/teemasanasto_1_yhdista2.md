---
title: "Teema 1: Education - yhdistä sanat"
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

     index: 0, text: 'adult education centre'
}, { index: 1, text: 'apprenticeship training'
}, { index: 2, text: 'basic education'
}, { index: 3, text: 'boarding school'
}, { index: 4, text: 'comprehensive school'
}, { index: 5, text: 'elementary school (AmE), primary school (BrE)'
}, { index: 6, text: 'folk high school'
}, { index: 7, text: 'general upper secondary school'
}, { index: 8, text: 'liberal adult education'
}, { index: 9, text: 'open university'
}, { index: 10, text: 'preschool'
}, { index: 11, text: 'public school (BrE), private school (AmE)'
}, { index: 12, text: 'secondary school (BrE), middle school, junior high school (AmE)'
}, { index: 13, text: 'university, college'
}, { index: 14, text: 'university of applied sciences'
}, { index: 15, text: 'vocational college/institute/school'
}, { index: 16, text: 'absence'
}, { index: 17, text: 'advanced (studies)'
}, { index: 18, text: 'admission'
}, { index: 19, text: 'A-levels'
}, { index: 20, text: 'attend lessons (BrE), classes (AmE)'
}, { index: 21, text: 'assessment'
}, { index: 22, text: 'assignment'
}, { index: 23, text: 'break (BrE), recess (AmE)'
}, { index: 24, text: 'cheat'
}, { index: 25, text: 'compulsory'
}, { index: 26, text: 'cram course'
}, { index: 27, text: 'credit'
}, { index: 28, text: 'curriculum'
}, { index: 29, text: 'detention'
}, { index: 30, text: 'discipline'
}, { index: 31, text: 'distance learning'
}, { index: 32, text: 'drop out'
}, { index: 33, text: 'e-learning'
}, { index: 34, text: 'expel'
}, { index: 35, text: 'extracurricular activities'
}, { index: 36, text: 'fail (BrE), flunk (AmE)'
}, { index: 37, text: 'form (BrE), grade (AmE)'
}, { index: 38, text: 'free period'
}, { index: 39, text: 'graduate from'
}, { index: 40, text: 'independent study'
}, { index: 41, text: 'lesson, class'
}, { index: 42, text: 'mark (BrE), grade (AmE)'
}, { index: 43, text: 'matriculation examination'
}, { index: 44, text: 'optional'
}, { index: 45, text: 'pass'
}, { index: 46, text: 'skip a lesson, cut class'
}, { index: 47, text: 'study unit'
}, { index: 48, text: 'suspend'
}, { index: 49, text: 'syllabus'
}, { index: 50, text: 'term (BrE), semester (AmE)'
}, { index: 51, text: 'timetable, schedule'
}, { index: 52, text: 'class teacher'
}, { index: 53, text: 'form teacher (BrE), homeroom teacher (AmE)'
}, { index: 54, text: 'guidance counsellor (BrE), student counselor (AmE)'
}, { index: 55, text: 'head teacher (BrE), principal (AmE)'
}, { index: 56, text: 'school social worker'
}, { index: 57, text: 'special needs teacher'
}, { index: 58, text: 'subject teacher'
}, { index: 59, text: 'alumni'
}, { index: 60, text: 'application for admission'
}, { index: 61, text: 'dissertation'
}, { index: 62, text: 'hall of residence (BrE), dormitory (AmE)'
}, { index: 63, text: 'enrol on (BrE), enroll in (AmE)'
}, { index: 64, text: 'faculty'
}, { index: 65, text: 'get a degree (in)'
}, { index: 66, text: 'get into university'
}, { index: 67, text: 'lecture'
}, { index: 68, text: 'major'
}, { index: 69, text: 'minor'
}, { index: 70, text: 'personal statement, motivation letter'
}, { index: 71, text: 'scholarship'
}, { index: 72, text: 'student loan'
}, { index: 73, text: 'study credit'
}, { index: 74, text: 'study grant'
}, { index: 75, text: 'take an entrance exam'
}, { index: 76, text: 'thesis, theses'
}, { index: 77, text: 'tuition fee'

},

    ],
    definitions: [{    
     index: 0, text: 'kansalaisopisto'
}, { index: 1, text: 'oppisopimuskoulutus'
}, { index: 2, text: 'perusopetus'
}, { index: 3, text: 'sisäoppilaitos'
}, { index: 4, text: 'peruskoulu'
}, { index: 5, text: 'alakoulu'
}, { index: 6, text: 'kansanopisto'
}, { index: 7, text: 'lukio'
}, { index: 8, text: 'vapaa sivistystyö'
}, { index: 9, text: 'avoin yliopisto'
}, { index: 10, text: 'esikoulu'
}, { index: 11, text: 'yksityiskoulu'
}, { index: 12, text: 'yläkoulu'
}, { index: 13, text: 'yliopisto, korkeakoulu'
}, { index: 14, text: 'ammattikorkeakoulu'
}, { index: 15, text: 'ammattiopisto'
}, { index: 16, text: 'poissaolo'
}, { index: 17, text: 'syventävät (opinnot)'
}, { index: 18, text: 'sisäänpääsy'
}, { index: 19, text: 'ylioppilastutkinto Britanniassa'
}, { index: 20, text: 'käydä oppitunneilla'
}, { index: 21, text: 'arviointi'
}, { index: 22, text: 'tehtävä'
}, { index: 23, text: 'tauko, välitunti'
}, { index: 24, text: 'luntata, huijata'
}, { index: 25, text: 'pakollinen'
}, { index: 26, text: 'valmennuskurssi'
}, { index: 27, text: 'opintopiste'
}, { index: 28, text: 'opetussuunnitelma'
}, { index: 29, text: 'jälki-istunto'
}, { index: 30, text: 'kuri'
}, { index: 31, text: 'etäopiskelu'
}, { index: 32, text: 'jättää koulu kesken'
}, { index: 33, text: 'e-oppiminen'
}, { index: 34, text: 'erottaa (koulusta)'
}, { index: 35, text: 'koulutuntien ulkopuolinen toiminta'
}, { index: 36, text: 'reputtaa'
}, { index: 37, text: 'koululuokka'
}, { index: 38, text: 'hyppytunti'
}, { index: 39, text: 'valmistua'
}, { index: 40, text: 'itsenäinen opiskelu'
}, { index: 41, text: 'oppitunti'
}, { index: 42, text: 'arvosana'
}, { index: 43, text: 'ylioppilastutkinto Suomessa'
}, { index: 44, text: 'valinnainen'
}, { index: 45, text: 'läpäistä (koe)'
}, { index: 46, text: 'pinnata'
}, { index: 47, text: 'opintojakso'
}, { index: 48, text: 'erottaa määräajaksi'
}, { index: 49, text: 'opinto-ohjelma'
}, { index: 50, text: 'lukukausi'
}, { index: 51, text: 'lukujärjestys'
}, { index: 52, text: 'luokanopettaja'
}, { index: 53, text: 'luokanvalvoja (perusopetus), ryhmänohjaaja (lukio)'
}, { index: 54, text: 'opinto-ohjaaja'
}, { index: 55, text: 'rehtori'
}, { index: 56, text: 'kuraattori'
}, { index: 57, text: 'erityisopettaja'
}, { index: 58, text: 'aineenopettaja'
}, { index: 59, text: 'oppilaitoksesta valmistuneet opiskelijat'
}, { index: 60, text: 'hakemus (oppilaitokseen)'
}, { index: 61, text: 'väitöskirja, tieteellinen tutkielma'
}, { index: 62, text: 'opiskelija-asuntola'
}, { index: 63, text: 'kirjoittautua sisään (oppilaitokseen)'
}, { index: 64, text: 'tiedekunta'
}, { index: 65, text: 'saada loppututkinto'
}, { index: 66, text: 'päästä yliopistoon'
}, { index: 67, text: 'luento'
}, { index: 68, text: 'pääaine'
}, { index: 69, text: 'sivuaine'
}, { index: 70, text: 'motivaatiokirje'
}, { index: 71, text: 'stipendi, apuraha'
}, { index: 72, text: 'opintolaina'
}, { index: 73, text: 'opintopiste'
}, { index: 74, text: 'apuraha, opintotuki'
}, { index: 75, text: 'osallistua pääsykokeeseen'
}, { index: 76, text: 'tutkielma, tutkielmat'
}, { index: 77, text: 'lukukausimaksu'

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
    for (var i = 0; i < 63; i++) {
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
if(h>66){$("#kaikki").html("Kaikki lisätty jo!"); }      })
  }

var numero = 0;
var h = 6;
</script>
{{< /rawhtml >}}