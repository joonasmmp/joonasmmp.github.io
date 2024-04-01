---
title: "Teemasanasto: FIN-ENG"
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

["kansalaisopisto", "adult education centre"],
["oppisopimuskoulutus", "apprenticeship training"],
["perusopetus", "basic education"],
["sisäoppilaitos", "boarding school"],
["peruskoulu", "comprehensive school"],
["alakoulu", "elementary school (AmE), primary school (BrE)"],
["kansanopisto", "folk high school"],
["lukio", "general upper secondary school"],
["vapaa sivistystyö", "liberal adult education"],
["avoin yliopisto", "open university"],
["esikoulu", "preschool"],
["yksityiskoulu", "public school (BrE), private school (AmE)"],
["yläkoulu", "secondary school (BrE), middle school, junior high school (AmE)"],
["yliopisto, korkeakoulu", "university, college"],
["ammattikorkeakoulu", "university of applied sciences"],
["ammattiopisto", "vocational college/institute/school"],
["poissaolo", "absence"],
["syventävät (opinnot)", "advanced (studies)"],
["sisäänpääsy", "admission"],
["ylioppilastutkinto Britanniassa", "A-levels"],
["käydä oppitunneilla", "attend lessons (BrE), classes (AmE)"],
["arviointi", "assessment"],
["tehtävä", "assignment"],
["tauko, välitunti", "break (BrE), recess (AmE)"],
["luntata, huijata", "cheat"],
["pakollinen", "compulsory"],
["valmennuskurssi", "cram course"],
["opintopiste", "credit"],
["opetussuunnitelma", "curriculum"],
["jälki-istunto", "detention"],
["kuri", "discipline"],
["etäopiskelu", "distance learning"],
["jättää koulu kesken", "drop out"],
["e-oppiminen", "e-learning"],
["erottaa (koulusta)", "expel"],
["koulutuntien ulkopuolinen toiminta", "extracurricular activities"],
["reputtaa", "fail (BrE), flunk (AmE)"],
["koululuokka", "form (BrE), grade (AmE)"],
["hyppytunti", "free period"],
["valmistua", "graduate from"],
["itsenäinen opiskelu", "independent study"],
["oppitunti", "lesson, class"],
["arvosana", "mark (BrE), grade (AmE)"],
["ylioppilastutkinto Suomessa", "matriculation examination"],
["valinnainen", "optional"],
["läpäistä (koe)", "pass"],
["pinnata", "skip a lesson, cut class"],
["opintojakso", "study unit"],
["erottaa määräajaksi", "suspend"],
["opinto-ohjelma", "syllabus"],
["lukukausi", "term (BrE), semester (AmE)"],
["lukujärjestys", "timetable, schedule"],
["luokanopettaja", "class teacher"],
["luokanvalvoja (perusopetus), ryhmänohjaaja (lukio)", "form teacher (BrE), homeroom teacher (AmE)"],
["opinto-ohjaaja", "guidance counsellor (BrE), student counselor (AmE)"],
["rehtori", "head teacher (BrE), principal (AmE)"],
["kuraattori", "school social worker"],
["erityisopettaja", "special needs teacher"],
["aineenopettaja", "subject teacher"],
["oppilaitoksesta valmistuneet opiskelijat", "alumni"],
["hakemus (oppilaitokseen)", "application for admission"],
["väitöskirja, tieteellinen tutkielma", "dissertation"],
["opiskelija-asuntola", "hall of residence (BrE), dormitory (AmE)"],
["kirjoittautua sisään (oppilaitokseen)", "enrol on (BrE), enroll in (AmE)"],
["tiedekunta", "faculty"],
["saada loppututkinto", "get a degree (in)"],
["päästä yliopistoon", "get into university"],
["luento", "lecture"],
["pääaine", "major"],
["sivuaine", "minor"],
["motivaatiokirje", "personal statement, motivation letter"],
["stipendi, apuraha", "scholarship"],
["opintolaina", "student loan"],
["opintotuki", "study grant"],
["osallistua pääsykokeeseen", "take an entrance exam"],
["tutkielma, tutkielmat", "thesis, theses"],
["lukukausimaksu", "tuition fee"],
["hakija", "applicant"],
["toimitusjohtaja", "CEO, chief executive officer"],
["työkaveri", "colleague, co-worker"],
["työntekijä", "employee"],
["työnantaja", "employer"],
["yrittäjä", "entrepreneur,self-employed"],
["tehdastyöntekijä", "factory worker"],
["esihenkilö", "foreman, superior"],
["johto", "management"],
["johtaja, pomo", "manager, director"],
["toimistotyöntekijä", "office worker"],
["eläkeläinen", "pensioner"],
["henkilökunta", "personnel, staff"],
["alainen", "subordinate"],
["työnjohtaja, tarkastaja, esihenkilö", "supervisor"],
["tilapäistyöntekijä", "temporary worker, temp"],
["työtön", "unemployed, jobless"],
["työvoima, henkilöstö", "workforce, labour force"],
["hakemus", "application"],
["hakea työpaikkaa", "apply for a job"],
["ansioluettelo", "curriculum vitae, CV, résumé"],
["työpaikkahaastattelu", "job interview"],
["työtarjous", "job offer"],
["suositus", "reference"],
["avoin työpaikka", "vacancy, vacant position"],
["oppisopimus", "apprenticeship"],
["ura", "career"],
["työtodistus", "certificate of employment"],
["työehtosopimus", "collective bargaining agreement"],
["provisiopalkka", "commission"],
["yhtiö, yritys", "company, business, enterprise"],
["irtisanoa", "dismiss, give notice, make redundant"],
["ansaita", "earn"],
["antaa potkut", "fire someone"],
["liukuva työaika", "flexitime, flexible hours"],
["luontoisedut", "fringe benefits, perks"],
["kokopäivätyö", "full-time job"],
["keikkatalous", "gig economy"],
["mennä lakkoon", "go on strike"],
["palkata", "hire, employ, recruit"],
["työpisteiden jakaminen", "hot desking"],
["yhteisöllinen työtila", "hub"],
["monipaikkainen työ, hybridityö", "hybrid work"],
["tulot, ansio", "income"],
["lähikokous", "in-person meeting"],
["täydennyskoulutus", "in-service training"],
["ammatti", "job, occupation"],
["TE-toimisto (työ- ja elinkeinotoimisto)", "job centre, employment agency"],
["lomauttaa", "lay off (temporarily)"],
["virkavapaa", "leave of absence"],
["ansaita elantonsa", "make a living, earn a living"],
["ruumiillinen, käsin tehty työ", "manual work"],
["pimeä työ", "moonlighting"],
["työpaikkakoulutus", "on-the-job training"],
["lähityö", "on-site work"],
["avokonttori", "open-plan office"],
["perehdyttäminen", "orientation"],
["ylityökorvaus", "overtime bonus"],
["osa-aikatyö", "part-time"],
["palkka", "pay, salary, wages"],
["palkankorotus", "pay rise"],
["eläke", "pension"],
["vakituinen työpaikka", "permanent job"],
["urakkatyö", "piecework"],
["virka", "post"],
["toimitilat", "premises"],
["tuotantolinja", "production line"],
["akateeminen ammatti", "profession"],
["ylennys", "promotion"],
["pätevöityä", "qualify"],
["etäkokous", "remote meeting"],
["etätyö", "remote work"],
["irtisanoutua, erota", "resign, quit"],
["jäädä eläkkeelle", "retire"],
["eläköityminen", "retirement"],
["työvuorolista", "rota"],
["palkanlisä", "salary increment"],
["palvelualat", "service industries"],
["vuorotyö", "shift work"],
["pätkätyö, väliaikainen työ, keikkatyö", "short-term contract, temporary job"],
["sairausloma", "sick leave"],
["lakko", "strike"],
["valvoa, ohjata, johtaa", "supervise"],
["ammattiyhdistys, palkansaajajärjestö", "trade union"],
["työttömyys", "unemployment"],
["työttömyyskorvaus", "unemployment benefit, dole (money) (BrE)"],
["vapaaehtoistyö", "volunteering, volunteer work"],
["työolosuhteet", "work conditions"],
["työsopimus", "work contract"],
["työaika", "working hours"],
["työharjoittelu", "work practice, internship"],
["tehdä ylitöitä", "work overtime"],
["tehdä vuorotyötä", "work shifts"],
["nollatuntisopimus", "zero-hour contract"],
["tili", "account"],
["pankkiautomaatti", "ATM, automated teller machine"],
["saldo", "balance"],
["budjetti, tulo- ja menoarvio", "budget"],
["käteinen", "cash"],
["velka", "debt"],
["tallettaa", "deposit"],
["käsiraha, vakuus", "deposit, down payment"],
["kulu, meno", "expense"],
["rahoittaa, rahoitus", "finance"],
["tulovero", "income tax"],
["osamaksu", "instalment payment"],
["korko", "interest"],
["asuntolaina", "mortgage"],
["ylittää tili", "overdraw"],
["pikavippi", "payday loan"],
["kuitti", "receipt"],
["tilitapahtuma", "transaction"],
["varallisuus", "wealth"],
["nosto", "withdrawal"],
["omaisuus, varat", "assets"],
["joukkovelkakirja", "bond"],
["romahdus", "crash"],
["osinko", "dividend"],
["sijoittaa", "invest"],
["sijoitus", "investment"],
["sijoitusrahasto", "investment fund, mutual fund"],
["kiinteistö, omaisuus", "property"],
["osake", "share"],
["osakas, osakkeenomistaja", "shareholder"],
["pörssi", "stock market"],
["osakekanta, arvopaperit", "stocks"],
["käydä kauppaa, kaupankäynti", "trade"],
["maksukyvytön, vararikossa", "bankrupt"],
["konkurssi", "bankruptcy"],
["pääoma", "capital"],
["veloittaa, veloitus", "charge"],
["kuluttaja", "consumer"],
["kulutus", "consumption"],
["rahayksikkö, valuutta", "currency"],
["lama", "depression"],
["taloustiede", "economics"],
["talous", "economy"],
["kauppasaarto", "embargo"],
["kauppatavara", "goods"],
["inflaatio", "inflation"],
["lasku, laskuttaa", "invoice"],
["markkinoida, markkina(t)", "market"],
["taantuma", "recession"],
["palauttaa, takaisinmaksu", "refund"],
["liikevaihto", "revenue"],
["arvonlisävero", "value added tax, VAT"],
["(nopea) nousukausi", "boom"],
["härkämarkkina, pitkä nousukausi", "bull market"],
["pankkikortti", "debit card"],
["alijäämä", "deficit"],
["laskusuhdanne", "downturn"],
["viedä maasta, vienti", "export"],
["tappiolla", "in the red"],
["tappio", "loss"],
["netto", "net"],
["tarjonta", "supply"],
["(nopea) laskukausi", "slump"],
["karhumarkkina, pitkä laskukausi", "bear market"],
["luottokortti", "credit card"],
["ylijäämä", "surplus"],
["noususuhdanne", "upturn"],
["tuoda maahan, maahantuonti", "import"],
["voitolla", "in the black"],
["tuotto, voitto", "gain, profit"],
["brutto", "gross"],
["kysyntä", "demand"],



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