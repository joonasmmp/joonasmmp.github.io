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
<button id="teema1">Music & Dance</button>  <button id="teema2">Narratives & Books</button>   <button id="teema3">Films & TV</button>   <button id="teema4">Visual Arts</button>
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
["akustinen, ilman sähköisiä vahvistimia soitettu", "acoustic"], 
	["sovittaa", "arrange"], 
	["(vaski)puhallinorkesteri", "brass band"], 
	["kuoro", "choir"], 
	["sointu", "chord"], 
	["kertosäe", "chorus, refrain"], 
	["säveltää", "compose"], 
	["konsertti", "concert"], 
	["johtaa orkesteria", "conduct"], 
	["ylimääräinen numero itse esityksen jälkeen", "encore"], 
	["keikka", "gig"], 
	["kuulokkeet", "headphones"], 
	["hymni, virsi", "hymn"], 
	["soitin, instrumentti", "instrument"], 
	["sävellaji", "key"], 
	["kosketinsoitin, koskettimet", "keyboard"], 
	["sanoitukset, lyriikat", "lyrics"], 
	["duuri", "major"], 
	["potpuri, sikermä", "medley"], 
	["molli", "minor"], 
	["muusikko", "musician"], 
	["kansallislaulu", "national anthem"], 
	["nuotti, sävel", "note"], 
	["orkesteri", "orchestra"], 
	["lyömäsoittimet", "percussion"], 
	["(ääni)levy, äänittää, levyttää", "record"], 
	["levy-yhtiö", "record label"], 
	["riffi, lyhyt toistuva sävelkulku", "riff"], 
	["nuotit, partituuri", "sheet music, score"], 
	["kaiuttimet", "speakers"], 
	["kuunnella suoratoistona", "stream"], 
	["jousisoittimet", "strings"], 
	["(ääni)raita, kappale", "track"], 
	["säkeistö", "verse"], 
	["laulu(osuudet)", "vocals"], 
	["koe-esiintyä, koe-esiintyminen", "audition"], 
	["tahti", "bar, measure"], 
	["isku", "beat"], 
	["nykymusiikki, -tanssi", "contemporary"], 
	["kansanmusiikki, -tanssi", "folk"], 
	["tyylilaji, genre", "genre"], 
	["improvisoida", "improvise"], 
	["tulkita", "interpret"], 
	["esiintyä", "perform"], 
	["rytmi", "rhythm"], 
	["tempo, nopeus", "tempo"], 
	["kirjailija", "author, writer"], 
	["omaelämäkerta", "autobiography"], 
	["elämäkerta", "biography"], 
	["takakannen teksti", "blurb"], 
	["luku", "chapter"], 
	["henkilöhahmo", "character"], 
	["humoristinen naiskirjallisuus", "chick lit"], 
	["jäädä jännittävään kohtaan", "cliffhanger"], 
	["kansi", "cover"], 
	["rikosromaani", "crime novel"], 
	["arvostelija", "critic, reviewer"], 
	["painos", "edition"], 
	["eepos, eeppinen", "epic"], 
	["ote", "extract"], 
	["faabeli, opettava eläinsatu", "fable"], 
	["satu", "fairy tale"], 
	["kirjallisuuden laji", "genre"], 
	["haamukirjoittaja", "ghost writer"], 
	["kauhutarina", "horror story"], 
	["kuvitus", "illustration"], 
	["kirjasto", "library"], 
	["kirjallinen, kirjallisuus-", "literary"], 
	["muistelmat", "memoir, memoirs"], 
	["sivuhenkilö", "minor character"], 
	["kertoja", "narrator"], 
	["romaanikirjailija", "novelist"], 
	["pienoisromaani", "novella"], 
	["lastenloru", "nursery rhyme"], 
	["kappale", "paragraph"], 
	["juoni", "plot"], 
	["päähenkilö", "protagonist, main character"], 
	["salanimi", "pseudonym, pen-name"], 
	["julkaista, kustantaa", "publish"], 
	["kustantaja", "publisher"], 
	["arvostelu", "review"], 
	["rakkausromaani", "romantic fiction"], 
	["tieteiskirjallisuus", "science fiction, sci-fi"], 
	["kirja-antikvariaatti", "second-hand bookshop"], 
	["tapahtumapaikka", "setting"], 
	["novelli", "short story"], 
	["sivujuoni", "subplot"], 
	["teema, aihe", "theme"], 
	["jännitysromaani", "thriller"], 
	["kirjan nimi", "title"], 
	["juonenkäänne", "twist"], 
	["salapoliisitarina", "whodunit, detective story"], 
	["äänikirja", "audiobook"], 
	["myyntimenestys", "bestseller"], 
	["kaunokirjallisuus, fiktio", "fiction"], 
	["sarjakuvakirja, sarjakuvaromaani", "graphic novel"], 
	["kovakantinen kirja", "hardback"], 
	["kirja, joka täytyy lukea", "must-read"], 
	["kerronta, kertoma-", "narrative"], 
	["tietokirjallisuus", "non-fiction"], 
	["romaani", "novel"], 
	["kirja, jota ei voi jättää kesken", "page-turner"], 
	["pokkari", "paperback"], 
	["proosa", "prose"], 
	["omakustanne", "self-published"], 
	["kertomus, tarina", "story"], 
	["kiertoilmaisu", "euphemism"], 
	["säe", "line"], 
	["kielikuva", "metaphor"], 
	["runo", "poem"], 
	["runoilija", "poet"], 
	["loppusointu", "rhyme"], 
	["säkeistö", "verse, stanza"], 
	["näytös; näytellä", "act"], 
	["näyttelijä", "actor, actress"], 
	["koe-esiintyminen", "audition"], 
	["komedia", "comedy"], 
	["puvustus", "costumes"], 
	["esirippu", "curtain"], 
	["draama, näytelmäkirjallisuus", "drama"], 
	["kenraaliharjoitus", "dress rehearsal"], 
	["lämpiö", "green room"], 
	["väliaika", "interval"], 
	["repliikki, vuorosanat", "lines"], 
	["monologi, yksinpuhelu", "monologue"], 
	["näytelmä", "play"], 
	["näytelmäkirjailija", "playwright, dramatist"], 
	["harjoitella", "rehearse"], 
	["kohtaus", "scene"], 
	["lavastus", "set"], 
	["lava, näyttämö", "stage"], 
	["murhenäytelmä", "tragedy"], 
	["näyttelijä", "actor, actress"], 
	["sovitus, versiointi, adaptaatio", "adaptation"], 
	["koe-esiintyminen", "audition"], 
	["piirrosfilmi, animaatio", "animation"], 
	["menestyselokuva", "blockbuster"], 
	["lippukassa, -myymälä, -luukku", "box office"], 
	["roolittaa, näyttelijäryhmä, -kaarti", "cast"], 
	["elokuvateatteri, -teollisuus, -taide", "cinema"], 
	["elokuvan kuvaaminen", "cinematography"], 
	["loppuhuipennus, koukuttava (avoin) loppuratkaisu", "cliffhanger"], 
	["huipentuma, käännekohta", "climax"], 
	["puvustaja", "costumer, costume designer"], 
	["esiintymisasu, puvustaa", "costume"], 
	["tekijäluettelo", "credits"], 
	["vuoropuhelu", "dialogue"], 
	["ohjaaja", "director"], 
	["dokumenttielokuva", "documentary"], 
	["jälkiäänittää, dubata", "dub"], 
	["leikkaaja, editoija", "editor"], 
	["avustaja", "extra"], 
	["kokoillan elokuva", "feature film"], 
	["elokuvasarja", "film franchise"], 
	["takauma", "flashback"], 
	["leffa, elokuva", "flick"], 
	["sankari", "hero, heroine"], 
	["päärooli", "lead role"], 
	["valaistus", "lighting"], 
	["kuvauspaikka", "location"], 
	["elokuvissa kävijä", "moviegoer, cinemagoer"], 
	["elokuvateatteri", "movie theatre"], 
	["ensi-ilta", "premiere"], 
	["tuottaja", "producer"], 
	["rekvisiitta", "props"], 
	["julkaista", "release"], 
	["romanttinen komedia", "romcom, romantic comedy"], 
	["kohtaus, tapahtumapaikka, kulissi", "scene"], 
	["(elokuva)käsikirjoitus", "script, screenplay"], 
	["elokuvakäsikirjoittaja", "screenwriter"], 
	["jatko-osa", "sequel"], 
	["kulissit", "set"], 
	["tapahtumapaikka, miljöö", "setting"], 
	["valkokangas", "silver screen"], 
	["äänitehoste", "sound effect"], 
	["elokuvan musiikki", "soundtrack"], 
	["erikoistehoste", "special effect"], 
	["sijaisnäyttelijä", "stunt (man/woman/double)"], 
	["tekstitys", "subtitle"], 
	["sivurooli", "supporting role"], 
	["ennakkomainos", "trailer"], 
	["roisto", "villain"], 
	["visuaaliset tehosteet", "visual effects"], 
	["ääninäyttelijä", "voice actor"], 
	["taustaselostus", "voice-over"], 
	["katsoa ”ahmien”, katsoa putkeen", "binge-watch"], 
	["(pika-)kelata eteenpäin", "fast forward"], 
	["lähettää esitys suorana netin välityksellä, livestriimata", "live streaming"], 
	["internetin yli välitettävä", "OTT, over the top"], 
	["alkuperäissarja", "original series"], 
	["pysäyttää kuva", "pause"], 
	["maksutelevisio", "pay-TV"], 
	["toistaa uudelleen", "replay"], 
	["kelata taaksepäin", "rewind"], 
	["suoratoisto-, ohjelmakirjastopalvelu", "streaming service"], 
	["tilaus", "subscription"], 
	["tilausvideo", "VoD, video on demand"], 
	["pieleen mennyt otos, kömmähdys", "blooper"], 
	["lähetys, lähettää", "broadcast"], 
	["piirrossarja, -elokuva", "cartoon"], 
	["kanava", "channel"], 
	["mainos", "commercial"], 
	["jakso", "episode"], 
	["kuvamateriaali", "footage"], 
	["visailuohjelma", "game show"], 
	["juontaja, juontaa, emäntä, isäntä", "host"], 
	["myöhäisillan ohjelma", "late night show"], 
	["perinteinen televisio, jossa ohjelmat katsotaan silloin, kun kanava ne lähettää", "linear TV"], 
	["uutislähetys", "newscast"], 
	["paras katseluaika", "prime time"], 
	["katsojaluvut", "ratings"], 
	["tosi-TV", "reality TV"], 
	["tallenne", "recording"], 
	["uusinta", "rerun"], 
	["kausi", "season"], 
	["kauden päätösjakso", "season finale"], 
	["sarja, kausi", "series"], 
	["tilannekomedia", "sitcom, situation comedy"], 
	["saippuaooppera", "soap opera"], 
	["oheistuote, -sarja", "spin off"], 
	["kykykilpailu", "talent show"], 
	["keskusteluohjelma", "talk show"], 
	["katsoja", "viewer"], 
	["esteettinen", "aesthetic, esthetic"], 
	["arkkitehtuuri", "architecture"], 
	["taidegalleria", "art gallery"], 
	["taideteos", "artwork, work of art"], 
	["sivellin", "brush"], 
	["siveltimenveto", "brushstroke"], 
	["kangas", "canvas"], 
	["sarjakuva", "cartoon"], 
	["kaivertaa, veistää", "carve"], 
	["keramiikka", "ceramics"], 
	["hiili", "charcoal"], 
	["taltta", "chisel"], 
	["savi", "clay"], 
	["kokoelma", "collection"], 
	["sommitelma", "composition"], 
	["nykytaide", "contemporary art"], 
	["kontrasti", "contrast"], 
	["värikynä", "crayon"], 
	["kuvata", "depict"], 
	["suunnittelu; muotoilla, suunnitella; muotoilu, malli", "design"], 
	["piirros, piirustus", "drawing"], 
	["maalausteline", "easel"], 
	["etsaus (syövyttämällä tehtävä taidegrafiikka)", "etching"], 
	["esittää, asettaa näytteille, näyttelyesine", "exhibit"], 
	["näyttely", "exhibition"], 
	["kehys", "frame"], 
	["väärennös", "fake, forgery"], 
	["graffiti", "graffiti"], 
	["grafiikka", "graphics"], 
	["piirtopöytä", "graphics tablet"], 
	["sävy", "hue"], 
	["kuvitus", "illustration"], 
	["installaatio", "installation"], 
	["maisemamaalaus", "landscape"], 
	["marmori", "marble"], 
	["tussikynä", "marker"], 
	["mestariteos", "masterpiece"], 
	["moderni taide", "modern art"], 
	["mosaiikki", "mosaic"], 
	["aihe", "motif"], 
	["seinämaalaus", "mural"], 
	["öljyväri", "oil colour"], 
	["öljyvärimaalaus", "oil painting"], 
	["maalaus", "painting"], 
	["taidemaalari", "painter"], 
	["perspektiivi", "perspective"], 
	["painokuva", "print"], 
	["esittää", "portray"], 
	["muotokuva", "portrait"], 
	["juliste", "poster"], 
	["keramiikka, savenvalanta", "pottery"], 
	["päävärit", "primary colours"], 
	["mittasuhde", "proportion"], 
	["veistää, muotoilla", "sculpt"], 
	["kuvanveistäjä", "sculptor"], 
	["kuvanveisto, veistos", "sculpture"], 
	["liuotin", "solvent"], 
	["omakuva", "self-portrait"], 
	["varjo", "shade"], 
	["luonnostella, luonnos", "sketch"], 
	["lasimaalaus", "stained glass"], 
	["patsas", "statue"], 
	["asetelma", "still life"], 
	["kolmiulotteinen", "three-dimensional"], 
	["värisävy", "tint"], 
	["läpikuultava", "translucent"], 
	["läpinäkyvä", "transparent"], 
	["akvarelli, vesivärimaalaus", "watercolour"], 
	["kuvakulma", "angle"], 
	["lähikuva", "close-up"], 
	["rajata (kuvaa)", "crop"], 
	["suurentaa", "enlarge"], 
	["valotus", "exposure"], 
	["salamavalo", "flash"], 
	["tarkentaa", "focus"], 
	["linssi", "lens"], 
	["panoraama", "panorama"], 
	["valokuvaus", "photography"], 
	["valokuvaaja", "photographer"], 
	["käsitellä kuvaa kuvankäsittelyohjelmalla", "photoshop"], 
	["poseerata", "pose"], 
	["kuvata", "shoot, shot, shot"], 
	["kuva, otto, otos", "shot"], 
	["suljin", "shutter"], 
	["kolmijalka", "tripod"], 
	["zoomata", "zoom"], 
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
    currentQuestion = 46;
    beginActivity();
    })
    $("#teema3").on("mousedown", function(){
    currentQuestion = 114;
    beginActivity();
    })
    $("#teema4").on("mousedown", function(){
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