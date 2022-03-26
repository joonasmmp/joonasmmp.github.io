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
<button id="teema1">Teema 1</button>  <button id="teema2">Teema 2</button>   <button id="teema3">Teema 3</button>   <button id="teema4">Teema 4</button>
</div>
  <div id="lukumaara"></div>
  <div id="buttonArea" class="grid grid-cols-2"></div>
 </body>
</html>

<script> 
$(document).ready(function() {

  var currentQuestion = 0;
  var qbank = [
    ["acoustic", "akustinen, ilman sähköisiä vahvistimia soitettu"], 
	["arrange", "sovittaa"], 
	["brass band", "(vaski)puhallinorkesteri"], 
	["choir", "kuoro"], 
	["chord", "sointu"], 
	["chorus, refrain", "kertosäe"], 
	["compose", "säveltää"], 
	["concert", "konsertti"], 
	["conduct", "johtaa orkesteria"], 
	["encore", "ylimääräinen numero itse esityksen jälkeen"], 
	["gig", "keikka"], 
	["headphones", "kuulokkeet"], 
	["hymn", "hymni, virsi"], 
	["instrument", "soitin, instrumentti"], 
	["key", "sävellaji"], 
	["keyboard", "kosketinsoitin, koskettimet"], 
	["lyrics", "sanoitukset, lyriikat"], 
	["major", "duuri"], 
	["medley", "potpuri, sikermä"], 
	["minor", "molli"], 
	["musician", "muusikko"], 
	["national anthem", "kansallislaulu"], 
	["note", "nuotti, sävel"], 
	["orchestra", "orkesteri"], 
	["percussion", "lyömäsoittimet"], 
	["record", "(ääni)levy, äänittää, levyttää"], 
	["record label", "levy-yhtiö"], 
	["riff", "riffi, lyhyt toistuva sävelkulku"], 
	["sheet music, score", "nuotit, partituuri"], 
	["speakers", "kaiuttimet"], 
	["stream", "kuunnella suoratoistona"], 
	["strings", "jousisoittimet"], 
	["track", "(ääni)raita, kappale"], 
	["verse", "säkeistö"], 
	["vocals", "laulu(osuudet)"], 
	["audition", "koe-esiintyä, koe-esiintyminen"], 
	["bar, measure", "tahti"], 
	["beat", "isku"], 
	["contemporary", "nykymusiikki, -tanssi"], 
	["folk", "kansanmusiikki, -tanssi"], 
	["genre", "tyylilaji, genre"], 
	["improvise", "improvisoida"], 
	["interpret", "tulkita"], 
	["perform", "esiintyä"], 
	["rhythm", "rytmi"], 
	["tempo", "tempo, nopeus"], 
	["author, writer", "kirjailija"], 
	["autobiography", "omaelämäkerta"], 
	["biography", "elämäkerta"], 
	["blurb", "takakannen teksti"], 
	["chapter", "luku"], 
	["character", "henkilöhahmo"], 
	["chick lit", "humoristinen naiskirjallisuus"], 
	["cliffhanger", "jäädä jännittävään kohtaan"], 
	["cover", "kansi"], 
	["crime novel", "rikosromaani"], 
	["critic, reviewer", "arvostelija"], 
	["edition", "painos"], 
	["epic", "eepos, eeppinen"], 
	["extract", "ote"], 
	["fable", "faabeli, opettava eläinsatu"], 
	["fairy tale", "satu"], 
	["genre", "kirjallisuuden laji"], 
	["ghost writer", "haamukirjoittaja"], 
	["horror story", "kauhutarina"], 
	["illustration", "kuvitus"], 
	["library", "kirjasto"], 
	["literary", "kirjallinen, kirjallisuus-"], 
	["memoir, memoirs", "muistelmat"], 
	["minor character", "sivuhenkilö"], 
	["narrator", "kertoja"], 
	["novelist", "romaanikirjailija"], 
	["novella", "pienoisromaani"], 
	["nursery rhyme", "lastenloru"], 
	["paragraph", "kappale"], 
	["plot", "juoni"], 
	["protagonist, main character", "päähenkilö"], 
	["pseudonym, pen-name", "salanimi"], 
	["publish", "julkaista, kustantaa"], 
	["publisher", "kustantaja"], 
	["review", "arvostelu"], 
	["romantic fiction", "rakkausromaani"], 
	["science fiction, sci-fi", "tieteiskirjallisuus"], 
	["second-hand bookshop", "kirja-antikvariaatti"], 
	["setting", "tapahtumapaikka"], 
	["short story", "novelli"], 
	["subplot", "sivujuoni"], 
	["theme", "teema, aihe"], 
	["thriller", "jännitysromaani"], 
	["title", "kirjan nimi"], 
	["twist", "juonenkäänne"], 
	["whodunit, detective story", "salapoliisitarina"], 
	["audiobook", "äänikirja"], 
	["bestseller", "myyntimenestys"], 
	["fiction", "kaunokirjallisuus, fiktio"], 
	["graphic novel", "sarjakuvakirja, sarjakuvaromaani"], 
	["hardback", "kovakantinen kirja"], 
	["must-read", "kirja, joka täytyy lukea"], 
	["narrative", "kerronta, kertoma-"], 
	["non-fiction", "tietokirjallisuus"], 
	["novel", "romaani"], 
	["page-turner", "kirja, jota ei voi jättää kesken"], 
	["paperback", "pokkari"], 
	["prose", "proosa"], 
	["self-published", "omakustanne"], 
	["story", "kertomus, tarina"], 
	["euphemism", "kiertoilmaisu"], 
	["line", "säe"], 
	["metaphor", "kielikuva"], 
	["poem", "runo"], 
	["poet", "runoilija"], 
	["rhyme", "loppusointu"], 
	["verse, stanza", "säkeistö"], 
	["act", "näytös; näytellä"], 
	["actor, actress", "näyttelijä"], 
	["audition", "koe-esiintyminen"], 
	["comedy", "komedia"], 
	["costumes", "puvustus"], 
	["curtain", "esirippu"], 
	["drama", "draama, näytelmäkirjallisuus"], 
	["dress rehearsal", "kenraaliharjoitus"], 
	["green room", "lämpiö"], 
	["interval", "väliaika"], 
	["lines", "repliikki, vuorosanat"], 
	["monologue", "monologi, yksinpuhelu"], 
	["play", "näytelmä"], 
	["playwright, dramatist", "näytelmäkirjailija"], 
	["rehearse", "harjoitella"], 
	["scene", "kohtaus"], 
	["set", "lavastus"], 
	["stage", "lava, näyttämö"], 
	["tragedy", "murhenäytelmä"], 
	["actor, actress", "näyttelijä"], 
	["adaptation", "sovitus, versiointi, adaptaatio"], 
	["audition", "koe-esiintyminen"], 
	["animation", "piirrosfilmi, animaatio"], 
	["blockbuster", "menestyselokuva"], 
	["box office", "lippukassa, -myymälä, -luukku"], 
	["cast", "roolittaa, näyttelijäryhmä, -kaarti"], 
	["cinema", "elokuvateatteri, -teollisuus, -taide"], 
	["cinematography", "elokuvan kuvaaminen"], 
	["cliffhanger", "loppuhuipennus, koukuttava (avoin) loppuratkaisu"], 
	["climax", "huipentuma, käännekohta"], 
	["costumer, costume designer", "puvustaja"], 
	["costume", "esiintymisasu, puvustaa"], 
	["credits", "tekijäluettelo"], 
	["dialogue", "vuoropuhelu"], 
	["director", "ohjaaja"], 
	["documentary", "dokumenttielokuva"], 
	["dub", "jälkiäänittää, dubata"], 
	["editor", "leikkaaja, editoija"], 
	["extra", "avustaja"], 
	["feature film", "kokoillan elokuva"], 
	["film franchise", "elokuvasarja"], 
	["flashback", "takauma"], 
	["flick", "leffa, elokuva"], 
	["hero, heroine", "sankari"], 
	["lead role", "päärooli"], 
	["lighting", "valaistus"], 
	["location", "kuvauspaikka"], 
	["moviegoer, cinemagoer", "elokuvissa kävijä"], 
	["movie theatre", "elokuvateatteri"], 
	["premiere", "ensi-ilta"], 
	["producer", "tuottaja"], 
	["props", "rekvisiitta"], 
	["release", "julkaista"], 
	["romcom, romantic comedy", "romanttinen komedia"], 
	["scene", "kohtaus, tapahtumapaikka, kulissi"], 
	["script, screenplay", "(elokuva)käsikirjoitus"], 
	["screenwriter", "elokuvakäsikirjoittaja"], 
	["sequel", "jatko-osa"], 
	["set", "kulissit"], 
	["setting", "tapahtumapaikka, miljöö"], 
	["silver screen", "valkokangas"], 
	["sound effect", "äänitehoste"], 
	["soundtrack", "elokuvan musiikki"], 
	["special effect", "erikoistehoste"], 
	["stunt (man/woman/double)", "sijaisnäyttelijä"], 
	["subtitle", "tekstitys"], 
	["supporting role", "sivurooli"], 
	["trailer", "ennakkomainos"], 
	["villain", "roisto"], 
	["visual effects", "visuaaliset tehosteet"], 
	["voice actor", "ääninäyttelijä"], 
	["voice-over", "taustaselostus"], 
	["binge-watch", "katsoa ”ahmien”, katsoa putkeen"], 
	["fast forward", "(pika-)kelata eteenpäin"], 
	["live streaming", "lähettää esitys suorana netin välityksellä, livestriimata"], 
	["OTT, over the top", "internetin yli välitettävä"], 
	["original series", "alkuperäissarja"], 
	["pause", "pysäyttää kuva"], 
	["pay-TV", "maksutelevisio"], 
	["replay", "toistaa uudelleen"], 
	["rewind", "kelata taaksepäin"], 
	["streaming service", "suoratoisto-, ohjelmakirjastopalvelu"], 
	["subscription", "tilaus"], 
	["VoD, video on demand", "tilausvideo"], 
	["blooper", "pieleen mennyt otos, kömmähdys"], 
	["broadcast", "lähetys, lähettää"], 
	["cartoon", "piirrossarja, -elokuva"], 
	["channel", "kanava"], 
	["commercial", "mainos"], 
	["episode", "jakso"], 
	["footage", "kuvamateriaali"], 
	["game show", "visailuohjelma"], 
	["host", "juontaja, juontaa, emäntä, isäntä"], 
	["late night show", "myöhäisillan ohjelma"], 
	["linear TV", "perinteinen televisio, jossa ohjelmat katsotaan silloin, kun kanava ne lähettää"], 
	["newscast", "uutislähetys"], 
	["prime time", "paras katseluaika"], 
	["ratings", "katsojaluvut"], 
	["reality TV", "tosi-TV"], 
	["recording", "tallenne"], 
	["rerun", "uusinta"], 
	["season", "kausi"], 
	["season finale", "kauden päätösjakso"], 
	["series", "sarja, kausi"], 
	["sitcom, situation comedy", "tilannekomedia"], 
	["soap opera", "saippuaooppera"], 
	["spin off", "oheistuote, -sarja"], 
	["talent show", "kykykilpailu"], 
	["talk show", "keskusteluohjelma"], 
	["viewer", "katsoja"], 
	["aesthetic, esthetic", "esteettinen"], 
	["architecture", "arkkitehtuuri"], 
	["art gallery", "taidegalleria"], 
	["artwork, work of art", "taideteos"], 
	["brush", "sivellin"], 
	["brushstroke", "siveltimenveto"], 
	["canvas", "kangas"], 
	["cartoon", "sarjakuva"], 
	["carve", "kaivertaa, veistää"], 
	["ceramics", "keramiikka"], 
	["charcoal", "hiili"], 
	["chisel", "taltta"], 
	["clay", "savi"], 
	["collection", "kokoelma"], 
	["composition", "sommitelma"], 
	["contemporary art", "nykytaide"], 
	["contrast", "kontrasti"], 
	["crayon", "värikynä"], 
	["depict", "kuvata"], 
	["design", "suunnittelu; muotoilla, suunnitella; muotoilu, malli"], 
	["drawing", "piirros, piirustus"], 
	["easel", "maalausteline"], 
	["etching", "etsaus (syövyttämällä tehtävä taidegrafiikka)"], 
	["exhibit", "esittää, asettaa näytteille, näyttelyesine"], 
	["exhibition", "näyttely"], 
	["frame", "kehys"], 
	["fake, forgery", "väärennös"], 
	["graffiti", "graffiti"], 
	["graphics", "grafiikka"], 
	["graphics tablet", "piirtopöytä"], 
	["hue", "sävy"], 
	["illustration", "kuvitus"], 
	["installation", "installaatio"], 
	["landscape", "maisemamaalaus"], 
	["marble", "marmori"], 
	["marker", "tussikynä"], 
	["masterpiece", "mestariteos"], 
	["modern art", "moderni taide"], 
	["mosaic", "mosaiikki"], 
	["motif", "aihe"], 
	["mural", "seinämaalaus"], 
	["oil colour", "öljyväri"], 
	["oil painting", "öljyvärimaalaus"], 
	["painting", "maalaus"], 
	["painter", "taidemaalari"], 
	["perspective", "perspektiivi"], 
	["print", "painokuva"], 
	["portray", "esittää"], 
	["portrait", "muotokuva"], 
	["poster", "juliste"], 
	["pottery", "keramiikka, savenvalanta"], 
	["primary colours", "päävärit"], 
	["proportion", "mittasuhde"], 
	["sculpt", "veistää, muotoilla"], 
	["sculptor", "kuvanveistäjä"], 
	["sculpture", "kuvanveisto, veistos"], 
	["solvent", "liuotin"], 
	["self-portrait", "omakuva"], 
	["shade", "varjo"], 
	["sketch", "luonnostella, luonnos"], 
	["stained glass", "lasimaalaus"], 
	["statue", "patsas"], 
	["still life", "asetelma"], 
	["three-dimensional", "kolmiulotteinen"], 
	["tint", "värisävy"], 
	["translucent", "läpikuultava"], 
	["transparent", "läpinäkyvä"], 
	["watercolour", "akvarelli, vesivärimaalaus"], 
	["angle", "kuvakulma"], 
	["close-up", "lähikuva"], 
	["crop", "rajata (kuvaa)"], 
	["enlarge", "suurentaa"], 
	["exposure", "valotus"], 
	["flash", "salamavalo"], 
	["focus", "tarkentaa"], 
	["lens", "linssi"], 
	["panorama", "panoraama"], 
	["photography", "valokuvaus"], 
	["photographer", "valokuvaaja"], 
	["photoshop", "käsitellä kuvaa kuvankäsittelyohjelmalla"], 
	["pose", "poseerata"], 
	["shoot, shot, shot", "kuvata"], 
	["shot", "kuva, otto, otos"], 
	["shutter", "suljin"], 
	["tripod", "kolmijalka"], 
	["zoom", "zoomata"], 
  ];

  beginActivity();

  function beginActivity() {
    $("#cardArea").empty();
    $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
    $("#card1").css("background-color", "#1F2937");
    $("#lukumaara").empty();
    var korttia = document.createElement('div')
    	korttia.innerHTML = currentQuestion + 1 + " / " + qbank.length;
    	document.getElementById('lukumaara').appendChild(korttia);
   }   
      
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

    $("#buttonArea").empty();
    $("#buttonArea").append('<div id="prevButton">Edellinen</div>');
    $("#prevButton").on("click", function() {
      if (currentQuestion > 0) {
        currentQuestion--;
        beginActivity();
      }
    })
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
    $("#buttonArea").append('<div id="nextButton">Seuraava</div>');
    $("#nextButton").on("click", function() {
      if (currentQuestion < qbank.length - 1) {
        currentQuestion++;
        beginActivity();
      }
    }); //click function
  } //beginactivity
);
</script>

{{< /rawhtml >}}
