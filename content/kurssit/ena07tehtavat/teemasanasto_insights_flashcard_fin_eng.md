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
<button id="teema1">Environment</button>  <button id="teema2">Recycling</button>   <button id="teema3">Energy</button>
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
	["elinalue", "habitat"], 
	["geenimuunneltu", "genetically modified (GM)"], 
	["hyönteismyrkky", "insecticide"], 
	["ilmakehä", "atmosphere"], 
	["ilmastonmuutos", "climate change"], 
	["ilmaston lämpeneminen", "global warming"], 
	["kastelu", "irrigation"], 
	["kasvihuoneilmiö", "greenhouse effect"], 
	["kasvillisuus", "vegetation, flora"], 
	["kasvimyrkky", "herbicide"], 
	["kasvit ja eläimet", "flora and fauna"], 
	["kaupungistuminen", "urbanisation"], 
	["kestävä kehitys", "sustainable development"], 
	["kotieläin", "subsistence farming"], 
	["kotitarveviljely", "subsistence farming"], 
	["kotoperäinen", "indigenous"], 
	["kuolla sukupuuttoon", "become extinct, die out"], 
	["lannoite", "fertilizer"], 
	["luomu-", "organic"], 
	["luonnon monimuotoisuus", "biodiversity"], 
	["luonnonsuojelija", "environmentalist, nature activist, conservationist"], 
	["luonnonsuojelu", "conservation"], 
	["luonnossa hajoava", "biodegradable"], 
	["luontoystävällinen", "eco-friendly, environmentally friendly"], 
	["lähiruoka", "local food, locally sourced food"], 
	["maaperä", "soil, ground, land"], 
	["maatalous", "agriculture"], 
	["metsien tuhoutuminen", "deforestation"], 
	["napajäätikkö", "polar ice cap"], 
	["otsonikato", "ozone depletion"], 
	["puhtaanapito, sanitaatio", "sanitation"], 
	["päästökauppa", "emissions trading"], 
	["ravintoketju", "food chain"], 
	["rehevöityminen", "eutrophication"], 
	["reilu kauppa", "fair trade"], 
	["sadanta, sademäärä", "precipitation"], 
	["salametsästäjä", "poacher"], 
	["sato", "harvest, yield, crop"], 
	["sukupuuttoon kuoleminen", "extinction"], 
	["suojella", "conserve"], 
	["säilyttää", "preserve"], 
	["tehotuotanto", "factory farming"], 
	["tuholainen", "pest"], 
	["tuholaismyrkky", "pesticide"], 
	["tunkeutujalaji", "invasive species"], 
	["uhanalainen laji", "endangered species"], 
	["villieläimet", "wildlife"], 
	["vuoroviljely", "crop rotation"], 
	["ylikansoittuminen", "overcrowding, overpopulation"], 
	["ympäristötuhojen lieventäminen", "environmental mitigation"], 
  ["elinkaari", "lifespan"], 
	["hävittäminen", "disposal"], 
	["heittää pois", "dispose of, discard"], 
	["jätehuolto", "waste management/disposal"], 
	["jätelava", "dumpster, skip"], 
	["jätevesi", "sewage"], 
	["jätteet", "refuse, waste"], 
	["jätteidenpoltto", "incineration"], 
	["kaatopaikka", "landfill (site), dump, tip"], 
	["kadunvarsikeräys", "kerbside collection"], 
	["kertakäyttö-", "disposable"], 
	["kierrättää uuteen käyttötarkoitukseen", "repurpose, upcycle"], 
	["kierrätys", "recycling"], 
	["kierrätyspiste", "drop-off site"], 
	["kirpputori", "flea market"], 
	["kompostointi", "composting"], 
	["kotitalousjäte", "household waste, domestic waste"], 
	["käytetty", "second-hand, used"], 
	["lajitella", "sort (out), separate"], 
	["lasin-/pullonkeräyspiste", "bottle bank"], 
	["myrkyllinen jäte", "toxic waste"], 
	["ongelmajäte", "hazardous waste"], 
	["romu", "scrap, junk"], 
	["roska-astia", "(rubbish) bin (Br), trash can (Am), container (large)"], 
	["roskat", "trash (Am), garbage, rubbish, litter"], 
	["roskata", "litter"], 
	["saastuminen", "pollution"], 
	["saastunut", "polluted, contaminated"], 
	["saastuttava aine", "pollutant"], 
	["teollisuusjäte", "industrial waste"], 
	["vedenpuhdistuslaitos", "sewage (treatment) plant/works"],
  ["aaltovoima", "wave energy/power"], 
	["akku", "battery"], 
	["aurinkoenergia", "solar energy/power"], 
	["aurinkopaneeli", "solar panel"], 
	["biopolttoaine", "biofuel"], 
	["energiantuotanto", "energy supply"], 
	["fossiilinen polttoaine", "fossil fuel"], 
	["happosade", "acid rain"], 
	["hiilidioksidi", "carbon dioxide"], 
	["hiilidioksidipäästöt", "carbon emissions"], 
	["hiilijalanjälki", "carbon footprint"], 
	["hiilikompensaatio(kauppa)", "carbon offsetting"], 
	["hiilivoimala", "coal-fired power plant/station"], 
	["hybridi, risteymä", "hybrid"], 
	["maakaasu", "natural gas"], 
	["maalämpö", "geothermal energy"], 
	["merienergia", "marine energy, ocean energy"], 
	["metaani", "methane"], 
	["pato", "dam"], 
	["polttoaine", "fuel"], 
	["päästökauppa", "emissions trading"], 
	["raakaöljy", "crude oil"], 
	["sähkökatko", "blackout, brownout"], 
	["sähköverkko", "electrical grid"], 
	["tekoallas", "reservoir"], 
	["tuottaa energiaa", "generate energy"], 
	["turve", "peat"], 
	["tuulivoima", "wind power"], 
	["tuulivoimapuisto", "windfarm"], 
	["uusiutuvat energianlähteet energy sources,", "renewable energy sources, renewables"], 
	["vähentää", "cut down, reduce, decrease"], 
	["valjastaa energia käyttöön", "harness energy"], 
	["vesivoimala", "hydroelectric power plant"], 
	["virta", "current"], 
	["voimala", "power plant"], 
	["vuorovesivoima", "tidal power, tidal energy"], 
	["ydinlaskeuma", "nuclear fallout"], 
	["ydinvoima", "nuclear energy"], 
	["ydinreaktori", "nuclear reactor"], 
	["öljynporauslautta", "oil rig"], 
	["öljyvuoto", "oil spill"], 
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
    currentQuestion = 50;
    beginActivity();
    })
    $("#teema3").on("mousedown", function(){
    currentQuestion = 81;
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