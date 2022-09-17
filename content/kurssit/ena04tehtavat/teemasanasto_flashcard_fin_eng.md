---
title: "Teemasanasto: FIN-ENG"
date: 2022-6-2
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
  ["rikoskumppani", "accomplice"], 
	["tuhopoltto", "arson"], 
	["pahoinpitely", "assault"], 
	["kiristys", "blackmail"], 
	["murtovarkaus", "breaking and entering"], 
	["murtovaras", "burglar"], 
	["murtovarkaus", "burglary"], 
	["tehdä rikos", "commit a crime"], 
	["väärennös", "counterfeit"], 
	["rikos", "crime"], 
	["syyllinen, syypää", "culprit"], 
	["rattijuoppo", "drunk driver"], 
	["rattijuopumus, päihtyneenä ajaminen", "DUI (driving under the influence)"], 
	["kavallus", "embezzlement"], 
	["kiristys", "extortion"], 
	["väärentää", "forge"], 
	["väärennös", "forgery"], 
	["petos", "fraud"], 
	["syyllinen (adj.)", "guilty"], 
	["ryöstö, keikka (erityisesti pankkiin tai taidemuseoon)", "heist"], 
	["kaappaus", "hijacking"], 
	["murha", "homicide"], 
	["nuorisorikollinen", "juvenile delinquent"], 
	["tappo", "manslaughter"], 
	["pahoinpitely", "mugging"], 
	["murha", "murder"], 
	["rike, rikkomus", "offence"], 
	["rikoksentekijä", "perpetrator, perp"], 
	["taskuvaras", "pickpocket"], 
	["raiskaaja", "rapist"], 
	["rikoksenuusija", "repeat offender"], 
	["ryöstö", "robbery"], 
	["seksuaalirikollinen", "sexual offender"], 
	["myymälävarkaus", "shoplifting"], 
	["ylinopeuden ajaminen", "speeding"], 
	["salakuljettaa", "smuggle"], 
	["varkaus", "theft"], 
	["varas", "thief"], 
	["petos", "treason"], 
	["vapauttaa, antaa vapauttava tuomio", "acquit"], 
	["vedota, vetoomus", "appeal"], 
	["pidättää, vangita", "arrest"], 
	["takuu", "bail"], 
	["kuolemanrangaistus", "capital punishment"], 
	["syyte, nostaa syyte", "charge"], 
	["yhdyskuntapalvelu", "community service"], 
	["tuomita, todeta syylliseksi; vanki", "convict"], 
	["tuomio (syylliseksi tuomitseminen)", "conviction"], 
	["oikeusjuttu", "court case"], 
	["syyttäjä", "DA (district attorney)"], 
	["puolustus", "defence"], 
	["vastaaja, syytetty", "defendant"], 
	["kuolemanrangaistus", "death penalty"], 
	["syyttää, nostaa syyte", "file a lawsuit"], 
	["sakko, sakkorangaistus", "fine"], 
	["vankeus", "imprisonment"], 
	["vanki", "inmate"], 
	["vankila (puhekielinen)", "jail"], 
	["tuomari", "judge"], 
	["valamiehistö", "jury"], 
	["asianajaja", "lawyer"], 
	["armahdus, armahtaa", "pardon"], 
	["ehdonalainen", "parole"], 
	["kantaja", "plaintiff"], 
	["syyttää, nostaa syyte", "press charges"], 
	["vankila", "prison"], 
	["ehdollinen tuomio", "probation"], 
	["syyttäjä", "prosecutor"], 
	["lähestymiskielto", "restraining order"], 
	["tuomio; tuomita, langettaa tuomio", "sentence"], 
	["haastaa oikeuteen", "sue"], 
	["todistajanlausunto", "statement"], 
	["ehdollinen tuomio", "suspended sentence"], 
	["todistaa (oikeudessa)", "testify"], 
	["todistajanlausunto", "testimony"], 
	["rikesakko, sakko", "ticket"], 
	["oikeudenkäynti", "trial"], 
	["tuomio (juryn päätös)", "verdict"], 
	["todistaa; nähdä rikos", "witness"], 
	["laki, asetus", "act"], 
	["hallinto", "administration"], 
	["lakiehdotus", "bill"], 
	["ehdokas", "candidate"], 
	["väestönlaskenta", "census"], 
	["kokoomus-, koalitiohallitus", "coalition government"], 
	["perustuslaki", "constitution"], 
	["demokratia", "democracy"], 
	["hajottaa", "dissolve"], 
	["sisäpolitiikka", "domestic policy"], 
	["vaalikampanja", "election campaign"], 
	["ulkopolitiikka", "foreign policy"], 
	["eduskuntavaalit", "general elections"], 
	["hallitus", "government"], 
	["valtion päämies", "head of state"], 
	["oikeuslaitos", "judiciary, judicial system"], 
	["lainsäädäntö", "legislation"], 
	["enemmistö", "majority"], 
	["kansanedustaja", "Member of Parliament (MP)"], 
	["eurokansanedustaja", "Member of the European Parliament (MEP)"], 
	["vähemmistö", "minority"], 
	["monarkia", "monarchy"], 
	["kunnallisvaalit", "municipal elections"], 
	["kunta", "municipality"], 
	["oppositio", "opposition"], 
	["eduskunta, parlamentti", "parliament"], 
	["puolue", "party"], 
	["kansanäänestys", "referendum"], 
	["kansanedustaja", "representative"], 
	["tasavalta", "republic"], 
	["olla ehdolla", "stand for (BrE), run for (AmE)"], 
	["virkakausi", "term (of office)"], 
	["Euroopan Unioni", "the European Union"], 
	["vasemmisto", "the Left, the left wing"], 
	["oikeisto", "the Right, the right wing"], 
	["äänioikeus", "universal suffrage, right to vote"], 
	["varapresidentti", "vice-president"], 
	["äänestää", "vote"], 
	["avustustyöntekijä", "aid worker, relief worker"], 
	["syrjäytyminen", "alienation"], 
	["turvapaikka", "asylum"], 
	["turvapaikanhakija", "asylum seeker"], 
	["mustat, alkuperäiskansat ja muut ei-valkoiseksi rodullistetut henkilöt", "BIPOC (black, indigenous and people of color)"], 
	["hyväntekeväisyys(järjestö)", "charity"], 
	["maastakarkotus", "deportation"], 
	["kehittyvä maa", "developing country"], 
	["syrjintä", "discrimination"], 
	["toisinajattelija", "dissident"], 
	["muuttaa maasta", "emigrate"], 
	["ulkomailla asuva", "expat"], 
	["reilu kauppa", "fair trade"], 
	["nälänhätä", "famine"], 
	["myöntää", "grant"], 
	["hätäapu", "humanitarian aid"], 
	["luku- ja kirjoitustaidoton", "illiterate"], 
	["maahanmuuttaja", "immigrant"], 
	["maahanmuutto", "immigration"], 
	["kotoperäinen, alkuperäinen", "indigenous"], 
	["lapsikuolleisuus", "infant mortality"], 
	["sulautuminen", "integration"], 
	["oikeudenmukaisuus, oikeus", "justice"], 
	["odotettu elinikä", "life expectancy"], 
	["luku- ja kirjoitustaito", "literacy"], 
	["elinolosuhteet", "living conditions"], 
	["vähävarainen maa", "low-income country"], 
	["aliravitsemus, huono ravinto", "malnourishment"], 
	["vähemmistö", "minority"], 
	["rahallinen apu", "monetary aid"], 
	["monikulttuurinen", "multicultural"], 
	["kansalaisjärjestö", "NGO, non-governmental organisation"], 
	["rauhanturvaaja", "peacekeeper"], 
	["rotuerottelu", "racial segregation"], 
	["rasismi, rotuviha", "racism"], 
	["vastaanottokeskus", "reception centre"], 
	["pakolainen", "refugee"], 
	["hätäapu", "relief aid"], 
	["avustustyöntekijä", "relief worker"], 
	["oleskelulupa", "residence permit"], 
	["slummi", "slum"], 
	["nälänhätä", "starvation"], 
	["suvaitsevaisuus", "tolerance"], 
	["slummi", "urban ghetto"], 
	["työlupa", "work permit"], 
  	["avustus, tuki", "allowance"], 
	["viranomaiset", "authorities"], 
	["avustus, tuki, etu", "benefit"], 
	["kansalainen", "citizen"], 
	["kansalaisuus", "citizenship"], 
	["lapsilisä", "child benefit"], 
	["lastenkoti", "children’s home"], 
	["päiväkoti", "day care centre, kindergarten"], 
	["vammaistuki", "disability benefit"], 
	["tasa-arvo", "equality"], 
	["asunnottomuus", "homelessness"], 
	["asumistuki", "housing benefit"], 
	["tulot", "income"], 
	["tulovero", "income tax"], 
	["terveydenhuolto", "health care"], 
	["vammaiset", "individuals with special needs"], 
	["äitiyspakkaus", "maternity package"], 
	["kansalaisuus", "nationality"], 
	["eläkeläinen", "OAP (old age pensioner)"], 
	["köyhyys", "poverty"], 
	["asukas", "resident"], 
	["jäädä eläkkeelle", "retire"], 
	["eläkeläinen", "retiree"], 
	["vanhus", "senior citizen"], 
	["palvelutalo", "sheltered housing"], 
	["sairauspäiväraha", "sickness allowance"], 
	["sosiaaliturva", "social security"], 
	["elintaso", "standard of living"], 
	["opintotuki", "student grant"], 
	["avustus, valtionapu", "subsidy"], 
	["vanhukset", "the elderly"], 
	["työttömyyskorvaus", "unemployment benefit"], 
	["hyvinvointivaltio", "welfare state"], 
	["siviilivihkiminen", "civil ceremony"], 
	["rekisteröity parisuhde", "civil partnership"], 
	["avoliitto", "cohabitation"], 
	["elatusapu", "child support"], 
	["huoltajuus", "custody"], 
	["avioero", "divorce"], 
	["yhteishuoltajuus", "joint custody"], 
	["olla avoliitossa, asua yhdessä", "live together"], 
	["avioliitto", "marriage"], 
	["avioehto", "prenuptial agreement"], 
	["ateismi", "atheism"], 
	["kaste", "baptism"], 
	["siunata", "bless"], 
	["kaste", "christening"], 
	["ehtoollinen", "communion"], 
	["ripille pääsy", "confirmation"], 
	["isonen", "confirmation camp group leader"], 
	["seurakunta (kirkkoväki)", "congregation"], 
	["usko", "faith"], 
	["paasto", "fast, fasting"], 
	["virsi", "hymn"], 
	["messu", "mass"], 
	["seurakunta", "parish"], 
	["rukoilla", "pray"], 
	["rukous", "prayer"], 
	["saarnata", "preach"], 
	["Prometheus-leiri", "Prometheus camp"], 
	["uskonto", "religion"], 
	["uskonnollinen", "religious"], 
	["pyhä", "sacred"], 
	["maallinen", "secular"], 
	["saarna", "sermon"], 
	["jumalanpalvelus", "service"],
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