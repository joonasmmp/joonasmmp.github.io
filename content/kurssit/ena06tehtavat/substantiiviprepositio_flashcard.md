---
title: "Substantiivi + prepositio: Flashcard"
date: 2022-6-1
draft: false
type: page
weight: 62
layout: tehtava
---
{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/flashcard1.css"/>
<html>
 <body>
  <div id="cardArea"></div>
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

["access _____ = pääsy", "access to = pääsy"],
["affection _____ = kiintymys", "affection for = kiintymys"],
["addiction _____ = riippuvuus", "addiction to = riippuvuus"],
["admiration _____ = ihailu", "admiration for = ihailu"],
["anger _____ = viha, suuttumus", "anger at/with = viha, suuttumus"],
["answer _____ = vastaus", "answer to = vastaus"],
["anxiety _____ = ahdistus, huoli", "anxiety about = ahdistus, huoli"],
["arrangement _____ = järjestely, sopimus", "arrangement with = järjestely, sopimus"],
["arrival _____ = saapuminen (iso alue)", "arrival in = saapuminen (iso alue)"],
["arrival _____ = saapuminen (täsmällinen kohde)", "arrival at = saapuminen (täsmällinen kohde)"],
["attachment _____ = kiintymys, mieltymys", "attachment to/for = kiintymys, mieltymys"],
["attack _____ = hyökkäys", "attack on/against = hyökkäys"],
["attempt _____ = yritys", "attempt at = yritys"],
["attitude _____ = asenne", "attitude to/towards = asenne"],
["ban _____ = kielto", "ban on = kielto"],
["belief _____ = usko", "belief in = usko"],
["cause _____ = aihe", "cause for = aihe"],
["chance _____ = mahdollisuus", "chance of = mahdollisuus"],
["change _____ = muutos", "change in/of = muutos"],
["comment _____ = kommentti", "comment on = kommentti"],
["comparison _____ = vertailu", "comparison with/to = vertailu"],
["complaint _____ = valitus", "complaint about = valitus"],
["confidence _____ = usko, luottamus", "confidence in = usko, luottamus"],
["confusion _____ = sekaannus, epäselvyys", "confusion about = sekaannus, epäselvyys"],
["congratulation(s) _____ = onnittelu(t)", "congratulation(s) on = onnittelu(t)"],
["connection _____ = yhteys", "connection with/to = yhteys"],
["contribution _____ = tuki, myötävaikutus", "contribution to = tuki, myötävaikutus"],
["consideration _____ = huomaavaisuus", "consideration for = huomaavaisuus"],
["cure _____ = parannus, lääke", "cure for = parannus, lääke"],
["damage _____ = vahinko, vaurio", "damage to = vahinko, vaurio"],
["danger _____ = vaara", "danger to = vaara"],
["debate _____ = väittely", "debate about/on/over = väittely"],
["decrease _____ = vähentyminen", "decrease in = vähentyminen"],
["dedication _____ = omistautuminen", "dedication to = omistautuminen"],
["demand _____ = kysyntä, vaatimus", "demand for = kysyntä, vaatimus"],
["departure _____ = lähtö", "departure for = lähtö"],
["dependence _____ = riippuvuus", "dependence on = riippuvuus"],
["difference _____ = ero", "difference between = ero"],
["difficulty _____ = vaikeus tehdä jtak", "difficulty in = vaikeus tehdä jtak"],
["difficulty _____ = vaikeus jssak", "difficulty with = vaikeus jssak"],
["dislike _____ = vastenmielisyys", "dislike of/for/to = vastenmielisyys"],
["effect _____ = vaikutus", "effect on = vaikutus"],
["exception _____ = poikkeus", "exception to = poikkeus"],
["excuse _____ = (teko)syy", "excuse for = (teko)syy"],
["exhibition _____ = näyttely, esittely", "exhibition of = näyttely, esittely"],
["experience _____ = kokemus", "experience in/of = kokemus"],
["expert _____ = asiantuntija", "expert in/on = asiantuntija"],
["faith _____ = usko, luottamus", "faith in = usko, luottamus"],
["guarantee _____ = takuu", "guarantee of = takuu"],
["hatred _____ = viha", "hatred of = viha"],
["ignorance _____ = tietämättömyys", "ignorance of = tietämättömyys"],
["impact _____ = vaikutus", "impact on = vaikutus"],
["importance _____ = tärkeys", "importance of = tärkeys"],
["impression _____ = vaikutus", "impression on = vaikutus"],
["increase _____ = lisääntyminen", "increase in = lisääntyminen"],
["influence _____ = vaikutus", "influence on = vaikutus"],
["inquiry _____ = tutkimus, kysely", "inquiry into = tutkimus, kysely"],
["insight _____ = oivallus, ymmärrys", "insight into = oivallus, ymmärrys"],
["interference _____ = sekaantuminen, puuttuminen", "interference in = sekaantuminen, puuttuminen"],
["interest _____ = mielenkiinto", "interest in = mielenkiinto"],
["investigation _____ = tutkimus, selvitys", "investigation into = tutkimus, selvitys"],
["invitation _____ = kutsu", "invitation to = kutsu"],
["lack _____ = puute", "lack of = puute"],
["love _____ = rakkaus", "love for = rakkaus"],
["love _____ = kiinnostus", "love of = kiinnostus"],
["need _____ = tarve", "need for/of = tarve"],
["opinion _____ = mielipide", "opinion on/about/of = mielipide"],
["preparation _____ = valmistautuminen", "preparation for = valmistautuminen"],
["quest _____ = etsintä", "quest for = etsintä"],
["reason _____ = syy, perustelu", "reason for = syy, perustelu"],
["reference _____ = viittaus", "reference to = viittaus"],
["relationship _____ = suhde", "relationship with = suhde"],
["relevance _____ = merkityksellisyys", "relevance to = merkityksellisyys"],
["research _____ = tutkimus", "research into/on = tutkimus"],
["respect _____ = kunnioitus", "respect for = kunnioitus"],
["responsibility _____ = vastuu", "responsibility for = vastuu"],
["satisfaction _____ = tyytyväisyys", "satisfaction with = tyytyväisyys"],
["shortage _____ = puute", "shortage of = puute"],
["solution _____ = ratkaisu", "solution to = ratkaisu"],
["success _____ = menestys, onnistuminen", "success in = menestys, onnistuminen"],
["thanks _____ = kiitokset", "thanks for = kiitokset"],
["thanks _____ = jnk ansiosta", "thanks to = jnk ansiosta"],
["thirst _____ = jano, himo", "thirst for = jano, himo"],
["translation _____ = käännös", "translation into = käännös"],
["trust _____ = luottamus", "trust in = luottamus"],
["visit _____ = vierailu", "visit to = vierailu"],


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
    currentQuestion = 78;
    beginActivity();
    })
    $("#teema3").on("mousedown", function(){
    currentQuestion = 173;
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