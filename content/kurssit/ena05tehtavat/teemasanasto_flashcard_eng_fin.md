---
title: "Teemasanasto: ENG-FIN"
date: 2022-6-1
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
<button id="teema1">Media</button>  <button id="teema2">Crime & Justice</button>   <button id="teema3">Politics & Global issues</button>   <button id="teema4">Human Welfare & Religion</button>
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
	["ally", "liittolainen"], 
	["ambush", "väijytys; väijyä"], 
	["ammunition", "ammukset, ampumatarvikkeet"], 
	["armed conflict", "aseellinen konflikti"], 
	["armoury", "asevarasto, asevarikko"], 
	["artillery", "tykistö"], 
	["barracks", "kasarmi, parakki"], 
	["be at war", "olla sodassa"], 
	["beat/defeat the enemy", "voittaa vihollinen"], 
	["border", "raja"], 
	["casualties", "tappiot, mieshukka"], 
	["civil war", "sisällissota"], 
	["combat", "taistelu"], 
	["conquer", "valloittaa, voittaa"], 
	["conscript", "varusmies, asevelvollinen"], 
	["curfew", "ulkonaliikkumiskielto"], 
	["declare war (on a country)", "julistaa sota"], 
	["defeat", "tappio"], 
	["defend", "puolustaa"], 
	["disarmament", "aseistariisunta"], 
	["do one’s military service", "suorittaa varusmiespalvelus"], 
	["do one’s non-military service", "suorittaa siviilipalvelus"], 
	["ethnic cleansing", "etninen puhdistus"], 
	["friendly fire", "omien tulitus"], 
	["garrison", "varuskunta"], 
	["genocide", "kansanmurha"], 
	["guerilla war", "sissisota"], 
	["infantry", "jalkaväki"], 
	["invade", "tunkeutua, hyökätä"], 
	["fleet", "laivasto, laivue"], 
	["military base", "sotilastukikohta"], 
	["missile", "ohjus"], 
	["mobilisation", "liikekannallepano"], 
	["occupation", "miehitys"], 
	["paratroopers", "laskuvarjojääkärit"], 
	["prisoner of war (POW)", "sotavanki"], 
	["rebellion", "kapina"], 
	["regiment", "rykmentti"], 
	["retreat", "vetäytyä"], 
	["sanction", "pakote, sanktio"], 
	["surrender", "antautua"], 
	["trench", "juoksuhauta, taisteluhauta"], 
	["troops", "joukot"], 
	["urban warfare", "kaupunkisota"], 
	["resistance movement", "vastarintaliike"], 
	["siege", "piiritys; piirittää"], 
	["suffer heavy losses", "kärsiä raskaita tappioita"], 
	["wage war on", "sotia"], 
	["warfare", "sodankäynti"], 
	["warmonger", "sodanlietsoja"], 
	["weaponry", "aseistus"], 
	["withdraw", "vetäytyä"], 
	["ceasefire", "tulitauko"], 
	["mediate", "sovitella, toimia välittäjänä"], 
	["negotiate", "neuvotella"], 
	["peace-keeping forces", "rauhanturvajoukot"], 
	["peace negotiations", "rauhanneuvottelut"], 
	["peace treaty", "rauhansopimus"], 
	["truce", "aselepo"], 
	["the Air Force", "ilmavoimat"], 
	["the Army", "maavoimat"], 
	["the Coast Guard", "rannikkovartiosto"], 
	["the Navy", "laivasto"], 
	["the Marine Corps", "merijalkaväki"], .
    ["analysis, analyses", "analyysi, analyysit"], 
	["average", "keskiarvo"], 
	["cell", "solu"], 
	["chart, table", "taulukko"], 
	["classification", "luokittelu"], 
	["concept", "käsite"], 
	["conclusion", "johtopäätös"], 
	["conduct an experiment", "tehdä koe"], 
	["data", "tiedot"], 
	["database", "tietokanta"], 
	["discover", "löytää, keksiä"], 
	["discovery", "löytö, keksintö"], 
	["engineer", "insinööri"], 
	["evidence", "todisteet"], 
	["experiment", "koe"], 
	["genetic engineering, gene editing", "geenimanipulaatio"], 
	["hypothesis, hypotheses", "olettamus, olettamukset"], 
	["invent", "keksiä"], 
	["invention", "keksintö"], 
	["measure", "mitata"], 
	["observe", "havainnoida"], 
	["researcher", "tutkija"], 
	["scale", "asteikko"], 
	["scientific", "tieteellinen"], 
	["scientist", "tieteilijä"], 
	["statistics", "tilasto"], 
	["survey", "kyselytutkimus"], 
	["variable", "muuttuja"], 
	["accelerate", "kiihdyttää"], 
	["acceleration", "kiihtyvyys"], 
	["charge", "sähkövaraus"], 
	["circuit", "virtapiiri"], 
	["density", "tiheys"], 
	["dissolve", "liueta, sulaa, hajota"], 
	["electric current", "sähkövirta"], 
	["formula, formulae", "kaava, kaavat"], 
	["frequency", "taajuus"], 
	["friction", "kitka"], 
	["gravity", "painovoima"], 
	["inertia", "(massan) hitaus, jatkavuus"], 
	["lever", "vipu"], 
	["magnification", "suurennus"], 
	["mass", "massa"], 
	["matter", "aine, materia"], 
	["nuclear physics", "ydinfysiikka"], 
	["nucleus, nuclei", "ydin, tuma, ytimet, tumat"], 
	["orbit", "kiertorata, kiertää"], 
	["phenomenon, phenomena", "ilmiö, ilmiöt"], 
	["physicist", "fyysikko"], 
	["radiation", "säteily"], 
	["volume", "tilavuus"], 
	["velocity, speed", "nopeus, vauhti"], 
	["wavelength", "aallonpituus"], 
	["acid", "happo"], 
	["atom", "atomi"], 
	["base", "emäs"], 
	["carbon dioxide", "hiilidioksidi"], 
	["chemical reaction", "kemiallinen reaktio"], 
	["chemist", "kemisti"], 
	["compound", "yhdiste"], 
	["element", "alkuaine"], 
	["evaporate", "haihtua"], 
	["gas", "kaasu"], 
	["hydrogen", "vety"], 
	["molecule", "molekyyli"], 
	["liquid", "neste"], 
	["nitrogen", "typpi"], 
	["oxidation", "hapettuminen"], 
	["oxygen", "happi"], 
	["periodic table", "jaksollisen järjestelmän taulukko"], 
	["property", "ominaisuus"], 
	["reduction", "pelkistyminen"], 
	["saturated", "kylläinen"], 
	["solid", "kiinteä"], 
	["solution", "liuos"], 
	["substance", "aine"], 
    ["freight train", "tavarajuna"], 
	["high-speed rail", "luotijuna"], 
	["lorry (BrE), truck (AmE)", "rekka"], 
	["regional / commuter / local train", "taajamajuna"], 
	["tram", "raitiovaunu"], 
	["underground (BrE), subway (AmE)", "metro"], 
	["vehicle", "ajoneuvo"], 
	["biker", "moottoripyöräilijä, polkupyöräilijä"], 
	["co-driver", "apukuski"], 
	["commuter", "työmatkalainen"], 
	["cyclist", "pyöräilijä"], 
	["motorist", "moottoriajoneuvolla kulkeva"], 
	["passenger", "matkustaja"], 
	["pedestrian", "jalankulkija"], 
	["traffic warden", "pysäköinninvalvoja"], 
	["accelerate", "kiihdyttää"], 
	["annual inspection, vehicle safety inspection, MOT (Ministry of Safety test)", "katsastus"], 
	["annual vehicle tax", "autovero"], 
	["aviation", "ilmailu"], 
	["breathalyzer test", "puhalluskoe"], 
	["built-up area", "taajama"], 
	["bypass", "ohitustie"], 
	["car park (BrE), parking lot (AmE)", "parkkipaikka"], 
	["carpool", "kimppakyyti"], 
	["collision, crash", "kolari"], 
	["curb", "kadun reunakivi"], 
	["cycling lane", "pyörätie"], 
	["detour, diversion", "kiertotie"], 
	["driving licence (BrE), driver’s license (AmE)", "ajokortti"], 
	["driving school", "autokoulu"], 
	["fast lane", "ohituskaista"], 
	["fine, ticket", "sakko"], 
	["freight, cargo", "rahti"], 
	["gas station (AmE), service station (BrE)", "huoltoasema"], 
	["head-on collision", "nokkakolari"], 
	["highway", "valtatie, päätie"], 
	["insurance", "vakuutus"], 
	["interchange", "eritasoliittymä"], 
	["intersection, junction, crossroads", "risteys"], 
	["lane", "kaista"], 
	["lay-by (BrE), rest stop (AmE)", "levähdyspaikka"], 
	["motorway (BrE), freeway (AmE), interstate (AmE)", "moottoritie"], 
	["one-way traffic", "yksisuuntainen liikenne"], 
	["overtake (BrE), pass (AmE)", "ohittaa"], 
	["parallel parking", "taskupysäköinti"], 
	["park", "pysäköidä"], 
	["parking meter, parking app", "pysäköintimittari, pysäköintisovellus"], 
	["parking space", "pysäköintiruutu"], 
	["pavement (BrE), sidewalk (AmE)", "jalkakäytävä"], 
	["paving", "katukiveys, päällyste"], 
	["pedestrian crossing (BrE), zebra crossing (BrE), crosswalk (AmE)", "suojatie"], 
	["pile-up", "ketjukolari"], 
	["public transport", "julkinen liikenne"], 
	["rail, track", "raide"], 
	["ramp, exit", "ramppi"], 
	["reduce speed", "hidastaa, vähentää nopeutta"], 
	["refuel, fill the tank", "tankata"], 
	["right-of-way", "etuajo-oikeus"], 
	["ring road", "kehätie"], 
	["road rage", "rattiraivo"], 
	["road safety", "liikenneturvallisuus"], 
	["roadworks", "tietyö"], 
	["roundabout (BrE), traffic circle (AmE)", "kiertoliittymä, liikenneympyrä"], 
	["route", "reitti"], 
	["rush hour", "ruuhka-aika"], 
	["shotgun", "apukuskin paikka"], 
	["(hard) shoulder", "piennar"], 
	["speed camera", "nopeudenvalvontakamera"], 
	["speed limit", "nopeusrajoitus"], 
	["speed trap, radar", "tutka"], 
	["speeding", "ylinopeus"], 
	["subway (BrE), underpass (AmE)", "alikulkutunneli"], 
	["tailgating", "puskurissa roikkuminen"], 
	["toll, charge", "maksu"], 
	["traffic island", "keskikoroke"], 
	["traffic jam, congestion", "ruuhka"], 
	["traffic regulation, rule of the road", "liikennesääntö"], 
	["traffic violation", "liikennerikkomus"]
	["application", "sovellus"], 
	["attachment", "liite(tiedosto)"], 
	["backspace", "askelpalautin"], 
	["bold, boldface", "lihavointi"], 
	["bookmark", "kirjanmerkki"], 
	["browser", "selain"], 
	["cursor", "kursori"], 
	["desktop", "työpöytä"], 
	["directory", "hakemisto"], 
	["domain", "verkkotunnus"], 
	["emoji", "emoji, hymiö"], 
	["file", "tiedosto"], 
	["firewall", "palomuuri"], 
	["folder", "kansio"], 
	["font", "fontti, kirjasin"], 
	["hashtag", "aihetunniste, risuaita"], 
	["header", "otsikko"], 
	["hyperlink", "linkki"], 
	["icon", "kuvake"], 
	["italics", "kursivointi"], 
	["search engine", "hakukone"], 
	["software", "ohjelma, ohjelmisto"], 
	["spacebar", "välilyöntinäppäin"], 
	["boot, reboot", "käynnistää uudelleen"], 
	["charge", "ladata (virtaa)"], 
	["copy and paste", "kopioida ja liittää"], 
	["cut and paste", "leikata ja liittää"], 
	["crash", "kaatua, lakata toimimasta"], 
	["delete", "poistaa"], 
	["download", "ladata (itselleen esim. internetistä)"], 
	["drag and drop", "raahata ja pudottaa"], 
	["install", "asentaa"], 
	["log in, log out", "kirjautua sisään, kirjautua ulos"], 
	["refresh", "päivittää (sivu)"], 
	["update", "päivittää (ohjelmisto/ sovellus)"], 
	["upload", "ladata (omalta laitteelta esim. internetiin)"], 
	["charger", "laturi"], 
	["display, monitor", "näyttö(laite)"], 
	["docking station", "telakka"], 
	["flash drive", "muistitikku"], 
	["hardware", "laitteisto"], 
	["headset", "kuulokemikrofoni"], 
	["keyboard", "näppäimistö"], 
	["laptop", "kannettava tietokone"], 
	["screen", "näyttö, ruutu"], 
	["algorithm", "algoritmi"], 
	["artificial intelligence, AI", "tekoäly"], 
	["authentication", "todennus"], 
	["bandwidth", "kaista, siirtonopeus"], 
	["bit", "bitti"], 
	["broadband", "laajakaista"], 
	["byte", "tavu"], 
	["cookie", "eväste"], 
	["cyber safety, cyber security", "tietoturva"], 
	["encryption", "salaus"], 
	["malware", "haittaohjelma"], 
	["moderator", "moderaattori"], 
	["network", "verkko"], 
	["online", "verkossa"], 
	["phishing", "tietojenkalastelu"], 
	["programming", "ohjelmointi"], 
	["spam", "roskaposti"], 
	["spreadsheet", "taulukkolaskenta"], 
	["spyware", "vakoiluohjelma"], 
	["Wi-Fi", "langaton verkko"], 
	["word processing", "tekstinkäsittely"], 
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
    currentQuestion = 83;
    beginActivity();
    })
    $("#teema3").on("mousedown", function(){
    currentQuestion = 162;
    beginActivity();
    })
    $("#teema4").on("mousedown", function(){
    currentQuestion = 245;
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