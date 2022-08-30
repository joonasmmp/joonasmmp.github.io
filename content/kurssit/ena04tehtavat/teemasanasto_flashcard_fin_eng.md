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
<button id="teema1">Media</button>  <button id="teema2">Narratives & Books</button>   <button id="teema3">Films & TV</button>   <button id="teema4">Visual Arts</button>
</div>
  <div id="lukumaara"></div>
  <div id="buttonArea" class="grid grid-cols-3"></div>
 </body>
</html>

<script> 
$(document).ready(function() {

  var currentQuestion = 0;
  var qbank = [
	["mainostaulu", "billboard"], 
	["tuoreimmat uutiset", "breaking news"], 
	["sensuuri, valvonta", "censorship"], 
	["kuluttaja", "consumer"], 
	["tarkastaa faktat", "fact-check"], 
	["valeuutinen", "fake news"], 
	["valtamedia", "mainstream media"], 
	["joukkotiedotusvälineet, massamedia", "mass media"], 
	["median puolueellisuus", "media bias"], 
	["medialukutaito", "media literacy"], 
	["tiedotusväline", "media outlet"], 
	["multimedia (monia mediamuotoja yhdistelevä media)", "multimedia"], 
	["uutiskatsaus", "news bulletin"], 
	["uutisarvoinen, uutiskynnyksen ylittävä", "newsworthy"], 
	["kohdeyleisö", "target audience"], 
	[], 
	["kuuluttaja", "announcer"], 
	["uutisankkuri", "anchor"], 
	["lähetys, lähettää ohjelmaa", "broadcast"], 
	["kanava", "channel"], 
	["kommentaattori, selostaja", "commentator"], 
	["mainos(-elokuva)", "commercial"], 
	["(live-)kuvamateriaali", "(live) footage"], 
	["taajuus", "frequency"], 
	["uutistenlukija", "newsreader"], 
	["juontaja", "presenter"], 
	["paras katselu-/kuunteluaika", "prime time"], 
	["televisioida", "televise"], 
	["säätoimittaja", "weather reporter"], 
	[], 
	["mainos, ilmoitus", "advertisement, advert, ad"], 
	["artikkeli", "article"], 
	["täysikokoinen (laatu-)sanomalehti", "broadsheet"], 
	["artikkelin kirjoittajan nimi / nimen paikka", "byline"], 
	["kuvateksti", "caption"], 
	["levikki", "circulation"], 
	["kolumni, mielipidekirjoitus", "column"], 
	["kolumnisti", "columnist"], 
	["sarjakuva", "comic strip"], 
	["tekijänoikeus", "copyright"], 
	["kirjeenvaihtaja", "correspondent"], 
	["uutispeitto, uutisointi", "coverage"], 
	["painos, (lehden) numero", "edition"], 
	["päätoimittaja", "editor (-in-chief)"], 
	["pääkirjoitus", "editorial"], 
	["erikoisartikkeli", "feature"], 
	["otsikko", "headline"], 
	["tutkiva journalismi", "investigative journalism"], 
	["lehden numero", "issue"], 
	["toimittaja, journalisti", "journalist"], 
	["taitto, asettelu, ulkoasu", "layout"], 
	["aikakauslehti", "magazine"], 
	["uutistoimisto", "news agency"], 
	["sanomalehti", "newspaper"], 
	["aikakauslehti", "periodical"], 
	["lehdistö", "the press"], 
	["painomedia", "print media"], 
	["julkaisu", "publication"], 
	["kustantaja, kustantamo", "publisher"], 
	["toimittaja, reportteri", "reporter"], 
	["jymyuutinen, skuuppi", "scoop"], 
	["tilata (lehteä)", "subscribe to"], 
	["tilaus", "subscription"], 
	["iltapäivälehti", "tabloid"], 
	["keltainen lehdistö, sensaatiolehdistö", "tabloid journalism, yellow journalism"], 
	[], 
	["algoritmi", "algorithm"], 
	["sovellus", "application, app"], 
	["banneri, mainospalkki", "banner"], 
	["klikkiotsikko", "clickbait"], 
	["joukkoistaminen, yleisön osallistaminen", "crowdsourcing"], 
	["syöte, uutissyöte", "feed"], 
	["suoratoisto", "livestream"], 
	["meemi", "meme"], 
	["maksumuuri", "paywall"], 
	["podcast, verkossa julkaistu äänitallenne", "podcast"], 
	["julkaista, julkaisu", "post"], 
	["hakukone", "search engine"], 
	["suoratoistoalusta", "streaming platform"], 
	["tägi, merkintä, tunniste, tägätä, merkitä", "tag"], 
	["muodikas, suosittu", "trending"], 
	["trolli, ihminen, joka provosoi kommenteillaan netissä", "troll"], 
	["tviitti; tviitata, julkaista tviitti", "tweet"], 
	["katsoja", "viewer"], 
	["vlogi, videoblogi", "vlog (video blog)"], 
	["viraali, nopean internetsuosion saanut asia tai tapahtuma", "viral"], 
  ];

beginActivity();
  edellinen();
  random();
  seuraava();
  kortinVaihto();

  	$("#teema1").on("click", function(){
    currentQuestion = 0;
    beginActivity();
    })
    $("#teema2").on("click", function(){
    currentQuestion = 46;
    beginActivity();
    })
    $("#teema3").on("click", function(){
    currentQuestion = 114;
    beginActivity();
    })
    $("#teema4").on("click", function(){
    currentQuestion = 223;
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