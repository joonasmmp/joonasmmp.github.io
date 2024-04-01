---
title: "Adjektiivi + prepositio: Flashcard"
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

["absent _____ = poissa oleva, poissa", "absent from = poissa oleva, poissa"], 
["accustomed _____ = tottunut", "accustomed to = tottunut"], 
["acquainted _____ = tutustunut", "acquainted with = tutustunut"], 
["addicted _____ = riippuvainen", "addicted to = riippuvainen"], 
["afraid _____ = peloissaan", "afraid of = peloissaan"], 
["ahead _____ = edellä", "ahead of = edellä"], 
["allergic _____ = allerginen", "allergic to = allerginen"], 
["amazed _____ = ällistynyt", "amazed at = ällistynyt"], 
["angry _____ = vihainen jstk", "angry at/about = vihainen jstk"], 
["angry _____ = vihainen jllek", "angry at/with = vihainen jllek"], 
["annoyed _____ = harmissaan jstk", "annoyed at/about = harmissaan jstk"], 
["annoyed _____ = harmissaan jllek", "annoyed with = harmissaan jllek"], 
["anxious _____ = huolissaan, innoissaan", "anxious about = huolissaan, innoissaan"], 
["appreciated _____ = arvostettu", "appreciated for = arvostettu"], 
["ashamed _____ = häpeissään", "ashamed of = häpeissään"], 
["associated _____ = liittynyt, yhdistetty", "associated with = liittynyt, yhdistetty"], 
["astonished _____ = hämmästynyt", "astonished at = hämmästynyt"], 
["attached _____ = liittynyt", "attached to = liittynyt"], 
["aware _____ = tietoinen", "aware of = tietoinen"], 
["bad _____ = huono, heikko jssk", "bad at = huono, heikko jssk"], 
["based _____ = perustuu jhk", "based on = perustuu jhk"], 
["blessed _____ = siunattu", "blessed with = siunattu"], 
["bored _____ = kyllästynyt", "bored with = kyllästynyt"], 
["busy _____ = kiireinen", "busy at/with = kiireinen"], 
["capable _____ = kykenevä", "capable of = kykenevä"], 
["careful _____ = varovainen", "careful with = varovainen"], 
["certain _____ = varma", "certain of = varma"], 
["characteristic _____ = luonteenomainen", "characteristic of = luonteenomainen"], 
["concerned _____ = huolissaan", "concerned about = huolissaan"], 
["confident _____ = varma", "confident about/of = varma"], 
["confused _____ = hämmentynyt", "confused about = hämmentynyt"], 
["connected _____ = liittyvä", "connected with/to = liittyvä"], 
["conscious _____ = tietoinen", "conscious of = tietoinen"], 
["content _____ = tyytyväinen", "content with = tyytyväinen"], 
["contrary _____ = vastoin", "contrary to = vastoin"], 
["crazy _____ = hulluna", "crazy about/for = hulluna"], 
["curious _____ = utelias", "curious about = utelias"], 
["dependent _____ = riippuvainen", "dependent on = riippuvainen"], 
["different _____ = erilainen kuin", "different from/than/to = erilainen kuin"], 
["disappointed _____ = pettynyt jhk asiaan", "disappointed about/at/with = pettynyt jhk asiaan"], 
["disappointed _____ = pettynyt jhk henkilöön", "disappointed in/with = pettynyt jhk henkilöön"], 
["doubtful _____ = epäileväinen", "doubtful about = epäileväinen"], 
["eager _____ = innokas", "eager for = innokas"], 
["eligible _____ = kelpoinen, sopiva", "eligible for = kelpoinen, sopiva"], 
["engaged _____ = kihloissa", "engaged to = kihloissa"], 
["enthusiastic _____ = innostunut", "enthusiastic about = innostunut"], 
["entitled _____ = oikeutettu", "entitled to = oikeutettu"], 
["envious _____ = kateellinen", "envious of = kateellinen"], 
["equal _____ = yhtäläinen, yhtä", "equal to = yhtäläinen, yhtä"], 
["equivalent _____ = vastaava", "equivalent to = vastaava"], 
["excited _____ = innostunut", "excited about = innostunut"], 
["experienced _____ = kokenut", "experienced in = kokenut"], 
["faithful _____ = uskollinen", "faithful to = uskollinen"], 
["familiar _____ = perehtynyt", "familiar with = perehtynyt"], 
["famous _____ = kuuluisa", "famous for = kuuluisa"], 
["fed _____ _____ = kyllästynyt", "fed up with = kyllästynyt"], 
["fond _____ = kiintynyt, ihastunut", "fond of = kiintynyt, ihastunut"], 
["frightened _____ = pelästynyt", "frightened of = pelästynyt"], 
["full _____ = täynnä", "full of = täynnä"], 
["furious _____ = raivostunut, raivoissaan", "furious about = raivostunut, raivoissaan"], 
["glad _____ = iloinen", "glad about = iloinen"], 
["good _____ = hyvä jssak", "good at = hyvä jssak"], 
["good _____ = hyväksi jllek", "good for = hyväksi jllek"], 
["grateful _____ sb _____ sth = kiitollinen jllek jstk", "grateful to sb for sth = kiitollinen jllek jstk"], 
["guilty _____ = syyllinen", "guilty of = syyllinen"], 
["happy _____ = tyytyväinen", "happy about/with = tyytyväinen"], 
["honest _____ = rehellinen jstk", "honest about = rehellinen jstk"], 
["honest _____ = rehellinen jllek", "honest with = rehellinen jllek"], 
["identical _____ = identtinen, yhtäläinen", "identical to = identtinen, yhtäläinen"], 
["ignorant _____ = tietämätön", "ignorant of = tietämätön"], 
["independent _____ = riippumaton", "independent of = riippumaton"], 
["indifferent _____ = välinpitämätön", "indifferent to = välinpitämätön"], 
["inferior _____ = huonompi", "inferior to = huonompi"], 
["innocent _____ = syytön", "innocent of = syytön"], 
["interested _____ = kiinnostunut", "interested in = kiinnostunut"], 
["involved _____ = sekaantunut", "involved in = sekaantunut"], 
["jealous _____ = mustasukkainen", "jealous of = mustasukkainen"], 
["keen _____ = innostunut", "keen on = innostunut"], 
["kind _____ = ystävällinen", "kind to = ystävällinen"], 
["known _____ = tunnettu jstk, kuuluisa", "known for = tunnettu jstk, kuuluisa"], 
["known _____ = tunnettu jllek", "known to = tunnettu jllek"], 
["late _____ = myöhässä", "late for = myöhässä"], 
["loyal _____ = uskollinen", "loyal to = uskollinen"], 
["married _____ = naimisissa", "married to = naimisissa"], 
["nervous _____ = hermostunut", "nervous about/of = hermostunut"], 
["notorious _____ = pahamaineinen", "notorious for = pahamaineinen"], 
["opposed _____ = vastaan", "opposed to = vastaan"], 
["patient _____ = kärsivällinen", "patient with = kärsivällinen"], 
["peculiar _____ = tyypillinen", "peculiar to = tyypillinen"], 
["pleased _____ = mielissään", "pleased about = mielissään"], 
["pleased _____ = tyytyväinen", "pleased with = tyytyväinen"], 
["prepared _____ = valmistautunut", "prepared for = valmistautunut"], 
["proud _____ = ylpeä", "proud of = ylpeä"], 
["ready _____ = valmis", "ready for = valmis"], 
["receptive _____ = vastaanottavainen", "receptive to = vastaanottavainen"], 
["related _____ = liittyvä, sukua", "related to = liittyvä, sukua"], 
["renowned _____ = kuuluisa", "renowned for = kuuluisa"], 
["responsible _____ = vastuussa", "responsible for = vastuussa"], 
["rude _____ = epäkohtelias, tyly", "rude to = epäkohtelias, tyly"], 
["satisfied _____ = tyytyväinen", "satisfied with = tyytyväinen"], 
["sensitive _____ = herkkä", "sensitive to = herkkä"], 
["separate _____ = erillään", "separate from = erillään"], 
["short _____ = vailla", "short of/on = vailla"], 
["similar _____ = samanlainen kuin", "similar to = samanlainen kuin"], 
["skilled _____ = ammattitaitoinen", "skilled in/at = ammattitaitoinen"], 
["slow _____ = hidas", "slow at = hidas"], 
["sorry _____ = pahoillaan jstk", "sorry about = pahoillaan jstk"], 
["sorry _____ = pahoillaan jnk puolesta", "sorry for = pahoillaan jnk puolesta"], 
["successful _____ = menestyvä", "successful in = menestyvä"], 
["suitable _____ = sopiva", "suitable for = sopiva"], 
["superior _____ = ylempi, parempi", "superior to = ylempi, parempi"], 
["talented _____ = lahjakas, taitava", "talented in/at = lahjakas, taitava"], 
["thankful _____ sb _____ sth = kiitollinen", "thankful to sb for sth = kiitollinen"], 
["tired _____ = väsynyt", "tired of = väsynyt"], 
["typical _____ = tyypillinen", "typical of = tyypillinen"], 
["used _____ = tottunut", "used to = tottunut"], 
["worried _____ = huolissaan", "worried about = huolissaan"], 
["wrong _____ = väärässä", "wrong about = väärässä"], 
["wrong _____ = vikana", "wrong with = vikana"], 

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