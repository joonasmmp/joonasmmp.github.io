---
title: "Fraasiverbit: Flashcard"
date: 2022-1-11
draft: false
type: page
layout: tehtava
---
{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/flashcard1.css"/>
<html>
 <body>
  <div id="cardArea"></div>
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
["add ___ - käydä järkeen", "add up - käydä järkeen"],
["allow ___ - ottaa huomioon, varautua", "allow for - ottaa huomioon, varautua"],
["angle ___ - kalastella, tavoitella jotain ilmaisematta sitä suoraan", "angle for - kalastella, tavoitella jotain ilmaisematta sitä suoraan"],
["appeal ___ - vedota, valittaa päätöksestä", "appeal to - vedota, valittaa päätöksestä"],
["bank ___ - luottaa (jhkin)	", "bank on - luottaa (jhkin) "],
["bear ___ ___ - vyöryä, lähestyä uhkaavasti ja nopeasti	", "bear down on/upon - vyöryä, lähestyä uhkaavasti ja nopeasti "],
["beef ___ - vahvistaa	", "beef up - vahvistaa "],
["bite ___ - tukahduttaa, nieleskellä	", "bite back - tukahduttaa, nieleskellä  "],
["boot ___ - käynnistää	", "boot up - käynnistää  "],
["bounce ___ - pallotella, pohtia	", "bounce off - pallotella, pohtia "],
["bow ___ - erota, lopettaa	", "bow out - erota, lopettaa "],
["break ___ - irrottautua	", "break away - irrottautua  "],
["bring ___ - lannistaa, masentaa	", "bring down - lannistaa, masentaa  "],
["bristle ___ - kimmastua, kiukustua	", "bristle at - kimmastua, kiukustua "],
["bristle ___ - olla täynnä (jotakin)	", "bristle with - olla täynnä (jotakin)  "],
["brush ___ ___ - verestää, parantaa	", "brush up (on) - verestää, parantaa  "],
["call ___ - soitella ympäriinsä, selvitellä", "call around - soitella ympäriinsä, selvitellä"],
["call ___ - kääntyä jnkn puoleen (ja kehottaa tekemään jtak) / käydä tapaamassa", "call on - kääntyä jnkn puoleen (ja kehottaa tekemään jtak) / käydä tapaamassa"],
["call ___ - paljastaa", "call out - paljastaa"],
["not care ___ - olla pitämättä jostakin", "not care for - olla pitämättä jostakin"],
["chime ___ - sanoa sanottavansa, osallistua", "chime in - sanoa sanottavansa, osallistua"],
["chip ___ - auttaa, osallistua", "chip in - auttaa, osallistua"],
["clam ___ - olla hiljaa, vaieta", "clam up - olla hiljaa, vaieta"],
["clamp ___ ___ - puuttua", "clamp down on - puuttua"],
["come ___ - ilmoittautua / todistaa (rikoksesta), uskaltautua kertomaan jostakin", "come forward - ilmoittautua / todistaa (rikoksesta), uskaltautua kertomaan jostakin"],
["crack ___ (on) - ryhtyä (ankariin) toimenpiteisiin", "crack down (on) - ryhtyä (ankariin) toimenpiteisiin"],
["cut ___ - katkaista, keskeyttää", "cut off - katkaista, keskeyttää"],
["cut ___ - jättää pois", "cut out - jättää pois"],
["die ___ - hiipua, laantua", "die down - hiipua, laantua"],
["do ___ ___ - tehdä loppu, poistaa", "do away with - tehdä loppu, poistaa"],
["do ___ - pärjätä ilman", "do without - pärjätä ilman"],
["draw ___ - laatia (dokumentti)", "draw up - laatia (dokumentti)"],
["fall ___ ___ - turvautua, tukeutua", "fall back on - turvautua, tukeutua"],
["fall ___ - epäonnistua", "fall through - epäonnistua"],
["fawn ___ - pokkuroida, myötäillä", "fawn over - pokkuroida, myötäillä"],
["fit ___ - sopia (joukkoon)", "fit in - sopia (joukkoon)"],
["flip ___ - menettää malttinsa, raivostua", "flip out - menettää malttinsa, raivostua"],
["float ___ - liikkua, leijua, levitä", "float around - liikkua, leijua, levitä"],
["follow ___ - seurata", "follow up - seurata"],
["get ___ - saada viesti perille", "get across/over - saada viesti perille"],
["get ___ - pyrkiä, ajaa takaa", "get at - pyrkiä, ajaa takaa"],
["get ___ ___ - kostaa", "get back at - kostaa"],
["get ___ ___ (something) - jatkaa, edetä", "get on with (something) - jatkaa, edetä"],
["get ___ well ___ (somebody) - tulla toimeen, tulla juttuun", "get on well with (somebody) - tulla toimeen, tulla juttuun"],
["give ___ - paljastaa / luovuttaa morsian", "give away - paljastaa / luovuttaa morsian"],
["give ___ - jakaa", "give out - jakaa"],
["go ___ - lähestyä, ryhtyä toimeen", "go about - lähestyä, ryhtyä toimeen"],
["go ___ ___ - suostua", "go along with - suostua"],
["go ___ ___ - perua, rikkoa (lupaus)", "go back on - perua, rikkoa (lupaus)"],
["go ___ - käydä läpi, tarkastaa", "go over - käydä läpi, tarkastaa"],
["go ___ ___ - viedä läpi, toteuttaa suunnitelma", "go through with - viedä läpi, toteuttaa suunnitelma"],
["goof ___ - pelleillä, hölmöillä", "goof around - pelleillä, hölmöillä"],
["hand ___ -	jättää, siirtää (eteenpäin) - jättää, siirtää (eteenpäin)", "hand down jättää, siirtää (eteenpäin) - jättää, siirtää (eteenpäin)"],
["hand ___ - ojentaa, luovuttaa - ojentaa, luovuttaa", "hand over ojentaa, luovuttaa - ojentaa, luovuttaa"],
["hand ___ ___ -	antaa puheenvuoro - antaa puheenvuoro", "hand over to  antaa puheenvuoro - antaa puheenvuoro"],
["hang ___ -	kestää, pysyä lujana - kestää, pysyä lujana", "hang in kestää, pysyä lujana - kestää, pysyä lujana"],
["hang ___ -	odottaa hetki - odottaa hetki", "hang on odottaa hetki - odottaa hetki"],
["hold ___ - lukea viaksi jollekulle, syyttää aiemmin tapahtuneesta - lukea viaksi jollekulle, syyttää aiemmin tapahtuneesta", "hold against  lukea viaksi jollekulle, syyttää aiemmin tapahtuneesta - lukea viaksi jollekulle, syyttää aiemmin tapahtuneesta"],
["iron ___ - selvittää, ratkaista - selvittää, ratkaista	", "iron out  selvittää, ratkaista - selvittää, ratkaista "],
["keep ___ - keep down	hillitä, pitää alhaalla / olla hiljaa", "keep down - keep down hillitä, pitää alhaalla / olla hiljaa"],
["kick ___ - aloittaa, alkaa, käynnistyä", "kick off - aloittaa, alkaa, käynnistyä"],
["kick ___ - heittää ulos, häätää", "kick out - heittää ulos, häätää"],
["lay ___ - lomauttaa, irtisanoa", "lay off - lomauttaa, irtisanoa"],
["let ___ - paljastaa (tietoa)", "let on - paljastaa (tietoa)"],
["lighten ___ - ottaa rennommin", "lighten up - ottaa rennommin"],
["look ___ - katsoa sivusta", "look on - katsoa sivusta"],
["mull ___ - miettiä, pohtia", "mull over - miettiä, pohtia"],
["narrow ___ - rajoittaa, kaventaa", "narrow down - rajoittaa, kaventaa"],
["nod ___ - nukahtaa", "nod off - nukahtaa"],
["own ___ ___ - myöntää, tunnustaa", "own up (to) - myöntää, tunnustaa"],
["plan ___ - olettaa, odottaa", "plan on - olettaa, odottaa"],
["plod ___ - junnata, edetä hitaasti", "plod along - junnata, edetä hitaasti"],
["pull ___ - onnistua", "pull off - onnistua"],
["pull ___ - selvitä, selviytyä", "pull through - selvitä, selviytyä"],
["put ___ - moittia, väheksyä", "put down - moittia, väheksyä"],
["rip ___ - tulla huijatuksi", "rip off - tulla huijatuksi"],
["rule ___ - sulkea pois, eliminoida", "rule out - sulkea pois, eliminoida"],
["screw ___ -  möhliä, tyriä", "screw up -  möhliä, tyriä"],
["set ___ -  lähteä matkaan", "set off -  lähteä matkaan"],
["set ___ -  perustaa / lavastaa syylliseksi", "set up -  perustaa / lavastaa syylliseksi"],
["settle ___ -  asettua (aloilleen)", "settle down -  asettua (aloilleen)"],
["settle ___ -  tyytyä", "settle for -  tyytyä"],
["shop ___ -  kierrellä kauppoja", "shop around -  kierrellä (kauppoja)"],
["size ___ -  arvioida", "size up -  arvioida"],
["space ___ -  uneksia, olla ajatuksissaan", "space out -  uneksia, olla ajatuksissaan"],
["stick ___ ___ -  puolustaa", "stick up for -  puolustaa"],
["tear ___ - kyynelehtiä", "tear up - kyynelehtiä"],
["tell ___ - antaa jonkun kuulla kunniansa, nuhdella", "tell off - antaa jonkun kuulla kunniansa, nuhdella"],
["wear ___ - kuluttaa, väsyä", "wear out - kuluttaa, väsyä"],
["wipe ___ - tuhota, hävittää", "wipe out - tuhota, hävittää"], 
  ];


  qbank = shufflee(qbank);
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

for (var a=[],i=0;i<89;++i) a[i]=i;

function shufflee(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
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