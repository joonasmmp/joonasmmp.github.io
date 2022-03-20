---
title: "Genetiivi: Flashcard"
date: 2022-3-20
draft: false
type: page
layout: tehtava
---

{{< rawhtml >}}
<html>
 <body>
  <div id="cardArea"></div>
  <div id="lukumaara"></div>
  <div id="buttonArea" class="grid grid-cols-2"></div>
 </body>
</html>

<style>
html, body {
 margin: 0;
 padding: 0;
 -webkit-user-select: none;
 -moz-user-select: none;
 user-select: none;
}

#cardArea{
 width: 95%;
 height: 300px;
 margin:auto;
 margin-top:20px;
 position:relative;
 overflow:hidden;
}
.card{
 width: 100%;
 height: 300px;
 position: absolute;
 text-align: center;
 font-size: 1.3em;
 color: #efefef;
 cursor: pointer;
 padding: 1em;
 display: flex;
 justify-content: center;
 align-items: center;
}

#nextButton{
 width:90%;
 text-align:center;
 font-size: 1em;
 padding:10px;
 cursor:pointer;
 color:#efefef;
 margin:auto;
 background-color:#1F2937;
 border: 1px solid #000000;
 font: inherit;
}

#prevButton{
 width:90%;
 text-align:center;
 font-size: 1em;
 padding:10px;
 cursor:pointer;
 color:#efefef;
 margin:auto;
 background-color:#1F2937;
 border: 1px solid #000000;
 font: inherit;
}

#lukumaara{
  padding-top: .7em;
  padding-bottom: .7em;
  text-align: center;
  font-size: 1em;
}
</style>

