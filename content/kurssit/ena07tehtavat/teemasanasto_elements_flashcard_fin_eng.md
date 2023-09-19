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
<button id="teema1">The Natural World</button>  <button id="teema2">Energy & Production</button>   <button id="teema3">Climate Change & Natural Disasters</button>
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
["saaristo", "archipelago"],
["lahti", "bay, gulf"],
["puro", "brook"],
["kanaali", "canal, channel"],
["rannikko", "coast"],
["virta, virtaus", "current"],
["suisto", "delta"],
["oja", "ditch"],
["jäätikkö", "glacier"],
["jäävuori", "iceberg"],
["saari", "island"],
["järvi", "lake"],
["valtameri", "ocean"],
["niemimaa", "peninsula"],
["lampi", "pond"],
["riutta, särkkä", "reef"],
["joki", "river"],
["meri", "sea"],
["lähde", "spring"],
["vuorovesi", "tide"],
["vesiputous", "waterfall"],
["savi", "clay"],
["maanosa", "continent"],
["autiomaa", "desert"],
["multa", "dirt, earth, soil"],
["hedelmällinen", "fertile"],
["pelto", "field"],
["tunturi", "fjeld, fell"],
["rotko", "gorge, ravine"],
["sora", "gravel"],
["mäki, kukkula", "hill"],
["sisämaa", "interior"],
["maisema", "landscape, scenery"],
["alanko", "lowland"],
["mantere", "mainland"],
["vuoristo", "mountain range"],
["muta", "mud"],
["viljelyyn sopimaton", "non-arable, barren"],
["tasanko", "plain"],
["ylätasanko", "plateau"],
["hiekka", "sand"],
["rinne", "slope"],
["maaperä", "soil, earth, ground"],
["laakso", "valley"],
["tulivuori", "volcano"],
["erämaa", "wilderness"],
["uhanalainen (laji)", "endangered (species)"],
["sukupuuttoon kuoleminen", "extinction"],
["ravintoketju", "food chain"],
["elinympäristö", "habitat"],
["kotoperäinen, alkuperäinen", "indigenous"],
["vieraslaji", "invasive species"],
["rauhoitettu (laji)", "protected (species)"],
["suojelualue, rauhoitusalue", "sanctuary"],
["laji, lajit", "species, species"],
["luonto; luonnonvaraiset eläimet (ja joskus myös kasvit)", "wildlife"],
["levä, levät", "alga, algae"],
["kukinto, kukkia", "bloom"],
["kukka, kukkia", "blossom"],
["oksa", "branch"],
["nuppu", "bud"],
["pensas", "bush"],
["käpy", "cone"],
["havupuu", "coniferous tree"],
["sinilevä", "cyanobacteria, blue-green algae"],
["lehtipuu", "deciduous tree"],
["ikivihreä (kasvi)", "evergreen (plant)"],
["kasvit ja eläimet", "flora and fauna"],
["lehvistö, lehdet", "foliage"],
["metsä", "forest"],
["metsikkö, lehto", "grove"],
["yrtti", "herb"],
["viidakko", "jungle"],
["jäkälä", "lichen"],
["niitty", "meadow"],
["sammal", "moss"],
["sieni, sienet", "mushroom; fungus, fungi"],
["neulanen", "needle"],
["kasvi; istuttaa", "plant"],
["siitepöly", "pollen"],
["taimi", "sapling"],
["siemen", "seed"],
["varpu, pensas", "shrub"],
["verso, itu", "sprout"],
["suo", "swamp, bog, marshland"],
["runko", "trunk"],
["kasvillisuus", "vegetation"],
["rikkaruoho", "weed"],
["kuihtua, lakastua", "wither"],
["sammakkoeläin", "amphibian"],
["tuntosarvi, tuntosarvet", "antenna, antennae"],
["hämähäkkieläin", "arachnid"],
["eläin, peto", "beast"],
["petolintu", "bird of prey"],
["nautaeläin", "bovine animal"],
["rotu", "breed"],
["lihansyöjä", "carnivore"],
["kynsi", "claw"],
["evä", "fin"],
["turkki", "fur"],
["riista", "game"],
["kidus", "gill"],
["kasvinsyöjä", "herbivore"],
["talvehtia, horrostaa", "hibernate"],
["sorkka, kavio", "hoof"],
["sarvi", "horn"],
["kyttyrä", "hump"],
["hyönteinen", "insect"],
["selkärangaton", "invertebrate"],
["nisäkäs", "mammal"],
["pussieläin", "marsupial"],
["muuttolintu", "migratory bird"],
["nilviäinen", "mollusc"],
["turpa, kuono", "muzzle"],
["pesä; pesiä", "nest"],
["yöeläin", "nocturnal animal"],
["jälkeläiset", "offspring"],
["tassu, käpälä", "paw"],
["matelija", "reptile"],
["jyrsijä", "rodent"],
["haaskaeläin", "scavenger"],
["kilpi, kuori", "shell"],
["häntä", "tail"],
["lonkero", "tentacle"],
["reviiri", "territory"],
["syöksyhammas", "tusk"],
["tuhoeläin, tuholainen", "vermin"],
["selkärankainen", "vertebrate"],
["viiksikarva", "whisker"],
["biopolttoaine", "biofuel"],
["biokaasu", "biogas"],
["biomassa", "biomass"],
["maalämpö", "geothermal energy"],
["vesivoima", "hydropower"],
["valtamerienergia", "ocean energy"],
["aurinkovoima", "solar energy"],
["vuorovesivoima", "tidal energy"],
["aaltovoima", "wave energy"],
["tuulivoima", "wind power"],
["puupelletti", "wood pellet"],
["puuhiili, antrasiitti", "charcoal"],
["kivihiili", "coal"],
["raakaöljy", "crude oil, petroleum"],
["fossiilinen polttoaine", "fossil fuel"],
["maakaasu", "natural gas"],
["ydinvoima", "nuclear energy"],
["turve", "peat"],
["akku", "battery"],
["sähkökatko", "blackout, power failure/cut/outage"],
["lämminvesivaraaja, vedenlämmitin", "boiler"],
["keskuslämmitys", "central heating"],
["sähköverkko", "electrical grid"],
["energiantuotanto, energian jakelu", "energy supply"],
["maalämpö", "geothermal heating"],
["öljynporauslautta", "oil rig"],
["voimala", "power plant"],
["sähkölinja", "power line"],
["lämpöpatteri", "radiator"],
["aurinkopaneeli", "solar panel"],
["tuulivoimapuisto", "wind farm"],
["tuuliturbiini", "wind turbine"],
["biologisesti hajoava", "biodegradable"],
["kompostoida, komposti", "compost"],
["saastuminen, pilaantuminen", "contamination"],
["kiertotalous", "circular economy"],
["maatua, hajottaa", "decompose"],
["roskalaatikko", "dumpster"],
["jäte, jätteet, roska, roskat", "garbage, waste, trash, rubbish, litter, debris"],
["ongelmajäte, vaarallinen jäte", "hazardous waste"],
["epäorgaaninen jäte", "inorganic waste"],
["kaatopaikka", "landfill"],
["sekajäte", "mixed waste"],
["orgaaninen jäte", "organic waste"],
["pakkausmateriaali", "packaging"],
["saastuminen, saaste", "pollution"],
["kierrättää", "recycle"],
["kierrätysmateriaali", "recyclable materials"],
["käyttää uudelleen", "reuse"],
["ruoantähteet", "scraps"],
["jätevesi", "sewage, wastewater"],
["jätelava", "skip"],
["jätteenpoltto", "waste incineration"],
["sato", "crop, harvest, yield"],
["vuoroviljely", "crop rotation"],
["maitotila", "dairy farm"],
["kotieläin", "domestic animal"],
["lanta", "dung, manure"],
["tehotuotanto", "factory farming"],
["hedelmällisyys", "fertility"],
["lannoite", "fertiliser"],
["rehu", "fodder"],
["ravintoketju", "food chain"],
["metsänhoito", "forestry"],
["geenimuunneltu", "genetically modified (GM)"],
["laiduntaa", "graze"],
["kasvimyrkky", "herbicide"],
["kastelu", "irrigation"],
["karja", "livestock"],
["lähiruoka", "local food"],
["luomu", "organic"],
["tuholainen", "pest"],
["tuholaismyrkky", "pesticide"],
["säilöntäaine", "preservative"],
["maaperä", "soil"],
["sopeutuminen", "adaptation"],
["antroposeeni, ihmisen vaikutuksen aikakausi", "Anthropocene"],
["ilmakehä", "atmosphere"],
["luonnon monimuotoisuus", "biodiversity"],
["hiilidioksidi", "carbon dioxide, CO2"],
["hiilijalanjälki", "carbon footprint"],
["hiilineutraali", "carbon neutral"],
["hiilinielu", "carbon sink"],
["hiilivero", "carbon tax"],
["ilmastonmuutos", "climate change"],
["ympäristönsuojelu", "conservation"],
["yritysvastuu", "corporate accountability"],
["ilmastoahdistus", "eco-anxiety"],
["luonnon ennallistaminen", "ecological restoration"],
["ekosysteemi", "ecosystem"],
["päästökauppa", "emissions trading, cap and trade"],
["ilmaston lämpeneminen", "global warming"],
["kasvihuoneilmiö", "greenhouse effect"],
["kasvihuonekaasu", "greenhouse gas"],
["vihreä siirtymä", "green transition"],
["viherpesu", "greenwash"],
["sukupolvien välinen tasa-arvo", "intergenerational equity"],
["metaani", "methane"],
["lieventäminen", "mitigation"],
["kompensaatio, hyvitys", "offsetting"],
["auringon säteily", "solar irradiance"],
["kestävyys", "sustainability"],
["kestävä kehitys", "sustainable development"],
["keikahduspiste, kriittinen piste", "tipping point"],
["leväkukinta", "algal bloom"],
["arktisen alueen kutistuminen", "Arctic shrinkage"],
["lumivyöry", "avalanche"],
["luontokato", "biodiversity loss"],
["lumimyrsky", "blizzard"],
["korallien vaaleneminen", "coral bleaching"],
["trooppinen hirmumyrsky", "cyclone, hurricane, typhoon"],
["metsäkato", "deforestation"],
["aavikoituminen", "desertification"],
["kuivuus", "drought"],
["maanjäristys", "earthquake"],
["rehevöityminen", "eutrophication"],
["helleaalto", "heatwave"],
["tulva", "flood"],
["maanvyöry", "landslide"],
["merien happamoituminen", "ocean acidification"],
["otsonikato", "ozone depletion"],
["merenpinnan nousu", "sea level rise"],
["tulivuorenpurkaus", "volcanic eruption"],
["maastopalo", "wildfire"]

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
    currentQuestion = 128;
    beginActivity();
    })
    $("#teema3").on("mousedown", function(){
    currentQuestion = 202;
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