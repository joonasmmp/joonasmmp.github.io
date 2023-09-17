---
title: "Teemasanasto: FIN-ENG"
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
["parta", "beard"],
["poski", "cheek"],
["leuankärki", "chin"],
["hymykuoppa", "dimple"],
["korvannipukka", "earlobe"],
["kulmakarva", "eyebrow"],
["silmäripset", "eyelashes"],
["silmäluomi", "eyelid"],
["otsa", "forehead"],
["pisama", "freckle"],
["ikenet", "gums"],
["leuka", "jaw"],
["huuli", "lip"],
["luomi", "mole"],
["viikset", "moustache"],
["suu", "mouth"],
["niska/kaula", "neck"],
["sierain", "nostril"],
["arpi", "scar"],
["pulisongit", "sideburns"],
["sänki", "stubble"],
["hampaat", "teeth"],
["ohimo", "temple"],
["kurkku", "throat"],
["kieli", "tongue"],
["kynsinauhat", "cuticles"],
["kynsi", "fingernail"],
["nyrkki", "fist"],
["etusormi", "index finger"],
["rystyset", "knuckles"],
["keskisormi", "middle finger"],
["kämmen", "palm"],
["pikkusormi", "pinky, little finger"],
["nimetön", "ring finger"],
["peukalo", "thumb"],
["ranne", "wrist"],
["vatsa", "abdomen"],
["nilkka", "ankle"],
["käsivarsi", "arm"],
["kainalo", "armpit"],
["selkä", "back"],
["napa", "belly button"],
["rinta", "breast"],
["pakarat", "buttocks"],
["pohje", "calf"],
["rintakehä", "chest"],
["kyynärpää", "elbow"],
["jalka(terä)", "foot"],
["kyynärvarsi", "forearm"],
["nivuset", "groin"],
["käsi", "hand"],
["kantapää", "heel"],
["lantio", "hips"],
["polvi", "knee"],
["jalka", "leg"],
["nänni", "nipple"],
["sääri", "shin"],
["hartia, olkapää", "shoulder"],
["jalkapohja", "sole"],
["reisi", "thigh"],
["varvas", "toe"],
["vyötärö", "waist"],
["verisuoni", "blood vessel"],
["luuydin", "bone marrow"],
["aivot", "brain"],
["rauhanen", "gland"],
["sydän", "heart"],
["munuainen", "kidney"],
["maksa", "liver"],
["keuhkot", "lungs"],
["lihaksisto", "musculature"],
["hermo", "nerve"],
["hermosto", "nervous system"],
["pääkallo", "skull"],
["selkäranka", "spine"],
["vatsalaukku", "stomach"],
["kilpirauhanen", "thyroid"],
["verenkierto", "circulation"],
["ruoansulatus", "digestion"],
["aineenvaihdunta", "metabolism"],
["hengitys", "respiration"],
["verenpaine", "blood pressure"],
["verensokeri", "blood sugar"],
["pulssi", "pulse"],
["hammaslääkäri", "dentist"],
["yleislääkäri", "GP, general practitioner"],
["kätilö", "midwife"],
["ensihoitaja", "paramedic"],
["potilas", "patient"],
["farmaseutti", "pharmacist"],
["lähihoitaja", "practical nurse"],
["psykologi", "psychologist"],
["sairaanhoitaja", "RN, (registered) nurse"],
["kirurgi", "surgeon"],
["kipu, särky", "ache, pain"],
["ruhje, mustelma", "bruise"],
["palovamma", "burn"],
["murtuma", "fracture"],
["sairaus", "illness, sickness, disease, ailment"],
["vamma", "injury"],
["ihottuma", "rash"],
["venähdys, revähdys", "sprain"],
["haava", "wound, cut"],
["ripuli", "diarrhoea (BrE), diarrhea (AmE)"],
["flunssa", "flu"],
["närästys", "heartburn"],
["lämpöhalvaus", "heatstroke"],
["kurkkukipu", "sore throat"],
["auringonpistos", "sunstroke"],
["oksentaa", "vomit"],
["syöpä", "cancer"],
["diabetes", "diabetes"],
["sydänkohtaus", "heart attack"],
["ylipaino", "obesity"],
["kasvain", "tumour (BrE), tumor (AmE)"],
["riippuvuus", "addiction"],
["masennus", "depression"],
["yliannostus", "overdose"],
["täti", "aunt"],
["huollettava", "dependant"],
["serkku", "(first) cousin"],
["isovanhempi", "grandparent"],
["huoltaja", "guardian"],
["sisaren- tai veljenpoika", "nephew"],
["sisaren- tai veljentytär", "niece"],
["sukulaiset", "relatives"],
["pikkuserkku", "second cousin"],
["sisarus", "sibling"],
["setä, eno", "uncle"],
["lanko", "brother-in-law"],
["miniä", "daughter-in-law"],
["appi", "father-in-law"],
["puolison sukulaiset", "in-laws"],
["anoppi", "mother-in-law"],
["käly", "sister-in-law"],
["vävy", "son-in-law"],
["sulhanen", "(bride)groom"],
["poikamies", "bachelor"],
["poikamiestyttö", "bachelorette"],
["morsian", "bride"],
["entinen aviomies", "ex-husband"],
["entinen vaimo", "ex-wife"],
["kihlattu (mies)", "fiancé"],
["kihlattu (nainen)", "fiancée"],
["puoliso, kumppani", "partner"],
["kumppani", "significant other"],
["puoliso", "spouse"],
["sijaisvanhemmat", "foster parents"],
["orpo", "orphan"],
["isäpuoli", "stepfather"],
["äitipuoli", "stepmother"],
["sijaissynnyttäjä", "surrogate mother"],
["jälkeläinen", "descendant"],
["esi-isä", "forefather, ancestor"],
["jälkeläiset, jälkikasvu", "offspring"],
["uusperhe (puolisoilla voi olla yhteisten lasten lisäksi lapsia edellisistä parisuhteista)", "blended family, stepfamily"],
["suurperhe, suku", "extended family"],
["sijaisperhe", "foster family"],
["sateenkaariperhe", "LGBT family"],
["ydinperhe", "nuclear family"],
["samaa sukupuolta olevien parisuhde", "same-sex couple"],
["yhden vanhemman perhe", "single-parent family"],
["eronnut", "divorced"],
["kihloissa", "engaged"],
["naimisissa", "married"],
["erillään asuva, asumuserossa", "separated"],
["naimaton", "single"],
["leski (naispuolinen)", "widow"],
["leski (miespuolinen)", "widower"],
["adoptoida", "adopt"],
["erota", "be / get divorced from"],
["olla kihloissa / mennä kihloihin", "be / get engaged to"],
["olla naimisissa / mennä naimisiin", "be / get married to"],
["kasvattaa", "bring up, raise"],
["mennä naimisiin jonkun kanssa", "marry someone"],
["hoivata, kasvattaa", "nurture"],
["aloittaa / päättää suhde", "start / end a relationship with someone"],
["täysi-ikäinen", "adult, of age"],
["lasten laiminlyönti", "child neglect"],
["perhesuhteet", "family ties"],
["perhearvot", "family values"],
["alaikäinen", "minor"],
["kasvatus", "upbringing"]
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
    currentQuestion = 62;
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