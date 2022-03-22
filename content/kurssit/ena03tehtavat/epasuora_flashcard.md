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
    ['"What will my parents think?" My wife wondered...', '"What will my parents think?" My wife wondered what her parents would think.'],
    ['"I don't like these pants" Jack told me...', '"I don't like these pants" Jack told me he didn&apos;t like the pants.'],
    ['"I can't wait any longer" She complained...', '"I can't wait any longer" She complained she couldn\'t wait any longer.'],
    ['"What can I do for you?" The waiter asked Timothy...', '"What can I do for you?" The waiter asked Timothy what she could do for him.'],
    ['"If Tim is short for Timothy, is Jim short for Jimothy?" Bob asked us...', '"If Tim is short for Timothy, is Jim short for Jimothy?" Bob asked us that if Tim was short for Timothy, was Jim short for Jimothy?'],
    ['"Do you know Batman\'s real name?" Commissioner Gordon asked us...', '"Do you know Batman\'s real name?" Commissioner Gordon asked us if we knew Batman\'s real name.'],
    ['"Leave your coats here." The waiter asked us....', '"Leave your coats here." The waiter asked us to leave our coats there.'],
    ['"Don\'t stop me now" Freddie ordered me...', '"Don\'t stop me now" Freddie ordered me not to stop him now.'],
    ['"Never come here again!" She told me...', '"Never come here again!" She told me never to come there again.'],
    ['"You are being ridiculous!" Emma told me....', '"You are being ridiculous!" Emma told me I was being ridiculous.'],
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