<script> 
$(document).ready(function() {

  var currentQuestion = 0;
  var qbank = [
    ["Tämä on Travisin uusi Jaguar.", "Tämä on Travisin uusi Jaguar.<br>This is Travis'(s) new Jaguar."],
    ["Auton vaihdelaatikko on rikki.", "Auton vaihdelaatikko on rikki.<br> =The gearbox of this car is broken."],
    ["Se on tämän auton uusi malli.", "Se on tämän auton uusi malli.<br>= It is the newest model of this car."],
    ["Joten Travis ja Jack käyttävät Jackin äidin autoa", "Joten Travis ja Jack käyttävät Jackin äidin autoa.<br> =So Travis and Jack are using / use Jack's mother's car / the car of Jack's mother"],
    ["Kahdella Sheilan ystävällä on syntymäpäivät samana päivänä", "Kahdella Sheilan ystävällä on syntymäpäivät samana päivänä.<br>= Two of Sheila's friends / Two friends of Sheila's have their birthdays on the same day"],
    ["Lauantaina he ajavat ystäviensä synttärijuhlille", "Lauantaina he ajavat ystäviensä synttärijuhlille.<br>= On Saturday they will drive to their friends' birthday party / the birthday party of their friends(')"],
    ["Et saa ottaa muiden lasten leluja kysymättä.","Et saa ottaa muiden lasten leluja kysymättä.<br>=You are not allowed to take other children’s toys / the toys of other children without asking."],
    ["Naisten maajoukkue voitti Tanskan.","Naisten maajoukkue voitti Tanskan.<br>=The women’s national football team beat Denmark."],
    ["Eläintenhoitaja laittoi ruokaa kaikkien eläinten häkkeihin.","Eläintenhoitaja laittoi ruokaa kaikkien eläinten häkkeihin.<br>= The animal keeper put food in all the animals’ cages / the cages of all the animals."],
    ["Kesäloman ensimmäinen päivä on opiskelijoiden vuoden suosikkipäivä.", "Kesäloman ensimmäinen päivä on opiskelijoiden vuoden suosikkipäivä.<br>=The first day of the summer holiday is the students’ favourite day of the year."],
    ["Tuo on lankoni uusi iPad.","Tuo on lankoni uusi iPad.<br>=That is my brother-in-law’s new iPad."],
    ["New York Cityn taksien väri on keltainen.","New York Cityn taksien väri on keltainen.<br>= The colour of New York City cabs is yellow."],
    ["Minun mielestäni Mona Lisa on maailman kaunein maalaus.", "Minun mielestäni Mona Lisa on maailman kaunein maalaus.<br>= I think that Mona Lisa is the most beautiful painting in the world / the world’s most beautiful painting."],
    ["Kaikkien koulujen rehtoreilla oli kokous.", "Kaikkien koulujen rehtoreilla oli kokous.<br>=  The principals of all the schools had a meeting."],
    ["Mennään Julialle!", "Mennään Julialle!<br>= Let’s go to Julia’s (place)"],
    ["Minä jään Thomasille tänä yönä.", "Minä jään Thomasille tänä yönä.<br>= I’m staying at Thomas’(s) (place) tonight."]
    ["Hän on Smitheillä tänään.", "Hän on Smitheillä tänään.<br>= He’s staying at the Smiths’ today."],
    ["He asuvat vain kivenheiton päässä.". "He asuvat vain kivenheiton päässä.<br>= They only live a stone’s throw away."]
    ["He nimesivät kissansa erään isänsä ystävän mukaan.", "He nimesivät kissansa erään isänsä ystävän mukaan.<br>= They named the cat after a friend of their father(‘s)."],
    ["Uskotko todellakin tuon hänen tarinansa?", "Uskotko todellakin tuon hänen tarinansa?<br>= Do you really believe that story of hers?"],
    ["Kuka tahansa Nickin ystävä on myös minun ystäväni.", "Kuka tahansa Nickin ystävä on myös minun ystäväni.<br>= Any friend of Nick’s is also a friend of mine."],
    ["Voittaja saa sadan euron arvosta kirjoja.", "Voittaja saa sadan euron arvosta kirjoja.<br>= The winner will get/receive a hundred euros’ worth of books."],
    ["Näin sen tämän päivän lehdestä.", "Näin sen tämän päivän lehdestä.<br> =I saw it in today’s newspaper."],
    ["Sinun täytyy todellakin tulla ensi perjantain juhliin!", "Sinun täytyy todellakin tulla ensi perjantain juhliin!<br>= You really must come to next Friday’s party!"],
    ["Se on kolmen tunnin matka.", "Se on kolmen tunnin matka.<br>= It is a three hours’ journey / a journey of three hours."],
    ["West Ham Unitedin pelaajat ovat pelaamassa Saksassa.", "West Ham Unitedin pelaajat ovat pelaamassa Saksassa.<br>= West Ham United’s players / The players of West Ham United are playing in Germany."],
    ["Kuulimme Applen suunnitelmista konferenssissa.", "Kuulimme Applen suunnitelmista konferenssissa.<br>= We heard about Apple’s plans / the plans of Apple in the conference."],
    ["Sarvikuonon poikanen on erittäin suloinen.", "Sarvikuonon poikanen on erittäin suloinen.<br>= The rhinoceros’s baby / The baby of the rhinoceros is very cute."],
    ["Onko tuo Miriamin läppäri? – Ei, se on Harryn.", "Onko tuo Miriamin läppäri? – Ei, se on Harryn.<br>= Is that Miriam’s laptop? – No, that’s Harry’s."].
    ["Tämä on minun puhelimeni ja tuo on Samin.", "Tämä on minun puhelimeni ja tuo on Samin.<br>= This is my phone and that is Sam’s."]








  ];

beginActivity();

  function beginActivity() {
    $("#cardArea").empty();
    $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
    $("#card1").css("background-color", "#1F2937");
    $("#lukumaara").empty();
    var korttia = document.createElement('div')
    	korttia.innerHTML = currentQuestion + 1 + " / " + qbank.length;
    	document.getElementById('lukumaara').appendChild(korttia);
   }   
      
    $("#cardArea").on("click", function() {
        var parentDiv = document.getElementById("cardArea");
        var childDiv = document.getElementById("card1");
        if (parentDiv.contains(childDiv)) {
        $("#cardArea").empty()
        $("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>')
        $("#card2").css("background-color", "#00ABC3")
      	} else {
        $("#cardArea").empty()
        $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>')
        $("#card1").css("background-color", "#1F2937")
      }
      })

    $("#buttonArea").empty();
    $("#buttonArea").append('<div id="prevButton">Edellinen</div>');
    $("#prevButton").on("click", function() {
      if (currentQuestion > 0) {
        currentQuestion--;
        beginActivity();
      }
    })
    $("#buttonArea").append('<div id="nextButton">Seuraava</div>');
    $("#nextButton").on("click", function() {
      if (currentQuestion < qbank.length - 1) {
        currentQuestion++;
        beginActivity();
      }
    }); //click function
  } //beginactivity
);
</script>

{{< /rawhtml >}}