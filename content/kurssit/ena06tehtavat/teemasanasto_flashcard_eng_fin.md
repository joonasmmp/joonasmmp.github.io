---
title: "Teemasanasto: ENG-FIN"
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
  <div id=valikko>
<button id="teema1">Education</button>  <button id="teema2">Working life</button>   <button id="teema3">Business</button>
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

["adult education centre", kansalaisopisto"],
["apprenticeship training", oppisopimuskoulutus"],
["basic education", perusopetus"],
["boarding school", sisäoppilaitos"],
["comprehensive school", peruskoulu"],
["elementary school (AmE), primary school (BrE)", alakoulu"],
["folk high school", kansanopisto"],
["general upper secondary school", lukio"],
["liberal adult education", vapaa sivistystyö"],
["open university", avoin yliopisto"],
["preschool", esikoulu"],
["public school (BrE), private school (AmE)", yksityiskoulu"],
["secondary school (BrE), middle school, junior high school (AmE)", yläkoulu"],
["university, college", yliopisto, korkeakoulu"],
["university of applied sciences", ammattikorkeakoulu"],
["vocational college/institute/school", ammattiopisto"],
["absence", poissaolo"],
["advanced (studies)", syventävät (opinnot)"],
["admission", sisäänpääsy"],
["A-levels", ylioppilastutkinto Britanniassa"],
["attend lessons (BrE), classes (AmE)", käydä oppitunneilla"],
["assessment", arviointi"],
["assignment", tehtävä"],
["break (BrE), recess (AmE)", tauko, välitunti"],
["cheat", luntata, huijata"],
["compulsory", pakollinen"],
["cram course", valmennuskurssi"],
["credit", opintopiste"],
["curriculum", opetussuunnitelma"],
["detention", jälki-istunto"],
["discipline", kuri"],
["distance learning", etäopiskelu"],
["drop out", jättää koulu kesken"],
["e-learning", e-oppiminen"],
["expel", erottaa (koulusta)"],
["extracurricular activities", koulutuntien ulkopuolinen toiminta"],
["fail (BrE), flunk (AmE)", reputtaa"],
["form (BrE), grade (AmE)", koululuokka"],
["free period", hyppytunti"],
["graduate from", valmistua"],
["independent study", itsenäinen opiskelu"],
["lesson, class", oppitunti"],
["mark (BrE), grade (AmE)", arvosana"],
["matriculation examination", ylioppilastutkinto Suomessa"],
["optional", valinnainen"],
["pass", läpäistä (koe)"],
["skip a lesson, cut class", pinnata"],
["study unit", opintojakso"],
["suspend", erottaa määräajaksi"],
["syllabus", opinto-ohjelma"],
["term (BrE), semester (AmE)", lukukausi"],
["timetable, schedule", lukujärjestys"],
["class teacher", luokanopettaja"],
["form teacher (BrE), homeroom teacher (AmE)", luokanvalvoja (perusopetus), ryhmänohjaaja (lukio)"],
["guidance counsellor (BrE), student counselor (AmE)", opinto-ohjaaja"],
["head teacher (BrE), principal (AmE)", rehtori"],
["school social worker", kuraattori"],
["special needs teacher", erityisopettaja"],
["subject teacher", aineenopettaja"],
["alumni", oppilaitoksesta valmistuneet opiskelijat"],
["application for admission", hakemus (oppilaitokseen)"],
["dissertation", väitöskirja, tieteellinen tutkielma"],
["hall of residence (BrE), dormitory (AmE)", opiskelija-asuntola"],
["enrol on (BrE), enroll in (AmE)", kirjoittautua sisään (oppilaitokseen)"],
["faculty", tiedekunta"],
["get a degree (in)", saada loppututkinto"],
["get into university", päästä yliopistoon"],
["lecture", luento"],
["major", pääaine"],
["minor", sivuaine"],
["personal statement, motivation letter", motivaatiokirje"],
["scholarship", stipendi, apuraha"],
["student loan", opintolaina"],
["study credit", opintopiste"],
["study grant", apuraha, opintotuki"],
["take an entrance exam", osallistua pääsykokeeseen"],
["thesis, theses", tutkielma, tutkielmat"],
["tuition fee", lukukausimaksu"],
["applicant", "hakija"],
["CEO, chief executive officer", "toimitusjohtaja"],
["colleague, co-worker", "työkaveri"],
["employee", "työntekijä"],
["employer", "työnantaja"],
["entrepreneur,self-employed", "yrittäjä"],
["factory worker", "tehdastyöntekijä"],
["foreman, superior", "esihenkilö"],
["management", "johto"],
["manager, director", "johtaja, pomo"],
["office worker", "toimistotyöntekijä"],
["pensioner", "eläkeläinen"],
["personnel, staff", "henkilökunta"],
["subordinate", "alainen"],
["supervisor", "työnjohtaja, tarkastaja, esihenkilö"],
["temporary worker, temp", "tilapäistyöntekijä"],
["trainee, apprentice, intern", "harjoittelija"],
["unemployed, jobless", "työtön"],
["workforce, labour force", "työvoima, henkilöstö"],
["application", "hakemus"],
["apply for a job", "hakea työpaikkaa"],
["curriculum vitae, CV, résumé", "ansioluettelo"],
["job interview", "työpaikkahaastattelu"],
["job offer", "työtarjous"],
["reference", "suositus"],
["vacancy, vacant position", "avoin työpaikka"],
["apprenticeship", "oppisopimus"],
["career", "ura"],
["certificate of employment", "työtodistus"],
["collective bargaining agreement", "työehtosopimus"],
["commission", "provisiopalkka"],
["company, business, enterprise", "yhtiö, yritys"],
["dismiss, give notice, make redundant", "irtisanoa"],
["earn", "ansaita"],
["fire someone", "antaa potkut"],
["flexitime, flexible hours", "liukuva työaika"],
["fringe benefits, perks", "luontoisedut"],
["full-time job", "kokopäivätyö"],
["gig economy", "keikkatalous"],
["go on strike", "mennä lakkoon"],
["hire, employ, recruit", "palkata"],
["hot desking", "työpisteiden jakaminen"],
["hub", "yhteisöllinen työtila"],
["hybrid work", "monipaikkainen työ, hybridityö"],
["income", "tulot, ansio"],
["in-person meeting", "lähikokous"],
["in-service training", "täydennyskoulutus"],
["job, occupation", "ammatti"],
["job centre, employment agency", "TE-toimisto (työ- ja elinkeinotoimisto)"],
["lay off (temporarily)", "lomauttaa"],
["leave of absence", "virkavapaa"],
["make a living, earn a living", "ansaita elantonsa"],
["manual work", "ruumiillinen, käsin tehty työ"],
["moonlighting", "pimeä työ"],
["on-the-job training", "työpaikkakoulutus"],
["on-site work", "lähityö"],
["open-plan office", "avokonttori"],
["orientation", "perehdyttäminen"],
["overtime bonus", "ylityökorvaus"],
["part-time work", "osa-aikatyö"],
["pay, salary, wages", "palkka"],
["pay rise", "palkankorotus"],
["pension", "eläke"],
["permanent job", "vakituinen työpaikka"],
["piecework", "urakkatyö"],
["post", "virka"],
["premises", "toimitilat"],
["production line", "tuotantolinja"],
["profession", "akateeminen ammatti"],
["promotion", "ylennys"],
["qualify", "pätevöityä"],
["remote meeting", "etäkokous"],
["remote work", "etätyö"],
["resign, quit", "irtisanoutua, erota"],
["retire", "jäädä eläkkeelle"],
["retirement", "eläköityminen"],
["rota", "työvuorolista"],
["salary increment", "palkanlisä"],
["service industries", "palvelualat"],
["shift work", "vuorotyö"],
["short-term contract, temporary job", "pätkätyö, väliaikainen työ, keikkatyö"],
["sick leave", "sairausloma"],
["strike", "lakko"],
["supervise", "valvoa, ohjata, johtaa"],
["trade union", "ammattiyhdistys, palkansaajajärjestö"],
["unemployment", "työttömyys"],
["unemployment benefit, dole (money) (BrE)", "työttömyyskorvaus"],
["volunteering, volunteer work", "vapaaehtoistyö"],
["work conditions", "työolosuhteet"],
["work contract", "työsopimus"],
["working hours", "työaika"],
["work practice, internship", "työharjoittelu"],
["work overtime", "tehdä ylitöitä"],
["work shifts", "tehdä vuorotyötä"],
["zero-hour contract", "nollatuntisopimus"],
["account", "tili"],
["ATM, automated teller machine", "pankkiautomaatti"],
["balance", "saldo"],
["budget", "budjetti, tulo- ja menoarvio"],
["cash", "käteinen"],
["debt", "velka"],
["deposit", "tallettaa"],
["deposit, down payment", "käsiraha, vakuus"],
["expense", "kulu, meno"],
["finance", "rahoittaa, rahoitus"],
["income tax", "tulovero"],
["instalment payment", "osamaksu"],
["interest", "korko"],
["mortgage", "asuntolaina"],
["overdraw", "ylittää tili"],
["payday loan", "pikavippi"],
["receipt", "kuitti"],
["transaction", "tilitapahtuma"],
["wealth", "varallisuus"],
["withdrawal", "nosto"],
["assets", "omaisuus, varat"],
["bond", "joukkovelkakirja"],
["crash", "romahdus"],
["dividend", "osinko"],
["invest", "sijoittaa"],
["investment", "sijoitus"],
["investment fund, mutual fund", "sijoitusrahasto"],
["property", "kiinteistö, omaisuus"],
["share", "osake"],
["shareholder", "osakas, osakkeenomistaja"],
["stock market", "pörssi"],
["stocks", "osakekanta, arvopaperit"],
["trade", "käydä kauppaa, kaupankäynti"],
["bankrupt", "maksukyvytön, vararikossa"],
["bankruptcy", "konkurssi"],
["capital", "pääoma"],
["charge", "veloittaa, veloitus"],
["consumer", "kuluttaja"],
["consumption", "kulutus"],
["currency", "rahayksikkö, valuutta"],
["depression", "lama"],
["economics", "taloustiede"],
["economy", "talous"],
["embargo", "kauppasaarto"],
["goods", "kauppatavara"],
["inflation", "inflaatio"],
["invoice", "lasku, laskuttaa"],
["market", "markkinoida, markkina(t)"],
["recession", "taantuma"],
["refund", "palauttaa, takaisinmaksu"],
["revenue", "liikevaihto"],
["value added tax, VAT", "arvonlisävero"],
["boom", "(nopea) nousukausi"],
["bull market", "härkämarkkina, pitkä nousukausi"],
["debit card", "pankkikortti"],
["deficit", "alijäämä"],
["downturn", "laskusuhdanne"],
["export", "viedä maasta, vienti"],
["in the red", "tappiolla"],
["loss", "tappio"],
["net", "netto"],
["supply", "tarjonta"],
["slump", "(nopea) laskukausi"],
["bear market", "karhumarkkina, pitkä laskukausi"],
["credit card", "luottokortti"],
["surplus", "ylijäämä"],
["upturn", "noususuhdanne"],
["import", "tuoda maahan, maahantuonti"],
["in the black", "voitolla"],
["gain, profit", "tuotto, voitto"],
["gross", "brutto"],
["demand", "kysyntä"],

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