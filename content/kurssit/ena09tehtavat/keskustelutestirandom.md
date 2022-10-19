---
title: "Keskustelutesti: Random"
date: 2021-8-13
draft: false
type: page
layout: tehtava
---

{{< rawhtml >}}
<div id="cardArea"></div>

  <div id="lukumaara"></div>
  <div id="buttonArea" class="grid grid-cols-1"></div>

<div id="nappaimet" class="hidden lg:block" style="text-align:center; margin:0 auto; width:50%;"> 
</div>

<script>

$(document).ready(function() {

  var currentQuestion = 0;
  var qbank = [
	["What is the capital of Assyria?"],
  ["How big is big?"],
  ["Where am I?"],
  ["What's going on?"],
  ["When am I?"],
  ];

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && e.target === document.body) {
      e.preventDefault();
    }
  });

  document.body.onkeydown = function(event) {
    event = event || window.event;
    var keycode = event.charCode || event.keyCode;
    if (keycode === 39 && currentQuestion < qbank.length - 1) {
    currentQuestion++;
    beginActivity();
    }
  }

for (var a=[],i=0;i<5;++i) a[i]=i;

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

qbank = shufflee(qbank);

  beginActivity();
  seuraava();
  kortinVaihto();

 
 	function beginActivity() {
    $("#cardArea").empty();
    $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion] + '</div>');
    $("#card1").css("background-color", "#1F2937");
    if (currentQuestion = qbank.length + 1) {
      $("#cardArea").empty();
      $("#buttonArea").empty();
      $("#cardArea").append('<div id="done">Task done</div>');
    }
  }
  
    function restartPage() {
        window.location.reload();
   }

  function seuraava() {
    $("#buttonArea").append('<div id="nextButton">Seuraava</div>');
    $("#nextButton").on("click", function() {
      if (currentQuestion < qbank.length - 1) {
        currentQuestion++;
        beginActivity();}
      else {
      $("#cardArea").empty();
      $("#buttonArea").empty();
      $("#buttonArea").append('<div id="restartButton" onClick="refreshPage()">Aloita alusta</div>');
      $("#cardArea").append('<div id="done">Task done</div>');
      }
      }
   )
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
    width:40%;
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
   
   #restartButton{
    width: 40%;
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

   #valikko {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  #valikko button {
    background-color: #FFFFFF;
    color: black;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
  }

  .dark #valikko button {
    background: #181A1B;
    color: white;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
  }
  
  div#done {
width: 100%;
    height: 300px;
    position: absolute;
    text-align: center;
    font-size: 1.3em;
    color: black;
    cursor: pointer;
    padding: 1em;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>