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
	["habitat", "elinalue"], 
	["genetically modified (GM)", "geenimuunneltu"], 
	["insecticide", "hyönteismyrkky"], 
	["atmosphere", "ilmakehä"], 
	["climate change", "ilmastonmuutos"], 
	["global warming", "ilmaston lämpeneminen"], 
	["irrigation", "kastelu"], 
	["greenhouse effect", "kasvihuoneilmiö"], 
	["vegetation, flora", "kasvillisuus"], 
	["herbicide", "kasvimyrkky"], 
	["flora and fauna", "kasvit ja eläimet"], 
	["urbanisation", "kaupungistuminen"], 
	["sustainable development", "kestävä kehitys"], 
	["subsistence farming", "kotieläin"], 
	["subsistence farming", "kotitarveviljely"], 
	["indigenous", "kotoperäinen"], 
	["become extinct, die out", "kuolla sukupuuttoon"], 
	["fertilizer", "lannoite"], 
	["organic", "luomu-"], 
	["biodiversity", "luonnon monimuotoisuus"], 
	["environmentalist, nature activist, conservationist", "luonnonsuojelija"], 
	["conservation", "luonnonsuojelu"], 
	["biodegradable", "luonnossa hajoava"], 
	["eco-friendly, environmentally friendly", "luontoystävällinen"], 
	["local food, locally sourced food", "lähiruoka"], 
	["soil, ground, land", "maaperä"], 
	["agriculture", "maatalous"], 
	["deforestation", "metsien tuhoutuminen"], 
	["polar ice cap", "napajäätikkö"], 
	["ozone depletion", "otsonikato"], 
	["sanitation", "puhtaanapito, sanitaatio"], 
	["emissions trading", "päästökauppa"], 
	["food chain", "ravintoketju"], 
	["eutrophication", "rehevöityminen"], 
	["fair trade", "reilu kauppa"], 
	["precipitation", "sadanta, sademäärä"], 
	["poacher", "salametsästäjä"], 
	["harvest, yield, crop", "sato"], 
	["extinction", "sukupuuttoon kuoleminen"], 
	["conserve", "suojella"], 
	["preserve", "säilyttää"], 
	["factory farming", "tehotuotanto"], 
	["pest", "tuholainen"], 
	["pesticide", "tuholaismyrkky"], 
	["invasive species", "tunkeutujalaji"], 
	["endangered species", "uhanalainen laji"], 
	["wildlife", "villieläimet"], 
	["crop rotation", "vuoroviljely"], 
	["overcrowding, overpopulation", "ylikansoittuminen"], 
	["environmental mitigation", "ympäristötuhojen lieventäminen"],
    ["lifespan", "elinkaari"], 
	["disposal", "hävittäminen"], 
	["dispose of, discard", "heittää pois"], 
	["waste management/disposal", "jätehuolto"], 
	["dumpster, skip", "jätelava"], 
	["sewage", "jätevesi"], 
	["refuse, waste", "jätteet"], 
	["incineration", "jätteidenpoltto"], 
	["landfill (site), dump, tip", "kaatopaikka"], 
	["kerbside collection", "kadunvarsikeräys"], 
	["disposable", "kertakäyttö-"], 
	["repurpose, upcycle", "kierrättää uuteen käyttötarkoitukseen"], 
	["recycling", "kierrätys"], 
	["drop-off site", "kierrätyspiste"], 
	["flea market", "kirpputori"], 
	["composting", "kompostointi"], 
	["household waste, domestic waste", "kotitalousjäte"], 
	["second-hand, used", "käytetty"], 
	["sort (out), separate", "lajitella"], 
	["bottle bank", "lasin-/pullonkeräyspiste"], 
	["toxic waste", "myrkyllinen jäte"], 
	["hazardous waste", "ongelmajäte"], 
	["scrap, junk", "romu"], 
	["(rubbish) bin (Br), trash can (Am), container (large)", "roska-astia"], 
	["trash (Am), garbage, rubbish, litter", "roskat"], 
	["litter", "roskata"], 
	["pollution", "saastuminen"], 
	["polluted, contaminated", "saastunut"], 
	["pollutant", "saastuttava aine"], 
	["industrial waste", "teollisuusjäte"], 
	["sewage (treatment) plant/works", "vedenpuhdistuslaitos"], 
    ["wave energy/power", "aaltovoima"], 
	["battery", "akku"], 
	["solar energy/power", "aurinkoenergia"], 
	["solar panel", "aurinkopaneeli"], 
	["biofuel", "biopolttoaine"], 
	["energy supply", "energiantuotanto"], 
	["fossil fuel", "fossiilinen polttoaine"], 
	["acid rain", "happosade"], 
	["carbon dioxide", "hiilidioksidi"], 
	["carbon emissions", "hiilidioksidipäästöt"], 
	["carbon footprint", "hiilijalanjälki"], 
	["carbon offsetting", "hiilikompensaatio(kauppa)"], 
	["coal-fired power plant/station", "hiilivoimala"], 
	["hybrid", "hybridi, risteymä"], 
	["natural gas", "maakaasu"], 
	["geothermal energy", "maalämpö"], 
	["marine energy, ocean energy", "merienergia"], 
	["methane", "metaani"], 
	["dam", "pato"], 
	["fuel", "polttoaine"], 
	["emissions trading", "päästökauppa"], 
	["crude oil", "raakaöljy"], 
	["blackout, brownout", "sähkökatko"], 
	["electrical grid", "sähköverkko"], 
	["reservoir", "tekoallas"], 
	["generate energy", "tuottaa energiaa"], 
	["peat", "turve"], 
	["wind power", "tuulivoima"], 
	["windfarm", "tuulivoimapuisto"], 
	["renewable energy sources, renewables", "uusiutuvat energianlähteet energy sources,"], 
	["cut down, reduce, decrease", "vähentää"], 
	["harness energy", "valjastaa energia käyttöön"], 
	["hydroelectric power plant", "vesivoimala"], 
	["current", "virta"], 
	["power plant", "voimala"], 
	["tidal power, tidal energy", "vuorovesivoima"], 
	["nuclear fallout", "ydinlaskeuma"], 
	["nuclear energy", "ydinvoima"], 
	["nuclear reactor", "ydinreaktori"], 
	["oil rig", "öljynporauslautta"], 
	["oil spill", "öljyvuoto"], 
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
    currentQuestion = 55;
    beginActivity();
    })
    $("#teema3").on("mousedown", function(){
    currentQuestion = 86;
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