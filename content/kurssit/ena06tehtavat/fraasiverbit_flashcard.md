---
title: "Fraasiverbit: Flashcard"
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

["ask _____ = pyytää treffeille", "ask out = pyytää treffeille"],
["ask _____ = kysellä, tiedustella", "ask around = kysellä, tiedustella"],
["back _____ = perääntyä", "back away = perääntyä"],
["back _____ = antaa periksi", "back down = antaa periksi"],
["back _____ = tukea, kannattaa, kopioida", "back up = tukea, kannattaa, kopioida"],
["black _____ = pyörtyä", "black out = pyörtyä"],
["blow _____ = räjäyttää, suuttua", "blow up = räjäyttää, suuttua"],
["boil _____ _____ = tiivistyä, kiteytyä jhkn", "boil down to = tiivistyä, kiteytyä jhkn"],
["break _____ = hajota, murtua, romahtaa, eritellä, jäsentää", "break down = hajota, murtua, romahtaa, eritellä, jäsentää"],
["break _____ = murtautua, keskeyttää, totuttaa, ajaa sisään", "break in = murtautua, keskeyttää, totuttaa, ajaa sisään"],
["break _____ = murtautua", "break into = murtautua"],
["break _____ = alkaa äkillisesti", "break out = alkaa äkillisesti"],
["break _____ _____ = paeta (voimakeinoin)", "break out of = paeta (voimakeinoin)"],
["break _____ _____ = puhjeta, saada ihottuma", "break out in = puhjeta, saada ihottuma"],
["break _____ (_____) = erota", "break up (with) = erota"],
["bring _____ = kasvattaa, mainita, oksentaa", "bring up = kasvattaa, mainita, oksentaa"],
["bump _____ = tavata sattumalta, törmätä", "bump into = tavata sattumalta, törmätä"],
["burn _____ = palaa loppuun, uupua", "burn out = palaa loppuun, uupua"],
["call _____ = peruuttaa", "call off = peruuttaa"],
["calm _____ = rauhoittua", "calm down = rauhoittua"],
["carry _____ = jatkaa", "carry on = jatkaa"],
["carry _____ = toteuttaa, suorittaa", "carry out = toteuttaa, suorittaa"],
["catch _____ (_____) = saavuttaa", "catch up (with) = saavuttaa"],
["check _____ = kirjautua sisään (hotelliin), tehdä lähtöselvitys", "check in = kirjautua sisään (hotelliin), tehdä lähtöselvitys"],
["check _____ = poistua hotellista, tutkia, katsoa", "check out = poistua hotellista, tutkia, katsoa"],
["cheer _____ = piristyä, tulla paremmalle tuulelle, piristää, ilahduttaa", "cheer up = piristyä, tulla paremmalle tuulelle, piristää, ilahduttaa"],
["come _____ = löytää sattumalta, vaikuttaa, antaa itsestään vaikutelma", "come across = löytää sattumalta, vaikuttaa, antaa itsestään vaikutelma"],
["come _____ = hajota kappaleiksi", "come apart = hajota kappaleiksi"],
["come _____ _____ = sairastua", "come down with = sairastua"],
["come _____ _____ = ehdottaa, keksiä jotakin", "come up with = ehdottaa, keksiä jotakin"],
["count _____ = luottaa jhkn", "count on = luottaa jhkn"],
["cut _____ _____ = leikata, karsia", "cut back/down on = leikata, karsia"],
["cut _____ = keskeyttää, mennä päälle, kiilata, etuilla", "cut in = keskeyttää, mennä päälle, kiilata, etuilla"],
["do _____ = tehdä uusiksi", "do over = tehdä uusiksi"],
["drag _____ = pitkittyä, venyä", "drag on = pitkittyä, venyä"],
["dress _____ = laittautua, pyntätä", "dress up = laittautua, pyntätä"],
["drop _____ = pistäytyä, käväistä", "drop in/by/over = pistäytyä, käväistä"],
["drop _____ = tiputtaa, tipauttaa, viedä, nukahtaa", "drop off = tiputtaa, tipauttaa, viedä, nukahtaa"],
["drop _____ = keskeyttää", "drop out = keskeyttää"],
["end _____ = päätyä", "end up = päätyä"],
["fall _____ = hajota, murtua", "fall apart = hajota, murtua"],
["figure _____ = tajuta, selvittää", "figure out = tajuta, selvittää"],
["fill _____ = täyttää, täydentää", "fill in/out = täyttää, täydentää"],
["find _____ = saada selville, selvittää", "find out = saada selville, selvittää"],
["get _____ (_____) = tulla toimeen jonkun kanssa", "get along/on (with) = tulla toimeen jonkun kanssa"],
["get _____ = päästä irti (arjesta), päästä vapaalle", "get away = päästä irti (arjesta), päästä vapaalle"],
["get _____ _____ = päästä kuin koira veräjästä", "get away with = päästä kuin koira veräjästä"],
["get _____ = tulla toimeen, selvitä", "get by = tulla toimeen, selvitä"],
["get _____ = tulla, saapua", "get in = tulla, saapua"],
["get _____ = nousta pois, poistaa", "get off = nousta pois, poistaa"],
["get _____ = päästä kyytiin", "get on = päästä kyytiin"],
["get _____ = lähteä", "get out = lähteä"],
["get _____ _____ = välttää", "get out of = välttää"],
["get _____ = toipua, päästä yli jostain", "get over = toipua, päästä yli jostain"],
["get _____ _____ = hankkiutua eroon", "get rid of = hankkiutua eroon"],
["get _____ _____ = saada aikaiseksi", "get (a)round to = saada aikaiseksi"],
["get _____ = tavata, kokoontua", "get together = tavata, kokoontua"],
["get _____ = nousta", "get up = nousta"],
["give _____ = antaa periksi, luovuttaa, luovuttaa jokin", "give in = antaa periksi, luovuttaa, luovuttaa jokin"],
["give _____ = lopettaa, luopua (tavasta), luovuttaa", "give up = lopettaa, luopua (tavasta), luovuttaa"],
["go _____ = kokea, käydä läpi", "go through = kokea, käydä läpi"],
["grow _____ = kasvaa aikuiseksi", "grow up = kasvaa aikuiseksi"],
["hand _____ = palauttaa, luovuttaa tarkasteltavaksi", "hand in = palauttaa, luovuttaa tarkasteltavaksi"],
["hand _____ = jakaa", "hand out = jakaa"],
["hang _____ = hengailla, oleskella", "hang out = hengailla, oleskella"],
["hang _____ = lopettaa puhelu yllättäen, lyödä luuri korvaan", "hang up = lopettaa puhelu yllättäen, lyödä luuri korvaan"],
["hold _____ = odottaa, pitää kiinni", "hold on = odottaa, pitää kiinni"],
["join _____ = värväytyä, liittyä armeijaan, tavata", "join up = värväytyä, liittyä armeijaan, tavata"],
["keep _____ = jatkaa jonkin tekemistä lopettamatta", "keep on = jatkaa jonkin tekemistä lopettamatta"],
["keep _____ = jatkaa, pitää yllä", "keep up = jatkaa, pitää yllä"],
["keep _____ _____ = pysyä mukana", "keep up with = pysyä mukana"],
["leave _____ = jättää pois/huomiotta, sivuuttaa", "leave out = jättää pois/huomiotta, sivuuttaa"],
["let _____ = pettää, aiheuttaa pettymys", "let down = pettää, aiheuttaa pettymys"],
["look _____ = pitää huolta jstk", "look after = pitää huolta jstk"],
["look _____ _____ = halveksia", "look down on = halveksia"],
["look _____ = etsiä", "look for = etsiä"],
["look _____ _____ = odottaa innolla, odottaa jännityksellä", "look forward to = odottaa innolla, odottaa jännityksellä"],
["look _____ = ottaa selvää, tutkia", "look into = ottaa selvää, tutkia"],
["look _____ = varoa", "look out = varoa"],
["look _____ = hakea tietoa, etsiä (hakuteoksesta)", "look up = hakea tietoa, etsiä (hakuteoksesta)"],
["look _____ _____ = ihailla", "look up to = ihailla"],
["make _____ = antaa anteeksi, tehdä sovinto, keksiä", "make up = antaa anteeksi, tehdä sovinto, keksiä"],
["pass _____ = kuolla", "pass away = kuolla"],
["pass _____ = pyörtyä, jakaa", "pass out = pyörtyä, jakaa"],
["pick _____ = valita (joukosta)", "pick out = valita (joukosta)"],
["pick _____ = noutaa", "pick up = noutaa"],
["point _____ = tuoda esille", "point out = tuoda esille"],
["put _____ = lykätä", "put off = lykätä"],
["put _____ = laittaa päälle", "put on = laittaa päälle"],
["put _____ = sammuttaa", "put out = sammuttaa"],
["put _____ = majoittaa", "put up = majoittaa"],
["put _____ _____ = kestää, sietää", "put up with = kestää, sietää"],
["run _____ = paeta, karata", "run away = paeta, karata"],
["run _____ = törmätä, kohdata joku sattumalta", "run into = törmätä, kohdata joku sattumalta"],
["run _____ _____ = (joltakin) loppuu jotakin", "run out of = (joltakin) loppuu jotakin"],
["show _____ = leuhkia, leveillä", "show off = leuhkia, leveillä"],
["show _____ = ilmestyä paikalle", "show up = ilmestyä paikalle"],
["sort _____ = ottaa/saada selville, panna ojennukseen, saada järjestykseen", "sort out = ottaa/saada selville, panna ojennukseen, saada järjestykseen"],
["take _____ = tulla johonkuhun, muistuttaa jotakuta", "take after = tulla johonkuhun, muistuttaa jotakuta"],
["take _____ = palauttaa", "take back = palauttaa"],
["take _____ _____ = huolehtia jostakin/ jostakusta", "take care of = huolehtia jostakin/ jostakusta"],
["take _____ = nousta, lähteä lentoon", "take off = nousta, lähteä lentoon"],
["take _____ = palkata", "take on = palkata"],
["take _____ = ottaa esiin jostain, poistaa jostakin", "take out = ottaa esiin jostain, poistaa jostakin"],
["think _____ = harkita", "think over = harkita"],
["try _____ = kokeilla", "try on = kokeilla"],
["turn _____ = hylätä, torjua", "turn down = hylätä, torjua"],
["turn _____ = ilmaantua (sovittuun aikaan/paikkaan), löytyä, ilmaantua", "turn up = ilmaantua (sovittuun aikaan/paikkaan), löytyä, ilmaantua"],
["watch _____ = varoa", "watch out = varoa"],
["wear _____ = kulua", "wear off = kulua"],
["work _____ = treenata, harjoitella, ratkaista, laskea, toimia, onnistua", "work out = treenata, harjoitella, ratkaista, laskea, toimia, onnistua"],

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