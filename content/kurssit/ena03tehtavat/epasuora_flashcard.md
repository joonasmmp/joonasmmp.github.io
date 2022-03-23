---
title: "Epäsuora esitys: Flashcard"
date: 2022-3-22
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
  <div id="buttonArea" class="grid grid-cols-2"></div>
 </body>
</html>

<script> 
$(document).ready(function() {

  var currentQuestion = 0;
  var qbank = [
    ['"I have been studying English for years."<br>She told me...', '"I have been studying English for years."<br>She told me she had been studying English for years.'],
    ['"Now I know reported speech rules very well."<br>He explained that...', '"Now I know reported speech rules very well."<br>He explained that then he knew reported speech rules very well.'],
    ['"Me and all my friends will ace the exam."<br>He declared that...', '"Me and all my friends will ace the exam."<br>He declared that he and his friends would ace the exam.'],
    ['"What will my parents think?"<br>My wife wondered...', '"What will my parents think?"<br>My wife wondered what her parents would think.'],
    ['"I don&apos;t like these pants."<br>Jack told me...', '"I don&apos;t like these pants."<br>Jack told me he didn&apos;t like the pants.'],
    ['"I can&apos;t wait any longer."<br>She complained...', '"I can&apos;t wait any longer."<br>She complained she couldn&apos; wait any longer.'],
    ['"What can I do for you?"<br>The waiter asked Timothy...', '"What can I do for you?"<br>The waiter asked Timothy what she could do for him.'],
    ['"If Tim is short for Timothy, is Jim short for Jimothy?"<br>Bob asked us...', '"If Tim is short for Timothy, is Jim short for Jimothy?"<br>Bob asked us that if Tim was short for Timothy, was Jim short for Jimothy?'],
    ['"Do you know Batman&apos;s real name?"<br>Commissioner Gordon asked us...', '"Do you know Batman&apos;s real name?"<br>Commissioner Gordon asked us if we knew Batman&apos;s real name.'],
    ['"Leave your coats here."<br>The waiter asked us....', '"Leave your coats here."<br>The waiter asked us to leave our coats there.'],
    ['"Don&apos;t stop me now!"<br>Freddie ordered me...', '"Don&apos;t stop me now!"<br>Freddie ordered me not to stop him now.'],
    ['"Never come here again!"<br>She told me...', '"Never come here again!"<br>She told me never to come there again.'],
    ['"You are being ridiculous!"<br>Emma told me....', '"You are being ridiculous!"<br>Emma told me I was being ridiculous.'],
    ['Käännä englanniksi&#58; Ystäväni kysyi haluaisinko opiskella hänen kanssaan.', 'Käännä englanniksi: Ystäväni kysyi haluaisinko opiskella hänen kanssaan.<br>= My friend asked me if I wanted/would like to study with him/her.'],
    ['Käännä englanniksi&#58; Opettaja halusi tietää kuinka paljon tiedämme maantieteestä.', 'Käännä englanniksi: Opettaja halusi tietää kuinka paljon tiedämme maantieteestä.<br>= The teacher wanted to know how much we knew about geography.'],
    ['Käännä englanniksi&#58; Hän kysyi meiltä mikä Kroatian pääkaupunki oli.', Käännä englanniksi: Hän kysyi meiltä mikä Kroatian pääkaupunki oli.<br>= He asked us what the capital of Croatia was.'],
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
        $("#card2").css("background-color", "#00473c")
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
