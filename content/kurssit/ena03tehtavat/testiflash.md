---
title: "Testi, testi, flashcard"
date: 2021-8-13
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
 width: 80%;
 height: 300px;
 margin:auto;
 margin-top:80px;
 border:3px solid #ABB7B7;
 border-radius:5px;
 position:relative;
 overflow:hidden;
}
.card{
 width: 100%;
 height: 300px;
 position:absolute;
 text-align:center;
 line-height:200px;
 font-size:45px;
 color:#efefef;
 cursor:pointer;
}

#nextButton{
 width:40%;
 text-align:center;
 font-size: 1em;
 padding:10px;
 cursor:pointer;
 color:#efefef;
 margin:auto;
 background-color:#1F2937;
 border: 2px solid #1E824C;
 border-radius:5px;
 font: inherit;
}

#prevButton{
 width:40%;
 text-align:center;
 font-size: 1em;
 padding:10px;
 cursor:pointer;
 color:#efefef;
 margin:auto;
 background-color:#1F2937;
 border: 2px solid #1E824C;
 border-radius:5px;
 font: inherit;
}

#lukumaara{
  padding-top: 1em;
  text-align: center;
  font-size: 1em;
}
</style>

<script> 
$(document).ready(function() {

  var cardState;
  var currentQuestion = 0;
  var qbank = [
    ["CAT", "GATO"],
    ["DOG", "PERRO"],
    ["HORSE", "CABALLO"],
    ["RABBIT", "CONEJO"],
    ["TIGER", "TIGRE"],
    ["KANGAROO", "CANGURO"],
  ];

  beginActivity();

  function beginActivity() {
    cardState = 0;
    $("#cardArea").empty();
    $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
    $("#card1").css("background-color", "#1F2937");
    $("#card2").css("background-color", "#00ABC3");
    $("#card2").css("top", "300px");
    $("#lukumaara").empty();
    var korttia = document.createElement('div')
    	korttia.innerHTML = currentQuestion + 1 + " / " + qbank.length;
    	document.getElementById('lukumaara').appendChild(korttia);
    $("#cardArea").on("click", function() {
        cardState = 0
        $("#cardArea").empty()
        $("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>')
        $("#card2").css("background-color", "#00ABC3")

      } //if
    ); //click function

    $("#buttonArea").empty();
    $("#buttonArea").append('<div id="prevButton">Edellinen</div>');
    $("#prevButton").on("click", function() {
      if (currentQuestion > 0) {
        currentQuestion--;
        beginActivity()
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
});
</script>

{{< /rawhtml >}}