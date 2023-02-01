---
title: "Teemasanasto: FIN-ENG"
date: 2022-6-1
draft: false
type: page
weight: 63
layout: tehtava
---
{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/flashcard1.css"/>
<html>
 <body>
  <div id="cardArea"></div>
  <div id=valikko>
<button id="teema1">War & Peace</button>  <button id="teema2">Science & Research</button>   <button id="teema3">Traffic</button>   <button id="teema4">IT & Comm technology</button>
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
  var qbank = 
  [
	["liittolainen", "ally"], 
	["väijytys; väijyä", "ambush"], 
	["ammukset, ampumatarvikkeet", "ammunition"], 
	["aseellinen konflikti", "armed conflict"], 
	["asevarasto, asevarikko", "armoury"], 
	["tykistö", "artillery"], 
	["kasarmi, parakki", "barracks"], 
	["olla sodassa", "be at war"], 
	["voittaa vihollinen", "beat/defeat the enemy"], 
	["raja", "border"], 
	["tappiot, mieshukka", "casualties"], 
	["sisällissota", "civil war"], 
	["taistelu", "combat"], 
	["valloittaa, voittaa", "conquer"], 
	["varusmies, asevelvollinen", "conscript"], 
	["ulkonaliikkumiskielto", "curfew"], 
	["julistaa sota", "declare war (on a country)"], 
	["tappio", "defeat"], 
	["puolustaa", "defend"], 
	["aseistariisunta", "disarmament"], 
	["suorittaa varusmiespalvelus", "do one’s military service"], 
	["suorittaa siviilipalvelus", "do one’s non-military service"], 
	["etninen puhdistus", "ethnic cleansing"], 
	["omien tulitus", "friendly fire"], 
	["varuskunta", "garrison"], 
	["kansanmurha", "genocide"], 
	["sissisota", "guerilla war"], 
	["jalkaväki", "infantry"], 
	["tunkeutua, hyökätä", "invade"], 
	["laivasto, laivue", "fleet"], 
	["sotilastukikohta", "military base"], 
	["ohjus", "missile"], 
	["liikekannallepano", "mobilisation"], 
	["miehitys", "occupation"], 
	["laskuvarjojääkärit", "paratroopers"], 
	["sotavanki", "prisoner of war (POW)"], 
	["kapina", "rebellion"], 
	["rykmentti", "regiment"], 
	["vetäytyä", "retreat"], 
	["pakote, sanktio", "sanction"], 
	["antautua", "surrender"], 
	["juoksuhauta, taisteluhauta", "trench"], 
	["joukot", "troops"], 
	["kaupunkisota", "urban warfare"], 
	["vastarintaliike", "resistance movement"], 
	["piiritys; piirittää", "siege"], 
	["kärsiä raskaita tappioita", "suffer heavy losses"], 
	["sotia", "wage war on"], 
	["sodankäynti", "warfare"], 
	["sodanlietsoja", "warmonger"], 
	["aseistus", "weaponry"], 
	["vetäytyä", "withdraw"], 
	["tulitauko", "ceasefire"], 
	["sovitella, toimia välittäjänä", "mediate"], 
	["neuvotella", "negotiate"], 
	["rauhanturvajoukot", "peace-keeping forces"], 
	["rauhanneuvottelut", "peace negotiations"], 
	["rauhansopimus", "peace treaty"], 
	["aselepo", "truce"], 
	["ilmavoimat", "the Air Force"], 
	["maavoimat", "the Army"], 
	["rannikkovartiosto", "the Coast Guard"], 
	["laivasto", "the Navy"], 
	["merijalkaväki", "the Marine Corps"], 
    ["analyysi, analyysit", "analysis, analyses"], 
	["keskiarvo", "average"], 
	["solu", "cell"], 
	["taulukko", "chart, table"], 
	["luokittelu", "classification"], 
	["käsite", "concept"], 
	["johtopäätös", "conclusion"], 
	["tehdä koe", "conduct an experiment"], 
	["tiedot", "data"], 
	["tietokanta", "database"], 
	["löytää, keksiä", "discover"], 
	["löytö, keksintö", "discovery"], 
	["insinööri", "engineer"], 
	["todisteet", "evidence"], 
	["koe", "experiment"], 
	["geenimanipulaatio", "genetic engineering, gene editing"], 
	["olettamus, olettamukset", "hypothesis, hypotheses"], 
	["keksiä", "invent"], 
	["keksintö", "invention"], 
	["mitata", "measure"], 
	["havainnoida", "observe"], 
	["tutkija", "researcher"], 
	["asteikko", "scale"], 
	["tieteellinen", "scientific"], 
	["tieteilijä", "scientist"], 
	["tilasto", "statistics"], 
	["kyselytutkimus", "survey"], 
	["muuttuja", "variable"], 
	["kiihdyttää", "accelerate"], 
	["kiihtyvyys", "acceleration"], 
	["sähkövaraus", "charge"], 
	["virtapiiri", "circuit"], 
	["tiheys", "density"], 
	["liueta, sulaa, hajota", "dissolve"], 
	["sähkövirta", "electric current"], 
	["kaava, kaavat", "formula, formulae"], 
	["taajuus", "frequency"], 
	["kitka", "friction"], 
	["painovoima", "gravity"], 
	["(massan) hitaus, jatkavuus", "inertia"], 
	["vipu", "lever"], 
	["suurennus", "magnification"], 
	["massa", "mass"], 
	["aine, materia", "matter"], 
	["ydinfysiikka", "nuclear physics"], 
	["ydin, tuma, ytimet, tumat", "nucleus, nuclei"], 
	["kiertorata, kiertää", "orbit"], 
	["ilmiö, ilmiöt", "phenomenon, phenomena"], 
	["fyysikko", "physicist"], 
	["säteily", "radiation"], 
	["tilavuus", "volume"], 
	["nopeus, vauhti", "velocity, speed"], 
	["aallonpituus", "wavelength"], 
	["happo", "acid"], 
	["atomi", "atom"], 
	["emäs", "base"], 
	["hiilidioksidi", "carbon dioxide"], 
	["kemiallinen reaktio", "chemical reaction"], 
	["kemisti", "chemist"], 
	["yhdiste", "compound"], 
	["alkuaine", "element"], 
	["haihtua", "evaporate"], 
	["kaasu", "gas"], 
	["vety", "hydrogen"], 
	["molekyyli", "molecule"], 
	["neste", "liquid"], 
	["typpi", "nitrogen"], 
	["hapettuminen", "oxidation"], 
	["happi", "oxygen"], 
	["jaksollisen järjestelmän taulukko", "periodic table"], 
	["ominaisuus", "property"], 
	["pelkistyminen", "reduction"], 
	["kylläinen", "saturated"], 
	["kiinteä", "solid"], 
	["liuos", "solution"], 
	["aine", "substance"],
    ["tavarajuna", "freight train"], 
	["luotijuna", "high-speed rail"], 
	["rekka", "lorry (BrE), truck (AmE)"], 
	["taajamajuna", "regional / commuter / local train"], 
	["raitiovaunu", "tram"], 
	["metro", "underground (BrE), subway (AmE)"], 
	["ajoneuvo", "vehicle"], 
	["moottoripyöräilijä, polkupyöräilijä", "biker"], 
	["apukuski", "co-driver"], 
	["työmatkalainen", "commuter"], 
	["pyöräilijä", "cyclist"], 
	["moottoriajoneuvolla kulkeva", "motorist"], 
	["matkustaja", "passenger"], 
	["jalankulkija", "pedestrian"], 
	["pysäköinninvalvoja", "traffic warden"], 
	["kiihdyttää", "accelerate"], 
	["katsastus", "annual inspection, vehicle safety inspection, MOT (Ministry of Safety test)"], 
	["autovero", "annual vehicle tax"], 
	["ilmailu", "aviation"], 
	["puhalluskoe", "breathalyzer test"], 
	["taajama", "built-up area"], 
	["ohitustie", "bypass"], 
	["parkkipaikka", "car park (BrE), parking lot (AmE)"], 
	["kimppakyyti", "carpool"], 
	["kolari", "collision, crash"], 
	["kadun reunakivi", "curb"], 
	["pyörätie", "cycling lane"], 
	["kiertotie", "detour, diversion"], 
	["ajokortti", "driving licence (BrE), driver’s license (AmE)"], 
	["autokoulu", "driving school"], 
	["ohituskaista", "fast lane"], 
	["sakko", "fine, ticket"], 
	["rahti", "freight, cargo"], 
	["huoltoasema", "gas station (AmE), service station (BrE)"], 
	["nokkakolari", "head-on collision"], 
	["valtatie, päätie", "highway"], 
	["vakuutus", "insurance"], 
	["eritasoliittymä", "interchange"], 
	["risteys", "intersection, junction, crossroads"], 
	["kaista", "lane"], 
	["levähdyspaikka", "lay-by (BrE), rest stop (AmE)"], 
	["moottoritie", "motorway (BrE), freeway (AmE), interstate (AmE)"], 
	["yksisuuntainen liikenne", "one-way traffic"], 
	["ohittaa", "overtake (BrE), pass (AmE)"], 
	["taskupysäköinti", "parallel parking"], 
	["pysäköidä", "park"], 
	["pysäköintimittari, pysäköintisovellus", "parking meter, parking app"], 
	["pysäköintiruutu", "parking space"], 
	["jalkakäytävä", "pavement (BrE), sidewalk (AmE)"], 
	["katukiveys, päällyste", "paving"], 
	["suojatie", "pedestrian crossing (BrE), zebra crossing (BrE), crosswalk (AmE)"], 
	["ketjukolari", "pile-up"], 
	["julkinen liikenne", "public transport"], 
	["raide", "rail, track"], 
	["ramppi", "ramp, exit"], 
	["hidastaa, vähentää nopeutta", "reduce speed"], 
	["tankata", "refuel, fill the tank"], 
	["etuajo-oikeus", "right-of-way"], 
	["kehätie", "ring road"], 
	["rattiraivo", "road rage"], 
	["liikenneturvallisuus", "road safety"], 
	["tietyö", "roadworks"], 
	["kiertoliittymä, liikenneympyrä", "roundabout (BrE), traffic circle (AmE)"], 
	["reitti", "route"], 
	["ruuhka-aika", "rush hour"], 
	["apukuskin paikka", "shotgun"], 
	["piennar", "(hard) shoulder"], 
	["nopeudenvalvontakamera", "speed camera"], 
	["nopeusrajoitus", "speed limit"], 
	["tutka", "speed trap, radar"], 
	["ylinopeus", "speeding"], 
	["alikulkutunneli", "subway (BrE), underpass (AmE)"], 
	["puskurissa roikkuminen", "tailgating"], 
	["maksu", "toll, charge"], 
	["keskikoroke", "traffic island"], 
	["ruuhka", "traffic jam, congestion"], 
	["liikennesääntö", "traffic regulation, rule of the road"], 
	["liikennerikkomus", "traffic violation"],
	["sovellus", "application"], 
	["liite(tiedosto)", "attachment"], 
	["askelpalautin", "backspace"], 
	["lihavointi", "bold, boldface"], 
	["kirjanmerkki", "bookmark"], 
	["selain", "browser"], 
	["kursori", "cursor"], 
	["työpöytä", "desktop"], 
	["hakemisto", "directory"], 
	["verkkotunnus", "domain"], 
	["emoji, hymiö", "emoji"], 
	["tiedosto", "file"], 
	["palomuuri", "firewall"], 
	["kansio", "folder"], 
	["fontti, kirjasin", "font"], 
	["aihetunniste, risuaita", "hashtag"], 
	["otsikko", "header"], 
	["linkki", "hyperlink"], 
	["kuvake", "icon"], 
	["kursivointi", "italics"], 
	["hakukone", "search engine"], 
	["ohjelma, ohjelmisto", "software"], 
	["välilyöntinäppäin", "spacebar"], 
	["käynnistää uudelleen", "boot, reboot"], 
	["ladata (virtaa)", "charge"], 
	["kopioida ja liittää", "copy and paste"], 
	["leikata ja liittää", "cut and paste"], 
	["kaatua, lakata toimimasta", "crash"], 
	["poistaa", "delete"], 
	["ladata (itselleen esim. internetistä)", "download"], 
	["raahata ja pudottaa", "drag and drop"], 
	["asentaa", "install"], 
	["kirjautua sisään, kirjautua ulos", "log in, log out"], 
	["päivittää (sivu)", "refresh"], 
	["päivittää (ohjelmisto/ sovellus)", "update"], 
	["ladata (omalta laitteelta esim. internetiin)", "upload"], 
	["laturi", "charger"], 
	["näyttö(laite)", "display, monitor"], 
	["telakka", "docking station"], 
	["muistitikku", "flash drive"], 
	["laitteisto", "hardware"], 
	["kuulokemikrofoni", "headset"], 
	["näppäimistö", "keyboard"], 
	["kannettava tietokone", "laptop"], 
	["näyttö, ruutu", "screen"], 
	["algoritmi", "algorithm"], 
	["tekoäly", "artificial intelligence, AI"], 
	["todennus", "authentication"], 
	["kaista, siirtonopeus", "bandwidth"], 
	["bitti", "bit"], 
	["laajakaista", "broadband"], 
	["tavu", "byte"], 
	["eväste", "cookie"], 
	["tietoturva", "cyber safety, cyber security"], 
	["salaus", "encryption"], 
	["haittaohjelma", "malware"], 
	["moderaattori", "moderator"], 
	["verkko", "network"], 
	["verkossa", "online"], 
	["tietojenkalastelu", "phishing"], 
	["ohjelmointi", "programming"], 
	["roskaposti", "spam"], 
	["taulukkolaskenta", "spreadsheet"], 
	["vakoiluohjelma", "spyware"], 
	["langaton verkko", "Wi-Fi"], 
	["tekstinkäsittely", "word processing"], 
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
    currentQuestion = 64;
    beginActivity();
    })
    $("#teema3").on("mousedown", function(){
    currentQuestion = 140;
    beginActivity();
    })
    $("#teema4").on("mousedown", function(){
    currentQuestion = 218;
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