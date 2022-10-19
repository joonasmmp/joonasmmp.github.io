---
title: "Keskustelutesti: Järjestyksessä"
date: 2022-3-26
draft: false
type: page
layout: tehtava
---
{{< rawhtml >}}
  <div id="cardArea"></div>
  <div id="lukumaara"></div>
  <div id="buttonArea" class="grid grid-cols-2"></div>

<script> 
$(document).ready(function() {

  var currentQuestion = 0;
    var qbank = [
    ["What is the capital of Assyria?"],
    ["How big is big?"],
    ["Where am I?"],
    ["What's going on?"],
    ["When am I?"],
    ["What is the biggest mammal in the world?"],
  ];

  beginActivity();
  seuraava();
  edellinen();
  kortinVaihto();

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

    if (keycode === 39 && currentQuestion < qbank.length - 1) {
      currentQuestion++;
      beginActivity();
    }
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

  function edellinen() {
    $("#buttonArea").append('<div id="prevButton">Edellinen</div>');
    $("#prevButton").on("click", function() {
      if (currentQuestion > 0) {
        currentQuestion--;
        beginActivity();
      }
    })
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
  })
</script>

<style>
       #cardArea{
    width: 95%;
    height: 300px;
    margin: auto;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
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
    text-align: center;
    font-size: 1em;
    padding:10px;
    cursor: pointer;
    color: #efefef;
    margin: auto;
    background-color: #1F2937;
    border: 1px solid  #000000;
    font: inherit;
   }
   
   #prevButton{
    width: 90%;
    text-align: center;
    font-size: 1em;
    padding: 10px;
    cursor: pointer;
    color: #efefef;
    margin: auto;
    background-color: #1F2937;
    border: 1px solid  #000000;
    font: inherit;
   }
 
   #lukumaara{
     padding-top: .7em;
     padding-bottom: .7em;
     text-align: center;
     font-size: 1em;
   }
   </style>


{{< /rawhtml >}}