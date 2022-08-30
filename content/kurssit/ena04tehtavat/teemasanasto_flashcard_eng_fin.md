---
title: "Teemasanasto: ENG-FIN"
date: 2022-8-30
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
	["billboard", "mainostaulu"], 
	["breaking news", "tuoreimmat uutiset"], 
	["censorship", "sensuuri, valvonta"], 
	["consumer", "kuluttaja"], 
	["fact-check", "tarkastaa faktat"], 
	["fake news", "valeuutinen"], 
	["mainstream media", "valtamedia"], 
	["mass media", "joukkotiedotusvälineet, massamedia"], 
	["media bias", "median puolueellisuus"], 
	["media literacy", "medialukutaito"], 
	["media outlet", "tiedotusväline"], 
	["multimedia", "multimedia (monia mediamuotoja yhdistelevä media)"], 
	["news bulletin", "uutiskatsaus"], 
	["newsworthy", "uutisarvoinen, uutiskynnyksen ylittävä"], 
	["target audience", "kohdeyleisö"], 
	["announcer", "kuuluttaja"], 
	["anchor", "uutisankkuri"], 
	["broadcast", "lähetys, lähettää ohjelmaa"], 
	["commentator", "kommentaattori, selostaja"], 
	["commercial", "mainos(-elokuva)"], 
	["(live) footage", "(live-)kuvamateriaali"], 
	["frequency", "taajuus"], 
	["newsreader", "uutistenlukija"], 
	["presenter", "juontaja"], 
	["prime time", "paras katselu-/kuunteluaika"], 
	["televise", "televisioida"], 
	["weather reporter", "säätoimittaja"], 
	["advertisement, advert, ad", "mainos, ilmoitus"], 
	["article", "artikkeli"], 
	["broadsheet", "täysikokoinen (laatu-)sanomalehti"], 
	["byline", "artikkelin kirjoittajan nimi / nimen paikka"], 
	["caption", "kuvateksti"], 
	["circulation", "levikki"], 
	["column", "kolumni, mielipidekirjoitus"], 
	["columnist", "kolumnisti"], 
	["comic strip", "sarjakuva"], 
	["copyright", "tekijänoikeus"], 
	["correspondent", "kirjeenvaihtaja"], 
	["coverage", "uutispeitto, uutisointi"], 
	["edition", "painos, (lehden) numero"], 
	["editor (-in-chief)", "päätoimittaja"], 
	["editorial", "pääkirjoitus"], 
	["feature", "erikoisartikkeli"], 
	["headline", "otsikko"], 
	["investigative journalism", "tutkiva journalismi"], 
	["issue", "lehden numero"], 
	["journalist", "toimittaja, journalisti"], 
	["layout", "taitto, asettelu, ulkoasu"], 
	["magazine", "aikakauslehti"], 
	["news agency", "uutistoimisto"], 
	["newspaper", "sanomalehti"], 
	["periodical", "aikakauslehti"], 
	["the press", "lehdistö"], 
	["print media", "painomedia"], 
	["publication", "julkaisu"], 
	["publisher", "kustantaja, kustantamo"], 
	["reporter", "toimittaja, reportteri"], 
	["scoop", "jymyuutinen, skuuppi"], 
	["subscribe to", "tilata (lehteä)"], 
	["subscription", "tilaus"], 
	["tabloid", "iltapäivälehti"], 
	["tabloid journalism, yellow journalism", "keltainen lehdistö, sensaatiolehdistö"], 
	["algorithm", "algoritmi"], 
	["application, app", "sovellus"], 
	["banner", "banneri, mainospalkki"], 
	["clickbait", "klikkiotsikko"], 
	["crowdsourcing", "joukkoistaminen, yleisön osallistaminen"], 
	["feed", "syöte, uutissyöte"], 
	["livestream", "suoratoisto"], 
	["meme", "meemi"], 
	["paywall", "maksumuuri"], 
	["podcast", "podcast, verkossa julkaistu äänitallenne"], 
	["post", "julkaista, julkaisu"], 
	["search engine", "hakukone"], 
	["streaming platform", "suoratoistoalusta"], 
	["tag", "tägi, merkintä, tunniste, tägätä, merkitä"], 
	["trending", "muodikas, suosittu"], 
	["troll", "trolli, ihminen, joka provosoi kommenteillaan netissä"], 
	["tweet", "tviitti; tviitata, julkaista tviitti"], 
	["viewer", "katsoja"], 
	["vlog (video blog)", "vlogi, videoblogi"], 
	["viral", "viraali, nopean internetsuosion saanut asia tai tapahtuma"], 
	[]
]
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