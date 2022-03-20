---
title: "Testi, testi, flashcard"
date: 2021-8-13
draft: false
type: page
layout: tehtava
---

{{< rawhtml >}}
<!DOCTYPE html>
 <body>
  <div id="cardArea"></div>
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
 height: 30vw;
 margin:auto;
 margin-top:80px;
 border:3px solid #ABB7B7;
 border-radius:5px;
 position:relative;
 overflow:hidden;
}
.card{
 width: 100%;
 height: 30vw;
 position:absolute;
 text-align:center;
 line-height:200px;
 font-size:45px;
 color:#efefef;
 font-family:Arial;
 cursor:pointer;
}

#nextButton{
 width:80px;
 text-align:center;
 font-size:20px;
 padding:10px;
 cursor:pointer;
 color:#efefef;
 margin:auto;
 margin-top:30px;
 background-color:#019875;
 border: 2px solid #1E824C;
 border-radius:5px;
 font-family:Arial;
}

#nextButton:hover{
 opacity:.6;
}

#prevButton{
 width:80px;
 text-align:center;
 font-size:20px;
 padding:10px;
 cursor:pointer;
 color:#efefef;
 margin:auto;
 margin-top:30px;
 background-color:#019875;
 border: 2px solid #1E824C;
 border-radius:5px;
 font-family:Arial;
}

#prevButton:hover{
 opacity:.6;
}
#finalMessage{
 text-align:center;
 font-size:30px;
 margin-top:30px;
 font-family:Arial;
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
    ["KANGAROO", "CANGURO"]
  ];


  beginActivity();


  function beginActivity() {
    cardState = 0;
    $("#cardArea").empty();
    $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
    $("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>');
    $("#card1").css("background-color", "#1F2937");
    $("#card2").css("background-color", "#00ABC3");
    $("#card2").css("top", "30vw");
    $("#cardArea").on("click", function() {
      if (cardState != 1) {
        cardState = 1;
        //togglePosition();
        $("#card1").animate({
          top: "-=30vw"
        }, 150, function() {
          cardState = 0;
          togglePosition();
        });
        $("#card2").animate({
          top: "-=30vw"
        }, 150, function() {
          togglePosition2();
        });
      } //if
    }); //click function
    
    $("#buttonArea").empty();
    $("#buttonArea").append('<div id="prevButton">PREV</div>');
    $("#prevButton").on("click", function() {
      if (currentQuestion > 0) {
        currentQuestion--;
        beginActivity()
      }
    })
    $("#buttonArea").append('<div id="nextButton">NEXT</div>');
    $("#nextButton").on("click", function() {
      if (currentQuestion < qbank.length - 1) {
      	currentQuestion++;
        beginActivity();
      } else {
        displayFinalMessage();
      }
    }); //click function
  } //beginactivity

  function togglePosition() {
    if ($("#card1").position().top == -3030vw0) {
      $("#card1").css("top", "30vw");
    };
  } //toggle

  function togglePosition2() {
    if ($("#card2").position().top == -30vw) {
      $("#card2").css("top", "30vw");
    };
  } //toggle2

  function displayFinalMessage() {
    $("#cardArea").empty();
    $("#buttonArea").empty();
    $("#buttonArea").append('<div id="prevButton">PREV</div>');
    $("#prevButton").on("click", function() {
        currentQuestion[currentQuestion-1];
        beginActivity()
      }
    )
    $("#cardArea").append('<div id="finalMessage">Kortit loppus</div>');
  } //final message

});

</script>

{{< /rawhtml >}}