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

<div id="nappaimet" class="md:block hidden bg-white panel mb-3 pb-5 dark:bg-warmgray-900"> Välilyönti = käännä kortti<br> < > = vaihda korttia<br> R = sattunnainen kortti </div>

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
	["channel", "kanava"], 
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
	["accomplice", "rikoskumppani"], 
	["arson", "tuhopoltto"], 
	["assault", "pahoinpitely"], 
	["blackmail", "kiristys"], 
	["breaking and entering", "murtovarkaus"], 
	["burglar", "murtovaras"], 
	["burglary", "murtovarkaus"], 
	["commit a crime", "tehdä rikos"], 
	["counterfeit", "väärennös"], 
	["crime", "rikos"], 
	["culprit", "syyllinen, syypää"], 
	["drunk driver", "rattijuoppo"], 
	["DUI (driving under the influence)", "rattijuopumus, päihtyneenä ajaminen"], 
	["embezzlement", "kavallus"], 
	["extortion", "kiristys"], 
	["forge", "väärentää"], 
	["forgery", "väärennös"], 
	["fraud", "petos"], 
	["guilty", "syyllinen (adj.)"], 
	["heist", "ryöstö, keikka (erityisesti pankkiin tai taidemuseoon)"], 
	["hijacking", "kaappaus"], 
	["homicide", "murha"], 
	["juvenile delinquent", "nuorisorikollinen"], 
	["manslaughter", "tappo"], 
	["mugging", "pahoinpitely"], 
	["murder", "murha"], 
	["offence", "rike, rikkomus"], 
	["perpetrator, perp", "rikoksentekijä"], 
	["pickpocket", "taskuvaras"], 
	["rapist", "raiskaaja"], 
	["repeat offender", "rikoksenuusija"], 
	["robbery", "ryöstö"], 
	["sexual offender", "seksuaalirikollinen"], 
	["shoplifting", "myymälävarkaus"], 
	["speeding", "ylinopeuden ajaminen"], 
	["smuggle", "salakuljettaa"], 
	["theft", "varkaus"], 
	["thief", "varas"], 
	["treason", "petos"], 
	["acquit", "vapauttaa, antaa vapauttava tuomio"], 
	["appeal", "vedota, vetoomus"], 
	["arrest", "pidättää, vangita"], 
	["bail", "takuu"], 
	["capital punishment", "kuolemanrangaistus"], 
	["charge", "syyte, nostaa syyte"], 
	["community service", "yhdyskuntapalvelu"], 
	["convict", "tuomita, todeta syylliseksi; vanki"], 
	["conviction", "tuomio (syylliseksi tuomitseminen)"], 
	["court case", "oikeusjuttu"], 
	["DA (district attorney)", "syyttäjä"], 
	["defence", "puolustus"], 
	["defendant", "vastaaja, syytetty"], 
	["death penalty", "kuolemanrangaistus"], 
	["file a lawsuit", "syyttää, nostaa syyte"], 
	["fine", "sakko, sakkorangaistus"], 
	["imprisonment", "vankeus"], 
	["inmate", "vanki"], 
	["jail", "vankila (puhekielinen)"], 
	["judge", "tuomari"], 
	["jury", "valamiehistö"], 
	["lawyer", "asianajaja"], 
	["pardon", "armahdus, armahtaa"], 
	["parole", "ehdonalainen"], 
	["plaintiff", "kantaja"], 
	["press charges", "syyttää, nostaa syyte"], 
	["prison", "vankila"], 
	["probation", "ehdollinen tuomio"], 
	["prosecutor", "syyttäjä"], 
	["restraining order", "lähestymiskielto"], 
	["sentence", "tuomio; tuomita, langettaa tuomio"], 
	["sue", "haastaa oikeuteen"], 
	["statement", "todistajanlausunto"], 
	["suspended sentence", "ehdollinen tuomio"], 
	["testify", "todistaa (oikeudessa)"], 
	["testimony", "todistajanlausunto"], 
	["ticket", "rikesakko, sakko"], 
	["trial", "oikeudenkäynti"], 
	["verdict", "tuomio (juryn päätös)"], 
	["witness", "todistaa; nähdä rikos"], 
  ["act", "laki, asetus"], 
	["administration", "hallinto"], 
	["bill", "lakiehdotus"], 
	["candidate", "ehdokas"], 
	["census", "väestönlaskenta"], 
	["coalition government", "kokoomus-, koalitiohallitus"], 
	["constitution", "perustuslaki"], 
	["democracy", "demokratia"], 
	["dissolve", "hajottaa"], 
	["domestic policy", "sisäpolitiikka"], 
	["election campaign", "vaalikampanja"], 
	["foreign policy", "ulkopolitiikka"], 
	["general elections", "eduskuntavaalit"], 
	["government", "hallitus"], 
	["head of state", "valtion päämies"], 
	["judiciary, judicial system", "oikeuslaitos"], 
	["legislation", "lainsäädäntö"], 
	["majority", "enemmistö"], 
	["Member of Parliament (MP)", "kansanedustaja"], 
	["Member of the European Parliament (MEP)", "eurokansanedustaja"], 
	["minority", "vähemmistö"], 
	["monarchy", "monarkia"], 
	["municipal elections", "kunnallisvaalit"], 
	["municipality", "kunta"], 
	["opposition", "oppositio"], 
	["parliament", "eduskunta, parlamentti"], 
	["party", "puolue"], 
	["referendum", "kansanäänestys"], 
	["representative", "kansanedustaja"], 
	["republic", "tasavalta"], 
	["stand for (BrE), run for (AmE)", "olla ehdolla"], 
	["term (of office)", "virkakausi"], 
	["the European Union", "Euroopan Unioni"], 
	["the Left, the left wing", "vasemmisto"], 
	["the Right, the right wing", "oikeisto"], 
	["universal suffrage, right to vote", "äänioikeus"], 
	["vice-president", "varapresidentti"], 
	["vote", "äänestää"], 
	["aid worker, relief worker", "avustustyöntekijä"], 
	["alienation", "syrjäytyminen"], 
	["asylum", "turvapaikka"], 
	["asylum seeker", "turvapaikanhakija"], 
	["BIPOC (black, indigenous and people of color)", "mustat, alkuperäiskansat ja muut ei-valkoiseksi rodullistetut henkilöt"], 
	["charity", "hyväntekeväisyys(järjestö)"], 
	["deportation", "maastakarkotus"], 
	["developing country", "kehittyvä maa"], 
	["discrimination", "syrjintä"], 
	["dissident", "toisinajattelija"], 
	["emigrate", "muuttaa maasta"], 
	["expat", "ulkomailla asuva"], 
	["fair trade", "reilu kauppa"], 
	["famine", "nälänhätä"], 
	["grant", "myöntää"], 
	["humanitarian aid", "hätäapu"], 
	["illiterate", "luku- ja kirjoitustaidoton"], 
	["immigrant", "maahanmuuttaja"], 
	["immigration", "maahanmuutto"], 
	["indigenous", "kotoperäinen, alkuperäinen"], 
	["infant mortality", "lapsikuolleisuus"], 
	["integration", "sulautuminen"], 
	["justice", "oikeudenmukaisuus, oikeus"], 
	["life expectancy", "odotettu elinikä"], 
	["literacy", "luku- ja kirjoitustaito"], 
	["living conditions", "elinolosuhteet"], 
	["low-income country", "vähävarainen maa"], 
	["malnourishment", "aliravitsemus, huono ravinto"], 
	["minority", "vähemmistö"], 
	["monetary aid", "rahallinen apu"], 
	["multicultural", "monikulttuurinen"], 
	["NGO, non-governmental organisation", "kansalaisjärjestö"], 
	["peacekeeper", "rauhanturvaaja"], 
	["racial segregation", "rotuerottelu"], 
	["racism", "rasismi, rotuviha"], 
	["reception centre", "vastaanottokeskus"], 
	["refugee", "pakolainen"], 
	["relief aid", "hätäapu"], 
	["relief worker", "avustustyöntekijä"], 
	["residence permit", "oleskelulupa"], 
	["slum", "slummi"], 
	["starvation", "nälänhätä"], 
	["tolerance", "suvaitsevaisuus"], 
	["urban ghetto", "slummi"], 
	["work permit", "työlupa"], 
  ["allowance", "avustus, tuki"], 
	["authorities", "viranomaiset"], 
	["benefit", "avustus, tuki, etu"], 
	["citizen", "kansalainen"], 
	["citizenship", "kansalaisuus"], 
	["child benefit", "lapsilisä"], 
	["children’s home", "lastenkoti"], 
	["day care centre, kindergarten", "päiväkoti"], 
	["disability benefit", "vammaistuki"], 
	["equality", "tasa-arvo"], 
	["homelessness", "asunnottomuus"], 
	["housing benefit", "asumistuki"], 
	["income", "tulot"], 
	["income tax", "tulovero"], 
	["health care", "terveydenhuolto"], 
	["individuals with special needs", "vammaiset"], 
	["maternity package", "äitiyspakkaus"], 
	["nationality", "kansalaisuus"], 
	["OAP (old age pensioner)", "eläkeläinen"], 
	["poverty", "köyhyys"], 
	["resident", "asukas"], 
	["retire", "jäädä eläkkeelle"], 
	["retiree", "eläkeläinen"], 
	["senior citizen", "vanhus"], 
	["sheltered housing", "palvelutalo"], 
	["sickness allowance", "sairauspäiväraha"], 
	["social security", "sosiaaliturva"], 
	["standard of living", "elintaso"], 
	["student grant", "opintotuki"], 
	["subsidy", "avustus, valtionapu"], 
	["the elderly", "vanhukset"], 
	["unemployment benefit", "työttömyyskorvaus"], 
	["welfare state", "hyvinvointivaltio"], 
	["civil ceremony", "siviilivihkiminen"], 
	["civil partnership", "rekisteröity parisuhde"], 
	["cohabitation", "avoliitto"], 
	["child support", "elatusapu"], 
	["custody", "huoltajuus"], 
	["divorce", "avioero"], 
	["joint custody", "yhteishuoltajuus"], 
	["live together", "olla avoliitossa, asua yhdessä"], 
	["marriage", "avioliitto"], 
	["prenuptial agreement", "avioehto"], 
	["atheism", "ateismi"], 
	["baptism", "kaste"], 
	["bless", "siunata"], 
	["christening", "kaste"], 
	["communion", "ehtoollinen"], 
	["confirmation", "ripille pääsy"], 
	["confirmation camp group leader", "isonen"], 
	["congregation", "seurakunta (kirkkoväki)"], 
	["faith", "usko"], 
	["fast, fasting", "paasto"], 
	["hymn", "virsi"], 
	["mass", "messu"], 
	["parish", "seurakunta"], 
	["pray", "rukoilla"], 
	["prayer", "rukous"], 
	["preach", "saarnata"], 
	["Prometheus camp", "Prometheus-leiri"], 
	["religion", "uskonto"], 
	["religious", "uskonnollinen"], 
	["sacred", "pyhä"], 
	["secular", "maallinen"], 
	["sermon", "saarna"], 
	["service", "jumalanpalvelus"], 
  ];

  beginActivity();
  edellinen();
  random();
  seuraava();
  kortinVaihto();

  	$("#teema1").on("click", function(){
	currentQuestion = 0;
    beginActivity();
	document.getElementById(teema1).blur();
    })
    $("#teema2").on("click", function(){
    currentQuestion = 83;
    beginActivity();
	document.getElementById(teema2).blur();
    })
    $("#teema3").on("click", function(){
    currentQuestion = 162;
    beginActivity();
	document.getElementById(teema3).blur();
    })
    $("#teema4").on("click", function(){
    currentQuestion = 245;
    beginActivity();
	document.getElementById(teema4).blur();
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