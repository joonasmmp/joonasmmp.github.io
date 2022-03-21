---
title: "Testi, testi, flashcard"
date: 2021-8-13
draft: true
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
    ['koira<br>koira', "GATO"],
    ["DOG", "PERRO"],
    ["HORSE", "CABALLO"],
    ["RABBIT", "CONEJO"],
    ["TIGER", "TIGRE"],
    ["KANGAROO", "CANGURO"],
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