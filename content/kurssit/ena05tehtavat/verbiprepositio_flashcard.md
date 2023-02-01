---
title: "Prepositioilmaisuja: Flashcard"
date: 2022-1-11
draft: false
weight: 52
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
	["selittää = account _____", "selittää = account for"],
["syyttää = accuse sb _____ sth", "syyttää = accuse sb of sth"],
["sopeutua = adapt _____", "sopeutua = adapt to"],
["lisätä = add _____", "lisätä = add to"],
["myöntää = admit _____", "myöntää = admit to"],
["sopia = agree _____", "sopia = agree on"],
["suostua = agree _____", "suostua = agree to"],
["olla samaa mieltä = agree _____", "olla samaa mieltä = agree with"],
["tähdätä, pyrkiä = aim _____", "tähdätä, pyrkiä = aim at"],
["nousta johonkin määrään = amount _____", "nousta johonkin määrään = amount to"],
["pyytää anteeksi = apologise _____ sb _____ sth", "pyytää anteeksi = apologise to sb for sth"],
["viehättää, miellyttää = appeal _____", "viehättää, miellyttää = appeal to"],
["hakea (työpaikkaa) = apply _____", "hakea (työpaikkaa) = apply for"],
["hakea (opiskelupaikkaa) = apply _____", "hakea (opiskelupaikkaa) = apply to"],
["hyväksyä = approve _____", "hyväksyä = approve of"],
["väitellä, riidellä = argue _____", "väitellä, riidellä = argue about/over"],
["saapua (esim. rakennuksiin) = arrive _____", "saapua (esim. rakennuksiin) = arrive at"],
["saapua (maihin ja kaupunkeihin) = arrive _____", "saapua (maihin ja kaupunkeihin) = arrive in"],
["kysyä, tiedustella = ask _____", "kysyä, tiedustella = ask about"],
["pyytää = ask sb _____ sth", "pyytää = ask sb for sth"],
["kieltää, antaa porttikielto = ban _____", "kieltää, antaa porttikielto = ban from"],
["perustua, pohjautua = be based _____", "perustua, pohjautua = be based on"],
["uskoa = believe _____", "uskoa = believe in"],
["kuulua = belong _____", "kuulua = belong to"],
["hyötyä = benefit _____", "hyötyä = benefit from"],
["syyttää = blame sb _____ sth", "syyttää = blame sb for sth"],
["syyttää = blame sth _____ sb", "syyttää = blame sth on sb"],
["välittää, piitata = care _____", "välittää, piitata = care about"],
["välittää, pitää, hoitaa = care _____", "välittää, pitää, hoitaa = care for"],
["keskittyä = centre _____", "keskittyä = centre around/on"],
["syyttää = charge _____", "syyttää = charge with"],
["tapahtua samaan aikaan = coincide _____", "tapahtua samaan aikaan = coincide with"],
["törmätä = collide _____", "törmätä = collide with"],
["kommentoida = comment _____", "kommentoida = comment on"],
["verrata = compare _____", "verrata = compare to/with"],
["valittaa = complain _____", "valittaa = complain about"],
["lausua kohteliaisuus / kehua = compliment sb _____ sth", "lausua kohteliaisuus / kehua = compliment sb on sth"],
["keskittyä = concentrate _____", "keskittyä = concentrate on"],
["onnitella = congratulate sb _____ sth", "onnitella = congratulate sb on sth"],
["yhdistää = connect _____", "yhdistää = connect with/to"],
["koostua = consist _____", "koostua = consist of"],
["saada vakuuttuneeksi = convince sb _____ sth", "saada vakuuttuneeksi = convince sb of sth"],
["selviytyä/kestää = cope _____", "selviytyä/kestää = cope with"],
["olla peräisin = date _____ / date back _____", "olla peräisin = date from / date back to"],
["käydä kauppaa = deal _____", "käydä kauppaa = deal in"],
["käsitellä, olla tekemisissä = deal _____", "käsitellä, olla tekemisissä = deal with"],
["riippua = depend _____", "riippua = depend on"],
["riistää = deprive sb _____ sth", "riistää = deprive sb of sth"],
["johtaa, saada, tuottaa = derive sth _____ sth", "johtaa, saada, tuottaa = derive sth from sth"],
["kehittyä = develop _____", "kehittyä = develop into"],
["omistautua = devote oneself _____ sth/sb", "omistautua = devote oneself to sth/sb"],
["kuolla jonkun puolesta = die _____", "kuolla jonkun puolesta = die for"],
["kuolla = die _____", "kuolla = die of/from"],
["erota, olla erilainen = differ _____", "erota, olla erilainen = differ from"],
["olla eri mieltä = disagree _____ sb _____ sth", "olla eri mieltä = disagree with sb on/about/over sth"],
["paheksua/ vastustaa = disapprove _____", "paheksua/ vastustaa = disapprove of"],
["juoda malja = drink _____", "juoda malja = drink to"],
["tutustua = familiarise oneself _____", "tutustua = familiarise oneself with"],
["keskittyä = focus _____", "keskittyä = focus on"],
["kieltää = forbid _____", "kieltää = forbid from"],
["suunnata = head _____", "suunnata = head for"],
["toivoa = hope _____", "toivoa = hope for"],
["langettaa, määrätä, säätää = impose _____", "langettaa, määrätä, säätää = impose on"],
["vaatia = insist _____", "vaatia = insist on"],
["iskostaa, juurruttaa = instill _____", "iskostaa, juurruttaa = instill in"],
["sekaantua, puuttua = interfere _____", "sekaantua, puuttua = interfere in"],
["häiritä = interfere _____", "häiritä = interfere with"],
["sijoittaa = invest _____", "sijoittaa = invest in"],
["nauraa = laugh _____", "nauraa = laugh at"],
["lähteä jonnekin = leave _____", "lähteä jonnekin = leave for"],
["kuunnella = listen _____", "kuunnella = listen to"],
["kaivata, ikävöidä = long _____", "kaivata, ikävöidä = long for"],
["huolehtia, pitää huolta = look _____", "huolehtia, pitää huolta = look after"],
["katsoa = look _____", "katsoa = look at"],
["etsiä = look _____", "etsiä = look for"],
["odottaa innokkaasti = look forward _____", "odottaa innokkaasti = look forward to"],
["tutkia = look _____", "tutkia = look into"],
["erehtyä luulemaan = mistake sb _____ sth", "erehtyä luulemaan = mistake sb for sth"],
["vastustaa = object _____", "vastustaa = object to"],
["juolahtaa mieleen = occur _____", "juolahtaa mieleen = occur to"],
["leikata = operate _____", "leikata = operate on"],
["valita = opt _____", "valita = opt for"],
["osallistua = participate _____", "osallistua = participate in"],
["maksaa = pay _____", "maksaa = pay for"],
["pitää parempana, suosia = prefer sth _____ sth", "pitää parempana, suosia = prefer sth to/over sth"],
["estää = prevent sth/sb _____ sth", "estää = prevent sth/sb from sth"],
["huolehtia = provide _____", "huolehtia = provide for"],
["tarjota = provide sb _____ sth", "tarjota = provide sb with sth"],
["toipua = recover _____", "toipua = recover from"],
["viitata = refer _____", "viitata = refer to"],
["pitää jonakin = regard sb/sth _____ sth", "pitää jonakin = regard sb/sth as sth"],
["liittyä, kuulua = relate _____", "liittyä, kuulua = relate to"],
["luottaa = rely _____", "luottaa = rely on"],
["muistuttaa = remind sb _____ sth/sb", "muistuttaa = remind sb about sth/sb"],
["muistuttaa, tuoda mieleen = remind sb _____ sth/sb", "muistuttaa, tuoda mieleen = remind sb of sth/sb"],
["turvautua = resort _____", "turvautua = resort to"],
["olla seurausta / johtua = result _____", "olla seurausta / johtua = result from"],
["päätyä, johtaa = result _____", "päätyä, johtaa = result in"],
["riistää = rob sb _____ sth", "riistää = rob sb of sth"],
["lähettää hakemaan = send _____", "lähettää hakemaan = send for"],
["etsiä = search _____", "etsiä = search for"],
["väristä = shiver _____", "väristä = shiver with"],
["huutaa = shout _____", "huutaa = shout at"],
["hymyillä = smile _____", "hymyillä = smile at"],
["erikoistua = specialise _____", "erikoistua = specialise in"],
["käyttää, kuluttaa = spend (money/time) _____ sth", "käyttää, kuluttaa = spend (money/time) on sth"],
["tuijottaa = stare _____", "tuijottaa = stare at"],
["olla peräisin = stem _____", "olla peräisin = stem from"],
["takertua, pitää kiinni = stick _____", "takertua, pitää kiinni = stick to"],
["tilata = subscribe _____", "tilata = subscribe to"],
["onnistua = succeed _____", "onnistua = succeed in/at"],
["kärsiä = suffer _____", "kärsiä = suffer from"],
["huolehtia = take care _____", "huolehtia = take care of"],
["osallistua = take part _____", "osallistua = take part in"],
["kiittää = thank sb _____ sth", "kiittää = thank sb for sth"],
["ajatella = think _____", "ajatella = think about"],
["muistella = think back _____", "muistella = think back to"],
["olla jotakin mieltä, arvella, keksiä  = think _____", "olla jotakin mieltä, arvella, keksiä  = think of"],
["kääntää jollekin kielelle = translate _____", "kääntää jollekin kielelle = translate into"],
["luottaa = trust _____", "luottaa = trust in"],
["äänestää = vote _____", "äänestää = vote for"],
["odottaa = wait _____", "odottaa = wait for"],
["tarjoilla = wait _____", "tarjoilla = wait on"],
["tuhlata = waste (money/time) _____ sth/sb", "tuhlata = waste (money/time) on sth/sb"],
["kaivata = yearn _____", "kaivata = yearn for"],
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

for (var a=[],i=0;i<101;++i) a[i]=i;

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