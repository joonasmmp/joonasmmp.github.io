---
title: "Prepositioilmaisuja: Flashcard"
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
	["__ all - ollenkaan", "at all - ollenkaan"], 
	["__ any rate - joka tapauksessa", "at any rate - joka tapauksessa"], 
	["__ a discount - alennuksella", "at a discount - alennuksella"], 
	["__ face value - sellaisenaan, suoralta kädeltä, (jättää) omaan arvoonsa", "at face value - sellaisenaan, suoralta kädeltä, (jättää) omaan arvoonsa"], 
	["__ first sight - ensi silmäyksellä", "at first sight - ensi silmäyksellä"], 
	["__ full speed - täyttä vauhtia", "at full speed - täyttä vauhtia"], 
	["__ a glance - silmäyksellä", "at a glance - silmäyksellä"], 
	["__ hand - käsillä", "at hand - käsillä"], 
	["__ last - vihdoin", "at last - vihdoin"], 
	["__ least - ainakin", "at least - ainakin"], 
	["__ a low price - halvalla", "at a low price - halvalla"], 
	["__ once - heti", "at once - heti"], 
	["__ present - nykyisin, tällä hetkellä", "at present - nykyisin, tällä hetkellä"], 
	["__ random - sattumanvaraisesti", "at random - sattumanvaraisesti"], 
	["__ the same time - samanaikaisesti", "at the same time - samanaikaisesti"], 
	["__ work - töissä", "at work - töissä"], 
  ["__ accident - vahingossa", "by accident - vahingossa"], 
	["__ air/land/sea - lentäen/maitse/meritse", "by air/land/sea - lentäen/maitse/meritse"], 
	["__ all means - kaikin mokomin", "by all means - kaikin mokomin"], 
	["__ and __ - vähitellen", "by and by - vähitellen"], 
	["__ and large - suurin piirtein", "by and large - suurin piirtein"], 
	["__ day / __ night - päivin/öin", "by day / by night - päivin/öin"], 
	["__ chance - sattumalta", "by chance - sattumalta"], 
	["__ heart - ulkomuistista", "by heart - ulkomuistista"], 
	["__ law - lain mukaan", "by law - lain mukaan"], 
	["__ mistake - erehdyksessä", "by mistake - erehdyksessä"], 
	["__ nature - luonteeltaan", "by nature - luonteeltaan"], 
	["__ no means - ei mitenkään", "by no means - ei mitenkään"], 
	["__ the way - sivumennen sanoen", "by the way - sivumennen sanoen"]
  ["__ all that - kaikesta siitä huolimatta", "for all that - kaikesta siitä huolimatta"], 
	["__ certain/sure - varmasti", "for certain/sure - varmasti"], 
	["__ example/instance - esimerkiksi", "for example/instance - esimerkiksi"], 
	["__ free - ilmaiseksi", "for free - ilmaiseksi"], 
	["__ fun - huvin vuoksi", "for fun - huvin vuoksi"], 
	["__ good - lopullisesti", "for good - lopullisesti"], 
	["__ a reason - syystä", "for a reason - syystä"], 
	["__ once - kerrankin", "for once - kerrankin"], 
	["__ sale - myytävänä", "for sale - myytävänä"],
  ["__ advance - etukäteen", "in advance - etukäteen"], 
	["__ brief - lyhyesti", "in brief - lyhyesti"], 
	["__ common - yhteistä", "in common - yhteistä"], 
	["__ debt - velkaa", "in debt - velkaa"], 
	["__ fact - itse asiassa", "in fact - itse asiassa"], 
	["__ a hurry - kiireessä", "in a hurry - kiireessä"], 
	["__ a loud/low voice - kovalla/hiljaisella äänellä", "in a loud/low voice - kovalla/hiljaisella äänellä"], 
	["__ any case - joka tapauksessa", "in any case - joka tapauksessa"], 
	["__ general - yleensä", "in general - yleensä"], 
	["__ the long run - ajan mittaan", "in the long run - ajan mittaan"], 
	["__ love - rakastunut", "in love - rakastunut"], 
	["__ office - virassa", "in office - virassa"], 
	["__ other words - toisin sanoen", "in other words - toisin sanoen"], 
	["__ my opinion - mielestäni", "in my opinion - mielestäni"], 
	["__ practice - käytännössä", "in practice - käytännössä"], 
	["__ private - yksityisesti", "in private - yksityisesti"], 
	["__ progress - käynnissä, meneillään", "in progress - käynnissä, meneillään"], 
	["__ public - julkisesti", "in public - julkisesti"], 
	["__ sight - näköpiirissä", "in sight - näköpiirissä"], 
	["__ theory - teoriassa", "in theory - teoriassa"], 
	["__ vain - turhaan", "in vain - turhaan"], 
	["__ a way - tavallaan", "in a way - tavallaan"],
  ["__ and __ - loputtomiin", "on and on - loputtomiin"], 
	["__ average - keskimäärin", "on average - keskimäärin"], 
	["__ credit - luotolla", "on credit - luotolla"], 
	["__ business - työasioissa", "on business - työasioissa"], 
	["__ holiday/vacation - lomalla", "on holiday/vacation - lomalla"], 
	["__ no account - ei missään tapauksessa", "on no account - ei missään tapauksessa"], 
	["__ offer - myytävänä, tarjouksessa", "on offer - myytävänä, tarjouksessa"], 
	["__ purpose - tahallaan", "on purpose - tahallaan"], 
	["__ a regular basis - säännöllisesti", "on a regular basis - säännöllisesti"], 
	["__ second thought(s) - tarkemmin ajatellen", "on second thought(s) - tarkemmin ajatellen"], 
	["__ strike - lakossa", "on strike - lakossa"], 
	["__ the contrary - päinvastoin", "on the contrary - päinvastoin"], 
	["__ the other hand - toisaalta", "on the other hand - toisaalta"], 
	["__ the whole - kaiken", "on the whole - kaiken"],
  ["__ all appearances - kaikesta päätellen", "to all appearances - kaikesta päätellen"], 
	["__ and fro - edestakaisin", "to and fro - edestakaisin"], 
	["__ my annoyance/horror - harmikseni, kauhukseni", "to my annoyance/horror - harmikseni, kauhukseni"], 
	["__ my delight - ilokseni", "to my delight - ilokseni"], 
	["__ my mind - mielestäni", "to my mind - mielestäni"], 
	["__ my surprise - hämmästyksekseni", "to my surprise - hämmästyksekseni"], 
	["__ my taste - minun makuuni", "to my taste - minun makuuni"], 
  ["according __ - jonkun mukaan", "according to - jonkun mukaan"], 
	["along __ - jonkun mukana, ohella", "along with - jonkun mukana, ohella"], 
	["apart __ - lukuun ottamatta", "apart from - lukuun ottamatta"], 
	["__ __ - mitä tulee", "as to/for - mitä tulee"], 
	["because __ - jonkin vuoksi, takia", "because of - jonkin vuoksi, takia"], 
	["__ means __ - jonkun avulla", "by means of - jonkun avulla"], 
	["due __ - jonkin johdosta", "due to - jonkin johdosta"], 
	["except __ - paitsi, lukuun ottamatta", "except for - paitsi, lukuun ottamatta"], 
	["__ accordance __ - jonkin mukaisesti", "in accordance with - jonkin mukaisesti,"], 
	["__ addition __ - jonkin lisäksi", "in addition to - jonkin lisäksi"], 
	["__ comparison __ - johonkin verrattuna", "in comparison with - johonkin verrattuna"], 
	["__ relation __ - suhteessa johonkin", "in relation to - suhteessa johonkin"], 
	["__ terms __ - mitä johonkin tulee", "in terms of - mitä johonkin tulee"], 
	["__ spite __ - jostakin huolimatta", "in spite of - jostakin huolimatta"], 
	["instead __ - jonkin sijasta", "instead of - jonkin sijasta"], 
	["__ account __ - jonkin vuoksi/perusteella", "on account of - jonkin vuoksi/perusteella"], 
	["__ top __ - lisäksi, päällä", "on top of - lisäksi, päällä"], 
	["owing __ - jonkin johdosta", "owing to - jonkin johdosta"], 
	["regardless __ - jostakin huolimatta", "regardless of - jostakin huolimatta"], 
	["thanks __ - jonkun ansiosta", "thanks to - jonkun ansiosta"], 
	["__ regard __ - jonkin suhteen", "with regard to - jonkin suhteen"], 
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