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
    ['Tämä on Travisin uusi Jaguar.', 'Tämä on Travisin uusi Jaguar.<br>This is Travis'(s) new Jaguar'],
    ['Auton vaihdelaatikko on rikki.', 'Auton vaihdelaatikko on rikki.<br>The gearbox of this car is broken.'],
    ['Se on tämän auton uusi malli.', 'Se on tämän auton uusi malli.<br>It is the newest model of this car.'],
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