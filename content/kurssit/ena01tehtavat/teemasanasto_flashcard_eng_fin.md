---
title: "Teemasanasto: ENG-FIN"
date: 2022-3-26
draft: false
type: page
layout: tehtava
---
{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/flashcard1.css"/>
<html>
 <body>
  <div id="cardArea"></div>
  <div id=valikko>
<button id="teema1">Body Parts</button>  <button id="teema2">Health</button>   <button id="teema3">Family</button> 
</div>
  <div id="lukumaara"></div>
  <div id="buttonArea" class="grid grid-cols-3"></div>

<div id="nappaimet" class="hidden lg:block" style="text-align:center; margin:0 auto; width:50%;"> 
<table>
  <tr>
    <td style="text-align:end;">välilyönti</td>
    <td>käännä kortti</td>
  </tr>
  <tr>
    <td style="text-align:end;">< ></td>
    <td>vaihda korttia</td>
  </tr>
  <tr>
    <td style="text-align:end;">R</td>
    <td>satunnainen kortti</td>
</table>

</div>


 </body>
</html>

<script> 
$(document).ready(function() {

  var currentQuestion = 0;
  var qbank = [
["beard", "parta"],
["cheek", "poski"],
["chin", "leuankärki"],
["dimple", "hymykuoppa"],
["earlobe", "korvannipukka"],
["eyebrow", "kulmakarva"],
["eyelashes", "silmäripset"],
["eyelid", "silmäluomi"],
["forehead", "otsa"],
["freckle", "pisama"],
["gums", "ikenet"],
["jaw", "leuka"],
["lip", "huuli"],
["mole", "luomi"],
["moustache", "viikset"],
["mouth", "suu"],
["neck", "niska/kaula"],
["nostril", "sierain"],
["scar", "arpi"],
["sideburns", "pulisongit"],
["stubble", "sänki"],
["teeth", "hampaat"],
["temple", "ohimo"],
["throat", "kurkku"],
["tongue", "kieli"],
["cuticles", "kynsinauhat"],
["fingernail", "kynsi"],
["fist", "nyrkki"],
["index finger", "etusormi"],
["knuckles", "rystyset"],
["middle finger", "keskisormi"],
["palm", "kämmen"],
["pinky, little finger", "pikkusormi"],
["ring finger", "nimetön"],
["thumb", "peukalo"],
["wrist", "ranne"],
["abdomen",	"vatsa"],
["ankle", "nilkka"],
["arm", "käsivarsi"],
["armpit", "kainalo"],
["back", "selkä"],
["belly button", "napa"],
["breast", "rinta"],
["buttocks", "pakarat"],
["calf", "pohje"],
["chest", "rintakehä"],
["elbow", "kyynärpää"],
["foot", "jalka(terä)"],
["forearm", "kyynärvarsi"],
["groin", "nivuset"],
["hand", "käsi"],
["heel", "kantapää"],
["hips", "lantio"],
["knee", "polvi"],
["leg", "jalka"],
["nipple", "nänni"],
["shin", "sääri"],
["shoulder", "hartia, olkapää"],
["sole", "jalkapohja"],
["thigh", "reisi"],
["toe", "varvas"],
["waist", "vyötärö"],
["blood vessel", "verisuoni"],
["bone marrow", "luuydin"],
["brain", "aivot"],
["gland", "rauhanen"],
["heart", "sydän"],
["kidney", "munuainen"],
["liver", "maksa"],
["lungs", "keuhkot"],
["musculature", "lihaksisto"],
["nerve", "hermo"],
["nervous system", "hermosto"],
["skull", "pääkallo"],
["spine", "selkäranka"],
["stomach", "vatsalaukku"],
["thyroid", "kilpirauhanen"],
["circulation", "verenkierto"],
["digestion", "ruoansulatus"],
["metabolism", "aineenvaihdunta"],
["respiration", "hengitys"],
["blood pressure", "verenpaine"],
["blood sugar", "verensokeri"],
["pulse", "pulssi"],
["dentist", "hammaslääkäri"],
["GP, general practitioner", "yleislääkäri"],
["midwife", "kätilö"],
["paramedic", "ensihoitaja"],
["patient", "potilas"],
["pharmacist", "farmaseutti"],
["practical nurse", "lähihoitaja"],
["psychologist", "psykologi"],
["RN, (registered) nurse", "sairaanhoitaja"],
["surgeon", "kirurgi"],
["ache, pain", "kipu, särky"],
["bruise", "ruhje, mustelma"],
["burn", "palovamma"],
["fracture", "murtuma"],
["illness, sickness, disease, ailment", "sairaus"],
["injury", "vamma"],
["rash", "ihottuma"],
["sprain", "venähdys, revähdys"],
["wound, cut", "haava"],
["diarrhoea (BrE), diarrhea (AmE)", "ripuli"],
["flu", "flunssa"],
["heartburn", "närästys"],
["heatstroke", "lämpöhalvaus"],
["sore throat", "kurkkukipu"],
["sunstroke", "auringonpistos"],
["vomit", "oksentaa"],
["cancer", "syöpä"],
["diabetes", "diabetes"],
["heart attack", "sydänkohtaus"],
["obesity", "ylipaino"],
["tumour (BrE), tumor (AmE)", "kasvain"],
["addiction", "riippuvuus"],
["depression", "masennus"],
["overdose", "yliannostus"],
["aunt", "täti"],
["dependant", "huollettava"],
["(first) cousin", "serkku"],
["grandparent", "isovanhempi"],
["guardian", "huoltaja"],
["nephew", "sisaren- tai veljenpoika"],
["niece", "sisaren- tai veljentytär"],
["relatives", "sukulaiset"],
["second cousin", "pikkuserkku"],
["sibling", "sisarus"],
["uncle", "setä, eno"],
["brother-in-law", "lanko"],
["daughter-in-law", "miniä"],
["father-in-law", "appi"],
["in-laws", "puolison sukulaiset"],
["mother-in-law", "anoppi"],
["sister-in-law", "käly"],
["son-in-law", "vävy"],
["(bride)groom", "sulhanen"],
["bachelor", "poikamies"],
["bachelorette", "poikamiestyttö"],
["bride", "morsian"],
["ex-husband", "entinen aviomies"],
["ex-wife", "entinen vaimo"],
["fiancé", "kihlattu (mies)"],
["fiancée", "kihlattu (nainen)"],
["partner", "puoliso, kumppani"],
["significant other", "kumppani"],
["spouse", "puoliso"],
["foster parents", "sijaisvanhemmat"],
["orphan", "orpo"],
["stepfather", "isäpuoli"],
["stepmother", "äitipuoli"],
["surrogate mother", "sijaissynnyttäjä"],
["descendant", "jälkeläinen"],
["forefather, ancestor", "esi-isä"],
["offspring", "jälkeläiset, jälkikasvu"],
["blended family, stepfamily", "uusperhe (puolisoilla voi olla yhteisten lasten lisäksi lapsia edellisistä parisuhteista)"],
["extended family", "suurperhe, suku"],
["foster family", "sijaisperhe"],
["LGBT family", "sateenkaariperhe"],
["nuclear family", "ydinperhe"],
["same-sex couple", "samaa sukupuolta olevien parisuhde"],
["single-parent family", "yhden vanhemman perhe"],
["divorced", "eronnut"],
["engaged", "kihloissa"],
["married", "naimisissa"],
["separated", "erillään asuva, asumuserossa"],
["single", "naimaton"],
["widow", "leski (naispuolinen)"],
["widower", "leski (miespuolinen)"],
["adopt", "adoptoida"],
["be / get divorced from", "erota"],
["be / get engaged to", "olla kihloissa / mennä kihloihin"],
["be / get married to", "olla naimisissa / mennä naimisiin"],
["bring up, raise", "kasvattaa"],
["marry someone", "mennä naimisiin jonkun kanssa"],
["nurture", "hoivata, kasvattaa"],
["start / end a relationship with someone", "aloittaa / päättää suhde"],
["adult, of age", "täysi-ikäinen"],
["child neglect", "lasten laiminlyönti"],
["family ties", "perhesuhteet"],
["family values", "perhearvot"],
["minor", "alaikäinen"],
["upbringing", "kasvatus"],
  ];

  beginActivity();
  edellinen();
  random();
  seuraava();
  kortinVaihto();

  	$("#teema1").on("mousedown", function(){
    currentQuestion = 0;
    beginActivity();
    })
    $("#teema2").on("mousedown", function(){
    currentQuestion = 50;
    beginActivity();
    })
    $("#teema3").on("mousedown", function(){
    currentQuestion = 118;
    beginActivity();
    })

  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && e.target === document.body) {
      e.preventDefault();
    }
  });

  document.body.onkeydown = function(event) {
    event = event || window.event;
    var keycode = event.charCode || event.keyCode;
    if (keycode === 37 && currentQuestion > 0) {
      currentQuestion--;
      beginActivity();
    }

    if (keycode === 82) {
      var randomNumber = Math.floor(Math.random() * qbank.length);
      currentQuestion = randomNumber;
      beginActivity();
    }

    if (keycode === 39 && currentQuestion < qbank.length - 1) {
      currentQuestion++;
      beginActivity();
    }

    if (keycode === 32) {
      var parentDiv = document.getElementById("cardArea");
      var childDiv = document.getElementById("card1");
      if (parentDiv.contains(childDiv)) {
        $("#cardArea").empty()
        $("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>')
        $("#card2").css("background-color", "#00473c")
      } else {
        $("#cardArea").empty()
        $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>')
        $("#card1").css("background-color", "#1F2937")
      }
    }

  }

  function beginActivity() {
    $("#cardArea").empty();
    $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
    $("#card1").css("background-color", "#1F2937");
    $("#lukumaara").empty();
    var korttia = document.createElement('div')
    korttia.innerHTML = currentQuestion + 1 + " / " + qbank.length;
    document.getElementById('lukumaara').appendChild(korttia);
  }

  function kortinVaihto() {
    $("#cardArea").on("click", function() {
      var parentDiv = document.getElementById("cardArea");
      var childDiv = document.getElementById("card1");
      if (parentDiv.contains(childDiv)) {
        $("#cardArea").empty()
        $("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>')
        $("#card2").css("background-color", "#00473c")
      } else {
        $("#cardArea").empty()
        $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>')
        $("#card1").css("background-color", "#1F2937")
      }
    })
  }


  function edellinen() {
    $("#buttonArea").append('<div id="prevButton">Edellinen</div>');
    $("#prevButton").on("click", function() {
      if (currentQuestion > 0) {
        currentQuestion--;
        beginActivity();
      }
    })
  }

  function random() {
    $("#buttonArea").append('<div id="random">Random</div>');
    $("#random").on("click", function() {
      var randomNumber = Math.floor(Math.random() * qbank.length);
      currentQuestion = randomNumber;
      beginActivity();
    })
  }

  function seuraava() {
    $("#buttonArea").append('<div id="nextButton">Seuraava</div>');
    $("#nextButton").on("click", function() {
      if (currentQuestion < qbank.length - 1) {
        currentQuestion++;
        beginActivity();
      }
    })
  }
})
</script>

{{< /rawhtml >}}