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
["archipelago", "saaristo"],
["bay, gulf", "lahti"],
["brook", "puro"],
["canal, channel", "kanaali"],
["coast", "rannikko"],
["current", "virta, virtaus"],
["delta", "suisto"],
["ditch", "oja"],
["glacier", "jäätikkö"],
["iceberg", "jäävuori"],
["island", "saari"],
["lake", "järvi"],
["ocean", "valtameri"],
["peninsula", "niemimaa"],
["pond", "lampi"],
["reef", "riutta, särkkä"],
["river", "joki"],
["sea", "meri"],
["spring", "lähde"],
["tide", "vuorovesi"],
["waterfall", "vesiputous"],
["clay", "savi"],
["continent", "maanosa"],
["desert", "autiomaa"],
["dirt, earth, soil", "multa"],
["fertile", "hedelmällinen"],
["field", "pelto"],
["fjeld, fell", "tunturi"],
["gorge, ravine", "rotko"],
["gravel", "sora"],
["hill", "mäki, kukkula"],
["interior", "sisämaa"],
["landscape, scenery", "maisema"],
["lowland", "alanko"],
["mainland", "mantere"],
["mountain range", "vuoristo"],
["mud", "muta"],
["non-arable, barren", "viljelyyn sopimaton"],
["plain", "tasanko"],
["plateau", "ylätasanko"],
["sand", "hiekka"],
["slope", "rinne"],
["soil, earth, ground", "maaperä"],
["valley", "laakso"],
["volcano", "tulivuori"],
["wilderness", "erämaa"],
["endangered (species)", "uhanalainen (laji)"],
["extinction", "sukupuuttoon kuoleminen"],
["food chain", "ravintoketju"],
["habitat", "elinympäristö"],
["indigenous", "kotoperäinen, alkuperäinen"],
["invasive species", "vieraslaji"],
["protected (species)", "rauhoitettu (laji)"],
["sanctuary", "suojelualue, rauhoitusalue"],
["species, species", "laji, lajit"],
["wildlife", "luonto; luonnonvaraiset eläimet (ja joskus myös kasvit)"],
["alga, algae", "levä, levät"],
["bloom", "kukinto, kukkia"],
["blossom", "kukka, kukkia"],
["branch", "oksa"],
["bud", "nuppu"],
["bush", "pensas"],
["cone", "käpy"],
["coniferous tree", "havupuu"],
["cyanobacteria, blue-green algae", "sinilevä"],
["deciduous tree", "lehtipuu"],
["evergreen (plant)", "ikivihreä (kasvi)"],
["flora and fauna", "kasvit ja eläimet"],
["foliage", "lehvistö, lehdet"],
["forest", "metsä"],
["grove", "metsikkö, lehto"],
["herb", "yrtti"],
["jungle", "viidakko"],
["lichen", "jäkälä"],
["meadow", "niitty"],
["moss", "sammal"],
["mushroom; fungus, fungi", "sieni, sienet"],
["needle", "neulanen"],
["plant", "kasvi; istuttaa"],
["pollen", "siitepöly"],
["sapling", "taimi"],
["seed", "siemen"],
["shrub", "varpu, pensas"],
["sprout", "verso, itu"],
["swamp, bog, marshland", "suo"],
["trunk", "runko"],
["vegetation", "kasvillisuus"],
["weed", "rikkaruoho"],
["wither", "kuihtua, lakastua"],
["amphibian", "sammakkoeläin"],
["antenna, antennae", "tuntosarvi, tuntosarvet"],
["arachnid", "hämähäkkieläin"],
["beast", "eläin, peto"],
["bird of prey", "petolintu"],
["bovine animal", "nautaeläin"],
["breed", "rotu"],
["carnivore", "lihansyöjä"],
["claw", "kynsi"],
["fin", "evä"],
["fur", "turkki"],
["game", "riista"],
["gill", "kidus"],
["herbivore", "kasvinsyöjä"],
["hibernate", "talvehtia, horrostaa"],
["hoof", "sorkka, kavio"],
["horn", "sarvi"],
["hump", "kyttyrä"],
["insect", "hyönteinen"],
["invertebrate", "selkärangaton"],
["mammal", "nisäkäs"],
["marsupial", "pussieläin"],
["migratory bird", "muuttolintu"],
["mollusc", "nilviäinen"],
["muzzle", "turpa, kuono"],
["nest", "pesä; pesiä"],
["nocturnal animal", "yöeläin"],
["offspring", "jälkeläiset"],
["paw", "tassu, käpälä"],
["reptile", "matelija"],
["rodent", "jyrsijä"],
["scavenger", "haaskaeläin"],
["shell", "kilpi, kuori"],
["tail", "häntä"],
["tentacle", "lonkero"],
["territory", "reviiri"],
["tusk", "syöksyhammas"],
["vermin", "tuhoeläin, tuholainen"],
["vertebrate", "selkärankainen"],
["whisker", "viiksikarva"],
["biofuel", "biopolttoaine"],
["biogas", "biokaasu"],
["biomass", "biomassa"],
["geothermal energy", "maalämpö"],
["hydropower", "vesivoima"],
["ocean energy", "valtamerienergia"],
["solar energy", "aurinkovoima"],
["tidal energy", "vuorovesivoima"],
["wave energy", "aaltovoima"],
["wind power", "tuulivoima"],
["wood pellet", "puupelletti"],
["charcoal", "puuhiili, antrasiitti"],
["coal", "kivihiili"],
["crude oil, petroleum", "raakaöljy"],
["fossil fuel", "fossiilinen polttoaine"],
["natural gas", "maakaasu"],
["nuclear energy", "ydinvoima"],
["peat", "turve"],
["battery", "akku"],
["blackout, power failure/cut/outage", "sähkökatko"],
["boiler", "lämminvesivaraaja, vedenlämmitin"],
["central heating", "keskuslämmitys"],
["electrical grid", "sähköverkko"],
["energy supply", "energiantuotanto, energian jakelu"],
["geothermal heating", "maalämpö"],
["oil rig", "öljynporauslautta"],
["power plant", "voimala"],
["power line", "sähkölinja"],
["radiator", "lämpöpatteri"],
["solar panel", "aurinkopaneeli"],
["wind farm", "tuulivoimapuisto"],
["wind turbine", "tuuliturbiini"],
["biodegradable", "biologisesti hajoava"],
["compost", "kompostoida, komposti"],
["contamination", "saastuminen, pilaantuminen"],
["circular economy", "kiertotalous"],
["decompose", "maatua, hajottaa"],
["dumpster", "roskalaatikko"],
["garbage, waste, trash, rubbish, litter, debris", "jäte, jätteet, roska, roskat"],
["hazardous waste", "ongelmajäte, vaarallinen jäte"],
["inorganic waste", "epäorgaaninen jäte"],
["landfill", "kaatopaikka"],
["mixed waste", "sekajäte"],
["organic waste", "orgaaninen jäte"],
["packaging", "pakkausmateriaali"],
["pollution", "saastuminen, saaste"],
["recycle", "kierrättää"],
["recyclable materials", "kierrätysmateriaali"],
["reuse", "käyttää uudelleen"],
["scraps", "ruoantähteet"],
["sewage, wastewater", "jätevesi"],
["skip", "jätelava"],
["waste incineration", "jätteenpoltto"],
["crop, harvest, yield", "sato"],
["crop rotation", "vuoroviljely"],
["dairy farm", "maitotila"],
["domestic animal", "kotieläin"],
["dung, manure", "lanta"],
["factory farming", "tehotuotanto"],
["fertility", "hedelmällisyys"],
["fertiliser", "lannoite"],
["fodder", "rehu"],
["food chain", "ravintoketju"],
["forestry", "metsänhoito"],
["genetically modified (GM)", "geenimuunneltu"],
["graze", "laiduntaa"],
["herbicide", "kasvimyrkky"],
["irrigation", "kastelu"],
["livestock", "karja"],
["local food", "lähiruoka"],
["organic", "luomu"],
["pest", "tuholainen"],
["pesticide", "tuholaismyrkky"],
["preservative", "säilöntäaine"],
["soil", "maaperä"],
["adaptation", "sopeutuminen"],
["Anthropocene", "antroposeeni, ihmisen vaikutuksen aikakausi"],
["atmosphere", "ilmakehä"],
["biodiversity", "luonnon monimuotoisuus"],
["carbon dioxide, CO2", "hiilidioksidi"],
["carbon footprint", "hiilijalanjälki"],
["carbon neutral", "hiilineutraali"],
["carbon sink", "hiilinielu"],
["carbon tax", "hiilivero"],
["climate change", "ilmastonmuutos"],
["conservation", "ympäristönsuojelu"],
["corporate accountability", "yritysvastuu"],
["eco-anxiety", "ilmastoahdistus"],
["ecological restoration", "luonnon ennallistaminen"],
["ecosystem", "ekosysteemi"],
["emissions trading, cap and trade", "päästökauppa"],
["global warming", "ilmaston lämpeneminen"],
["greenhouse effect", "kasvihuoneilmiö"],
["greenhouse gas", "kasvihuonekaasu"],
["green transition", "vihreä siirtymä"],
["greenwash", "viherpesu"],
["intergenerational equity", "sukupolvien välinen tasa-arvo"],
["methane", "metaani"],
["mitigation", "lieventäminen"],
["offsetting", "kompensaatio, hyvitys"],
["solar irradiance", "auringon säteily"],
["sustainability", "kestävyys"],
["sustainable development", "kestävä kehitys"],
["tipping point", "keikahduspiste, kriittinen piste"],
["algal bloom", "leväkukinta"],
["Arctic shrinkage", "arktisen alueen kutistuminen"],
["avalanche", "lumivyöry"],
["biodiversity loss", "luontokato"],
["blizzard", "lumimyrsky"],
["coral bleaching", "korallien vaaleneminen"],
["cyclone, hurricane, typhoon", "trooppinen hirmumyrsky"],
["deforestation", "metsäkato"],
["desertification", "aavikoituminen"],
["drought", "kuivuus"],
["earthquake", "maanjäristys"],
["eutrophication", "rehevöityminen"],
["heatwave", "helleaalto"],
["flood", "tulva"],
["landslide", "maanvyöry"],
["ocean acidification", "merien happamoituminen"],
["ozone depletion", "otsonikato"],
["sea level rise", "merenpinnan nousu"],
["volcanic eruption", "tulivuorenpurkaus"],
["wildfire", "maastopalo"],
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